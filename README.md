# Table of Contents

- [`0 Course Overview`](Chapter_0_Overview.md#0-course-overview)
  - [`0.1 About the Syllabus`](Chapter_0_Overview.md#01-about-the-syllabus)
  - [`0.2 About "Robot Framework Certified Professional®"`](Chapter_0_Overview.md#02-about-robot-framework-certified-professional)
  - [`0.3 Business Outcomes`](Chapter_0_Overview.md#03-business-outcomes)
  - [`0.4 About Learning Objectives and Knowledge Levels`](Chapter_0_Overview.md#04-about-learning-objectives-and-knowledge-levels)
  - [`0.5 About Professional Training Providers`](Chapter_0_Overview.md#05-about-professional-training-providers)
  - [`0.6 About Exam Providers`](Chapter_0_Overview.md#06-about-exam-providers)
- [`1 Introduction to Robot Framework`](Chapter_1_Introduction.md#1-introduction-to-robot-framework)
  - [`1.1 Purpose / Use-Cases`](Chapter_1_Introduction.md#11-purpose--use-cases)
    - [`1.1.1 Test Automation`](Chapter_1_Introduction.md#111-test-automation)
      - [`1.1.1.1 Synthetic Monitoring`](Chapter_1_Introduction.md#1111-synthetic-monitoring)
    - [`1.1.2 Robotic Process Automation (RPA)`](Chapter_1_Introduction.md#112-robotic-process-automation-rpa)
  - [`1.2 Architecture of Robot Framework`](Chapter_1_Introduction.md#12-architecture-of-robot-framework)
    - [`1.2.1 Robot Framework and the gTAA (Generic Test Automation Architecture)`](Chapter_1_Introduction.md#121-robot-framework-and-the-gtaa-generic-test-automation-architecture)
    - [`1.2.2 What is Robot Framework & What It Is Not`](Chapter_1_Introduction.md#122-what-is-robot-framework--what-it-is-not)
    - [`1.2.3 Technology & Prerequisites`](Chapter_1_Introduction.md#123-technology--prerequisites)
  - [`1.3 Basic Syntax & Structure`](Chapter_1_Introduction.md#13-basic-syntax--structure)
    - [`1.3.1 What are Test Cases / Tasks?`](Chapter_1_Introduction.md#131-what-are-test-cases--tasks)
    - [`1.3.2 Files & Directories`](Chapter_1_Introduction.md#132-files--directories)
    - [`1.3.3 What are Keywords?`](Chapter_1_Introduction.md#133-what-are-keywords)
    - [`1.3.4 Resource Files & Libraries`](Chapter_1_Introduction.md#134-resource-files--libraries)
  - [`1.4 Specification Styles`](Chapter_1_Introduction.md#14-specification-styles)
    - [`1.4.1 Keyword-Driven Specification`](Chapter_1_Introduction.md#141-keyword-driven-specification)
    - [`1.4.2 Behavior-Driven Specification`](Chapter_1_Introduction.md#142-behavior-driven-specification)
    - [`1.4.3 Comparing Keyword-Driven and Behavior-Driven Specification`](Chapter_1_Introduction.md#143-comparing-keyword-driven-and-behavior-driven-specification)
    - [`1.4.4 Data-Driven Specification`](Chapter_1_Introduction.md#144-data-driven-specification)
      - [`1.4.4.1 Benefits of Data-Driven Specification:`](Chapter_1_Introduction.md#1441-benefits-of-data-driven-specification)
  - [`1.5 Organization and Licensing`](Chapter_1_Introduction.md#15-organization-and-licensing)
    - [`1.5.1 Open Source License`](Chapter_1_Introduction.md#151-open-source-license)
    - [`1.5.2 About the Robot Framework Foundation`](Chapter_1_Introduction.md#152-about-the-robot-framework-foundation)
    - [`1.5.3 Robot Framework Webpages`](Chapter_1_Introduction.md#153-robot-framework-webpages)
- [`2 Getting Started with Robot Framework`](Chapter_2_Getting_Started.md#2-getting-started-with-robot-framework)
  - [`2.1 Suite File & Tree Structure`](Chapter_2_Getting_Started.md#21-suite-file--tree-structure)
    - [`2.1.1 Suite Files`](Chapter_2_Getting_Started.md#211-suite-files)
    - [`2.1.2 Sections and Their Artifacts`](Chapter_2_Getting_Started.md#212-sections-and-their-artifacts)
      - [`2.1.2.1 `*** Settings ***` Section`](Chapter_2_Getting_Started.md#2121--settings--section)
      - [`2.1.2.2 `*** Variables ***` Section`](Chapter_2_Getting_Started.md#2122--variables--section)
      - [`2.1.2.3 `*** Test Cases ***` or `*** Tasks ***` Section`](Chapter_2_Getting_Started.md#2123--test-cases--or--tasks--section)
      - [`2.1.2.4 `*** Keywords ***` Section`](Chapter_2_Getting_Started.md#2124--keywords--section)
      - [`2.1.2.5 `*** Comments ***` Section`](Chapter_2_Getting_Started.md#2125--comments--section)
  - [`2.2 Basic Suite File Syntax`](Chapter_2_Getting_Started.md#22-basic-suite-file-syntax)
    - [`2.2.1 Separation and Indentation`](Chapter_2_Getting_Started.md#221-separation-and-indentation)
    - [`2.2.2 Line Breaks, Continuation and Empty Lines`](Chapter_2_Getting_Started.md#222-line-breaks-continuation-and-empty-lines)
    - [`2.2.3 In-line Comments`](Chapter_2_Getting_Started.md#223-in-line-comments)
    - [`2.2.4 Escaping of Control Characters`](Chapter_2_Getting_Started.md#224-escaping-of-control-characters)
    - [`2.2.5 Example Suite File`](Chapter_2_Getting_Started.md#225-example-suite-file)
  - [`2.3 Executing Robot`](Chapter_2_Getting_Started.md#23-executing-robot)
    - [`2.3.1 `robot` command & help`](Chapter_2_Getting_Started.md#231-robot-command--help)
    - [`2.3.2 Execution Artifacts`](Chapter_2_Getting_Started.md#232-execution-artifacts)
    - [`2.3.3 Status`](Chapter_2_Getting_Started.md#233-status)
      - [`2.3.3.1 PASS`](Chapter_2_Getting_Started.md#2331-pass)
      - [`2.3.3.2 FAIL`](Chapter_2_Getting_Started.md#2332-fail)
    - [`2.3.4 Logging possibilities (Log vs Console)`](Chapter_2_Getting_Started.md#234-logging-possibilities-log-vs-console)
  - [`2.4 Keyword Imports`](Chapter_2_Getting_Started.md#24-keyword-imports)
    - [`2.4.1 Libraries`](Chapter_2_Getting_Started.md#241-libraries)
    - [`2.4.2 Resource Files`](Chapter_2_Getting_Started.md#242-resource-files)
    - [`2.4.3 Import Paths`](Chapter_2_Getting_Started.md#243-import-paths)
  - [`2.5 Keyword Interface and Documentation`](Chapter_2_Getting_Started.md#25-keyword-interface-and-documentation)
    - [`2.5.1 Documented Keyword Information`](Chapter_2_Getting_Started.md#251-documented-keyword-information)
      - [`2.5.1.1 Example Keyword in Library Documentation`](Chapter_2_Getting_Started.md#2511-example-keyword-in-library-documentation)
    - [`2.5.2 Keyword Arguments`](Chapter_2_Getting_Started.md#252-keyword-arguments)
      - [`2.5.2.1 Mandatory Arguments`](Chapter_2_Getting_Started.md#2521-mandatory-arguments)
      - [`2.5.2.2 Optional Arguments`](Chapter_2_Getting_Started.md#2522-optional-arguments)
      - [`2.5.2.3 Embedded Arguments`](Chapter_2_Getting_Started.md#2523-embedded-arguments)
      - [`2.5.2.4 Argument Types`](Chapter_2_Getting_Started.md#2524-argument-types)
      - [`2.5.2.5 Return Types`](Chapter_2_Getting_Started.md#2525-return-types)
    - [`2.5.3 Keyword Documentation & Examples`](Chapter_2_Getting_Started.md#253-keyword-documentation--examples)
  - [`2.6 Writing Test|Task and Calling Keywords`](Chapter_2_Getting_Started.md#26-writing-testtask-and-calling-keywords)
    - [`2.6.1 Positional Arguments`](Chapter_2_Getting_Started.md#261-positional-arguments)
      - [`2.6.1.1 Variable Number of Positional Arguments`](Chapter_2_Getting_Started.md#2611-variable-number-of-positional-arguments)
    - [`2.6.2 Named Arguments`](Chapter_2_Getting_Started.md#262-named-arguments)
      - [`2.6.2.1 Named-Only Arguments`](Chapter_2_Getting_Started.md#2621-named-only-arguments)
      - [`2.6.2.2 Free Named Arguments`](Chapter_2_Getting_Started.md#2622-free-named-arguments)
    - [`2.6.3 Embedded Arguments / Using Behavior-Driven Specification`](Chapter_2_Getting_Started.md#263-embedded-arguments--using-behavior-driven-specification)
- [`3 Keyword Design, Variables, and Resource Files`](Chapter_3_Keyword_Design_Variables_Resources.md#3-keyword-design-variables-and-resource-files)
  - [`3.1 Resource File Structure`](Chapter_3_Keyword_Design_Variables_Resources.md#31-resource-file-structure)
    - [`3.1.1 Sections in Resource Files`](Chapter_3_Keyword_Design_Variables_Resources.md#311-sections-in-resource-files)
  - [`3.2 Variables`](Chapter_3_Keyword_Design_Variables_Resources.md#32-variables)
    - [`3.2.1 Variable Syntax and Access Types`](Chapter_3_Keyword_Design_Variables_Resources.md#321-variable-syntax-and-access-types)
    - [`3.2.2 `*** Variables ***` Section`](Chapter_3_Keyword_Design_Variables_Resources.md#322--variables--section)
      - [`3.2.2.1 Scalar Variable Definition`](Chapter_3_Keyword_Design_Variables_Resources.md#3221-scalar-variable-definition)
      - [`3.2.2.2 Primitive Data Types`](Chapter_3_Keyword_Design_Variables_Resources.md#3222-primitive-data-types)
      - [`3.2.2.3 List Variable Definition`](Chapter_3_Keyword_Design_Variables_Resources.md#3223-list-variable-definition)
      - [`3.2.2.4 Dictionary Variable Definition`](Chapter_3_Keyword_Design_Variables_Resources.md#3224-dictionary-variable-definition)
    - [`3.2.3 Return values from Keywords`](Chapter_3_Keyword_Design_Variables_Resources.md#323-return-values-from-keywords)
      - [`3.2.3.1 Assigning to Scalar Variables`](Chapter_3_Keyword_Design_Variables_Resources.md#3231-assigning-to-scalar-variables)
    - [`3.2.4 `VAR` Statement`](Chapter_3_Keyword_Design_Variables_Resources.md#324-var-statement)
    - [`3.2.5 Variable Scope Introduction`](Chapter_3_Keyword_Design_Variables_Resources.md#325-variable-scope-introduction)
  - [`3.3 User Keyword Definition & Arguments`](Chapter_3_Keyword_Design_Variables_Resources.md#33-user-keyword-definition--arguments)
    - [`3.3.1 `*** Keywords ***` Section`](Chapter_3_Keyword_Design_Variables_Resources.md#331--keywords--section)
    - [`3.3.2 User Keyword Names`](Chapter_3_Keyword_Design_Variables_Resources.md#332-user-keyword-names)
    - [`3.3.3 User Keyword Settings`](Chapter_3_Keyword_Design_Variables_Resources.md#333-user-keyword-settings)
    - [`3.3.4 User Keyword Documentation`](Chapter_3_Keyword_Design_Variables_Resources.md#334-user-keyword-documentation)
    - [`3.3.5 User Keyword Arguments`](Chapter_3_Keyword_Design_Variables_Resources.md#335-user-keyword-arguments)
      - [`3.3.5.1 Defining Mandatory Arguments`](Chapter_3_Keyword_Design_Variables_Resources.md#3351-defining-mandatory-arguments)
      - [`3.3.5.2 Defining Optional Arguments`](Chapter_3_Keyword_Design_Variables_Resources.md#3352-defining-optional-arguments)
      - [`3.3.5.3 Embedded Arguments`](Chapter_3_Keyword_Design_Variables_Resources.md#3353-embedded-arguments)
      - [`3.3.5.4 Other Argument Kinds`](Chapter_3_Keyword_Design_Variables_Resources.md#3354-other-argument-kinds)
    - [`3.3.6 RETURN Statement`](Chapter_3_Keyword_Design_Variables_Resources.md#336-return-statement)
    - [`3.3.7 Keyword Conventions`](Chapter_3_Keyword_Design_Variables_Resources.md#337-keyword-conventions)
  - [`3.4 Advanced Importing of Keywords and Naming Conflicts`](Chapter_3_Keyword_Design_Variables_Resources.md#34-advanced-importing-of-keywords-and-naming-conflicts)
    - [`3.4.1 Importing Hierarchies`](Chapter_3_Keyword_Design_Variables_Resources.md#341-importing-hierarchies)
    - [`3.4.2 Library Configuration`](Chapter_3_Keyword_Design_Variables_Resources.md#342-library-configuration)
    - [`3.4.3 Naming Conflicts`](Chapter_3_Keyword_Design_Variables_Resources.md#343-naming-conflicts)
- [`4 Advanced Structuring and Execution`](Chapter_4_Advanced_Structuring_and_Execution.md#4-advanced-structuring-and-execution)
  - [`4.1 Setups (Suite, Test|Task, Keyword)`](Chapter_4_Advanced_Structuring_and_Execution.md#41-setups-suite-testtask-keyword)
    - [`4.1.1 Suite Setup`](Chapter_4_Advanced_Structuring_and_Execution.md#411-suite-setup)
    - [`4.1.2 Test|Task Setup`](Chapter_4_Advanced_Structuring_and_Execution.md#412-testtask-setup)
    - [`4.1.3 Keyword Setup`](Chapter_4_Advanced_Structuring_and_Execution.md#413-keyword-setup)
  - [`4.2 Teardowns (Suite, Test|Task, Keyword)`](Chapter_4_Advanced_Structuring_and_Execution.md#42-teardowns-suite-testtask-keyword)
    - [`4.2.1 Suite Teardown`](Chapter_4_Advanced_Structuring_and_Execution.md#421-suite-teardown)
    - [`4.2.2 Test|Task Teardown`](Chapter_4_Advanced_Structuring_and_Execution.md#422-testtask-teardown)
    - [`4.2.3 Keyword Teardown`](Chapter_4_Advanced_Structuring_and_Execution.md#423-keyword-teardown)
  - [`4.3 Initialization Files`](Chapter_4_Advanced_Structuring_and_Execution.md#43-initialization-files)
    - [`4.3.1 Purpose of Initialization Files`](Chapter_4_Advanced_Structuring_and_Execution.md#431-purpose-of-initialization-files)
    - [`4.3.2 Suite Setup and Suite Teardown of Initialization Files`](Chapter_4_Advanced_Structuring_and_Execution.md#432-suite-setup-and-suite-teardown-of-initialization-files)
    - [`4.3.3 Allowed Sections in Initialization Files`](Chapter_4_Advanced_Structuring_and_Execution.md#433-allowed-sections-in-initialization-files)
    - [`4.3.4 Example of an Initialization File`](Chapter_4_Advanced_Structuring_and_Execution.md#434-example-of-an-initialization-file)
  - [`4.4 Test|Task Tags and Filtering Execution`](Chapter_4_Advanced_Structuring_and_Execution.md#44-testtask-tags-and-filtering-execution)
    - [`4.4.1 Assigning Tags to Tests|Tasks`](Chapter_4_Advanced_Structuring_and_Execution.md#441-assigning-tags-to-teststasks)
    - [`4.4.2 Using Tags to Filter Execution`](Chapter_4_Advanced_Structuring_and_Execution.md#442-using-tags-to-filter-execution)
      - [`4.4.2.1 Including Tests|Tasks by Tags`](Chapter_4_Advanced_Structuring_and_Execution.md#4421-including-teststasks-by-tags)
      - [`4.4.2.2 Excluding Tests|Tasks by Tags`](Chapter_4_Advanced_Structuring_and_Execution.md#4422-excluding-teststasks-by-tags)
      - [`4.4.2.3 Combining Include and Exclude Options`](Chapter_4_Advanced_Structuring_and_Execution.md#4423-combining-include-and-exclude-options)
      - [`4.4.2.4 Using Tag Patterns`](Chapter_4_Advanced_Structuring_and_Execution.md#4424-using-tag-patterns)
    - [`4.4.3 Reserved Tags`](Chapter_4_Advanced_Structuring_and_Execution.md#443-reserved-tags)
  - [`4.5 SKIP Test|Task Status`](Chapter_4_Advanced_Structuring_and_Execution.md#45-skip-testtask-status)
    - [`4.5.1 Skipping By Tags Selection (CLI)`](Chapter_4_Advanced_Structuring_and_Execution.md#451-skipping-by-tags-selection-cli)
    - [`4.5.2 Skipping Dynamically During Execution`](Chapter_4_Advanced_Structuring_and_Execution.md#452-skipping-dynamically-during-execution)
    - [`4.5.3 Automatically Skipping Failed Tests`](Chapter_4_Advanced_Structuring_and_Execution.md#453-automatically-skipping-failed-tests)
- [`5 Exploring Advanced Constructs`](Chapter_5_Exploring_Advanced_Constructs.md#5-exploring-advanced-constructs)
  - [`5.1 Advanced Variables`](Chapter_5_Exploring_Advanced_Constructs.md#51-advanced-variables)
    - [`5.1.1 Variable Priorities`](Chapter_5_Exploring_Advanced_Constructs.md#511-variable-priorities)
      - [`5.1.1.1 Statically Defined or Imported Variables`](Chapter_5_Exploring_Advanced_Constructs.md#5111-statically-defined-or-imported-variables)
      - [`5.1.1.2 Dynamically Created Variables`](Chapter_5_Exploring_Advanced_Constructs.md#5112-dynamically-created-variables)
    - [`5.1.2 Variable Scopes`](Chapter_5_Exploring_Advanced_Constructs.md#512-variable-scopes)
      - [`5.1.2.1 . Global Scope`](Chapter_5_Exploring_Advanced_Constructs.md#5121--global-scope)
      - [`5.1.2.2 . Suite Scope`](Chapter_5_Exploring_Advanced_Constructs.md#5122--suite-scope)
      - [`5.1.2.3 . Test|Task Scope`](Chapter_5_Exploring_Advanced_Constructs.md#5123--testtask-scope)
      - [`5.1.2.4 . Local Scope`](Chapter_5_Exploring_Advanced_Constructs.md#5124--local-scope)
    - [`5.1.3 Global Variables via Command Line`](Chapter_5_Exploring_Advanced_Constructs.md#513-global-variables-via-command-line)
    - [`5.1.4 List-Variables (Advanced)`](Chapter_5_Exploring_Advanced_Constructs.md#514-list-variables-advanced)
      - [`5.1.4.1 Assigning List Variables`](Chapter_5_Exploring_Advanced_Constructs.md#5141-assigning-list-variables)
      - [`5.1.4.2 Accessing List Variables`](Chapter_5_Exploring_Advanced_Constructs.md#5142-accessing-list-variables)
    - [`5.1.5 Dict-Like`](Chapter_5_Exploring_Advanced_Constructs.md#515-dict-like)
      - [`5.1.5.1 Assigning Dictionary Variables`](Chapter_5_Exploring_Advanced_Constructs.md#5151-assigning-dictionary-variables)
      - [`5.1.5.2 Accessing Dictionary Variables`](Chapter_5_Exploring_Advanced_Constructs.md#5152-accessing-dictionary-variables)
    - [`5.1.6 Built-In Variables`](Chapter_5_Exploring_Advanced_Constructs.md#516-built-in-variables)
  - [`5.2 Control Structures`](Chapter_5_Exploring_Advanced_Constructs.md#52-control-structures)
    - [`5.2.1 IF Statements`](Chapter_5_Exploring_Advanced_Constructs.md#521-if-statements)
      - [`5.2.1.1 Basic IF Syntax`](Chapter_5_Exploring_Advanced_Constructs.md#5211-basic-if-syntax)
    - [`5.2.2 IF/ELSE IF/ELSE Structure`](Chapter_5_Exploring_Advanced_Constructs.md#522-ifelse-ifelse-structure)
    - [`5.2.3 Inline IF Statement`](Chapter_5_Exploring_Advanced_Constructs.md#523-inline-if-statement)
    - [`5.2.4 FOR Loops`](Chapter_5_Exploring_Advanced_Constructs.md#524-for-loops)
      - [`5.2.4.1 Basic FOR Loop Syntax`](Chapter_5_Exploring_Advanced_Constructs.md#5241-basic-for-loop-syntax)
    - [`5.2.5 WHILE Loops`](Chapter_5_Exploring_Advanced_Constructs.md#525-while-loops)
    - [`5.2.6 BREAK and CONTINUE`](Chapter_5_Exploring_Advanced_Constructs.md#526-break-and-continue)
