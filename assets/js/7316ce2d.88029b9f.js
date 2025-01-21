"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[234],{8740:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"chapter-02/suitefile","title":"2.1 Suite File & Tree Structure","description":"Understand which files and directories are considered suites and how they are structured in a suite tree.","source":"@site/docs/chapter-02/01_suitefile.md","sourceDirName":"chapter-02","slug":"/chapter-02/suitefile","permalink":"/robotframework-RFCP-syllabus/docs/chapter-02/suitefile","draft":false,"unlisted":false,"editUrl":"https://github.com/robotframework/robotframework-RFCP-syllabus/edit/docusaurus/website/docs/chapter-02/01_suitefile.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"2 Getting Started with Robot Framework","permalink":"/robotframework-RFCP-syllabus/docs/chapter-02/overview"},"next":{"title":"2.2 Basic Suite File Syntax","permalink":"/robotframework-RFCP-syllabus/docs/chapter-02/suitefile_syntax"}}');var n=i(4848),o=i(8453);const r={},d="2.1 Suite File & Tree Structure",a={},c=[{value:"2.1.1 Suite Files",id:"211-suite-files",level:2},{value:"2.1.2 Sections and Their Artifacts",id:"212-sections-and-their-artifacts",level:2},{value:"2.1.2.1 Introduction in <code>*** Settings ***</code> Section",id:"2121-introduction-in--settings--section",level:3},{value:"2.1.2.2 Introduction in <code>*** Variables ***</code> Section",id:"2122-introduction-in--variables--section",level:3},{value:"2.1.2.3 Introduction in <code>*** Test Cases ***</code> or <code>*** Tasks ***</code> Section",id:"2123-introduction-in--test-cases--or--tasks--section",level:3},{value:"2.1.2.4 Introduction in <code>*** Keywords ***</code> Section",id:"2124-introduction-in--keywords--section",level:3},{value:"2.1.2.5 Introduction in <code>*** Comments ***</code> Section",id:"2125-introduction-in--comments--section",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"21-suite-file--tree-structure",children:"2.1 Suite File & Tree Structure"})}),"\n",(0,n.jsx)(t.admonition,{title:"Learning Objectives",type:"lo",children:(0,n.jsx)(t.admonition,{title:"LO-2.1",type:"K2",children:(0,n.jsx)(t.p,{children:"Understand which files and directories are considered suites and how they are structured in a suite tree."})})}),"\n",(0,n.jsx)(t.p,{children:"When executing Robot Framework, it either parses directory trees or files, depending on which paths are given."}),"\n",(0,n.jsxs)(t.p,{children:["The given path to Robot Framework where it starts parsing is considered the ",(0,n.jsx)(t.strong,{children:"Root Suite"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["If the path to a single file is given as ",(0,n.jsx)(t.strong,{children:"Root Suite"})," directly to Robot Framework, only this file is parsed."]}),"\n",(0,n.jsxs)(t.p,{children:["If a directory path is given, starting at this location, Robot Framework will parse all ",(0,n.jsx)(t.code,{children:"*.robot"})," files and directories within this path.\nRobot Framework analyzes all containing files and determines if they contain test cases or tasks. If they do, they are considered ",(0,n.jsx)(t.strong,{children:"Suite Files"})," or ",(0,n.jsx)(t.strong,{children:"Low-Level Suites"}),".\nAll directories that either directly or indirectly contain a Suite File are considered ",(0,n.jsx)(t.strong,{children:"Suites Directories"})," or ",(0,n.jsx)(t.strong,{children:"Higher-Level Suites"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The ordering of suites during execution is, by default, defined by their name and hierarchy.\nAll files and directories, which are suites in one directory, are considered on the same level and are executed in case-insensitive alphabetical order."}),"\n",(0,n.jsxs)(t.p,{children:["It is possible to define the order without influencing the name of the suite by adding a prefix followed by two underscores ",(0,n.jsx)(t.code,{children:"__"})," to the name of the directory or file. This prefix is NOT considered part of the name.\nSo ",(0,n.jsx)(t.code,{children:"01__First_Suite.robot"})," sets the suite name to ",(0,n.jsx)(t.code,{children:"First Suite"}),", while ",(0,n.jsx)(t.code,{children:"2_Second_Suite.robot"})," sets the suite name to ",(0,n.jsx)(t.code,{children:"2 Second Suite"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"One or more underscores in file or directory names are replaced by space characters as suite names."}),"\n",(0,n.jsx)(t.p,{children:"Legend:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-plaintext",children:"\u25b7 Directory (No Suite)\n\u25b6\ufe0e Suite Directory\n\u25fb\ufe0e File (No Suite)\n\u25fc\ufe0e Suite File\n"})}),"\n",(0,n.jsx)(t.p,{children:"Example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-plaintext",children:" ----- Tree Structure / Order --------- | ---- Suite Name ---------\n  \u25b6\ufe0e Root_Suite                          | Root Suite\n    \u25fc\ufe0e A_Suite.robot                     | A Suite\n    \u25b6\ufe0e Earlier_Suite_Directory           | Earlier Suite Directory\n      \u25fc\ufe0e B_Suite.robot                   | B Suite\n      \u25fc\ufe0e C_Suite.robot                   | C Suite\n    \u25b7 Keywords (No Suite)               |\n      \u25fb\ufe0e technical_keywords.resource     |\n    \u25b6\ufe0e Later_Suite_Directory             | Later Suite Directory\n      \u25fc\ufe0e 01__FirstSuite.robot            | First Suite\n      \u25fc\ufe0e 02__SecondSuite.robot           | Second Suite\n      \u25b6\ufe0e 03__ThirdSuite                  | Third Suite\n        \u25fc\ufe0e 01__FirstSubSuite.robot       | First Sub Suite\n        \u25fc\ufe0e 02__SecondSubSuite.robot      | Second Sub Suite\n      \u25fc\ufe0e 04__FourthSuite.robot           | Fourth Suite\n"})}),"\n",(0,n.jsx)(t.h2,{id:"211-suite-files",children:"2.1.1 Suite Files"}),"\n",(0,n.jsx)(t.admonition,{title:"Learning Objectives",type:"lo",children:(0,n.jsx)(t.admonition,{title:"LO-2.1.1",type:"K1",children:(0,n.jsx)(t.p,{children:"Recall the conditions and requirements for a file to be considered a Suite file"})})}),"\n",(0,n.jsxs)(t.p,{children:["Robot Framework parses files with the extension ",(0,n.jsx)(t.code,{children:".robot"})," and searches for test cases or tasks within these files."]}),"\n",(0,n.jsxs)(t.p,{children:["A parsed file that contains at least one test case or task is called a ",(0,n.jsx)(t.strong,{children:"Suite File"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["A Suite File ",(0,n.jsx)(t.strong,{children:"either"})," contains ",(0,n.jsx)(t.code,{children:"*** Test Cases ***"})," (in Test Suites) ",(0,n.jsx)(t.strong,{children:"or"})," ",(0,n.jsx)(t.code,{children:"*** Tasks ***"})," (in Task Suites), but it CANNOT contain both types simultaneously."]}),"\n",(0,n.jsx)(t.h2,{id:"212-sections-and-their-artifacts",children:"2.1.2 Sections and Their Artifacts"}),"\n",(0,n.jsx)(t.admonition,{title:"Learning Objectives",type:"lo",children:(0,n.jsx)(t.admonition,{title:"LO-2.1.2",type:"K1",children:(0,n.jsx)(t.p,{children:"Recall the available sections in a suite file and their purpose."})})}),"\n",(0,n.jsxs)(t.p,{children:["Robot Framework data files are defined in different sections.\nThese sections are recognized by their header row.\nThe format is ",(0,n.jsx)(t.code,{children:"*** <Section Name> ***"})," with three asterisks before and after the section name and section names in ",(0,n.jsx)(t.em,{children:"Title Case"})," separated by a space."]}),"\n",(0,n.jsx)(t.p,{children:"The following sections are recognized by Robot Framework and are recommended to be used in the order they are listed:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"*** Settings ***"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"*** Variables ***"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"*** Test Cases ***"})," or ",(0,n.jsx)(t.code,{children:"*** Tasks ***"})," (mandatory in Suite Files)"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"*** Keywords ***"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"*** Comments ***"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The sections ",(0,n.jsx)(t.code,{children:"*** Settings ***"}),", ",(0,n.jsx)(t.code,{children:"*** Variables ***"}),", ",(0,n.jsx)(t.code,{children:"*** Keywords ***"}),", and ",(0,n.jsx)(t.code,{children:"*** Comments ***"})," are optional in suites and can be omitted if not needed."]}),"\n",(0,n.jsxs)(t.h3,{id:"2121-introduction-in--settings--section",children:["2.1.2.1 Introduction in ",(0,n.jsx)(t.code,{children:"*** Settings ***"})," Section"]}),"\n",(0,n.jsxs)(t.admonition,{title:"Learning Objectives",type:"lo",children:[(0,n.jsx)(t.admonition,{title:"LO-2.1.2.1-1",type:"K1",children:(0,n.jsx)(t.p,{children:"Recall the available settings in a suite file."})}),(0,n.jsx)(t.admonition,{title:"LO-2.1.2.1-2",type:"K2",children:(0,n.jsx)(t.p,{children:"Understand the concepts of suite settings and how to define them."})})]}),"\n",(0,n.jsxs)(t.p,{children:["This section is used to configure various aspects of the test|task suite.\nIt allows you to import keywords from external libraries (",(0,n.jsx)(t.code,{children:"Library"}),") or resource files (",(0,n.jsx)(t.code,{children:"Resource"}),"), and import variables (",(0,n.jsx)(t.code,{children:"Variables"}),") from variable files (Not part of this syllabus) that are needed for execution in the containing tests|tasks."]}),"\n",(0,n.jsxs)(t.p,{children:["In this section, the suite name, that is normally derived from the file name, can be redefined with the ",(0,n.jsx)(t.code,{children:"Name"})," setting and its documentation can be defined with the ",(0,n.jsx)(t.code,{children:"Documentation"})," setting."]}),"\n",(0,n.jsxs)(t.p,{children:["Additional metadata can be defined by multiple ",(0,n.jsx)(t.code,{children:"Metadata"})," entries, which can containd key-value pairs that can be used to store additional information about the suite, like the author, the version, or related requirements of the suite."]}),"\n",(0,n.jsxs)(t.p,{children:["This section can also define keywords called for execution flow control, such as ",(0,n.jsx)(t.code,{children:"Suite Setup"})," and ",(0,n.jsx)(t.code,{children:"Suite Teardown"}),", which are executed before and after the suite's tests run. See ",(0,n.jsx)(t.a,{href:"/robotframework-RFCP-syllabus/docs/chapter-04/setups",children:"4.1 Setups (Suite, Test|Task, Keyword)"})," and\n",(0,n.jsx)(t.a,{href:"/robotframework-RFCP-syllabus/docs/chapter-04/teardowns",children:"4.2 Teardowns (Suite, Test|Task, Keyword)"})," for more information."]}),"\n",(0,n.jsxs)(t.p,{children:["Additionally, some settings can define defaults for all tests|tasks in the suite, which can be extended or overwritten in the individual tests|tasks.\nThose settings are prefixed with either ",(0,n.jsx)(t.code,{children:"Test"})," or ",(0,n.jsx)(t.code,{children:"Task"}),", according to the type of suite and the following section type (",(0,n.jsx)(t.code,{children:"*** Test Cases ***"})," or ",(0,n.jsx)(t.code,{children:"*** Tasks ***"}),"), like ",(0,n.jsx)(t.code,{children:"Test Timeout"}),", while the local setting is in square brackets and without the prefix like: ",(0,n.jsx)(t.code,{children:"[Timeout]"}),"."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Test Setup"}),"/",(0,n.jsx)(t.code,{children:"Task Setup"})," (locally: ",(0,n.jsx)(t.code,{children:"[Setup]"}),") and ",(0,n.jsx)(t.code,{children:"Test Teardown"}),"/",(0,n.jsx)(t.code,{children:"Task Teardown"})," (locally ",(0,n.jsx)(t.code,{children:"[Teardown]"}),") define which keywords are executed before and after each individual test|task. The local setting overrides the suite's default. See ",(0,n.jsx)(t.a,{href:"/robotframework-RFCP-syllabus/docs/chapter-04/setups",children:"4.1 Setups (Suite, Test|Task, Keyword)"})," and\n",(0,n.jsx)(t.a,{href:"/robotframework-RFCP-syllabus/docs/chapter-04/teardowns",children:"4.2 Teardowns (Suite, Test|Task, Keyword)"})," for more information."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Test Timeout"}),"/",(0,n.jsx)(t.code,{children:"Task Timeout"})," (locally ",(0,n.jsx)(t.code,{children:"[Timeout]"}),") defines the maximum time a test|task is allowed to run before it is marked as failed. The local setting overrides the suite's default."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Test Tags"}),"/",(0,n.jsx)(t.code,{children:"Task Tags"})," (locally ",(0,n.jsx)(t.code,{children:"[Tags]"}),") define tags that are assigned to tests|tasks in the suite and can be used to filter tests|tasks for execution or for attributing information to the tests|tasks. The local setting appends or removes tags defined by the suite's default. See ",(0,n.jsx)(t.a,{href:"/robotframework-RFCP-syllabus/docs/chapter-04/tags",children:"4.4 Test|Task Tags and Filtering Execution"})," for more information."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Test Template"}),"/",(0,n.jsx)(t.code,{children:"Task Template"})," (locally ",(0,n.jsx)(t.code,{children:"[Template]"}),") defines a template keyword that defines the test|task body and is typically used for Data-Driven Testing where each test has the same keywords but different argument data. The local setting overrides the suite's default."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Similar to test|task tags, also keyword tags can be defined in the ",(0,n.jsx)(t.code,{children:"*** Settings ***"})," section with the ",(0,n.jsx)(t.code,{children:"Keyword Tags"})," (locally ",(0,n.jsx)(t.code,{children:"[Tags]"}),") setting, which can be used to set keyword tags to the keywords. The local setting appends or removes tags defined by the suite's default."]}),"\n",(0,n.jsxs)(t.h3,{id:"2122-introduction-in--variables--section",children:["2.1.2.2 Introduction in ",(0,n.jsx)(t.code,{children:"*** Variables ***"})," Section"]}),"\n",(0,n.jsx)(t.admonition,{title:"Learning Objectives",type:"lo",children:(0,n.jsx)(t.admonition,{title:"LO-2.1.2.2",type:"K1",children:(0,n.jsxs)(t.p,{children:["Recall the purpose of the ",(0,n.jsx)(t.code,{children:"*** Variables ***"})," section."]})})}),"\n",(0,n.jsx)(t.p,{children:"This section is used to define suite variables that are used in the suite or its tests|tasks or inside their keywords."}),"\n",(0,n.jsx)(t.p,{children:"The most common use case is to define these variables as constants that contain a static value during execution.\nThis can either be a default value, that may be overwritten by globally defined variables via the Command Line Interface (CLI) or a constant value that is used on multiple places in the suite."}),"\n",(0,n.jsx)(t.p,{children:"In some cases, these variables are also dynamically reassigned during the execution of the suite, but this is not recommended and should be avoided if possible, because this may lead to test|task runtime dependancies and errors caused by these side-effects that are hard to debug and find."}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsxs)(t.a,{href:"/robotframework-RFCP-syllabus/docs/chapter-03/variables#322--variables--section",children:["3.2.2 ",(0,n.jsx)(t.code,{children:"*** Variables ***"})," Section"]})," for more information about the ",(0,n.jsx)(t.code,{children:"*** Variables ***"})," section."]}),"\n",(0,n.jsxs)(t.h3,{id:"2123-introduction-in--test-cases--or--tasks--section",children:["2.1.2.3 Introduction in ",(0,n.jsx)(t.code,{children:"*** Test Cases ***"})," or ",(0,n.jsx)(t.code,{children:"*** Tasks ***"})," Section"]}),"\n",(0,n.jsx)(t.admonition,{title:"Learning Objectives",type:"lo",children:(0,n.jsx)(t.admonition,{title:"LO-2.1.2.3",type:"K2",children:(0,n.jsxs)(t.p,{children:["Understand the purpose of the ",(0,n.jsx)(t.code,{children:"*** Test Cases ***"})," or ",(0,n.jsx)(t.code,{children:"*** Tasks ***"})," section."]})})}),"\n",(0,n.jsx)(t.p,{children:"This section defines the executable elements of a suite.\nTest cases and tasks are technically synonyms for each other.\nHowever, users have to choose one of the two modes of suite execution that Robot Framework offers."}),"\n",(0,n.jsxs)(t.p,{children:["Each test case or task is structured using an indentation-based format. The first un-indented line specifies the name of the test|task, followed by indented lines containing ",(0,n.jsx)(t.strong,{children:"keyword calls"})," and their ",(0,n.jsx)(t.strong,{children:"arguments"})," and test|task-specific settings.\nThese optional settings like ",(0,n.jsx)(t.code,{children:"[Setup]"}),", ",(0,n.jsx)(t.code,{children:"[Teardown]"}),", and ",(0,n.jsx)(t.code,{children:"[Timeout]"})," can be applied to individual test cases or tasks to control their behavior or provide additional details."]}),"\n",(0,n.jsx)(t.p,{children:"One kind of this section is mandatory in suite files but is not allowed in resource files."}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/robotframework-RFCP-syllabus/docs/chapter-02/writing_test",children:"2.6 Writing Test|Task and Calling Keywords"})," for more information about the ",(0,n.jsx)(t.code,{children:"*** Test Cases ***"})," or ",(0,n.jsx)(t.code,{children:"*** Tasks ***"})," section."]}),"\n",(0,n.jsxs)(t.h3,{id:"2124-introduction-in--keywords--section",children:["2.1.2.4 Introduction in ",(0,n.jsx)(t.code,{children:"*** Keywords ***"})," Section"]}),"\n",(0,n.jsx)(t.admonition,{title:"Learning Objectives",type:"lo",children:(0,n.jsx)(t.admonition,{title:"LO-2.1.2.4",type:"K2",children:(0,n.jsxs)(t.p,{children:["Understand the purpose and limitations of the ",(0,n.jsx)(t.code,{children:"*** Keywords ***"})," section."]})})}),"\n",(0,n.jsxs)(t.p,{children:["This section allows you to define ",(0,n.jsx)(t.strong,{children:"locally scoped user keywords"})," that can only be used within this suite where they are defined,\nwhile keywords defined in resource files can be used in any suite that imports these resource files.\nKeywords defined in a suite are therefore not reusable outside the suite,\nbut they are often used to organize and structure tests|tasks for improved readability and maintainability.\nThis section is particularly useful for defining suite-specific actions,\nsuch as ",(0,n.jsx)(t.strong,{children:"Suite Setup"})," keywords or similar kinds,\nwhich are relevant only to the suite they belong to."]}),"\n",(0,n.jsx)(t.p,{children:"While these keywords are not globally accessible,\nthey serve a crucial role in making the suite more modular\nand understandable by breaking down complex sequences into smaller, manageable parts.\nDefining keywords locally in this section enhances the maintainability of the tests|tasks within the suite,\nensuring that even large and intricate suites remain well-structured and easy to manage."}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsxs)(t.a,{href:"/robotframework-RFCP-syllabus/docs/chapter-03/user_keyword#331--keywords--section",children:["3.3.1 ",(0,n.jsx)(t.code,{children:"*** Keywords ***"})," Section"]})," for more information about the ",(0,n.jsx)(t.code,{children:"*** Keywords ***"})," section."]}),"\n",(0,n.jsxs)(t.h3,{id:"2125-introduction-in--comments--section",children:["2.1.2.5 Introduction in ",(0,n.jsx)(t.code,{children:"*** Comments ***"})," Section"]}),"\n",(0,n.jsx)(t.p,{children:"This section is used to add comments to the suite file or resource file.\nAll content in this section is ignored by Robot Framework and is not executed or parsed."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>d});var s=i(6540);const n={},o=s.createContext(n);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);