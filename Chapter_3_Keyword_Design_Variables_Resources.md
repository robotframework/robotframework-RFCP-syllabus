<!-- # Chapter 3: Keyword Design, Variables and Resource Files


## Variables
### Variable Sytax (scalar & escaping)
### Assigning Variables (by return) & usage
### \*\*\* Variables \*\*\* Section
### Variable Scope Basics (Suite vs Local)

## Keyword Definition & Arguments
### \*\*\* Keywords \*\*\* Section
### Names
### Documentation
### Keyword Arguments
- Mandatory
- Optional with Defaults
- Embedded Arguments
### RETURN statement

## Resource Files
### File Type & Structure
- Resource (not parsed)
- Sections
### Designing reusable Keyword
### Best practices ???
- avoid circular imports

## Documentation
### Basic Syntax
### Keyword / Test|Task / Suite / Resource|Library
### LibDoc -->



<!-- ################## DRAFT ############################## -->
# Chapter 3: Keyword Design, Variables, and Resource Files

This chapter introduces the essential components of Robot Framework: **Keywords**, **Variables**, and **Resource Files**. These building blocks allow users to create reusable, structured, and maintainable automation solutions. Understanding these concepts is critical for developing efficient automation in both testing and RPA contexts.


## Variables
Variables in Robot Framework are used to store values that can be referenced and reused throughout suites, test cases, tasks, and keywords.
They help manage dynamic data or centrally maintained data, reducing hardcoding on multiple locations and making automation flexible.

Variables can be created and assigned in various ways, such as:
- Definition in `*** Variables ***` section. (see [`*** Variables ***` Section](#variables-section))
- Capturing return values from keywords. (see [Return values from keywords](#return-values-from-keywords))
- In line assignment using the `VAR` statement. (see [`VAR` statement](#var-statement))
- As arguments passed to keywords. (see [Keyword Arguments](#keyword-arguments))
- (*) By the command line interface of Robot Framework.
- (*) By internal implementation of library keywords.
- (*) By importing variables from variable files.

(*) These methods are not part of this syllabus.

Robot Framework, implemented in Python, can work with any object stored in variables, and syntactically distinguishes three types of accessing variables:
- **Scalar Variables**: Store values as single entity and are represented by the dollar-syntax `${variable_name}`.
- **List-Like Variables**: Store multiple values in a list-like structure. They are created using the at-syntax `@{list-variable_name}`.
- **Dictionary-Like Variables**: Store key-value pairs in a dictionary-like structure. They are created using the ampersand-syntax `&{dictionary-variable_name}`.

These three different syntactical handling methods allows the users to create and handle lists and dictionaries natively in Robot Framework.
However, these prefixes just define the access type to the variable, and the actual data stored in the variable can be of any type, including strings, numbers, lists, dictionaries, or even objects.

When creating variables the different syntax is used to define the type of the variable, but when accessing the variable, the scalar variable sytax with dollar `$` as prefix is used in most cases.
More details about list-like and dictionary-like variables can be found in the [Advanced Variables](Chapter_5_Exploring_Advanced_Constructs.md#advanced-variables) chapter.

Additionally to these variable types, Robot Framework also supports access to environment variables, which can be accessed using the syntax `%{ENV_VAR_NAME}` respectively.
<!-- TODO fix the link -->


### Variable Syntax

Variables in Robot Framework are defined by three attributes:
- **Prefix**: `$`, `@`, or `&` to define the access type to the variable. (`%` for environment variables)
- **Delimiter**: `{}` to enclose the variable name.
- **Variable Name**: The name of the variable, which can be any valid string.

In case these prefixes followed by a curly brache opening (`${`) should be used as characters in a string,
they must be escaped by a backslash like `\${` to be treated as text rather than a variable start.


### `*** Variables ***` Section

Variables can be defined in the `*** Variables ***` section,
and used across inside the suite where ther were defined or
in case they are defined in a Resource-File in any file that has imported that Resource-File.

This section is typically used to define constants or to initialise variables that may be re-assigned during execution and more globally used.

Variables created in this section:
- are not indented,
- can be followed by an optional equal sign (`=`) to improve readability,
- can be scalar, list-like, or dictionary-like variables,
- are separated from their following value(s) by multiple spaces,
- can be define in multiple lines using the `...` syntax.

Because also here two or more spaces are used to separate elements in a row,
all values are stripped from leading and trailing spaces identical to arguments of keyword calls (see [Calling imported Keywords](Chapter_2_Getting_Started.md#calling-imported-keywords)).

Variable values in Robot Framework can include other variables, and their values will be concatenated at runtime when the line is executed. This means that when a variable is used within another variable's value, the final value is resolved by replacing the variables with their actual content during execution.

Variables defined in the `*** Variables ***` are recommended to be named in uppercase to distinguish them from local variables defined in test cases or keywords.


#### Scalar Variable Definition


Example of creating scalar variables:
```robotframework
*** Variables ***
${NAME}       Robot Framework
${VERSION}    8.0
${TOOL}       ${NAME} | verion: ${VERSION}
```

The Variable ${TOOL} will be resolved to `Robot Framework | version: 8.0` at runtime.

If the value of a scalar variable is long, you can split it into multiple lines to improve readability using the `...` syntax.
By default, the lines are concatenated with a space,
but a custom separators, defined by lower case `separator=` followed by the separator value (e.g., newline `separator=\n`) can be used.
Also no separator, to join them into one string (`separator=` ) is possible.
If the string `separator=` shall be used as the last part of the value,
it must be escaped by a backslash like `\separator=` to be treated as text rather than the separator definition.


Example:
```robotframework
*** Variables ***
${EXAMPLE}        This value is joined
...               together with a space.
${MULTILINE}      First line.
...               Second line.
...               separator=\n
${SEARCH_URL}     https://example.com/search
...               ?query=robot+framework
...               &page=1
...               &filter=recent
...               &lang=en
...               &category=test-automation
...               separator=
```

`${SEARCH_URL}` will contain `https://example.com/search?query=robot+framework&page=1&filter=recent&lang=en&category=test-automation`.

#### List Variable Definition

List variables store multiple values and are defined using the at-syntax `@{variable_name}`.
You can define as many values as needed, with each additional value
separated by multiples spaces or line continuation using the `...` syntax.

Example:
```robotframework
*** Variables ***
@{NAMES}        Matti       Teppo
@{EMPTY_LIST}
@{NUMBERS}      one         two      three
...             four        five     six
```

Single values of list-like variables can be accessed by the dollar-syntax (`$`) followed by their index in square brackets (`[]`),
starting with 0 like `${NAMES}[0]` for `Matti` and `${NAMES}[1]` for `Teppo`.

Example:
```robotframework
*** Test Cases ***
List Example
    Log    Fist Name: ${NAMES}[0]    # Logs 'Fist Name: Matti'
    Log    Second Name: ${NAMES}[1]    # Logs 'Second Name: Teppo'
```

#### Dictionary Variable Definition

Dictionary variables store key-value pairs and use the ampersand-syntax `&{variable_name}`.
Key-value pairs are assigned using `key=value` format.

Example:
```robotframework
*** Variables ***
&{USER1}        name=Matti     address=xxx         phone=123
&{USER2}        name=Teppo     address=yyy         phone=456
&{COMBINED}     first=1        second=${2}         third=third
```
You can escape equal signs in keys with a backslash (`\=`) to prevent misinterpretation.

Values of dictionary-like variables can be accessed by the dollar-syntax (`$`) followed by the key in square brackets (`[]`),
like `${USER1}[name]` for `Matti` and `${USER1}[address]` for `xxx`.
No quotes are needed around the key name.

Also variables can be used to set the accessed key dynamically.
Assuming `${key}` contains the value `phone` this `${USER1}[${KEY}]` would resolve to `123`.

Dictionary variables in Robot Framework are **ordered**,
which mean they to persist their assignment order and can be iterated,
and **support attribute access**, allowing you to reference dictionary keys using syntax like `${USER1.name}`.


### Return values from keywords

In Robot Framework, values returned by keywords can be assigned to variables,
enabling data to be passed between different keywords.

These variables are local to the block where they are created,
i.e. in the test|task or keyword where the assignment is made.
If a variable has already been defined in the `*** Variables ***` section,
it will just be locally overwritten by the new value.
Once the block is left, the original value of the variable is restored.
See [Variable Scopes](Chapter_5_Exploring_Advanced_Constructs.md#variable-scope) for more information.

An assignment is always constructed by the variable or variables that shall be assigned to,
followed by an optional equal sign (`=`) and the keyword call that
shall be executed and will return the value(s) to be assigned.

#### Assigning to Scalar Variables

In the most simple case a keyword does return exactly one value,
which can be assigned to a scalar variable using the dollar-syntax `${variable_name}`.

```robotframework
*** Settings ***
Library    OperatingSystem


*** Test Cases ***
Returning Example
    ${server_log} =    Get File    server.log
    Should Contain    ${server_log}    Successfully started
```

In this example, the content of the file `server.log` which is returned by the `Get File` keyword is stored in the `${server_log}` variable and later verified by the `Should Contain` keyword. Although the `=` sign is optional, its usage makes the assignment visually more explicit.

If keywords do return multiple values, still the scalar variable syntax with `${var}` is used.
All values are assigned to the variable as a list of values and can be accessed as described in the [List Variables](#list-variables) section.

```robotframework
*** Settings ***
Library    OperatingSystem


*** Test Cases ***
Returning a List Example
    ${files}    List Files In Directory    server/logs
    Log    First File: ${files}[0]
    Log    Last File: ${files}[-1]
```

In cases where a keyword returns a defined amount of values, they can be assigned to multiple scalar variables in one assignment.
In the following example the keyword `Split Path` returns two values, the path and the file name.

```robotframework
*** Settings ***
Library    OperatingSystem


*** Test Cases ***
Multiple Return Example
    ${path}    ${file} =    Split Path    server/logs/server.log
    Should Be Equal    ${path}    server/logs
    Should Be Equal    ${file}    server.log
```











<!-- The following is not fully ready. Had to stop due to family ;-) -->






### `VAR` Statement

The `VAR` statement in Robot Framework is a way to create
and assign values to variables directly within a test case or keyword during execution.
While the `*** Variables ***` section allows defining variables for a whole test suite,
the `VAR` statement is used within the body of a test case or keyword,
allowing more control over when and where the variable is created.

The use-cases for the `VAR` statement do include:
- **Combining values during test execution**: Variables that shall have content, that is based on information gathered during test execution.
- **Conditional assignments**: In some scenarios, it may be necessary to assign different values to a variable based on conditions that occur during test execution. The `VAR` statement can be used to initialize a variable and later update it based on certain conditions.
- **Default values**: The `VAR` statement can also be used to give variables default values that may be replaced by the return value of a keyword later in the test.

By default, variables created with the `VAR` statement are **local** to the test case, task, or keyword where they are defined. This means that they cannot be accessed outside that specific test or keyword, ensuring that variables do not interfere with other parts of the test suite.

However, the `VAR` statement can also be used to create variables with a broader scope, such as suite-wide or global variables, when needed. These variables can then be accessed outside of the test case or keyword where they were originally created. For more details on this topic, refer to the section on [Variable Scope](Chapter_5_Exploring_Advanced_Constructs.md#variable-scope).







<!-- The following are just notes.. ignore!!! -->







### Variable Scope Basics (Suite vs Local)
Variables in Robot Framework have either **local** or **suite-wide scope**:
- **Local Variables**: Defined within a test case or keyword and only available within that context.
- **Suite Variables**: Declared in the `*** Variables ***` section or through resource files and are accessible across the entire test suite.

## Keyword Definition & Arguments

### `*** Keywords ***` Section
The `*** Keywords ***` section allows you to define reusable **User Keywords**, which are made from other keywords. These are only available locally within the same suite but help improve the modularity and readability of tests.

### Names
Keyword names should be descriptive, concise, and follow clear naming conventions. This improves test clarity and maintainability.

### Documentation
Each keyword should have clear documentation explaining its purpose, expected arguments, and behavior. Good documentation is crucial for users and future maintainers.

### Keyword Arguments
- **Mandatory Arguments**: These must be provided when the keyword is called.
- **Optional Arguments**: These include default values and can be omitted if unnecessary.
- **Embedded Arguments**: Keywords can also embed arguments directly in their names, especially in behavior-driven specifications.

### RETURN Statement
The `RETURN` statement in Robot Framework is used to return values from a keyword to be used in further test steps or stored in variables. This allows test execution to pass data between different steps and keywords.

## Resource Files

### File Type & Structure
**Resource files** allow you to centralize keywords, variables, and settings across multiple suites. These files have the extension `.resource` and are commonly used to define reusable components.

- **Resource Files**: Include sections like `*** Keywords ***`, `*** Variables ***`, and `*** Settings ***`, similar to suite files but are not parsed for tests or tasks.

### Designing Reusable Keywords
When designing reusable keywords in resource files, ensure they are generic and parameterized to fit multiple contexts. This promotes reuse and reduces redundancy in automation.

### Best Practices
Avoid circular imports when organizing resource files and libraries. Ensure resource files are modular, focusing on specific domains or functionalities to make them easier to maintain.

## Documentation

Robot Framework provides tools to generate keyword documentation using the `libdoc` tool. This automatically generates structured documentation for libraries and resource files, making it easier to reference keyword functionality during development.
