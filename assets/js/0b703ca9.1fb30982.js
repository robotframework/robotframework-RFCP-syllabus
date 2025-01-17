"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[492],{5993:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"chapter-03/advanced_importing","title":"3.5 Advanced Importing of Keywords and Naming Conflicts","description":"Recall that naming conflicts can arise from the import of multiple resource files.","source":"@site/docs/chapter-03/05_advanced_importing.md","sourceDirName":"chapter-03","slug":"/chapter-03/advanced_importing","permalink":"/docs/chapter-03/advanced_importing","draft":false,"unlisted":false,"editUrl":"https://github.com/robotframework/robotframework-RFCP-syllabus/edit/docusaurus/website/docs/chapter-03/05_advanced_importing.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"3.4 Using Data-Driven Specification","permalink":"/docs/chapter-03/datadriven"},"next":{"title":"4 Advanced Structuring and Execution","permalink":"/docs/chapter-04/overview"}}');var t=r(4848),o=r(8453);const s={},a="3.5 Advanced Importing of Keywords and Naming Conflicts",l={},c=[{value:"3.5.1 Importing Hierarchies",id:"351-importing-hierarchies",level:2},{value:"3.5.2 Library Configuration",id:"352-library-configuration",level:2},{value:"3.5.3 Naming Conflicts",id:"353-naming-conflicts",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"35-advanced-importing-of-keywords-and-naming-conflicts",children:"3.5 Advanced Importing of Keywords and Naming Conflicts"})}),"\n",(0,t.jsx)(n.admonition,{title:"Learning Objectives",type:"lo",children:(0,t.jsx)(n.admonition,{title:"LO-3.5",type:"K1",children:(0,t.jsx)(n.p,{children:"Recall that naming conflicts can arise from the import of multiple resource files."})})}),"\n",(0,t.jsx)(n.p,{children:"As stated before, it is possible to organize imports and available keywords in Robot Framework by using Resource Files.\nBy default, all keywords or variables created or imported in a resource file are available to those suites and files that are importing that higher-level resource file."}),"\n",(0,t.jsx)(n.p,{children:"This can lead to complex import hierarchies or the importing of libraries multiple times, which should be avoided."}),"\n",(0,t.jsx)(n.p,{children:"Due to this mechanism, the number of keywords available to a suite can be quite large, and naming conflicts, especially with keywords from third-party keyword libraries, can occur. These conflicts need to be resolved."}),"\n",(0,t.jsx)(n.p,{children:"Some keyword libraries have the option to be configured to change their behavior, which may also change the available keywords they offer."}),"\n",(0,t.jsx)(n.h2,{id:"351-importing-hierarchies",children:"3.5.1 Importing Hierarchies"}),"\n",(0,t.jsx)(n.admonition,{title:"Learning Objectives",type:"lo",children:(0,t.jsx)(n.admonition,{title:"LO-3.5.1",type:"K2",children:(0,t.jsx)(n.p,{children:"Understand how transitive imports of resource files and libraries work."})})}),"\n",(0,t.jsx)(n.p,{children:"Let's assume the following libraries and resource files shall be used:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Library"}),"    ",(0,t.jsx)(n.code,{children:"A"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Library"}),"    ",(0,t.jsx)(n.code,{children:"B"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Library"}),"    ",(0,t.jsx)(n.code,{children:"Operating System"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Resource"}),"    ",(0,t.jsx)(n.code,{children:"tech_keywordsA.resource"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Resource"}),"    ",(0,t.jsx)(n.code,{children:"tech_keywordsB.resource"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Resource"}),"    ",(0,t.jsx)(n.code,{children:"variables.resource"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Resource"}),"    ",(0,t.jsx)(n.code,{children:"functional_keywords.resource"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The respective files could look like this:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"tech_keywordsA.resource:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-robotframework",children:"*** Settings ***\nLibrary    A\nLibrary    Operating System\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"tech_keywordsB.resource:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-robotframework",children:"*** Settings ***\nLibrary    B\nResource    variables.resource\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"functional_keywords.resource:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-robotframework",children:"*** Settings ***\nResource    tech_keywordsA.resource\nResource    tech_keywordsB.resource\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"suite.robot:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-robotframework",children:"*** Settings ***\nResource    functional_keywords.resource\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this case, the suite ",(0,t.jsx)(n.code,{children:"suite.robot"})," has access to all keywords from all keyword libraries, as well as all variables and user keywords from all resource files.\nWith this transitive importing it is possible to organize user keywords and imports of libraries in a hierarchical way."]}),"\n",(0,t.jsxs)(n.p,{children:["It shall be avoided to create circular imports, where ",(0,t.jsx)(n.code,{children:"A.resource"})," imports ",(0,t.jsx)(n.code,{children:"B.resource"})," and ",(0,t.jsx)(n.code,{children:"B.resource"})," imports ",(0,t.jsx)(n.code,{children:"A.resource"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"It should be avoided to import the same library in different places multiple times.\nIf the exact same library with the same configuration (see the next section) is imported again, it will be ignored because Robot Framework already has it in its catalog.\nHowever, if the library is imported with different configurations, it may be imported multiple times, but depending on the library\u2019s internal behavior, the new configuration may have no effect on the existing keywords, or other side effects may occur."}),"\n",(0,t.jsx)(n.p,{children:"Therefore, the recommendation is to import libraries only in one resource file with one configuration and use that import file in all places where the library is needed to make its keywords available."}),"\n",(0,t.jsx)(n.h2,{id:"352-library-configuration",children:"3.5.2 Library Configuration"}),"\n",(0,t.jsx)(n.admonition,{title:"Learning Objectives",type:"lo",children:(0,t.jsx)(n.admonition,{title:"LO-3.5.2",type:"K3",children:(0,t.jsx)(n.p,{children:"Be able to configure a library import using arguments."})})}),"\n",(0,t.jsx)(n.p,{children:"Some libraries offer or need additional configuration to change their behavior or make them work.\nThis is typically global behavior like internal timeouts, connection settings to systems, or plugins that should be used."}),"\n",(0,t.jsxs)(n.p,{children:["If this is possible, the library documentation will have an ",(0,t.jsx)(n.code,{children:"Importing"})," section directly before the list of keywords.\nIt is strongly recommended to have all these possible arguments to the library itself defined with default values;\nhowever, that is not always possible."]}),"\n",(0,t.jsx)(n.p,{children:"Library importing arguments are used in the same way as keyword calls with arguments.\nIf possible, it is recommended to set the arguments as named arguments to make usage more readable and future-proof.\nThese arguments follow the Library path or name, separated by multiple spaces."}),"\n",(0,t.jsxs)(n.p,{children:["Example with the ",(0,t.jsx)(n.a,{href:"https://robotframework.org/robotframework/latest/libraries/Telnet.html#Importing",children:"Telnet library"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-robotframework",children:"*** Settings ***\nLibrary    Telnet    newline=LF    encoding=ISO-8859-1   # set newline and encoding using named arguments\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Another example that cannot be used without configuration is the Remote library.\nRemote libraries are libraries that are connected remotely via a network connection.\nSo the actual library is running as a server, and the library ",(0,t.jsx)(n.code,{children:"Remote"}),"\nis connecting as a client and connects the keywords of the server to Robot Framework.\nTherefore, it needs the server's address and port to connect to.\nBecause there may be more than one Remote Library, we need to define the used library name as well."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-robotframework",children:"*** Settings ***\nLibrary    Remote    uri=http://127.0.0.1:8270       AS    EmbeddedAPI\nLibrary    Remote    uri=http://remote.devices.local:8270       AS    DeviceAPI\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, two remote libraries are imported.\nThe upper-case ",(0,t.jsx)(n.code,{children:"AS"})," statement is used to define the name of the library that shall be used in the suite."]}),"\n",(0,t.jsxs)(n.p,{children:["They are now available as ",(0,t.jsx)(n.code,{children:"EmbeddedAPI"})," and ",(0,t.jsx)(n.code,{children:"DeviceAPI"})," in the suite."]}),"\n",(0,t.jsx)(n.h2,{id:"353-naming-conflicts",children:"3.5.3 Naming Conflicts"}),"\n",(0,t.jsx)(n.admonition,{title:"Learning Objectives",type:"lo",children:(0,t.jsx)(n.admonition,{title:"LO-3.5.3",type:"K2",children:(0,t.jsx)(n.p,{children:"Explain how naming conflicts can happen and how to mitigate them."})})}),"\n",(0,t.jsx)(n.p,{children:"Naming conflicts can occur when two or more keywords have the same name.\nIf a proper IDE is used, that can be detected, and users can be warned after they have created a duplicate user keyword name."}),"\n",(0,t.jsx)(n.p,{children:"Project teams may not have this influence over imported third-party libraries that have the same keyword names.\nDue to the fact that keywords from library and resource files are imported in the scope of the importing suite, it may be unavoidable to have naming conflicts."}),"\n",(0,t.jsxs)(n.p,{children:["One example of these kinds of conflicts is the two libraries\n",(0,t.jsx)(n.a,{href:"https://robotframework.org/robotframework/latest/libraries/Telnet.html",children:(0,t.jsx)(n.code,{children:"Telnet"})}),"\nand ",(0,t.jsx)(n.a,{href:"https://marketsquare.github.io/SSHLibrary/SSHLibrary.html",children:(0,t.jsx)(n.code,{children:"SSHLibrary"})}),",\nwhich at the current time both have multiple keywords with the same name.\nThis is because they both work with network connections and have similar functionality.\nKeywords like ",(0,t.jsx)(n.code,{children:"Open Connection"}),", ",(0,t.jsx)(n.code,{children:"Login"}),", ",(0,t.jsx)(n.code,{children:"Read"}),", ",(0,t.jsx)(n.code,{children:"Close Connection"}),", and many more are common."]}),"\n",(0,t.jsx)(n.p,{children:"These conflicts cannot be resolved by Robot Framework if they are coming from the same kind of source, like two libraries.\nThe error message will be like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"Multiple keywords with name 'Open Connection' found. Give the full name of the keyword you want to use:\n    SSHLibrary.Open Connection\n    Telnet.Open Connection\n"})}),"\n",(0,t.jsx)(n.p,{children:"As proposed by Robot Framework, to resolve naming conflicts,\nthe easiest way to mitigate this is to use the full names of the keywords,\nincluding the library name, when calling them."}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-robotframework",children:"*** Test Cases ***\nUsing Telnet and SSHLibrary\n    Telnet.Open Connection\n    Telnet.Login    ${username}    ${password}\n    ${telnet_init} =    Telnet.Read Until Prompt\n    Telnet.Close Connection\n\n    SSHLibrary.Open Connection    ${host}    ${port}\n    SSHLibrary.Login    ${username}    ${password}\n    ${ssh_init} =    SSHLibrary.Read Until Prompt\n    SSHLibrary.Close Connection\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When using full names for libraries that were imported with the ",(0,t.jsx)(n.code,{children:"AS"})," statement,\nthe name of the library is used as a prefix to the keyword name."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-robotframework",children:"*** Test Cases ***\nUsing Remote Libraries\n    EmbeddedAPI.Close Contact   15\n    DeviceAPI.Verify Contact    15    1\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var i=r(6540);const t={},o=i.createContext(t);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);