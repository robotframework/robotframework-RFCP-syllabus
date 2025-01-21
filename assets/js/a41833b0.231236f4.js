"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[415],{8986:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"chapter-02/writing_test","title":"2.6 Writing Test|Task and Calling Keywords","description":"Understand how to call imported keywords and how to structure keyword calls.","source":"@site/docs/chapter-02/06_writing_test.md","sourceDirName":"chapter-02","slug":"/chapter-02/writing_test","permalink":"/robotframework-RFCP-syllabus/docs/chapter-02/writing_test","draft":false,"unlisted":false,"editUrl":"https://github.com/robotframework/robotframework-RFCP-syllabus/edit/docusaurus/website/docs/chapter-02/06_writing_test.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"2.5 Keyword Interface and Documentation","permalink":"/robotframework-RFCP-syllabus/docs/chapter-02/keyword_interface"},"next":{"title":"3 Keyword Design, Variables, and Resource Files","permalink":"/robotframework-RFCP-syllabus/docs/chapter-03/overview"}}');var s=t(4848),r=t(8453);const o={},i="2.6 Writing Test|Task and Calling Keywords",d={},l=[{value:"2.6.1 Positional Arguments",id:"261-positional-arguments",level:2},{value:"2.6.2 Named Arguments",id:"262-named-arguments",level:2},{value:"2.6.3 Embedded Arguments / Using Behavior-Driven Specification",id:"263-embedded-arguments--using-behavior-driven-specification",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"26-writing-testtask-and-calling-keywords",children:"2.6 Writing Test|Task and Calling Keywords"})}),"\n",(0,s.jsx)(n.admonition,{title:"Learning Objectives",type:"lo",children:(0,s.jsx)(n.admonition,{title:"LO-2.6",type:"K2",children:(0,s.jsx)(n.p,{children:"Understand how to call imported keywords and how to structure keyword calls."})})}),"\n",(0,s.jsx)(n.p,{children:"A typical test case or task is a sequence of keyword calls that are executed in a specific order.\nAs learned before these keywords need to be imported into the suite or resource file before they can be used.\nWhen using keywords in a test|task or User Keyword, it is important to indent the keyword calls correctly.\nWith the exception of returning values, which is described in Chapter 3,\nthe name of the keywords is the first element of the keyword call followed by the arguments that are separated by two or more spaces."}),"\n",(0,s.jsxs)(n.p,{children:["The following example shows different ways to call imported keywords in a test case based on the ",(0,s.jsx)(n.code,{children:"Should Be Equal"})," keyword from the BuiltIn library."]}),"\n",(0,s.jsx)(n.p,{children:"The keyword name should be written as defined in the keyword documentation and may have single spaces or other special characters in it.\nAfter the keyword name the arguments are set.\nAll arguments are separated by multiple spaces from the keyword name and from each other and can also include single spaces.\nArgument values are stripped from leading and trailing spaces, but spaces within the argument value are preserved."}),"\n",(0,s.jsxs)(n.p,{children:["If an argument shall contain more than one consecutive spaces or start or end with spaces, the spaces must be escaped by a backslash ",(0,s.jsx)(n.code,{children:"\\"}),' to prevent them from being interpreted as a part of a "multi-space-separator".']}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-robotframework",children:'*** Test Cases ***\nMandatory Positional Arguments\n    [Documentation]    Only mandatory arguments are use positional\n    Should Be Equal    1    1\n\nMixed Positional Arguments\n    [Documentation]    Mandatory and optional arguments are used positional.\n    ...\n    ...    It is hard to figure out what the values are doing and which arguments are filled,\n    ...    without looking into the keyword documentation.\n    ...    Even though the argument `values` is kept at its default value `True` it must be set if later arguments shall be set positional.\n    Should Be Equal    hello    HELLO    Values are case-insensitive NOT equal    True    True\n\nAll Named Arguments\n    [Documentation]    Arguments are used named.\n    ...\n    ...    It is clear what the values are doing and which arguments are filled and order is not relevant.\n    ...    The argument `values` can be omitted and the order can be mixed\n    Should Be Equal    first=hello    second=HELLO    ignore_case=True    msg=Values are case-insensitive NOT equal\n\nMixed Named and Positional Arguments\n    [Documentation]    Arguments are used named and positional.\n    ...\n    ...    The positional arguments must be in order, but the subsequent named arguments may be in an arbitrary order.\n    ...    The first arg has the string value `" hello  spaces "` and the second arg has the string value `"HELLO  SPACE"`.\n    Should Be Equal    \\ hello \\ spaces \\    HELLO \\ SPACE   ignore_case=True    strip_spaces=True    msg=Values are case-insensitive NOT equal\n'})}),"\n",(0,s.jsx)(n.h2,{id:"261-positional-arguments",children:"2.6.1 Positional Arguments"}),"\n",(0,s.jsx)(n.admonition,{title:"Learning Objectives",type:"lo",children:(0,s.jsx)(n.admonition,{title:"LO-2.6.1",type:"K2",children:(0,s.jsx)(n.p,{children:"Understand the concept of how to set argument values positionally."})})}),"\n",(0,s.jsx)(n.p,{children:'When calling keywords, arguments can often be set positionally in the order they are defined in the keyword documentation.\nAn exception to this are "Named-Only Arguments" and "Free Named Arguments" that can only be set by their name.'}),"\n",(0,s.jsxs)(n.p,{children:["However, only using positional values can lead to poor readability as you can see in the previous example: ",(0,s.jsx)(n.code,{children:"Mixed Positional Arguments"}),"\nSome keywords do not have an obvious order of arguments.\nIn these cases, calling keywords with named arguments can lead to better readability and understanding of the keyword call."]}),"\n",(0,s.jsx)(n.p,{children:"Using arguments positionally is very handy for arguments that are obvious and easy to understand.\nIn the early login example the following keyword calls exists:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-robotframework",children:"*** Test Cases ***\nLogin User With Password\n    Login User    ironman    1234567890\n"})}),"\n",(0,s.jsx)(n.p,{children:"In that case it should be obvious that the first argument is the username and the second argument is the password.\nAlso the following keyword call should be easy to understand but could still be more explicit by using named arguments."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-robotframework",children:"*** Test Cases ***\nClick on x and y\n    Click On Coordinates    82    70\n    Click On Coordinates    x=82    y=70\n"})}),"\n",(0,s.jsx)(n.p,{children:'Calling keywords that has a "Variable Number of Positional Arguments" does require to set all preceding arguments by their position if the "Variable Number of Positional Arguments" shall be set.'}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-robotframework",children:"*** Test Cases ***\nRun Process Without Arguments\n    ${dir}  Run Process    command=dir\n    Log    ${dir.stdout}\n\nRun Process With Arguments\n    ${ping}    Run Process    ping    -c    2    127.0.0.1\n    Log    ${ping.stdout}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the second test ",(0,s.jsx)(n.code,{children:"Run Process With Arguments"})," the first given value ",(0,s.jsx)(n.code,{children:"ping"})," is assigned to the argument ",(0,s.jsx)(n.code,{children:"command"})," and all following values are collected into the ",(0,s.jsx)(n.code,{children:"arguments"})," argument of the keyword ",(0,s.jsx)(n.code,{children:"Run Process"})," as a list of values."]}),"\n",(0,s.jsx)(n.h2,{id:"262-named-arguments",children:"2.6.2 Named Arguments"}),"\n",(0,s.jsx)(n.admonition,{title:"Learning Objectives",type:"lo",children:(0,s.jsx)(n.admonition,{title:"LO-2.6.2",type:"K2",children:(0,s.jsx)(n.p,{children:"Understand the concept of named arguments and how to set argument values by their name."})})}),"\n",(0,s.jsx)(n.p,{children:"Keyword Calls with non-obvious arguments should use named argument calls if possible.\nAlso setting one optional argument but leaving the others at their default value is an indication to use named arguments."}),"\n",(0,s.jsxs)(n.p,{children:["Named arguments are set by their name followed by an equal sign ",(0,s.jsx)(n.code,{children:"="})," and the value of the argument.\nAll named arguments must be set after the positional arguments are set but can be set in any order."]}),"\n",(0,s.jsxs)(n.p,{children:['Equal signs are valid argument values and could therefore be misinterpreted as named arguments, if the text before the equal sign is an existing argument name or if "Free Named Arguments" are available at the called keyword.\nTo prevent that, an equal sign in argument values can be escaped by a backslash ',(0,s.jsx)(n.code,{children:"\\"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Example of escaping conflicting equal signs:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-robotframework",children:"*** Test Cases ***\nTest Escaping Equal Sign\n    Should Be Equal    second\\=2   Second\\=2    ignore_case=True\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The argument ",(0,s.jsx)(n.code,{children:"first"})," does get the value ",(0,s.jsx)(n.code,{children:"second=2"})," and the argument ",(0,s.jsx)(n.code,{children:"second"})," does get the value ",(0,s.jsx)(n.code,{children:"Second=2"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"263-embedded-arguments--using-behavior-driven-specification",children:"2.6.3 Embedded Arguments / Using Behavior-Driven Specification"}),"\n",(0,s.jsx)(n.admonition,{title:"Learning Objectives",type:"lo",children:(0,s.jsx)(n.admonition,{title:"LO-2.6.3",type:"K1",children:(0,s.jsx)(n.p,{children:"Recall how to use embedded arguments."})})}),"\n",(0,s.jsx)(n.p,{children:"Embedded Arguments are mostly used in Behavior-Driven Development (BDD) using Robot Frameworks Behavior-Driven Specification style."}),"\n",(0,s.jsxs)(n.p,{children:["Embedded Arguments are part of the keyword name as described in ",(0,s.jsx)(n.a,{href:"/robotframework-RFCP-syllabus/docs/chapter-02/keyword_interface#2523-embedded-arguments",children:"2.5.2.3 Embedded Arguments"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"When calling keywords with embedded arguments, all characters that are at the position where the embedded argument is expected are used as the argument value."}),"\n",(0,s.jsxs)(n.p,{children:["See the example in section ",(0,s.jsx)(n.a,{href:"/robotframework-RFCP-syllabus/docs/chapter-02/keyword_interface#2523-embedded-arguments",children:"2.5.2.3 Embedded Arguments"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["See also ",(0,s.jsx)(n.a,{href:"/robotframework-RFCP-syllabus/docs/chapter-02/keyword_interface#2523-embedded-arguments",children:"2.5.2.3 Embedded Arguments"})," for more information about how to use embedded arguments."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var a=t(6540);const s={},r=a.createContext(s);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);