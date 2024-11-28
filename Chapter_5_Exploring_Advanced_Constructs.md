# 5 Exploring Advanced Constructs

This chapter introduces more advanced constructs of Robot Framework.
These topics are often unnecessary for simple automation cases but can be very useful in more complex situations.
Even though it is NOT expected that Robot Framework Certified Professionals will be able to use them, it is important to be aware of the possibilities and understand the basic concepts.




## 5.1 Advanced Variables

Variables in Robot Framework and programming languages, in general, can be more complex and store multiple different types of data.
Robot Framework also offers various ways to create different kinds of values and types.
However, the built-in language support is limited to the very basic [Primitive Data Types](Chapter_3_Keyword_Design_Variables_Resources.md#primitive-data-types), [Lists](Chapter_3_Keyword_Design_Variables_Resources.md#list-variable-definition), and [Dictionaries](Chapter_3_Keyword_Design_Variables_Resources.md#dictionary-variable-definition).

This chapter provides more advanced knowledge about the different variable scopes, lists, dictionaries, their syntax, and some background on the most important Built-In Variables.

Understanding the **priority** and **scope** of variables in Robot Framework is crucial for effective test automation.
Variables can be defined in multiple places and ways, and their availability and precedence depend on where and how they are created.



### 5.1.1 Variable Priorities

> [!IMPORTANT]
> LXX Understand the difference between statically defined and dynamically created variables in Robot Framework (K2)

Variables can originate from various sources, and when variables with the same name exist,
Robot Framework resolves them based on their priority.

Several factors influence variable priority in Robot Framework: the type of variable, the time of (re-)definition, and the variable’s scope.

In general, there are two types of variables regarding how they are created:
- Statically defined or imported variables (e.g., in the `*** Variables ***` section, command-line options, imported resource files)
- Dynamically created variables during Robot Framework execution (e.g., using the `VAR` syntax, assignment of return values from keywords or keyword arguments)

Built-in variables cannot generally be sorted into one of these categories, as some are predefined globally while others are created during execution with a `SUITE` or `TEST` scope.


#### 5.1.1.1 Statically Defined or Imported Variables

> [!IMPORTANT]
> LXX Recall the priority of statically defined or imported variables in Robot Framework (K1)

The rule of thumb here is: **"First come, first served!"**

The time of definition has the greatest impact on the priority of these variables.

In descending order, the priority is as follows:

1. **Global Command-Line Variables**: Variables defined via command-line options like `--variable` or `--variablefile` have the highest priority. See [Global Variables via Command Line](#global-variables-via-command-line) for more details.

2. **`*** Variables ***` Section**: Variables defined in the `*** Variables ***` section of a suite are set before any resource file from the `*** Settings ***` section is imported. See [`*** Variables ***` Section](Chapter_3_Keyword_Design_Variables_Resources.md#-variables--section) for more details.

3. **Resource Files**: Variables from resource files are imported in the order they are specified in the `*** Settings ***` section. See [Resource Files](Chapter_2_Getting_Started.md#resource-files) for more details.

   Within a resource file, the same order applies: variables defined in the `*** Variables ***` section of a resource file have higher priority than variables imported from other resource files.

However, variables defined during Robot Framework execution can overwrite or shadow these variables.


#### 5.1.1.2 Dynamically Created Variables

> [!IMPORTANT]
> LXX Recall the priority of dynamically created variables in Robot Framework (K1)

Variables created or modified during execution have a higher priority than statically defined or imported variables.

The rule of thumb here is: **"Last one wins!"**

This is not entirely accurate, as the scope of a variable defines its lifetime and availability.
As long as a variable is in scope, the last definition takes precedence over the previous ones.

For example, a local variable defined as a [User Keyword Argument](Chapter_3_Keyword_Design_Variables_Resources.md#user-keyword-arguments) has a higher priority than a suite variable defined in the `*** Variables ***` section of the suite file.
However, once the keyword body scope is exited, the suite variable is back in scope with higher priority.


### 5.1.2 Variable Scopes

> [!IMPORTANT]
> LXX Recall the different variable scopes in Robot Framework (K1)

Variables in Robot Framework have different scopes, determining where they can be accessed and how long they are available.

#### 5.1.2.1 . Global Scope

> [!IMPORTANT]
> LXX Recall how to define global variables and where they can be accessed (K1)

- **Definition**: Variables accessible everywhere during the test execution.
- **Creation**:
  - Set from the command line using `--variable` or `--variablefile` options. (static)
  - Created during execution using the `VAR` syntax with the `scope=GLOBAL` argument at any point. (dynamic)
- **Usage**: Ideal for configuration parameters that need to be consistent across the entire test run.

Because global variables set via the command line have the highest priority, they can override other variables defined in the suite or resource files.
The most common use case for global variables is to define environment-specific or execution configurations, such as URLs, credentials, browser types, API keys, or similar data.

See [Global Variables via Command Line](#global-variables-via-command-line) for more details.

**Recommendation**:
Global variables should always be defined using uppercase letters, like `${GLOBAL_VARIABLE}`, to distinguish them from local variables.
Every global variable should have a corresponding default value defined either in a `*** Variables ***` section or imported from variable files, so that editors and IDEs can provide auto-completion and static code analysis.


#### 5.1.2.2 . Suite Scope

> [!IMPORTANT]
> LXX Recall how to define suite variables and where they can be accessed (K1)

- **Definition**: Variables accessible within the test suite where they are defined, including all its tests|tasks and keywords.
- **Creation**:
  - Defined in the `*** Variables ***` section of the suite file. (static)
  - Imported from resource or variable files. (static)
  - Set during the execution of a suite using the `VAR` syntax with the `scope=SUITE` argument. (dynamic)
- **Usage**: Useful for sharing data among tests/tasks within the same suite or configuring suite-specific settings or setting default values for global variables.

Suite scope is not recursive; variables in a higher-level suite are not available in lower-level suites. Use resource files to share variables across suites.

Variables with a suite scope are generally statically defined or imported variables, but they can also be created dynamically during the execution of a suite. In this latter case, they have a higher priority than statically defined variables and can shadow or overwrite them.

If a variable is defined in the `*** Variables ***` section of a suite file and is dynamically defined using the `VAR` syntax at the suite level, the variable value is overwritten with the new value.

If a global variable is defined using the command line, and a suite-level variable with the same name is dynamically defined, the suite variable now shadows the global variable and has higher priority as long as the suite is in scope. As soon as the suite is finished or a sub-suite is executed, the global variable is again in scope with higher priority.

**Recommendation**:
Suite variables should be defined using uppercase letters, like `${SUITE_VARIABLE}`, to distinguish them from local variables. These variables should be defined in the `*** Variables ***` section of the suite file, even if they are dynamically overwritten during execution, so they are visible in the editor or IDE and can be used for auto-completion and static code analysis.

#### 5.1.2.3 . Test|Task Scope

> [!IMPORTANT]
> LXX Recall how to define test|task variables and where they can be accessed (K1)

- **Definition**: Variables accessible within a single test|task and within all keywords it calls.
- **Creation**:
  - Created during test execution using the `VAR` syntax with the `scope=TEST` or `scope=TASK` argument. (dynamic)
- **Usage**: Appropriate for data that is specific to a single test|task.

Test|Task variables cannot be created in suite setup or teardown, nor can they be imported. Test|Task scope variables are not available in other tests|tasks, even within the same suite.
They can only be created dynamically, so they have higher priority than suite or global variables while in scope.
Once a test|task is finished, the variables are no longer available. If they have shadowed a suite or global variable, that variable returns to scope.

**Recommendation**:
Test|Task variables should be used only when there is a clear need to share data across multiple keywords within a single test|task and when this is known by all team members.
Otherwise, it is better to use local variables. Editor and IDE support for these variables is limited, so they should be used with caution.


#### 5.1.2.4 . Local Scope

> [!IMPORTANT]
> LXX Recall how to define local variables and where they can be accessed (K1)

- **Definition**: Variables accessible only within the keyword or test|task where they are defined.
- **Creation**:
  - Variables assigned by keyword return values.
  - Variables defined using the `VAR` syntax (optional: with `scope=LOCAL`) within a keyword or test|task.
  - Keyword arguments.
- **Usage**: Commonly used to temporarily store data and pass it to other keywords.

Local variables are the most commonly used variables in Robot Framework and have the fewest side effects. They should be preferred over other variable scopes unless there is an explicit need to share data across scope boundaries.

**Recommendation**:
Local variables should always be defined using lowercase letters, like `${local_variable}`, to distinguish them from other variables.

**Example of local variables**:

```robotframework
*** Test Cases ***
Test People In Room
    ${trainer_count}    Get Trainers In Room    # returns the integer 2
    ${trainee_count}    Get Trainees In Room    # returns the integer 12
    ${total_people}    Calculate Sum    ${trainer_count}    ${trainee_count}
    Should Be Equal As Numbers    ${total_people}    14

*** Keywords ***
Calculate Sum
    [Arguments]    ${num1}    ${num2}
    ${result}    Evaluate    ${num1} + ${num2}
    RETURN    ${result}
```

In this example, the variable `${trainer_count}` is only available in the test case itself and not in the keyword `Calculate Sum`.
Therefore, its value has to be passed as an argument to `Calculate Sum`, which assigns the value stored in `${trainer_count}` to the local variable `${num1}` within `Calculate Sum`.
Additionally, `${result}` is only available within `Calculate Sum`, and only its value is returned to the test case, where it is assigned to `${total_people}`.



### 5.1.3 Global Variables via Command Line

As described earlier, Global Variables can be statically defined via command line options or variable files.
While variable files are not part of this syllabus, it is important to be aware of the option to define global variables via command line.

The command line option `--variable` or `-v` can be used to define global variables.
This option can be used multiple times to define multiple variables.
The syntax is `--variable name:value` where `name` is the variable name without `${}` and `value` is the assigned value.

Only scalar string values are supported.

**Examples:**

- Simple String: `${name}` == `Robot` (str)
    ```shell
    robot --variable name:Robot .
    ```

- String with Spaces: `${hello}` == `Hello world` (str)
    ```shell
    robot -v "hello:Hello world" .
    ```

- Multiple Variables: `${name}` == `Robot` (str), `${version}` == `4.0` (str), `${patch}` == `${EMPTY}`
    ```shell
    robot -v "name:Robot Framework" -v version:4.0 -v patch: .
    ```



### 5.1.4 List-Variables (Advanced)

As explained in the `*** Variables ***` section under [List Variable Definition](Chapter_3_Keyword_Design_Variables_Resources.md#list-variable-definition), Robot Framework natively supports creating lists.
However, the at-syntax `@{var}` has different meanings when assigning values versus accessing values.


#### 5.1.4.1 Assigning List Variables

> [!IMPORTANT]
> LXX Recall that assignments to `@{list}` variables convert values to lists automatically (K1)

Using the at-syntax (`@{}`) is required to define a list variable with `VAR` syntax or in the `*** Variables ***` section, but it is optional when assigning return values, which are list-like, from keywords to a variable.

Example:

```robotframework
*** Test Cases ***
Test List Variables
    @{participants}    Get Participants                 # returns a list of names
    ${trainers}        Get Trainers                     # returns a list of trainers
```

Both assignments will contain a list if the keyword returns a list of values.

However, if a keyword returns something other than a list but still list-like, it will be assigned without changes to the scalar variable `${trainers}` and will be converted to a list when using the at-syntax, as in `@{participants}`.
List-like values can include Tuples, Sets, Dictionary Keys, or generator functions.
As long as a value is iterable, it can be assigned to a list variable using the at-syntax to ensure it is a list after assignment.

**Note**: Strings are iterable in Python; however, they are explicitly **NOT** converted to a list when assigned to a list variable to prevent mistakes.

#### 5.1.4.2 Accessing List Variables

> [!IMPORTANT]
> LXX Recall that `@{list}` unpacks the values of a list variable when accessed (K1)

Variables containing a list are generally accessed with the normal dollar-syntax `${var}`.
You can also access single values within a list using `${var}[0]` or `${var}[-1]`, and Robot Framework supports slicing, similar to Python, with `${var}[1:3]` or `${var}[1:]`.

However, in some cases, it is necessary to unpack the values of a list variable to use them as a sequence of multiple individual values. This is done using the at-syntax `@{var}` when accessing the variable.

Example:

```robotframework
*** Variables ***
@{participants}    Alice    Bob    Charlie


*** Test Cases ***
Test List Variables
    Log Many    Alice    Bob    Charlie        # Logs three entries:    "Alice", "Bob", and "Charlie"
    Log Many    @{participants}                # Logs three entries:    "Alice", "Bob", and "Charlie"
    Log Many    ${participants}                # Logs only one entry:   "['Alice', 'Bob', 'Charlie']"
```

In the first two cases, the keyword `Log Many` is called with three arguments; in the last case, it is called with only one argument, which is a list of three values.

This is particularly needed when using FOR-Loops. See [FOR Loops](#for-loops) for more details.



### 5.1.5 Dict-Like

As explained in the `*** Variables ***` section under [Dictionary Variable Definition](Chapter_3_Keyword_Design_Variables_Resources.md#dictionary-variable-definition), Robot Framework natively supports creating dictionaries.
However, the ampersand-syntax `&{var}` has different meanings when assigning values and when accessing values.


#### 5.1.5.1 Assigning Dictionary Variables

> [!IMPORTANT]
> LXX Recall that assignments to `&{dict}` variables automatically convert values to Robot Framework Dictionaries and enable dot-access (K1)

Using the ampersand-syntax (`&{}`) is required to define a dictionary variable with `VAR` syntax or in the `*** Variables ***` section, but it is optional when assigning return values from keywords to a variable that returns dictionaries.

Example:

```robotframework
*** Test Cases ***
Test Dictionary Variables
    &{participant}    Get Participant    number=4    # returns a dictionary with keys "name" and "age"
    ${trainer}        Get Trainer        number=1    # returns a dictionary with keys "name" and "age"
```

In the following example, the first assignment to `&{participant}` causes an automatic conversion to a Robot Framework Dictionary, also known as DotDict. These special dictionary types can be accessed using dot-access like `${participant.name}` or `${participant.age}`, instead of the usual dictionary access like `${trainer}[name]` or `${trainer}[age]`.


#### 5.1.5.2 Accessing Dictionary Variables

> [!IMPORTANT]
> LXX Recall that `&{dict}` unpacks to multiple key=value pairs when accessed (K1)

Variables containing dictionaries are typically accessed using the normal dollar-syntax `${var}`.
You can also access individual values by their keys using `${var}[key]` or `${var.key}` for Robot Framework Dictionaries.

However, in some cases, it is useful to unpack the key-value pairs of a dictionary variable to use them as a sequence of multiple key-value pairs. This is done using the ampersand-syntax `&{var}` when accessing the variable.

Example:

```robotframework
*** Variables ***
&{participant_one}    name=Alice    age=23
&{participant_two}    name=Bob      age=42

*** Keywords ***
Log Participant
    [Arguments]    ${name}    ${age}
    Log    ${name} is ${age} years old

*** Test Cases ***
Test Dictionary Variables
    Log Participant    John    33
    Log Participant    name=Pekka    age=44
    Log Participant    &{participant_one}
    Log Participant    &{participant_two}
```

Instead of calling the keyword `Log Participant` with two arguments, it is possible to use the unpacked dictionary variables `&{participant_one}` and `&{participant_two}` to call the keyword with two named arguments.
The dictionary keys act as the argument names and the values as the argument values.



### 5.1.6 Built-In Variables

> [!IMPORTANT]
> LXX Recall that Robot Framework provides access to execution information via Built-In variables (K1)

Robot Framework has a set of built-in variables that can be used in test cases, keywords, and other places. Some examples are:

| Variable         | Description                                                                                                                                                    |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ${CURDIR}        | An absolute path to the directory where the current suite or resource file is located. This variable is case-sensitive.                                       |
| ${TEMPDIR}       | An absolute path to the system temporary directory. In UNIX-like systems, this is typically /tmp, and in Windows, it is c:\Documents and Settings\<user>\Local Settings\Temp. |
| ${EXECDIR}       | An absolute path to the directory where test execution was started from.                                                                                       |

Additionally, suite-related or test|task-related variables are available. These variables can have different values during test execution, and some are not available at all times. Altering the value of these variables does not affect the original values.

| Variable              | Description                                    |
|-----------------------|------------------------------------------------|
| ${SUITE_NAME}         | The name of the current suite.                 |
| ${SUITE_SOURCE}       | The path to the file where the current suite is defined. |
| ${SUITE_DOCUMENTATION} | The documentation of the current suite.       |
| ${TEST_NAME}          | The name of the current test.                  |
| ${TEST_DOCUMENTATION} | The documentation of the current test.         |
| ${PREV_TEST_STATUS}   | The status of the previous test.               |

These variables can be used in test cases, keywords, and other places to access information about the current test execution.




## 5.2 Control Structures

Robot Framework is a Turing-complete language and supports all common control structures, including IF-Statements, FOR-Loops, WHILE-Loops, and TRY/EXCEPT blocks
While it is not expected that RCFPs can write complex control structures, they should understand their purpose.

In some cases, it is necessary to use control structures to handle different cases, iterate over a list of values, or execute an action until a condition is met.


### 5.2.1 IF Statements

> [!IMPORTANT]
> LXX Understand the purpose and basic concept of IF-Statements (K2)

The **IF/ELSE** syntax in Robot Framework is used to control the flow

 of test|task execution by allowing certain keywords to run only when specific conditions are met.
 This is achieved by evaluating conditions written as Python expressions, enabling dynamic decision-making within your tests|tasks.

The `IF` statement begins with the `IF` token and ends with an `END`, enclosing the keywords executed when the condition is true.
An optional `ELSE` or `ELSE IF` can specify alternative actions when the initial condition is false.
This structure enhances the flexibility and responsiveness of your tests|tasks, allowing them to adapt based on variables and outcomes encountered during execution.


#### 5.2.1.1 Basic IF Syntax

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

### 5.2.2 IF/ELSE IF/ELSE Structure

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

### 5.2.3 Inline IF Statement

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

### 5.2.4 FOR Loops

> [!IMPORTANT]
> LXX Understand the purpose and basic concept of FOR Loops (K2)

The `FOR` loop in Robot Framework repeats a set of keywords multiple times, iterating over a sequence of values.
This allows you to perform the same actions for different items without duplicating code, enhancing the efficiency and readability of your keyword logic.

Robot Framework has four types of FOR loops; this chapter focuses on the basic `FOR-IN` loop.
- `FOR-IN` is used to iterate over a list of values.

The other types are `FOR-IN-RANGE`, `FOR-IN-ENUMERATE`, and `FOR-IN-ZIP`, which are more advanced and less commonly used.
- `FOR-IN-RANGE` iterates over a range of numbers.
- `FOR-IN-ENUMERATE` iterates over a list of values and their indexes.
- `FOR-IN-ZIP` iterates over multiple lists simultaneously.

The `FOR` loop begins with the `FOR` token, followed by a loop variable, the `IN` token, and the iterable variable or list of values.
The loop variable takes on each value in the sequence one at a time, executing the enclosed keywords for each value.


#### 5.2.4.1 Basic FOR Loop Syntax

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



### 5.2.5 WHILE Loops

> [!IMPORTANT]
> LXX Understand the purpose and basic concept of WHILE Loops (K2)

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



### 5.2.6 BREAK and CONTINUE

> [!IMPORTANT]
> LXX Understand the purpose and basic concept of the BREAK and CONTINUE statements (K2)

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
