"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[505],{425:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"chapter-01/purpose","title":"1.1 Purpose / Use Cases","description":"Recall the two main use cases of Robot Framework","source":"@site/docs/chapter-01/01_purpose.md","sourceDirName":"chapter-01","slug":"/chapter-01/purpose","permalink":"/robotframework-RFCP-syllabus/docs/chapter-01/purpose","draft":false,"unlisted":false,"editUrl":"https://github.com/robotframework/robotframework-RFCP-syllabus/edit/docusaurus/website/docs/chapter-01/01_purpose.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"1 Introduction to Robot Framework","permalink":"/robotframework-RFCP-syllabus/docs/chapter-01/overview"},"next":{"title":"1.2 Architecture of Robot Framework","permalink":"/robotframework-RFCP-syllabus/docs/chapter-01/architecture"}}');var o=s(4848),i=s(8453);const r={},a="1.1 Purpose / Use Cases",c={},l=[{value:"1.1.1 Test Automation",id:"111-test-automation",level:2},{value:"1.1.1.1 Synthetic Monitoring",id:"1111-synthetic-monitoring",level:3},{value:"1.1.2 Robotic Process Automation (RPA)",id:"112-robotic-process-automation-rpa",level:2}];function d(e){const t={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"11-purpose--use-cases",children:"1.1 Purpose / Use Cases"})}),"\n",(0,o.jsx)(t.admonition,{title:"Learning Objectives",type:"lo",children:(0,o.jsx)(t.admonition,{title:"LO-1.1",type:"K1",children:(0,o.jsx)(t.p,{children:"Recall the two main use cases of Robot Framework"})})}),"\n",(0,o.jsxs)(t.p,{children:["Robot Framework is a versatile, open-source automation framework that supports both ",(0,o.jsx)(t.strong,{children:"test automation"})," and ",(0,o.jsx)(t.strong,{children:"robotic process automation (RPA)"}),".\nInitially designed for acceptance testing, it has since evolved to cover other types of testing and various automation tasks in both IT and business environments.\nIts keyword-driven approach allows users to create reusable components, making it accessible even to those with minimal programming skills.\nRobot Framework can be extended through a vast array of third-party or custom made keyword libraries, allowing it to automate interactions with APIs, user interfaces, databases, and many more technologies."]}),"\n",(0,o.jsx)(t.h2,{id:"111-test-automation",children:"1.1.1 Test Automation"}),"\n",(0,o.jsx)(t.admonition,{title:"Learning Objectives",type:"lo",children:(0,o.jsx)(t.admonition,{title:"LO-1.1.1",type:"K1",children:(0,o.jsx)(t.p,{children:"recall the test levels Robot Framework is mostly used for"})})}),"\n",(0,o.jsx)(t.p,{children:"Robot Framework is widely used at various levels of testing, primarily focusing on:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"System Testing"}),": Involves verifying the complete system\u2019s behavior and capabilities. It often includes both functional and non-functional aspects (e.g., accessibility, security) and may use simulated components."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"System Integration Testing"}),": Focuses on the interaction between the system under test and external services, as well as on the integration of multiple systems into a larger system, ensuring that all integrated components communicate and function together as expected."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Acceptance Testing"}),": Aims to validate that the system meets business requirements and is ready for deployment or release. This often includes different forms of acceptance testing (e.g., user acceptance, operational acceptance, regulatory acceptance) and is frequently written or conducted by end-users or stakeholders to confirm the system\u2019s readiness for use. Acceptance tests, often defined by business stakeholders in approaches like Acceptance Test-Driven Development (ATDD), can be automated and executed earlier in the development process. This ensures that the solution aligns with business requirements from the start and provides immediate feedback, reducing costly changes later."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"End-to-End Testing"}),": Verifies that a complete workflow or process within the system operates as intended, covering all interconnected subsystems, interfaces, and external components. End-to-end tests ensure the correct functioning of the application in real-world scenarios by simulating user interactions from start to finish."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Robot Framework's flexibility and support for external libraries make it an excellent tool for automating these comprehensive test cases, ensuring seamless interaction between components and validating the system's behavior also in production or production-like conditions."}),"\n",(0,o.jsxs)(t.p,{children:["Robot Framework is typically not used for ",(0,o.jsx)(t.strong,{children:"component testing"})," and ",(0,o.jsx)(t.strong,{children:"integration testing"})," because its primary strength lies in higher-level testing, such as system, acceptance, and end-to-end testing, where behavior-driven and keyword-based approaches excel. Component testing requires low-level, granular tests focusing on individual units of code, often necessitating direct interaction with the codebase, mocking, or stubbing, which are better handled by unit testing frameworks like JUnit, pytest, or NUnit. Similarly, integration testing at a low level often requires precise control over service interactions, such as API stubs or protocol-level testing, which may not align with Robot Framework's abstraction-oriented design. While Robot Framework can technically handle these cases through custom libraries, its overhead and design philosophy make it less efficient compared to tools specifically tailored for low-level and tightly scoped testing tasks."]}),"\n",(0,o.jsx)(t.h3,{id:"1111-synthetic-monitoring",children:"1.1.1.1 Synthetic Monitoring"}),"\n",(0,o.jsxs)(t.p,{children:["Beyond traditional test levels, ",(0,o.jsx)(t.strong,{children:"Synthetic Monitoring"}),", also referred to as ",(0,o.jsx)(t.strong,{children:"Active Monitoring"})," or ",(0,o.jsx)(t.strong,{children:"Proactive Monitoring"}),", is a proactive approach that simulates user interactions with live systems at regular intervals. It detects performance issues or downtime early with the goal of to detect such failure before they affect actual users."]}),"\n",(0,o.jsx)(t.h2,{id:"112-robotic-process-automation-rpa",children:"1.1.2 Robotic Process Automation (RPA)"}),"\n",(0,o.jsx)(t.p,{children:"Robotic Process Automation (RPA) uses software bots to perform tasks and interactions normally performed by humans, without requiring changes to the underlying applications."}),"\n",(0,o.jsx)(t.p,{children:"Robot Framework, with its keyword-driven approach, vast ecosystem of libraries, simplicity, and scalability, is widely adopted for RPA tasks.\nRobot Framework allows users to automate most workflows using ready-made keyword libraries that provide a wide range of functionalities. These libraries can be combined and reused in user-defined keywords, making automation simple and efficient. For custom functionalities or more complex tasks, Robot Framework also offers the flexibility to create custom keyword libraries using Python, enabling advanced use cases and seamless integration with unique systems."}),"\n",(0,o.jsx)(t.p,{children:"Common use cases of RPA with Robot Framework include:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Data extraction and manipulation"}),": Automating data transfers and processing between systems."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Task/proces automation"}),": Automating tasks such as form submissions, clicks, and file operations across web or desktop applications."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(6540);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);