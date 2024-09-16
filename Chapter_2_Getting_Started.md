# Chapter 2: Getting Started with Robot Framework



## Suite File & Tree Structure

When executing Robot Framework it either parses directory trees or files, depending on which paths are given.

The given path to Robot Framework where it starts parsing is considered the **Root Suite**.

If a the path to a single file is given as **Root Suite** directly to Robot Framework only this file is parsed.

If a directory path is given, starting at this location, Robot Framework will parse all `*.robot`-files and directories within this path.
Robot Framework analyses all containing files and determines if they do contain test cases or tasks. If they do, they are considered **Suite Files** or **Low-Level Suites**.
All directories that do either directly or indirectly do contain a Suite File are considered **Suites Directories** or **Higher-Level Suites**.

The ordering of suites during execution is by default defined by their name and hierarchy.
All files and directories, which are suites, in one directory are considered on the same level and are executed in alphabetical order.

It is possible to define the order without influencing the name of the suite by adding a prefix followed by two underscores `__` to the name of the directory or file. This prefix is NOT considered part of the name.
So `01__First_Suite.robot` is setting the suite name to `First Suite` while `2_Second_Suite.robot` is setting the suite name to `2 Second Suite`.

One or more underscores in file- or directory-names are replaced by space characters as suite names.

Legend:
```
▷ Directory (No Suite)
▶︎ Suite Directory
◻︎ File (No Suite)
◼︎ Suite File
```

Example:
```plaintext
 ----- Tree Structure / Order --------- | ---- Suite Name ---------
  ▶︎ Root_Suite                          | Root Suite
    ◼︎ A_Suite.robot                     | A Suite
    ▶︎ Earlier_Suite_Directory           | Earlier Suite Directory
      ◼︎ B_Suite.robot                   | B Suite
      ◼︎ C_Suite.robot                   | C Suite
    ▷ Keywords (No Suite)               |
      ◻︎ technical_keywords.resource     |
    ▶︎ Later_Suite_Directory             | Later Suite Directory
      ◼︎ 01__FirstSuite.robot            | First Suite
      ◼︎ 02__SecondSuite.robot           | Second Suite
      ▶︎ 03__ThirdSuite                  | Third Suite
        ◼︎ 01__FirstSubSuite.robot       | First Sub Suite
        ◼︎ 02__SecondSubSuite.robot      | Second Sub Suite
      ◼︎ 04__FourthSuite.robot           | Fourth Suite
```

### Suite Files

By default Robot Framework parses files with the extension `.robot` and searches for test cases or tasks within these files.

A parsed file that does contain at least one test case or task is called a **Suite File** and may contain the following sections:
- `*** Settings ***`
- `*** Variables ***`
- `*** Test Cases ***` or `*** Tasks ***` (mandatory)
- `*** Keywords ***`
- `*** Comments ***`

A Suite File does **either** contain `*** Test Cases ***` (in Test Suites) **or** `*** Tasks ***` (in Task Suites), but it CANNOT contain both types simultaneously.

The sections `*** Settings ***`, `*** Variables ***`, `*** Keywords ***` and `*** Comments ***` are optional and can be omitted if not needed.

### Sections and Their Artifacts

Robot Framework data files are defined in different sections

Different sections are recognized by their header row.
The recommended header format is `*** Settings ***`, but the header is case-insensitive, surrounding spaces are optional, and the number of asterisk characters can vary as long as there is at least one asterisk in the beginning. For example, also `*settings` would be recognized as a section header.
<!-- TODO: Should we teach that? or just say. Use *** Settings *** as we do not mention the singular???-->

The following order of sections is recommended, but not mandatory.

#### `*** Settings ***` Section

This section is used to configure various aspects of the test- or task-suite.
It allows you to import keywords from external libraries (`Library`) or resource files (`Resource`), and import variables (`Variables`) from variable files that are needed for execution in the containing tests|tasks.

It can specify suite metadata (`Metadata`), as well as redefint the suite's name (`Name`), and contain the suite's documentation (`Documentation`).

This section can also define keywords for execution flow control such as `Suite Setup` and `Suite Teardown`, which are executed before and after the suite's tests run.

Additionally, some settings can define defaults for all tests|tasks in the suite, which can be overwritten in the individual tests|tasks.
Those Settings are prefixed with either `Test` or `Task` according to the type of suite and the following section type (`*** Test Cases ***` or `*** Tasks ***`) like `Test Timeout` and can be overwritten in the individual tests|tasks with the local setting in square brackets like `[Timeout]`.


- `Test Setup`/`Task Setup` (locally: `[Setup]`) and `Test Teardown`/`Task Teardown` (locally `[Teardown]`) defines which keywords are executed befor and after each individual tests|tasks.

- `Test Timeout`/`Task Timeout` (locally `[Timeout]`) defines the maximum time a test|task is allowed to run before it is marked as failed.

- `Test Tags`/`Task Tags` (locally `[Tags]`) defines tags that are assigned to tests|tasks in the suite and can be used to filter tests|tasks for execution or for attributing information to the tests|tasks.

- `Test Template`/`Task Template` (locally `[Template]`) defines a template keyword that defines the test|task body and is typically used for Data-Driven Testing where each test has the same keywords but different argument data.


#### `*** Variables ***` Section

This section is used to define suite variables that are used in the suite or its tests|tasks or inside their keywords.

The most common and recommended use-case is to use these variables as constants that are not supposed to change during the execution of the suite.
It can be confusing for readers of a suite if a variable is defined with a fix value in the `*** Variables ***` section and then during execution a different values is stored and read from that variable.

#### `*** Test Cases ***` or `*** Tasks ***` Section (mandatory)

This section defines the executable elements of a suite. Each test case or task is structured using an indentation-based format. The first unindented line specifies the name of the test or task, followed by indented lines containing **keyword calls** and their **arguments** and test|task specific settings.
These optional settings like `[Setup]`, `[Teardown]`, and `[Timeout]` can be applied to individual test cases or tasks to control their behavior or provide additional details.

#### `*** Keywords ***` Section

This section allows you to define **locally scoped user keywords** that can only be used within the same suite where they are defined. These keywords are not reusable outside the suite, but they are often used to organize and structure tests or tasks for improved readability and maintainability. This section is particularly useful for defining suite-specific actions, such as a **Suite Setup** keywords or similar kinds, which is relevant only to the suite it belongs to.

While these keywords are not globally accessible, they serve a crucial role in making the suite more modular and understandable by breaking down complex sequences into smaller, manageable parts. Defining keywords locally in this section enhances the maintainability of the tests or tasks within the suite, ensuring that even large and intricate suites remain well-structured and easy to manage.


## Basic Test/Task Syntax

As mentioned before Robot Framework uses an indentation-based and space separated syntax to structure test cases and tasks.
All elements in their settings shall be without any indentation, while in case of tests|tasks and keywords the indentation is used to define their body.

In the following example, a two test cases are defined in a suite file.
Both do test the login functionality of a system.

In the `*** Settings ***` section, the suite is documented and the keywords for connecting to the server, logging in, and verifying the login are imported from a resource file.
The settings of this section are not indented but their values are separated by two or more spaces (recommended is four spaces or more).

In the `*** Test Cases ***` section, there are two test cases defined.
The first test case `Login User with Password` connects to the server, logs in with the username `ironman` and the password `1234567890`, and verifies that the login was successful.

The second test case `Denied Login with Wrong Password` connects to the server, tries to log in with the username `ironman` and the password `123`, and expects an error to be raised and the login to be denied.

Clearly visible due to the indentation by four spaces, the body of the test cases contains the keywords that are called to execute the test case.
In the test case body, some keyword calls do have arguments that are separated by two or more spaces from the keyword name.

Empty lines are allowed and can be used to structure the test case body for better readability but are not relevant for syntax.

These tests will be executed in the order they are defined in the suite file. First, the `Login User with Password` test case will be executed, followed by the `Denied Login with Wrong Password` test case.

Example Suite File Content `robot_files/TestSuite.robot`:
```robotframework
*** Settings ***
Documentation     A suite for valid and invalid login test.
...
...               Keywords are imported from the resource file.
Resource          keywords.resource


*** Test Cases ***
Login User with Password
    Connect to Server
    Login User            ironman    1234567890
    Verify Valid Login    Tony Stark
    Close Server Connection

Denied Login with Wrong Password
    Connect to Server
    Run Keyword And Expect Error    *Invalid Password    Login User    ironman    123
    Verify Unauthorised Access
    Close Server Connection
```


## Executing Robot



### `robot` command & help
<!-- How to execute robot and check its version.
Learn about the minimal call command `robot <path to suite>.
Learn about the possinility to use --help to learn about more commands.
Further importent commands are in Chapters : --exclude --include -->


Example Console Output:
```plaintext
> robot robot_files
==============================================================================
Robot Files
==============================================================================
Robot Files.TestSuite :: A test suite for valid login.
==============================================================================
Login User with Password                                              | PASS |
------------------------------------------------------------------------------
Denied Login with Wrong Password                                      | PASS |
------------------------------------------------------------------------------
Robot Files.TestSuite :: A test suite for valid login.                | PASS |
2 tests, 2 passed, 0 failed
==============================================================================
Robot Files                                                           | PASS |
2 tests, 2 passed, 0 failed
==============================================================================
Output:  /path/to/output.xml
Log:     /path/to/log.html
Report:  /path/to/report.html
```



### Execution Artifacts
<!--
- log.html
- report.html
- output.xml
 -->
### Status
<!-- Learn about "PASS" and "FAIL" and that ther is also "NOT RUN" and "SKIP" -->
### Logging possibilities (Log vs Console)
<!-- Keywords and Robot Framework can basically log either to the output.xml and theirfor to the log.html in multiple levels or to the console.

?? --loglevel? Will theis be part?-->

## Keyword Imports
<!-- To use Keywords that are not part of BuiltIn, which is always imported invisibyl, you must import keywords into the current scope. Basically Two different sources of keywords.
- Libraries, which containt low-level keywords actually implementing functionality, typically in Python.
- Resource Files, which einther again import libraries or other Resource Files or they specify User Keywords.  -->
### User Keywords vs Library Keywords
### Libraries
<!-- BuildIn vs Standard vs 3rd Party vs Custom made.
They do bring Library Keywords, but may also serve other topics that are out of scope of syllabus.-->
### Resource Files
<!-- Short explaination what the may bring, (Variables, User Keywords or Library Keywords) -->
### Import Paths (\ vs / vs rel vs abs vs -P)
<!-- Use Import Paths ALWAYS with forward /
Recommendation to use Python Path for central elements
Use relative path to folder local stuff. ${CURDIR}?
Avoid abolute Paths
!!!!!!! Would like to discuss that with some people !!!!! "Style Guide?"-->

## Keyword Interface and Documantation
<!-- Keywords from Libraries and Resources can be called and can be documented either as HTML or in IDEs with Robot Support. -->
### Understanding Keyword Docs
<!-- Open Keywords Docs that are fully typed and lets have a look to some basic things.

I think it is imported to point out the type of arguments in comparison the type of setting an argumetn. See next-->
### Mandatory Args
<!-- They must be filled! -->
### Optional Args
<!-- They may be filled otherwise they use their default -->
### Embedded Args
<!-- Are mandatory arguments as part of the keyword names and must be filled. Used for Behavior-Driven Specification -->
### Return Values
<!-- Keywords may gather information and return these to the caller of that keyword. A Documented Return Value may be present but often it is just written in the docs, due to new feture -->
### Argument Types
<!-- Just to understand that they are there and that they may document how values are handled or which are allowed. -->
### Keyword Documentation & Examples
<!-- How to read Keyword Docs and What they shall state -->


## Using imported Keywords
<!-- How to call them, Spaces and Arguments.
-->
### Positional Args
<!-- Typical way to call them. All must be set in specific oreder. -->
### Named Args
<!-- Possibility for better read-/understandability.
Mixing oder, should be avoided.
Skippig of optional args -->
### Using Behaviour-Driven Specification
<!--
- What is BDD
- Using Embedded (mixed) Arguments
- Given/When/Then/And/But
 -->
