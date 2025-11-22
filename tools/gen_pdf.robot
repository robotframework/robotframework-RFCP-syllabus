*** Settings ***
Library     Browser
Library     Process


*** Variables ***
@{EXCLUDE_FROM_PDF}    Example Questions


*** Test Cases ***
Gen Syllabus
    Build Docusaurus
    Open Syllabus
    Expand Menues
    Generate Syllabus.pdf
    [Teardown]    Process.Terminate All Processes


*** Keywords ***
Build Docusaurus
    Process.Run Process    npm    run    build    cwd=website
    Process.Start Process    npm    run    serve    alias=docusaurus    cwd=website

Open Syllabus
    New Browser    chromium    headless=False
    New Page    http://localhost:3000/robotframework-RFCP-syllabus/docs/overview
    ${dark}    Get Element States
    ...    button[aria-label="Switch between dark and light mode (currently dark mode)"]
    ...    then
    ...    bool(value & attached)
    IF    $dark
        Click    button[aria-label="Switch between dark and light mode (currently dark mode)"]
    END

Expand Menues
    ${menus}    Get Elements    .menu__list-item--collapsed
    FOR    ${menu}    IN    @{menus}
        Click    ${menus}[0]
    END

Generate Syllabus.pdf
    ${pages}    Get Elements    .theme-doc-sidebar-item-link
    ${writer}    Evaluate    pypdf.PdfWriter()
    FOR    ${page}    IN    @{pages}
        Click    ${page}
        ${title}    Get Title
        IF    $title.split('|', 1)[0].strip() in $EXCLUDE_FROM_PDF    CONTINUE
        Scroll To    vertical=bottom    behavior=smooth
        sleep    1s
        ${title}    Get Title    then    value.split("|")[0]
        ${file}    Save Page As Pdf
        ...    pdfs/${title.replace('/', '_').strip()}.pdf
        ...    displayHeaderFooter=True
        ...    format=A4
        ...    outline=True
        ...    margin={'top': '20px', 'right': '20px', 'bottom': '20px', 'left': '20px'}
        ...    printBackground=True
        ...    tagged=True
        ...    scale=0.8
        Log To Console    ${file}
        Evaluate    $writer.append($file)
    END
    Evaluate    $writer.write("Syllabus.pdf")
