# Robot Framework basics level exam syllabus

List of topics covered by Robot Framework foundation/basic level exams.

Topics starting with **Not** are not to be covered by these exams, but are
instead in the scope of the advanced exams.

## TABLE OF CONTENTS
<!-- This table of contents is created with vscode 'Markdown All in One' plugin automatically. -->
- [Robot Framework basics level exam syllabus](#robot-framework-basics-level-exam-syllabus)
  - [TABLE OF CONTENTS](#table-of-contents)
  - [OVERVIEW AND GUIDELINES](#overview-and-guidelines)
    - [Learning objectives](#learning-objectives)
    - [Where can be used](#where-can-be-used)
      - [Domains](#domains)
      - [Testing levels](#testing-levels)
      - [Behavior Driven Development](#behavior-driven-development)
      - [Robotic Process Automation](#robotic-process-automation)
    - [Architecture](#architecture)
      - [Framework](#framework)
      - [Libraries](#libraries)
    - [Coding style](#coding-style)
      - [Creating maintainable tests](#creating-maintainable-tests)
      - [Dependencies between tests (to be avoided)](#dependencies-between-tests-to-be-avoided)
      - [Avoid sleep (use polling)](#avoid-sleep-use-polling)
  - [TEST CASE SYNTAX](#test-case-syntax)
    - [Learning objectives](#learning-objectives-1)
    - [Test case structure](#test-case-structure)
      - [Keyword driven style](#keyword-driven-style)
      - [Data-driven style](#data-driven-style)
      - [Behavior driven style](#behavior-driven-style)
    - [Imports](#imports)
      - [Libraries](#libraries-1)
      - [Resources](#resources)
    - [Arguments](#arguments)
      - [Positional arguments](#positional-arguments)
      - [Named arguments](#named-arguments)
      - [Embedded arguments](#embedded-arguments)
    - [Setup and teardown](#setup-and-teardown)
    - [Documentation](#documentation)
    - [Tags](#tags)
    - [Comments](#comments)
    - [Escaping](#escaping)
  - [SUITE STRUCTURE](#suite-structure)
    - [Learning objectives](#learning-objectives-2)
    - [Suite files](#suite-files)
    - [Suite directories](#suite-directories)
    - [Initialization files](#initialization-files)
    - [Setup and teardown](#setup-and-teardown-1)
    - [Documentation](#documentation-1)
  - [USER KEYWORDS](#user-keywords)
    - [Learning objectives](#learning-objectives-3)
    - [Basic structure](#basic-structure)
    - [Arguments](#arguments-1)
      - [Normal arguments](#normal-arguments)
      - [Arguments with default values](#arguments-with-default-values)
      - [Embedded arguments](#embedded-arguments-1)
    - [Documentation](#documentation-2)
    - [RETURN](#return)
  - [RESOURCE FILES](#resource-files)
    - [Learning objectives](#learning-objectives-4)
    - [Importing](#importing)
    - [Structure](#structure)
    - [Imports in resource seen in suite file](#imports-in-resource-seen-in-suite-file)
  - [LIBRARIES](#libraries-2)
    - [Learning objectives](#learning-objectives-5)
    - [Importing](#importing-1)
      - [By name](#by-name)
      - [By path](#by-path)
    - [BuiltIn Libraries](#builtin-libraries)
    - [Standard libraries](#standard-libraries)
    - [External libraries](#external-libraries)
      - [How to find](#how-to-find)
      - [How to install](#how-to-install)
    - [Understanding Libdoc HTML outputs](#understanding-libdoc-html-outputs)
  - [CONTROL STRUCTURES](#control-structures)
    - [Learning objectives](#learning-objectives-6)
    - [Evaluating conditional expressions](#evaluating-conditional-expressions)
    - [IF](#if)
      - [ELSE](#else)
      - [ELSE IF](#else-if)
      - [Inline IF](#inline-if)
    - [FOR](#for)
    - [Other control structures](#other-control-structures)
      - [TRY](#try)
      - [WHILE](#while)
      - [BREAK and CONTINUE](#break-and-continue)
  - [VARIABLES](#variables)
    - [Learning objectives](#learning-objectives-7)
    - [Variable scopes](#variable-scopes)
    - [Creating variables](#creating-variables)
      - [Variables section](#variables-section)
      - [Keyword return values](#keyword-return-values)
      - [VAR syntax](#var-syntax)
    - [Item access syntax](#item-access-syntax)
    - [Built-in variables](#built-in-variables)
      - [Numbers, Booleans, None](#numbers-booleans-none)
      - [Spaces and empty strings](#spaces-and-empty-strings)
      - [Current and execution directory](#current-and-execution-directory)
    - [List and dictionary variables](#list-and-dictionary-variables)
  - [TEST EXECUTION](#test-execution)
    - [Learning objectives](#learning-objectives-8)
    - [Executing a single file](#executing-a-single-file)
    - [Executing a directory](#executing-a-directory)
    - [Test statuses](#test-statuses)
      - [PASS and FAIL](#pass-and-fail)
      - [SKIP](#skip)
    - [Using command line options](#using-command-line-options)
      - [Controlling output files](#controlling-output-files)
      - [Selecting tests](#selecting-tests)
      - [Setting variables](#setting-variables)
    - [Viewing report and log](#viewing-report-and-log)
    - [Log levels](#log-levels)
  - [OTHER TOOLS](#other-tools)
    - [Learning objectives](#learning-objectives-9)
    - [Rebot](#rebot)
      - [Generating log and report based on output.xml](#generating-log-and-report-based-on-outputxml)
      - [Combining results](#combining-results)
      - [Merging results](#merging-results)
    - [Libdoc](#libdoc)

## OVERVIEW AND GUIDELINES

Robot Framework is a generic, application and technology independent framework for _Acceptance Testing_, _Acceptance Test Driven Development_ (ATDD), _Behavior Driven Development_ (BDD) and _Robotic Process Automation_ (RPA). 
[[User Guide: Introduction][UG Introduction]]

Continuous Integration (CI), installation and editors are **Not** in the scope of this exam.

### Learning objectives

**TODO** Learning objectives are separately done.

### Where can be used

#### Domains

Robot Framework can be integrated with virtually any tool and with it can test many different domains.
The Robot Framework open source community has implemented several generic libraries, such as `SeleniumLibrary` and `SwingLibrary`, which are not packaged with the core framework.
[[User Guide: External libraries][UG External libraries]] <!-- Fix me after merge  -->

Examples of test domains:

- _Web Testing_
  
  Robot Framework is widely used for testing web applications. The primary library for web testing is the `SeleniumLibrary` and `Browser` library.

- _API testing_

  Robot Framework supports API testing using the `RequestsLibrary`.

- _Mobile testing_

  For mobile app testing, Robot Framework can utilize the `AppiumLibrary`.

- _Desktop Application Testing_

  `SwingLibrary` can be used for testing Java Desktop applications.
  
#### Testing levels

Robot Framework is typically used in different levels of _Acceptance Testing_ as it is brings _Abstraction layer_ to test data and complexity can be hidden to lower keyword implementation.
It can be used also for _System Testing_ and _Regression Testing_. For _Unit Testing_ and _Integration Testing_, there are more suitable unit test frameworks (using typically the implementation's language). 

#### Behavior Driven Development

_Behavior Driven Development_ (BDD)  is a software development methodology that encourages collaboration between technical and non-technical team members to define, understand, and deliver features in a way that focuses on behavior and outcomes.
[[User Guide: BDD style][UG BDD style]]  <!-- Fix me after merge! -->

#### Robotic Process Automation

_Robotic Process Automation_ (RPA) is a technology that uses software robots (or "bots") to automate repetitive and rule-based tasks in business processes.
Tasks works same way as test cases when creating test automation.
Just terminology is different (tasks vs test cases). 
[[User Guide: Robotic process automation][UG Creating tasks]]

### Architecture

Robot Framework is a generic, application and technology independent framework which has highly modular architecture.
[[User Guide: High level architecture][UG High level architecture]]

It consist of following layers:

```
Test Data
--- Test data syntax ---
Robot Framework
--- Test library API ---
Test Libraries
Test Tools
--- Application interfaces ---
System Under Test
```

#### Framework

When Robot Framework is started, it processes the data, executes test cases and generates logs and reports. It includes related tools and standard libraries.
[[User Guide: High level architecture][UG High level architecture]]

#### Libraries

Test libraries contain the lowest-level keywords, often referred to as library keywords, that directly interact with the system under test.
[[User Guide: Using test libraries][UG Using test libraries]]  <!-- Fix me after merge -->

### Coding style

Write code that is easy to read and understand.
Follow a consistent style throughout your test suite.
Test case and keyword names should be descriptive and it is acceptable to have quite long names.[[Robot Framework Style Guide]]

#### Creating maintainable tests

When you are maintaining Robot Framework code you should prioritize creating test data that is easily understandable, modifiable, and extendable.
Ensure your project is organized into a well-defined directory structure, with resources, test suites, and other assets kept separate.
Clear documentation for custom keywords is essential for their maintainability.
Reusable keywords helps maintaining common actions or functionalities. 
[[Robot Framework Style Guide]]

#### Dependencies between tests (to be avoided)

Tests become interdependent when the result of one test influences the execution or outcome of another.
Effective management of test dependencies is essential to ensure the smooth execution and reliability of your test suite.
In Robot Framework, you can manage test dependencies by strategically designing your test suite and utilizing setup/teardown mechanisms.
<!-- FIXME: needs proper reference -->

#### Avoid sleep (use polling)

Sleeping is a very fragile way to synchronize tests. Instead, consider using more robust synchronization methods to ensure the stability and efficiency of your test suite.
[[How to write good test cases]]

## TEST CASE SYNTAX 

Test cases are constructed in the `Test Case` sections from the available keywords. Keywords can be imported from test libraries or resource files, or created in the keyword section of the test case file itself. 
Keywords can be parametrized with arguments. Test case setup and teardown can be also defined.

Timeouts are **Not** in the scope of this exam. 

### Learning objectives

**TODO** Learning objectives are separately done.

1. (K?) Explain the basic structure of a Robot Framework test case.

### Test case structure

In Robot Framework, test cases are defined using a clear and readable syntax. 
A test case typically consists of a test case name, optional documentation, and a sequence of keywords that describe the steps and actions to be performed in the test.
[[User Guide: Test case syntax][UG Test case syntax]]

#### Keyword driven style

_Keyword-driven_ testing is a software testing approach in which test cases are designed and organized based on keywords or commands. 
These keywords represent specific actions or operations that the testing team wants to perform on an application or system. 
The keyword-driven style of testing is particularly useful in test automation but can also be applied in manual testing.
[[User Guide: Keyword driven style][UG Keyword Driven Style]]

#### Data-driven style

_Data-driven_ testing is a software testing approach in which test cases are designed to be executed with multiple sets of input data. 
Instead of creating individual test cases for each data set, a single test case is designed to be reusable, and the input data is provided separately. 
This approach allows for thorough testing of various scenarios and combinations of data with minimal duplication of test case logic. 
[[User Guide: Data driven style][UG Data-driven style]]

#### Behavior driven style

_Behavior Driven Style_ Specification: BDD starts with describing the behavior or functionality that the software should exhibit. 
This is typically done in plain, natural language that is easily understandable by all stakeholders, including non-technical team members. 
The behavior is often described in the form of scenarios or user stories. 
[[User Guide: Behavior data driven style][UG BDD style]]

### Imports

All test cases uses keywords or resources from some library or file. There are three types of imports: libraries, resources and variable files. 

Variable files are **Not** in the scope of this exam. 

#### Libraries

Libraries are imported using the `Library` setting. 
It is possible to import libraries in suite files, resource files and suite initialization files.

 There exist also the `Import library` keyword which can be used in the keyword. 
 Keywords from the imported library are available in the suite where it is used.

_Standard libraries_ are distributed with Robot Framework. 
`Builtin` library is taken into use automatically and thus its keywords are always available. 
Other standard libraries are imported as any other libraries. 
In addition to the normal standard libraries, there is also Remote library that is totally different than the other standard libraries. 
It does not have any keywords of its own but it works as a proxy between Robot Framework and actual test library implementations.

_External libraries_ are not packaged with the core framework. 
The Robot Framework open source community has implemented several generic libraries, such as SeleniumLibrary and SwingLibrary. 
Generic and custom libraries can also be implemented by teams using Robot Framework. 
[[User Guide: Using test libraries][UG Using test libraries]]

#### Resources

Resource files provide a mechanism for sharing keywords and variables. 
These files cannot contain tests or tasks. 
Resource file is taken in use in the `Resource` settings so that path to the file is given as an argument to the settings. 
[[User Guide: Using resources and variable files][UG Using resources and variable files]]

### Arguments

Keywords can accept zero or more arguments, and some arguments may have default values. [[User Guide: Using arguments][UG Using arguments]]

Varargs and kwargs are **Not** in the scope of this exam. 

#### Positional arguments

Most keywords have certain number of arguments that must always be given. 
It is important to have exactly same number of arguments as specified in the keyword documentation. 
Using too few or too many arguments will result in an error. 
[[User Guide: Positional arguments][UG Positional arguments]]

#### Named arguments

The _named argument_ syntax makes using arguments with default values more flexible, and allows explicitly labeling what a certain argument value means. 
Technically named arguments work exactly like keyword arguments in Python. 
The relative order of the named arguments does not matter. Using normal positional arguments after named arguments does not work. 
[[User Guide: Named arguments][UG Named arguments]]

#### Embedded arguments

_Embedded arguments_ are specified into keyword names. 
The arguments used in the name are naturally available inside the keyword and they have different values depending on how the keyword is called. 
[[User Guide: Embedding argument into keyword names][UG Embedding argument into keyword names]]

### Setup and teardown

_Test setup_ is executed before a test case and _teardown_ after test case. 
They are just normal keywords with possible arguments. 
Setup and teardown can be executed with multiple keywords using the Builtin keyword the `Run keywords`.

Teardown is used for clean-up activities that must be done regardless of the test case status. 
It can be also executed when a test case fails. 
All the keywords in the teardown is executed even if one of them fails. 
Continue on failure functionality is by default in teardown. 
[[User Guide: Setup and teardown][UG Setup and teardown]], 
[[User Guide: Continue on failure][UG Continue on failure]]

### Documentation

Test case can be documented by the `[Document]` setting. 
It allows free form documentation for a test case. 
Documentation is shown in the command line and in the resulting logs and reports. Documentation can be divided to several rows with syntax `(...)`. 
[[User Guide: Test case naming and documentation][UG Test case naming and documentation]],  
[[User Guide: Dividing data to several rows][UG Dividing data to several rows]]

### Tags

Tags are a simple, powerful mechanism for classifying test cases and user keywords. 
Tags are free text and Robot Framework itself has no special meaning for them except for the some reserved tags.

They can be used to exclude and include as  well as to skip cases. 
Tags are shown in the test reports, logs and in the test data. 
Statistic about test cases (total, passed, failed and skipped) are automatically collected based on them.

There is a way for tests to indicate they should not get certain globally specified tags. Instead of using a separate setting that tests can override, tests can use the `-tag` syntax with their `[Tags]` setting to tell they should not get a tag named tag. 
[[User Guide: Tagging test cases][UG Tagging test cases]]

### Comments

Lines can be commented with hash (```#```) for more information. 
It should be avoided because test data itself should be descriptive.

### Escaping

The escape character in Robot Framework test data is the backslash (`\`) and additionally built-in variables `${EMPTY}` and  `${SPACE}` can often be used for escaping. 
[[User Guide: Escaping][UG Escaping]]

## SUITE STRUCTURE

Test cases are created in suite files, which can be organized into directories. 
These files and directories create a hierarchical test suite structure. 
Test suite directories can be initialized with initialization files. 
[[User Guide: Creating test suites][UG Creating test suites]]

Metadata is **Not** in the scope of this exam.

### Learning objectives

**TODO** Learning objectives are separately done.

### Suite files

Test cases are created using _Test Cases_ section in suite files. 
Such a file automatically creates a test suite from all the test cases it contains. 
[[User Guide: Suite files][UG Suite files]]

### Suite directories

Test case files can be organized into directories, and these directories create higher-level test suites. 
When a test directory is executed, the files and directories it contains are processed recursively. 
[[User Guide: Suite directories][UG Suite directories]]

### Initialization files

A test suite created from a directory can have similar settings as a suite created from a test case file. 
Suite initialization files cannot have test case section and not all settings are supported otherwise they have same structure as test case files. 
An initialization file name must always be of the format `__init__.ext`, where the extension must be one of the supported file formats (typically `__init__.robot`). 
[[User Guide: Suite initialization files][UG Suite initialization files]]

### Setup and teardown

Suites can have suite setup and teardown. 
They are defined in the `Settings` section.  

A `Suite Setup` is executed before running any of the suite's test cases or child test suites, and a `Suite Teardown` is executed after them.  

Suite setup is ideal for checking preconditions that must be met before running test cases. 
If a suite setup fails, all test cases in it and its child test suites are immediately assigned a fail status and they are not actually executed.  

A suite teardown is normally used for cleaning up test environment after test cases have been executed. 
All the keywords in suite teardown are executed even if one of them fails. 
It is even executed if Suite Setup fails.  

If the suite teardown fails, all test cases in the suite are marked failed, regardless of their original execution status. 
[[User Guide: Suite setup and teardown][UG Suite setup and teardown]]

### Documentation

The documentation for a test suite is set using the `Documentation` setting in the Settings section. 
It can be used both in suite files and in suite initialization files. 
[[User Guide: Suite documentation][UG Suite documentation]] 

## USER KEYWORDS

_User keywords_ are created to combine existing keywords and they are defined in `Keywords` section.

Tags and timeout are **Not** in the scope of this exam.

### Learning objectives

**TODO** Learning objectives are separately done.

### Basic structure

User keyword syntax is identical to the test case syntax. 
They can be created in suite files, resource files, and suite initialization files. 
Keywords in resources files are available for files using them. 
[[User Guide: User keyword syntax][UG User keyword syntax]]

### Arguments

User keywords can take some arguments. Arguments are normally specified with the `[Arguments]` setting, and argument names use the same syntax as variables, for example ${arg}. 
[[User Guide: User keyword arguments][UG User keyword arguments]]

Varargs and kwargs are **Not** in the scope of this exam.

#### Normal arguments

_Positional arguments_ are the simplest way to specify arguments. 
The keyword must be used with as many arguments as there are argument names in its signature. 
Argument names should be as descriptive as possible.

#### Arguments with default values

User keywords support arguments with _default values_. 
Default values are added to arguments with the (`=`) sign. 
There can be many arguments with default values, but they all must be given after positional arguments. 
[[User Guide: Default values with user keywords][UG Default values with user keywords]]

#### Embedded arguments

_Embedded arguments_ are part of keyword names. 
It can make the data easier to read and understand for people without any Robot framework experience. 
[[User Guide: Embedding arguments into keyword name][UG Embedding arguments into keyword name]]

### Documentation

User keywords can have a documentation that is set with the `[Documentation]` setting. 
It supports same formatting, splitting to multiple lines, and other features as test case documentation. 
[[User Guide: Settings in keyword section][UG Settings in keyword section]]

### RETURN

User keyword can return one or more values after it has been executed. 
It can be done by using the native `RETURN` statement. 
Returned values can be assigned to variable in test cases and in the other user keywords. 
[[User Guide: User keyword return values][UG User keyword return values]]

## RESOURCE FILES

Resource files are typically created using the plain text format, but also reStructuredText format and JSON format are supported. 
[[User Guide: Resource files][UG Resource files]]  

### Learning objectives

**TODO** Learning objectives are separately done.

### Importing

Resource files are imported using the `Resource` setting in the `Settings` section so that the path to the resource file is given as an argument to the setting. 
The user keywords and variables defined in a resource file are available in the file that takes that resource file into use. 
[[User Guide: Taking resource files into use][UG Taking resource files into use]]

### Structure

Structure of resource file is the same as in suite files. 
Resource file cannot contain tests. `Settings` section can contain only imports, documentation and keyword tags. 
There can also be `Variables` section with variables. 
[[User Guide: Resource file structure][UG Resource file structure]]

### Imports in resource seen in suite file

All imported keywords and variables in the resource file can be used in the suite file.

## LIBRARIES

Test libraries contain the lowest-level keywords, often referred to as library keywords, that directly interact with the system under test.
[[User Guide: Using test libraries][UG Using test libraries]]

### Learning objectives

**TODO** Learning objectives are separately done.

### Importing

Test libraries are typically imported in the `Library` settings. There exists also `Import Library` keyword which can be also used.
Libraries can also be imported with specific arguments.
[[User Guide Importing libraries][UG Importing libraries]]

#### By name

Using the libraries name for importing is the most common method. In this approach, Robot Framework attempts to locate the class or module that implements the library from the Python module search path.
[[User Guide: Using library name][UG Using library name]]

#### By path

Another mechanism involves using a path to the library. This path is relative to the directory where the current test data file is located, similar to paths for resource and variable files. The main advantage of this approach is that there is no need to configure the module search path.
The path can be either relative or absolute.
[[User Guide: Using physical path to library][UG Using physical path to library]]

### BuiltIn Libraries

The `BuiltIn` library is Robot Framework's standard library, offering a set of generic keywords. It is automatically imported and consistently accessible.
[[BuiltIn Library]]

### Standard libraries

Some test libraries come pre-packaged with Robot Framework, referred to as _Standard libraries_. _Standard libraries_ must be imported in the same manner as any other library.
[[User Guide: Standard libraries][UG Standard libraries]]

### External libraries

_External libraries_ are not packaged with the core framework. The Robot Framework open source community has implemented several generic libraries, such as SeleniumLibrary and SwingLibrary.
Custom libraries can also be implemented by any user.
[[User Guide: External libraries][UG External libraries]]

#### How to find

A list of publicly available external libraries can be found from  [[Robot Framework Org's website: Resources][RF Org resources]].

#### How to install

All external libraries should have clear installation and usage documentation. Some of them may also require additional dependencies to function, which need to be installed separately.
[[User Guide: External libraries][UG External libraries]]

### Understanding Libdoc HTML outputs

`Libdoc` is Robot Framework's built-in tool for generating documentation for Robot Framework libraries and resource files in HTML (for humans) and XML or JSON (for tools) formats.
[[User Guide: Library documentation tool][UG Library documentation tool]]

## CONTROL STRUCTURES

Control structures, common in most programming languages, enable conditional execution, repetitive execution of a block of keywords, and fine-grained error handling.
[[User Guide: Control structures][UG Control structures]]

Details of how to create `evaluated conditional expressions` are **Not** in the scope of this exam.

### Learning objectives

**TODO** Learning objectives are separately done.

### Evaluating conditional expressions

Conditional expressions are evaluated using Python's `eval` function, and all Python built-in functions are accessible. 
The evaluated condition results in either true or false.
[[User Guide: Evaluating expressions][UG Evaluating expressions]]

### IF

With the `IF` statement, it is possible to execute keywords conditionally. 
There needs to be a condition that is evaluated. 
The `IF` statement ends with `END` (not applicable for inline-IF).
[[User Guide: IF/ELSE syntax][UG IF/ELSE syntax]]

#### ELSE
  
The `ELSE` branch is executed if the `IF` condition is not true.
[[User Guide: ELSE branches][UG ELSE branches]]

#### ELSE IF
  
The `ELSE IF` branch is executed if the initial condition is not true. 
Multiple `ELSE IF` branches can exist, and they are processed in the order they are specified. 
The processing of `ELSE IF` branches is stopped once a condition is true.
An optional `ELSE` branch can follow `ELSE IF` branches, executed if all conditions are false.
[[User Guide: ELSE/IF branches][UG ELSE/IF branches]]

#### Inline IF
  
The _inline_ `IF` syntax can be used for short evaluations, where the statement to execute follows the `IF` marker and condition directly, and no `END` marker is needed. 
This can be used if there is a need to execute only a single statement. 
The `ELSE` and `ELSE IF` statements are also supported.
[[User Guide: Inline if][UG Inline if]]
 
### FOR

Test libraries can incorporate various kinds of _loop constructs_, and in most cases, loops should be implemented using them. 
`FOR` loops can be utilized with both test cases and user keywords.
[[User Guide: FOR loops][UG FOR loops]]

### Other control structures

#### TRY

The `TRY`/`EXCEPT` syntax is also inspired by Python. 
This approach is used for handling failures during execution. 
Multiple `EXCEPT` branches can exist. 
In such cases, they are matched one by one, and the first matching branch is executed.
[[User Guide: Try/Except][UG Try/Except]]

#### WHILE

`WHILE` loops combine features of `FOR` loops and `IF`/`ELSE` structures.
They specify a condition and repeat the loop body as long as the condition remains true.
`WHILE` loops can be nested and also combined with other control structures.
[[User Guide: While loops][UG While loops]]

#### BREAK and CONTINUE

Both `FOR` and `WHILE` loop execution can be controlled with `BREAK` and `CONTINUE` statements. The former exits the whole loop prematurely and the latter stops executing the current loop iteration and continues to the next one.
Both are typically used conditionally with `IF`/`ELSE` or `TRY`/`EXCEPT` structures.
[[User Guide: Loop control BREAK/CONTINUE][UG Loop control BREAK/CONTINUE]]

## VARIABLES

Variables are an integral feature of Robot Framework, and most commonly they are in arguments for keywords in Test case section and Keyword sections.
Robot frameworks has variables that can be used as _scalar_, _lists_ or _dictionary_.
[[User Guide: Variables][UG Variables]]

Variable files are **Not** in the scope of this exam.

### Learning objectives

**TODO** Learning objectives are separately done.

### Variable scopes

Depending on where and how they are created, variables can have a global, test suite, test case or local scope.
[[User Guide: Variable priorities and scope][UG Variable priorities and scope]]

### Creating variables

Variables can be set from the variable section in suite files, during execution, by using `Builtin` variables or command line.
For command line, see [[Setting variables](#setting-variables)].

#### Variables section

_Variable sections_ in suite files and resource files are most common source for variables.
[[User Guide: Creating variables][UG Creating variables]] 

#### Keyword return values

_Return values_ from keywords can also be set into variables.
This allows communication between different keywords even in different test libraries.
Any value returned by a keyword can be assigned to a scalar variable.
[[User Guide: Return values from keywords][UG Return values from keywords]]

#### VAR syntax

It is possible to define a variable directly in a test case or keyword using the VAR keyword by adding the variable name after it and then separating the value with spaces.
[[User Guide: VAR syntax][UG VAR syntax]]

### Item access syntax

_Nested subscriptable variables_ can be accessed using this syntax, for example, _${x}[0][key]_. This is particularly beneficial when dealing with JSON data returned from a REST service.

### Built-in variables

_Built-in_ variables have the highest priority amongst all variables. They are automatically available.
[[User Guide: Built-in variables][UG: Built-in variables]] 

_Operating system_ variables: `${/}`, `${:}`, `${\n}`, Built-in `automatic variables` and `Inline evaluation` are **Not** in the scope of this exam.

#### Numbers, Booleans, None

When a keyword requires a numeric value instead of a string, you can utilize the variable syntax ${10}.
[[User Guide: Number variables][UG Number variables]]

Boolean values `True`/`False` and Python `None` can be also created using variable syntax. These are not case-sensitive, so e.g. `${True}` and `${true}` are equivalent.
[[User Guide: Boolean and None/null variables][UG Boolean and None/null variables]]
  
#### Spaces and empty strings

It is possible to create spaces and empty strings using variables `${SPACE}` and `${EMPTY}`, respectively.
[[User Guide: Space and empty variables][UG Space and empty variables]]

#### Current and execution directory

`${CURDIR}` is an absolute path to the directory where the test data is located.

`${EXECDIR}` is an absolute path to the directory where test execution was started from.
[[User Guide: Operating-system variables][UG Operating-system variables]]
 
### List and dictionary variables

_List variables_ are created similarly to scalar variables using `@{list}`. The variable name is in the first column, and values are in the subsequent columns.
[[User Guide: List variable syntax][UG List variable syntax]]

_Dictionary variables_ are created with `&{dict}`.
_Dictionary items_ are created using the `name=value` syntax or existing dictionary variables after the variable name.
[[User Guide: Dictionary variable syntax][UG Dictionary variable syntax]]

## TEST EXECUTION

Test cases are always executed within a test suite.
Test execution is started with the `robot` command.
Test data to be executed is given as an argument after the command.
The path can be absolute or relative to where tests are executed from.
[[User guide: Executing test case][UG Executing test case]]

_Continuable failures_ and _fatal errors_ are **Not** in the scope of this exam.

### Learning objectives

**TODO** Learning objectives are separately done.

### Executing a single file

A test file is always a test suite that consists of one or more test cases.
A single test file is executed by giving the direct path to the test file after the `robot` command.
[[User Guide: Executing individual files][UG Executing individual files]]

### Executing a directory

Test directories can be executed by giving the path to the directory.
Only files with the `.robot` extension are executed.
All files and directories starting with a dot (`.`) or an underscore (`_`) are ignored.
[[User Guide: Specifying test data to be executed][UG Specifying test data to be executed]]  

### Test statuses

A Test can receive `PASS`, `FAIL` or `SKIP` statuses.
Suite status is determined based on test statuses.
[[User guide: Test and suite statuses][UG Test and suite statuses]]

#### PASS and FAIL

A test receives the `PASS` status if it is executed and none of the keywords which are directly called from the test case it has, fails.
If any test case has failed, the test and suite status is `FAIL`.
The most common reason for a test to receive the `FAIL` status is that one of the keywords which is directly called from the test case  contains fails.

#### SKIP

The command-line option `--skip` can be used to skip specified tests without running them at all. It works based on suite or test case tags.
Tests can also be skipped by tagging them with the reserved tag `robot:skip`.
Tests which are skipped are included in the test suite but not executed, and they are shown in logs and reports.
[[User Guide: Skip][UG Execution flow]]

### Using command line options

Robot Framework provides a number of command-line options that can be used to control how test cases are executed and what outputs are generated.
Basic option documentation can be obtained in the command line with the `--help` option.
[[User Guide: Using command line options][UG Command line options]]

_Boolean expressions_ `AND`/`OR` are **Not** in the scope of this exam.

`robot` command options `--log`, `--report` and `--output` are **Not** in the scope of this exam.

#### Controlling output files

Several output files are created when tests are executed, and all of them are related to test results.
[[User Guide: Output files][UG: Output files]]

- `--outputdir`

  The default output directory is the directory where the execution is started from, but it can be changed with this option.

- `--xunit`
  
  _XUnit result files_ contain the test execution summary in xUnit compatible XML format.
  [User Guide: Xunit compatible result file][UG Unix compatible result file]

#### Selecting tests  

There are several command-line options for selecting test cases to execute.
[[User Guide: Selecting test cases][UG Selecting test cases]]

  - `--test`

    This option is the easiest way to run only a specified test.
    The option can be used multiple times to match multiple tests.
    It is possible to prefix the test name with a suite name.
   
  - `--suite`

    Tests can also be selected by suite names with this option, which selects all tests in matching suites.
    It is possible to prefix the name with the parent suite name.
  
  - `--include` and `--exclude`

    Tests can also be run using tags. With the `--include` option, only tests that have matching tags are executed.
    
    Tests can be excluded from the suite with the `--exclude` option.
    Excluded tests are not executed and are not shown in the logs and reports.

- Using `*` and `?` wildcards

    Command-line options can also be used with `*` and `?` wildcards.

#### Setting variables

Variables can be set from the command line using the `--variable` option.

### Viewing report and log

When both log and report files are generated, the report file contains a link to the log file for easy navigation to more detailed information.

_Log files_ contain details about the executed test cases in HTML format.
They have a hierarchical structure showing test suite, test case, and keyword details.
[[User Guide: Log file][UG Log file]]

_Report files_ contain an overview of the test execution results in HTML format.
They have statistics based on tags and executed test suites, as well as a list of all executed test cases.
[[User Guide: Report file][UG Report file]]

### Log levels

Messages in log files can have different log levels.
Some messages are written by Robot Framework itself, but executed keywords can also log information using different levels.
[[User Guide: Log levels][UG Log levels]]

## OTHER TOOLS

The test framework has tools that can be used for post-processing test case reports and documentation creation.
[[User Guide: Supporting tools][UG Supporting tools]]

### Learning objectives

**TODO** Learning objectives are separately done.

### Rebot

_XML output files_ that are generated during the test execution can be post-processed afterwards by the `Rebot` tool, which is an integral part of Robot Framework.
[[User Guide: Using Rebot][UG Using rebot]]

#### Generating log and report based on output.xml

`Rebot` can be used to create the same reports and logs that are generated automatically during the test execution.

#### Combining results

Rebot has ability to combine outputs from different test execution rounds.
This capability allows creating an overall report from all outputs of several execution runs, for example, in different test environments.
[[User Guide: Combining results][UG Combining results]]

#### Merging results

Results of re-executed test cases, for example, after bug fixing, can be combined using the `--merge` option.
Latter test case runs replace the test in the original report.
[[User Guide: Merging outputs][UG Merging outputs]]

### Libdoc

Libdoc is Robot Framework's built-in tool that can generate documentation for Robot Framework libraries, resource and suite files.
[[User Guide: Libdoc][UG Libdoc]]

<!-- REFERENCES -->
[UG Supporting tools]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#post-processing-outputs
[UG Libdoc]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#library-documentation-tool-libdoc
[UG Using rebot]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#using-rebot
[UG Combining results]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#combining-outputs
[UG Merging outputs]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#merging-outputs
[UG Executing test case]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#executing-test-cases1
[UG Test and suite statuses]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#test-and-suite-statuses
[UG Execution flow]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#execution-flow
[UG Command line options]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#using-command-line-options
[UG: Output files]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#output-files
[UG Unix compatible result file]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#xunit-compatible-result-file
[UG Selecting test cases]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#selecting-test-cases
[UG Log levels]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#log-levels
[UG Log file]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#log-file
[UG Report file]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#report-file
[UG Executing individual files]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#executing-individual-files
[UG Selecting files by name or path]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#selecting-files-by-name-or-path
[UG Specifying test data to be executed]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#specifying-test-data-to-be-executed
[UG Variables]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#variables
[UG: Built-in variables]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#automatic-variables
[UG List variable syntax]:https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#list-variable-syntax
[UG Dictionary variable syntax]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#dictionary-variable-syntax
[UG Using variables]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#using-variables-1
[UG Creating variables]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#creating-variables
[UG Return values from keywords]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#return-values-from-keywords
[UG Variable priorities and scope]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#variable-priorities-and-scopes
[UG Number variables]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#number-variables
[UG Boolean and None/null variables]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#boolean-and-none-null-variables
[UG Space and empty variables]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#space-and-empty-variables
[UG Operating-system variables]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#operating-system-variables
[UG Control structures]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#control-structures
[UG IF/ELSE syntax]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#if-else-syntax
[UG ELSE branches]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#else-branches
[UG ELSE/IF branches]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#else-if-branches
[UG FOR loops]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#for-loops
[UG While loops]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#while-loops
[UG Try/Except]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#try-except-syntax
[UG Loop control BREAK/CONTINUE]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#loop-control-using-break-and-continue
[UG Inline if]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#inline-if-1
[UG Evaluating expressions]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#evaluating-expressions
[UG Using test libraries]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#using-test-libraries
[UG Importing libraries]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#importing-libraries
[UG Using library name]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#using-library-name
[UG Using physical path to library]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#using-physical-path-to-library
[BuiltIn Library]: https://robotframework.org/robotframework/latest/libraries/BuiltIn.html
[UG Standard libraries]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#standard-libraries
[UG External libraries]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#external-libraries
[RF Org resources]:https://robotframework.org/#resources
[UG Library documentation tool]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#library-documentation-tool-libdoc
[UG Resource files]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#resource-files
[UG Taking resource files into use]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#taking-resource-files-into-use
[UG Resource file structure]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#resource-file-structure
[UG User keyword syntax]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#basic-syntax-2
[UG Settings in keyword section]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#settings-in-the-keyword-section
[UG Embedding arguments into keyword name]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#embedding-arguments-into-keyword-name
[UG User keyword return values]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#user-keyword-return-values
[UG User keyword arguments]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#user-keyword-arguments
[UG Default values with user keywords]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#default-values-with-user-keywords
[UG Creating test suites]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#creating-test-suites
[UG Suite files]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#suite-files
[UG Suite directories]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#suite-directories
[UG Suite initialization files]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#suite-initialization-files
[UG Suite setup and teardown]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#suite-setup-and-teardown
[UG Suite documentation]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#suite-documentation
[UG Test case syntax]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#test-case-syntax
[UG Keyword driven style]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#keyword-driven-style
[UG Data-driven style]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#data-driven-style
[UG BDD style]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#behavior-driven-style
[UG Using test libraries]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#using-test-libraries
[UG Using resources and variable files]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#resource-and-variable-files  
[UG Using arguments]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#using-arguments
[UG Embedding argument into keyword names]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#embedding-arguments-into-keyword-name
[UG Setup and teardown]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#test-setup-and-teardown
[UG Continue on failure]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#continuing-on-failure
[UG Test case naming and documentation]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#test-case-name-and-documentation
[UG Dividing data to several rows]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#dividing-data-to-several-rows
[UG Tagging test cases]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#tagging-test-cases
[UG Escaping]:https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#escaping
[UG Positional arguments]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#positional-arguments
[UG Named arguments]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#named-arguments
[UG Introduction]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#introduction
[UG High level architecture]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#high-level-architecture
[UG Installation instructions]:https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#installation-instructions
[UG Creating tasks]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#creating-tasks
[UG VAR syntax]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#var-syntax
[Robot Framework Style Guide]: https://docs.robotframework.org/docs/style_guide/guide
[How to write good test cases]: https://github.com/robotframework/HowToWriteGoodTestCases/blob/master/HowToWriteGoodTestCases.rst
