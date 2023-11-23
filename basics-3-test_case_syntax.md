# Robot Framework basics

## Table of contents
- [Robot Framework basics](#robot-framework-basics)
  - [Table of contents](#table-of-contents)
  - [TEST CASE SYNTAX](#test-case-syntax)
    - [Learning objectives for test case syntax](#learning-objectives-for-test-case-syntax)
    - [Test case structure](#test-case-structure)
      - [Keyword driven style](#keyword-driven-style)
      - [Data-driven style](#data-driven-style)
      - [Behavior driven style](#behavior-driven-style)
    - [Imports](#imports)
      - [Libraries](#libraries)
      - [Resources](#resources)
      - [\[Not\] Variable files](#not-variable-files)
    - [Using arguments](#using-arguments)
      - [Positional arguments](#positional-arguments)
      - [Named arguments](#named-arguments)
      - [Embedded arguments](#embedded-arguments)
      - [\[Not\] varargs or kwargs](#not-varargs-or-kwargs)
    - [Setup and teardown](#setup-and-teardown)
    - [Documentation](#documentation)
    - [Tags](#tags)
    - [\[Not\] Timeouts](#not-timeouts)
    - [Comments](#comments)
    - [Escaping](#escaping)

## TEST CASE SYNTAX 

### Learning objectives for test case syntax

1. (K?) Explain the basic structure of a Robot Framework test case.

### Test case structure

In Robot Framework, test cases are defined using a clear and readable syntax. A test case typically consists of a test case name, optional documentation, and a sequence of keywords that describe the steps and actions to be performed in the test. [[User Guide: Test case syntax][UG Test case syntax]]

#### Keyword driven style

Keyword-driven testing is a software testing approach in which test cases are designed and organized based on keywords or commands. These keywords represent specific actions or operations that the testing team wants to perform on an application or system. The keyword-driven style of testing is particularly useful in test automation but can also be applied in manual testing. [[User Guide: Keyword driven style][UG Keyword Driven Style]]

#### Data-driven style

Data-driven testing is a software testing approach in which test cases are designed to be executed with multiple sets of input data. Instead of creating individual test cases for each data set, a single test case is designed to be reusable, and the input data is provided separately. This approach allows for thorough testing of various scenarios and combinations of data with minimal duplication of test case logic. [[User Guide: Data driven style][UG Data-driven style]]

#### Behavior driven style

Behavior Specification: BDD starts with describing the behavior or functionality that the software should exhibit. This is typically done in plain, natural language that is easily understandable by all stakeholders, including non-technical team members. The behavior is often described in the form of scenarios or user stories. [[User Guide: Behavior data driven style][UG BDD style]]

Given-When-Then: BDD often uses a "Given-When-Then" structure to describe the behavior of a feature:

        "Given" represents the initial context or preconditions.
        "When" describes the action or event that triggers the behavior.
        "Then" specifies the expected outcome or result.

### Imports

All test cases uses keywords from some library. [[User Guide: Using test libraries][UG Using test libraries]]

#### Libraries

Libraries are imported using `Library` setting. It is possible to import libraries in suite files, resource files and suite initialization files.

- **Standard libraries** are distributed with Robot Framework. Builtin library is taken into use automatically and thus its keywords are always availabe. Other standard libraries are imported as any other libraries.
- **External libraries** are not packaged with the core framework. The Robot Framework open source community has implemented several generic libraries, such as SeleniumLibrary and SwingLibrary. Generic and custom libraries can also be implemented by teams using Robot Framework,
- **Remote libraries** does not contains any keyword, but it works as a proxy between Robot Framework and actual test library implementation. These can be run on the other machine and can be implemented using languages not supported by Robot Framework natively.

#### Resources

Resource files provide a mechanism for sharing keywords and variables. These files cannot contain tests or tasks. Resource file is taken in use in `Resource` settings so that path to the file is given as an argument to the settings. [[User Guide: Using resources and variable files][UG Using resources and variable files]]

#### [Not] Variable files  

Variable files are not in the scope of this exam.

### Using arguments

Keywords can accept zero or more arguments, and some arguments may have default values. [[User Guide: Using arguments][UG Using arguments]]

#### Positional arguments

Most keywords have certain number of arguments that must always be given. It is important to have exactly same number of arguments as specified in the keyword documentation. Using too few or too many arguments will result in an error.

#### Named arguments

The named argument syntax makes using arguments with default values more flexible, and allows explicitly labeling what a certain argument value means. Technically named arguments work exactly like keyword arguments in Python. The relative order of the named arguments does not matter. Using normal positional arguments after named arguments like, for example
```
Keyword    arg=value   positional
```
does not work.

It is possible to use variables in both named argument names and values. If variables are used in named argument names, variables are resolved before matching them against argument names.  

Naming arguments is supported by user keywords and by most test libraries. The only exceptions are Python keywords explicitly using positional-only arguments.  

#### Embedded arguments

Embedded arguments are specified into keyword names.

The arguments used in the name are naturally available inside the keyword and they have different values depending on how the keyword is called. [[User Guide: Embedding argument into keyword names][UG Embedding argument into keyword names]]

#### [Not] varargs or kwargs  

Varargs and kwargs are not in the scope of this exam.

### Setup and teardown

Test setup is executed before a test case and teardown after test case. They are just normal keywords with possible arguments. Setup and teardown can be executed with multiple keywords using the Builtin keyword `Run keywords`.

Teardown is used for clean-up activities that must be done regardless of the test case status. It can be also executed when a test case fails. All the keywords in the teardown is executed even if one of them fails. [[**User Guide: Continue on failure**][UG Continue on failure]] functionality is by default in teardown. [[User Guide: Setup and teardown][UG Setup and teardown]]

### Documentation

Test case can be documentated by `[Document]` setting. It allows free form documentation for a test case. Documentation is shown in the command line and in the resulting logs and reports. Documentation can be divided to several rows with syntax `(...)`. [[User Guide: Test case naming and documentation][UG Test case naming and documentation]], [[User Guide: Dividing data to several rows][UG Dividing data to several rows]]

### Tags

Tags are a simple, powerfull mechanism for classifying test cases and user keywords. Tags are free text and Robot Framework itself has no special meaning for them except for the some reserved tags.

They can be used to exclude and include as  well as to skip cases.
Tags are shown in the test reports, logs and in the test data. Statistic about test cases (total, passed, failed and skipped) are automatically collected based on them.

**Robot Framework 7.0** will introduce a new way for tests to indicate they should not get certain globally specified tags. Instead of using a separate setting that tests can override, tests can use the -tag syntax with their [Tags] setting to tell they should not get a tag named tag. [[User Guide: Tagging test cases][UG Tagging test cases]]

### [Not] Timeouts

Timeouts are not in the scope of this exam.

### Comments

Additional comments or data in the keywords or test cases. 

### Escaping

The escape character in Robot Framework test data is the backslash (\\) and additionally built-in variables \${EMPTY} and  \${SPACE} can often be used for escaping. [[User Guide: Escaping][UG Escaping]]

<!-- REFERENCES   -->
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
