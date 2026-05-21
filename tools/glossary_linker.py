#!/usr/bin/env python3
"""
Glossary Linker for Robot Framework RFCP Syllabus (v6 - Case-Insensitive + Plurals)

This script automatically adds links to glossary terms throughout the documentation.

NEW in v6:
- Case-insensitive matching: "variable files" links to "Variable Files"
- Smart plural/singular handling:
  * Plural text → searches plural first, then singular
  * Singular text → searches both singular and plural forms

NEW in v5:
- Excludes content inside LO blocks (:::Kx[LO-x.x.x] ... :::)
- LO blocks are extracted verbatim for numbering generation

FEATURES:
- Uses relative paths for Docusaurus compatibility  
- Excludes YAML frontmatter (---...---)
- Excludes markdown headings (# ... ## ... ### ...)
- Excludes LO content blocks (:::Kx[LO-*] ... :::)
- Only links terms in actual body content/paragraphs
- Supports Test|Task notation as approved by committee
- Case-insensitive term matching
- Intelligent plural/singular matching

This prevents glossary links from appearing in:
- Sidebar navigation (generated from headings)
- Previous/Next navigation (uses page titles)
- Table of contents
- Learning objective content blocks (used for numbering generation)
"""

import re
import os
from pathlib import Path
from typing import Dict, List, Set, Tuple
import json


class GlossaryLinker:
    def __init__(self, docs_path: str, use_relative_paths: bool = True):
        self.docs_path = Path(docs_path)
        self.use_relative_paths = use_relative_paths
        self.glossary_terms = {}
        self.aliases = {}
        self.term_variations = {}  # NEW: Store case variations and plurals
        
    def _pluralize(self, word: str) -> str:
        """
        Simple pluralization logic for English words.
        Returns the plural form of a word.
        """
        # Special cases
        irregular_plurals = {
            'library': 'libraries',
            'keyword': 'keywords',
            'variable': 'variables',
            'suite': 'suites',
            'task': 'tasks',
        }
        
        word_lower = word.lower()
        
        # Check irregular plurals (case-insensitive)
        for singular, plural in irregular_plurals.items():
            if word_lower == singular:
                # Preserve original casing pattern
                if word[0].isupper():
                    return plural.capitalize()
                return plural
        
        # Standard English pluralization rules
        if word_lower.endswith('s') or word_lower.endswith('x') or \
           word_lower.endswith('z') or word_lower.endswith('ch') or \
           word_lower.endswith('sh'):
            return word + 'es'
        elif word_lower.endswith('y') and len(word) > 1 and word[-2] not in 'aeiou':
            return word[:-1] + 'ies'
        elif word_lower.endswith('f'):
            return word[:-1] + 'ves'
        elif word_lower.endswith('fe'):
            return word[:-2] + 'ves'
        else:
            return word + 's'
    
    def _singularize(self, word: str) -> str:
        """
        Simple singularization logic for English words.
        Returns the singular form of a word (if it appears plural).
        """
        irregular_plurals = {
            'libraries': 'library',
            'keywords': 'keyword',
            'variables': 'variable',
            'suites': 'suite',
            'tasks': 'task',
        }
        
        word_lower = word.lower()
        
        # Check irregular plurals
        for plural, singular in irregular_plurals.items():
            if word_lower == plural:
                if word[0].isupper():
                    return singular.capitalize()
                return singular
        
        # Standard rules (reverse of pluralization)
        if word_lower.endswith('ies') and len(word) > 3:
            return word[:-3] + 'y'
        elif word_lower.endswith('ves'):
            if word_lower.endswith('ives'):
                return word[:-3] + 'fe'
            return word[:-3] + 'f'
        elif word_lower.endswith('ses'):
            return word[:-2]
        elif word_lower.endswith('s') and not word_lower.endswith('ss'):
            return word[:-1]
        
        return word  # Already singular or unknown
        
    def load_glossary_terms(self, glossary_data: List[Dict]) -> None:
        """
        Load glossary terms and their aliases from provided data.
        Now creates case-insensitive variations and plural forms.
        """
        for entry in glossary_data:
            term = entry['term']
            slug = self._create_slug(term)
            
            # Store the main term (canonical form)
            self.glossary_terms[term] = slug
            
            # NEW: Create variations for matching
            variations = set()
            
            # Add the exact term
            variations.add(term)
            
            # Add case variations (but link to canonical form)
            variations.add(term.lower())
            variations.add(term.upper())
            variations.add(term.title())
            
            # Add plural forms
            # For multi-word terms, pluralize the last word
            words = term.split()
            if words:
                last_word = words[-1]
                plural_last = self._pluralize(last_word)
                if plural_last != last_word:
                    plural_term = ' '.join(words[:-1] + [plural_last])
                    variations.add(plural_term)
                    variations.add(plural_term.lower())
                    variations.add(plural_term.title())
            
            # Store all variations pointing to canonical term and slug
            for variation in variations:
                if variation not in self.term_variations:
                    self.term_variations[variation.lower()] = (term, slug)
            
            # Store abbreviations as aliases
            if entry.get('abbreviation'):
                abbr = entry['abbreviation']
                self.aliases[abbr] = (term, slug)
                # Add case variations for abbreviations too
                self.term_variations[abbr.lower()] = (term, slug)
    
    def _create_slug(self, term: str) -> str:
        """
        Create a URL-safe slug from a term.
        Matches the slugify logic in GlossaryTable.tsx:
        - Convert to lowercase
        - Replace non-alphanumeric chars with hyphens
        - Remove leading/trailing hyphens
        """
        slug = term.lower()
        # Replace any non-alphanumeric character with hyphen
        slug = re.sub(r'[^a-z0-9]+', '-', slug)
        # Remove leading and trailing hyphens
        slug = re.sub(r'(^-+|-+$)', '', slug)
        return slug
    
    def _escape_for_regex(self, text: str) -> str:
        """Escape special regex characters in text."""
        return re.escape(text)
    
    def _get_relative_path(self, current_file: Path) -> str:
        """
        Get the glossary path for Docusaurus.
        Uses absolute Docusaurus path for consistency.
        """
        # For Docusaurus, always use the absolute docs path
        return '/docs/glossary'
    
    def _split_frontmatter(self, content: str) -> Tuple[str, str]:
        """
        Split YAML frontmatter from main content.
        Returns (frontmatter, main_content).
        """
        frontmatter = ""
        main_content = content
        
        # Check for YAML frontmatter (---)
        frontmatter_pattern = re.compile(r'^---\s*\n.*?\n---\s*\n', re.DOTALL)
        match = frontmatter_pattern.match(content)
        
        if match:
            frontmatter = match.group(0)
            main_content = content[match.end():]
        
        return frontmatter, main_content
    
    def _ensure_glossary_import(self, content: str) -> str:
        """
        Ensure the GlossaryTerm import is present after frontmatter.
        Returns updated content with import if needed.
        """
        import_statement = "import GlossaryTerm from '@site/src/components/Glossary/GlossaryTerm';\n\n"
        
        # Check if import already exists
        if "import GlossaryTerm" in content:
            return content
        
        # Split frontmatter and main content
        frontmatter, main_content = self._split_frontmatter(content)
        
        # Insert import after frontmatter
        return frontmatter + import_statement + main_content
    
    def _create_link_patterns(self, current_file: Path) -> List[Tuple]:
        """
        Create regex patterns for finding and replacing glossary terms.
        NOW: Case-insensitive with plural/singular support.
        
        Returns list of tuples: (pattern, canonical_term, slug, glossary_url)
        """
        patterns = []
        
        # Get the appropriate glossary URL for this file
        if self.use_relative_paths:
            glossary_url = self._get_relative_path(current_file)
        else:
            glossary_url = '/docs/glossary'
        
        # ===================================================================
        # Handle Test|Task notation FIRST (highest priority)
        # ===================================================================
        test_task_mappings = [
            ('Test|Task Setup', 'Test Setup'),
            ('Test|Task Teardown', 'Test Teardown'),
            ('Test|Task Timeout', 'Test Timeout'),
            ('Test|Task Template', 'Test Template'),
            ('Test|Task Tag', 'Test Tag'),
        ]
        
        for notation, target_term in test_task_mappings:
            if target_term in self.glossary_terms:
                slug = self.glossary_terms[target_term]
                escaped = self._escape_for_regex(notation)
                pattern = rf'(?<!\[)(?<!`)(?<!]\()(?<!\*\*)\b({escaped})\b(?!`|\]|\)|\*\*)(?!\()'
                patterns.append((pattern, notation, slug, glossary_url))
        
        # ===================================================================
        # Build list of all terms to search for (with variations)
        # ===================================================================
        terms_to_search = {}  # search_text -> (canonical_term, slug)
        
        for canonical_term, slug in self.glossary_terms.items():
            # Add the canonical term itself
            terms_to_search[canonical_term] = (canonical_term, slug)
            
            # For multi-word terms, also search for plural of last word
            words = canonical_term.split()
            if len(words) > 0:
                last_word = words[-1]
                plural_last = self._pluralize(last_word)
                
                if plural_last != last_word:
                    # Create plural version: "Variable File" -> "Variable Files"
                    plural_term = ' '.join(words[:-1] + [plural_last]) if len(words) > 1 else plural_last
                    terms_to_search[plural_term] = (canonical_term, slug)
        
        # Sort by length (longest first) to match longer terms before shorter
        sorted_terms = sorted(terms_to_search.keys(), key=len, reverse=True)
        
        # Create case-insensitive patterns for each search term
        for search_term in sorted_terms:
            canonical_term, slug = terms_to_search[search_term]
            escaped_term = self._escape_for_regex(search_term)
            
            # Case-insensitive pattern
            pattern = rf'(?<!\[)(?<!`)(?<!]\()(?<!\*\*)\b({escaped_term})\b(?!`|\]|\)|\*\*)(?!\()'
            patterns.append((pattern, canonical_term, slug, glossary_url))
        
        # Add abbreviation patterns
        for abbr, (canonical_term, slug) in self.aliases.items():
            escaped_abbr = self._escape_for_regex(abbr)
            pattern = rf'(?<!\[)(?<!`)(?<!]\()(?<!\*\*)\b({escaped_abbr})\b(?!`|\]|\)|\*\*)(?!\()'
            patterns.append((pattern, canonical_term, slug, glossary_url))
        
        return patterns
    
    def process_markdown_file(self, file_path: Path, dry_run: bool = False) -> Dict:
        """Process a single markdown file."""
        stats = {
            'file': str(file_path.relative_to(self.docs_path)),
            'terms_linked': 0,
            'modified': False,
            'changes': []
        }
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                original_content = f.read()
            
            # Split frontmatter and content
            frontmatter, content = self._split_frontmatter(original_content)
            
            # Split content into sections (headings, code, LO blocks, text)
            sections = self._split_content_sections(content)
            
            # Get link patterns for this file
            patterns = self._create_link_patterns(file_path)
            
            # Track which terms we've already linked (case-insensitive)
            already_linked = set()
            
            # Process each section
            processed_sections = []
            for section_type, section_content in sections:
                if section_type in ['code', 'heading', 'lo_block']:
                    # DON'T modify code blocks, headings, or LO blocks
                    processed_sections.append(section_content)
                else:
                    # Apply patterns to text sections only
                    modified_content = section_content
                    placeholders = {}  # Store placeholders
                    placeholder_counter = 0
                    
                    # Process each pattern
                    for pattern, canonical_term, slug, glossary_url in patterns:
                        # Find ALL case-insensitive matches
                        matches = list(re.finditer(pattern, modified_content, re.IGNORECASE))
                        
                        if matches:
                            # Process matches in reverse order to maintain string positions
                            for match in reversed(matches):
                                matched_text = match.group(1)
                                
                                # Check if we've already linked this term (case-insensitive check)
                                if matched_text.lower() not in already_linked:
                                    # Create GlossaryTerm component (preserves original casing)
                                    # Format: <GlossaryTerm term={"canonical term"}>matched text</GlossaryTerm>
                                    # Escape quotes in the term
                                    escaped_term = canonical_term.replace('\\', '\\\\').replace('"', '\\"')
                                    component = f':term[{matched_text}]{{term="{escaped_term}"}}'
                                    
                                    # Use a placeholder that won't match any pattern
                                    placeholder = f'___GLOSSARY_PLACEHOLDER_{placeholder_counter}___'
                                    placeholders[placeholder] = component
                                    placeholder_counter += 1
                                    
                                    # Replace with placeholder
                                    modified_content = (
                                        modified_content[:match.start(1)] + 
                                        placeholder + 
                                        modified_content[match.end(1):]
                                    )
                                    
                                    stats['terms_linked'] += 1
                                    stats['changes'].append({
                                        'term': matched_text,
                                        'canonical': canonical_term,
                                        'occurrences': 1
                                    })
                                    
                                    # Mark as linked (case-insensitive)
                                    already_linked.add(matched_text.lower())
                    
                    # Replace all placeholders with actual components
                    for placeholder, component in placeholders.items():
                        modified_content = modified_content.replace(placeholder, component)
                    
                    processed_sections.append(modified_content)
            
            # Reconstruct content with frontmatter
            new_content = frontmatter + ''.join(processed_sections)
            
            # Add GlossaryTerm import if terms were linked
            if stats['terms_linked'] > 0:
                new_content = self._ensure_glossary_import(new_content)
            
            # Only write if content changed and not a dry run
            if new_content != original_content and not dry_run:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                stats['modified'] = True
            else:
                stats['modified'] = False
                
        except Exception as e:
            stats['error'] = str(e)
        
        return stats
    
    def _split_content_sections(self, content: str) -> List[Tuple[str, str]]:
        """
        Split content into headings, code blocks, LO blocks, and text sections.
        
        Returns:
            List of tuples: (section_type, content)
            where section_type is 'heading', 'code', 'lo_block', or 'text'
        """
        sections = []
        lines = content.split('\n')
        
        i = 0
        while i < len(lines):
            line = lines[i]
            
            # Check for code block start (HIGHEST PRIORITY)
            if line.strip().startswith('```') or line.strip().startswith('~~~'):
                # Collect entire code block INCLUDING the fence lines
                fence = '```' if line.strip().startswith('```') else '~~~'
                code_block = [line]
                i += 1
                # Collect until we find the closing fence
                while i < len(lines):
                    code_block.append(lines[i])
                    # Check if this line is a closing fence (starts with same fence marker)
                    if lines[i].strip().startswith(fence):
                        i += 1
                        break
                    i += 1
                # Append the entire code block as one unit
                sections.append(('code', '\n'.join(code_block) + '\n'))
                continue
            
            # Check for heading (# ... ## ... ### ...)
            if line.strip().startswith('#'):
                # This is a heading - don't link terms here
                sections.append(('heading', line + '\n'))
                i += 1
                continue
            
            # Check for LO block start (:::Kx[LO-...)
            if line.strip().startswith(':::') and 'LO-' in line:
                # Collect entire LO block
                lo_block = [line]
                i += 1
                while i < len(lines):
                    lo_block.append(lines[i])
                    # LO blocks end with ::: on its own line
                    if lines[i].strip() == ':::':
                        i += 1
                        break
                    i += 1
                sections.append(('lo_block', '\n'.join(lo_block) + '\n'))
                continue
            
            # Check for inline code, existing links, GlossaryTerm components, or :term[] directives in the line
            if '`' in line or '[' in line or '<GlossaryTerm' in line or ':term[' in line:
                # Split this line more carefully
                processed_line = self._process_line_with_special_content(line)
                sections.extend(processed_line)
                i += 1
                continue
            
            # Regular text line
            sections.append(('text', line + '\n'))
            i += 1
        
        return sections
    
    def _process_line_with_special_content(self, line: str) -> List[Tuple[str, str]]:
        """
        Process a line that may contain inline code, existing links, GlossaryTerm components, or :term[] directives.
        Split it into linkable and non-linkable parts.
        """
        sections = []
        current_pos = 0
        
        # Pattern to find inline code (`...`), existing links ([...](...)  ), GlossaryTerm components, or :term[] directives
        special_pattern = re.compile(r'(`[^`]+`|\[[^\]]+\]\([^\)]+\)|<GlossaryTerm[^>]*>.*?</GlossaryTerm>|:term\[[^\]]+\](?:\{[^}]+\})?)')
        
        for match in special_pattern.finditer(line):
            # Add text before the special content
            if match.start() > current_pos:
                sections.append(('text', line[current_pos:match.start()]))
            
            # Add the special content (don't link inside it)
            sections.append(('code', match.group(0)))
            current_pos = match.end()
        
        # Add remaining text
        if current_pos < len(line):
            sections.append(('text', line[current_pos:] + '\n'))
        elif line.endswith('\n'):
            sections.append(('text', '\n'))
        
        return sections
    
    def process_all_markdown_files(self, dry_run: bool = False) -> Dict:
        """Process all markdown files in the docs directory."""
        overall_stats = {
            'total_files': 0,
            'modified_files': 0,
            'total_terms_linked': 0,
            'files': []
        }
        
        # Find all .md or .mdx files
        markdown_files = list(self.docs_path.glob('**/*.md')) + list(self.docs_path.glob('**/*.mdx'))
        
        for md_file in markdown_files:
            # Skip the glossary file itself
            if 'glossary' in md_file.name.lower():
                continue
            
            # Skip learning_objectives.md (reference table, no glossary links)
            if md_file.name.lower() == 'learning_objectives.md':
                continue
            
            overall_stats['total_files'] += 1
            file_stats = self.process_markdown_file(md_file, dry_run)
            
            if file_stats.get('modified', False):
                overall_stats['modified_files'] += 1
            
            overall_stats['total_terms_linked'] += file_stats.get('terms_linked', 0)
            overall_stats['files'].append(file_stats)
        
        return overall_stats


# ===================================================================
# GLOSSARY DATA
# ===================================================================
# This would typically be loaded from the actual glossary file,
# but for now it's hardcoded based on the syllabus content
GLOSSARY_DATA = [
    {"term": "Acceptance Testing", "abbreviation": None},
    {"term": "Adaptation Layer", "abbreviation": None},
    {"term": "Atomic Element", "abbreviation": None},
    {"term": "Automation Script", "abbreviation": None},
    {"term": "Argument", "abbreviation": None},
    {"term": "Argument Interface", "abbreviation": None},
    {"term": "Behavior-Driven Development", "abbreviation": "BDD"},
    {"term": "Behavior-Driven Specification", "abbreviation": None},
    {"term": "Built-In Variables", "abbreviation": None},
    {"term": "Command Line Interface", "abbreviation": "CLI"},
    {"term": "Composite Element", "abbreviation": None},
    {"term": "Control Structure", "abbreviation": None},
    {"term": "Data-Driven Specification", "abbreviation": None},
    {"term": "Definition Layer", "abbreviation": None},
    {"term": "Embedded Argument", "abbreviation": None},
    {"term": "End-to-End Test", "abbreviation": None},
    {"term": "Execution Artifacts", "abbreviation": None},
    {"term": "Execution Layer", "abbreviation": None},
    {"term": "Execution Model", "abbreviation": None},
    {"term": "Fail Status", "abbreviation": None},
    {"term": "FOR Loop", "abbreviation": None},
    {"term": "Free Named Argument", "abbreviation": "kwargs"},
    {"term": "Generic Test Automation Architecture", "abbreviation": "gTAA"},
    {"term": "Given / When / Then / And / But", "abbreviation": None},
    {"term": "Global Variable", "abbreviation": None},
    {"term": "Higher-Level Suite (Suite Directory)", "abbreviation": None},
    {"term": "Initialization File (__init__.robot)", "abbreviation": None},
    {"term": "Inline Comment", "abbreviation": None},
    {"term": "Inline IF", "abbreviation": None},
    {"term": "K-Level (Knowledge Level)", "abbreviation": None},
    {"term": "Keyword", "abbreviation": None},
    {"term": "Keyword Interface", "abbreviation": None},
    {"term": "Keyword-Driven Specification", "abbreviation": None},
    {"term": "Keyword Library", "abbreviation": None},
    {"term": "List Variable", "abbreviation": None},
    {"term": "Local Variable", "abbreviation": None},
    {"term": "Log File (log.html)", "abbreviation": None},
    {"term": "Mandatory Argument", "abbreviation": None},
    {"term": "Metadata (Suite Metadata)", "abbreviation": None},
    {"term": "Named-Only Argument", "abbreviation": None},
    {"term": "Named Argument", "abbreviation": None},
    {"term": "Output File (output.xml)", "abbreviation": None},
    {"term": "Optional Argument", "abbreviation": None},
    {"term": "Pass Status", "abbreviation": None},
    {"term": "Positional Argument", "abbreviation": None},
    {"term": "Positional or Named Argument", "abbreviation": None},
    {"term": "Report File (report.html)", "abbreviation": None},
    {"term": "Resource File", "abbreviation": None},
    {"term": "Return Statement (RETURN)", "abbreviation": None},
    {"term": "Return Type Hint", "abbreviation": None},
    {"term": "Robotic Process Automation", "abbreviation": "RPA"},
    {"term": "Robot Framework Foundation", "abbreviation": None},
    {"term": "Robot Framework® Certified Professional", "abbreviation": "RFCP"},
    {"term": "Root Suite", "abbreviation": None},
    {"term": "Scalar Access Syntax (${})", "abbreviation": None},
    {"term": "Scalar Variable", "abbreviation": None},
    {"term": "Skip Status", "abbreviation": None},
    {"term": "Standard Library (Robot Framework)", "abbreviation": None},
    {"term": "Suite (Test Suite / Task Suite)", "abbreviation": None},
    {"term": "Suite File", "abbreviation": None},
    {"term": "Suite Setup", "abbreviation": None},
    {"term": "Suite Teardown", "abbreviation": None},
    {"term": "Suite Variable", "abbreviation": None},
    {"term": "Synthetic Monitoring", "abbreviation": None},
    {"term": "Task", "abbreviation": None},
    {"term": "Test Setup", "abbreviation": None},
    {"term": "Test Teardown", "abbreviation": None},
    {"term": "Test Template", "abbreviation": None},
    {"term": "Test Case", "abbreviation": "Test"},
    {"term": "Test Data", "abbreviation": None},
    {"term": "Test Level", "abbreviation": None},
    {"term": "Test Tag", "abbreviation": None},
    {"term": "Test Timeout", "abbreviation": None},
    {"term": "User Keyword", "abbreviation": None},
    {"term": "Variable Number of Positional Arguments", "abbreviation": None},
    {"term": "Variable", "abbreviation": None},
    {"term": "Variable File", "abbreviation": None},
    {"term": "Variable Scope", "abbreviation": None},
    {"term": "WHILE Loop", "abbreviation": None},
]


def main():
    """Main function."""
    import argparse
    
    parser = argparse.ArgumentParser(description='Add glossary links to RFCP Syllabus (v6: Case-insensitive + Plurals)')
    parser.add_argument('docs_path', help='Path to docs directory')
    parser.add_argument('--dry-run', action='store_true', help='Preview changes')
    parser.add_argument('--use-absolute-paths', action='store_true', help='Use absolute paths')
    parser.add_argument('--output', help='Statistics output file (JSON)')
    
    args = parser.parse_args()
    
    use_relative = not args.use_absolute_paths
    linker = GlossaryLinker(args.docs_path, use_relative_paths=use_relative)
    linker.load_glossary_terms(GLOSSARY_DATA)
    
    print(f"Processing: {args.docs_path}")
    print(f"Dry run: {args.dry_run}")
    print(f"Relative paths: {use_relative}")
    print(f"Test|Task notation: ENABLED")
    print(f"LO block exclusion: ENABLED")
    print(f"Case-insensitive matching: ENABLED")
    print(f"Plural/singular support: ENABLED")
    print(f"Excluded files: glossary.md")
    print()
    
    stats = linker.process_all_markdown_files(dry_run=args.dry_run)
    
    print(f"\nProcessed {stats['total_files']} files")
    print(f"Modified {stats['modified_files']} files")
    print(f"Total terms linked: {stats['total_terms_linked']}")
    
    if args.output:
        with open(args.output, 'w') as f:
            json.dump(stats, f, indent=2)
        print(f"\nStatistics saved to: {args.output}")
    
    if args.dry_run:
        print("\n⚠️  DRY RUN - No files were modified")
        print("Run without --dry-run to apply changes")


if __name__ == '__main__':
    main()
