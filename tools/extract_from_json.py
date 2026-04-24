#!/usr/bin/env python3
"""
Extract Glossary Terms from glossary.json

This script reads the glossary JSON file and converts it to GLOSSARY_DATA format
for use in glossary_linker.py

Usage:
    python3 extract_from_json.py website/static/glossary/glossary.json
"""

import json
import sys
from pathlib import Path


def extract_from_json(json_file_path):
    """Extract glossary terms from JSON file."""
    
    with open(json_file_path, 'r', encoding='utf-8') as f:
        glossary_items = json.load(f)
    
    terms = []
    
    for item in glossary_items:
        term_name = item.get('term', '').strip()
        abbreviation = item.get('abbreviation', '').strip()
        
        if not term_name:
            continue
        
        terms.append({
            'term': term_name,
            'abbreviation': abbreviation if abbreviation else None
        })
    
    return terms


def generate_python_code(terms):
    """Generate Python code for GLOSSARY_DATA."""
    
    lines = ['GLOSSARY_DATA = [']
    
    for term in terms:
        abbr = f'"{term["abbreviation"]}"' if term['abbreviation'] else 'None'
        lines.append(f'    {{"term": "{term["term"]}", "abbreviation": {abbr}}},')
    
    lines.append(']')
    
    return '\n'.join(lines)


def main():
    if len(sys.argv) < 2:
        print("Usage: python3 extract_from_json.py <path_to_glossary.json>")
        print("\nExample:")
        print("  python3 extract_from_json.py website/static/glossary/glossary.json")
        sys.exit(1)
    
    json_path = Path(sys.argv[1])
    
    if not json_path.exists():
        print(f"Error: File not found: {json_path}")
        sys.exit(1)
    
    print(f"Extracting terms from: {json_path}")
    print()
    
    terms = extract_from_json(json_path)
    
    print(f"Found {len(terms)} glossary terms:")
    print()
    
    # Show preview
    for i, term in enumerate(terms[:10], 1):
        abbr_str = f" ({term['abbreviation']})" if term['abbreviation'] else ""
        print(f"  {i}. {term['term']}{abbr_str}")
    
    if len(terms) > 10:
        print(f"  ... and {len(terms) - 10} more")
    
    print()
    print("="*70)
    print("PYTHON CODE TO ADD TO glossary_linker.py:")
    print("="*70)
    print()
    print(generate_python_code(terms))
    print()
    
    # Also save to a JSON file for reference
    output_json = json_path.parent / 'glossary_terms_extracted.json'
    with open(output_json, 'w', encoding='utf-8') as f:
        json.dump(terms, f, indent=2, ensure_ascii=False)
    
    print("="*70)
    print(f"Also saved to: {output_json}")
    print("="*70)


if __name__ == '__main__':
    main()
