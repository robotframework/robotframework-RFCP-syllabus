#!/bin/bash
#
# Quick Start Script for RFCP Syllabus Glossary Linker
# 
# This script provides an easy way to run the glossary linker with common options
#

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
LINKER="$SCRIPT_DIR/glossary_linker.py"

# Function to print colored messages
print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to show usage
show_usage() {
    cat << EOF
Usage: $0 [OPTION] [DOCS_PATH]

Automatically add glossary links to Robot Framework RFCP Syllabus documentation.

OPTIONS:
    test        Run in test mode (dry-run) without modifying files
    apply       Apply changes to documentation files
    single      Process a single chapter (prompts for chapter number)
    stats       Show statistics from last run
    help        Show this help message

DOCS_PATH:
    Path to the documentation directory (default: ./docs)

EXAMPLES:
    $0 test                    # Test mode on ./docs
    $0 test ../path/to/docs    # Test mode on custom path
    $0 apply                   # Apply changes to ./docs
    $0 single                  # Process single chapter

For more information, see README_GLOSSARY_LINKER.md
EOF
}

# Function to check prerequisites
check_prerequisites() {
    # Check if Python is available
    if ! command -v python3 &> /dev/null; then
        print_error "Python 3 is not installed or not in PATH"
        exit 1
    fi
    
    # Check if glossary_linker.py exists
    if [ ! -f "$LINKER" ]; then
        print_error "glossary_linker.py not found in $SCRIPT_DIR"
        exit 1
    fi
    
    print_success "Prerequisites check passed"
}

# Function to run test mode
run_test() {
    local docs_path="$1"
    
    print_info "Running in TEST MODE (no files will be modified)"
    print_info "Processing: $docs_path"
    echo ""
    
    python3 "$LINKER" "$docs_path" --dry-run
    
    echo ""
    print_success "Test completed successfully"
    print_info "Review the output above to see what would be changed"
    print_info "If everything looks good, run: $0 apply $docs_path"
}

# Function to apply changes
run_apply() {
    local docs_path="$1"
    
    print_warning "This will modify files in: $docs_path"
    read -p "Are you sure you want to continue? (y/N) " -n 1 -r
    echo ""
    
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_info "Cancelled by user"
        exit 0
    fi
    
    print_info "Applying changes..."
    echo ""
    
    # Create backup
    local backup_dir="${docs_path}_backup_$(date +%Y%m%d_%H%M%S)"
    print_info "Creating backup: $backup_dir"
    cp -r "$docs_path" "$backup_dir"
    
    # Run the linker
    python3 "$LINKER" "$docs_path" --output glossary_stats.json
    
    echo ""
    print_success "Changes applied successfully"
    print_info "Backup created at: $backup_dir"
    print_info "Statistics saved to: glossary_stats.json"
    echo ""
    print_info "Next steps:"
    echo "  1. Review the changes: git diff $docs_path"
    echo "  2. Test the documentation build"
    echo "  3. Commit the changes: git add $docs_path && git commit -m 'Add glossary links'"
}

# Function to process single chapter
run_single() {
    local docs_path="$1"
    
    echo ""
    echo "Available chapters in $docs_path:"
    ls -d "$docs_path"/chapter-* 2>/dev/null | sed 's/.*chapter-/  chapter-/' || echo "  (no chapters found)"
    echo ""
    
    read -p "Enter chapter number (e.g., 02): " chapter_num
    
    local chapter_path="$docs_path/chapter-$chapter_num"
    
    if [ ! -d "$chapter_path" ]; then
        print_error "Chapter directory not found: $chapter_path"
        exit 1
    fi
    
    print_info "Processing chapter $chapter_num"
    echo ""
    
    # Run in test mode first
    print_info "Step 1: Test mode"
    python3 "$LINKER" "$chapter_path" --dry-run
    
    echo ""
    read -p "Apply changes to this chapter? (y/N) " -n 1 -r
    echo ""
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        python3 "$LINKER" "$chapter_path"
        print_success "Changes applied to chapter $chapter_num"
    else
        print_info "No changes made"
    fi
}

# Function to show statistics
show_stats() {
    if [ -f "glossary_stats.json" ]; then
        print_info "Statistics from last run:"
        echo ""
        python3 -m json.tool glossary_stats.json
    else
        print_warning "No statistics file found (glossary_stats.json)"
        print_info "Run with 'apply' option to generate statistics"
    fi
}

# Main script

# Check if no arguments provided
if [ $# -eq 0 ]; then
    show_usage
    exit 0
fi

# Parse command
COMMAND="$1"
DOCS_PATH="${2:-./docs}"

# Check prerequisites
check_prerequisites

# Execute command
case "$COMMAND" in
    test)
        if [ ! -d "$DOCS_PATH" ]; then
            print_error "Documentation directory not found: $DOCS_PATH"
            exit 1
        fi
        run_test "$DOCS_PATH"
        ;;
    
    apply)
        if [ ! -d "$DOCS_PATH" ]; then
            print_error "Documentation directory not found: $DOCS_PATH"
            exit 1
        fi
        run_apply "$DOCS_PATH"
        ;;
    
    single)
        if [ ! -d "$DOCS_PATH" ]; then
            print_error "Documentation directory not found: $DOCS_PATH"
            exit 1
        fi
        run_single "$DOCS_PATH"
        ;;
    
    stats)
        show_stats
        ;;
    
    help|--help|-h)
        show_usage
        ;;
    
    *)
        print_error "Unknown command: $COMMAND"
        echo ""
        show_usage
        exit 1
        ;;
esac

exit 0
