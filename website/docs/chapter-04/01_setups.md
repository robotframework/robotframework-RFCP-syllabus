
# 4.1 Setups (Suite, Test|Task, Keyword)

> [!IMPORTANT]
> LO-4.1-1 Recall the purpose and benefits of Setups in Robot Framework (K1)
>
> LO-4.1-2 Recall the different levels where a Setup can be defined (K1)


Setups in Robot Framework are used to prepare the environment or system for execution or to verify that the requirements/preconditions needed for execution are met.
They can be defined at the suite, test|task, or keyword level and are executed before the respective scope begins execution.

A **Setup** is a single keyword with potential argument values that is called before all other keywords; or before tests|tasks in Suite Setup.

Examples of typical use cases for Setups are:
- Establishing connections to databases or services.
- Initializing test data or configurations.
- Setting the system under test to a known state.
- Logging into applications or systems.
- Navigating to the feature under test.



## 4.1.1 Suite Setup

> [!IMPORTANT]
> LO-4.1.1-1 Recall key characteristics, benefits, and syntax of Suite Setup (K1)
>
> LO-4.1.1-2 Understand when Suite Setup is executed and used (K2)

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



## 4.1.2 Test|Task Setup

> [!IMPORTANT]
> LO-4.1.2-1 Recall key characteristics, benefits, and syntax of Test Setup (K1)
>
> LO-4.1.2-2 Understand when Test|Task Setup is executed and used (K2)

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



## 4.1.3 Keyword Setup

> [!IMPORTANT]
> LO-4.1.3 Recall key characteristics and syntax of Keyword Setup (K1)

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




