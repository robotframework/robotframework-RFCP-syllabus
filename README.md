# Public Review of the Robot Framework Certified Professional® Syllabus

Welcome to the public review of the Robot Framework® Certified Professional certification syllabus.

We are seeking feedback from the community to ensure this syllabus meets the highest standards and addresses the needs of Robot Framework professionals. While the topics have been largely finalized internally, we welcome suggestions and insights to refine and improve the content.

If you have feedback or ideas, please participate by opening an issue or commenting directly on the pull request linked below:
[Comment on the Pull Request](https://github.com/robotframework/robotframework-RFCP-syllabus/pull/39/files)

When providing feedback, please be as detailed as possible and explain your suggestions clearly. If you have a specific proposal, we encourage you to use GitHub’s proposal features to submit it directly. Your input is invaluable to making this certification syllabus comprehensive and effective.


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
    - LO-use-case Recall the two main Use-Cases of Robot Framework (K1)
    - [`1.1.1 Test Automation`](Chapter_1_Introduction.md#111-test-automation)
      - LO-test-level recall the test levels Robot Framework is mostly used for (K1)
      - [`1.1.1.1 Synthetic Monitoring`](Chapter_1_Introduction.md#1111-synthetic-monitoring)
    - [`1.1.2 Robotic Process Automation (RPA)`](Chapter_1_Introduction.md#112-robotic-process-automation-rpa)
  - [`1.2 Architecture of Robot Framework`](Chapter_1_Introduction.md#12-architecture-of-robot-framework)
    - [`1.2.1 Robot Framework and the gTAA (Generic Test Automation Architecture)`](Chapter_1_Introduction.md#121-robot-framework-and-the-gtaa-generic-test-automation-architecture)
      - LO-gtaa Recall the layers of the Generic Test Automation Architecture (gTAA) and their corresponding components in Robot Framework (K1)
    - [`1.2.2 What is Robot Framework & What It Is Not`](Chapter_1_Introduction.md#122-what-is-robot-framework--what-it-is-not)
      - LO-rf-part Recall what is part of Robot Framework and what is not (K1)
    - [`1.2.3 Technology & Prerequisites`](Chapter_1_Introduction.md#123-technology--prerequisites)
      - LO-rf-tech Recall the technology Robot Framework is built on and the prerequisites for running it (K1)
  - [`1.3 Basic Syntax & Structure`](Chapter_1_Introduction.md#13-basic-syntax--structure)
    - LO-human-stx Recall the key attributes of the syntax that makes Robot Framework simple and human-readable (K1)
    - [`1.3.1 What are Test Cases / Tasks?`](Chapter_1_Introduction.md#131-what-are-test-cases--tasks)
    - [`1.3.2 Files & Directories`](Chapter_1_Introduction.md#132-files--directories)
    - [`1.3.3 What are Keywords?`](Chapter_1_Introduction.md#133-what-are-keywords)
      - LO-userkw-libkw-diff Explain the difference between User Keywords and Library Keywords (K2)
    - [`1.3.4 Resource Files & Libraries`](Chapter_1_Introduction.md#134-resource-files--libraries)
      - LO-LO-res-lib-arf-diff Recall the difference between Resource Files and Libraries and their artefacts (K1)
  - [`1.4 Specification Styles`](Chapter_1_Introduction.md#14-specification-styles)
    - LO-spec-style Recall the three specification styles of Robot Framework (K1)
    - [`1.4.1 Keyword-Driven Specification`](Chapter_1_Introduction.md#141-keyword-driven-specification)
      - LO-kw-spec Understand the basic concepts of Keyword-Driven Specification (K2)
    - [`1.4.2 Behavior-Driven Specification`](Chapter_1_Introduction.md#142-behavior-driven-specification)
      - LO-bdd-spec Understand the basic concepts of Behavior-Driven Specification (K2)
    - [`1.4.3 Comparing Keyword-Driven and Behavior-Driven Specification`](Chapter_1_Introduction.md#143-comparing-keyword-driven-and-behavior-driven-specification)
      - LO-kw-bdd-diff Recall the differences between Keyword-Driven and Behavior-Driven Specification (K1)
    - [`1.4.4 Data-Driven Specification`](Chapter_1_Introduction.md#144-data-driven-specification)
      - LO-dd-spec Recall the purpose of Data-Driven Specification (K1)
  - [`1.5 Organization and Licensing`](Chapter_1_Introduction.md#15-organization-and-licensing)
    - [`1.5.1 Open Source License`](Chapter_1_Introduction.md#151-open-source-license)
      - LO-os-license Recall the type of open-source license under which Robot Framework is distributed (K1)
    - [`1.5.2 About the Robot Framework Foundation`](Chapter_1_Introduction.md#152-about-the-robot-framework-foundation)
      - LO-foundation List and recall the key objectives and organizational form of the Robot Framework Foundation (K1)
    - [`1.5.3 Robot Framework Webpages`](Chapter_1_Introduction.md#153-robot-framework-webpages)
      - LO-rf-res Recall the official webpages for Robot Framework and its resources (K1)
- [`2 Getting Started with Robot Framework`](Chapter_2_Getting_Started.md#2-getting-started-with-robot-framework)
  - [`2.1 Suite File & Tree Structure`](Chapter_2_Getting_Started.md#21-suite-file--tree-structure)
    - LO-file-dir Understand which files and directories are considered suites and how they are structured in a suite tree. (K2)
    - [`2.1.1 Suite Files`](Chapter_2_Getting_Started.md#211-suite-files)
      - LO-suite-file Recall the conditions and requirements for a file to be considered a Suite file (K1)
    - [`2.1.2 Sections and Their Artifacts`](Chapter_2_Getting_Started.md#212-sections-and-their-artifacts)
      - LO-section Recall the available sections in a suite file and their purpose. (K1)
      - [`2.1.2.1 `*** Settings ***` Section`](Chapter_2_Getting_Started.md#2121--stgs--section)
        - LO-suite-stgs-list Recall the available settings in a suite file. (K1)
        - LO-suite-stgs-use Understand the concepts of suite settings and how to define them. (K2)
      - [`2.1.2.2 `*** Variables ***` Section`](Chapter_2_Getting_Started.md#2122--variables--section)
        - LO-sect-vars Recall the purpose of the `*** Variables ***` section. (K1)
      - [`2.1.2.3 `*** Test Cases ***` or `*** Tasks ***` Section`](Chapter_2_Getting_Started.md#2123--test-cases--or--tasks--section)
        - LO-sect-tcs Understand the purpose of the `*** Test Cases ***` or `*** Tasks ***` section. (K2)
      - [`2.1.2.4 `*** Keywords ***` Section`](Chapter_2_Getting_Started.md#2124--keywords--section)
        - LO-sect-kws Understand the purpose and limitations of the `*** Keywords ***` section. (K2)
      - [`2.1.2.5 `*** Comments ***` Section`](Chapter_2_Getting_Started.md#2125--comments--section)
  - [`2.2 Basic Suite File Syntax`](Chapter_2_Getting_Started.md#22-basic-suite-file-syntax)
    - LO-suite-file-stx Understand the basic syntax of test cases and tasks. (K2)
    - [`2.2.1 Separation and Indentation`](Chapter_2_Getting_Started.md#221-separation-and-indentation)
      - LO-sep-idt Understand and apply the mechanics of indentation and separation in Robot Framework. (K3)
    - [`2.2.2 Line Breaks, Continuation and Empty Lines`](Chapter_2_Getting_Started.md#222-line-breaks-continuation-and-empty-lines)
      - LO-linebr-cont Be able to use line breaks and continuation in a statement. (K3)
    - [`2.2.3 In-line Comments`](Chapter_2_Getting_Started.md#223-in-line-comments)
      - LO-inl-comment Be able to add in-line comments to suites. (K3)
    - [`2.2.4 Escaping of Control Characters`](Chapter_2_Getting_Started.md#224-escaping-of-control-characters)
      - LO-esc-char Understand how to escape control characters in Robot Framework. (K2)
    - [`2.2.5 Example Suite File`](Chapter_2_Getting_Started.md#225-example-suite-file)
      - LO-suite-struct Understand the structure of a basic suite file. (K2)
  - [`2.3 Executing Robot`](Chapter_2_Getting_Started.md#23-executing-robot)
    - LO-cli-comp Recall the three components of the Robot Framework CLI. (K1)
    - [`2.3.1 `robot` command & help`](Chapter_2_Getting_Started.md#231-robot-command--help)
      - LO-cli-exec Understand how to run the `robot` command and its basic usage. (K2)
    - [`2.3.2 Execution Artifacts`](Chapter_2_Getting_Started.md#232-execution-artifacts)
      - LO-exec-arf Explain the execution artifacts generated by Robot Framework. (K2)
    - [`2.3.3 Status`](Chapter_2_Getting_Started.md#233-status)
      - LO-status-label Recall the four different status labels used by Robot Framework. (K1)
      - [`2.3.3.1 PASS`](Chapter_2_Getting_Started.md#2331-pass)
        - LO-status-pass Understand when an element is marked as `PASS`. (K2)
      - [`2.3.3.2 FAIL`](Chapter_2_Getting_Started.md#2332-fail)
        - LO-status-fail Understand when an element is marked as `FAIL`. (K2)
    - [`2.3.4 Logging possibilities (Log vs Console)`](Chapter_2_Getting_Started.md#234-logging-possibilities-log-vs-console)
      - LO-log Understand the difference between log messages and console output. (K2)
  - [`2.4 Keyword Imports`](Chapter_2_Getting_Started.md#24-keyword-imports)
    - [`2.4.1 Libraries`](Chapter_2_Getting_Started.md#241-libraries)
      - LO-lib-import Recall the purpose of keyword libraries and how to import them. (K1)
      - LO-lib-type Recall the three types of libraries in Robot Framework. (K1)
    - [`2.4.2 Resource Files`](Chapter_2_Getting_Started.md#242-resource-files)
      - LO-res-what Recall the purpose of resource files. (K1)
      - LO-res-use Use resource files to import new keywords. (K3)
    - [`2.4.3 Import Paths`](Chapter_2_Getting_Started.md#243-import-paths)
      - LO-imp-path Understand the different types of paths that can be used to import libraries and resource files. (K2)
  - [`2.5 Keyword Interface and Documentation`](Chapter_2_Getting_Started.md#25-keyword-interface-and-documentation)
    - LO-kw-struct Understand the structure of keyword interfaces and how to interpret keyword documentation. (K2)
    - [`2.5.1 Documented Keyword Information`](Chapter_2_Getting_Started.md#251-documented-keyword-information)
      - LO-kw-doc-what Recall the information that can be found in a keyword documentation. (K1)
      - [`2.5.1.1 Example Keyword in Library Documentation`](Chapter_2_Getting_Started.md#2511-example-keyword-in-library-documentation)
    - [`2.5.2 Keyword Arguments`](Chapter_2_Getting_Started.md#252-keyword-arguments)
      - LO-kw-arg-kind Understand the difference between argument kinds. (K2)
      - [`2.5.2.1 Mandatory Arguments`](Chapter_2_Getting_Started.md#2521-mandatory-arguments)
        - LO-kw-arg-mand-conc Understand the concept of mandatory arguments and how they are documented. (K2)
      - [`2.5.2.2 Optional Arguments`](Chapter_2_Getting_Started.md#2522-optional-arguments)
        - LO-kw-arg-opt-conc Understand the concept of optional arguments and how they are documented. (K2)
      - [`2.5.2.3 Embedded Arguments`](Chapter_2_Getting_Started.md#2523-embedded-arguments)
        - LO-kw-arg-emb-conc Recall the concept of embedded arguments and how they are documented. (K1)
      - [`2.5.2.4 Argument Types`](Chapter_2_Getting_Started.md#2524-argument-types)
        - LO-kw-arg-typing Understand the concept of argument types and automatic type conversion. (K2)
      - [`2.5.2.5 Return Types`](Chapter_2_Getting_Started.md#2525-return-types)
        - LO-kw-ret-typing Understand the concept of return type hints. (K2)
    - [`2.5.3 Keyword Documentation & Examples`](Chapter_2_Getting_Started.md#253-keyword-documentation--examples)
      - LO-kw-doc-how Understand how to read keyword documentation and how to interpret the examples. (K2)
  - [`2.6 Writing Test|Task and Calling Keywords`](Chapter_2_Getting_Started.md#26-writing-testtask-and-calling-keywords)
    - LO-tc-call-kw Understand how to call imported keywords and how to structure keyword calls. (K2)
    - [`2.6.1 Positional Arguments`](Chapter_2_Getting_Started.md#261-positional-arguments)
      - LO-kw-arg-pos-how Understand the concept of how to set argument values positionally. (K2)
      - [`2.6.1.1 Variable Number of Positional Arguments`](Chapter_2_Getting_Started.md#2611-variable-number-of-positional-arguments)
        - LO-kw-arg-pos-use Recall how variable number of positional arguments are marked in the documentation and their use-case. (K1)
    - [`2.6.2 Named Arguments`](Chapter_2_Getting_Started.md#262-named-arguments)
      - LO-kw-arg-named-how Understand the concept of named arguments and how to set argument values by their name. (K2)
      - [`2.6.2.1 Named-Only Arguments`](Chapter_2_Getting_Started.md#2621-named-only-arguments)
        - LO-kw-arg-named-only Recall named-only arguments and where they are located. (K1)
      - [`2.6.2.2 Free Named Arguments`](Chapter_2_Getting_Started.md#2622-free-named-arguments)
        - LO-kw-arg-free-named Recall how free named arguments are marked in documentation. (K1)
    - [`2.6.3 Embedded Arguments / Using Behavior-Driven Specification`](Chapter_2_Getting_Started.md#263-embedded-arguments--using-behavior-driven-specification)
      - LO-kw-arg-emb-how Recall how to use enbedded arguments. (K1)
- [`3 Keyword Design, Variables, and Resource Files`](Chapter_3_Keyword_Design_Variables_Resources.md#3-keyword-design-variables-and-resource-files)
  - [`3.1 Resource File Structure`](Chapter_3_Keyword_Design_Variables_Resources.md#31-resource-file-structure)
    - [`3.1.1 Sections in Resource Files`](Chapter_3_Keyword_Design_Variables_Resources.md#311-sections-in-resource-files)
  - [`3.2 Variables`](Chapter_3_Keyword_Design_Variables_Resources.md#32-variables)
    - LO-var-what Understand how variables in Robot Framework are used to store and manage data (K2)
    - LO-var-diff Recall the relevant five different ways to create and assign variables(K1)
    - [`3.2.1 Variable Syntax and Access Types`](Chapter_3_Keyword_Design_Variables_Resources.md#321-variable-syntax-and-access-types)
      - LO-var-acc-type Recall the four syntactical access types to variables with their prefixes (K1)
      - LO-var-stx Recall the basic syntax of variables (K1)
    - [`3.2.2 `*** Variables ***` Section`](Chapter_3_Keyword_Design_Variables_Resources.md#322--variables--section)
      - LO-var-sect-create Create variables in the Variables section (K3)
      - LO-var-prefix Use the correct variable prefixes for assigning and accessing variables. (K3)
      - [`3.2.2.1 Scalar Variable Definition`](Chapter_3_Keyword_Design_Variables_Resources.md#3221-scalar-variable-definition)
        - LO-var-scalar-use Create and assign scalar variables (K3)
        - LO-var-scalar-mult Understand how multiple lines can be used to define scalar variables (K2)
      - [`3.2.2.2 Primitive Data Types`](Chapter_3_Keyword_Design_Variables_Resources.md#3222-primitive-data-types)
        - LO-data-primitive Understand how to access primitive data types (K2)
      - [`3.2.2.3 List Variable Definition`](Chapter_3_Keyword_Design_Variables_Resources.md#3223-list-variable-definition)
        - LO-var-list-use Understand how to set and access data in list variables (K2)
      - [`3.2.2.4 Dictionary Variable Definition`](Chapter_3_Keyword_Design_Variables_Resources.md#3224-dictionary-variable-definition)
        - LO-var-dict-use Understand how to set and access data in dict variables (K2)
    - [`3.2.3 Return values from Keywords`](Chapter_3_Keyword_Design_Variables_Resources.md#323-return-values-from-keywords)
      - LO-kw-rval-asg Be able to assign return values from keywords to variables (K3)
      - [`3.2.3.1 Assigning to Scalar Variables`](Chapter_3_Keyword_Design_Variables_Resources.md#3231-assigning-to-scalar-variables)
    - [`3.2.4 `VAR` Statement`](Chapter_3_Keyword_Design_Variables_Resources.md#324-var-statement)
      - LO-var-statement Understand how to create variables using the VAR statement (K2)
    - [`3.2.5 Variable Scope Introduction`](Chapter_3_Keyword_Design_Variables_Resources.md#325-variable-scope-introduction)
      - LO-var-scope Understand how `local` and `suite` scope variables are created (K2)
  - [`3.3 User Keyword Definition & Arguments`](Chapter_3_Keyword_Design_Variables_Resources.md#33-user-keyword-definition--arguments)
    - [`3.3.1 `*** Keywords ***` Section`](Chapter_3_Keyword_Design_Variables_Resources.md#331--keywords--section)
    - [`3.3.2 User Keyword Names`](Chapter_3_Keyword_Design_Variables_Resources.md#332-user-keyword-names)
      - LO-kw-match Recall the rules how keyword names are matched. (K1)
    - [`3.3.3 User Keyword Settings`](Chapter_3_Keyword_Design_Variables_Resources.md#333-user-keyword-stgs)
      - LO-kw-stgs Recall all available settings and their purpose for User Keywords (K1)
    - [`3.3.4 User Keyword Documentation`](Chapter_3_Keyword_Design_Variables_Resources.md#334-user-keyword-documentation)
      - LO-kw-logic-line Recall the significance of the first logical line and in keyword documentation for the log file (K1).
    - [`3.3.5 User Keyword Arguments`](Chapter_3_Keyword_Design_Variables_Resources.md#335-user-keyword-arguments)
      - LO-kw-arg-stx Understand the purpose and syntax of the [Arguments] setting in User Keywords (K2).
      - [`3.3.5.1 Defining Mandatory Arguments`](Chapter_3_Keyword_Design_Variables_Resources.md#3351-defining-mandatory-arguments)
        - LO-kw-arg-mand-what Recall what makes an argument mandatory in a user keyword. (K1)
        - LO-kw-arg-mand-use Define User Keywords with mandatory arguments. (K3)
      - [`3.3.5.2 Defining Optional Arguments`](Chapter_3_Keyword_Design_Variables_Resources.md#3352-defining-optional-arguments)
        - LO-kw-arg-opt-what Recall how to define optional arguments in a user keyword. (K1)
        - LO-kw-arg-opt-use Define User Keywords with optional arguments. (K3)
      - [`3.3.5.3 Embedded Arguments`](Chapter_3_Keyword_Design_Variables_Resources.md#3353-embedded-arguments)
        - LO-kw-arg-emb-what Describe how embedded arguments are replaced by actual values during keyword execution (K2).
        - LO-kw-arg-emb-bdd Understand the role of embedded arguments in Behavior-Driven Development (BDD) style. (K2)
      - [`3.3.5.4 Other Argument Kinds`](Chapter_3_Keyword_Design_Variables_Resources.md#3354-other-argument-kinds)
    - [`3.3.6 RETURN Statement`](Chapter_3_Keyword_Design_Variables_Resources.md#336-return-statement)
      - LO-ret-how Understand how the `RETURN` statement passes data between different keywords. (K2)
      - LO-ret-use Use the `RETURN` statement to return values from a user keyword and assign it to a variable. (K3)
    - [`3.3.7 Keyword Conventions`](Chapter_3_Keyword_Design_Variables_Resources.md#337-keyword-conventions)
      - LO-name-conv Recall the naming conventions for user keywords (K1).
  - [`3.4 Data-Driven Specification`](Chapter_3_Keyword_Design_Variables_Resources.md#34-data-driven-specification)
    - LO-dd-conc Understand the basic concept and syntax of Data-Driven Specification (K2)
    - [`3.4.1 Test|Task Templates`](Chapter_3_Keyword_Design_Variables_Resources.md#341-testtask-templates)
      - LO-templ-use Understand how to define and use test|task templates (K2)
      - LO-templ-diff Recall the differences between the two different approaches to define Data-Driven Specification (K1)
      - [`3.4.1.1 Multiple Named Test|Task With One Template`](Chapter_3_Keyword_Design_Variables_Resources.md#3411-multiple-named-testtask-with-one-template)
        - LO-templ-mult-tc Recall the syntax and properties of multiple named test|task with one template (K1)
      - [`3.4.1.2 Named Test|Task With Multiple Data Rows:`](Chapter_3_Keyword_Design_Variables_Resources.md#3412-named-testtask-with-multiple-data-rows)
        - LO-templ-mult-row Recall the syntax and properties of named test|task with multiple data rows (K1)
  - [`3.5 Advanced Importing of Keywords and Naming Conflicts`](Chapter_3_Keyword_Design_Variables_Resources.md#35-advanced-importing-of-keywords-and-naming-conflicts)
    - LO-name-conflict Recall that naming conflicts can arise from the import of multiple resource files (K1).
    - [`3.5.1 Importing Hierarchies`](Chapter_3_Keyword_Design_Variables_Resources.md#351-importing-hierarchies)
      - LO-imp-rec-how Understand how recursive imports of resource files and libraries work (K2).
    - [`3.5.2 Library Configuration`](Chapter_3_Keyword_Design_Variables_Resources.md#352-library-configuration)
      - LO-lib-doc Recall the purpose of the `Importing` section in library documentation (K1).
      - LO-lib-arg Be able to configure a library import using arguments (K3).
    - [`3.5.3 Naming Conflicts`](Chapter_3_Keyword_Design_Variables_Resources.md#353-naming-conflicts)
      - LO-name-confl-mit Explain how naming conflicts can happen and how to mitigate them (K2).
- [`4 Advanced Structuring and Execution`](Chapter_4_Advanced_Structuring_and_Execution.md#4-advanced-structuring-and-execution)
  - [`4.1 Setups (Suite, Test|Task, Keyword)`](Chapter_4_Advanced_Structuring_and_Execution.md#41-setups-suite-testtask-keyword)
    - LO-setup-what Recall the purpose and benefits of Setups in Robot Framework (K1)
    - LO-setup-level Understand the different levels where and how a Setup can be defined (K2)
    - [`4.1.1 Suite Setup`](Chapter_4_Advanced_Structuring_and_Execution.md#411-suite-setup)
      - LO-suite-setup-what Recall key characteristics, benefits, and syntax of Suite Setup (K1)
      - LO-suite-setup-exec Understand when Suite Setup is executed and used (K2)
    - [`4.1.2 Test|Task Setup`](Chapter_4_Advanced_Structuring_and_Execution.md#412-testtask-setup)
      - LO-tc-setup-what Recall key characteristics, benefits, and syntax of Test Setup (K1)
      - LO-tc-setup-exec Understand when Test|Task Setup is executed and used (K2)
    - [`4.1.3 Keyword Setup`](Chapter_4_Advanced_Structuring_and_Execution.md#413-keyword-setup)
      - LO-kw-setup-what Recall key characteristics and syntax of Keyword Setup (K1)
  - [`4.2 Teardowns (Suite, Test|Task, Keyword)`](Chapter_4_Advanced_Structuring_and_Execution.md#42-teardowns-suite-testtask-keyword)
    - LO-tear-level Understand the different levels where and how a Teardowns can be defined and when they are executed (K2)
    - LO-tear-uc Recall the typical use cases for using a Teardowns (K1)
    - [`4.2.1 Suite Teardown`](Chapter_4_Advanced_Structuring_and_Execution.md#421-suite-teardown)
      - LO-suite-tear-what Recall key characteristics, benefits, and syntax of Suite Teardown (K1)
      - LO-suite-tear-use Understand when Suite Teardown is executed and used (K2)
    - [`4.2.2 Test|Task Teardown`](Chapter_4_Advanced_Structuring_and_Execution.md#422-testtask-teardown)
      - LO-tc-tear-what Recall key characteristics, benefits, and syntax of Test|Task Teardown (K1)
      - LO-tc-tear-use Understand when Test|Task Teardown is executed and used (K2)
    - [`4.2.3 Keyword Teardown`](Chapter_4_Advanced_Structuring_and_Execution.md#423-keyword-teardown)
      - LO-kw-tear-what Recall key characteristics, benefits, and syntax of Keyword Teardown (K1)
  - [`4.3 Initialization Files`](Chapter_4_Advanced_Structuring_and_Execution.md#43-initialization-files)
    - [`4.3.1 Purpose of Initialization Files`](Chapter_4_Advanced_Structuring_and_Execution.md#431-purpose-of-initialization-files)
      - LO-init-what Recall the purpose and possibilities of Initialization Files (K1)
    - [`4.3.2 Suite Setup and Suite Teardown of Initialization Files`](Chapter_4_Advanced_Structuring_and_Execution.md#432-suite-setup-and-suite-teardown-of-initialization-files)
      - LO-init-exec Understand the execution order of Suite Setup and Suite Teardown in Initialization Files and their sub-suites and tests|tasks (K2)
    - [`4.3.3 Allowed Sections in Initialization Files`](Chapter_4_Advanced_Structuring_and_Execution.md#433-allowed-sections-in-initialization-files)
      - LO-init-sects Recall the allowed sections and their content in Initialization Files (K1)
    - [`4.3.4 Example of an Initialization File`](Chapter_4_Advanced_Structuring_and_Execution.md#434-example-of-an-initialization-file)
  - [`4.4 Test|Task Tags and Filtering Execution`](Chapter_4_Advanced_Structuring_and_Execution.md#44-testtask-tags-and-filtering-execution)
    - LO-tags-what Recall the purpose of Test|Task Tags in Robot Framework (K1)
    - [`4.4.1 Assigning Tags to Tests|Tasks`](Chapter_4_Advanced_Structuring_and_Execution.md#441-assigning-tags-to-teststasks)
      - LO-tags-asg Recall the syntax and different ways to assign tags to tests|tasks (K1)
    - [`4.4.2 Using Tags to Filter Execution`](Chapter_4_Advanced_Structuring_and_Execution.md#442-using-tags-to-filter-execution)
      - LO-tags-filter Understand how to filter tests|tasks using the command-line interface of Robot Framework (K2)
      - [`4.4.2.1 Including Tests|Tasks by Tags`](Chapter_4_Advanced_Structuring_and_Execution.md#4421-including-teststasks-by-tags)
      - [`4.4.2.2 Excluding Tests|Tasks by Tags`](Chapter_4_Advanced_Structuring_and_Execution.md#4422-excluding-teststasks-by-tags)
      - [`4.4.2.3 Combining Include and Exclude Options`](Chapter_4_Advanced_Structuring_and_Execution.md#4423-combining-include-and-exclude-options)
      - [`4.4.2.4 Using Tag Patterns`](Chapter_4_Advanced_Structuring_and_Execution.md#4424-using-tag-patterns)
    - [`4.4.3 Reserved Tags`](Chapter_4_Advanced_Structuring_and_Execution.md#443-reserved-tags)
  - [`4.5 SKIP Test|Task Status`](Chapter_4_Advanced_Structuring_and_Execution.md#45-skip-testtask-status)
    - LO-skip-what Recall the use-case and purpose of skipping tests|tasks in Robot Framework (K1)
    - LO-skip-ways Recall the different ways to skip tests|tasks in Robot Framework (K1)
    - [`4.5.1 Skipping By Tags Selection (CLI)`](Chapter_4_Advanced_Structuring_and_Execution.md#451-skipping-by-tags-selection-cli)
      - LO-skip-excl-diff Recall the differences between skip and exclude (K1)
    - [`4.5.2 Skipping Dynamically During Execution`](Chapter_4_Advanced_Structuring_and_Execution.md#452-skipping-dynamically-during-execution)
    - [`4.5.3 Automatically Skipping Failed Tests`](Chapter_4_Advanced_Structuring_and_Execution.md#453-automatically-skipping-failed-tests)
- [`5 Exploring Advanced Constructs`](Chapter_5_Exploring_Advanced_Constructs.md#5-exploring-advanced-constructs)
  - [`5.1 Advanced Variables`](Chapter_5_Exploring_Advanced_Constructs.md#51-advanced-variables)
    - [`5.1.1 Variable Priorities`](Chapter_5_Exploring_Advanced_Constructs.md#511-variable-priorities)
      - LO-var-stat-dyn-diff Understand the difference between statically defined and dynamically created variables in Robot Framework (K2)
      - [`5.1.1.1 Statically Defined or Imported Variables`](Chapter_5_Exploring_Advanced_Constructs.md#5111-statically-defined-or-imported-variables)
        - LO-var-stat-prio Recall the priority of statically defined or imported variables in Robot Framework (K1)
      - [`5.1.1.2 Dynamically Created Variables`](Chapter_5_Exploring_Advanced_Constructs.md#5112-dynamically-created-variables)
        - LO-var-dyn-prio Recall the priority of dynamically created variables in Robot Framework (K1)
    - [`5.1.2 Variable Scopes`](Chapter_5_Exploring_Advanced_Constructs.md#512-variable-scopes)
      - LO-var-scope-diff Recall the different variable scopes in Robot Framework (K1)
      - [`5.1.2.1 . Global Scope`](Chapter_5_Exploring_Advanced_Constructs.md#5121--global-scope)
        - LO-var-glo-use Recall how to define global variables and where they can be accessed (K1)
      - [`5.1.2.2 . Suite Scope`](Chapter_5_Exploring_Advanced_Constructs.md#5122--suite-scope)
        - LO-var-suite-use Recall how to define suite variables and where they can be accessed (K1)
      - [`5.1.2.3 . Test|Task Scope`](Chapter_5_Exploring_Advanced_Constructs.md#5123--testtask-scope)
        - LO-var-tc-use Recall how to define test|task variables and where they can be accessed (K1)
      - [`5.1.2.4 . Local Scope`](Chapter_5_Exploring_Advanced_Constructs.md#5124--local-scope)
        - LO-var-loc-use Recall how to define local variables and where they can be accessed (K1)
    - [`5.1.3 Global Variables via Command Line`](Chapter_5_Exploring_Advanced_Constructs.md#513-global-variables-via-command-line)
    - [`5.1.4 List-Variables (Advanced)`](Chapter_5_Exploring_Advanced_Constructs.md#514-list-variables-advanced)
      - [`5.1.4.1 Assigning List Variables`](Chapter_5_Exploring_Advanced_Constructs.md#5141-assigning-list-variables)
        - LO-var-list-asg Recall that assignments to `@{list}` variables convert values to lists automatically (K1)
      - [`5.1.4.2 Accessing List Variables`](Chapter_5_Exploring_Advanced_Constructs.md#5142-accessing-list-variables)
        - LO-var-list-unpack Recall that `@{list}` unpacks the values of a list variable when accessed (K1)
    - [`5.1.5 Dict-Like`](Chapter_5_Exploring_Advanced_Constructs.md#515-dict-like)
      - [`5.1.5.1 Assigning Dictionary Variables`](Chapter_5_Exploring_Advanced_Constructs.md#5151-assigning-dictionary-variables)
        - LO-var-dict-asg Recall that assignments to `&{dict}` variables automatically convert values to Robot Framework Dictionaries and enable dot-access (K1)
      - [`5.1.5.2 Accessing Dictionary Variables`](Chapter_5_Exploring_Advanced_Constructs.md#5152-accessing-dictionary-variables)
        - LO-var-dict-unpack Recall that `&{dict}` unpacks to multiple key=value pairs when accessed (K1)
    - [`5.1.6 Built-In Variables`](Chapter_5_Exploring_Advanced_Constructs.md#516-built-in-variables)
      - LO-var-builtin Recall that Robot Framework provides access to execution information via Built-In variables (K1)
  - [`5.2 Control Structures`](Chapter_5_Exploring_Advanced_Constructs.md#52-control-structures)
    - [`5.2.1 IF Statements`](Chapter_5_Exploring_Advanced_Constructs.md#521-if-statements)
      - LO-if-what Understand the purpose and basic concept of IF-Statements (K2)
      - [`5.2.1.1 Basic IF Syntax`](Chapter_5_Exploring_Advanced_Constructs.md#5211-basic-if-syntax)
    - [`5.2.2 IF/ELSE IF/ELSE Structure`](Chapter_5_Exploring_Advanced_Constructs.md#522-ifelse-ifelse-structure)
    - [`5.2.3 Inline IF Statement`](Chapter_5_Exploring_Advanced_Constructs.md#523-inline-if-statement)
    - [`5.2.4 FOR Loops`](Chapter_5_Exploring_Advanced_Constructs.md#524-for-loops)
      - LO-for-what Understand the purpose and basic concept of FOR Loops (K2)
      - [`5.2.4.1 Basic FOR Loop Syntax`](Chapter_5_Exploring_Advanced_Constructs.md#5241-basic-for-loop-syntax)
    - [`5.2.5 WHILE Loops`](Chapter_5_Exploring_Advanced_Constructs.md#525-while-loops)
      - LO-while-what Understand the purpose and basic concept of WHILE Loops (K2)
    - [`5.2.6 BREAK and CONTINUE`](Chapter_5_Exploring_Advanced_Constructs.md#526-break-and-continue)
      - LO-break-cont-what Understand the purpose and basic concept of the BREAK and CONTINUE statements (K2)
