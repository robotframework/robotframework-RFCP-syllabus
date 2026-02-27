#!/bin/bash
#
# RFCP Syllabus - Add Glossary Links
# One-command automation for the robotframework-RFCP-syllabus repository
#

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║  Robot Framework RFCP Syllabus - Glossary Link Automation ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Check if we're in the repository
if [ ! -d "website/docs" ]; then
    echo -e "${RED}Error: website/docs directory not found${NC}"
    echo "Please run this script from the robotframework-RFCP-syllabus repository root"
    echo ""
    echo "Expected structure:"
    echo "  robotframework-RFCP-syllabus/"
    echo "  └── website/"
    echo "      └── docs/"
    exit 1
fi

# Check if glossary_linker.py exists
if [ ! -f "glossary_linker.py" ]; then
    echo -e "${RED}Error: glossary_linker.py not found${NC}"
    echo "Please ensure glossary_linker.py is in the repository root"
    exit 1
fi

# Check for Python
if ! command -v python3 &> /dev/null; then
    echo -e "${RED}Error: Python 3 is not installed${NC}"
    exit 1
fi

echo -e "${GREEN}✓${NC} Repository structure verified"
echo -e "${GREEN}✓${NC} Python 3 found: $(python3 --version)"
echo ""

# Interactive menu
echo "What would you like to do?"
echo ""
echo "  1) Test mode - Preview changes without modifying files (RECOMMENDED FIRST)"
echo "  2) Apply changes - Add glossary links to all documentation"
echo "  3) Process Chapter 2 only - Test on the chapter with most terms"
echo "  4) Process specific chapter - Choose which chapter to process"
echo "  5) Show statistics from last run"
echo "  6) Exit"
echo ""
read -p "Enter your choice (1-6): " choice

case $choice in
    1)
        echo ""
        echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
        echo -e "${BLUE}  TEST MODE - No files will be modified${NC}"
        echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
        echo ""
        python3 glossary_linker.py website/docs --dry-run
        echo ""
        echo -e "${GREEN}✓${NC} Test completed"
        echo ""
        echo "Review the output above to see what would be changed."
        echo "If everything looks good, run this script again and choose option 2."
        ;;
    
    2)
        echo ""
        echo -e "${YELLOW}WARNING: This will modify files in website/docs/${NC}"
        echo ""
        read -p "Have you run test mode first? (y/N): " test_done
        if [[ ! $test_done =~ ^[Yy]$ ]]; then
            echo -e "${RED}Please run test mode first (option 1)${NC}"
            exit 1
        fi
        
        echo ""
        read -p "Are you sure you want to continue? (y/N): " confirm
        if [[ ! $confirm =~ ^[Yy]$ ]]; then
            echo "Cancelled"
            exit 0
        fi
        
        # Create backup
        backup_dir="website_docs_backup_$(date +%Y%m%d_%H%M%S)"
        echo ""
        echo "Creating backup: $backup_dir"
        cp -r website/docs "$backup_dir"
        
        echo ""
        echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
        echo -e "${BLUE}  APPLYING CHANGES${NC}"
        echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
        echo ""
        
        python3 glossary_linker.py website/docs --output rfcp_glossary_stats.json
        
        echo ""
        echo -e "${GREEN}✓${NC} Changes applied successfully!"
        echo -e "${GREEN}✓${NC} Backup created: $backup_dir"
        echo -e "${GREEN}✓${NC} Statistics saved: rfcp_glossary_stats.json"
        echo ""
        echo "Next steps:"
        echo "  1. Review changes: git diff website/docs/"
        echo "  2. Test locally: cd website && npm start"
        echo "  3. Commit: git add website/docs/ && git commit -m 'Add glossary links'"
        ;;
    
    3)
        echo ""
        echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
        echo -e "${BLUE}  PROCESSING CHAPTER 2${NC}"
        echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
        echo ""
        echo "Chapter 2 contains the most glossary terms (Keyword Interface, Arguments, etc.)"
        echo ""
        
        echo "Step 1: Test mode"
        echo "─────────────────"
        python3 glossary_linker.py website/docs/chapter-02 --dry-run
        
        echo ""
        read -p "Apply changes to Chapter 2? (y/N): " apply
        if [[ $apply =~ ^[Yy]$ ]]; then
            echo ""
            echo "Step 2: Applying changes"
            echo "────────────────────────"
            python3 glossary_linker.py website/docs/chapter-02
            echo ""
            echo -e "${GREEN}✓${NC} Chapter 2 updated"
            echo "Review: git diff website/docs/chapter-02/"
        else
            echo "No changes made"
        fi
        ;;
    
    4)
        echo ""
        echo "Available chapters:"
        ls -d website/docs/chapter-* 2>/dev/null | sed 's/.*chapter-/  chapter-/' || echo "  (no chapters found)"
        echo ""
        read -p "Enter chapter number (e.g., 02): " chapter_num
        
        chapter_path="website/docs/chapter-$chapter_num"
        if [ ! -d "$chapter_path" ]; then
            echo -e "${RED}Error: Chapter not found: $chapter_path${NC}"
            exit 1
        fi
        
        echo ""
        echo -e "${BLUE}Processing Chapter $chapter_num${NC}"
        echo ""
        
        echo "Step 1: Test mode"
        python3 glossary_linker.py "$chapter_path" --dry-run
        
        echo ""
        read -p "Apply changes? (y/N): " apply
        if [[ $apply =~ ^[Yy]$ ]]; then
            python3 glossary_linker.py "$chapter_path"
            echo ""
            echo -e "${GREEN}✓${NC} Chapter $chapter_num updated"
        fi
        ;;
    
    5)
        if [ -f "rfcp_glossary_stats.json" ]; then
            echo ""
            echo -e "${BLUE}Statistics from last run:${NC}"
            echo ""
            python3 -c "import json; data=json.load(open('rfcp_glossary_stats.json')); print(f\"Total files: {data['total_files']}\"); print(f\"Modified: {data['modified_files']}\"); print(f\"Terms linked: {data['total_terms_linked']}\")"
            echo ""
            echo "Full details in: rfcp_glossary_stats.json"
        else
            echo ""
            echo -e "${YELLOW}No statistics file found${NC}"
            echo "Run option 2 to generate statistics"
        fi
        ;;
    
    6)
        echo "Goodbye!"
        exit 0
        ;;
    
    *)
        echo -e "${RED}Invalid choice${NC}"
        exit 1
        ;;
esac

echo ""
