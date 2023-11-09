# Robot Framework basics

List of topics covered by Robot Framework foundation/basic level exams.

Topics starting with `Not` are not to be covered by these exams, but are
instead in the scope of the advanced exams. Topics with `(?)` after them
may be better moved to the advanced exam scope as well. ~Strikethrough~ Are agreed
to be moved to Advanced level.

## Overview / Guidelines

- Where can be used
  - Domains
  - Testing levels
  - BDD
  - RPA
- Architecture
  - Framework
  - Libraries
  - As part of CI (?)
- Installation (?)
- Editors (?)
- Coding style
- Creating maintainable tests
- Dependencies between tests (to be avoided)
- Avoid sleep (use polling)

### Test case syntax

<!-- https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#test-data-syntax -->
[User quide - Test case syntax](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#test-case-syntax)

Chapter Objectives:
1. Understanding Test Case Structure

    - Explore the basic structure of a Robot Framework test case.

    - Learn about sections such as Settings, Variables, Test Cases, and Keywords.

2. Creating Test Cases

    - Learn to create simple test cases using the given syntax.

    - Understand the use of keywords in test case steps.



- Test case structure

    In Robot Framework, test cases are defined using a clear and readable syntax. A test case typically consists of a test case name, optional documentation, and a sequence of keywords that describe the steps and actions to be performed in the test.

  - [Keyword driven style](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#keyword-driven-style)

    Keyword-driven testing is a software testing approach in which test cases are designed and organized based on keywords or commands. These keywords represent specific actions or operations that the testing team wants to perform on an application or system. The keyword-driven style of testing is particularly useful in test automation but can also be applied in manual testing.

    Keyword-driven testing is commonly used in the context of test automation and is often supported by various testing tools and frameworks. By using keywords, testers can create a library of actions and easily assemble test cases to cover various scenarios, making the testing process more efficient and adaptable to changes in the software being tested.

    Benefits of keyword-driven testing:

    - Reusability: Keywords can be reused across multiple test cases, reducing duplication of effort in test case creation.
    - Separation of Concerns: Test case design is separated from the test implementation, allowing non-technical stakeholders to define and modify test cases.
    - Maintainability: When application changes occur, you may need to update only the keyword definitions or mappings, rather than individual test cases.
    - Parallel Execution: It's easier to execute tests in parallel, making the testing process more efficient.
    - Test Coverage: The keyword-driven approach can lead to comprehensive test coverage as it encourages modular and organized test case design.
    - Collaboration: Non-technical team members can collaborate in the test case design process, as they don't need to write code.


  - [Data-driven style](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#data-driven-style)

    Data-driven testing is a software testing approach in which test cases are designed to be executed with multiple sets of input data. Instead of creating individual test cases for each data set, a single test case is designed to be reusable, and the input data is provided separately. This approach allows for thorough testing of various scenarios and combinations of data with minimal duplication of test case logic.

    Data-driven testing is commonly used in both manual and automated testing. In manual testing, testers may follow the same test steps with different sets of data. In automated testing, testing tools or frameworks are employed to automate the execution of test cases with various data inputs. This approach is particularly useful for applications where input data plays a critical role, such as form submissions, data processing, and data validation.

    Benefits of data-driven testing:

    - Reusability: The same test case can be reused with various data sets, reducing the effort required to create and maintain test cases.
    - Scalability: It's easy to expand the testing scope by adding more test data, covering a wide range of scenarios.
    - Comprehensive Testing: Data-driven testing helps ensure that the application can handle different data inputs, which is crucial for testing data-intensive applications.
    - Separation of Test Logic and Data: The test case logic is separated from the data, making it easier to update and maintain test cases.
    - Efficient Testing: Data-driven testing can significantly reduce the time and effort required to test an application thoroughly.
    - Better Coverage: By testing with a variety of data sets, it's possible to achieve more comprehensive test coverage.


  - [BDD style](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#behavior-driven-style)

    Behavior Specification: BDD starts with describing the behavior or functionality that the software should exhibit. This is typically done in plain, natural language that is easily understandable by all stakeholders, including non-technical team members. The behavior is often described in the form of scenarios or user stories.

    Given-When-Then: BDD often uses a "Given-When-Then" structure to describe the behavior of a feature:

         "Given" represents the initial context or preconditions.
         "When" describes the action or event that triggers the behavior.
         "Then" specifies the expected outcome or result.

- Imports
  - Libraries
  - Resources
  - Not variable files

- Using arguments
  - Positional arguments
  - Name arguments
  - Embedded arguments
  - Not varargs or kwargs

- Setup and teardown
- Documentation
- Tags
- ~Timeouts (?)~
- Comments
- Escaping

## Suite structure

- Suite files
- Suite directories
- Initialization files
- Setup and teardown
- Documentation
- ~Metadata (?)~

## User keywords

- Basic structure
- Arguments
  - "Normal" arguments
  - Arguments with default values
  - Embedded arguments
  - Not varargs or kwargs
- Documentation
- ~Tags~
- ~Timeouts~
- RETURN

## Resource files

- Importing
- Structure
- Imports in resource seen in suite file

## Libraries

- Importing
  - By name
  - By path
  - Using arguments
- BuiltIn (always available)
- Standard libraries (automatically installed)
- External libraries
    - How to find
    - How to install
- Understanding Libdoc HTML outputs

## Control structures

- IF
  - Evaluating expressions --> variable syntax should be explained 
  - ELSE
  - ELSE IF
  - Inline IF
- Recognise the following:
  - FOR
  - TRY, WHILE, CONTINUE, BREAK

## Variables

- Creating variables in the Variables section
- Creating variables from keyword return values
- `VAR` syntax (new feature in RF 7)
- Item access syntax `${x}[0][key]`
- Built-in variables
  - Numbers, Booleans, None
  - `${SPACE}`, `${EMPTY}`
  - `${CURDIR}`, `${EXECDIR}`
  - ~`${/}`, `${:}`, `${\n}`~
  - Not automatic variables
- ~Extended variable syntax~
- Recognise `@{list}` and `&{dict}` variables
- Not inline Python evaluation

## Test execution

- Executing a single file
- Executing a directory
- Test statuses
  - PASS and FAIL
  - recognise SKIP
- Using command line options
- Controlling output files
  - `--outputdir`
  - `--variable`
  - ~`--log`, `--report`, `--output`~
  - recognise `--xunit`
- Selecting tests
  - `--test`
  - `--suite`
  - `--include` and `--exclude`
  - Using `*` and `?` wildcards
  - Not Boolean expressions like `tag1ANDtag2`
- Viewing report and log
- Log levels
- Not continuable failures
- Not fatal errors

## Other tools
recognise the following:
- Rebot
  - Generating log and report based on `output.xml`
  - Combining results
  - Merging results
- Libdoc
