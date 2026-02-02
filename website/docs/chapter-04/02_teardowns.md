
# 4.2 Teardowns (Suite, Test|Task, Keyword)

::::lo[Learning Objectives]

:::K2[LO-4.2-1]

Understand the different levels where and how Teardowns can be defined and when they are executed

:::

:::K1[LO-4.2-2]

Recall the typical use cases for using Teardowns

:::

::::

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



## 4.2.1 Suite Teardown

::::lo[Learning Objectives]

:::K1[LO-4.2.1-1]

Recall key characteristics, benefits, and syntax of [Suite Teardown](../glossary#suite-teardown)

:::

:::K2[LO-4.2.1-2]

Understand when [Suite](../glossary#suite) Teardown is executed and used

:::

::::

A **Suite Teardown** is executed after all tests|tasks and all child suites in a suite have been executed.

The Suite Teardown is executed regardless of the outcome of the tests|tasks within the suite, even if the suite setup fails.

**Key characteristics of Suite Teardown:**
- Suite Teardown is a single keyword call with potential argument values.
- Executed after all tests|tasks and child suites have completed.
- Runs even if the [Suite Setup](../glossary#suite-setup) fails or any test|task within the suite fails.
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



## 4.2.2 Test|Task Teardown

::::lo[Learning Objectives]

:::K1[LO-4.2.2-1]

Recall key characteristics, benefits, and syntax of Test|[Task](../glossary#task) Teardown

:::

:::K2[LO-4.2.2-2]

Understand when Test|[Task Teardown](../glossary#test-teardown) is executed and used

:::

::::

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
- Runs even if the Test|[Task Setup](../glossary#test-setup) fails.
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



## 4.2.3 Keyword Teardown

::::lo[Learning Objectives]

:::K1[LO-4.2.3]

Recall key characteristics, benefits, and syntax of [Keyword](../glossary#keyword) Teardown

:::

::::

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





