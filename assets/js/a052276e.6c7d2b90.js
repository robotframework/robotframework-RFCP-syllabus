"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[571],{5061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"chapter-02/executing","title":"2.3 Executing Robot","description":"Recall the three components of the Robot Framework CLI.","source":"@site/docs/chapter-02/03_executing.md","sourceDirName":"chapter-02","slug":"/chapter-02/executing","permalink":"/robotframework-RFCP-syllabus/docs/chapter-02/executing","draft":false,"unlisted":false,"editUrl":"https://github.com/robotframework/robotframework-RFCP-syllabus/edit/docusaurus/website/docs/chapter-02/03_executing.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"2.2 Basic Suite File Syntax","permalink":"/robotframework-RFCP-syllabus/docs/chapter-02/suitefile_syntax"},"next":{"title":"2.4 Keyword Imports","permalink":"/robotframework-RFCP-syllabus/docs/chapter-02/keyword_imports"}}');var i=n(4848),o=n(8453);const r={},l="2.3 Executing Robot",d={},a=[{value:"2.3.1 <code>robot</code> command &amp; help",id:"231-robot-command--help",level:2},{value:"2.3.2 Execution Artifacts",id:"232-execution-artifacts",level:2},{value:"2.3.3 Status",id:"233-status",level:2},{value:"2.3.3.1 PASS",id:"2331-pass",level:3},{value:"2.3.3.2 FAIL",id:"2332-fail",level:3},{value:"2.3.4 Logging possibilities (Log vs Console)",id:"234-logging-possibilities-log-vs-console",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"23-executing-robot",children:"2.3 Executing Robot"})}),"\n",(0,i.jsx)(t.admonition,{title:"Learning Objectives",type:"lo",children:(0,i.jsx)(t.admonition,{title:"LO-2.3",type:"K1",children:(0,i.jsx)(t.p,{children:"Recall the three components of the Robot Framework CLI."})})}),"\n",(0,i.jsx)(t.p,{children:"Robot Framework comes with three executables when being installed which are designed to be used via the command-line interface (CLI)."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"robot"})," is the main executable that is used to execute suites."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"rebot"})," is used to post-process execution results and generate reports. (covered in a later chapter)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"libdoc"})," is used to generate keyword documentation for libraries and resource files. (covered in a later chapter)"]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"231-robot-command--help",children:["2.3.1 ",(0,i.jsx)(t.code,{children:"robot"})," command & help"]}),"\n",(0,i.jsx)(t.admonition,{title:"Learning Objectives",type:"lo",children:(0,i.jsx)(t.admonition,{title:"LO-2.3.1",type:"K2",children:(0,i.jsxs)(t.p,{children:["Understand how to run the ",(0,i.jsx)(t.code,{children:"robot"})," command and its basic usage."]})})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"robot"})," command is used to run a Robot Framework execution, which will execute suites and their containing tests|tasks."]}),"\n",(0,i.jsxs)(t.p,{children:["At a basic level, you can run ",(0,i.jsx)(t.code,{children:"robot"})," by providing the path to a suite file or suite directory containing suite files as last argument."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-plaintext",children:"robot <path_to_root_suite>\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In case of the above given example where a single suite file named ",(0,i.jsx)(t.code,{children:"TestSuite.robot"})," is stored in a directory ",(0,i.jsx)(t.code,{children:"robot_files"}),", to execute the example test suite the following command is used, if the current working directory of the terminal is the directory containing the ",(0,i.jsx)(t.code,{children:"robot_files"})," directory:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-plaintext",children:"> robot robot_files\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This command starts the Robot Framework execution by first parsing all files in the given directory tree that have the extension ",(0,i.jsx)(t.code,{children:".robot"}),",\nthen creating an execution model and then executing all suites and test cases in that model.\nDuring execution, the results of each test case are printed to the console and at the end a summary is printed and reports are generated."]}),"\n",(0,i.jsx)(t.p,{children:"Example Console Output:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-plaintext",children:"> robot robot_files\n==============================================================================\nRobot Files\n==============================================================================\nRobot Files.TestSuite :: A test suite for valid login.\n==============================================================================\nLogin User With Password                                              | PASS |\n------------------------------------------------------------------------------\nDenied Login With Wrong Password                                      | PASS |\n------------------------------------------------------------------------------\nRobot Files.TestSuite :: A test suite for valid login.                | PASS |\n2 tests, 2 passed, 0 failed\n==============================================================================\nRobot Files                                                           | PASS |\n2 tests, 2 passed, 0 failed\n==============================================================================\nOutput:  /path/to/output.xml\nLog:     /path/to/log.html\nReport:  /path/to/report.html\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"robot"})," command can optionally be configured with additional options to control the execution behavior, such as setting output formats, specifying specific tests to run, or controlling logging levels and many more. These options are named arguments that are passed to the ",(0,i.jsx)(t.code,{children:"robot"})," command BEFORE the path to the suite file or directory. To learn more about these options, you can use the help of the ",(0,i.jsx)(t.code,{children:"robot"})," command like: ",(0,i.jsx)(t.code,{children:"robot --help"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"232-execution-artifacts",children:"2.3.2 Execution Artifacts"}),"\n",(0,i.jsx)(t.admonition,{title:"Learning Objectives",type:"lo",children:(0,i.jsx)(t.admonition,{title:"LO-2.3.2",type:"K2",children:(0,i.jsx)(t.p,{children:"Explain the execution artifacts generated by Robot Framework."})})}),"\n",(0,i.jsx)(t.p,{children:"After executing a suite, Robot Framework, by default, generates tree output files in the output directory. These artifacts provide detailed execution results:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"output.xml"})}),": A machine-readable file containing ",(0,i.jsx)(t.strong,{children:"ALL"})," logged execution details, limited by the given log-level."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"log.html"})}),": A detailed log file that provides an HTML view of the execution, including keyword-level details."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"report.html"})}),": A summary report that gives an overview of the execution results, including statistics of tests|tasks executed, passed, and failed."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"log.html"})," and ",(0,i.jsx)(t.code,{children:"report.html"})," are generated based on the information stored in ",(0,i.jsx)(t.code,{children:"output.xml"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"A unique feature of Robot Framework is, that it logs each keyword call and its arguments with its log outputs and timestamps, so that it is possible to have a very detailed view of the execution flow and the data that was used during the execution.\nIn case of a failure it is possible to see the exact keyword call that failed and the arguments that were used, which can be very helpful for debugging or reporting. Furthermore you also get all passed keywords and even the non-executed keywords to protocol the whole execution flow."}),"\n",(0,i.jsx)(t.h2,{id:"233-status",children:"2.3.3 Status"}),"\n",(0,i.jsx)(t.admonition,{title:"Learning Objectives",type:"lo",children:(0,i.jsx)(t.admonition,{title:"LO-2.3.3",type:"K1",children:(0,i.jsx)(t.p,{children:"Recall the four different status labels used by Robot Framework."})})}),"\n",(0,i.jsx)(t.p,{children:"Robot Framework uses different status labels to indicate the result of an execution:"}),"\n",(0,i.jsx)(t.p,{children:"On Suite, Test Case and Task Level:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"PASS"})}),": Indicates that the item was successfully executed without unexpected errors."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"FAIL"})}),": Shows that the item encountered an error and did not pass."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"SKIP"})}),": Indicates that the item was intentionally skipped, i.e. due to external factors like preconditions not being met."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Additional Keyword Status:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"NOT RUN"})}),": Refers to keywords that were not executed during execution, i.e. due to previous failure or conditions."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"NOT RUN"})," and ",(0,i.jsx)(t.code,{children:"SKIP"})," are explained in more detail in later chapters."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Atomic elements"})," like Library Keywords or Robot Framework language statements do define their own status."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Composite elements"})," like suites (composed of tests|tasks), tests|tasks (composed of keywords) and User Keywords (composed of Library Keywords and Robot Framework statements) do define their status based on the status of their child elements."]}),"\n",(0,i.jsx)(t.h3,{id:"2331-pass",children:"2.3.3.1 PASS"}),"\n",(0,i.jsx)(t.admonition,{title:"Learning Objectives",type:"lo",children:(0,i.jsx)(t.admonition,{title:"LO-2.3.3.1",type:"K2",children:(0,i.jsxs)(t.p,{children:["Understand when an element is marked as ",(0,i.jsx)(t.code,{children:"PASS"}),"."]})})}),"\n",(0,i.jsx)(t.p,{children:"This status is used if an element was executed successfully without any errors or exceptions."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Atomic elements"})," are ",(0,i.jsx)(t.code,{children:"PASS"})," if they were executed successfully without reporting an error by raising an exception."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Composite elements"})," are ",(0,i.jsx)(t.code,{children:"PASS"})," if all their executed body elements are pass.\nIn example for User Keywords this means that if all keywords or Robot Framework language statements that were directly called by that User Keyword were ",(0,i.jsx)(t.code,{children:"PASS"})," the User Keyword itself is considered ",(0,i.jsx)(t.code,{children:"PASS"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Library Keywords like ",(0,i.jsx)(t.code,{children:"Run Keyword And Expect Error"}),", from BuiltIn Library, do ",(0,i.jsx)(t.code,{children:"PASS"})," if the keyword they are internally calling does raise an error with the expected message or type."]}),"\n",(0,i.jsxs)(t.p,{children:["That means that a composite element like suite, test|task or User Keyword may be ",(0,i.jsx)(t.code,{children:"PASS"})," even if some of its deeper child elements are ",(0,i.jsx)(t.code,{children:"FAIL"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"2332-fail",children:"2.3.3.2 FAIL"}),"\n",(0,i.jsx)(t.admonition,{title:"Learning Objectives",type:"lo",children:(0,i.jsx)(t.admonition,{title:"LO-2.3.3.2",type:"K2",children:(0,i.jsxs)(t.p,{children:["Understand when an element is marked as ",(0,i.jsx)(t.code,{children:"FAIL"}),"."]})})}),"\n",(0,i.jsx)(t.p,{children:"This status is used if an element was executed but encountered an error or exception that was not expected."}),"\n",(0,i.jsxs)(t.p,{children:["A failure typically causes the subsequent keywords to be skipped.\nExceptions are Teardowns explained in chapter ",(0,i.jsx)(t.a,{href:"/robotframework-RFCP-syllabus/docs/chapter-04/overview",children:"4 Advanced Structuring and Execution"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Atomic elements"})," are ",(0,i.jsx)(t.code,{children:"FAIL"})," if they were tried to be executed but raised an exception."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Composite elements"})," are ",(0,i.jsx)(t.code,{children:"FAIL"})," if at least one of their executed direct body elements are ",(0,i.jsx)(t.code,{children:"FAIL"}),".\nTherefore a failure typically distributes upwards through the hierarchy of elements until it reaches the root suite."]}),"\n",(0,i.jsxs)(t.p,{children:["A User Keywords is ",(0,i.jsx)(t.code,{children:"FAIL"})," if one of its called Library Keywords is ",(0,i.jsx)(t.code,{children:"FAIL"}),".\nA test|task is ",(0,i.jsx)(t.code,{children:"FAIL"})," if one of its directly called Keywords is ",(0,i.jsx)(t.code,{children:"FAIL"}),".\nA suite (file) is ",(0,i.jsx)(t.code,{children:"FAIL"})," if one of its test|task is ",(0,i.jsx)(t.code,{children:"FAIL"})," and\na suite (directory) is ",(0,i.jsx)(t.code,{children:"FAIL"})," if one of its suites (file) is ",(0,i.jsx)(t.code,{children:"FAIL"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"234-logging-possibilities-log-vs-console",children:"2.3.4 Logging possibilities (Log vs Console)"}),"\n",(0,i.jsx)(t.admonition,{title:"Learning Objectives",type:"lo",children:(0,i.jsx)(t.admonition,{title:"LO-2.3.4",type:"K2",children:(0,i.jsx)(t.p,{children:"Understand the difference between log messages and console output."})})}),"\n",(0,i.jsx)(t.p,{children:"There are basically two kinds of logging information in Robot Framework."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Console Output"}),": The console output is the output that is printed to the terminal where the ",(0,i.jsx)(t.code,{children:"robot"})," command was executed. It is typically not persistent but can be already seen during execution."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Log Messages"}),": Log messages are written to the ",(0,i.jsx)(t.code,{children:"output.xml"})," and therefore also ",(0,i.jsx)(t.code,{children:"log.html"})," file and are persistent. They are typically created by the Library Keywords that are executed and can be used to log information about the execution. Also Robot Framework itself does log information to the ",(0,i.jsx)(t.code,{children:"output.xml"})," like assigned values of arguments or the return values of keywords."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Log messages can be written with different levels of severity like i.e. ",(0,i.jsx)(t.code,{children:"INFO"}),", ",(0,i.jsx)(t.code,{children:"DEBUG"}),", ",(0,i.jsx)(t.code,{children:"TRACE"}),", ",(0,i.jsx)(t.code,{children:"WARN"})," or ",(0,i.jsx)(t.code,{children:"ERROR"}),".\nWhich levels are written to the log can be controlled by the log level of an execution. Further information in later chapters."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(6540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);