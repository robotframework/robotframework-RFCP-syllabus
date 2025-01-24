
# 4.4 Test|Task Tags and Filtering Execution

::::lo[Learning Objectives]

:::K1[LO-4.4]

Recall the purpose of Test|Task Tags in Robot Framework

:::

::::

In Robot Framework, **tags** offer a simple yet powerful mechanism for classifying and controlling the execution of tests|tasks.
Tags are free-form text labels that can be assigned to tests|tasks to provide metadata, enable flexible test selection, and organize test results.

Tags are also used to create a statistical summary of the test|task results in the execution protocols.

**Important Note**: Tags are case-insensitive in Robot Framework, but the first appearance of a tag in a test|task is used as the tag name in reports and logs in its current case.



## 4.4.1 Assigning Tags to Tests|Tasks

::::lo[Learning Objectives]

:::K1[LO-4.4.1]

Recall the syntax and different ways to assign tags to tests|tasks

:::

::::

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



## 4.4.2 Using Tags to Filter Execution

::::lo[Learning Objectives]

:::K2[LO-4.4.2]

Understand how to filter tests|tasks using the command-line interface of Robot Framework

:::

::::

Tags can be used to select which tests|tasks are executed or skipped when running a suite. This is accomplished using command-line options when executing Robot Framework.

When filtering for tests|tasks with a specific tag, you should always use the lowercase version of the tag because possible logical operators are case-sensitive and uppercase.
`AND`, `OR`, and `NOT` are the logical operators that can be used to combine tags in the filtering, but **they are not part of this syllabus!**


### 4.4.2.1 Including Tests|Tasks by Tags

To include only tests|tasks that have a specific tag, use the `--include` (or `-i`) option followed by the tag name:

```shell
robot --include smoke path/to/tests
```

This command will execute only the tests|tasks that have the `smoke` tag.


### 4.4.2.2 Excluding Tests|Tasks by Tags

To exclude tests|tasks that have a specific tag, use the `--exclude` (or `-e`) option followed by the tag name:

```shell
robot --exclude slow path/to/tests
```

This command will execute all tests|tasks except those that have the `slow` tag.
The excluded tests|tasks will not be executed or logged at all.
Use `--skip` to not execute tests|tasks but include them in the logs as skipped. See [4.5.1 Skipping By Tags Selection (CLI)](chapter-04/05_skip.md#451-skipping-by-tags-selection-cli) for more information.


### 4.4.2.3 Combining Include and Exclude Options

You can combine `--include` and `--exclude` options to fine-tune which tests|tasks are executed:

```shell
robot --include regression --exclude unstable path/to/tests
```

This command will execute tests|tasks that have the `regression` tag but exclude any that also have the `unstable` tag.


### 4.4.2.4 Using Tag Patterns

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



## 4.4.3 Reserved Tags

Tags starting with `robot:` are reserved for internal use by Robot Framework and should not be used in user-defined tags.
Using own tags with this prefix may lead to unexpected behavior in test execution and reporting.

- `robot:exclude`: Marks tests|tasks that should be excluded from execution similar to `--exclude`.
- `robot:skip`: Marks tests|tasks that should be skipped during execution similar to `--skip`.




