
# 3.2 Variables


::::lo[Learning Objectives]

:::K2[LO-3.2-1]

Understand how variables in Robot Framework are used to store and manage data

:::

:::K1[LO-3.2-2]

Recall the relevant five different ways to create and assign variables

:::

::::


Variables in Robot Framework are used to store values that can be referenced and reused throughout suites, test cases, tasks, and keywords.
They help manage dynamic data or centrally maintained data, reducing hardcoding in multiple locations and making automation flexible.

Variables can be created and assigned in various ways, such as:
- Definition in the `*** Variables ***` section in suites or resource files. (see [3.2.2 `*** Variables ***` Section](chapter-03/02_variables.md#322--variables--section))
- Capturing return values from keywords. (see [3.2.3 Return values from Keywords](chapter-03/02_variables.md#323-return-values-from-keywords))
- Inline assignment using the `VAR` statement. (see [3.2.4 `VAR` Statement](chapter-03/02_variables.md#324-var-statement))
- As arguments passed to keywords. (see [3.3.5 User Keyword Arguments](chapter-03/03_user_keyword.md#335-user-keyword-arguments))
- By the command line interface of Robot Framework. (See [5.1.3 Global Variables via Command Line](chapter-05/01_advanced_variables.md#513-global-variables-via-command-line))
- (*) By internal implementation of library keywords.
- (*) By importing variables from variable files.

(*) These methods are not part of this syllabus.

Beside variables created by the user, Robot Framework also supports **Built-in Variables** that are explained in the [5.1.6 Built-In Variables](chapter-05/01_advanced_variables.md#516-built-in-variables) chapter.



## 3.2.1 Variable Syntax and Access Types

::::lo[Learning Objectives]

:::K1[LO-3.2.1-1]

Recall the four syntactical access types to variables with their prefixes

:::

:::K1[LO-3.2.1-2]

Recall the basic syntax of variables

:::

::::

Variables in Robot Framework are defined by three attributes:
- **Prefix**: `$`, `@`, or `&` to define the access type to the variable. (`%` for environment variables)
- **Delimiter**: `{}` to enclose the variable name.
- **Variable Name**: The string that addresses the variable. i.e. just the `variable_name` or more advanced access ways.

Variable names are case-insensitive and as keywords, containing single spaces and underscores are ignored when matching variable names.
Robot Framework supports Unicode and allows the use of special characters and even Emojis in variable names.

In case these prefixes followed by a curly brace opening (`${`) should be used as characters in a normal string and not as a variable,
they must be escaped by a backslash like `\${` to be treated as text rather than a variable start.

Robot Framework, implemented in Python, can work with any object stored in variables, and syntactically distinguishes four types of accessing variables:
- **Scalar Variables**: Store values as a single entity and are represented by the dollar-syntax `${variable_name}`.
- **List Variables**: Store multiple values in a list structure. They are created using the at-syntax `@{list_variable_name}`.
- **Dictionary Variables**: Store key-value pairs in a dictionary structure. They are created using the ampersand-syntax `&{dictionary_variable_name}`.
- **Environment Variables** (read-only): Read access to environments variables of the operating system unsing the percent-syntax `%{ENV_VAR_NAME}`.

These different syntactical handling methods allow the users to also create and handle lists and dictionaries natively in Robot Framework.
However, these prefixes just define the access type to the variable, and the actual data stored in the variable can be of any type, including strings, numbers, lists, dictionaries, or even objects.

When creating variables, different syntax is used to define the type of the variable as described in the next sections,
but when accessing the variable, the scalar variable syntax with a dollar sign `$` as the prefix is used in most cases.
More details about list-like and dictionary-like variables,
and when to use `@` or `&` when accessing these variables,
can be found in the [5.1 Advanced Variables](chapter-05/01_advanced_variables.md#51-advanced-variables) chapter.



## 3.2.2 `*** Variables ***` Section

::::lo[Learning Objectives]

:::K3[LO-3.2.2-1]

Create variables in the Variables section

:::

:::K3[LO-3.2.2-2]

Use the correct variable prefixes for assigning and accessing variables

:::

::::

Variables can be defined in the `*** Variables ***` section within both suite files and resource files.

- Variables defined in a **suite file** are accessible throughout that specific suite, enabling consistent use across all test|tasks, and keywords executed within that suite.
- Variables defined in a **resource file**, however, are accessible in all files that import the resource file directly or indirectly by imports of other resource files. This allows for the sharing of variables across multiple suites or files while maintaining modularity and reusability.

This section is evaluated before any other section in a resource or suite file,
and therefore variables defined here can be used in any other section of the file.

This section is typically used to define constants or to initialize variables that may be re-assigned during execution and more globally used.

Variables created in this section:
- are not indented,
- must be created either as `scalar ($)`, `list-like (@)`, or `dictionary-like (&)` variables,
- can be followed by an optional single space and equal sign (`=`) to improve readability,
- are separated from their following value(s) by multiple spaces,
- can be defined in multiple lines using the `...` syntax.
- have a **suite scope** in the suite created or imported to.

Because two or more spaces are used to separate elements in a row,
all values are stripped of leading and trailing spaces, identical to arguments of keyword calls (see [2.6 Writing Test|Task and Calling Keywords](chapter-02/06_writing_test.md#26-writing-testtask-and-calling-keywords)). See [2.2.4 Escaping of Control Characters](chapter-02/02_suitefile_syntax.md#224-escaping-of-control-characters) to be able to define these spaces.

Variable values in Robot Framework can include other variables, and their values will be concatenated at runtime when the line is executed.
This means that when a variable is used within another variable's value, the final value is resolved by replacing the variables with their actual content during execution.

Variables defined in the `*** Variables ***` section are recommended to be named in uppercase to distinguish them from local variables defined in test cases or keywords.


### 3.2.2.1 Scalar Variable Definition

::::lo[Learning Objectives]

:::K3[LO-3.2.2.1-1]

Create and assign scalar variables

:::

:::K2[LO-3.2.2.1-2]

Understand how multiple lines can be used to define scalar variables

:::

::::

Example of creating scalar variables:
```robotframework
*** Variables ***
${NAME}       Robot Framework
${VERSION}    8.0
${TOOL}       ${NAME}, version: ${VERSION}
```

The variable `${TOOL}` will be resolved to `Robot Framework, version: 8.0` at runtime.

If the value of a scalar variable is long, you can split it into multiple lines for better readability using the `...` syntax. By default, multiple values are concatenated with a space.

You can also define a custom separator by specifying the last value as a lowercase `separator=` followed by the desired separator value (e.g., newline: `separator=\n`). Alternatively, you can use no separator at all by specifying `separator=` to join the values into a single string.

In the rare case that `separator=` should be taken literally as part of the variable value, it must be escaped with a backslash, like `\separator=`, to be treated as text rather than as a separator definition.


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


### 3.2.2.2 Primitive Data Types

::::lo[Learning Objectives]

:::K2[LO-3.2.2.2]

Understand how to access primitive data types

:::

::::

Robot Framework does support primitive data types as part of the syntax.

These are:
- **Strings**: a sequence of unicode characters.
- **Integers**: whole numbers (negative/positive) are written in variable syntax like: `${42}` or `${0}`.
- **Floats**: numbers with a decimal point (negative/positive) are written in variable syntax like: `${3.14}` or `${1.0}`.
- **Booleans**: `${True}` or `${False}`.
- **None**: a special value representing the absence of a value written as `${None}`.

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


### 3.2.2.3 List Variable Definition
::::lo[Learning Objectives]

:::K2[LO-3.2.2.3]

Understand how to set and access data in list variables

:::

::::

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


### 3.2.2.4 Dictionary Variable Definition

::::lo[Learning Objectives]

:::K2[LO-3.2.2.4]

Understand how to set and access data in dict variables

:::

::::

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



## 3.2.3 Return values from Keywords

::::lo[Learning Objectives]

:::K3[LO-3.2.3]

Be able to assign return values from keywords to variables

:::

::::

In Robot Framework, values returned by keywords can be assigned to variables,
enabling data to be passed between different keywords.

These variables have a **local scope** in the block where they are created,
i.e., in the test|task or keyword where the assignment is made.
If a variable has already been defined in the `*** Variables ***` section and therefore has a **suite scope**,
it will just be locally overwritten/masked by the new variable with the same name.
Once the block is left, the original variable with its original value is accessible again.
See [5.1.2 Variable Scopes](chapter-05/01_advanced_variables.md#512-variable-scopes) for more information.

An assignment is always constructed by the variable or variables that shall be assigned to,
followed by an optional equal sign (`=`) and the keyword call that
shall be executed and will return the value(s) to be assigned.


### 3.2.3.1 Assigning to Scalar Variables

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
All values are assigned to the variable as a list of values and can be accessed as described in the [3.2.2.3 List Variable Definition](chapter-03/02_variables.md#3223-list-variable-definition) section.

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



## 3.2.4 `VAR` Statement

::::lo[Learning Objectives]

:::K2[LO-3.2.4]

Understand how to create variables using the VAR statement

:::

::::

The `VAR` statement in Robot Framework is a way to create
and assign values to variables directly within a test|task or keyword during execution.
While the `*** Variables ***` section allows defining variables for a whole suite,
the `VAR` statement is used within the body of a test|task or keyword,
allowing more control over when and where the variable is created.

The `VAR` statement is case-sensitive and is followed by the variable name and an optional equal sign (`=`) and the value(s) to be assigned.
The syntax is very similar to the `*** Variables ***` section.
Scalar variables, lists, and dictionaries are created the same way and multiple values can also be assigned in multiple lines using the `...` syntax.
Strings can be concatenated with the `separator=` syntax as well.

Example:
```robotframework
*** Test Cases ***
Test with VAR
    VAR    ${filename}    test.log
    ${file}    Get File    ${filename}
    ${time}    Get Time
    ${length}    Get Length    ${file}
    VAR    &{file_info}
    ...    name=${filename}
    ...    content=${file}
    ...    time=${time}
    ...    length=${length}
    IF    $login == "matti"
        VAR    &{USER}    name=Matti    address=xxx    phone=123
    ELSE
        VAR    &{USER}    name=Teppo    address=yyy    phone=456
    END
```

Example use cases for the `VAR` statement:
- **Combining values during test|task execution**: Variables that shall have content based on information gathered during test|task execution.
- **Conditional assignments**: In some scenarios, it may be necessary to assign different values to a variable based on conditions that occur during test|task execution.
- **Initialization of variables**: In a FOR-loop (see [5.2.4 FOR Loops](chapter-05/02_control_structures.md#524-for-loops)), it may be necessary to collect information and add it to a list. This list can be initialized with the `VAR` statement as an empty list before the loop starts and then filled with values during the loop.

By default, variables created with the `VAR` statement have a **local scope** in the test|task, or keyword where they are defined.
This means that they cannot be accessed outside that specific test|task or keyword, ensuring that variables do not interfere with other parts of the test|task suite.

However, the `VAR` statement can also be used to create variables with a broader scope, using `scope=`, such as suite-wide or global variables, when needed.
These variables can then be accessed outside of the test|task or keyword where they were originally created.

For more details on this topic, refer to the section on [5.1.2 Variable Scopes](chapter-05/01_advanced_variables.md#512-variable-scopes).



## 3.2.5 Variable Scope Introduction

::::lo[Learning Objectives]

:::K2[LO-3.2.5]

Understand how `local` and `suite` scope variables are created

:::

::::

In Robot Framework, variables have different scopes, which define where they can be accessed and used. Understanding the scope of variables is crucial for managing data within tests and keywords.

- **`LOCAL` Scope**: Variables created within a test|task or keyword, by **assignment of return values**, as keyword arguments or **`VAR`** statement, are by default `LOCAL` to that specific test|task or keyword body.

  They cannot be accessed outside of that block and are destroyed once the block is completed. This means that a local variable created in one test|task can neither be accessed inside the body of a called keyword nor in a subsequent test|task or other keywords.

- **`SUITE` Scope**: Variables defined at the suite level, for example in the `*** Variables ***` section or through importing resource files, are available to all tests|tasks and keywords called within the suite.

  That means that they can be accessed inside a keyword, called from a test|task of that suite even, if this variable is not created as part of the argument interface of that keyword.

Examples and more details on variable scope, such as `TEST` and `GLOBAL` scope can be found in the [5.1.2 Variable Scopes](chapter-05/01_advanced_variables.md#512-variable-scopes) section.




