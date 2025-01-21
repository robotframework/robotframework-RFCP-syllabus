
# 5.2 Control Structures

Robot Framework is a Turing-complete language and supports all common control structures, including IF-Statements, FOR-Loops, WHILE-Loops and more.
While it is not expected that RCFPs can write complex control structures, they should understand their purpose.

In some cases, it is necessary to use control structures to handle different cases, iterate over a list of values, or execute an action until a condition is met.


## 5.2.1 IF Statements

::::lo[Learning Objectives]

:::K2[LO-5.2.1]

Understand the purpose and basic concept of IF-Statements

:::

::::

The `IF/ELSE` syntax in Robot Framework is used to control the flow of test|task execution by allowing certain keywords to run only when specific conditions are met.
This is achieved by evaluating conditions written as Python expressions, enabling dynamic decision-making within your tests|tasks.

The `IF` statement begins with the `IF` token and ends with an `END`, enclosing the keywords executed when the condition is true.
An optional `ELSE` or `ELSE IF` can specify alternative actions when the initial condition is false.
This structure enhances the flexibility and responsiveness of your tests|tasks, allowing them to adapt based on variables and outcomes encountered during execution.


### 5.2.1.1 Basic IF Syntax

When certain keywords should be executed only if a condition is met, the IF statement can be used.

- **Structure**:
  ```robotframework
  IF    <condition>
      <keywords>
      <keywords>
  END
  ```
- **Example**:
  ```robotframework
  *** Test Cases ***
  Check Status
      IF    '${status}' == 'SUCCESS'
          Log    Operation was successful.
      END
  ```
  - Executes the `Log` keyword if `${status}` is the string `SUCCESS`.

## 5.2.2 IF/ELSE IF/ELSE Structure

To execute different alternative actions based on various conditions, use the IF/ELSE IF/ELSE structure.

- **Structure**:
  ```robotframework
  IF    <condition1>
      <keywords if condition1 is true>
  ELSE IF    <condition2>
      <keywords if condition2 is true>
  ELSE
      <keywords if all conditions are false>
  END
  ```
- **Example**:
  ```robotframework
  *** Test Cases ***
  Evaluate Score
      IF    ${score} >= 90
          Log    Grade A
      ELSE IF    ${score} >= 80
          Log    Grade B
      ELSE
          Log    Grade C or below
      END
  ```

## 5.2.3 Inline IF Statement

For single conditional keywords, the simplified inline IF statement can be used.

- **Structure**:
  ```robotframework
  IF    <condition>    <keyword>    [arguments]
  ```
- **Example**:
  ```robotframework
  *** Test Cases ***
  Quick Check
      IF    ${user} == 'Admin'    Log    Admin access granted.
  ```
  - Executes the `Log` keyword if `${user}` equals `'Admin'`.
  - No `END` is needed for inline IF.

## 5.2.4 FOR Loops

::::lo[Learning Objectives]

:::K2[LO-5.2.4]

Understand the purpose and basic concept of FOR Loops

:::

::::

The `FOR` loop in Robot Framework repeats a set of keywords multiple times, iterating over a sequence of values.
This allows you to perform the same actions for different items without duplicating code, enhancing the efficiency and readability of your keyword logic.

Robot Framework has four types of FOR loops; this chapter focuses on the basic `FOR-IN` loop.
- `FOR-IN` is used to iterate over a list of values.

The other types are `FOR-IN-RANGE`, `FOR-IN-ENUMERATE`, and `FOR-IN-ZIP`, which are more advanced and less commonly required.
- `FOR-IN-RANGE` iterates over a range of numbers.
- `FOR-IN-ENUMERATE` iterates over a list of values and their indexes.
- `FOR-IN-ZIP` iterates over multiple lists simultaneously.

The `FOR` loop begins with the `FOR` token, followed by a loop variable, the `IN` token, and the iterable variable or list of values.
The loop variable takes on each value in the sequence one at a time, executing the enclosed keywords for each value.


### 5.2.4.1 Basic FOR Loop Syntax

When you need to execute the same keywords for each item in a list or sequence, you can use the FOR-IN loop.

- **Structure**:
  ```robotframework
  FOR    ${loop_variable}    IN    <value1>    <value2>    ...    <valueN>
      <keywords>
      <keywords>
  END
  ```

  Since `<value1>    <value2>    ...    <valueN>` can be the same as an unpacked list like `@{values}`, this is the most common way to use the FOR loop.

  ```robotframework
  FOR    ${loop_variable}    IN    @{iterable_values}
      <keywords>
      <keywords>
  END
  ```

- **Example**:
    ```robotframework
    *** Variables ***
    @{fruits} =    apple    banana    cherry

    *** Test Cases ***
    Process Fruit List
        FOR    ${fruit}    IN    @{fruits}
            Log    Processing ${fruit}
        END
    ```
    This would essentially be the same as:
    ```robotframework
    *** Test Cases ***
    Process Fruits separately
        Log    Processing apple
        Log    Processing banana
        Log    Processing cherry
    ```



## 5.2.5 WHILE Loops

::::lo[Learning Objectives]

:::K2[LO-5.2.5]

Understand the purpose and basic concept of WHILE Loops

:::

::::

While the `FOR` loop iterates over a known amount of values, `WHILE` loops repeat their body as long as a condition is met.
This is typically used in cases where the number of iterations is not known in advance or depends on a dynamic condition.

One example use case would be scrolling down a page until a certain element is visible.
In this case, you would use a `WHILE` loop to keep scrolling until the element is found or a maximum iteration limit is reached.

The `WHILE` loop begins with the `WHILE` token, followed by a condition that evaluates to true or false.
If the condition is true, the loop body is executed, and the condition is re-evaluated.
If the condition is false, the loop is exited, and execution continues with the next keyword after the `END`.
The condition is similar to an IF statement, a Python expression that evaluates to a boolean value.

- **Structure**:
    ```robotframework
    WHILE    <condition>
        <keywords>
        <keywords>
    END
    ```
- **Example**:
    ```robotframework
    *** Test Cases ***
    Scroll Down Until Element Visible
        ${element_visible}    Get Element Visibility    <locator>
        WHILE    not ${element_visible}
            Scroll Down
            ${element_visible}    Get Element Visibility    <locator>
        END
    ```

`WHILE` loops have a configurable iteration limit in Robot Framework.
When the maximum number of iterations is reached, the loop exits with a failure, causing the test|task or keyword to fail.
This prevents infinite loops and ensures that tests|tasks do not hang indefinitely.



## 5.2.6 BREAK and CONTINUE

::::lo[Learning Objectives]

:::K2[LO-5.2.6]

Understand the purpose and basic concept of the BREAK and CONTINUE statements

:::

::::

In some cases, it is helpful to stop a loop or skip the remaining part of a loop and continue with the next iteration.
This can be achieved with the `BREAK` and `CONTINUE` statements.

- `BREAK` stops the current loop and exits it immediately.
- `CONTINUE` skips the remaining part of the current iteration and continues with the next iteration.

These can, of course, be combined with `IF` statements to control the loop flow.

Example 1 `BREAK`:

Suppose we want to search for an element on a page and scroll down until it is visible.
This time, we do not know the number of pages we can scroll, so we use the `WHILE` loop.
However, we want the loop to iterate and `BREAK` once we have found the element.

```robotframework
*** Test Cases ***
Scroll Down Until Element Visible
    WHILE    True    # This would loop to the max iteration limit
        ${element_visible}    Get Element Visibility    <locator>
        IF    ${element_visible}    BREAK
        Scroll Down
    END
```

Here we used `BREAK` to exit the loop before scrolling down if the element is visible.

`CONTINUE` is useful when you want to skip the remaining part of the current iteration and continue with the next iteration if a condition is met.
In that case, combine `IF` and `CONTINUE` to control the loop flow.

Example 2 `CONTINUE`:

```robotframework
*** Settings ***
Library     Collections


*** Variables ***
&{participant_1}    name=Alice      age=23
&{participant_2}    name=Bob        age=42
&{participant_3}    name=Charlie    age=33
&{participant_4}    name=Pekka      age=44
@{participants}     ${participant_1}    ${participant_2}    ${participant_3}    ${participant_4}


*** Test Cases ***
Find Older Participants
    ${older_participants}    Get Older Participants    ${participants}    40
    Should Be Equal    ${older_participants}[0][name]    Bob
    Should Be Equal    ${older_participants}[1][name]    Pekka


*** Keywords ***
Get Older Participants
    [Arguments]    ${participants}    ${minimum_age}
    VAR    @{older_participants}                                     # Creates an empty list
    FOR    ${participant}    IN    @{participants}                   # Iterates over all participants
        IF    ${participant.age} < ${minimum_age}    CONTINUE        # Skips the remaining part of the loop if age is below the minimum
        Log    Participant ${participant.name} is older than 40      # Logs participant name if age is above the minimum
        Append To List    ${older_participants}    ${participant}    # BuiltIn keyword to append a value to a list
    END
    RETURN    ${older_participants}
```
