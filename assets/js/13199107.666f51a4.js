"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[244],{938:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"chapter-05/control_structures","title":"5.2 Control Structures","description":"Robot Framework is a Turing-complete language and supports all common control structures, including IF-Statements, FOR-Loops, WHILE-Loops and more.","source":"@site/docs/chapter-05/02_control_structures.md","sourceDirName":"chapter-05","slug":"/chapter-05/control_structures","permalink":"/robotframework-RFCP-syllabus/docs/chapter-05/control_structures","draft":false,"unlisted":false,"editUrl":"https://github.com/robotframework/robotframework-RFCP-syllabus/edit/docusaurus/website/docs/chapter-05/02_control_structures.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"5.1 Advanced Variables","permalink":"/robotframework-RFCP-syllabus/docs/chapter-05/advanced_variables"},"next":{"title":"Glossary","permalink":"/robotframework-RFCP-syllabus/docs/glossary/"}}');var i=s(4848),o=s(8453);const r={},a="5.2 Control Structures",l={},c=[{value:"5.2.1 IF Statements",id:"521-if-statements",level:2},{value:"5.2.1.1 Basic IF Syntax",id:"5211-basic-if-syntax",level:3},{value:"5.2.2 IF/ELSE IF/ELSE Structure",id:"522-ifelse-ifelse-structure",level:2},{value:"5.2.3 Inline IF Statement",id:"523-inline-if-statement",level:2},{value:"5.2.4 FOR Loops",id:"524-for-loops",level:2},{value:"5.2.4.1 Basic FOR Loop Syntax",id:"5241-basic-for-loop-syntax",level:3},{value:"5.2.5 WHILE Loops",id:"525-while-loops",level:2},{value:"5.2.6 BREAK and CONTINUE",id:"526-break-and-continue",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"52-control-structures",children:"5.2 Control Structures"})}),"\n",(0,i.jsx)(n.p,{children:"Robot Framework is a Turing-complete language and supports all common control structures, including IF-Statements, FOR-Loops, WHILE-Loops and more.\nWhile it is not expected that RCFPs can write complex control structures, they should understand their purpose."}),"\n",(0,i.jsx)(n.p,{children:"In some cases, it is necessary to use control structures to handle different cases, iterate over a list of values, or execute an action until a condition is met."}),"\n",(0,i.jsx)(n.h2,{id:"521-if-statements",children:"5.2.1 IF Statements"}),"\n",(0,i.jsx)(n.admonition,{title:"Learning Objectives",type:"lo",children:(0,i.jsx)(n.admonition,{title:"LO-5.2.1",type:"K2",children:(0,i.jsx)(n.p,{children:"Understand the purpose and basic concept of IF-Statements"})})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"IF/ELSE"})," syntax in Robot Framework is used to control the flow of test|task execution by allowing certain keywords to run only when specific conditions are met.\nThis is achieved by evaluating conditions written as Python expressions, enabling dynamic decision-making within your tests|tasks."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"IF"})," statement begins with the ",(0,i.jsx)(n.code,{children:"IF"})," token and ends with an ",(0,i.jsx)(n.code,{children:"END"}),", enclosing the keywords executed when the condition is true.\nAn optional ",(0,i.jsx)(n.code,{children:"ELSE"})," or ",(0,i.jsx)(n.code,{children:"ELSE IF"})," can specify alternative actions when the initial condition is false.\nThis structure enhances the flexibility and responsiveness of your tests|tasks, allowing them to adapt based on variables and outcomes encountered during execution."]}),"\n",(0,i.jsx)(n.h3,{id:"5211-basic-if-syntax",children:"5.2.1.1 Basic IF Syntax"}),"\n",(0,i.jsx)(n.p,{children:"When certain keywords should be executed only if a condition is met, the IF statement can be used."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Structure"}),":","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-robotframework",children:"IF    <condition>\n    <keywords>\n    <keywords>\nEND\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Example"}),":","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-robotframework",children:"*** Test Cases ***\nCheck Status\n    IF    '${status}' == 'SUCCESS'\n        Log    Operation was successful.\n    END\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Executes the ",(0,i.jsx)(n.code,{children:"Log"})," keyword if ",(0,i.jsx)(n.code,{children:"${status}"})," is the string ",(0,i.jsx)(n.code,{children:"SUCCESS"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"522-ifelse-ifelse-structure",children:"5.2.2 IF/ELSE IF/ELSE Structure"}),"\n",(0,i.jsx)(n.p,{children:"To execute different alternative actions based on various conditions, use the IF/ELSE IF/ELSE structure."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Structure"}),":","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-robotframework",children:"IF    <condition1>\n    <keywords if condition1 is true>\nELSE IF    <condition2>\n    <keywords if condition2 is true>\nELSE\n    <keywords if all conditions are false>\nEND\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Example"}),":","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-robotframework",children:"*** Test Cases ***\nEvaluate Score\n    IF    ${score} >= 90\n        Log    Grade A\n    ELSE IF    ${score} >= 80\n        Log    Grade B\n    ELSE\n        Log    Grade C or below\n    END\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"523-inline-if-statement",children:"5.2.3 Inline IF Statement"}),"\n",(0,i.jsx)(n.p,{children:"For single conditional keywords, the simplified inline IF statement can be used."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Structure"}),":","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-robotframework",children:"IF    <condition>    <keyword>    [arguments]\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Example"}),":","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-robotframework",children:"*** Test Cases ***\nQuick Check\n    IF    ${user} == 'Admin'    Log    Admin access granted.\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Executes the ",(0,i.jsx)(n.code,{children:"Log"})," keyword if ",(0,i.jsx)(n.code,{children:"${user}"})," equals ",(0,i.jsx)(n.code,{children:"'Admin'"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["No ",(0,i.jsx)(n.code,{children:"END"})," is needed for inline IF."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"524-for-loops",children:"5.2.4 FOR Loops"}),"\n",(0,i.jsx)(n.admonition,{title:"Learning Objectives",type:"lo",children:(0,i.jsx)(n.admonition,{title:"LO-5.2.4",type:"K2",children:(0,i.jsx)(n.p,{children:"Understand the purpose and basic concept of FOR Loops"})})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"FOR"})," loop in Robot Framework repeats a set of keywords multiple times, iterating over a sequence of values.\nThis allows you to perform the same actions for different items without duplicating code, enhancing the efficiency and readability of your keyword logic."]}),"\n",(0,i.jsxs)(n.p,{children:["Robot Framework has four types of FOR loops; this chapter focuses on the basic ",(0,i.jsx)(n.code,{children:"FOR-IN"})," loop."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"FOR-IN"})," is used to iterate over a list of values."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The other types are ",(0,i.jsx)(n.code,{children:"FOR-IN-RANGE"}),", ",(0,i.jsx)(n.code,{children:"FOR-IN-ENUMERATE"}),", and ",(0,i.jsx)(n.code,{children:"FOR-IN-ZIP"}),", which are more advanced and less commonly required."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"FOR-IN-RANGE"})," iterates over a range of numbers."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"FOR-IN-ENUMERATE"})," iterates over a list of values and their indexes."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"FOR-IN-ZIP"})," iterates over multiple lists simultaneously."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"FOR"})," loop begins with the ",(0,i.jsx)(n.code,{children:"FOR"})," token, followed by a loop variable, the ",(0,i.jsx)(n.code,{children:"IN"})," token, and the iterable variable or list of values.\nThe loop variable takes on each value in the sequence one at a time, executing the enclosed keywords for each value."]}),"\n",(0,i.jsx)(n.h3,{id:"5241-basic-for-loop-syntax",children:"5.2.4.1 Basic FOR Loop Syntax"}),"\n",(0,i.jsx)(n.p,{children:"When you need to execute the same keywords for each item in a list or sequence, you can use the FOR-IN loop."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Structure"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-robotframework",children:"FOR    ${loop_variable}    IN    <value1>    <value2>    ...    <valueN>\n    <keywords>\n    <keywords>\nEND\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Since ",(0,i.jsx)(n.code,{children:"<value1>    <value2>    ...    <valueN>"})," can be the same as an unpacked list like ",(0,i.jsx)(n.code,{children:"@{values}"}),", this is the most common way to use the FOR loop."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-robotframework",children:"FOR    ${loop_variable}    IN    @{iterable_values}\n    <keywords>\n    <keywords>\nEND\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-robotframework",children:"*** Variables ***\n@{fruits} =    apple    banana    cherry\n\n*** Test Cases ***\nProcess Fruit List\n    FOR    ${fruit}    IN    @{fruits}\n        Log    Processing ${fruit}\n    END\n"})}),"\n",(0,i.jsx)(n.p,{children:"This would essentially be the same as:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-robotframework",children:"*** Test Cases ***\nProcess Fruits separately\n    Log    Processing apple\n    Log    Processing banana\n    Log    Processing cherry\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"525-while-loops",children:"5.2.5 WHILE Loops"}),"\n",(0,i.jsx)(n.admonition,{title:"Learning Objectives",type:"lo",children:(0,i.jsx)(n.admonition,{title:"LO-5.2.5",type:"K2",children:(0,i.jsx)(n.p,{children:"Understand the purpose and basic concept of WHILE Loops"})})}),"\n",(0,i.jsxs)(n.p,{children:["While the ",(0,i.jsx)(n.code,{children:"FOR"})," loop iterates over a known amount of values, ",(0,i.jsx)(n.code,{children:"WHILE"})," loops repeat their body as long as a condition is met.\nThis is typically used in cases where the number of iterations is not known in advance or depends on a dynamic condition."]}),"\n",(0,i.jsxs)(n.p,{children:["One example use case would be scrolling down a page until a certain element is visible.\nIn this case, you would use a ",(0,i.jsx)(n.code,{children:"WHILE"})," loop to keep scrolling until the element is found or a maximum iteration limit is reached."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"WHILE"})," loop begins with the ",(0,i.jsx)(n.code,{children:"WHILE"})," token, followed by a condition that evaluates to true or false.\nIf the condition is true, the loop body is executed, and the condition is re-evaluated.\nIf the condition is false, the loop is exited, and execution continues with the next keyword after the ",(0,i.jsx)(n.code,{children:"END"}),".\nThe condition is similar to an IF statement, a Python expression that evaluates to a boolean value."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Structure"}),":","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-robotframework",children:"WHILE    <condition>\n    <keywords>\n    <keywords>\nEND\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Example"}),":","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-robotframework",children:"*** Test Cases ***\nScroll Down Until Element Visible\n    ${element_visible}    Get Element Visibility    <locator>\n    WHILE    not ${element_visible}\n        Scroll Down\n        ${element_visible}    Get Element Visibility    <locator>\n    END\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"WHILE"})," loops have a configurable iteration limit in Robot Framework.\nWhen the maximum number of iterations is reached, the loop exits with a failure, causing the test|task or keyword to fail.\nThis prevents infinite loops and ensures that tests|tasks do not hang indefinitely."]}),"\n",(0,i.jsx)(n.h2,{id:"526-break-and-continue",children:"5.2.6 BREAK and CONTINUE"}),"\n",(0,i.jsx)(n.admonition,{title:"Learning Objectives",type:"lo",children:(0,i.jsx)(n.admonition,{title:"LO-5.2.6",type:"K2",children:(0,i.jsx)(n.p,{children:"Understand the purpose and basic concept of the BREAK and CONTINUE statements"})})}),"\n",(0,i.jsxs)(n.p,{children:["In some cases, it is helpful to stop a loop or skip the remaining part of a loop and continue with the next iteration.\nThis can be achieved with the ",(0,i.jsx)(n.code,{children:"BREAK"})," and ",(0,i.jsx)(n.code,{children:"CONTINUE"})," statements."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"BREAK"})," stops the current loop and exits it immediately."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"CONTINUE"})," skips the remaining part of the current iteration and continues with the next iteration."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["These can, of course, be combined with ",(0,i.jsx)(n.code,{children:"IF"})," statements to control the loop flow."]}),"\n",(0,i.jsxs)(n.p,{children:["Example 1 ",(0,i.jsx)(n.code,{children:"BREAK"}),":"]}),"\n",(0,i.jsxs)(n.p,{children:["Suppose we want to search for an element on a page and scroll down until it is visible.\nThis time, we do not know the number of pages we can scroll, so we use the ",(0,i.jsx)(n.code,{children:"WHILE"})," loop.\nHowever, we want the loop to iterate and ",(0,i.jsx)(n.code,{children:"BREAK"})," once we have found the element."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-robotframework",children:"*** Test Cases ***\nScroll Down Until Element Visible\n    WHILE    True    # This would loop to the max iteration limit\n        ${element_visible}    Get Element Visibility    <locator>\n        IF    ${element_visible}    BREAK\n        Scroll Down\n    END\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Here we used ",(0,i.jsx)(n.code,{children:"BREAK"})," to exit the loop before scrolling down if the element is visible."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"CONTINUE"})," is useful when you want to skip the remaining part of the current iteration and continue with the next iteration if a condition is met.\nIn that case, combine ",(0,i.jsx)(n.code,{children:"IF"})," and ",(0,i.jsx)(n.code,{children:"CONTINUE"})," to control the loop flow."]}),"\n",(0,i.jsxs)(n.p,{children:["Example 2 ",(0,i.jsx)(n.code,{children:"CONTINUE"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-robotframework",children:"*** Settings ***\nLibrary     Collections\n\n\n*** Variables ***\n&{participant_1}    name=Alice      age=23\n&{participant_2}    name=Bob        age=42\n&{participant_3}    name=Charlie    age=33\n&{participant_4}    name=Pekka      age=44\n@{participants}     ${participant_1}    ${participant_2}    ${participant_3}    ${participant_4}\n\n\n*** Test Cases ***\nFind Older Participants\n    ${older_participants}    Get Older Participants    ${participants}    40\n    Should Be Equal    ${older_participants}[0][name]    Bob\n    Should Be Equal    ${older_participants}[1][name]    Pekka\n\n\n*** Keywords ***\nGet Older Participants\n    [Arguments]    ${participants}    ${minimum_age}\n    VAR    @{older_participants}                                     # Creates an empty list\n    FOR    ${participant}    IN    @{participants}                   # Iterates over all participants\n        IF    ${participant.age} < ${minimum_age}    CONTINUE        # Skips the remaining part of the loop if age is below the minimum\n        Log    Participant ${participant.name} is older than 40      # Logs participant name if age is above the minimum\n        Append To List    ${older_participants}    ${participant}    # BuiltIn keyword to append a value to a list\n    END\n    RETURN    ${older_participants}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(6540);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);