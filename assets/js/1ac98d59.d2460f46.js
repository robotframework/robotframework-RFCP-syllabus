"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[635],{2588:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"chapter-04/tags","title":"4.4 Test|Task Tags and Filtering Execution","description":"Recall the purpose of Test|Task Tags in Robot Framework","source":"@site/docs/chapter-04/04_tags.md","sourceDirName":"chapter-04","slug":"/chapter-04/tags","permalink":"/robotframework-RFCP-syllabus/docs/chapter-04/tags","draft":false,"unlisted":false,"editUrl":"https://github.com/robotframework/robotframework-RFCP-syllabus/edit/docusaurus/website/docs/chapter-04/04_tags.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"4.3 Initialization Files","permalink":"/robotframework-RFCP-syllabus/docs/chapter-04/init_files"},"next":{"title":"4.5 SKIP Test|Task Status","permalink":"/robotframework-RFCP-syllabus/docs/chapter-04/skip"}}');var i=t(4848),a=t(8453);const r={},o="4.4 Test|Task Tags and Filtering Execution",l={},c=[{value:"4.4.1 Assigning Tags to Tests|Tasks",id:"441-assigning-tags-to-teststasks",level:2},{value:"4.4.2 Using Tags to Filter Execution",id:"442-using-tags-to-filter-execution",level:2},{value:"4.4.2.1 Including Tests|Tasks by Tags",id:"4421-including-teststasks-by-tags",level:3},{value:"4.4.2.2 Excluding Tests|Tasks by Tags",id:"4422-excluding-teststasks-by-tags",level:3},{value:"4.4.2.3 Combining Include and Exclude Options",id:"4423-combining-include-and-exclude-options",level:3},{value:"4.4.2.4 Using Tag Patterns",id:"4424-using-tag-patterns",level:3},{value:"4.4.3 Reserved Tags",id:"443-reserved-tags",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"44-testtask-tags-and-filtering-execution",children:"4.4 Test|Task Tags and Filtering Execution"})}),"\n",(0,i.jsx)(s.admonition,{title:"Learning Objectives",type:"lo",children:(0,i.jsx)(s.admonition,{title:"LO-4.4",type:"K1",children:(0,i.jsx)(s.p,{children:"Recall the purpose of Test|Task Tags in Robot Framework"})})}),"\n",(0,i.jsxs)(s.p,{children:["In Robot Framework, ",(0,i.jsx)(s.strong,{children:"tags"})," offer a simple yet powerful mechanism for classifying and controlling the execution of tests|tasks.\nTags are free-form text labels that can be assigned to tests|tasks to provide metadata, enable flexible test selection, and organize test results."]}),"\n",(0,i.jsx)(s.p,{children:"Tags are also used to create a statistical summary of the test|task results in the execution protocols."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Important Note"}),": Tags are case-insensitive in Robot Framework, but the first appearance of a tag in a test|task is used as the tag name in reports and logs in its current case."]}),"\n",(0,i.jsx)(s.h2,{id:"441-assigning-tags-to-teststasks",children:"4.4.1 Assigning Tags to Tests|Tasks"}),"\n",(0,i.jsx)(s.admonition,{title:"Learning Objectives",type:"lo",children:(0,i.jsx)(s.admonition,{title:"LO-4.4.1",type:"K1",children:(0,i.jsx)(s.p,{children:"Recall the syntax and different ways to assign tags to tests|tasks"})})}),"\n",(0,i.jsx)(s.p,{children:"Tags can be assigned to tests|tasks in several ways:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"At the Suite Level"})," using the ",(0,i.jsx)(s.code,{children:"Test Tags"})," setting in the ",(0,i.jsx)(s.code,{children:"*** Settings ***"})," section or in an initialization file (",(0,i.jsx)(s.code,{children:"__init__.robot"}),").\nThis assigns tags to all tests|tasks within the suite:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-robotframework",children:"*** Settings ***\nTest Tags    smoke    regression\n"})}),"\n",(0,i.jsxs)(s.p,{children:["This will assign the tags ",(0,i.jsx)(s.code,{children:"smoke"})," and ",(0,i.jsx)(s.code,{children:"regression"})," to all tests|tasks in the suite."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"At the Test|Task Level"})," using the ",(0,i.jsx)(s.code,{children:"[Tags]"})," setting within individual tests|tasks. These tags are added in addition to any suite-level tags:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-robotframework",children:"*** Test Cases ***\nValid Login Test|Task\n    [Tags]    login    critical    -smoke\n    Perform Login Steps\n"})}),"\n",(0,i.jsxs)(s.p,{children:["This test|task will have the tags ",(0,i.jsx)(s.code,{children:"login"}),", ",(0,i.jsx)(s.code,{children:"critical"}),", and any tags assigned at the suite level, except ",(0,i.jsx)(s.code,{children:"smoke"}),".\nAdding a minus sign (",(0,i.jsx)(s.code,{children:"-"}),") before a tag removes it from the test|task's tags."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Using Variables"})," in tags to dynamically assign tag values:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-robotframework",children:"*** Variables ***\n${ENV}    production\n\n*** Test Cases ***\nData Processing Test|Task\n    [Tags]    environment:${ENV}\n    Process Data\n"})}),"\n",(0,i.jsxs)(s.p,{children:["This test|task will have a tag ",(0,i.jsx)(s.code,{children:"environment:production"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsxs)(s.strong,{children:["By Keyword ",(0,i.jsx)(s.code,{children:"Set Tags"})," or ",(0,i.jsx)(s.code,{children:"Remove Tags"})]})," to dynamically assign or remove tags during test|task execution:"]}),"\n",(0,i.jsxs)(s.p,{children:["See ",(0,i.jsx)(s.a,{href:"https://robotframework.org/robotframework/latest/libraries/BuiltIn.html#Set%20Tags",children:"BuiltIn"})," library documentation for more information."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"442-using-tags-to-filter-execution",children:"4.4.2 Using Tags to Filter Execution"}),"\n",(0,i.jsx)(s.admonition,{title:"Learning Objectives",type:"lo",children:(0,i.jsx)(s.admonition,{title:"LO-4.4.2",type:"K2",children:(0,i.jsx)(s.p,{children:"Understand how to filter tests|tasks using the command-line interface of Robot Framework"})})}),"\n",(0,i.jsx)(s.p,{children:"Tags can be used to select which tests|tasks are executed or skipped when running a suite. This is accomplished using command-line options when executing Robot Framework."}),"\n",(0,i.jsxs)(s.p,{children:["When filtering for tests|tasks with a specific tag, you should always use the lowercase version of the tag because possible logical operators are case-sensitive and uppercase.\n",(0,i.jsx)(s.code,{children:"AND"}),", ",(0,i.jsx)(s.code,{children:"OR"}),", and ",(0,i.jsx)(s.code,{children:"NOT"})," are the logical operators that can be used to combine tags in the filtering, but ",(0,i.jsx)(s.strong,{children:"they are not part of this syllabus!"})]}),"\n",(0,i.jsx)(s.h3,{id:"4421-including-teststasks-by-tags",children:"4.4.2.1 Including Tests|Tasks by Tags"}),"\n",(0,i.jsxs)(s.p,{children:["To include only tests|tasks that have a specific tag, use the ",(0,i.jsx)(s.code,{children:"--include"})," (or ",(0,i.jsx)(s.code,{children:"-i"}),") option followed by the tag name:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"robot --include smoke path/to/tests\n"})}),"\n",(0,i.jsxs)(s.p,{children:["This command will execute only the tests|tasks that have the ",(0,i.jsx)(s.code,{children:"smoke"})," tag."]}),"\n",(0,i.jsx)(s.h3,{id:"4422-excluding-teststasks-by-tags",children:"4.4.2.2 Excluding Tests|Tasks by Tags"}),"\n",(0,i.jsxs)(s.p,{children:["To exclude tests|tasks that have a specific tag, use the ",(0,i.jsx)(s.code,{children:"--exclude"})," (or ",(0,i.jsx)(s.code,{children:"-e"}),") option followed by the tag name:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"robot --exclude slow path/to/tests\n"})}),"\n",(0,i.jsxs)(s.p,{children:["This command will execute all tests|tasks except those that have the ",(0,i.jsx)(s.code,{children:"slow"})," tag.\nThe excluded tests|tasks will not be executed or logged at all.\nUse ",(0,i.jsx)(s.code,{children:"--skip"})," to not execute tests|tasks but include them in the logs as skipped. See ",(0,i.jsx)(s.a,{href:"/robotframework-RFCP-syllabus/docs/chapter-04/skip#451-skipping-by-tags-selection-cli",children:"4.5.1 Skipping By Tags Selection (CLI)"})," for more information."]}),"\n",(0,i.jsx)(s.h3,{id:"4423-combining-include-and-exclude-options",children:"4.4.2.3 Combining Include and Exclude Options"}),"\n",(0,i.jsxs)(s.p,{children:["You can combine ",(0,i.jsx)(s.code,{children:"--include"})," and ",(0,i.jsx)(s.code,{children:"--exclude"})," options to fine-tune which tests|tasks are executed:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"robot --include regression --exclude unstable path/to/tests\n"})}),"\n",(0,i.jsxs)(s.p,{children:["This command will execute tests|tasks that have the ",(0,i.jsx)(s.code,{children:"regression"})," tag but exclude any that also have the ",(0,i.jsx)(s.code,{children:"unstable"})," tag."]}),"\n",(0,i.jsx)(s.h3,{id:"4424-using-tag-patterns",children:"4.4.2.4 Using Tag Patterns"}),"\n",(0,i.jsxs)(s.p,{children:["Tags can include patterns using wildcards ",(0,i.jsx)(s.code,{children:"*"})," and ",(0,i.jsx)(s.code,{children:"?"})," to match multiple tags:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"*"})," matches any number of characters."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"?"})," matches any single character."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Examples:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Include tests|tasks with tags starting with ",(0,i.jsx)(s.code,{children:"feature-"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"robot --include feature-* path/to/tests\n"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Exclude tests|tasks with tags ending with ",(0,i.jsx)(s.code,{children:"-deprecated"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"robot --exclude *-deprecated path/to/tests\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"443-reserved-tags",children:"4.4.3 Reserved Tags"}),"\n",(0,i.jsxs)(s.p,{children:["Tags starting with ",(0,i.jsx)(s.code,{children:"robot:"})," are reserved for internal use by Robot Framework and should not be used in user-defined tags.\nUsing own tags with this prefix may lead to unexpected behavior in test execution and reporting."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"robot:exclude"}),": Marks tests|tasks that should be excluded from execution similar to ",(0,i.jsx)(s.code,{children:"--exclude"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"robot:skip"}),": Marks tests|tasks that should be skipped during execution similar to ",(0,i.jsx)(s.code,{children:"--skip"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>o});var n=t(6540);const i={},a=n.createContext(i);function r(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);