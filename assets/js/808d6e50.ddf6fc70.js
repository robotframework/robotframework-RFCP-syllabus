"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[263],{7668:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"chapter-03/resource_file","title":"3.1 Resource File Structure","description":"Resource Files in Robot Framework are used to store reusable keywords,","source":"@site/docs/chapter-03/01_resource_file.md","sourceDirName":"chapter-03","slug":"/chapter-03/resource_file","permalink":"/docs/chapter-03/resource_file","draft":false,"unlisted":false,"editUrl":"https://github.com/robotframework/robotframework-RFCP-syllabus/edit/docusaurus/website/docs/chapter-03/01_resource_file.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"3 Keyword Design, Variables, and Resource Files","permalink":"/docs/chapter-03/overview"},"next":{"title":"3.2 Variables","permalink":"/docs/chapter-03/variables"}}');var n=r(4848),o=r(8453);const t={},c="3.1 Resource File Structure",a={},l=[{value:"3.1.1 Sections in Resource Files",id:"311-sections-in-resource-files",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"31-resource-file-structure",children:"3.1 Resource File Structure"})}),"\n",(0,n.jsxs)(s.p,{children:["Resource Files in Robot Framework are used to store reusable keywords,\nvariables, and organize imports of other resource files and libraries.\nSee ",(0,n.jsx)(s.a,{href:"/docs/chapter-02/keyword_imports#242-resource-files",children:"2.4.2 Resource Files"})," for an introduction to Resource Files."]}),"\n",(0,n.jsx)(s.p,{children:"Resource Files are typically used in many suites to share common keywords and variables across different tests|tasks.\nTherefore, they should be designed to be modular, reusable, and maintainable.\nKeywords and variables defined in one resource file should therefore\nbe related to each other to store similar functionality or data.\nThis relation can be based on a common purpose, a common abstraction layer, or a common context."}),"\n",(0,n.jsx)(s.p,{children:"For example all user keywords and variables that do control\nor test a specific part or dialog of an application could be stored together in one resource file."}),"\n",(0,n.jsxs)(s.p,{children:["Resource files are imported using the ",(0,n.jsx)(s.code,{children:"Resource"})," setting in the\n",(0,n.jsx)(s.code,{children:"*** Settings ***"})," section so that the path to the resource file\nis given as an argument to the setting.\nThe extension for resource files shall be ",(0,n.jsx)(s.code,{children:".resource"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Unless the resource file is given as an absolute path,\nit is first searched relatively to\nthe directory where the importing file is located.\nIf the file is not found there, it is then searched from the\ndirectories in Python's module search path.\nSee ",(0,n.jsx)(s.a,{href:"/docs/chapter-02/keyword_imports#243-import-paths",children:"2.4.3 Import Paths"})," for more details."]}),"\n",(0,n.jsx)(s.h2,{id:"311-sections-in-resource-files",children:"3.1.1 Sections in Resource Files"}),"\n",(0,n.jsxs)(s.p,{children:["See ",(0,n.jsx)(s.a,{href:"/docs/chapter-02/suitefile#212-sections-and-their-artifacts",children:"2.1.2 Sections and Their Artifacts"})," for an introduction to sections in suites."]}),"\n",(0,n.jsxs)(s.p,{children:["Other than in suites, resource files do not allow the ",(0,n.jsx)(s.code,{children:"*** Test Cases ***"})," or ",(0,n.jsx)(s.code,{children:"*** Tasks ***"})," sections."]}),"\n",(0,n.jsx)(s.p,{children:"The allowed sections in recommended order are:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"*** Settings ***"})," to import libraries and other resource files."]}),"\n",(0,n.jsx)(s.p,{children:"This section has common but also different settings available than in suites."}),"\n",(0,n.jsx)(s.p,{children:"Common settings are:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Library"})," to import libraries."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Resource"})," to import other resource files."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Variables"})," to import variable files. (Not part of this syllabus)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Documentation"})," to provide documentation for the resource file."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Additional settings are:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Keyword Tags"})," to set tags for all keywords in the resource file.\ndefining and using Keyword tags is not part of this syllabus."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Other settings available in suites are not available in resource files."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"*** Variables ***"})," to define variables."]}),"\n",(0,n.jsxs)(s.p,{children:["See ",(0,n.jsxs)(s.a,{href:"/docs/chapter-03/variables#322--variables--section",children:["3.2.2 ",(0,n.jsx)(s.code,{children:"*** Variables ***"})," Section"]})," for more details about defining variables in resource files.\nOther than in suites these variables can be used outside this resource file, if it is imported in another file."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"*** Keywords ***"})," to define user keywords."]}),"\n",(0,n.jsxs)(s.p,{children:["See ",(0,n.jsxs)(s.a,{href:"/docs/chapter-03/user_keyword#331--keywords--section",children:["3.3.1 ",(0,n.jsx)(s.code,{children:"*** Keywords ***"})," Section"]})," for more details about defining keywords in resource files.\nOther than in suites these keywords can be used outside this resource file, if it is imported in another file."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"*** Comments ***"})," is used to store comments and is ignored and not parsed by Robot Framework. (same as in suites)"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>t,x:()=>c});var i=r(6540);const n={},o=i.createContext(n);function t(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);