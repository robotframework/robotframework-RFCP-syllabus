# Chapter 3: Keyword Design, Variables, and Resource Files

This chapter introduces the essential components of Robot Framework: **Keywords**, **Variables**, and **Resource Files**. These building blocks allow users to create reusable, structured, and maintainable automation solutions. Understanding these concepts is critical for developing efficient automation in both testing and RPA contexts.




## Resource File Structure

Resource Files in Robot Framework are used to store reusable keywords,
variables, and organize imports of other resource files and libraries.
See [Resource Files](Chapter_2_Getting_Started.md#resource-files) for an introduction to Resource Files.

Resource Files are typically used in many suites to share common keywords and variables across different tests|tasks.
Therefore, they should be designed to be modular, reusable, and maintainable.
Keywords and variables defined in one resource file should therefore
be related to each other to store similar functionality or data.
This relation can be based on a common purpose, a common abstraction layer, or a common context.

For example all user keywords and variables that do control
or test a specific part or dialog of an application could be stored together in one resource file.

Resource files are imported using the `Resource` setting in the
`*** Settings ***` section so that the path to the resource file
is given as an argument to the setting.
The extension for resource files shall be `.resource`.

Unless the resource file is given as an absolute path,
it is first searched relatively to
the directory where the importing file is located.
If the file is not found there, it is then searched from the
directories in Python's module search path.
See [Import Paths](Chapter_2_Getting_Started.md#import-paths) for more details.



### Sections in Resource Files

See [Sections and Their Artifacts](Chapter_2_Getting_Started.md#sections-and-their-artifacts) for an introduction to sections in suites.

Other than in suites, resource files do not allow the `*** Test Cases ***` or `*** Tasks ***` sections.

The allowed sections in recommended order are:
- `*** Settings ***` to import libraries and other resource files.

  This section has common but also different settings available than in suites.

  Common settings are:
  - `Library` to import libraries.
  - `Resource` to import other resource files.
  - `Variables` to import variable files.
  - `Documentation` to provide documentation for the resource file.

  Additional settings are:
  - `Keyword Tags` to set tags for all keywords in the resource file.
    defining and using Keyword tags is not part of this syllabus.

  Other settings available in suites are not available in resource files.

- `*** Variables ***` to define variables.

  See [`*** Variables ***` Section](#-variables--section) for more details about defining variables in resource files.
  Other than in suites these variables can be used outside this resource file, if it is imported in another file.
- `*** Keywords ***` to define user keywords.

  See [`*** Keywords ***` Section](#-keywords--section) for more details about defining keywords in resource files.
  Other than in suites these keywords can be used outside this resource file, if it is imported in another file.

- `*** Comments ***` is used to store comments and is ignored and not parsed by Robot Framework. (same as in suites)




## Variables

<!-- LO: Understand how variables in Robot Framework are used to store and manage data (K2) -->
> [!IMPORTANT]
> LXX Understand how variables in Robot Framework are used to store and manage data (K2)
> LXX Recall the relevant five different ways to create and assign variables(K1)

Variables in Robot Framework are used to store values that can be referenced and reused throughout suites, test cases, tasks, and keywords.
They help manage dynamic data or centrally maintained data, reducing hardcoding in multiple locations and making automation flexible.

Variables can be created and assigned in various ways, such as:
- Definition in the `*** Variables ***` section in suites or resource files. (see [`*** Variables ***` Section](#-variables--section))
- Capturing return values from keywords. (see [Return values from keywords](#return-values-from-keywords))
- Inline assignment using the `VAR` statement. (see [`VAR` statement](#var-statement))
- As arguments passed to keywords. (see [User Keyword Arguments](#user-keyword-arguments))
- By the command line interface of Robot Framework. (See [Advanced Execution Control](Chapter_4_Advanced_Structuring_and_Execution.md#advanced-execution-control))
- (*) By internal implementation of library keywords.
- (*) By importing variables from variable files.

(*) These methods are not part of this syllabus.

Beside variables created by the user, Robot Framework also supports **Built-in Variables** that are explained in the [Built-in Variables](Chapter_5_Exploring_Advanced_Constructs.md#built-in-variables) chapter.



### Variable Syntax and Access Types

> [!IMPORTANT]
> LXX Recall the four syntactical access types to variables with their prefixes (K1)
> LXX Recall the basic syntax of variables (K1)

Variables in Robot Framework are defined by three attributes:
- **Prefix**: `$`, `@`, or `&` to define the access type to the variable. (`%` for environment variables)
- **Delimiter**: `{}` to enclose the variable name.
- **Variable Name**: The string that addresses the variable. i.e. just the `variable_name` or more advanced access ways.

Variable names are case-insensitive and as keywords, containing single spaces and underscores are ignored when matching variable names.

In case these prefixes followed by a curly brace opening (`${`) should be used as characters in a normal string and not as a variable,
they must be escaped by a backslash like `\${` to be treated as text rather than a variable start.

Robot Framework, implemented in Python, can work with any object stored in variables, and syntactically distinguishes three types of accessing variables:
- **Scalar Variables**: Store values as a single entity and are represented by the dollar-syntax `${variable_name}`.
- **List-Like Variables**: Store multiple values in a list-like structure. They are created using the at-syntax `@{list-variable_name}`.
- **Dictionary-Like Variables**: Store key-value pairs in a dictionary-like structure. They are created using the ampersand-syntax `&{dictionary-variable_name}`.

These three different syntactical handling methods allow the users to create and handle lists and dictionaries natively in Robot Framework.
However, these prefixes just define the access type to the variable, and the actual data stored in the variable can be of any type, including strings, numbers, lists, dictionaries, or even objects.

When creating variables, different syntax is used to define the type of the variable as described in the next sections,
but when accessing the variable, the scalar variable syntax with a dollar sign `$` as the prefix is used in most cases.
More details about list-like and dictionary-like variables,
and when to use `@` or `&` when accessing these variables,
can be found in the [Advanced Variables](Chapter_5_Exploring_Advanced_Constructs.md#advanced-variables) chapter.


Additionally to these variable types, Robot Framework also supports access to environment variables, which can be accessed using the syntax `%{ENV_VAR_NAME}` respectively.
<!-- TODO fix the link -->



### `*** Variables ***` Section

> [!IMPORTANT]
> LXX Create variables in the Variables section (K3)
> LXX Use the correct variable prefixes for assigning and accessing variables. (K3)

Variables can be defined in the `*** Variables ***` section of a suite file or resource file
and used across the suite where they were defined, or
in case they are defined in a Resource File, in any file that has imported that Resource File.

This section is typically used to define constants or to initialize variables that may be re-assigned during execution and more globally used.

Variables created in this section:
- are not indented,
- must be created either as `scalar ($)`, `list-like (@)`, or `dictionary-like (&)` variables,
- can be followed by an optional single space and equal sign (`=`) to improve readability,
- are separated from their following value(s) by multiple spaces,
- can be defined in multiple lines using the `...` syntax.
- have a **suite scope** in the suite created or imported to.

Because two or more spaces are used to separate elements in a row,
all values are stripped of leading and trailing spaces, identical to arguments of keyword calls (see [Writing Test|Task and Calling Keywords](Chapter_2_Getting_Started.md#writing-testtask-and-calling-keywords)).

Variable values in Robot Framework can include other variables, and their values will be concatenated at runtime when the line is executed.
This means that when a variable is used within another variable's value, the final value is resolved by replacing the variables with their actual content during execution.

Variables defined in the `*** Variables ***` section are recommended to be named in uppercase to distinguish them from local variables defined in test cases or keywords.


#### Scalar Variable Definition

> [!IMPORTANT]
> LXX Create and assign scalar variables (K3)
> LXX Understand how multiple lines can be used to define scalar variables (K2)

Example of creating scalar variables:
```robotframework
*** Variables ***
${NAME}       Robot Framework
${VERSION}    8.0
${TOOL}       ${NAME} | version: ${VERSION}
```

The variable `${TOOL}` will be resolved to `Robot Framework | version: 8.0` at runtime.

If the value of a scalar variable is long, you can split it into multiple lines to improve readability using the `...` syntax.
By default, the lines are concatenated with a space, but a custom separator, defined by lowercase `separator=` followed by the separator value (e.g., newline `separator=\n`), can be used.
Also, no separator, to join them into one string (`separator=`), is possible.
For the rare case that `separator=` should be taken literally as the last part of the variable value,
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


#### Primitive Data Types

> [!IMPORTANT]
> LXX Understand how to access primitive data types (K2)

Robot Framework does support primitive data types as part of the syntax.

These are:
- **Strings**: a sequence of unicode characters.
- **Integers**: whole numbers (negative/positive).
- **Floats**: numbers with a decimal point (negative/positive).
- **Booleans**: `${True}` or `${False}`.
- **None**: a special value representing the absence of a value.

Except for Strings, which are defined without any quotation or enclosure,
the other primitive data types are defined by using the scalar variable syntax `${variable_value}`.

These values are case-insensitive and can be used in any context where a variable is accepted.

Example:
```robotframework
*** Variables ***
${STRING}            This is a string
${STILL_STRING}      8270    # These are the four characters 8, 2, 7, and 0
${INTEGER}           ${42}
${FLOAT}             ${3.14}   # Dot is used as decimal separator
${BOOLEAN}           ${True}   # Case-insensitive
${NOTHING}           ${NONE}
${EMPTY_STRING}
${ANSWER}            The answer is ${INTEGER}    # This will be 'The answer is 42'
```

> [!TIP]
> When using other types than strings and concatenating them with a string, the other value will be converted to a string before concatenation.


#### List Variable Definition

List variables store multiple values and are defined using the at-syntax `@{variable_name}`.
You can define as many values as needed, with each additional value
separated by multiple spaces or line continuation using the `...` syntax.

Example:
```robotframework
*** Variables ***
@{NAMES}        Matti       Teppo
@{EMPTY_LIST}
@{NUMBERS}      one         two      three
...             four        five     six
```

Single values of list-like variables can be accessed by the dollar-syntax (`$`) followed by their index in square brackets (`[]`),
starting with 0, like `${NAMES}[0]` for `Matti` and `${NAMES}[1]` for `Teppo`.

Example:
```robotframework
*** Test Cases ***
List Example
    Log    First Name: ${NAMES}[0]    # Logs 'First Name: Matti'
    Log    Second Name: ${NAMES}[1]   # Logs 'Second Name: Teppo'
```


#### Dictionary Variable Definition

Dictionary variables store key-value pairs and use the ampersand-syntax `&{variable_name}`.
Key-value pairs are assigned using the `key=value` format.

Example:
```robotframework
*** Variables ***
&{USER1}        name=Matti     address=xxx         phone=123
&{USER2}        name=Teppo     address=yyy         phone=456
&{COMBINED}     first=1        second=${2}         third=third
&{EMPTY_DICT}
```
You can escape equal signs in keys with a backslash (`\=`) to prevent misinterpretation.

Values of all dictionary-like variables can be accessed by the dollar-syntax (`$`) followed by the key in square brackets (`[]`),
like `${USER1}[name]` for `Matti` and `${USER1}[address]` for `xxx`.
No quotes are needed around the key name.

If dictionaries are created in Robot Framework by using the `&{}` syntax, they are **ordered**,
which means they persist assignment order of the key-value pairs and can be iterated,
and **support attribute access**, allowing to reference dictionary keys using syntax like `${USER1.name}`.
Dictionaries or dictionary-like values can also be created by keywords
and might have a different data type and therefore can not be accessed by attribute access.

Variables can also be used to set the accessed key dynamically by using the variable in the square brackets.
Assuming `${key}` contains the value `phone`, `${USER1}[${key}]` would resolve to `123`.



### Return values from Keywords

> [!IMPORTANT]
> LXX Be able to assign return values from keywords to variables (K2)

In Robot Framework, values returned by keywords can be assigned to variables,
enabling data to be passed between different keywords.

These variables have a **local scope** in the block where they are created,
i.e., in the test|task or keyword where the assignment is made.
If a variable has already been defined in the `*** Variables ***` section and therefore has a **suite scope**,
it will just be locally overwritten/masked by the new variable with the same name.
Once the block is left, the original variable with its original value is accessible again.
See [Variable Scopes](Chapter_5_Exploring_Advanced_Constructs.md#variable-scope) for more information.

An assignment is always constructed by the variable or variables that shall be assigned to,
followed by an optional equal sign (`=`) and the keyword call that
shall be executed and will return the value(s) to be assigned.


#### Assigning to Scalar Variables

In the simplest case, a keyword returns exactly one value,
which can be assigned to a scalar variable using the dollar-syntax `${variable_name}`.

```robotframework
*** Settings ***
Library    OperatingSystem




*** Test Cases ***
Returning Example
    ${server_log} =    Get File    server.log
    Should Contain    ${server_log}    Successfully started
```

In this example, the content of the file `server.log`, which is returned by the `Get File` keyword, is stored in the `${server_log}` variable and later verified by the `Should Contain` keyword.
Although the `=` sign is optional, its usage makes the assignment visually more explicit.

If keywords return multiple values, still the scalar variable syntax with `${var}` is used.
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

In cases where a keyword returns a defined number of values, they can be assigned to multiple scalar variables in one assignment.
In the following example, the keyword `Split Path` returns two values, the path and the file name.

```robotframework
*** Settings ***
Library    OperatingSystem


*** Test Cases ***
Multiple Return Example
    ${path}    ${file} =    Split Path    server/logs/server.log
    Should Be Equal    ${path}    server/logs
    Should Be Equal    ${file}    server.log
```



### `VAR` Statement

> [!IMPORTANT]
> LXX Understand how to create variables using the VAR statement (K2)

The `VAR` statement in Robot Framework is a way to create
and assign values to variables directly within a test|task or keyword during execution.
While the `*** Variables ***` section allows defining variables for a whole suite,
the `VAR` statement is used within the body of a test|task or keyword,
allowing more control over when and where the variable is created.

Example use cases for the `VAR` statement:
- **Combining values during test|task execution**: Variables that shall have content based on information gathered during test|task execution.
- **Conditional assignments**: In some scenarios, it may be necessary to assign different values to a variable based on conditions that occur during test|task execution.
- **Initialization of variables**: In a FOR-loop (see [FOR-Loops](Chapter_5_Exploring_Advanced_Constructs.md#for-loops)), it may be necessary to collect information and add it to a list. This list can be initialized with the `VAR` statement as an empty list before the loop starts and then filled with values during the loop.

By default, variables created with the `VAR` statement have a **local scope** in the test|task, or keyword where they are defined.
This means that they cannot be accessed outside that specific test|task or keyword, ensuring that variables do not interfere with other parts of the test|task suite.

However, the `VAR` statement can also be used to create variables with a broader scope, such as suite-wide or global variables, when needed.
These variables can then be accessed outside of the test|task or keyword where they were originally created.

For more details on this topic, refer to the section on [Variable Scope](Chapter_5_Exploring_Advanced_Constructs.md#variable-scope).



### Variable Scope Introduction

> [!IMPORTANT]
> LXX Recall the different scopes of variables in Robot Framework (K1)
> LXX Understand how `local` and `suite` scope variables are created by default (K2)

In Robot Framework, variables have different scopes, which define where they can be accessed and used. Understanding the scope of variables is crucial for managing data within tests and keywords.

1. **Local Scope**: Variables created within a test|task or keyword, by assignment of return values or `VAR` statement, are by default local to that specific test|task or keyword. They cannot be accessed outside of that block and are destroyed once the block is completed. This means that a local variable created in one test|task cannot be accessed inside the body of a called keyword or a subsequent test|task.

2. **Test|Task Scope**: Variables with test|task scope are available throughout the execution of a specific test|task. They can be created within the test|task by, for example, `VAR` statement inside the test|task body with a special `scope=` setting or called library keyword. They are accessible in all called keywords during the execution of this particular test|task.

3. **Suite Scope**: Variables defined at the suite level, for example in the `*** Variables ***` section or through resource files, are available to all tests|tasks and keywords called within the suite.

4. **Global Scope**: Variables with global scope are available throughout the entire test execution, across all suites, inside all tests|tasks and keywords. These variables can be set by command-line arguments or `VAR` statement with a special `scope=` setting and should be used cautiously to avoid conflicts and ensure test|task independence.

Examples and more details on variable scope can be found in the [Variable Scope](Chapter_5_Exploring_Advanced_Constructs.md#variable-scope) section.




## User Keyword Definition & Arguments

User Keywords in Robot Framework allow users to create their own
keywords by combining existing keywords into reusable higher-level actions.
They help improve readability, maintainability, and modularity in
automation by abstracting complex sequences into named actions.
User Keywords are defined syntactically very similarly to tests|tasks
and are defined in the `*** Keywords ***` section of a suite file or resource file.



### `*** Keywords ***` Section

The `*** Keywords ***` section of suite and resource files
is indentation-based similar to the `*** Test Cases ***` section.
The user keywords defined are unindented, while their body implementation is indented by multiple spaces.

See these sections for more details about
[Basic Test/Task Syntax](Chapter_2_Getting_Started.md#basic-testtask-syntax)
and [Writing Test|Task and Calling Keywords](Chapter_2_Getting_Started.md#writing-testtask-and-calling-keywords).

This section can be part of suites or resource files.
While keywords defined in suites can solely be used in the suite they are defined in,
keywords defined in resource files can be used in any suite that imports these resource files.
<!--
TODO: find a better example.
I do not want to have third-party libraries in the syllabus like SeleniumLibrary or Browser.

Example of defining a user keyword:
```robotframework
*** Keywords ***
Login To System

    Input Text    username_field    ${USERNAME}
    Input Text    password_field    ${PASSWORD}
    Click Button  login_button
```
-->

As a reference for how defined keywords are documented, see [Keyword Interface and Documentation](Chapter_2_Getting_Started.md#keyword-interface-and-documentation).



### User Keyword Names

The names of User Keywords should be descriptive and clear, reflecting the purpose of the keyword.
Well-named keywords make tests more readable and easier to understand.
Like test case names, keyword names are case-insensitive and can include spaces.
Also spaces and underscores will be ignored when matching keyword names.

So the keywords `Login To System`, and `log_into_system` are considered identical.
By default, if not explicitly defined by the library developers, all Library Keywords are named in **Title Case** with capital letters at the beginning of each word, and spaces between words.

Project may choose a different naming convention for User Keywords, but it is recommended to be consistent across the project for User Keyword names.

They are defined without indentation, and the subsequent lines until the next unindented line are considered the body of the keyword.
The following topics explain how to structure the body of a keyword.



### User Keyword Settings

> [!IMPORTANT]
> LXX Recall all available settings and their purpose for User Keywords (K1)

User keywords can have similar settings as test cases,
and they have the same square bracket syntax separating them from keyword calls.
All available settings are listed below and explained in this section or in sections linked below.

- `[Documentation]` Used for setting user keyword documentation. (see [Keyword Documentation](#keyword-documentation))
- `[Arguments]` Specifies user keyword arguments to hand over values to the keyword. (see [Keyword Arguments](#keyword-arguments))
- `[Setup]`, `[Teardown]` Specify user keyword setup and teardown. (see [Teardowns (Suite, Test|Task, Keyword)](Chapter_4_Advanced_Structuring_and_Execution.md#teardowns-suite-testtask-keyword))
- `[Tags]` (*) Sets tags for the keyword, which can be used for filtering in documentation and attribution for post-processing results.
- `[Timeout]` (*) Sets the possible user keyword timeout.
- `[Return]` (*) Deprecated.

(*) The application of these settings are not part of this syllabus.



### User Keyword Documentation

Each keyword can have a `[Documentation]` setting to provide a description of the keyword's purpose and usage.

The first logical line, until the first empty row, is used as the *short documentation* of the keyword in the `log.html` test protocol..

Proper documentation helps maintain clarity, especially in larger projects.
It is a good practice to document what the keyword does,
any important notes regarding its usage,
and additional information about the arguments it accepts if not self-explanatory.

<!--
TODO

Should we describe simple syntax?
Where? Here? or in a separate chapter in Advanced Constructs?

-->



### User Keyword Arguments

User Keywords can accept arguments, which make them more dynamic and reusable in various contexts.
The `[Arguments]` setting is used to define the arguments a user keyword expects.

See also Chapter 2 [Keyword Arguments](Chapter_2_Getting_Started.md#keyword-arguments) for an introduction to argument kinds.

Arguments are defined by `[Arguments]` followed by the argument names separated by multiple spaces in the syntax of scalar variables.

Unlike Library Keywords, User Keywords cannot define argument types like `string`, `number`, etc., as described in the [Argument Types](Chapter_2_Getting_Started.md#argument-types) section.


#### Defining Mandatory Arguments

Example that defines a keyword with two arguments:
```robotframework
*** Keywords ***
Verify File Contains
    [Documentation]    Verifies that a file contains a specific text.
    ...
    ...    The keyword opens the file specified by the file path and checks if it contains the expected content.
    [Arguments]    ${file_path}    ${expected_content}
    ${server_log} =    Get File    ${file_path}
    Should Contain    ${server_log}    ${expected_content}
```

All variables, the arguments, and the return value, are local to the keyword body and do not exist outside of the keyword.

This keyword may be called in a test case like this:
```robotframework
*** Test Cases ***
Check Server Log
    Verify File Contains    server.log    Successfully started
```

In that case, the argument `${file_path}` is assigned the value `server.log`, and `${expected_content}` is assigned the value `Successfully started`.


#### Defining Optional Arguments

Optional arguments are defined by assigning default values to them in the `[Arguments]` setting.
All optional arguments must be defined after all mandatory arguments.

Default values are assigned by the equal sign (`=`)
followed by the default value without any spaces like `${ignore_case}=True`.

The assigned default values may also contain or be earlier defined variables, i.e., in the `*** Variables ***` section.

Example:
```robotframework
*** Keywords ***
Verify File Contains
    [Documentation]    Verifies that a file contains a specific text.
    ...
    ...    The keyword opens the file specified by the ``file_path``
    ...    and checks if it contains the ``expected_content``.
    ...
    ...    By default, the verification is case-insensitive
    ...    but can be changed with the optional argument ``ignore_case``.
    [Arguments]    ${file_path}    ${expected_content}    ${ignore_case}=True
    ${server_log} =    Get File    ${file_path}
    Should Contain    ${server_log}    ${expected_content}    ignore_case=${ignore_case}
```


#### Embedded Arguments

In Robot Framework, **embedded arguments** allow the inclusion
of arguments directly within the keyword name itself.
This approach is particularly useful for creating
**Behavior-Driven Development (BDD)** style test cases or for
making keyword names more readable and meaningful.

With embedded arguments, placeholders are used within the keyword name,
which get replaced by actual values when the keyword is executed.
These arguments are written as scalar variables with dollar and curly braces
like the following keyword.

```robotframework
*** Keywords ***
The file '${file_name}' should contain '${expected_content}'
    ${file_content} =    Get File    ${file_name}
    Should Contain    ${file_content}    ${expected_content}
```

When this keyword is called, the placeholders `${file_name}`
and `${expected_content}` are replaced by the actual values provided in the keyword call.
So `${file_name}` = `server.log` and
`${expected_content}` = `Successfully started` in the following example:

```robotframework
*** Test Cases ***
Test File Content
    Given the server log level is 'INFO'
    When the server is started successfully
    Then the file 'server.log' should contain 'Successfully started'
```

Quotes around the embedded arguments behave as any other characters
as part of the keyword name but may help to improve readability
and bette distinguish the embedded arguments from the rest of the keyword name.

Embedded arguments can be problematic when the keyword name becomes overly long or complicated.
Therefore a mix of embedded arguments and regular arguments is also possible.
This can help with more complex data structures or to improve readability.

Example of mixed embedded and regular arguments:
```robotframework
*** Test Cases ***
Embedded and normal arguments
    Given the user is on the pet selection page
    When the user adds    2     cat fish
    And the user set    3     dogs
    And the user removes    1     dogs
    Then the number of cat fish should be    2
    And the number of dogs should be    count=2

*** Keywords ***
the number of ${animals} should be
    [Arguments]    ${count}
    ${current_count}    Get Animal Count    ${animals}
    Should Be Equal As Numbers    ${current_count}    ${count}

the user ${action}
    [Arguments]    ${amount}   ${animal}
    IF    '${action}' == 'adds'
        Add Items To List    animal_list    ${animal}    ${amount}
    ELSE IF    '${action}' == 'removes'
        Remove Items From List    animal_list    ${animal}    ${amount}
    ELSE IF    '${action}' == 'set'
        Set Amount To List    animal_list    ${animal}    ${amount}
    ELSE
        Skip    Test skipped due to invalid action
    END
```


#### Other Argument Kinds

Other argument kinds like **Named-Only Arguments**, **Free Named Arguments**, or
**Variable Number of Positional Arguments** should be known,
but their definition and usage are not part of this syllabus.



### RETURN Statement

The `RETURN` statement (case-sensitive) in Robot Framework is used to return values from a User Keyword
to be used in further test steps or stored in variables.
This allows test execution to pass data between different keywords.

It can return one or more values.
If more than one value is returned, they can either be assigned
to multiple variables or stored as a list in a single variable.

Example:
```robotframework
*** Keywords ***
Get File Name From Path
    [Arguments]    ${file_path}
    ${path}    ${file} =    Split Path    ${file_path}
    RETURN    ${file}
```

The `RETURN` statement is normally used at the end of a keyword definition,
because it will end the keyword execution at that point and return to the caller.
This behavior can be used to conditionally end a keyword execution early together with an `IF` or `TRY-EXCEPT` statement.

The `RETURN` statement cannot return a value from a keyword call directly like in other programming languages.
The return value must be stored in a variable first and then be returned by the `RETURN` statement.



### Keyword Conventions


<!--
TODO:

Should we have that  chapter???
Opinions?
And if, is this want we want to ask the participants to know?

-->

When defining User Keywords, it is recommended to follow conventions to ensure consistency and readability across the project.
These may be taken from community best practices or defined within the project team.

Keyword Conventions should contain agreements on:
- **Naming Case**: Which case shall be used? (i.e. `Title Case`, `camelCase`, `snake_case`, `kebab-case`, or `sentence case`, etc. ) (from a readability perspective, `Title Case` or `Sentence case` are recommended)
- **Grammatical Form/Mood**: Which form shall be used for actions and verifications/assertions? (i.e. `Imperative` for both like `Click Button`, `Verify Text`. Or i.e. `Declarative`/`Indicative` for assertions like `Text Should Be`, `Element Should Be Visible`)
- **Word/Character Count**: How man words or characters shall be used in a keyword name? (i.e. less than 7 words)
- **Argument Count**: How many arguments shall a keyword have? (i.e. less than 5)
- **Documentation**: How shall the documentation be structured and which information shall be included or is it required at all?




## Advanced Importing of Keywords and Naming Conflicts

As stated before, it is possible to organize imports and available keywords in Robot Framework by using Resource Files.
By default, all keywords or variables created or imported in a resource file are available to those suites and files that are importing that higher-level resource file.

This can lead to complex import hierarchies or the importing of libraries multiple times, which should be avoided.

Due to this mechanism, the number of keywords available to a suite can be quite large, and naming conflicts, especially with keywords from third-party keyword libraries, can occur. These conflicts need to be resolved.


Some keyword libraries have the option to be configured to change their behavior, which may also change the available keywords they offer.



### Importing Hierarchies

Let's assume the following libraries and resource files shall be used:
- **Library**    `A`
- **Library**    `B`
- **Library**    `Operating System`
- **Resource**    `tech_keywordsA.resource`
- **Resource**    `tech_keywordsB.resource`
- **Resource**    `variables.resource`
- **Resource**    `functional_keywords.resource`

The `*** Settings ***` section of a suite file could look like this:

**tech_keywordsA.resource:**
```robotframework
*** Settings ***
Library    A
Library    Operating System
```

**tech_keywordsB.resource:**
```robotframework
*** Settings ***
Library    B
Resource    variables.resource
```

**functional_keywords.resource:**
```robotframework
*** Settings ***
Resource    tech_keywordsA.resource
Resource    tech_keywordsB.resource
```

**suite.robot:**
```robotframework
*** Settings ***
Resource    functional_keywords.resource
```

In this case, the suite `suite.robot` has access to all keywords from all keyword libraries, as well as all variables and user keywords from all resource files.

It should be avoided to import the same library in different places multiple times.
If the exact same library with the same configuration (see the next section) is imported again, it will be ignored because Robot Framework already has it in its catalog.
However, if the library is imported with different configurations, it may be imported multiple times, but depending on the library’s internal behavior, the new configuration may have no effect on the existing keywords, or other side effects may occur.


Therefore, the recommendation is to import libraries only in one resource file with one configuration and use that import file in all places where the library is needed to make its keywords available.



### Library Configuration

Some libraries offer or need additional configuration to change their behavior or make them work.
This is typically global behavior like internal timeouts, connection settings to systems, or plugins that should be used.

If this is possible, the library documentation will have an `Importing` section directly before the list of keywords.
It is strongly recommended to have all these possible arguments to the library itself defined with default values;
however, that is not always possible.

Library importing arguments are used in the same way as keyword calls with arguments.
If possible, it is recommended to set the arguments as named arguments to make usage more readable and future-proof.
These arguments follow the Library path or name, separated by multiple spaces.

Example with the [Telnet library](https://robotframework.org/robotframework/latest/libraries/Telnet.html#Importing):
```robotframework
*** Settings ***
Library    Telnet    newline=LF    encoding=ISO-8859-1   # set newline and encoding using named arguments
```

Another example that cannot be used without configuration is the Remote library.
Remote libraries are libraries that are connected remotely via a network connection.
So the actual library is running as a server, and the library `Remote`
is connecting as a client and connects the keywords of the server to Robot Framework.
Therefore, it needs the server's address and port to connect to.
Because there may be more than one Remote Library, we need to define the used library name as well.
```robotframework
*** Settings ***
Library    Remote    uri=http://127.0.0.1:8270       AS    EmbeddedAPI
Library    Remote    uri=http://remote.devices.local:8270       AS    DeviceAPI
```
In this example, two remote libraries are imported.
The upper-case `AS` statement is used to define the name of the library that shall be used in the suite.

They are now available as `EmbeddedAPI` and `DeviceAPI` in the suite.



### Naming Conflicts

Naming conflicts can occur when two or more keywords have the same name.
If a proper IDE is used, that can be detected, and users can be warned after they have created a duplicate user keyword name.

Project teams may not have this influence over imported third-party libraries that have the same keyword names.
Due to the global keyword namespace in Robot Framework, it may be unavoidable to have naming conflicts.

One example of these kinds of conflicts is the two libraries
[`Telnet`](https://robotframework.org/robotframework/latest/libraries/Telnet.html)
and [`SSHLibrary`](https://marketsquare.github.io/SSHLibrary/SSHLibrary.html),
which at the current time both have multiple keywords with the same name.
This is because they both work with network connections and have similar functionality.
Keywords like `Open Connection`, `Login`, `Read`, `Close Connection`, and many more are common.

These conflicts cannot be resolved by Robot Framework if they are coming from the same kind of source, like two libraries.
The error message will be like this:
```plain
Multiple keywords with name 'Open Connection' found. Give the full name of the keyword you want to use:
    SSHLibrary.Open Connection
    Telnet.Open Connection
```

As proposed by Robot Framework, to resolve naming conflicts,
the easiest way to mitigate this is to use the full names of the keywords,
including the library name, when calling them.

Example:
```robotframework
*** Test Cases ***
Using Telnet and SSHLibrary
    Telnet.Open Connection
    Telnet.Login    ${username}    ${password}
    ${telnet_init} =    Telnet.Read Until Prompt
    Telnet.Close Connection

    SSHLibrary.Open Connection    ${host}    ${port}
    SSHLibrary.Login    ${username}    ${password}
    ${ssh_init} =    SSHLibrary.Read Until Prompt
    SSHLibrary.Close Connection
```

When using full names for libraries that were imported with the `AS` statement,
the name of the library is used as a prefix to the keyword name.
```robotframework
*** Test Cases ***
Using Remote Libraries
    EmbeddedAPI.Close Contact   15
    DeviceAPI.Verify Contact    15    1
```