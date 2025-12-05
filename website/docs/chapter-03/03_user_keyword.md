
# 3.3 User Keyword Definition & Arguments

User Keywords in Robot Framework allow users to create their own
keywords by combining existing keywords into reusable higher-level actions.
They help improve readability, maintainability, and modularity in
automation by abstracting complex sequences into named actions.
User Keywords are defined syntactically very similarly to tests|tasks
and are defined in the `*** Keywords ***` section of a suite file or resource file.



## 3.3.1 `*** Keywords ***` Section

The `*** Keywords ***` section of suite and resource files
is indentation-based similar to the `*** Test Cases ***` section.
The user keywords defined are unindented, while their body implementation is indented by multiple spaces.

See these sections for more details about
[2.2 Basic Suite File Syntax](chapter-02/02_suitefile_syntax.md)
and [2.6 Writing Test|Task and Calling Keywords](chapter-02/06_writing_test.md).

This section can be part of suites or resource files.
While keywords defined in suites can solely be used in the suite they are defined in,
keywords defined in resource files can be used in any suite that imports these resource files.

Example definition of a user keyword:

```robotframework
*** Keywords ***
Verify Valid Login
    [Arguments]    ${exp_full_name}
    ${version}=    Get Server Version
    Should Not Be Empty    ${version}
    ${name}=    Get User Name
    Should Be Equal    ${name}    ${exp_full_name}
```

As a reference for how defined keywords are documented, see [2.5 Keyword Interface and Documentation](chapter-02/05_keyword_interface.md).



## 3.3.2 User Keyword Names

::::lo[Learning Objectives]

:::K1[LO-3.3.2]

Recall the rules how keyword names are matched.

:::

::::

The names of User Keywords should be descriptive and clear, reflecting the purpose of the keyword.
Well-named keywords make tests more readable and easier to understand.
Robot Framework supports Unicode and allows the use of special characters and even Emojis in keyword names.

Keyword names are case-insensitive and can include single spaces.
Also spaces and underscores will be ignored when matching keyword names.
So the keywords `Login To System`, and `log_into_system` are considered identical.

To identify keywords that shall be executed, Robot Framework uses a matching algorithm that is case-insensitive and ignores spaces and underscores.
- If then a full match is found, that keyword is used.
- If no full match is found, the prefixes `Given`, `When`, `Then`, `And`, and `But` (case-insensitive), which are used in Behavior-Driven Specification style, are removed from the called keyword name to find a match.
- If still no match is found, Robot Framework tries to match the name with keywords that have embedded arguments.

By default, if not explicitly defined by the library developers, all Library Keywords are named in **Title Case** with capital letters at the beginning of each word, and spaces between words.

Project may choose a different naming convention for User Keywords, but it is recommended to be consistent across the project for User Keyword names.

They are defined without indentation, and the subsequent lines until the next unindented line are considered the body of the keyword.
The following topics explain how to structure the body of a keyword.



## 3.3.3 User Keyword Settings

::::lo[Learning Objectives]

:::K1[LO-3.3.3]

Recall all available settings and their purpose for User Keywords

:::

::::

User keywords can have similar settings as test cases,
and they have the same square bracket syntax separating them from keyword calls.
All available settings are listed below and explained in this section or in sections linked below.

- `[Documentation]` Used for setting user keyword documentation. (see [3.3.4 User Keyword Documentation](chapter-03/03_user_keyword.md#334-user-keyword-documentation))
- `[Arguments]` Specifies user keyword arguments to hand over values to the keyword. (see [3.3.5 User Keyword Arguments](chapter-03/03_user_keyword.md#335-user-keyword-arguments))
- `[Setup]`, `[Teardown]` Specify user keyword setup and teardown. (see [4.2 Teardowns (Suite, Test|Task, Keyword)](chapter-04/02_teardowns.md))
- `[Tags]` (*) Sets tags for the keyword, which can be used for filtering in documentation and attribution for post-processing results.
- `[Timeout]` (*) Sets the possible user keyword timeout.
- `[Return]` (*) Deprecated. Use the `RETURN` statement instead. (see [3.3.6 RETURN Statement](chapter-03/03_user_keyword.md#336-return-statement))

(*) The application of these settings are not part of this syllabus.



## 3.3.4 User Keyword Documentation

::::lo[Learning Objectives]

:::K1[LO-3.3.4]

Recall the significance of the first logical line and in keyword documentation for the log file.

:::

::::

Each keyword can have a `[Documentation]` setting to provide a description of the keyword's purpose and usage.

The first logical line, until the first empty row, is used as the *short documentation* of the keyword in the `log.html` test protocol.

Proper documentation helps maintain clarity, especially in larger projects.
It is a good practice to document what the keyword does,
any important notes regarding its usage,
and additional information about the arguments it accepts if not self-explanatory.

User keywords can be documented in the Robot Framework documentation format.

:::tip[Important]

The syntax of this format has similarities to Markdown, but is more limited and not compatible with Markdown!

:::

This format includes:
- `*bold*` = **bold**
- `_italic_` = _italic_
- `_*bold italic*_` = **_bold italic_**
- ``` `code` ``` = `code`
- Tables
- Lists
- Links
- Images
- Heading levels


## 3.3.5 User Keyword Arguments

::::lo[Learning Objectives]

:::K2[LO-3.3.5]

Understand the purpose and syntax of the [Arguments] setting in User Keywords.

:::

::::

User Keywords can accept arguments, which make them more dynamic and reusable in various contexts.
The `[Arguments]` setting is used to define the arguments a user keyword expects.

See also [2.5.2 Keyword Arguments](chapter-02/05_keyword_interface.md#252-keyword-arguments) for an introduction to argument kinds.

Arguments are defined by `[Arguments]` followed by the argument names separated by multiple spaces in the syntax of scalar variables.

Since Robot Framework 7.3 User Keywords can define argument types like `string`, `number`, etc., as described in the [2.5.2.8 Argument Types](chapter-02/05_keyword_interface.md#2528-argument-types) section.


### 3.3.5.1 Defining Mandatory Arguments

::::lo[Learning Objectives]

:::K1[LO-3.3.5.1-1]

Recall what makes an argument mandatory in a user keyword.

:::

:::K3[LO-3.3.5.1-2]

Define User Keywords with mandatory arguments.

:::

::::

Arguments defined as scalar variable (`${arg}`) without a default value are mandatory and must be provided when calling the keyword.

Example that defines a keyword with two arguments:
```robotframework
*** Keywords ***
Verify File Contains
    [Documentation]    Verifies that a file contains a specific text.
    ...
    ...    The keyword opens the file specified by the file path
    ...    and checks if it contains the expected content.
    [Arguments]    ${file_path}    ${expected_content}
    ${server_log} =    Get File    ${file_path}
    Should Contain    ${server_log}    ${expected_content}
```

All variables defined in the `[Arguments]` are local to the keyword body and do not exist outside of the keyword.

This keyword may be called in a test case like this:
```robotframework
*** Test Cases ***
Check Server Log
    Verify File Contains    server.log    Successfully started
```

In that case, the argument `${file_path}` is assigned the value `server.log`, and `${expected_content}` is assigned the value `Successfully started`.


### 3.3.5.2 Defining Optional Arguments

::::lo[Learning Objectives]

:::K1[LO-3.3.5.2-1]

Recall how to define optional arguments in a user keyword.

:::

:::K3[LO-3.3.5.2-2]

Define User Keywords with optional arguments.

:::

::::

Optional arguments are defined by assigning default values to them in the `[Arguments]` setting.
All optional arguments must be defined after all mandatory arguments.

Default values are assigned using an equal sign (`=`),
followed by the default value without any spaces, such as `${ignore_case}=True`,
which would set the string `True` as default.

The assigned default values can also include previously defined variables,
such as `${ignore_case}=${True}`, where `${True}` represents the boolean value `True`.

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
    [Arguments]    ${file_path}    ${expected_content}    ${encoding}=utf-8   ${ignore_case}=${True}
    ${server_log} =    Get File    ${file_path}    ${encoding}
    Should Contain    ${server_log}    ${expected_content}    ignore_case=${ignore_case}
```


### 3.3.5.3 Defining Embedded Arguments

::::lo[Learning Objectives]

:::K2[LO-3.3.5.3-1]

Describe how embedded arguments are replaced by actual values during keyword execution.

:::

:::K2[LO-3.3.5.3-2]

Understand the role of embedded arguments in Behavior-Driven Development (BDD) style.

:::

::::


In Robot Framework, **embedded arguments** allow the inclusion
of arguments directly within the keyword name itself.
This approach is particularly useful for creating
**Behavior-Driven Development (BDD)**-style test cases or for
making keyword names more readable and meaningful.

With embedded arguments, placeholders are used within the keyword name,
which are replaced by actual values when the keyword is executed.
These arguments are written as scalar variables with dollar signs and curly braces,
as shown in the following example:

```robotframework
*** Keywords ***
The file '${file_name}' should contain '${expected_content}'
    ${file_content} =    Get File    ${file_name}
    Should Contain    ${file_content}    ${expected_content}
```

When this keyword is called, the placeholders `${file_name}`
and `${expected_content}` are replaced by the actual values provided in the keyword call.
For instance, in the following example,
`${file_name}` is replaced with `server.log`
and `${expected_content}` with `Successfully started`:

```robotframework
*** Test Cases ***
Test File Content
    Given the server log level is 'INFO'
    When the server is started successfully
    Then the file 'server.log' should contain 'Successfully started'
```

Quotes around the embedded arguments are treated as regular characters
within the keyword name but can improve readability
and help distinguish embedded arguments from the rest of the keyword name.

Embedded arguments can become problematic when the keyword name becomes overly long or complicated.
To address this, a mix of embedded arguments and regular arguments can be used.
This approach can help manage more complex data structures and enhance readability.

Example of mixed embedded and regular arguments:

```robotframework
*** Test Cases ***
Embedded and normal arguments
    Given the user is on the pet selection page
    When the user adds    2     cat fish
    And the user sets    3     dogs
    And the user removes    1     dogs
    Then the number of cat fish should be    2
    And the number of dogs should be    count=2

*** Keywords ***
the user is on the pet selection page
    Open Pet Selection Page

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
    ELSE IF    '${action}' == 'sets'
        Set Amount To List    animal_list    ${animal}    ${amount}
    ELSE
        Skip    Test skipped due to invalid action
    END
```


### 3.3.5.4 Other Argument Kinds

Other argument kinds like :term[Named-Only Arguments]{term="Named-Only Argument"}, :term[Free Named Arguments]{term="Free Named Argument"}, or
:term[Variable Number of Positional Arguments] should be known,
but their definition and usage are not part of this syllabus.



## 3.3.6 RETURN Statement

::::lo[Learning Objectives]

:::K2[LO-3.3.6-1]

Understand how the `RETURN` statement passes data between different keywords.

:::

:::K3[LO-3.3.6-2]

Use the `RETURN` statement to return values from a user keyword and assign it to a variable.

:::

::::

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
However, this behavior can be used to conditionally end a keyword execution early together with an `IF` or `TRY-EXCEPT` statement.


:::tip[Important]

The `RETURN` statement of a keyword cannot return the returned value from a called keyword directly like in other programming languages.
The return value must be stored in a variable first and then be returned by the `RETURN` statement.
So the first keyword is **invalid** while the second **valid** is!

```robot title="invalid"
*** Keywords ***
Get ISO Time
    RETURN    Evaluate    datetime.datetime.now().isoformat()
```

```robot title="valid"
*** Keywords ***
Get ISO Time
    ${time}    Evaluate    datetime.datetime.now().isoformat()
    RETURN    ${time}
```
:::


## 3.3.7 Keyword Conventions


<!--
TODO:

Should we have that  chapter???
Opinions?
And if, is this want we want to ask the participants to know?
-->

::::lo[Learning Objectives]

:::K1[LO-3.3.7]

Recall the naming conventions for user keywords.

:::

::::

When defining User Keywords, it is recommended to follow conventions to ensure consistency and readability across the project.
These may be taken from community best practices or defined within the project team.

Keyword Conventions should contain agreements on:
- **Naming Case**: Which case shall be used? (e.g. `Title Case`, `camelCase`, `snake_case`, `kebab-case`, or `Sentence case`, etc. ) (from a readability perspective, `Title Case` or `Sentence case` are recommended)
- **Grammatical Form/Mood**: Which form shall be used for actions and verifications/assertions? (e.g. `Imperative` for both like `Click Button`, `Verify Text`. Or e.g. `Declarative`/`Indicative` for assertions like `Text Should Be`, `Element Should Be Visible`)
- **Word/Character Count**: How many words or characters shall be used in a keyword name? (e.g. less than 7 words)
- **Argument Count**: How many arguments shall a keyword have? (e.g. less than 5)
- **Documentation**: How shall the documentation be structured and which information shall be included or is it required at all?






