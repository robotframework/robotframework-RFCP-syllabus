#!/usr/bin/env python3
"""
Glossary Linker for Robot Framework RFCP Syllabus (v4 - Test|Task Support)

This script automatically adds links to glossary terms throughout the documentation.

NEW in v4:
- Handles Test|Task notation (e.g., "Test|Task Setup" → links to "Test Setup")

FEATURES:
- Uses relative paths for Docusaurus compatibility  
- Excludes YAML frontmatter (---...---)
- Excludes markdown headings (# ... ## ... ### ...)
- Only links terms in actual body content/paragraphs
- Supports Test|Task notation as approved by committee

This prevents glossary links from appearing in:
- Sidebar navigation (generated from headings)
- Previous/Next navigation (uses page titles)
- Table of contents
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
        
    def load_glossary_terms(self, glossary_data: List[Dict]) -> None:
        """Load glossary terms and their aliases from provided data."""
        for entry in glossary_data:
            term = entry['term']
            slug = self._create_slug(term)
            
            # Store the main term
            self.glossary_terms[term] = slug
            
            # Store abbreviations as aliases
            if entry.get('abbreviation'):
                abbr = entry['abbreviation']
                self.aliases[abbr] = (term, slug)
            
            # Store additional aliases
            if entry.get('aliases'):
                for alias in entry['aliases']:
                    self.aliases[alias] = (term, slug)
    
    def _create_slug(self, term: str) -> str:
        """Create a URL-safe slug from a term."""
        slug = term.lower()
        slug = re.sub(r'[^\w\s-]', '', slug)
        slug = re.sub(r'[\s_]+', '-', slug)
        slug = re.sub(r'-+', '-', slug)
        slug = slug.strip('-')
        return slug
    
    def _get_relative_path(self, from_file: Path) -> str:
        """Calculate the relative path from a file to the glossary."""
        try:
            rel_path = from_file.relative_to(self.docs_path)
            depth = len(rel_path.parent.parts)
            
            if depth > 0:
                prefix = '../' * depth
                return f'{prefix}glossary'
            else:
                return './glossary'
        except ValueError:
            return '/docs/glossary'
    
    def _escape_for_regex(self, term: str) -> str:
        """Escape special regex characters in term."""
        return re.escape(term)
    
    def _extract_frontmatter(self, content: str) -> Tuple[str, str]:
        """
        Extract YAML frontmatter from content.
        
        Returns:
            Tuple of (frontmatter, main_content)
        """
        frontmatter = ""
        main_content = content
        
        # Check for YAML frontmatter (--- ... ---)
        frontmatter_pattern = r'^---\s*\n(.*?)\n---\s*\n'
        match = re.match(frontmatter_pattern, content, re.DOTALL)
        
        if match:
            frontmatter = match.group(0)
            main_content = content[match.end():]
        
        return frontmatter, main_content
    
    def _create_link_patterns(self, current_file: Path) -> List[Tuple[str, str, str]]:
        """Create regex patterns for finding and replacing glossary terms."""
        patterns = []
        
        # Get the appropriate glossary URL for this file
        if self.use_relative_paths:
            glossary_url = self._get_relative_path(current_file)
        else:
            glossary_url = '/docs/glossary'
        
        # ===================================================================
        # NEW: Handle Test|Task notation
        # Committee approved: Test|Task something → links to Test something
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
                # Pattern: match "Test|Task Something" as a whole phrase
                pattern = rf'(?<!\[)(?<!`)(?<!]\()(?<!\*\*)\b({escaped})\b(?!`|\]|\)|\*\*)(?!\()'
                replacement = f'[{notation}]({glossary_url}#{slug})'
                patterns.append((pattern, replacement, 'test-task-notation'))
        
        # ===================================================================
        # Regular term patterns (existing logic)
        # ===================================================================
        
        # Sort terms by length (longest first) to match longer terms before shorter ones
        sorted_terms = sorted(self.glossary_terms.keys(), key=len, reverse=True)
        sorted_aliases = sorted(self.aliases.keys(), key=len, reverse=True)
        
        # Create patterns for main terms
        for term in sorted_terms:
            slug = self.glossary_terms[term]
            escaped_term = self._escape_for_regex(term)
            
            # Pattern: Match term that's not already in a link or code block
            pattern = rf'(?<!\[)(?<!`)(?<!]\()(?<!\*\*)\b({escaped_term})\b(?!`|\]|\)|\*\*)(?!\()'
            replacement = f'[{term}]({glossary_url}#{slug})'
            patterns.append((pattern, replacement, 'term'))
        
        # Create patterns for aliases
        for alias in sorted_aliases:
            term, slug = self.aliases[alias]
            escaped_alias = self._escape_for_regex(alias)
            
            pattern = rf'(?<!\[)(?<!`)(?<!]\()(?<!\*\*)\b({escaped_alias})\b(?!`|\]|\)|\*\*)(?!\()'
            replacement = f'[{alias}]({glossary_url}#{slug})'
            patterns.append((pattern, replacement, 'alias'))
        
        return patterns
    
    def process_markdown_file(self, file_path: Path, dry_run: bool = False) -> Dict:
        """Process a single markdown file and add glossary links."""
        stats = {
            'file': str(file_path.relative_to(self.docs_path)),
            'terms_linked': 0,
            'changes': []
        }
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Extract frontmatter
            frontmatter, main_content = self._extract_frontmatter(content)
            
            # Get patterns for this file
            patterns = self._create_link_patterns(file_path)
            
            # Track which terms were already linked
            already_linked = set()
            
            # Split content into sections - CRITICAL: exclude headings
            sections = self._split_content_sections(main_content)
            processed_sections = []
            
            for section_type, section_content in sections:
                if section_type in ['code', 'heading']:
                    # DON'T modify code blocks or headings
                    processed_sections.append(section_content)
                else:
                    # Apply patterns to text sections only
                    modified_content = section_content
                    for pattern, replacement, term_type in patterns:
                        matches = list(re.finditer(pattern, modified_content, re.IGNORECASE))
                        if matches:
                            term_matched = matches[0].group(1)
                            if term_matched not in already_linked:
                                modified_content = re.sub(pattern, replacement, modified_content, count=0)
                                stats['terms_linked'] += len(matches)
                                stats['changes'].append({
                                    'term': term_matched,
                                    'type': term_type,
                                    'occurrences': len(matches)
                                })
                                already_linked.add(term_matched)
                    
                    processed_sections.append(modified_content)
            
            # Reconstruct content with frontmatter
            new_content = frontmatter + ''.join(processed_sections)
            
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
        Split content into headings, code blocks, and text sections.
        
        Returns:
            List of tuples: (section_type, content)
            where section_type is 'heading', 'code', or 'text'
        """
        sections = []
        lines = content.split('\n')
        
        i = 0
        while i < len(lines):
            line = lines[i]
            
            # Check for heading (# ... ## ... ### ...)
            if line.strip().startswith('#'):
                # This is a heading - don't link terms here
                sections.append(('heading', line + '\n'))
                i += 1
                continue
            
            # Check for code block start
            if line.strip().startswith('```'):
                # Collect entire code block
                code_block = [line]
                i += 1
                while i < len(lines):
                    code_block.append(lines[i])
                    if lines[i].strip().startswith('```'):
                        i += 1
                        break
                    i += 1
                sections.append(('code', '\n'.join(code_block) + '\n'))
                continue
            
            # Check for inline code or existing links in the line
            if '`' in line or '[' in line:
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
        Process a line that contains inline code or links.
        Split it into code/link parts and text parts.
        """
        sections = []
        current_pos = 0
        
        # Pattern for inline code `...` and links [...](...) 
        special_pattern = r'`[^`]+`|\[([^\]]+)\]\([^)]+\)'
        
        for match in re.finditer(special_pattern, line):
            # Add text before special content
            if current_pos < match.start():
                text_part = line[current_pos:match.start()]
                if text_part:
                    sections.append(('text', text_part))
            
            # Add special content (code or link)
            sections.append(('code', match.group()))
            current_pos = match.end()
        
        # Add remaining text
        if current_pos < len(line):
            remaining = line[current_pos:]
            if remaining:
                sections.append(('text', remaining))
        
        # Add newline at the end
        if sections:
            last_type, last_content = sections[-1]
            sections[-1] = (last_type, last_content + '\n')
        else:
            sections.append(('text', line + '\n'))
        
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
            
            overall_stats['total_files'] += 1
            file_stats = self.process_markdown_file(md_file, dry_run)
            
            if file_stats.get('modified', False):
                overall_stats['modified_files'] += 1
            
            overall_stats['total_terms_linked'] += file_stats.get('terms_linked', 0)
            
            if file_stats.get('terms_linked', 0) > 0 or file_stats.get('error'):
                overall_stats['files'].append(file_stats)
        
        return overall_stats


# Comprehensive glossary data for RFCP Syllabus
GLOSSARY_DATA = [
    {'term': 'Keyword', 'definition': 'Named reusable action or sequence of actions in Robot Framework.', 'abbreviation': '', 'aliases': []},
    {'term': 'Suite', 'definition': 'Collection of tests or tasks defined in a .robot file or directory.', 'abbreviation': '', 'aliases': ['Test Suite', 'Task Suite']},
    {'term': 'Test Case', 'definition': 'Executable specification that verifies system behavior.', 'abbreviation': '', 'aliases': []},
    {'term': 'Task', 'definition': 'Executable entity for non-testing automation.', 'abbreviation': '', 'aliases': []},
    {'term': 'User Keyword', 'definition': 'Keyword defined in Robot Framework syntax.', 'abbreviation': '', 'aliases': ['Composite Keyword']},
    {'term': 'Keyword Library', 'definition': 'Collection of library keywords.', 'abbreviation': '', 'aliases': ['Library']},
    {'term': 'Resource File', 'definition': 'File containing user keywords and variables.', 'abbreviation': '', 'aliases': []},
    {'term': 'Variable', 'definition': 'Named reference to a value.', 'abbreviation': '', 'aliases': []},
    {'term': 'Argument', 'definition': 'Value supplied to a keyword call.', 'abbreviation': '', 'aliases': []},
    {'term': 'Mandatory Argument', 'definition': 'Argument without a default value.', 'abbreviation': '', 'aliases': []},
    {'term': 'Optional Argument', 'definition': 'Argument with a default value.', 'abbreviation': '', 'aliases': []},
    {'term': 'Positional Argument', 'definition': 'Argument provided by position.', 'abbreviation': '', 'aliases': []},
    {'term': 'Named Argument', 'definition': 'Argument provided using name=value pair.', 'abbreviation': '', 'aliases': []},
    {'term': 'Embedded Argument', 'definition': 'Argument defined in keyword name.', 'abbreviation': '', 'aliases': []},
    {'term': 'Positional or Named Argument', 'definition': 'Argument that can be set by position or name.', 'abbreviation': '', 'aliases': []},
    {'term': 'Variable Number of Positional Arguments', 'definition': 'Optional argument marked with * that collects remaining values.', 'abbreviation': '', 'aliases': ['*varargs', '*args']},
    {'term': 'Named-Only Argument', 'definition': 'Argument that must be provided by name.', 'abbreviation': '', 'aliases': []},
    {'term': 'Free Named Argument', 'definition': 'Catch-all argument marked with **.', 'abbreviation': '', 'aliases': ['kwargs', '**kwargs']},
    {'term': 'Keyword Interface', 'definition': 'Documented information of a keyword.', 'abbreviation': '', 'aliases': []},
    {'term': 'Argument Interface', 'definition': 'Specification of keyword arguments.', 'abbreviation': '', 'aliases': []},
    {'term': 'Return Type Hint', 'definition': 'Indication of return value type.', 'abbreviation': '', 'aliases': []},
    {'term': 'Suite Setup', 'definition': 'Keyword executed before tests in a suite.', 'abbreviation': '', 'aliases': []},
    {'term': 'Suite Teardown', 'definition': 'Keyword executed after tests in a suite.', 'abbreviation': '', 'aliases': []},
    {'term': 'Test Setup', 'definition': 'Keyword executed before a test.', 'abbreviation': '', 'aliases': ['Task Setup']},
    {'term': 'Test Teardown', 'definition': 'Keyword executed after a test.', 'abbreviation': '', 'aliases': ['Task Teardown']},
    {'term': 'Test Tag', 'definition': 'Label for categorization.', 'abbreviation': '', 'aliases': ['Task Tag']},
    {'term': 'Test Template', 'definition': 'Setting for test template.', 'abbreviation': '', 'aliases': ['Task Template']},
    {'term': 'Test Timeout', 'definition': 'Maximum execution time.', 'abbreviation': '', 'aliases': ['Task Timeout']},
    {'term': 'Keyword-Driven Specification', 'definition': 'Style using keyword call sequences.', 'abbreviation': '', 'aliases': []},
    {'term': 'Behavior-Driven Specification', 'definition': 'Style describing user perspective behavior.', 'abbreviation': '', 'aliases': []},
    {'term': 'Data-Driven Specification', 'definition': 'Style with varying input data.', 'abbreviation': '', 'aliases': []},
    {'term': 'Control Structure', 'definition': 'Statement controlling execution flow.', 'abbreviation': '', 'aliases': []},
    {'term': 'FOR Loop', 'definition': 'Structure to iterate over items.', 'abbreviation': '', 'aliases': []},
    {'term': 'WHILE Loop', 'definition': 'Structure repeating while condition is true.', 'abbreviation': '', 'aliases': []},
    {'term': 'Scalar Variable', 'definition': 'Variable with ${} syntax.', 'abbreviation': '', 'aliases': []},
    {'term': 'List Variable', 'definition': 'Variable with @{} syntax.', 'abbreviation': '', 'aliases': []},
    {'term': 'Variable Scope', 'definition': 'Visibility and lifetime of a variable.', 'abbreviation': '', 'aliases': []},
    {'term': 'Global Variable', 'definition': 'Variable with global scope.', 'abbreviation': '', 'aliases': []},
    {'term': 'Suite Variable', 'definition': 'Variable scoped to a suite.', 'abbreviation': '', 'aliases': []},
    {'term': 'Local Variable', 'definition': 'Variable scoped to execution context.', 'abbreviation': '', 'aliases': []},
    {'term': 'Built-In Variables', 'definition': 'Variables provided by Robot Framework.', 'abbreviation': '', 'aliases': []},
    {'term': 'Command Line Interface', 'definition': 'Interface to run Robot Framework.', 'abbreviation': 'CLI', 'aliases': ['Robot Framework CLI']},
    {'term': 'Generic Test Automation Architecture', 'definition': 'Layered reference architecture.', 'abbreviation': 'gTAA', 'aliases': []},
    {'term': 'Definition Layer', 'definition': 'Layer containing test data.', 'abbreviation': '', 'aliases': []},
    {'term': 'Execution Layer', 'definition': 'Layer with execution engine.', 'abbreviation': '', 'aliases': []},
    {'term': 'Adaptation Layer', 'definition': 'Layer connecting to SUT.', 'abbreviation': '', 'aliases': []},
    {'term': 'Execution Artifacts', 'definition': 'Files produced by execution.', 'abbreviation': '', 'aliases': []},
    {'term': 'Output File', 'definition': 'Machine-readable result file.', 'abbreviation': '', 'aliases': ['output.xml']},
    {'term': 'Log File', 'definition': 'Detailed HTML execution log.', 'abbreviation': '', 'aliases': ['log.html']},
    {'term': 'Report File', 'definition': 'High-level HTML summary.', 'abbreviation': '', 'aliases': ['report.html']},
    {'term': 'Pass Status', 'definition': 'Status indicating success.', 'abbreviation': '', 'aliases': []},
    {'term': 'Fail Status', 'definition': 'Status indicating failure.', 'abbreviation': '', 'aliases': []},
    {'term': 'Skip Status', 'definition': 'Status indicating skip.', 'abbreviation': '', 'aliases': []},
    {'term': 'Robot Framework Foundation', 'definition': 'Non-profit steward of Robot Framework.', 'abbreviation': '', 'aliases': []},
    {'term': 'Robot Framework® Certified Professional', 'definition': 'Foundational certification level.', 'abbreviation': 'RFCP', 'aliases': []},
    {'term': 'Robotic Process Automation', 'definition': 'Automation of business processes.', 'abbreviation': 'RPA', 'aliases': []},
    {'term': 'Behavior-Driven Development', 'definition': 'Development approach with business language.', 'abbreviation': 'BDD', 'aliases': []},
    {'term': 'Standard Library', 'definition': 'Library shipped with Robot Framework.', 'abbreviation': '', 'aliases': []},
]


def main():
    """Main function."""
    import argparse
    
    parser = argparse.ArgumentParser(description='Add glossary links to RFCP Syllabus (with Test|Task support)')
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
    print()
    
    stats = linker.process_all_markdown_files(dry_run=args.dry_run)
    
    print("=" * 60)
    print("SUMMARY")
    print("=" * 60)
    print(f"Total files: {stats['total_files']}")
    print(f"Modified: {stats['modified_files']}")
    print(f"Terms linked: {stats['total_terms_linked']}")
    print()
    
    if stats['files']:
        print("=" * 60)
        print("DETAILS")
        print("=" * 60)
        for file_stats in stats['files'][:10]:  # Show first 10
            print(f"\n{file_stats['file']}")
            if file_stats.get('error'):
                print(f"  ERROR: {file_stats['error']}")
            else:
                print(f"  Terms: {file_stats['terms_linked']}")
                for change in file_stats['changes'][:3]:
                    print(f"    - {change['term']}: {change['occurrences']}x")
                    if change['type'] == 'test-task-notation':
                        print(f"      (Test|Task notation)")
    
    if args.output:
        with open(args.output, 'w') as f:
            json.dump(stats, f, indent=2)
        print(f"\nStats saved: {args.output}")


if __name__ == '__main__':
    main()
