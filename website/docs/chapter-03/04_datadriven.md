
# 3.4 Using Data-Driven Specification

::::lo[Learning Objectives]

:::K2[LO-3.4]

Understand the basic concept and syntax of Data-Driven Specification

:::

::::

The **Data-Driven Specification** style in Robot Framework separates test|task logic from data, enabling tests|tasks to be executed with multiple data sets efficiently. This approach involves using a single higher-level keyword to represent the entire workflow, while the test data is defined as rows of input and expected output values.

## 3.4.1 Test|Task Templates

::::lo[Learning Objectives]

:::K2[LO-3.4.1-1]

Understand how to define and use test|task templates

:::

:::K1[LO-3.4.1-2]

Recall the differences between the two different approaches to define Data-Driven Specification

:::

::::

For each test|task, a template keyword can be defined that contains the workflow logic.

At the suite level, the `Test Template` or `Task Template` setting can be used to specify that keyword.
All tests|tasks in the suite will reuse this keyword for execution with different data sets.

Alternatively, the `[Template]` setting can be used at the test|task level.
The tests|tasks would not have any other keyword calls but would instead define the data rows to be passed to the template keyword.

`Test Setup`|`Test Teardown` and `Task Setup`|`Task Teardown` can be used together with templates.


### 3.4.1.1 Multiple Named Test|Task With One Template

::::lo[Learning Objectives]

:::K1[LO-3.4.1.1]

Recall the syntax and properties of multiple named test|task with one template

:::

::::

The following example has six different test|task, each with different name and different data sets, all using the `Login With Invalid Credentials Should Fail` keyword template.

```robotframework
*** Settings ***
Test Setup       Open Login Page
Test Template    Login With Invalid Credentials Should Fail
Test Teardown    Close Page

*** Test Cases ***                USERNAME         PASSWORD
Invalid User Name                 invalid          ${VALID PASSWORD}
Invalid Password                  ${VALID USER}    invalid
Invalid User Name and Password    invalid          invalid
Empty User Name and Password      ${EMPTY}         ${EMPTY}
    [Tags]    Empty
Empty User Name                   ${EMPTY}         ${VALID PASSWORD}
Empty Password                    ${VALID USER}    ${EMPTY}
```

The advantage of this approach is that each test|task is executed separately with its own name and data set.
Each test|task appears in the statistics and reports.
Single tests|tasks can be filtered and re-executed or tagged, like the test case `Empty User Name and Password`.

It is possible to add header names to the data columns in the line of `*** Test Cases ***` or `*** Tasks ***` to describe the data columns to improve readability.


### 3.4.1.2 Named Test|Task With Multiple Data Rows:

::::lo[Learning Objectives]

:::K1[LO-3.4.1.2]

Recall the syntax and properties of named test|task with multiple data rows

:::

::::

A slightly different approach is to define multiple data rows for a single test|task.

This is still possible with a single template defined in the `*** Settings ***` section, but in this case it would also make sense to define the template locally for each test|task with the `[Template]` setting.
With this approach, it is possible to define different scenarios in the same suite file, which can be useful for testing different aspects of the same functionality.

```robotframework
*** Test Cases ***
Invalid Logins
    [Template]    Login With Invalid Credentials Should Fail
    invalid          ${VALID PASSWORD}
    ${VALID USER}    invalid
    invalid          whatever
    ${EMPTY}         ${VALID PASSWORD}
    ${VALID USER}    ${EMPTY}
    ${EMPTY}         ${EMPTY}

Valid Logins
    [Template]    Login With Valid Credentials Should Pass
    ${VALID USER}            ${VALID PASSWORD}
    ${VALID LONG USER}       ${VALID LONG PASSWORD}
    ${VALID COMPLEX USER}    ${VALID COMPLEX PASSWORD}
```

If one data row fails, this template execution is marked FAIL and the test|task is marked FAIL, but **the other data rows are still executed**.

This approach creates only a single tests|tasks for multiple data rows in the logs and reports, which can be beneficial statistically.

However, this approach has also its drawbacks:

- Test|task setup and teardown are executed only once for all data rows of one test|task.
  If there is a setup and teardown needed for each data row, a keyword setup or teardown is needed.
- The test|task name is not unique for each data row, which can make it harder to understand the failing data row in the logs.
- Filtering and re-execution of some or single data rows is not possible.





