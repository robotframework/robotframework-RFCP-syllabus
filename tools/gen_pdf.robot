*** Settings ***
Library     Browser
Library     Collections
Library     Process


*** Variables ***
@{EXCLUDE_FROM_PDF}    Example Exam    Download Syllabus PDF
${BROWSER}    chromium
${HEADLESS}    ${True}


*** Test Cases ***
Gen Syllabus
    Build Docusaurus
    Open Syllabus
    Expand Menues
    Generate Syllabus.pdf
    [Teardown]    Process.Terminate All Processes


*** Keywords ***
Build Docusaurus
    Process.Run Process    npm    run    build:production    cwd=website
    Process.Start Process    npm    run    serve    alias=docusaurus    cwd=website

Open Syllabus
    IF   $BROWSER.lower() in ['chrome', 'msedge']
        New Browser    chromium    channel=${BROWSER}    headless=${HEADLESS}
    ELSE
        New Browser    chromium    headless=${HEADLESS}
    END
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
    VAR    ${syllabus_version}    ${{json.load(open('website/versions.json'))[0]}}
    VAR    @{pdf_files}
    FOR    ${page}    IN    @{pages}
        ${title}    Get Text    ${page}
        IF    $title in $EXCLUDE_FROM_PDF    CONTINUE
        Click    ${page}
        Scroll To    vertical=bottom    behavior=smooth
        sleep    1s
        ${title}    Get Title    then    value.split("|")[0]
        ${file}    Save Page As Pdf
        ...    pdfs/${title.replace('/', '_').strip()}.pdf
        # ...    displayHeaderFooter=False
        ...    format=A4
        ...    outline=True
        ...    margin={'top': '20px', 'right': '60px', 'bottom': '80px', 'left': '20px'}
        ...    printBackground=True
        ...    tagged=True
        ...    scale=0.8
        ${url}    Get Url
        Log To Console    ${file}
        Append To List    ${pdf_files}    ${{($file, $url)}}
    END
    Evaluate    __import__('sys').path.insert(0, 'tools')
    Evaluate    __import__('pdf_postprocess').postprocess($pdf_files, "website/static/pdfs/RFCP-Syllabus-${syllabus_version}.pdf")
