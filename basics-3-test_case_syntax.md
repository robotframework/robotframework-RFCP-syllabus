# Robot Framework basics

## Table of contents
- [Robot Framework basics](#robot-framework-basics)
  - [Table of contents](#table-of-contents)
  - [Test case syntax](#test-case-syntax)

## Test case syntax

<!-- https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#test-data-syntax -->
[User guide: Test case syntax](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#test-case-syntax)
- Learning objectives
  1. Understanding Test Case Structure

      - Explore the basic structure of a Robot Framework test case.
      - Learn about sections such as Settings, Variables, Test Cases, and Keywords.

  2. Creating Test Cases  

      - Learn to create simple test cases using the given syntax.  
      - Understand the use of keywords in test case steps.


-  Test case structure  
    In Robot Framework, test cases are defined using a clear and readable syntax. A test case typically consists of a test case name, optional documentation, and a sequence of keywords that describe the steps and actions to be performed in the test.

    - [Keyword driven style](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#keyword-driven-style)  
      Keyword-driven testing is a software testing approach in which test cases are designed and organized based on keywords or commands. These keywords represent specific actions or operations that the testing team wants to perform on an application or system. The keyword-driven style of testing is particularly useful in test automation but can also be applied in manual testing.


    - [Data-driven style](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#data-driven-style)  
      Data-driven testing is a software testing approach in which test cases are designed to be executed with multiple sets of input data. Instead of creating individual test cases for each data set, a single test case is designed to be reusable, and the input data is provided separately. This approach allows for thorough testing of various scenarios and combinations of data with minimal duplication of test case logic.



    - [BDD style](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#behavior-driven-style)  
      Behavior Specification: BDD starts with describing the behavior or functionality that the software should exhibit. This is typically done in plain, natural language that is easily understandable by all stakeholders, including non-technical team members. The behavior is often described in the form of scenarios or user stories.

      Given-When-Then: BDD often uses a "Given-When-Then" structure to describe the behavior of a feature:

          "Given" represents the initial context or preconditions.
          "When" describes the action or event that triggers the behavior.
          "Then" specifies the expected outcome or result.



- Imports

  <!-- [Using test libraries](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#using-test-libraries) -->

  All test cases uses keyword from some library. This section explain how to take test libraries into use

  - [Libraries](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#using-test-libraries)  
  Libraries are imported using _Library_ setting. It is possible to import libraries in suite files, resource files and suite initialization files.  

    1. **Standard libraries** are distributed with Robot Framework. Builtin library is taken into use automatically and thus its keywords are always availabe. Other standard libraries are imported as any other libraries.

    2. **External libraries** are not packaged with the core framework. The Robot Framework open source community has implemented several generic libraries, such as SeleniumLibrary and SwingLibrary. Generic and custom libraries can also be implemented by teams using Robot Framework,

    3. **Remote libraries** does not contains any keyword, but it works as a proxy between Robot Framework and actual test library implementation. These can be run on the other machine and can be implemented using languages not supported by Robot Framework natively.
  
  - [Resources](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#resource-and-variable-files)  
Resource files provide a mechanism for sharing keywords and variables. These files cannot contain tests or tasks. Resource file is taken in use in _Resource_ settings so that path to the file is given as an argument to the settings.

  - Not variable files  
Variable files are in the scope of advanced exam.

- Using arguments  
   [User guide: Arguments](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#using-arguments)   
   Keywords can accept zero or more arguments. Some arguments may have default values.

  - **Positional arguments**  
  Most keywords have certain number of arguments that must always be given. It is important to have exactly same number of arguments as specified in the keyword documentation. Using too few or too many arguments will result in an error.

  - **Named arguments**   
  The named argument syntax makes using arguments with default values more flexible, and allows explicitly labeling what a certain argument value means. Technically named arguments work exactly like keyword arguments in Python. The relative order of the named arguments does not matter. Using normal positional arguments after named arguments like this:
      ```
      Keyword    arg=value    positional
      ```
 does not work.   
  It is possible to use variables in both named argument names and values. If variables are used in named argument names, variables are resolved before matching them against argument names.  
  Naming arguments is supported by user keywords and by most test libraries. The only exceptions are Python keywords explicitly using positional-only arguments.  
  
  - **Embedded arguments**  
  [Embedding argument into keyword names](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#embedding-arguments-into-keyword-name)  
  Embedded arguments are specified into keyword names.  
  The arguments used in the name are naturally available inside the keyword and they have different values depending on how the keyword is called.

  - `[Not]` varargs or kwargs  
    Varargs and kwargs are in the scope of advanced exam.


- Setup and teardown  
[User guide: Setup and teardown](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#test-setup-and-teardown)  
Test setup is executed before a test case and teardown after test case. They are just normal keywords with possible arguments. Setup and teardown can be executed with multiple keywords using the Builtin keyword `Run keywords`.    
Teardown is used for clean-up activities that must be done regardless of the test case status. It can be also executed when a test case fails. All the keywords in the teardown is executed even if one of them fails. [**Continue on failure**](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#continuing-on-failure) functionality is by default in teardown.
- Documentation  
[User guide: Test case naming and documentation](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#test-case-name-and-documentation)  
Test case can be documentated by [_Document_] setting. It allows free form documentation for a test case. Documentation is shown in the command line and in the resulting logs and reports. Documentation can be divided to several rows with syntax (...). [Dividing data to several rows](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#dividing-data-to-several-rows)

- Tags  
[User guide: Tagging test cases](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#tagging-test-cases)  
Tags are a simple, powerful mechanism for classifying test cases and user keywords. Tags are free text and Robot Framework itself has no special meaning for them except for the some [User Guide: reserved tags](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#reserved-tags).  
They can be used to exclude and include as  well as to skip cases.
Tags are shown in the test reports, logs and in the test data. Statistic about test cases (total, passed, failed and skipped) are automatically collected based on them.  
**Robot Framework 7.0** will introduce a new way for tests to indicate they should not get certain globally specified tags. Instead of using a separate setting that tests can override, tests can use the -tag syntax with their `[Tags]` setting to tell they should not get a tag named tag. 

- ~~[Not] Timeouts (?)~~  
Timeouts are in the scope of advanced exam.

- Comments  
Additional comments or data in the keywords or test cases. 

- Escaping  
[User guide: Escaping](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#escaping)  
The escape character in Robot Framework test data is the backslash (\\) and additionally built-in variables \${EMPTY} and  \${SPACE} can often be used for escaping.
