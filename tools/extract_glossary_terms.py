#!/usr/bin/env python3
"""
Glossary Term Extractor for Robot Framework RFCP Syllabus

This script extracts glossary terms from the interactive glossary page
and outputs them in a format that can be used by the glossary linker.
"""

import json
import re
from typing import List, Dict
from pathlib import Path


def extract_from_markdown(glossary_file_path: str) -> List[Dict]:
    """
    Extract glossary terms from a markdown glossary file.
    
    This assumes the glossary is structured with headings for each term.
    Adjust the parsing logic based on your actual glossary format.
    
    Args:
        glossary_file_path: Path to the glossary markdown file
        
    Returns:
        List of dictionaries containing term information
    """
    terms = []
    
    with open(glossary_file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Example parsing logic - adjust based on your glossary structure
    # This is a simplified example assuming each term is a heading
    
    # Pattern to match glossary entries
    # Adjust this regex based on your actual glossary format
    pattern = r'###\s+(.+?)\n\n(.+?)(?=\n###|\Z)'
    
    matches = re.finditer(pattern, content, re.DOTALL)
    
    for match in matches:
        term = match.group(1).strip()
        definition = match.group(2).strip()
        
        # Extract abbreviation if present (example: "Term (ABBR)")
        abbr_match = re.search(r'\(([A-Z]{2,})\)', term)
        abbreviation = abbr_match.group(1) if abbr_match else ''
        
        # Clean the term name
        term_clean = re.sub(r'\s*\([A-Z]{2,}\)', '', term).strip()
        
        # Extract aliases from "See also: ..." or "Also known as: ..." 
        aliases = []
        alias_match = re.search(r'(?:See also|Also known as|Alias(?:es)?)[:\s]+(.+?)(?:\n|$)', definition)
        if alias_match:
            alias_text = alias_match.group(1)
            aliases = [a.strip() for a in re.split(r',|;|\band\b', alias_text)]
        
        terms.append({
            'term': term_clean,
            'definition': definition,
            'abbreviation': abbreviation,
            'aliases': aliases
        })
    
    return terms


def extract_from_html_table(html_content: str) -> List[Dict]:
    """
    Extract glossary terms from HTML table format.
    
    This is useful if you're scraping from a rendered HTML page.
    
    Args:
        html_content: HTML content containing the glossary table
        
    Returns:
        List of dictionaries containing term information
    """
    from html.parser import HTMLParser
    
    class GlossaryTableParser(HTMLParser):
        def __init__(self):
            super().__init__()
            self.terms = []
            self.current_term = None
            self.current_definition = None
            self.in_term_cell = False
            self.in_def_cell = False
            self.cell_data = []
            
        def handle_starttag(self, tag, attrs):
            if tag == 'td':
                # Determine which column we're in
                self.cell_data = []
                
        def handle_endtag(self, tag):
            if tag == 'td':
                if self.current_term is None:
                    # This is the term cell
                    self.current_term = ''.join(self.cell_data).strip()
                else:
                    # This is the definition cell
                    self.current_definition = ''.join(self.cell_data).strip()
                    
                    # Process the term
                    if self.current_term and self.current_definition:
                        # Check if it's a "See ..." reference
                        see_match = re.match(r'See\s+(.+)', self.current_definition)
                        
                        if see_match:
                            # This is an alias
                            # We'll handle this in post-processing
                            pass
                        else:
                            # Extract abbreviation from definition
                            abbr = ''
                            abbr_match = re.search(r'\b([A-Z]{2,})\b', self.current_definition)
                            if abbr_match:
                                abbr = abbr_match.group(1)
                            
                            self.terms.append({
                                'term': self.current_term,
                                'definition': self.current_definition,
                                'abbreviation': abbr,
                                'aliases': []
                            })
                        
                        # Reset for next row
                        self.current_term = None
                        self.current_definition = None
                    
        def handle_data(self, data):
            self.cell_data.append(data)
    
    parser = GlossaryTableParser()
    parser.feed(html_content)
    return parser.terms


def extract_from_structured_data(data_file: str) -> List[Dict]:
    """
    Extract glossary terms from a structured data file (JSON, YAML, etc.).
    
    Args:
        data_file: Path to the data file
        
    Returns:
        List of dictionaries containing term information
    """
    with open(data_file, 'r', encoding='utf-8') as f:
        if data_file.endswith('.json'):
            data = json.load(f)
        elif data_file.endswith(('.yml', '.yaml')):
            try:
                import yaml
                data = yaml.safe_load(f)
            except ImportError:
                raise ImportError("PyYAML is required to parse YAML files. Install it with: pip install pyyaml")
        else:
            raise ValueError(f"Unsupported file format: {data_file}")
    
    # Normalize the data structure
    if isinstance(data, list):
        terms = data
    elif isinstance(data, dict) and 'terms' in data:
        terms = data['terms']
    else:
        terms = [data]
    
    # Ensure all terms have required fields
    for term in terms:
        term.setdefault('abbreviation', '')
        term.setdefault('aliases', [])
    
    return terms


def manual_term_list() -> List[Dict]:
    """
    Returns a manually curated list of glossary terms.
    
    This is the most reliable method but requires manual maintenance.
    Update this list when you add new terms to your glossary.
    """
    return [
        # Core Concepts
        {
            'term': 'Keyword',
            'definition': 'Named reusable action or sequence of actions in Robot Framework.',
            'abbreviation': '',
            'aliases': []
        },
        {
            'term': 'Suite',
            'definition': 'Collection of tests or tasks defined in a .robot file or directory.',
            'abbreviation': '',
            'aliases': ['Test Suite', 'Task Suite']
        },
        {
            'term': 'Test Case',
            'definition': 'Executable specification that verifies system behavior.',
            'abbreviation': '',
            'aliases': ['Test']
        },
        {
            'term': 'Task',
            'definition': 'Executable entity similar to a test case but used for automation.',
            'abbreviation': '',
            'aliases': []
        },
        
        # Arguments
        {
            'term': 'Argument',
            'definition': 'Value supplied to a keyword call.',
            'abbreviation': '',
            'aliases': []
        },
        {
            'term': 'Mandatory Argument',
            'definition': 'Argument without a default value that must be provided.',
            'abbreviation': '',
            'aliases': []
        },
        {
            'term': 'Optional Argument',
            'definition': 'Argument that has a default value and may be omitted.',
            'abbreviation': '',
            'aliases': []
        },
        {
            'term': 'Positional Argument',
            'definition': 'Argument provided by position in the argument list.',
            'abbreviation': '',
            'aliases': []
        },
        {
            'term': 'Named Argument',
            'definition': 'Argument provided using an explicit name=value pair.',
            'abbreviation': '',
            'aliases': []
        },
        {
            'term': 'Embedded Argument',
            'definition': 'Argument defined directly in a keyword name using ${} syntax.',
            'abbreviation': '',
            'aliases': []
        },
        {
            'term': 'Positional or Named Argument',
            'definition': 'Argument that can be set either by position or by name.',
            'abbreviation': '',
            'aliases': []
        },
        {
            'term': 'Variable Number of Positional Arguments',
            'definition': 'Optional argument marked with * that collects remaining positional values.',
            'abbreviation': '',
            'aliases': ['*varargs', '*args']
        },
        {
            'term': 'Named-Only Argument',
            'definition': 'Argument that must be provided by name (never positionally).',
            'abbreviation': '',
            'aliases': []
        },
        {
            'term': 'Free Named Argument',
            'definition': 'Catch-all argument marked with ** that gathers undefined named values.',
            'abbreviation': '',
            'aliases': ['kwargs', '**kwargs']
        },
        
        # Add more terms as needed...
    ]


def save_terms(terms: List[Dict], output_file: str, format: str = 'json'):
    """
    Save extracted terms to a file.
    
    Args:
        terms: List of term dictionaries
        output_file: Path to output file
        format: Output format ('json', 'python', or 'yaml')
    """
    output_path = Path(output_file)
    
    if format == 'json':
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(terms, f, indent=2, ensure_ascii=False)
    
    elif format == 'python':
        # Generate Python code
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write('# Glossary terms extracted from Robot Framework RFCP Syllabus\n')
            f.write('# Auto-generated file - do not edit manually\n\n')
            f.write('GLOSSARY_TERMS = [\n')
            for term in terms:
                f.write('    {\n')
                f.write(f"        'term': {repr(term['term'])},\n")
                f.write(f"        'definition': {repr(term['definition'])},\n")
                f.write(f"        'abbreviation': {repr(term.get('abbreviation', ''))},\n")
                f.write(f"        'aliases': {repr(term.get('aliases', []))},\n")
                f.write('    },\n')
            f.write(']\n')
    
    elif format == 'yaml':
        try:
            import yaml
            with open(output_path, 'w', encoding='utf-8') as f:
                yaml.dump(terms, f, allow_unicode=True, default_flow_style=False)
        except ImportError:
            raise ImportError("PyYAML is required for YAML output. Install it with: pip install pyyaml")
    
    else:
        raise ValueError(f"Unsupported format: {format}")
    
    print(f"Terms saved to: {output_path}")


def merge_aliases(terms: List[Dict]) -> List[Dict]:
    """
    Post-process terms to merge "See ..." references into aliases.
    
    Args:
        terms: List of term dictionaries
        
    Returns:
        Processed list with aliases merged
    """
    # Build a map of term names to their entries
    term_map = {t['term']: t for t in terms}
    
    # Find and process "See ..." references
    see_references = []
    for i, term in enumerate(terms):
        see_match = re.match(r'See\s+(.+)', term['definition'])
        if see_match:
            target_term = see_match.group(1).strip()
            if target_term in term_map:
                # Add this term as an alias to the target
                if term['term'] not in term_map[target_term]['aliases']:
                    term_map[target_term]['aliases'].append(term['term'])
            see_references.append(i)
    
    # Remove "See ..." entries
    for i in reversed(see_references):
        terms.pop(i)
    
    return terms


def main():
    """Main function."""
    import argparse
    
    parser = argparse.ArgumentParser(
        description='Extract glossary terms from Robot Framework RFCP Syllabus'
    )
    parser.add_argument(
        '--input',
        help='Input file (markdown, HTML, JSON, or YAML)'
    )
    parser.add_argument(
        '--input-type',
        choices=['markdown', 'html', 'json', 'yaml', 'manual'],
        default='manual',
        help='Type of input file'
    )
    parser.add_argument(
        '--output',
        default='glossary_terms.json',
        help='Output file path'
    )
    parser.add_argument(
        '--format',
        choices=['json', 'python', 'yaml'],
        default='json',
        help='Output format'
    )
    
    args = parser.parse_args()
    
    # Extract terms based on input type
    if args.input_type == 'manual':
        terms = manual_term_list()
    elif args.input_type == 'markdown':
        terms = extract_from_markdown(args.input)
    elif args.input_type == 'html':
        with open(args.input, 'r', encoding='utf-8') as f:
            html_content = f.read()
        terms = extract_from_html_table(html_content)
    elif args.input_type in ['json', 'yaml']:
        terms = extract_from_structured_data(args.input)
    
    # Post-process terms
    terms = merge_aliases(terms)
    
    # Print summary
    print(f"Extracted {len(terms)} glossary terms")
    print("\nSample terms:")
    for term in terms[:5]:
        print(f"  - {term['term']}")
        if term.get('aliases'):
            print(f"    Aliases: {', '.join(term['aliases'])}")
    
    # Save to file
    save_terms(terms, args.output, args.format)


if __name__ == '__main__':
    main()
