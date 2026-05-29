"""Post-processing for the merged Syllabus PDF.

Adds a title page, table of contents, and footers using reportlab + pypdf.
Called from gen_pdf.robot after individual page PDFs have been generated.
"""

import json
import io
from pathlib import Path
from urllib.parse import urlparse

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm, mm
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from pypdf import PdfReader, PdfWriter
from pypdf.annotations import Link
from pypdf.generic import Fit


TEAL = HexColor("#008682")
PAGE_WIDTH, PAGE_HEIGHT = A4

FONTS_DIR = Path(__file__).resolve().parent.parent / "website" / "static" / "fonts"


def _register_fonts():
    ocra_ttf = FONTS_DIR / "OCRAEXT.ttf"
    if not ocra_ttf.exists():
        from fontTools.ttLib import TTFont as FTFont
        woff = FONTS_DIR / "OCRAEXT.woff"
        ft = FTFont(str(woff))
        ft.flavor = None
        ft.save(str(ocra_ttf))
    pdfmetrics.registerFont(TTFont("OCRA", str(ocra_ttf)))


_register_fonts()


def get_version() -> str:
    versions_path = Path(__file__).resolve().parent.parent / "website" / "versions.json"
    with open(versions_path) as f:
        versions = json.load(f)
    return versions[0]


def create_title_page(version: str) -> PdfReader:
    buf = io.BytesIO()
    c = canvas.Canvas(buf, pagesize=A4)

    title = "Robot Framework®"
    subtitle = "Certified Professional (RFCP®)"
    doc_type = "Syllabus"
    copyright_text = "© Robot Framework ry"
    version_text = f"Version {version}"

    y = PAGE_HEIGHT * 0.62

    c.setFont("OCRA", 28)
    c.setFillColor(TEAL)
    c.drawCentredString(PAGE_WIDTH / 2, y, title)

    y -= 42
    c.setFont("OCRA", 20)
    c.drawCentredString(PAGE_WIDTH / 2, y, subtitle)

    y -= 60
    c.setFont("OCRA", 26)
    c.setFillColor(HexColor("#333333"))
    c.drawCentredString(PAGE_WIDTH / 2, y, doc_type)

    y -= 50
    c.setFont("OCRA", 16)
    c.setFillColor(TEAL)
    c.drawCentredString(PAGE_WIDTH / 2, y, version_text)

    # Decorative line
    y -= 30
    c.setStrokeColor(TEAL)
    c.setLineWidth(2)
    line_half = 100
    c.line(PAGE_WIDTH / 2 - line_half, y, PAGE_WIDTH / 2 + line_half, y)

    # Copyright at bottom
    c.setFont("Helvetica", 10)
    c.setFillColor(HexColor("#666666"))
    c.drawCentredString(PAGE_WIDTH / 2, 2.5 * cm, copyright_text)

    c.save()
    buf.seek(0)
    return PdfReader(buf)


def create_toc_page(
    toc_entries: list[tuple[str, int]], version: str
) -> tuple[PdfReader, list[tuple[int, tuple[float, float, float, float], int]]]:
    """Create TOC pages with link metadata.

    Returns (pdf_reader, links) where links is a list of
    (toc_page_index, rect, target_page_index) for each entry.
    rect is (x1, y1, x2, y2) in PDF coordinates.
    """
    buf = io.BytesIO()
    c = canvas.Canvas(buf, pagesize=A4)
    links: list[tuple[int, tuple[float, float, float, float], int]] = []

    left_margin = 2.5 * cm
    right_margin = PAGE_WIDTH - 2.5 * cm
    y = PAGE_HEIGHT - 3 * cm
    toc_page_idx = 0

    c.setFont("OCRA", 20)
    c.setFillColor(TEAL)
    c.drawString(left_margin, y, "Table of Contents")

    y -= 14
    c.setStrokeColor(TEAL)
    c.setLineWidth(1.5)
    c.line(left_margin, y, right_margin, y)

    y -= 30
    c.setFillColor(HexColor("#000000"))

    for title, page_num in toc_entries:
        if y < 3 * cm:
            c.showPage()
            toc_page_idx += 1
            y = PAGE_HEIGHT - 3 * cm

        c.setFont("Helvetica", 11)
        c.drawString(left_margin, y, title)

        page_str = str(page_num)
        c.drawRightString(right_margin, y, page_str)

        title_width = c.stringWidth(title, "Helvetica", 11)
        page_width = c.stringWidth(page_str, "Helvetica", 11)
        dot_start = left_margin + title_width + 5
        dot_end = right_margin - page_width - 5
        if dot_end > dot_start:
            c.setFont("Helvetica", 9)
            dots = " . " * 80
            c.saveState()
            p = c.beginPath()
            p.rect(dot_start, y - 3, dot_end - dot_start, 14)
            c.clipPath(p, stroke=0)
            c.drawString(dot_start, y, dots)
            c.restoreState()

        rect = (left_margin, y - 3, right_margin, y + 13)
        links.append((toc_page_idx, rect, page_num))

        y -= 20

    c.save()
    buf.seek(0)
    return PdfReader(buf), links


def create_footer_overlay(page_num: int, total_pages: int, version: str) -> PdfReader:
    """Create a single-page PDF with just the footer text, to overlay onto a content page."""
    buf = io.BytesIO()
    c = canvas.Canvas(buf, pagesize=A4)

    left_margin = 2 * cm
    right_margin = PAGE_WIDTH - 2 * cm
    footer_y = 1.2 * cm

    # Footer line
    line_y = footer_y + 10
    c.setStrokeColor(TEAL)
    c.setLineWidth(0.75)
    c.line(left_margin, line_y, right_margin, line_y)

    # Left: document name + version
    c.setFont("Helvetica", 8)
    c.setFillColor(HexColor("#444444"))
    c.drawString(left_margin, footer_y, f"RFCP Syllabus — Version {version}")

    # Center: copyright
    c.drawCentredString(PAGE_WIDTH / 2, footer_y, "© Robot Framework ry")

    # Right: page number
    c.drawRightString(right_margin, footer_y, f"{page_num} / {total_pages}")

    c.save()
    buf.seek(0)
    return PdfReader(buf)


def _rewrite_internal_links(writer: PdfWriter, url_to_page: dict[str, int]) -> None:
    """Rewrite localhost URI annotations to internal GoTo links."""
    from pypdf.generic import (
        ArrayObject,
        DictionaryObject,
        NameObject,
        NumberObject,
    )

    for page_idx in range(len(writer.pages)):
        page = writer.pages[page_idx]
        annots = page.get("/Annots")
        if not annots:
            continue
        for annot_ref in annots:
            annot = annot_ref.get_object()
            if annot.get("/Subtype") != "/Link":
                continue
            action = annot.get("/A")
            if not action:
                continue
            action = action.get_object()
            if str(action.get("/S")) != "/URI":
                continue
            uri = str(action.get("/URI", ""))
            parsed = urlparse(uri)
            if parsed.hostname != "localhost":
                continue
            path = parsed.path.rstrip("/")
            target_page_idx = url_to_page.get(path)
            if target_page_idx is None:
                continue
            dest = ArrayObject([
                writer.pages[target_page_idx].indirect_reference,
                NameObject("/Fit"),
            ])
            annot[NameObject("/Dest")] = dest
            del annot["/A"]


def postprocess(
    pdf_files: list[tuple[str, str]] | list[str], output_path: str
) -> str:
    """Merge individual PDFs, prepend title page + TOC, add footers, and rewrite internal links."""
    version = get_version()

    # Normalize input: accept both (path, url) tuples and plain paths
    entries: list[tuple[str, str | None]] = []
    for item in pdf_files:
        if isinstance(item, (list, tuple)):
            entries.append((str(item[0]), str(item[1])))
        else:
            entries.append((str(item), None))

    # First pass: merge all content pages and collect TOC entries + URL mapping
    content_writer = PdfWriter()
    toc_entries: list[tuple[str, int]] = []
    url_to_content_page: dict[str, int] = {}
    current_page = 1

    for pdf_path, url in entries:
        reader = PdfReader(pdf_path)
        title = Path(pdf_path).stem
        toc_entries.append((title, current_page))
        if url:
            path = urlparse(url).path.rstrip("/")
            url_to_content_page[path] = current_page
        for page in reader.pages:
            content_writer.add_page(page)
            current_page += 1

    total_content_pages = len(content_writer.pages)

    # Create front matter
    title_reader = create_title_page(version)
    title_page_count = len(title_reader.pages)

    toc_reader, _ = create_toc_page(toc_entries, version)
    toc_page_count = len(toc_reader.pages)
    front_matter_pages = title_page_count + toc_page_count

    adjusted_entries = [(title, page + front_matter_pages) for title, page in toc_entries]
    toc_reader, toc_links = create_toc_page(adjusted_entries, version)

    # Adjust URL mapping to account for front matter (0-based page index)
    url_to_page: dict[str, int] = {
        path: (page_num - 1) + front_matter_pages
        for path, page_num in url_to_content_page.items()
    }

    total_pages = front_matter_pages + total_content_pages

    # Final assembly
    writer = PdfWriter()

    for page in title_reader.pages:
        writer.add_page(page)

    for page in toc_reader.pages:
        writer.add_page(page)

    for i, page in enumerate(content_writer.pages):
        page_num = front_matter_pages + i + 1
        footer = create_footer_overlay(page_num, total_pages, version)
        page.merge_page(footer.pages[0])
        writer.add_page(page)

    # Add clickable links on TOC pages
    for toc_page_idx, rect, target_page_num in toc_links:
        writer_page_idx = title_page_count + toc_page_idx
        target_page_idx = target_page_num - 1
        link = Link(
            rect=rect,
            target_page_index=target_page_idx,
            fit=Fit.fit(),
            border=[0, 0, 0],
        )
        writer.add_annotation(page_number=writer_page_idx, annotation=link)

    # Rewrite internal localhost links to in-document GoTo links
    _rewrite_internal_links(writer, url_to_page)

    writer.write(output_path)
    return output_path
