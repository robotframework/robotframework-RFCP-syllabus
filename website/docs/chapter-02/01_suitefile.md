
# 2.1 Suite File & Tree Structure

::::lo[Learning Objectives]

:::K2[LO-2.1]

Understand which files and directories are considered suites and how they are structured in a suite tree.

:::

::::

When executing Robot Framework, it either parses directory trees or files, depending on which paths are given.

The given path to Robot Framework where it starts parsing is considered the **Root Suite**.

If the path to a single file is given as **Root Suite** directly to Robot Framework, only this file is parsed.

If a directory path is given, starting at this location, Robot Framework will parse all `*.robot` files and directories within this path.
Robot Framework analyzes all containing files and determines if they contain test cases or tasks. If they do, they are considered **Suite Files** or **Low-Level Suites**.
All directories that either directly or indirectly contain a [Suite](../glossary#suite) File are considered **Suites Directories** or **Higher-Level Suites**.

The ordering of suites during execution is, by default, defined by their name and hierarchy.
All files and directories, which are suites in one directory, are considered on the same level and are executed in case-insensitive alphabetical order.


It is possible to define the order without influencing the name of the suite by adding a prefix followed by two underscores `__` to the name of the directory or file. This prefix is NOT considered part of the name.
So `01__First_Suite.robot` sets the suite name to `First Suite`, while `2_Second_Suite.robot` sets the suite name to `2 Second Suite`.

One or more underscores in file or directory names are replaced by space characters as suite names.

Legend:
```plaintext
▷ Directory (No Suite)
▶︎ Suite Directory
◻︎ File (No Suite)
◼︎ Suite File
```

Example:
```plaintext
 ----- Tree Structure / Order --------- | ---- Suite Name ---------
  ▶︎ Root_Suite                          | Root Suite
    ◼︎ A_Suite.robot                     | A Suite
    ▶︎ Earlier_Suite_Directory           | Earlier Suite Directory
      ◼︎ B_Suite.robot                   | B Suite
      ◼︎ C_Suite.robot                   | C Suite
    ▷ Keywords (No Suite)               |
      ◻︎ technical_keywords.resource     |
    ▶︎ Later_Suite_Directory             | Later Suite Directory
      ◼︎ 01__First_Suite.robot           | First Suite
      ◼︎ 02__Second_Suite.robot          | Second Suite
      ▶︎ 03__Third_Suite                 | Third Suite
        ◼︎ 01__First_Sub_Suite.robot     | First Sub Suite
        ◼︎ 02__Second_Sub_Suite.robot    | Second Sub Suite
      ◼︎ 04__Fourth_Suite.robot          | Fourth Suite
```



## 2.1.1 Suite Files

::::lo[Learning Objectives]

:::K1[LO-2.1.1]

Recall the conditions and requirements for a file to be considered a Suite file

:::

::::

Robot Framework parses files with the extension `.robot` and searches for test cases or tasks within these files.

A parsed file that contains at least one test case or task is called a **Suite File**.

A Suite File **either** contains `*** Test Cases ***` (in Test Suites) **or** `*** Tasks ***` (in [Task](../glossary#task) Suites), but it CANNOT contain both types simultaneously.



## 2.1.2 Sections and Their Artifacts

::::lo[Learning Objectives]

:::K1[LO-2.1.2]

Recall the available sections in a suite file and their purpose.

:::

::::

Robot Framework data files are defined in different sections.
These sections are recognized by their header row.
The format is `*** <Section Name> ***` with three asterisks before and after the section name and section names in **Title Case** separated by a space.

The following sections are recognized by Robot Framework and are recommended to be used in the order they are listed:
- `*** Settings ***`
- `*** Variables ***`
- `*** Test Cases ***` or `*** Tasks ***` (mandatory in Suite Files)
- `*** Keywords ***`
- `*** Comments ***`

The sections `*** Settings ***`, `*** Variables ***`, `*** Keywords ***`, and `*** Comments ***` are optional in suite files and can be omitted if not needed.


### 2.1.2.1 Introduction to `*** Settings ***` Section

::::lo[Learning Objectives]

:::K1[LO-2.1.2.1-1]

Recall the available settings in a suite file.

:::

:::K2[LO-2.1.2.1-2]

Understand the concepts of suite settings and how to define them.

:::

::::

The `*** Settings ***` section is used to configure various aspects of the test|task suite.
It allows you to import keywords from external libraries (`Library`) or resource files (`Resource`), and import variables (`Variables`) from variable files (not part of this syllabus) that are needed for execution in the containing tests|tasks.

In this section, the suite name, that is normally derived from the file name, can be redefined with the `Name` setting and its documentation can be defined with the `Documentation` setting.

Additional metadata can be defined by multiple `Metadata` entries, which can contain key-value pairs that can be used to store additional information about the suite, like the author, the version, or related requirements of the suite.

This section can also define keywords called for execution flow control, such as `Suite Setup` and `Suite Teardown`, which are executed before and after the suite's tests run. See [4.1 Setups (Suite, Test|Task, Keyword)](chapter-04/01_setups.md) and
[4.2 Teardowns (Suite, Test|Task, Keyword)](chapter-04/02_teardowns.md) for more information.

Additionally, some settings can define defaults for all tests|tasks in the suite, which can be extended or overwritten in the individual tests|tasks.
Those settings are prefixed with either `Test` or `Task`, according to the type of suite and the following section type (`*** Test Cases ***` or `*** Tasks ***`), like `Test Timeout`, while the local setting is in square brackets and without the prefix like: `[Timeout]`.


- `Test Setup`/`Task Setup` (locally: `[Setup]`) and `Test Teardown`/`Task Teardown` (locally `[Teardown]`) define which keywords are executed before and after each individual test|task. The local setting overrides the suite's default. See [4.1 Setups (Suite, Test|Task, Keyword)](chapter-04/01_setups.md) and
[4.2 Teardowns (Suite, Test|Task, Keyword)](chapter-04/02_teardowns.md) for more information.

- `Test Timeout`/`Task Timeout` (locally `[Timeout]`) defines the maximum time a test|task is allowed to run before it is marked as failed. The local setting overrides the suite's default.

- `Test Tags`/`Task Tags` (locally `[Tags]`) define tags that are assigned to tests|tasks in the suite and can be used to filter tests|tasks for execution or for attributing information to the tests|tasks. The local setting appends or removes tags defined by the suite's default. See [4.4 Test|Task Tags and Filtering Execution](chapter-04/04_tags.md) for more information.

- `Test Template`/`Task Template` (locally `[Template]`) defines a template keyword that defines the test|task body and is typically used for Data-Driven Testing where each test has the same keywords but different argument data. The local setting overrides the suite's default.

Similar to test|task tags, also keyword tags can be defined in the `*** Settings ***` section with the `Keyword Tags` (locally `[Tags]`) setting, which can be used to set keyword tags to the keywords. The local setting appends or removes tags defined by the suite's default.


### 2.1.2.2 Introduction to `*** Variables ***` Section

::::lo[Learning Objectives]

:::K1[LO-2.1.2.2]

Recall the purpose of the `*** Variables ***` section.

:::

::::

This section is used to define suite variables that are used in the suite or its tests|tasks or inside their keywords.

The most common use case is to define these variables as constants that contain a static value during execution.
This can either be a default value, that may be overwritten by globally defined variables via the [Command Line Interface](../glossary#command-line-interface) (CLI) or a constant value that is used in multiple places in the suite.

In some cases, these variables are also dynamically reassigned during the execution of the suite, but this is not recommended and should be avoided if possible, because this may lead to test|task runtime dependancies and errors caused by these side-effects that are hard to debug and find.

See [3.2.2 `*** Variables ***` Section](chapter-03/02_variables.md#322--variables--section) for more information about the `*** Variables ***` section.


### 2.1.2.3 Introduction to `*** Test Cases ***` or `*** Tasks ***` Section

::::lo[Learning Objectives]

:::K2[LO-2.1.2.3]

Understand the purpose of the `*** Test Cases ***` or `*** Tasks ***` section.

:::

::::

This section defines the executable elements of a suite.
Test cases and tasks are technically synonyms for each other.
However, users have to choose one of the two modes of suite execution that Robot Framework offers.

Each test case or task is structured using an indentation-based format. The first un-indented line specifies the name of the test|task, followed by indented lines containing **keyword calls** and their possible **arguments** and test|task-specific settings.
These optional settings like `[Setup]`, `[Teardown]`, and `[Timeout]` can be applied to individual test cases or tasks to control their behavior or provide additional details.

A suite file must contain either a `*** Test Cases ***` or a `*** Tasks ***` section, but not both. Resource files cannot contain either of them.

See [2.6 Writing Test|Task and Calling Keywords](chapter-02/06_writing_test.md) for more information about the `*** Test Cases ***` or `*** Tasks ***` section.

<!-- TODO maybe more references to [Test Setup](../glossary#test-setup)/Teardown or Documentation? -->

### 2.1.2.4 Introduction to `*** Keywords ***` Section

::::lo[Learning Objectives]

:::K2[LO-2.1.2.4]

Understand the purpose and limitations of the `*** Keywords ***` section.

:::

::::

This section allows you to define **locally scoped user keywords** that can only be used within this suite where they are defined,
while keywords defined in resource files can be used in any suite that imports these resource files.
Keywords defined in a suite are therefore not reusable outside the suite,
but they are often used to organize and structure tests|tasks for improved readability and maintainability.
This section is particularly useful for defining suite-specific actions,
such as **Suite Setup** keywords or similar kinds,
which are relevant only to the suite they belong to.

While these keywords are not globally accessible,
they serve a crucial role in making the suite more modular
and understandable by breaking down complex sequences into smaller, manageable parts.
Defining keywords locally in this section enhances the maintainability of the tests|tasks within the suite,
ensuring that even large and intricate suites remain well-structured and easy to manage.

See [3.3.1 `*** Keywords ***` Section](chapter-03/03_user_keyword.md#331--keywords--section) for more information about the `*** Keywords ***` section.


### 2.1.2.5 Introduction to `*** Comments ***` Section

This section is used to add comments to the suite file or resource file.
All content in this section is ignored by Robot Framework and is not executed or parsed.





