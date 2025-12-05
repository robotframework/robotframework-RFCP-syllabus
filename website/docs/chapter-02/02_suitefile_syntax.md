
# 2.2 Basic Suite File Syntax

<!--
TODO:
I think this section needs a bit more structure and we should introduce the concept of "settings" like [Documentation] already here and reference to Chapter 4.

 -->

::::lo[Learning Objectives]

:::K2[LO-2.2]

Understand the basic syntax of test cases and tasks.

:::

::::

Suite files and resource files share the same syntax, however they differ in their capabilities.
Resource files are explained in more detail in [2.4.2 Resource Files](chapter-02/04_keyword_imports.md#242-resource-files) [3.1 Resource File Structure](chapter-03/01_resource_file.md).


## 2.2.1 Separation and Indentation

::::lo[Learning Objectives]

:::K3[LO-2.2.1]

Understand and apply the mechanics of indentation and separation in Robot Framework.

:::

::::

As mentioned before, Robot Framework uses an indentation-based and space-separated syntax to structure keywords, test cases, and tasks.

**Two or more spaces** are used to separate or indent statements in Robot Framework files, while a single space is a valid character in tokens (e.g. keyword names, argument values, variables, etc.).
The clear recommendation for separators is to use **four spaces** or more to unambiguously make it visible
to a potential reader where elements are separated or indented.

A statement in Robot Framework is a logical line that contains specific data tokens, which are separated by multiple spaces (separator tokens) and typically end with a line break (end-of-line token).
To create a statement spanning multiple lines, literal lines can be continued by adding `...` (three dots) and a separator token at the beginning of the next line, maintaining the same indentation level as the line being continued.

**Example 1**: A keyword call is a statement that consists of a keyword name and its arguments, which are separated by two or more spaces from the keyword name and from each other.
An optional assignment of the return value can be possible as well.
The line comments starting with a hash `#` show the tokens in the statement.

Plain example for better readability:
```robotframework
*** Test Cases ***
Test Case Name
      Keyword Call     argument one     argument two
      Keyword Call
      ...            argument one
      ...            argument two
      ${variable_assignment}     Keyword Getter Call
```

Example with tokens in comments:
```robotframework
*** Test Cases ***
# TESTCASE HEADER |
Test Case Name
# TESTCASE   | EOL
      Keyword Call     argument one     argument two
# SEP |  KEYWORD | SEP | ARGUMENT | SEP | ARGUMENT | EOL
      Keyword Call
# SEP |  KEYWORD | EOL
      ...            argument one
# SEP | CONTINUATION | ARGUMENT | EOL
      ...            argument two
# SEP | CONTINUATION | ARGUMENT | EOL
      ${variable_assignment}     Keyword Getter Call
# SEP |     ASSIGNMENT     | SEP |     KEYWORD     | EOL
```

In the example above, the test case `Test Case Name` contains three keyword calls.
The first keyword call `Keyword Call` has two arguments, `argument one` and `argument two`.
The second keyword call even though it is split over two lines is considered one logical line and identical to the first keyword call.
The third keyword call is a keyword call that assigns the return value of the keyword `Keyword Getter Call` to the variable `${variable_assignment}`.

**Example 2**: In the `*** Settings ***` section, the settings are separated from their values by four or more spaces.

```robotframework
*** Settings ***
# SETTINGS HDR |
Documentation     This is the first line of documentation.
#  SETTING  | SEP |                 VALUE                | EOL
...   # just CONTINUATION and End Of Line
...            This is the second line of documentation.
# CONTINUATION |                VALUE                  | EOL
Resource     keywords.resource
# SET  | SEP |     VALUE     | EOL
```


All elements themselves in their section are written without any indentation.
So, settings in the `*** Settings ***` section, test cases in the `*** Test Cases ***` section,
and keywords in the `*** Keywords ***` section are written without any indentation.
However, when defining tests|tasks and keywords, indentation is used to define their body, while their name is still un-indented,
e.g., after a test case name, all subsequent lines that are part of the test case body are indented by two or more spaces.

That means that a body statement always starts with a separator token, followed by a data token, like e.g. variable or keyword as seen in the examples above.

The body ends when either a new un-indented element (e.g. test case or keyword) is defined
or another section like `*** Keywords ***` starts
or the end of the file is reached.

Within the body of tests|tasks and keywords, control structures like loops or conditions can be used. Their content should be indented by additional four spaces to make it clear that they are part of the control structure. However, this is not mandatory and only a recommendation to make the file more readable.

While single tabulators (`\t`) as well as two or more spaces are valid separators,
it is recommended to use multiple spaces for indentation and separation and avoid tabulators.
This can prevent issues where different editors align text to a grid (e.g., 4 spaces) when using tabs,
making it difficult for users to distinguish between tabs and spaces.
It could cause a single tabulator to look the same as a single space in the editor,
which would lead to misinterpretation of the file structure by a human reader.



## 2.2.2 Line Breaks, Continuation and Empty Lines

::::lo[Learning Objectives]

:::K3[LO-2.2.2]

Be able to use line breaks and continuation in a statement.

:::

::::

Empty lines are allowed and encouraged to structure data files and make them more readable.
In the next example, the sections are visibly separated by two empty lines, and the tests are separated by one empty line.
Empty lines are technically not relevant and are ignored while parsing the file.

By default, each statement is terminated by a line break, allowing only one statement per literal line.
However, for better readability, or to add line breaks in documentation,
statements can span multiple lines by using `...` (three dots) and a separator at the start of the next line with the same indentation level as the line being continued.

A line continuation can only be performed where a separator is expected, like between a keyword name and its arguments or between two arguments or between a setting and its value(s).
In the following example the two keyword calls are logically identical, even though the second one is split over three literal lines.

In documentation settings, line breaks with continuation are interpreted as a line break character.
In Robot Framework documentation syntax, a single line break is treated as a space after interpretation,
whereas two consecutive line breaks are considered a paragraph break.
This allows you to structure documentation in a more readable and organized manner.

**Example**:

```robotframework
*** Settings ***
Documentation     This is the first paragraph of suite documentation.
...
...            This is the second paragraph of suite documentation.
Resource     keywords.resource


*** Test Cases ***
Test Case Name
      [Documentation]    This is the first paragraph of test documentation.
      ...
      ...                This is the second paragraph of test documentation.
      Keyword Call     argument one     argument two
      Keyword Call
      ...            argument one
      ...            argument two
      ${variable_assignment}     Keyword Getter Call
```

## 2.2.3 In-line Comments

::::lo[Learning Objectives]

:::K3[LO-2.2.3]

Be able to add in-line comments to suites.

:::

::::

In Robot Framework comments can be added to lines after the content
by starting the comment with a separator (multiple spaces) and a hash `#`.
The hash `#` is used to indicate that the rest of the line is a comment and is ignored by Robot Framework.
The same works at the very start of a line, which makes the whole line a comment.

Hashes in the middle of a value are considered normal characters and do not need to be escaped.

If an argument value or any other token shall start with a hash (`#`)
and is preceded by a separator (multiple spaces),
the hash must be escaped by a backslash `\` like `Click Element By Css    \#element_id`.

Block comments are not supported in Robot Framework,
so each line that shall be a comment must be prefixed with a hash `#`.
Alternatively, the `*** Comments ***` section can be used to add multi-line comments to files.



## 2.2.4 Escaping of Control Characters

::::lo[Learning Objectives]

:::K2[LO-2.2.4]

Understand how to escape control characters in Robot Framework.

:::

::::

In Robot Framework strings are not quoted which leads to situations where users need to be able to define,
if a specific character shall be interpreted as part of the value or as a control character.


Some examples are:
- the `#` hash character that is used to start a comment as described above.
- variables that are started by e.g. `${` (See [3.2 Variables](chapter-03/02_variables.md))
- multiple spaces that are considered as separators
- equal sign `=` that is used to assign named arguments to keywords

All those characters or character sequences that are interpreted as control characters can be escaped by a backslash `\`.
This means that the character following the backslash is interpreted as a normal character and not as a control character.

This leads to the fact that a backslash itself must be escaped by another backslash to be interpreted as a normal backslash character. Therefore it is strongly recommended to use forward slashes `/` as path separators in paths also on windows environments and avoid backslashes `\` whenever possible.

Leading and trailing spaces in values are normally considered being part of the separator surrounding the values.
If values shall contain leading or trailing spaces they must be either enclosed in backslashes `\` or replaced by the special variable `${SPACE}` that contains a single space character.

Example:
```robotframework
*** Test Cases ***
Test of Escaping
    Log    \# leading hash.                     # This logs "# leading hash."
    Log    \ lead & trail \                     # This logs " lead & trail "
    Log    ${SPACE}and now 5 More: \ \ \ \ \    # This logs " and now 5 More:     "
    Log    Not a \${variable}                   # This logs "Not a ${variable}"
    Log    C:\\better\\use\\forward\\slashes    # This logs "C:\better\use\forward\slashes"
```


## 2.2.5 Example Suite File

::::lo[Learning Objectives]

:::K2[LO-2.2.5]

Understand the structure of a basic suite file.

:::

::::

In the following example, two test cases are defined in a suite file.
- `Login User With Password`
- `Denied Login With Wrong Password`

Both test the login functionality of a system by calling four keywords in their bodies.

In the `*** Settings ***` section, the suite is documented, and the keywords for connecting to the server, logging in, and verifying the login are imported from a resource file.
The settings of this section are not indented, but their values are separated by four or more spaces.

In the `*** Test Cases ***` section, there are two test cases defined.
The first test case, `Login User With Password`, connects to the server, logs in with the username `ironman` and the password `1234567890`, and verifies that the login was successful with the user's name `Tony Stark`.
In this test, the first called keyword is `Connect To Server` without any arguments, while the second called keyword is `Login User`, and it has two argument values: `ironman` and `1234567890`.

The second test case, `Denied Login With Wrong Password`, connects to the server, tries to log in with the username `ironman` and the password `123`, and expects an error to be raised and the login to be denied.

Clearly visible due to the indentation by four spaces, the body of the test cases contains the keywords that are called to execute the test case.
In the test case body, some keyword calls have arguments that are separated by two or more spaces from the keyword name.

The following tests will be executed in the order they are defined in the suite file. First, the `Login User With Password` test case will be executed, followed by the `Denied Login With Wrong Password` test case.

Example Suite File Content:
```robotframework title="robot_files/TestSuite.robot"
*** Settings ***
Documentation     A suite for valid and invalid login tests.
...
...               Keywords are imported from the resource file.
Resource          keywords.resource


*** Test Cases ***
Login User With Password
    Connect To Server
    Login User            ironman    1234567890   # Login with valid credentials
    Verify Valid Login    Tony Stark   # Verifies a successful login by checking the user name
    Close Server Connection

Denied Login With Wrong Password
    Connect To Server
    Run Keyword And Expect Error    # this keyword calls another keyword and expects an error
    ...        *Invalid Password*   # it expects an error containing `Invalid Password`
    ...        Login User           # this keyword is called with two arguments
    ...        ironman
    ...        123#wrong            # A hash in the middle of a string is not a comment
    Verify Unauthorized Access
    Close Server Connection
```




