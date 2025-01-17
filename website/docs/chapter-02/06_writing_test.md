# 2.6 Writing Test|Task and Calling Keywords

::::lo[Learning Objectives]

:::K2[LO-2.6]

Understand how to call imported keywords and how to structure keyword calls.

:::

::::

A typical test case or task is a sequence of keyword calls that are executed in a specific order.
As learned before these keywords need to be imported into the suite or resource file before they can be used.
When using keywords in a test|task or User Keyword, it is important to indent the keyword calls correctly.
With the exception of returning values, which is described in Chapter 3,
the name of the keywords is the first element of the keyword call followed by the arguments that are separated by two or more spaces.

The following example shows different ways to call imported keywords in a test case based on the `Should Be Equal` keyword from the BuiltIn library.

The keyword name should be written as defined in the keyword documentation and may have single spaces or other special characters in it.
After the keyword name the arguments are set.
All arguments are separated by multiple spaces from the keyword name and from each other and can also include single spaces.
Argument values are stripped from leading and trailing spaces, but spaces within the argument value are preserved.

If an argument shall contain more than one consecutive spaces or start or end with spaces, the spaces must be escaped by a backslash `\` to prevent them from being interpreted as a part of a "multi-space-separator".

Example:
```robotframework
*** Test Cases ***
Mandatory Positional Arguments
    [Documentation]    Only mandatory arguments are use positional
    Should Be Equal    1    1

Mixed Positional Arguments
    [Documentation]    Mandatory and optional arguments are used positional.
    ...
    ...    It is hard to figure out what the values are doing and which arguments are filled,
    ...    without looking into the keyword documentation.
    ...    Even though the argument `values` is kept at its default value `True` it must be set if later arguments shall be set positional.
    Should Be Equal    hello    HELLO    Values are case-insensitive NOT equal    True    True

All Named Arguments
    [Documentation]    Arguments are used named.
    ...
    ...    It is clear what the values are doing and which arguments are filled and order is not relevant.
    ...    The argument `values` can be omitted and the order can be mixed
    Should Be Equal    first=hello    second=HELLO    ignore_case=True    msg=Values are case-insensitive NOT equal

Mixed Named and Positional Arguments
    [Documentation]    Arguments are used named and positional.
    ...
    ...    The positional arguments must be in order, but the subsequent named arguments may be in an arbitrary order.
    ...    The first arg has the string value `" hello  spaces "` and the second arg has the string value `"HELLO  SPACE"`.
    Should Be Equal    \ hello \ spaces \    HELLO \ SPACE   ignore_case=True    strip_spaces=True    msg=Values are case-insensitive NOT equal
```



## 2.6.1 Positional Arguments

::::lo[Learning Objectives]

:::K2[LO-2.6.1]

Understand the concept of how to set argument values positionally.

:::

::::

When calling keywords, arguments can often be set positionally in the order they are defined in the keyword documentation.
An exception to this are "Named-Only Arguments" and "Free Named Arguments" that can only be set by their name.

However, only using positional values can lead to poor readability as you can see in the previous example: `Mixed Positional Arguments`
Some keywords do not have an obvious order of arguments.
In these cases, calling keywords with named arguments can lead to better readability and understanding of the keyword call.

Using arguments positionally is very handy for arguments that are obvious and easy to understand.
In the early login example the following keyword calls exists:
```robotframework
*** Test Cases ***
Login User With Password
    Login User    ironman    1234567890
```

In that case it should be obvious that the first argument is the username and the second argument is the password.
Also the following keyword call should be easy to understand but could still be more explicit by using named arguments.

```robotframework
*** Test Cases ***
Click on x and y
    Click On Coordinates    82    70
    Click On Coordinates    x=82    y=70
```

Calling keywords that has a "Variable Number of Positional Arguments" does require to set all preceding arguments by their position if the "Variable Number of Positional Arguments" shall be set.

Example:
```robotframework
*** Test Cases ***
Run Process Without Arguments
    ${dir}  Run Process    command=dir
    Log    ${dir.stdout}

Run Process With Arguments
    ${ping}    Run Process    ping    -c    2    127.0.0.1
    Log    ${ping.stdout}
```

In the second test `Run Process With Arguments` the first given value `ping` is assigned to the argument `command` and all following values are collected into the `arguments` argument of the keyword `Run Process` as a list of values.

## 2.6.2 Named Arguments

::::lo[Learning Objectives]

:::K2[LO-2.6.2]

Understand the concept of named arguments and how to set argument values by their name.

:::

::::

Keyword Calls with non-obvious arguments should use named argument calls if possible.
Also setting one optional argument but leaving the others at their default value is an indication to use named arguments.

Named arguments are set by their name followed by an equal sign `=` and the value of the argument.
All named arguments must be set after the positional arguments are set but can be set in any order.

Equal signs are valid argument values and could therefore be misinterpreted as named arguments, if the text before the equal sign is an existing argument name or if "Free Named Arguments" are available at the called keyword.
To prevent that, an equal sign in argument values can be escaped by a backslash `\`.

Example of escaping conflicting equal signs:

```robotframework
*** Test Cases ***
Test Escaping Equal Sign
    Should Be Equal    second\=2   Second\=2    case_insensitive=True
```

The argument `first` does get the value `second=2` and the argument `second` does get the value `Second=2`.



## 2.6.3 Embedded Arguments / Using Behavior-Driven Specification

::::lo[Learning Objectives]

:::K1[LO-2.6.3]

Recall how to use embedded arguments.

:::

::::

Embedded Arguments are mostly used in Behavior-Driven Development (BDD) using Robot Frameworks Behavior-Driven Specification style.

Embedded Arguments are part of the keyword name as described in [2.5.2.3 Embedded Arguments](chapter-02/05_keyword_interface.md#2523-embedded-arguments).

When calling keywords with embedded arguments, all characters that are at the position where the embedded argument is expected are used as the argument value.

See the example in section [2.5.2.3 Embedded Arguments](chapter-02/05_keyword_interface.md#2523-embedded-arguments).

See also [2.5.2.3 Embedded Arguments](chapter-02/05_keyword_interface.md#2523-embedded-arguments) for more information about how to use embedded arguments.