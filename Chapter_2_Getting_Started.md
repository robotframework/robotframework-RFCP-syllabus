# Chapter 2: Getting Started with Robot Framework



## Suite File & Tree Structure

When executing Robot Framework it either parses directory trees or files, depending on which paths are given.

The given path to Robot Framework where it starts parsing is considered the **Root Suite**.

If the path to a single file is given as **Root Suite** directly to Robot Framework only this file is parsed.

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

A parsed file that does contain at least one test case or task is called a **Suite File**.

A Suite File does **either** contain `*** Test Cases ***` (in Test Suites) **or** `*** Tasks ***` (in Task Suites), but it CANNOT contain both types simultaneously.


### Sections and Their Artifacts

Robot Framework data files are defined in different sections.
These sections are recognized by their header row.
The format is `*** <Section Name> ***` with three asterisks before and after the section name.

The following sections are recognized by Robot Framework and are recommended to be used in the order they are listed:
- `*** Settings ***`
- `*** Variables ***`
- `*** Test Cases ***` or `*** Tasks ***` (mandatory in Suite Files)
- `*** Keywords ***`
- `*** Comments ***`

The sections `*** Settings ***`, `*** Variables ***`, `*** Keywords ***` and `*** Comments ***` are optional in suites and can be omitted if not needed.


#### `*** Settings ***` Section

This section is used to configure various aspects of the test- or task-suite.
It allows you to import keywords from external libraries (`Library`) or resource files (`Resource`), and import variables (`Variables`) from variable files that are needed for execution in the containing tests|tasks.

It can specify suite metadata (`Metadata`), as well as redefine the suite's name (`Name`), and contain the suite's documentation (`Documentation`).

This section can also define keywords for execution flow control such as `Suite Setup` and `Suite Teardown`, which are executed before and after the suite's tests run.

Additionally, some settings can define defaults for all tests|tasks in the suite, which can be overwritten in the individual tests|tasks.
Those Settings are prefixed with either `Test` or `Task` according to the type of suite and the following section type (`*** Test Cases ***` or `*** Tasks ***`) like `Test Timeout` and can be overwritten in the individual tests|tasks with the local setting in square brackets like `[Timeout]`.


- `Test Setup`/`Task Setup` (locally: `[Setup]`) and `Test Teardown`/`Task Teardown` (locally `[Teardown]`) defines which keywords are executed before and after each individual tests|tasks.

- `Test Timeout`/`Task Timeout` (locally `[Timeout]`) defines the maximum time a test|task is allowed to run before it is marked as failed.

- `Test Tags`/`Task Tags` (locally `[Tags]`) defines tags that are assigned to tests|tasks in the suite and can be used to filter tests|tasks for execution or for attributing information to the tests|tasks.

- `Test Template`/`Task Template` (locally `[Template]`) defines a template keyword that defines the test|task body and is typically used for Data-Driven Testing where each test has the same keywords but different argument data.


#### `*** Variables ***` Section

This section is used to define suite variables that are used in the suite or its tests|tasks or inside their keywords.

The most common and recommended use-case is to use these variables as constants that are not supposed to change during the execution of the suite.
It can be confusing for readers of a suite if a variable is defined with one static value in the `*** Variables ***` section and then during execution dynamically reassigned with a different values, due to the fact that they may expect the variable to always have the initially defined value.

#### `*** Test Cases ***` or `*** Tasks ***` Section (mandatory)

This section defines the executable elements of a suite.
Test cases and task are technically synonym for each other.
However the users have to choose one of the two modes that Robot Framework offers.
Either

Each test case or task is structured using an indentation-based format. The first un-indented line specifies the name of the test or task, followed by indented lines containing **keyword calls** and their **arguments** and test|task specific settings.
These optional settings like `[Setup]`, `[Teardown]`, and `[Timeout]` can be applied to individual test cases or tasks to control their behavior or provide additional details.

#### `*** Keywords ***` Section

This section allows you to define **locally scoped user keywords** that can only be used within the same suite where they are defined. These keywords are not reusable outside the suite, but they are often used to organize and structure tests or tasks for improved readability and maintainability. This section is particularly useful for defining suite-specific actions, such as a **Suite Setup** keywords or similar kinds, which is relevant only to the suite it belongs to.

While these keywords are not globally accessible, they serve a crucial role in making the suite more modular and understandable by breaking down complex sequences into smaller, manageable parts. Defining keywords locally in this section enhances the maintainability of the tests or tasks within the suite, ensuring that even large and intricate suites remain well-structured and easy to manage.


## Basic Test/Task Syntax

As mentioned before Robot Framework uses an indentation-based and space separated syntax to structure keywords, test cases and tasks.

**two or more spaces** are used to separate or indent elements in Robot Framework files, while a single space is a valid character of elements.
The clear recommendation is to use **four spaces** or more, to unambiguously make it visible to a potential reader where elements are separated or indented.

All elements themselves in their section should be written without any indentation.
When defining tests|tasks and keywords, indentation is used to define their body, while their name is still un-indented.

While single tabulators (`\t`) as well as two or more spaces are valid separators, it is recommended to use multiple spaces for indentation to avoid issues with different editors representing the tabulator to the user probably aligning the text to i.e. a 4-space grid.
This could cause a single tabulator look the same as a single space in the editor, which would lead to confusion about the indentation level.

In the following example, two test cases are defined in a suite file.
Their names are `Login User With Password` and `Denied Login With Wrong Password`.
Both do test the login functionality of a system by each calling four keywords in their bodies.

In the `*** Settings ***` section, the suite is documented and the keywords for connecting to the server, logging in, and verifying the login are imported from a resource file.
The settings of this section are not indented but their values are separated by four or more spaces.

In the `*** Test Cases ***` section, there are two test cases defined.
The first test case `Login User With Password` connects to the server, logs in with the username `ironman` and the password `1234567890`, and verifies that the login was successful with the users name of `Tony Stark`.
In this test the the first called keyword is `Connect To Server` without any arguments while the second called keyword is `Login User` and it has two argument values `ironman` and `1234567890`.

The second test case `Denied Login With Wrong Password` connects to the server, tries to log in with the username `ironman` and the password `123`, and expects an error to be raised and the login to be denied.

Clearly visible due to the indentation by four spaces, the body of the test cases contains the keywords that are called to execute the test case.
In the test case body, some keyword calls do have arguments that are separated by two or more spaces from the keyword name.

Empty lines are allowed and encouraged to structure data files and make them more readable.
In this example the sections are visibly separated by two empty lines and the tests are separated by one empty line.
Empty lines are technically not relevant are ignored while parsing the file.

By default each expression in a suite or resource file is terminated by a line break so that in each line only one expression is possible.
However, for better readability or in case of documentation for adding line breaks, expressions can expand over multiple lines if they are continued with `...` (three dots) and a separator (multiple spaces) at the beginning of the next line, potentially being indented.
See the suite documentation as an example.

The following tests will be executed in the order they are defined in the suite file. First, the `Login User With Password` test case will be executed, followed by the `Denied Login With Wrong Password` test case.

Example Suite File Content `robot_files/TestSuite.robot`:
```robotframework
*** Settings ***
Documentation     A suite for valid and invalid login test.
...
...               Keywords are imported from the resource file.
Resource          keywords.resource


*** Test Cases ***
Login User With Password
    Connect To Server
    Login User            ironman    1234567890
    Verify Valid Login    Tony Stark
    Close Server Connection

Denied Login With Wrong Password
    Connect To Server
    Run Keyword And Expect Error    *Invalid Password    Login User    ironman    123
    Verify Unauthorized Access
    Close Server Connection
```


## Executing Robot

Robot Framework comes with three executables when being installed which are designed to be used via the command-line interface (CLI).

- `robot` is the main executable that is used to execute suites.
- `rebot` is used to post-process execution results and generate reports. (covered in a later chapter)
- `libdoc` is used to generate keyword documentation for libraries and resource files. (covered in a later chapter)



### `robot` command & help

The `robot` command is used to run a Robot Framework execution, which will execute suites and their containing tests or tasks.

At a basic level, you can run `robot` by providing the path to a suite file or suite directory containing suite files as last argument.
```plaintext
robot <path_to_root_suite>
```

In case of the above given example where a single suite file named `TestSuite.robot` is stored in a directory `robot_files`, to execute the example test suite the following command is used, if the current working directory of the terminal is the directory containing the `robot_files` directory:
```plaintext
> robot robot_files
```

This command starts the Robot Framework execution by first parsing all files in the given directory tree that have the extension `.robot`,
then creating an execution model and then executing all suites and test cases in that model.
During execution, the results of each test case are printed to the console and at the end a summary is printed and reports are generated.

Example Console Output:
```plaintext
> robot robot_files
==============================================================================
Robot Files
==============================================================================
Robot Files.TestSuite :: A test suite for valid login.
==============================================================================
Login User With Password                                              | PASS |
------------------------------------------------------------------------------
Denied Login With Wrong Password                                      | PASS |
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

The `robot` command can optionally be configured with additional options to control the execution behavior, such as setting output formats, specifying specific tests to run, or controlling logging levels and many more. These options are named arguments that are passed to the `robot` command BEFORE the path to the suite file or directory. To learn more about these options, you can use the help of the `robot` command like: `robot --help`.



### Execution Artifacts
After executing a suite, Robot Framework, by default, generates tree output files in the output directory. These artifacts provide detailed execution results:

- **`output.xml`**: A machine-readable file containing **ALL** logged execution details, limited by the given log-level.
- **`log.html`**: A detailed log file that provides an HTML view of the execution, including keyword-level details.
- **`report.html`**: A summary report that gives an overview of the execution results, including statistics of tests|tasks executed, passed, and failed.

`log.html` and `report.html` are generated based on the information stored in `output.xml`.

A unique feature of Robot Framework is, that it logs each keyword call and its arguments with its log outputs and timestamps, so that it is possible to have a very detailed view of the execution flow and the data that was used during the execution.
In case of a failure it is possible to see the exact keyword call that failed and the arguments that were used, which can be very helpful for debugging or reporting. Furthermore you also get all passed keywords and even the non-executed keywords to protocol the whole execution flow.


### Status
Robot Framework uses different status labels to indicate the result of an execution:

On Suite, Test Case and Task Level:
- **`PASS`**: Indicates that the item was successfully executed without unexpected errors.
- **`FAIL`**: Shows that the item encountered an error and did not pass.
- **`SKIP`**: Indicates that the item was intentionally skipped, i.e. due to external factors like preconditions not being met.

Additional Keyword Status:
- **`NOT RUN`**: Refers to keywords that were not executed during execution, i.e. due to previous failure or conditions.

`NOT RUN` and `SKIP` are explained in more detail in later chapters.

**Atomic elements** like Library Keywords or Robot Framework language statements do define their own status.

**Composite elements** like suites (composed of tests|tasks), tests|tasks (composed of keywords) and User Keywords (composed of Library Keywords and Robot Framework statements) do define their status based on the status of their child elements.

#### PASS
This status is used if an element was executed successfully without any errors or exceptions.

**Atomic elements** are `PASS` if they were executed successfully without reporting an error by raising an exception.

**Composite elements** are `PASS` if all their executed body elements are pass.
In example for User Keywords this means that if all keywords or Robot Framework language statements that were directly called by that User Keyword were `PASS` the User Keyword itself is considered `PASS`.

Library Keywords like `Run Keyword And Expect Error`, from BuiltIn Library, do `PASS` if the keyword they are internally calling does raise an error with the expected message or type.

That means that a composite element like suite, test|task or User Keyword may be `PASS` even if some of its deeper child elements are `FAIL`.

#### FAIL
This status is used if an element was executed but encountered an error or exception that was not expected.

A failure typically causes the subsequent keywords to be skipped.

**Atomic elements** are `FAIL` if they were tried to be executed but raised an exception.

**Composite elements** are `FAIL` if at least one of their executed direct body elements are `FAIL`.
Therefore a failure typically distributes upwards through the hierarchy of elements until it reaches the root suite.

A User Keywords is `FAIL` if one of its Library Keyword is `FAIL`, a test|task is `FAIL` if one of its User Keywords is `FAIL` and a suite (file) is `FAIL` if one of its test|task is `FAIL` a suite (directory) is `FAIL` if one of its suite (file) is `FAIL`.


### Logging possibilities (Log vs Console)
There are basically two kinds of logging information in Robot Framework.

- **Console Output**: The console output is the output that is printed to the terminal where the `robot` command was executed. It is typically not persistent but can be already seen during execution.
- **Log Messages**: Log messages are written to the `output.xml` and therefore also `log.html` file and are persistent. They are typically created by the Library Keywords that are executed and can be used to log information about the execution. Also Robot Framework itself does log information to the `outputxml` like assigned values of arguments or the return values of keywords.

Log messages can be written with different levels of severity like i.e. `INFO`, `DEBUG`, `TRACE`, `WARN` or `ERROR`.
Which levels are written to the log can be controlled by the log level of an execution. Further information in later chapters.

## Keyword Imports
<!-- To use Keywords that are not part of BuiltIn, which is always imported invisibly, you must import keywords into the current scope. Basically Two different sources of keywords.
- Libraries, which contains low-level keywords actually implementing functionality, typically in Python.
- Resource Files, which either again import libraries or other Resource Files or they specify User Keywords.  -->
Robot Framework has a modular design that allows users to import keywords from external sources.
Without importing external keywords into a suite, only the keywords from Robot Framework's BuiltIn library are available for use, due to them being imported automatically.
Also the Robot Framework language statements itself are available for use without importing it.

External keywords can be imported from either libraries or resource files.
Both types of sources are using different syntax to import their keywords.

### Libraries
From a user perspective there are three different kinds of libraries:
- **Robot Framework Standard Libraries**: These are libraries that are shipped with Robot Framework and are available without any additional installation.
- **3rd Party Libraries** / **External Libraries**: These are libraries have been developed and maintained by community members and have to be installed/downloaded separately.
- **Custom Libraries**: These libraries are developed by the users themselves to solve specific problems or to encapsulate more complex functionality

Further more detailed information about the different types of libraries and are described in later chapters.

To import a library into a suite or resource file the `Library` setting is used in the `*** Settings ***` section followed by the name of the library.
The name of the library is case-sensitive and should be taken from the library's keyword documentation.

Example:
```robotframework
*** Settings ***
Library    OperatingSystem
Library    Browser
Library    DatabaseLibrary
```

Once a library is imported, all keywords from that library are available for use in that suite or resource file.
Which keywords are available can be seen in the keyword documentation of the library or may be visible in the IDE by code completion, depending on the IDE extension being used.

### Resource Files
As mentioned before resource files are used to organize and structure keywords and variables that are used in multiple suites.
They can also other keyword imports, which cause the keywords from the imported libraries or resource files to be available in the file where the resource file is imported. Therefore keywords from a library that has been imported in a resource file is also available in the suite that imports that resource file.

To import a resource file into a suite or resource file the `Resource` setting is used in the `*** Settings ***` section followed by the path to the resource file. The path can be either an absolute path or a relative path.
If a relative path is given, the resource file is searched for relative to the data file that is importing it or relative to the python search path.

Resource files shall have the extension `.resource` to make it clear what they are.
This extension is also recognized beside the `.robot` extension by IDE extensions, supporting Robot Framework.

Example:
```robotframework
*** Settings ***
Resource    local_keywords.resource
Resource    D:/keywords/central_keywords.resource
```


### Import Paths (\ vs / vs rel vs abs vs -P)
<!-- Use Import Paths ALWAYS with forward /
Recommendation to use Python Path for central elements
Use relative path to folder local stuff. ${CURDIR}?
Avoid absolute Paths
!!!!!!! Would like to discuss that with some people !!!!! "Style Guide?"-->

## Keyword Interface and Documentation

Library Keywords and User Keywords that are defined in a resource file should have a documentation text that describes what the keyword does and how it should be used.

Robot Framework is capable of generating a **Keyword Documentation** files that contains a library- or resource-documentation, all keywords, their argument interfaces, and their documentation texts.
This documentation file can be generated with the `libdoc` command and can be used to provide a reference for users who want to use the keywords.

Basically all standard and external 3rd party libraries offer these Keyword Documentations as online available HTML pages.

Robot Framework offers the Keyword Documentation of its Standard Libraries at https://robotframework.org/robotframework .

<!-- Keywords from Libraries and Resources can be called and can be documented either as HTML or in IDEs with Robot Support. -->
### Understanding Keyword Docs
The Keyword Documentation is structured so, that it contains first the library or resource documentation, followed by a list of all keywords that are available in that library or resource file.

Each keyword documented does contain the following information:
- **Name**: The name of the keyword as it is called.
- **Arguments** (opt.): The argument interface that the keyword expects/offers its types and default values.
- **Return Type** (opt.): The type of the return value of the keyword.
- **Tags** (opt.): The tags that are assigned to the keyword to categorize keywords.
- **Documentation** (opt.): The documentation text that describes what the keyword does and how it should be used.

#### Example Keyword Documentation

The following keyword `Should Be Equal` is part of the BuiltIn Library and is documented as follows:

**[Should Be Equal](https://robotframework.org/robotframework/latest/libraries/BuiltIn.html#Should%20Be%20Equal)**

*Arguments*
- `first`
- `second`
- `msg` = `None`
- `values` = `True`
- `ignore_case` = `False`
- `formatter` = `str`
- `strip_spaces` = `False`
- `collapse_spaces` = `False`

*Documentation*
```
Fails if the given objects are unequal.

Optional msg, values and formatter arguments specify how to construct the error message if this keyword fails
...
```

One example of a more extensive keyword documentation is the documentation of Robot Framework Browser library.
<!-- I think we should provide a link to a keyword doc that uses types and return types, so that users can see what we are talking about.
Open Keywords Docs that are fully typed and lets have a look to some basic things.
I think it is imported to point out the type of arguments in comparison the type of setting an argument. See next-->
### Keyword Arguments
Most library keywords can be parameterized with arguments that are passed to the keyword when it is called to customize its behavior.
As more business oriented keywords are as less arguments they typically have.

Keyword arguments can be grouped into different kinds.
On the one hand you can group them by their definition kind and on the other hand by there usage kind.
The most relevant distinction of definition kinds is between **Mandatory Arguments** and **Optional Arguments** and additionally **Embedded Arguments**.
The relevant distinction of usage kinds is between using **Positional Arguments** and **Named Arguments**, which is described in [Calling Imported Keywords](#calling-imported-keywords).

There are other special kinds of arguments like **Named-Only Arguments**, **Keyword Arguments** or **Variable Amount of Arguments** that are not part of that syllabus.

#### Mandatory Args
Arguments that do not have a default value, must be set when the keyword is called.
These arguments are listed first in the argument interface.

See the argument named `first` and `second` in the `Should Be Equal` keyword documentation.

If too few arguments are provided, the keyword call will fail with an error message.
Example: `Should Be Equal    1` will fail because the keyword expects two arguments.
The Error Message would be: `Keyword 'BuiltIn.Should Be Equal' expected 2 to 8 arguments, got 1.`

Two arguments are mandatory and additional six arguments are optional in the `Should Be Equal` keyword.

#### Optional Args
Arguments that have a default value can be omitted when the keyword is called, causing these arguments to be set to their default value.
These arguments are listed after the mandatory arguments in the argument interface.
Default values are defined and represented in the docs by the equal sign `=` after the argument name and a value after that.

i.e. the argument `msg` in the `Should Be Equal` keyword documentation has the default value `None` and `ignore_case` has the default value `False`.

In that particular keyword these optional arguments can be used to activate some special features like ignoring the case of the compared strings or to provide a custom error message.

Omitting some optional arguments but still using others is possible independent of their order setting these arguments by their name. See [Calling Imported Keywords](#calling-imported-keywords).

#### Embedded Args
Keywords used mostly for Behavior-Driven Specification (BDD) can have arguments embedded into their names.

Example Test Case:
```robotframework
*** Test Cases ***
Foundation Page should be Accessible
    Given "robotframework.org" is open
    When the user clicks the "FOUNDATION" button
    Then the page title should be "Foundation | Robot Framework"
    And the url should be "https://robotframework.org/foundation"
```
The prefixes `Given`, `When`, `Then`, `And` and `But` are basically ignored by Robot Framework if a keyword is found matching the rest of the name.
In the before given example the keywords are designed so that the arguments are surrounded by double quotes `"` for better visibility.

The actual keywords are:
- `"${url}" is open`
- `the user clicks the "${button}" button`
- `the page title should be "${exp_title}"`
- `the url should be "${exp_url}"`

A mix of embedded arguments and "normal" arguments is possible to fully support BDD.
In the keyword documentation the embedded arguments are written in variable syntax with dollar-curly-braces (`${var_name}`) to indicate that they are not part of the keyword name but are arguments.
Embedded arguments are also mandatory arguments.
They can also be defined using regular expressions to allow for more complex argument structures, which is not part of that syllabus.

<!-- Are mandatory arguments as part of the keyword names and must be filled. Used for Behavior-Driven Specification -->
#### Argument Types
Library Keywords may define the expected types of their argument values.
Robot Framework specification is mostly done as a string-based language, therefore most statically defined argument values are strings.
However, the actual implementation of the keyword may expect a different type of argument, like an integer.

Lets imagine a keyword that clicks on a specific coordinate on the screen, i.e. `Click On Coordinate`.
This keyword would expect two integer arguments, one for the `x`-coordinate and one for the `y`-coordinate.

That keyword can now claim that it expects two integer arguments by defining type hints for these arguments.
Type hints are show in the keyword documentation at the argument after the optional default value.

Robot Framework in that case tries to convert the given string arguments to the expected type.
If the conversion fails, the keyword call will fail with an error message.

Example:
```robotframework
*** Test Cases ***
Test Conversion
    Click On Coordinate    10    20    # This will work
    Click On Coordinate    10    Not_A_Number  # This will fail
```

In the first call the keyword will be called with the integer values `10` and `20` and will work as expected.
The second keyword call will fail before the actual keyword code is executed, because the second argument is not a number and cannot be converted to an integer.
The error message would be: `ValueError: Argument 'y' got value 'Not_A_Number' that cannot be converted to integer.`

The advantage of using type hints is that the user get more information about what kind of values are expected and the keyword implementation can be simpler, because it can rely on the arguments being of the expected type.

<!-- Just to understand that they are there and that they may document how values are handled or which are allowed. -->
#### Return Types
Keywords may gather information and return these to the caller of that keyword to be stored in a variable and used in further keyword calls.

<!-- Keywords may gather information and return these to the caller of that keyword. A Documented Return Value may be present but often it is just written in the docs, due to new feature -->
### Keyword Documentation & Examples
<!-- How to read Keyword Docs and What they shall state -->


## Calling imported Keywords
<!-- How to call them, Spaces and Arguments.
-->
### Positional Args
<!-- Typical way to call them. All must be set in specific order. -->
### Named Args
<!-- Possibility for better read-/understandability.
Mixing oder, should be avoided.
Skipping of optional args -->
### Using Behavior-Driven Specification
<!--
- What is BDD
- Using Embedded (mixed) Arguments
- Given/When/Then/And/But
 -->
