# 4 Advanced Structuring and Execution

As a Robot Framework automation project expands, the increasing number of tests|tasks adds complexity to the project.
This chapter explores advanced structuring and execution techniques to effectively manage this complexity and control the execution flow.

We will cover methods for error handling and cleaning up after failed tests|tasks using **Teardowns**, as well as preparing individual or multiple suites and tests|tasks for execution with **Setups**.
Additionally, filtering subsets of tests|tasks based on tags will be discussed, which is essential for managing test|task execution efficiently.




## 4.1 Setups (Suite, Test|Task, Keyword)

> [!IMPORTANT]
> LO-setup-what Recall the purpose and benefits of Setups in Robot Framework (K1)
>
> LO-setup-level Understand the different levels where and how a Setup can be defined (K2)


Setups in Robot Framework are used to prepare the environment or system for execution or to verify that the requirements/preconditions needed for execution are met.
They can be defined at the suite, test|task, or keyword level and are executed before the respective scope begins execution.

A **Setup** is a single keyword with potential argument values that is called before all other keywords; or before tests|tasks in Suite Setup.

Examples of typical use cases for Setups are:
- Establishing connections to databases or services.
- Initializing test data or configurations.
- Setting the system under test to a known state.
- Logging into applications or systems.
- Navigating to the feature under test.



### 4.1.1 Suite Setup

> [!IMPORTANT]
> LO-suite-setup-what Recall key characteristics, benefits, and syntax of Suite Setup (K1)
>
> LO-suite-setup-exec Understand when Suite Setup is executed and used (K2)

A **Suite Setup** is executed before any tests|tasks or child suites within the suite are run.
It is used to prepare the environment or perform actions that need to occur before the entire suite runs.
Since it is only executed once before all tests|tasks or child suites, it can save time, rather than executing the action for each test|task individually.

**Key characteristics of Suite Setup:**
- Suite Setup is a single keyword call with potential argument values.
- Executed before any tests|tasks and child suites in the suite.
- If the Suite Setup fails, all tests|tasks in the suite and its child suites are marked as failed, and they are not executed.
- Logged in the execution log as a separate section, indicating the setup status.

**Typical use cases:**
- Ideal for checking **preconditions** that must be met before running the tests|tasks.
- Ensuring that the environment is ready for execution.
- Starting services or applications required for the suite.
- Preparing a system under automation to meet the suite's requirements.
- Loading configurations or resources shared across multiple tests|tasks.

Example of defining a Suite Setup:

```robotframework
*** Settings ***
Suite Setup    Initialize Environment   dataset=Config_C3
```



### 4.1.2 Test|Task Setup

> [!IMPORTANT]
> LO-tc-setup-what Recall key characteristics, benefits, and syntax of Test Setup (K1)
>
> LO-tc-setup-exec Understand when Test|Task Setup is executed and used (K2)

A **Test|Task Setup** is executed before a single test|task runs.
It is used to prepare the specific conditions required for that test|task.

You can define a default Test|Task Setup in the `*** Settings ***` section of the suite using the `Test Setup`|`Task Setup` setting.
This setup will be applied to all tests|tasks within the suite unless overridden.

Individual tests|tasks can override the default setup by specifying their own `[Setup]` setting within the test|task.
To disable the setup for a specific test|task, you can set `[Setup]    NONE`, which means that no setup will be executed for that test|task.

**Key characteristics of Test|Task Setup:**
- Test|Task Setup is a single keyword call with potential argument values.
- Executed before the test|task starts.
- If the Test|Task Setup fails, the test|task is marked as failed, and its body, including its main keywords, is not executed.
- Can be set globally for all tests|tasks in a suite and overridden locally.
- Logged in the execution log as a separate section, indicating the setup status.

**Typical use cases:**
- Setting up data unique to the test|task.
- Executing preparation steps to navigate to the automated task or feature under test.
- Distinguishing phases of a test|task in *setup* (aka *preparation* or *precondition checking*), *steps*, and *teardown* (aka *clean up* or *postconditions*).

Example of defining a default Test|Task Setup in the suite settings and overriding it on a test case:

```robotframework
*** Settings ***
Test Setup    Login As Standard User


*** Test Cases ***
User Action Test With Default Setup    # Default Test Setup is applied
    Perform User Actions    0815

Another User Action With Default Setup    # Default Test Setup is applied
    Perform another User Action    4711

Admin Access Test With Local Setup
    [Setup]    Login As Admin    # Override the default setup
    Perform Admin Actions   007

No Setup Test
    [Setup]    NONE    # Override and disable the setup by case-sensitive NONE
    Perform Actions Without Login   000
```



### 4.1.3 Keyword Setup

> [!IMPORTANT]
> LO-kw-setup-what Recall key characteristics and syntax of Keyword Setup (K1)

A **Keyword Setup** is executed before the body of a user keyword is executed.
It allows for preparation steps specific to that keyword or ensures that the keyword's requirements are met before execution.

**Key characteristics of Keyword Setup:**
- Keyword Setup is a single keyword call with potential argument values.
- Executed before the keyword's body.
- If the Keyword Setup fails, the keyword's body is not executed.
- Logged in the execution log as a separate section, indicating the setup status.

**Typical use cases:**
- Opening connections or files needed by the keyword.
- Initializing variables or data structures.
- Ensuring preconditions specific to the keyword are met.

Example of defining a Keyword Setup:

```robotframework
*** Keywords ***
Process Data
    [Setup]    Open Data Connection
    Process the Data
```




## 4.2 Teardowns (Suite, Test|Task, Keyword)

> [!IMPORTANT]
> LO-tear-level Understand the different levels where and how a Teardowns can be defined and when they are executed (K2)
>
> LO-tear-uc Recall the typical use cases for using a Teardowns (K1)

In automation, tests|tasks are typically executed in a linear sequence.
This linear execution can lead to issues when a preceding test|task fails, potentially affecting subsequent tests|tasks due to an unclean state of the system under test or the automated environment.
To prevent such issues, Robot Framework provides the **Teardown** functionality, which can be defined at the suite, test|task, or keyword level.

As mentioned before, a failure resulting in a keyword with the status `FAIL` will cause Robot Framework not to execute all subsequent keywords of the current test|task.
These not-executed keywords will receive the status `NOT RUN`.

A **Teardown** is a single keyword call with potential argument values that is executed after the child suites, test|tasks, and keywords have completed execution, regardless of the outcome, even if previously executed elements have failed.
It ensures that necessary cleanup actions are performed, maintaining the integrity of the environment for subsequent executions.

**Typical use cases for Teardowns include:**
- Cleaning up the system under test after a test|task has been executed.
- Closing connections to databases, files, or other resources.
- Resetting the system under test to a known state.
- Closing user sessions or logging out users.

By utilizing teardowns effectively, you can ensure that each test|task starts with a clean state,
reducing dependencies between tests|tasks and improving the reliability of your automation project.



### 4.2.1 Suite Teardown

> [!IMPORTANT]
> LO-suite-tear-what Recall key characteristics, benefits, and syntax of Suite Teardown (K1)
>
> LO-suite-tear-exec Understand when Suite Teardown is executed and used (K2)

A **Suite Teardown** is executed after all tests|tasks and all child suites in a suite have been executed.

The Suite Teardown is executed regardless of the outcome of the tests|tasks within the suite, even if the suite setup fails.

**Key characteristics of Suite Teardown:**
- Suite Teardown is a single keyword call with potential argument values.
- Executed after all tests|tasks and child suites have completed.
- Runs even if the Suite Setup fails or any test|task within the suite fails.
- If the Suite Teardown fails, all tests|tasks in the suite are marked as failed in reports and logs.
- All keywords within the Suite Teardown are executed, even if one of them fails, ensuring all cleanup actions are attempted.

**Typical use cases:**
- Cleaning up the environment after all test|task executions.
- Performing actions that need to occur after the entire suite has finished running.

Example of defining a Suite Teardown:

```robotframework
*** Settings ***
Suite Teardown    Close All Resources   force=True
```



### 4.2.2 Test|Task Teardown

> [!IMPORTANT]
> LO-tc-tear-what Recall key characteristics, benefits, and syntax of Test|Task Teardown (K1)
>
> LO-tc-tear-exec Understand when Test|Task Teardown is executed and used (K2)

A **Test|Task Teardown** is executed after a single test|task body has been executed.
It is used for cleaning up actions specific to that test|task.
The Test|Task Teardown is executed regardless of the test|task's outcome, even if the test|task's setup fails.

In Robot Framework, you can define a default Test|Task Teardown in the `*** Settings ***` section of the suite using the `Test Teardown`|`Task Teardown` setting.
This default teardown will be applied to all tests|tasks within the suite unless overridden.

Individual tests|tasks can override the default teardown by specifying their own `[Teardown]` setting within the test|task.
If you want to disable the teardown for a specific test|task, you can set `[Teardown]    NONE`, which effectively means that no teardown will be executed for that test|task.

It is recommended to define the local `[Teardown]` setting as the last line of the test|task.

**Key characteristics of Test|Task Teardown:**
- Test|Task Teardown is a single keyword call with potential argument values.
- Executed after the test|task has been executed, regardless of its status.
- Runs even if the Test|Task Setup fails.
- If the Test|Task Teardown fails, the test|task is marked as failed in reports and logs.
- All keywords within the Test|Task Teardown are executed, even if one of them fails.
- Can be set globally for all tests|tasks in a suite and overridden locally.

**Typical use cases:**
- Logging out of an application after a test|task completes.
- Deleting test data created during the test|task.
- Restoring configurations altered during the test|task.
- Distinguishing phases of a test|task in *setup* (aka *preparation* or *precondition checking*), *steps*, and *teardown* (aka *clean up* or *postconditions*).


Example of defining a default Test|Task Teardown in the suite settings:

```robotframework
*** Settings ***
Test Teardown    Logout User    # Default Teardown for all tests


*** Test Cases ***
Test with Default Teardown    # Default Teardown is applied
    Login User
    Do Some Testing

Another Test with Default Teardown    # Default Teardown is applied
    Login User
    Do Some other Testing

Custom Teardown Test
    Perform Test Steps
    [Teardown]    Cleanup Specific Data    # Override the default teardown

No Teardown Test
    Perform Other Steps
    [Teardown]    NONE    # Override and disable the teardown by case-sensitive NONE
```



### 4.2.3 Keyword Teardown

> [!IMPORTANT]
> LO-kw-tear-what Recall key characteristics, benefits, and syntax of Keyword Teardown (K1)

A **Keyword Teardown** is executed after a user keyword body has been executed.
It allows for cleanup actions specific to that keyword,
ensuring that any resources used within the keyword are properly released independently of failed child keyword calls.

For better readability, it should be written as the last line of a keyword.

**Key characteristics of Keyword Teardown:**
- Keyword Teardown is a single keyword call with potential argument values.
- Executed after the keyword body has been executed, regardless of its status.
- Runs even if the keyword's setup fails.
- All keywords within the Keyword Teardown are executed, even if one of them fails.

**Typical use cases:**
- Closing temporary files or connections opened within the keyword.
- Resetting variables or states altered during keyword execution.
- Logging additional information after keyword execution.

Example of defining a Keyword Teardown:

```robotframework
*** Keywords ***
Process Data
    Open Data Connection
    Process the Data
    [Teardown]    Close Data Connection
```




## 4.3 Initialization Files

As Robot Framework automation projects grow, organizing tests|tasks into directories becomes essential for managing complexity and maintaining a clear structure.
When suites are created from directories, these directories can contain multiple suites and tests|tasks, forming a hierarchical suite structure.
However, directories alone cannot hold suite-level settings or information.
To address this, Robot Framework uses **initialization files**, which allow you to define suite-level settings for directories.

An **initialization file** is a file named `__init__.robot` placed inside a directory that acts as a suite.
This file can contain suite-level settings that apply to the directory suite.



### 4.3.1 Purpose of Initialization Files

> [!IMPORTANT]
> LO-init-what Recall the purpose and possibilities of Initialization Files (K1)

Initialization files enable you to:
- Define `Suite Setup` and `Suite Teardown` keywords for the directory suite.
- Set the name of the suite with the `Name` setting if it should be different from the directory name.
- Specify suite-level settings such as `Documentation` and `Metadata`.
- Set default `Test Setup`, `Test Teardown`, `Test Tags`, and `Test Timeout` for all tests|tasks within the directory (these can be overridden/extended in lower-level suites or tests|tasks).



### 4.3.2 Suite Setup and Suite Teardown of Initialization Files

> [!IMPORTANT]
> LO-init-exec Understand the execution order of Suite Setup and Suite Teardown in Initialization Files and their sub-suites and tests|tasks (K2)

As previously explained, **Suite Setup** and **Suite Teardown** are used to prepare and clean up the environment before and after a suite's execution.
Initialization files provide a centralized place to define these setups and teardowns for all sub-suites and their tests|tasks within a directory structure.
Thus, it is possible to define one Suite Setup that is executed at the very start of the execution before any other Suite Setup, Test|Task Setup, and Test|Task is executed.
The Suite Teardown of an initialization file is executed after all sub-suites in the directory and their tests|tasks have been completed.



### 4.3.3 Allowed Sections in Initialization Files

> [!IMPORTANT]
> LO-init-sects Recall the allowed sections and their content in Initialization Files (K1)

Initialization files have the same structure and syntax as regular suite files but with some limitations.
The following sections are allowed in initialization files:

- **`*** Settings ***` Section (required)**:
  - `Name`: Set a custom name for the suite directory.
  - `Documentation`: Provide documentation for the suite.
  - `Metadata`: Add metadata to the suite.
  - `Suite Setup`: Define a keyword to be executed before any tests|tasks or child suites.
  - `Suite Teardown`: Define a keyword to be executed after all tests|tasks and child suites have completed.
  - `Test Setup`|`Task Setup`: Set a default setup keyword for all tests|tasks in the suite (can be overridden in lower-level suites or tests|tasks).
  - `Test Teardown`|`Task Teardown`: Set a default teardown keyword for all tests|tasks in the suite (can be overridden in lower-level suites or tests|tasks).
  - `Test Timeout`|`Task Timeout`: Define a default timeout for all tests|tasks in the suite (can be overridden in lower-level suites or tests|tasks).
  - `Test Tags`|`Task Tags`: Assign tags to all tests|tasks in the suite (applied recursively to all lower-level suites and tests|tasks and can be extended or reduced there).
  - `Library`, `Resource`, `Variables`: Import necessary libraries, resource files, or variable files.
  - `Keyword Tags`: Assign tags to all keywords in the local `*** Keywords ***` section.

- **`*** Variables ***` Section (optional)**:

  Define variables that are available to the initialization file.

- **`*** Keywords ***` Section (optional)**:

  Define keywords that are available to the initialization file for Suite Setup, Suite Teardown, Test Setup, or Test Teardown.

- **`*** Comments ***` Section (optional)**:

  Add comments to the initialization file.

**Important Note**: Variables and keywords defined or imported in the initialization file are **not** available to lower-level suites or tests|tasks.
They are local to the initialization file itself.
To share variables or keywords across multiple suites or tests|tasks,
use resource files and import them where needed.



### 4.3.4 Example of an Initialization File

```robotframework
*** Settings ***
Documentation    Initialization file for the Sample Suite
Suite Setup      Initialize Environment
Suite Teardown   Cleanup Environment


*** Variables ***
${BASE_URL}      http://example.com


*** Keywords ***
Initialize Environment
    Start Server
    Set Base URL            ${BASE_URL}
    Import Dataset          ${BASE_URL}/imports    dataset=Config_C3
    Verify Server Status    ${BASE_URL}   status=OK

Cleanup Environment
    Reset Database
    Stop Server
```




## 4.4 Test|Task Tags and Filtering Execution

> [!IMPORTANT]
> LO-tags-what Recall the purpose of Test|Task Tags in Robot Framework (K1)

In Robot Framework, **tags** offer a simple yet powerful mechanism for classifying and controlling the execution of tests|tasks.
Tags are free-form text labels that can be assigned to tests|tasks to provide metadata, enable flexible test selection, and organize test results.

Tags are also used to create a statistical summary of the test|task results in the execution protocols.

**Important Note**: Tags are case-insensitive in Robot Framework, but the first appearance of a tag in a test|task is used as the tag name in reports and logs in its current case.



### 4.4.1 Assigning Tags to Tests|Tasks

> [!IMPORTANT]
> LO-tag-asg Recall the syntax and different ways to assign tags to tests|tasks (K1)

Tags can be assigned to tests|tasks in several ways:

1. **At the Suite Level** using the `Test Tags` setting in the `*** Settings ***` section or in an initialization file (`__init__.robot`).
   This assigns tags to all tests|tasks within the suite:

    ```robotframework
    *** Settings ***
    Test Tags    smoke    regression
    ```

    This will assign the tags `smoke` and `regression` to all tests|tasks in the suite.

2. **At the Test|Task Level** using the `[Tags]` setting within individual tests|tasks. These tags are added in addition to any suite-level tags:

    ```robotframework
    *** Test Cases ***
    Valid Login Test|Task
        [Tags]    login    critical    -smoke
        Perform Login Steps
    ```

    This test|task will have the tags `login`, `critical`, and any tags assigned at the suite level, except `smoke`.
    Adding a minus sign (`-`) before a tag removes it from the test|task's tags.

3. **Using Variables** in tags to dynamically assign tag values:

    ```robotframework
    *** Variables ***
    ${ENV}    production

    *** Test Cases ***
    Data Processing Test|Task
        [Tags]    environment:${ENV}
        Process Data
    ```

    This test|task will have a tag `environment:production`.

4. **By Keyword `Set Tags` or `Remove Tags`** to dynamically assign or remove tags during test|task execution:

    See [BuiltIn](https://robotframework.org/robotframework/latest/libraries/BuiltIn.html#Set%20Tags) library documentation for more information.



### 4.4.2 Using Tags to Filter Execution

> [!IMPORTANT]
> LO-tag-filter Understand how to filter tests|tasks using the command-line interface of Robot Framework (K2)

Tags can be used to select which tests|tasks are executed or skipped when running a suite. This is accomplished using command-line options when executing Robot Framework.

When filtering for tests|tasks with a specific tag, you should always use the lowercase version of the tag because possible logical operators are case-sensitive and uppercase.
`AND`, `OR`, and `NOT` are the logical operators that can be used to combine tags in the filtering, but **they are not part of this syllabus!**


#### 4.4.2.1 Including Tests|Tasks by Tags

To include only tests|tasks that have a specific tag, use the `--include` (or `-i`) option followed by the tag name:

```shell
robot --include smoke path/to/tests
```

This command will execute only the tests|tasks that have the `smoke` tag.


#### 4.4.2.2 Excluding Tests|Tasks by Tags

To exclude tests|tasks that have a specific tag, use the `--exclude` (or `-e`) option followed by the tag name:

```shell
robot --exclude slow path/to/tests
```

This command will execute all tests|tasks except those that have the `slow` tag.
The excluded tests|tasks will not be executed or logged at all.
Use `--skip` to not execute tests|tasks but include them in the logs as skipped. See [4.5.1 Skipping By Tags Selection (CLI)](Chapter_4_Advanced_Structuring_and_Execution.md#451-skipping-by-tags-selection-cli) for more information.


#### 4.4.2.3 Combining Include and Exclude Options

You can combine `--include` and `--exclude` options to fine-tune which tests|tasks are executed:

```shell
robot --include regression --exclude unstable path/to/tests
```

This command will execute tests|tasks that have the `regression` tag but exclude any that also have the `unstable` tag.


#### 4.4.2.4 Using Tag Patterns

Tags can include patterns using wildcards `*` and `?` to match multiple tags:

- `*` matches any number of characters.
- `?` matches any single character.

Examples:
- Include tests|tasks with tags starting with `feature-`:

  ```shell
  robot --include feature-* path/to/tests
  ```

- Exclude tests|tasks with tags ending with `-deprecated`:

  ```shell
  robot --exclude *-deprecated path/to/tests
  ```



### 4.4.3 Reserved Tags

Tags starting with `robot:` are reserved for internal use by Robot Framework and should not be used in user-defined tags.
Using own tags with this prefix may lead to unexpected behavior in test execution and reporting.

- `robot:exclude`: Marks tests|tasks that should be excluded from execution similar to `--exclude`.
- `robot:skip`: Marks tests|tasks that should be skipped during execution similar to `--skip`.




## 4.5 SKIP Test|Task Status

> [!IMPORTANT]
> LO-skip-what Recall the use-case and purpose of skipping tests|tasks in Robot Framework (K1)
>
> LO-skip-ways Recall the different ways to skip tests|tasks in Robot Framework (K1)

In addition to `PASS` and `FAIL`, Robot Framework introduces a `SKIP` status to indicate that a test|task was explicitly skipped **during** execution. The `SKIP` status is useful when certain tests|tasks should not be executed, for example, due to unfulfilled preconditions, unfinished test logic, or unsupported environments. Skipped tests|tasks appear in logs and reports, clearly marked as skipped.

**Reasons to Use SKIP**

- **Temporal Exclusion of Tests|Tasks**: To prevent failing tests|tasks for known issues to run until the issue is resolved.
- **Conditional Execution**: Skip tests|tasks dynamically based on runtime conditions, i.e. if Suite Setup detected an issue.
- **Unsupported Scenarios**: Mark tests|tasks as skipped in environments where they cannot run, but shall be in logs.


### 4.5.1 Skipping By Tags Selection (CLI)

> [!IMPORTANT]
> LO-skip-excl-diff Recall the differences between skip and exclude (K1)

Tests|tasks can be skipped with `--skip` by tags when executing Robot Framework, similar to `--exclude`.
The difference between `--skip` and `--exclude` is that `--skip` will mark the tests|tasks as skipped in the report and log, while `--exclude` will not execute them at all.
Therefore skip is better for documenting that a specific test|task was not executed for a specific reason.

**Example**: If there is a defect in the System under Test (SUT) and a test|task has been written to reproduce the defect and tests its resolution, but the defect is not yet resolved, the test|task can be tagged with the defect-number and skipped until the defect should be resolved.

**Example**: Assuming there are different test environments and some tests can only be executed on specific environments, the tests can be tagged with the environment name and skipped on all other environments.

- **Command Line Option**: Use the `--skip` option to skip tests|tasks based on tags or tag patterns:
  ```shell
  robot --skip BUG-42 --skip mobile path/to/tests
  ```

- **Reserved Tag `robot:skip`**: Add the `robot:skip` tag to tests|tasks to mark them as skipped:
  This ensures the test|task appears in reports as skipped but is not executed.

### 4.5.2 Skipping Dynamically During Execution

Tests|tasks can be skipped dynamically within their execution with the `Skip` keyword based on runtime conditions.

The `Skip` keyword does stop the execution of a test|task and mark it as skipped with a custom message.
If a Test|Task Teardown exists, it will be executed.


### 4.5.3 Automatically Skipping Failed Tests

Tests|tasks can be automatically marked as skipped if they fail:

- **Command Line Option**: Use `--skiponfailure` with tags or tag patterns:
  ```shell
  robot --skiponfailure flaky path/to/tests
  ```

- **Reserved Tag `robot:skip-on-failure`**: Tag tests|tasks to skip automatically on failure.
