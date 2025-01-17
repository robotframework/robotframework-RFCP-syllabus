"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[612],{6835:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"chapter-02/keyword_interface","title":"2.5 Keyword Interface and Documentation","description":"Understand the structure of keyword interfaces and how to interpret keyword documentation.","source":"@site/docs/chapter-02/05_keyword_interface.md","sourceDirName":"chapter-02","slug":"/chapter-02/keyword_interface","permalink":"/docs/chapter-02/keyword_interface","draft":false,"unlisted":false,"editUrl":"https://github.com/robotframework/robotframework-RFCP-syllabus/edit/docusaurus/website/docs/chapter-02/05_keyword_interface.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"2.4 Keyword Imports","permalink":"/docs/chapter-02/keyword_imports"},"next":{"title":"2.6 Writing Test|Task and Calling Keywords","permalink":"/docs/chapter-02/writing_test"}}');var o=t(4848),a=t(8453);const s={},i="2.5 Keyword Interface and Documentation",d={},l=[{value:"2.5.1 Documented Keyword Information",id:"251-documented-keyword-information",level:2},{value:"2.5.1.1 Example Keyword <code>Should Be Equal</code>",id:"2511-example-keyword-should-be-equal",level:3},{value:"2.5.1.2 Example Keyword <code>Run Process</code>",id:"2512-example-keyword-run-process",level:3},{value:"2.5.1.3 Example Keyword <code>Get Regexp Matches</code>",id:"2513-example-keyword-get-regexp-matches",level:3},{value:"2.5.2 Keyword Arguments",id:"252-keyword-arguments",level:2},{value:"2.5.2.1 Mandatory Arguments",id:"2521-mandatory-arguments",level:3},{value:"2.5.2.2 Optional Arguments",id:"2522-optional-arguments",level:3},{value:"2.5.2.3 Embedded Arguments",id:"2523-embedded-arguments",level:3},{value:"2.5.2.4 Positional or Named Arguments",id:"2524-positional-or-named-arguments",level:3},{value:"2.5.2.5 Variable Number of Positional Arguments",id:"2525-variable-number-of-positional-arguments",level:3},{value:"2.5.2.6 Named-Only Arguments",id:"2526-named-only-arguments",level:3},{value:"2.5.2.7 Free Named Arguments",id:"2527-free-named-arguments",level:3},{value:"2.5.2.8 Argument Types",id:"2528-argument-types",level:3},{value:"2.5.2.9 Return Types",id:"2529-return-types",level:3},{value:"2.5.3 Keyword Documentation &amp; Examples",id:"253-keyword-documentation--examples",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"25-keyword-interface-and-documentation",children:"2.5 Keyword Interface and Documentation"})}),"\n",(0,o.jsx)(n.admonition,{title:"Learning Objectives",type:"lo",children:(0,o.jsx)(n.admonition,{title:"LO-2.5",type:"K2",children:(0,o.jsx)(n.p,{children:"Understand the structure of keyword interfaces and how to interpret keyword documentation."})})}),"\n",(0,o.jsx)(n.p,{children:"Library Keywords and User Keywords that are defined in a resource file should have a documentation text that describes what the keyword does and how it should be used."}),"\n",(0,o.jsxs)(n.p,{children:["Robot Framework is capable of generating a ",(0,o.jsx)(n.strong,{children:"Keyword Documentation"})," files that contains a library- or resource-documentation, all keywords, their argument interfaces, and their documentation texts.\nThis documentation file can be generated with the ",(0,o.jsx)(n.code,{children:"libdoc"})," command and can be used to provide a reference for users who want to use the keywords."]}),"\n",(0,o.jsx)(n.p,{children:"Basically all standard and external 3rd party libraries offer these Keyword Documentations as online available HTML pages."}),"\n",(0,o.jsxs)(n.p,{children:["Robot Framework offers the Keyword Documentation of its Standard Libraries at ",(0,o.jsx)(n.a,{href:"https://robotframework.org/robotframework",children:"https://robotframework.org/robotframework"})," ."]}),"\n",(0,o.jsx)(n.h2,{id:"251-documented-keyword-information",children:"2.5.1 Documented Keyword Information"}),"\n",(0,o.jsx)(n.admonition,{title:"Learning Objectives",type:"lo",children:(0,o.jsx)(n.admonition,{title:"LO-2.5.1",type:"K1",children:(0,o.jsx)(n.p,{children:"Recall the information that can be found in a keyword documentation."})})}),"\n",(0,o.jsx)(n.p,{children:"The Keyword Documentation is structured so, that it contains first the library or resource documentation, followed by a list of all keywords that are available in that library or resource file."}),"\n",(0,o.jsx)(n.p,{children:"Each library or resource documentation can contain the following information sections for keywords:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Name"}),": The name of the keyword as it is called."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Arguments"})," (opt.): The argument interface that the keyword expects/offers its types and default values."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Return Type"})," (opt.): The type of the return value of the keyword."]}),"\n",(0,o.jsxs)(n.li,{children:["(*) ",(0,o.jsx)(n.strong,{children:"Tags"})," (opt.): The tags that are assigned to the keyword to categorize keywords."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Documentation"})," (opt.): The documentation text that describes what the keyword does and how it should be used."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"(*) Understanding keyword tags is not part of the syllabus."}),"\n",(0,o.jsxs)(n.p,{children:["The following keywords are part of the Standard Libraries of Robot Framework.\nTheir documentation has been generated by the Robot Framework tool ",(0,o.jsx)(n.code,{children:"libdoc"})," which is included in Robot Framework."]}),"\n",(0,o.jsxs)(n.h3,{id:"2511-example-keyword-should-be-equal",children:["2.5.1.1 Example Keyword ",(0,o.jsx)(n.code,{children:"Should Be Equal"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.a,{href:"https://robotframework.org/robotframework/latest/libraries/BuiltIn.html#Should%20Be%20Equal",children:["Documentation of ",(0,o.jsx)(n.code,{children:"Should Be Equal"})," from ",(0,o.jsx)(n.code,{children:"BuiltIn"})," library"]})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Should Be Equal"})," is part of the BuiltIn library and is documented as follows:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Should Be Equal Keyword Documentation",src:t(8992).A+"",width:"814",height:"645"})}),"\n",(0,o.jsx)(n.p,{children:'This keyword has 2 "Mandatory Arguments" and 6 "Optional Arguments".\nAll of them can be called positionally or by name.'}),"\n",(0,o.jsxs)(n.h3,{id:"2512-example-keyword-run-process",children:["2.5.1.2 Example Keyword ",(0,o.jsx)(n.code,{children:"Run Process"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.a,{href:"https://robotframework.org/robotframework/latest/libraries/Process.html#Run%20Process",children:["Documentation of ",(0,o.jsx)(n.code,{children:"Run Process"})," from ",(0,o.jsx)(n.code,{children:"Process"})," library"]})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Run Process"})," is part of the Process library and is documented as follows:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Run Process Keyword Documentation",src:t(2733).A+"",width:"814",height:"652"})}),"\n",(0,o.jsxs)(n.p,{children:['This keyword has one "Mandatory Arguments" ',(0,o.jsx)(n.code,{children:"command"})," which can be called positionally or by name.\nThe latter two arguments are optional."]}),"\n",(0,o.jsxs)(n.p,{children:["The argument ",(0,o.jsx)(n.code,{children:"arguments"}),' is a "Variable Number of Positional Arguments" and can only be set by position.\nTherefore, if it shall be set, all preceding arguments must be set by position as well.\nSee ',(0,o.jsx)(n.a,{href:"/docs/chapter-02/keyword_interface#2525-variable-number-of-positional-arguments",children:"2.5.2.5 Variable Number of Positional Arguments"})," for more information about this kind of argument."]}),"\n",(0,o.jsxs)(n.p,{children:["The argument ",(0,o.jsx)(n.code,{children:"configuration"}),' is a "Free Named Argument" and can only be set by names.\nSee ',(0,o.jsx)(n.a,{href:"/docs/chapter-02/keyword_interface#2527-free-named-arguments",children:"2.5.2.7 Free Named Arguments"})," for more information about this kind of argument."]}),"\n",(0,o.jsxs)(n.h3,{id:"2513-example-keyword-get-regexp-matches",children:["2.5.1.3 Example Keyword ",(0,o.jsx)(n.code,{children:"Get Regexp Matches"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.a,{href:"https://robotframework.org/robotframework/latest/libraries/String.html#Get%20Regexp%20Matches",children:["Documentation of ",(0,o.jsx)(n.code,{children:"Get Regexp Matches"})," from ",(0,o.jsx)(n.code,{children:"String"})," library"]})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Get Regexp Matches"})," is part of the String library and is documented as follows:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Get Regexp Matches Keyword Documentation",src:t(5994).A+"",width:"814",height:"739"})}),"\n",(0,o.jsx)(n.p,{children:'This keyword has 2 "Mandatory Arguments" that can be called positionally or by name.\nThe last two arguments are optional.'}),"\n",(0,o.jsxs)(n.p,{children:["The argument ",(0,o.jsx)(n.code,{children:"groups"}),' is a "Variable Number of Positional Arguments" and can only be set by position.\nTherefore, if it shall be set, all preceding arguments must be set by position as well.\nSee ',(0,o.jsx)(n.a,{href:"/docs/chapter-02/keyword_interface#2525-variable-number-of-positional-arguments",children:"2.5.2.5 Variable Number of Positional Arguments"})," for more information about this kind of argument."]}),"\n",(0,o.jsxs)(n.p,{children:["The argument ",(0,o.jsx)(n.code,{children:"flags"}),' is a "Named-Only Argument" and can only be set by name.\nSee ',(0,o.jsx)(n.a,{href:"/docs/chapter-02/keyword_interface#2526-named-only-arguments",children:"2.5.2.6 Named-Only Arguments"})," for more information about this kind of argument."]}),"\n",(0,o.jsx)(n.h2,{id:"252-keyword-arguments",children:"2.5.2 Keyword Arguments"}),"\n",(0,o.jsx)(n.admonition,{title:"Learning Objectives",type:"lo",children:(0,o.jsx)(n.admonition,{title:"LO-2.5.2",type:"K2",children:(0,o.jsx)(n.p,{children:"Understand the difference between argument kinds."})})}),"\n",(0,o.jsx)(n.p,{children:"Most library keywords can be parameterized with arguments that are passed to the keyword when it is called to customize its behavior.\nAs more business oriented keywords are as less arguments they typically have."}),"\n",(0,o.jsx)(n.p,{children:"Keyword arguments can be grouped into different argument kinds.\nOn the one hand you can group them by their definition attributes and on the other hand by their usage kind."}),"\n",(0,o.jsxs)(n.p,{children:["The relevant distinction of usage kinds is between using ",(0,o.jsx)(n.strong,{children:"Positional Arguments"}),", ",(0,o.jsx)(n.strong,{children:"Named Arguments"}),", or ",(0,o.jsx)(n.strong,{children:"Embedded Arguments"}),".\nHow to use them is described in ",(0,o.jsx)(n.a,{href:"/docs/chapter-02/writing_test",children:"2.6 Writing Test|Task and Calling Keywords"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Another important information is if an argument is mandatory or optional.\nSee the next two sections for more information about these two kinds of arguments."}),"\n",(0,o.jsxs)(n.p,{children:["The most arguments can either be set by their position or by their name.\nBut there some kind of keywords that can only be set positional, like ",(0,o.jsx)(n.strong,{children:"Variable Number of Positional Arguments"}),", or only be set named, like ",(0,o.jsx)(n.strong,{children:"Named-Only Arguments"})," or ",(0,o.jsx)(n.strong,{children:"Free Named Arguments"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The order is as follows:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Positional or Named Arguments"})," (can be mandatory or optional)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Variable Number of Positional Arguments"})," (optional)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Named-Only Arguments"})," (can be mandatory or optional)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Free Named Arguments"})," (optional)"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"2521-mandatory-arguments",children:"2.5.2.1 Mandatory Arguments"}),"\n",(0,o.jsx)(n.admonition,{title:"Learning Objectives",type:"lo",children:(0,o.jsx)(n.admonition,{title:"LO-2.5.2.1",type:"K2",children:(0,o.jsx)(n.p,{children:"Understand the concept of mandatory arguments and how they are documented."})})}),"\n",(0,o.jsx)(n.p,{children:"Arguments that do not have a default value, must be set when the keyword is called.\nThese arguments have to be before arguments with default values in the argument interface of the keywords."}),"\n",(0,o.jsxs)(n.p,{children:["See the argument named ",(0,o.jsx)(n.code,{children:"first"})," and ",(0,o.jsx)(n.code,{children:"second"})," in the ",(0,o.jsx)(n.code,{children:"Should Be Equal"})," keyword documentation in the beginning of this section."]}),"\n",(0,o.jsx)(n.p,{children:"If too few arguments are provided, the keyword call will fail with an error message."}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-robotframework",children:"*** Test Cases ***\nTests Will Pass\n    Should Be Equal    One    One\n\nTest Will Fail\n    Should Be Equal    One    Two\n\nTest Will Fail Due to Missing Args\n    Should Be Equal    One\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The first Test will pass, because both argument values are equal.\nThe second Test will fail, because the argument values are not equal.\nThe third Test will fail before the keyword ",(0,o.jsx)(n.code,{children:"Should Be Equal"})," is actually being executed, because the keyword expects at least two arguments.\nThe Error Message would be: ",(0,o.jsx)(n.code,{children:"Keyword 'BuiltIn.Should Be Equal' expected 2 to 8 arguments, got 1."})]}),"\n",(0,o.jsxs)(n.p,{children:["Two arguments are mandatory and additional six arguments are optional in the ",(0,o.jsx)(n.code,{children:"Should Be Equal"})," keyword."]}),"\n",(0,o.jsx)(n.h3,{id:"2522-optional-arguments",children:"2.5.2.2 Optional Arguments"}),"\n",(0,o.jsx)(n.admonition,{title:"Learning Objectives",type:"lo",children:(0,o.jsx)(n.admonition,{title:"LO-2.5.2.2",type:"K2",children:(0,o.jsx)(n.p,{children:"Understand the concept of optional arguments and how they are documented."})})}),"\n",(0,o.jsxs)(n.p,{children:["Arguments that have a default value can be omitted when the keyword is called, causing these arguments to be set to their default value.\nThese arguments are listed after the mandatory arguments in the argument interface.\nDefault values are defined and represented in the docs by the equal sign ",(0,o.jsx)(n.code,{children:"="})," after the argument name and a value after that."]}),"\n",(0,o.jsxs)(n.p,{children:['Also "Variable Number of Positional Arguments", represented with a single star (',(0,o.jsx)(n.code,{children:"*"}),') prefix, and "Free Named Arguments", represented with a double star (',(0,o.jsx)(n.code,{children:"**"}),") prefix are optional arguments."]}),"\n",(0,o.jsxs)(n.p,{children:["i.e. the argument ",(0,o.jsx)(n.code,{children:"msg"})," in the ",(0,o.jsx)(n.code,{children:"Should Be Equal"})," keyword documentation has the default value ",(0,o.jsx)(n.code,{children:"None"})," and ",(0,o.jsx)(n.code,{children:"ignore_case"})," has the default value ",(0,o.jsx)(n.code,{children:"False"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"In that particular keyword these optional arguments can be used to activate some special features like ignoring the case of the compared strings or to provide a custom error message."}),"\n",(0,o.jsxs)(n.p,{children:["Omitting some optional arguments but still using others is possible independent of their order by setting these arguments by their name. See ",(0,o.jsx)(n.a,{href:"/docs/chapter-02/writing_test",children:"2.6 Writing Test|Task and Calling Keywords"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"2523-embedded-arguments",children:"2.5.2.3 Embedded Arguments"}),"\n",(0,o.jsx)(n.admonition,{title:"Learning Objectives",type:"lo",children:(0,o.jsx)(n.admonition,{title:"LO-2.5.2.3",type:"K1",children:(0,o.jsx)(n.p,{children:"Recall the concept of keywords with embedded arguments used in Behavior-Driven Specification and how they are documented."})})}),"\n",(0,o.jsx)(n.p,{children:"Keywords can have arguments embedded into their names, which is used mostly for Behavior-Driven Specification (BDD).\nEmbedded arguments are also mandatory and can only be set by their position in the keyword name."}),"\n",(0,o.jsxs)(n.p,{children:["The keyword names do contain arguments in variable syntax with dollar-curly-braces (",(0,o.jsx)(n.code,{children:"${var_name}"}),") to indicate that they are not part of the keyword name but are arguments."]}),"\n",(0,o.jsx)(n.p,{children:"Example keyword names are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:'"${url}" is open'})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:'the user clicks the "${button}" button'})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"the page title should be ${exp_title}"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"the url should be ${exp_url}"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Example Test Case:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-robotframework",children:'*** Test Cases ***\nFoundation Page should be Accessible\n    Given "robotframework.org" is open\n    When the user clicks the "FOUNDATION" button\n    Then the page title should be Foundation | Robot Framework\n    And the url should be https://robotframework.org/foundation\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The optional prefixes ",(0,o.jsx)(n.code,{children:"Given"}),", ",(0,o.jsx)(n.code,{children:"When"}),", ",(0,o.jsx)(n.code,{children:"Then"}),", ",(0,o.jsx)(n.code,{children:"And"})," and ",(0,o.jsx)(n.code,{children:"But"})," are basically ignored by Robot Framework if a keyword is found matching the rest of the name including the embedded arguments.\nIn the before given example the keywords are designed so that the arguments are surrounded by double quotes ",(0,o.jsx)(n.code,{children:'"'})," for better visibility."]}),"\n",(0,o.jsxs)(n.p,{children:['A mix of embedded arguments and "normal" arguments is possible to fully support BDD.\nIn the keyword documentation the embedded arguments are written in variable syntax with dollar-curly-braces (',(0,o.jsx)(n.code,{children:"${var_name}"}),") to indicate that they are not part of the keyword name but are arguments.\nThey can also be defined using regular expressions to allow for more complex argument structures, which is not part of that syllabus."]}),"\n",(0,o.jsx)(n.h3,{id:"2524-positional-or-named-arguments",children:"2.5.2.4 Positional or Named Arguments"}),"\n",(0,o.jsx)(n.admonition,{title:"Learning Objectives",type:"lo",children:(0,o.jsx)(n.admonition,{title:"LO-2.5.2.4",type:"K1",children:(0,o.jsx)(n.p,{children:'Recall how "Positional or Named Arguments" are marked in the documentation and their use case.'})})}),"\n",(0,o.jsx)(n.p,{children:'Except of "Positional-Only Arguments", that are not part of this syllabus,\nall arguments that are positioned before "Variable Number of Positional Arguments", "Named-Only Arguments", or "Free Named Arguments" in the argument interface of keywords are "Positional or Named Arguments".\nAs their name states, they can be set either by their position or by their name, but not by both at the same time for one argument.\nIf an argument shall be set by its position, all preceding arguments must be set by their position as well.'}),"\n",(0,o.jsx)(n.p,{children:"These arguments can either be mandatory or optional with a default value."}),"\n",(0,o.jsx)(n.p,{children:"They are not specially marked in the keyword documentation with any prefix, because they are the default kind of arguments in Robot Framework."}),"\n",(0,o.jsx)(n.h3,{id:"2525-variable-number-of-positional-arguments",children:"2.5.2.5 Variable Number of Positional Arguments"}),"\n",(0,o.jsx)(n.admonition,{title:"Learning Objectives",type:"lo",children:(0,o.jsx)(n.admonition,{title:"LO-2.5.2.5",type:"K1",children:(0,o.jsx)(n.p,{children:'Recall how "Variable Number of Positional Arguments" are marked in the documentation and their use case.'})})}),"\n",(0,o.jsxs)(n.p,{children:['A special case of optional arguments that can only be set by their position are "Variable Number of Positional Arguments".\nThese are also referred to as ',(0,o.jsx)(n.code,{children:"*args"})," or ",(0,o.jsx)(n.code,{children:"*varargs"})," in Python.\nSome keywords need to collect a variable amount of values into one argument, because it is not possible to define the amount of values in advance."]}),"\n",(0,o.jsxs)(n.p,{children:["One example for this kind of keyword is ",(0,o.jsxs)(n.a,{href:"/docs/chapter-02/keyword_interface#2512-example-keyword-run-process",children:["2.5.1.2 Example Keyword ",(0,o.jsx)(n.code,{children:"Run Process"})]})," from the Process library.\nThis keyword executes a ",(0,o.jsx)(n.code,{children:"command"})," with variable amount of ",(0,o.jsx)(n.code,{children:"arguments"})," and waits for the process to finish.\nDepending on the command to be executed different amount of arguments are needed for that command."]}),"\n",(0,o.jsxs)(n.p,{children:["This variable argument is marked with a single asterisk ",(0,o.jsx)(n.code,{children:"*"})," before the argument name in the keyword documentation."]}),"\n",(0,o.jsxs)(n.p,{children:["When calling this keyword, the first positional argument is assigned to ",(0,o.jsx)(n.code,{children:"command"}),", while all subsequent positional arguments are collected into the ",(0,o.jsx)(n.code,{children:"arguments"}),'. Because of this behavior, no additional positional arguments can be used after these "Variable Number of Positional Arguments". As a result, any arguments following these "Variable Number of Positional Arguments" must be named arguments, regardless of whether they are mandatory or optional with default.']}),"\n",(0,o.jsxs)(n.p,{children:["Also see ",(0,o.jsxs)(n.a,{href:"/docs/chapter-02/keyword_interface#2513-example-keyword-get-regexp-matches",children:["2.5.1.3 Example Keyword ",(0,o.jsx)(n.code,{children:"Get Regexp Matches"})]}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"2526-named-only-arguments",children:"2.5.2.6 Named-Only Arguments"}),"\n",(0,o.jsx)(n.admonition,{title:"Learning Objectives",type:"lo",children:(0,o.jsx)(n.admonition,{title:"LO-2.5.2.6",type:"K1",children:(0,o.jsx)(n.p,{children:'Recall what properties "Named-Only Arguments" have and how they are documented.'})})}),"\n",(0,o.jsxs)(n.p,{children:['All arguments that are defined after a "Variable Number of Positional Arguments" (',(0,o.jsx)(n.code,{children:"*varargs"}),') are "Named-Only Arguments".\nHowever it is also possible to create "Named-Only Arguments without a preceding "Variable Number of Positional Arguments".']}),"\n",(0,o.jsxs)(n.p,{children:['"Named-Only Arguments" are marked with a "LABEL" sign ',(0,o.jsx)(n.code,{children:"\ud83c\udff7"})," before the argument name in the keyword documentation."]}),"\n",(0,o.jsxs)(n.p,{children:['Those arguments can not be set positionally. All positional values would be consumed by the "Variable Number of Positional Arguments".\nSo they must be called by their name followed by an equal sign ',(0,o.jsx)(n.code,{children:"="})," and the value of the argument."]}),"\n",(0,o.jsx)(n.p,{children:'"Named-Only Arguments" can be mandatory or optional with a default value.'}),"\n",(0,o.jsx)(n.h3,{id:"2527-free-named-arguments",children:"2.5.2.7 Free Named Arguments"}),"\n",(0,o.jsx)(n.admonition,{title:"Learning Objectives",type:"lo",children:(0,o.jsx)(n.admonition,{title:"LO-2.5.2.7",type:"K1",children:(0,o.jsx)(n.p,{children:"Recall how free named arguments are marked in documentation."})})}),"\n",(0,o.jsxs)(n.p,{children:['Another special case of "Named-Only Arguments" is "Free Named Arguments."\nThese arguments are similar to the "Variable Number of Positional Arguments" in that they can collect multiple values.\nHowever, instead of collecting positional values, they gather all named values that are not explicitly defined as argument names.\nIn this case all values given to the keyword as arguments, that do contain an unescaped equal sign (',(0,o.jsx)(n.code,{children:"="}),") are considered as named arguments."]}),"\n",(0,o.jsxs)(n.p,{children:["Free named arguments are marked with two asterisks ",(0,o.jsx)(n.code,{children:"**"})," before the argument name in the keyword documentation."]}),"\n",(0,o.jsxs)(n.p,{children:["The example of the ",(0,o.jsx)(n.code,{children:"Run Process"})," keyword also has a free named argument ",(0,o.jsx)(n.code,{children:"** configuration"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["When calling this keyword all named arguments that are not explicitly defined as argument names are collected into the ",(0,o.jsx)(n.code,{children:"configuration"})," argument and will be available as a dictionary in the keyword implementation."]}),"\n",(0,o.jsx)(n.p,{children:"They are optional and can be omitted."}),"\n",(0,o.jsx)(n.p,{children:"With this configuration it is i.e. possible to redirect the output of the process to a file or to set the working directory of the process."}),"\n",(0,o.jsx)(n.p,{children:"Example redirecting stdout and stderr to a file:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-robotframework",children:"*** Test Cases ***\nSend 5 IPv4 Pings On Windows\n    Run Process    ping    -n    5    -4    localhost    stdout=ping_output.txt    stderr=ping_error.txt\n"})}),"\n",(0,o.jsx)(n.h3,{id:"2528-argument-types",children:"2.5.2.8 Argument Types"}),"\n",(0,o.jsx)(n.admonition,{title:"Learning Objectives",type:"lo",children:(0,o.jsx)(n.admonition,{title:"LO-2.5.2.8",type:"K2",children:(0,o.jsx)(n.p,{children:"Understand the concept of argument types and automatic type conversion."})})}),"\n",(0,o.jsx)(n.p,{children:"Library Keywords may define the expected types of their argument values.\nRobot Framework specification is mostly done as a string-based language, therefore most statically defined argument values are strings.\nHowever, the actual implementation of the keyword may expect a different type of argument, like an integer."}),"\n",(0,o.jsx)(n.p,{children:"If an argument type is defined and Robot Framework has a matching converter function available, that can convert the given type to the expected type, the conversion is tried automatically.\nIf the conversion fails, the keyword call will fail with an error message before the actual keyword code is executed.\nRobot Framework brings some built-in converters for common types like integer, float, boolean, list, dictionary, etc.\nLibrary developers can also register their own converters for not-supported types."}),"\n",(0,o.jsx)(n.p,{children:"Defining types for arguments is nowadays the recommended way to let Robot Framework convert the given arguments to the expected type, however it is optional."}),"\n",(0,o.jsxs)(n.p,{children:["Lets imagine a keyword that clicks on a specific coordinate on the screen, i.e. ",(0,o.jsx)(n.code,{children:"Click On Coordinates"}),".\nThis keyword would expect two integer arguments, one for the ",(0,o.jsx)(n.code,{children:"x"}),"-coordinate and one for the ",(0,o.jsx)(n.code,{children:"y"}),"-coordinate."]}),"\n",(0,o.jsx)(n.p,{children:"That keyword can now claim that it expects two integer arguments by defining type hints for these arguments.\nType hints are show in the keyword documentation at the argument after the optional default value."}),"\n",(0,o.jsx)(n.p,{children:"Robot Framework in that case tries to convert the given string arguments to the integer type."}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-robotframework",children:"*** Test Cases ***\nTest Conversion\n    Click On Coordinates    10    20    # This will work\n    Click On Coordinates    10    Not_A_Number  # This will fail\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In the first call the keyword will be called with the integer values ",(0,o.jsx)(n.code,{children:"10"})," and ",(0,o.jsx)(n.code,{children:"20"})," and will work as expected.\nThe second keyword call will fail, because the second argument is not a number and cannot be converted to an integer.\nThe error message would be: ",(0,o.jsx)(n.code,{children:"ValueError: Argument 'y' got value 'Not_A_Number' that cannot be converted to integer."})]}),"\n",(0,o.jsx)(n.p,{children:"The advantage of using type hints is that the user get more information about what kind of values are expected and the keyword implementation can be simpler, because it can rely on the arguments being of the expected type."}),"\n",(0,o.jsx)(n.h3,{id:"2529-return-types",children:"2.5.2.9 Return Types"}),"\n",(0,o.jsx)(n.admonition,{title:"Learning Objectives",type:"lo",children:(0,o.jsx)(n.admonition,{title:"LO-2.5.2.9",type:"K2",children:(0,o.jsx)(n.p,{children:"Understand the concept of return type hints."})})}),"\n",(0,o.jsxs)(n.p,{children:["Keywords may gather information and return these to the caller of that keyword to be stored in a variable and used in further keyword calls.\nSo Keyword can ",(0,o.jsx)(n.code,{children:"RETURN"})," values to the caller as functions do in programming languages."]}),"\n",(0,o.jsx)(n.p,{children:"If the keyword implementation offers a type hint for the return value, this is documented in the keyword documentation.\nSimilar to the argument types, return types optional and a more recent feature of Robot Framework and therefore not widely used, yet."}),"\n",(0,o.jsxs)(n.p,{children:["It is important to know that keywords without a return type hint are often still returning values!\nThis is typically documented in the ",(0,o.jsx)(n.em,{children:"Documentation"})," part of the keyword documentation."]}),"\n",(0,o.jsx)(n.h2,{id:"253-keyword-documentation--examples",children:"2.5.3 Keyword Documentation & Examples"}),"\n",(0,o.jsx)(n.admonition,{title:"Learning Objectives",type:"lo",children:(0,o.jsx)(n.admonition,{title:"LO-2.5.3",type:"K2",children:(0,o.jsx)(n.p,{children:"Understand how to read keyword documentation and how to interpret the examples."})})}),"\n",(0,o.jsx)(n.p,{children:"Keyword documentation is an important part of the keyword implementation.\nGood keyword names that clearly communicate what a keyword is doing is even more important,\nbut doing that should not give the impression that a descriptive documentation is not needed."}),"\n",(0,o.jsx)(n.p,{children:"Documentation is sometimes lean and sometimes extensive, depending on the complexity of the keyword.\nThe documentation should describe what the keyword does, how it should be used, and what the expected arguments are.\nDepending on the complexity it may also be useful to provide examples of how the keyword can be used."}),"\n",(0,o.jsx)(n.p,{children:"User Keywords do typically have less extensive documentation, because they are typically used in a more narrower context and can not be configured by arguments that much compared to library keywords of generic external libraries."}),"\n",(0,o.jsx)(n.p,{children:"Examples in the documentation is commonly either written in table format or as code blocks."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsxs)(n.strong,{children:["Table Example of ",(0,o.jsx)(n.code,{children:"Should Be Equal"})]}),":"]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Should Be Equal"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"${x}"})}),(0,o.jsx)(n.td,{children:"expected"}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Should Be Equal"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"${x}"})}),(0,o.jsx)(n.td,{children:"expected"}),(0,o.jsx)(n.td,{children:"Custom error message"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Should Be Equal"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"${x}"})}),(0,o.jsx)(n.td,{children:"expected"}),(0,o.jsx)(n.td,{children:"Custom message"}),(0,o.jsx)(n.td,{children:"values=False"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Should Be Equal"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"${x}"})}),(0,o.jsx)(n.td,{children:"expected"}),(0,o.jsx)(n.td,{children:"ignore_case=True"}),(0,o.jsx)(n.td,{children:"formatter=repr"})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"Code block example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-robotframework",children:"Should Be Equal    ${x}    expected\nShould Be Equal    ${x}    expected    Custom error message\nShould Be Equal    ${x}    expected    Custom message    values=False\nShould Be Equal    ${x}    expected    ignore_case=True    formatter=repr\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},5994:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/Get_Regexp_Matches_Docs-d6e1a680e03965582425600a622e6cc1.png"},2733:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/Run_Process_Docs-40a2f440fcb9d0940a45fcdd2fa4eddf.png"},8992:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/Should_Be_Equal_Docs-736a6a979321c149f2a284c7348eab8e.png"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(6540);const o={},a=r.createContext(o);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);