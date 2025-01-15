
# 4.3 Initialization Files

> [!IMPORTANT]
> LO-4.3 Recall how to define an Initialization Files and its purpose (K1)

As Robot Framework automation projects grow, organizing tests|tasks into directories becomes essential for managing complexity and maintaining a clear structure.
When suites are created from directories, these directories can contain multiple suites and tests|tasks, forming a hierarchical suite structure.
However, directories alone cannot hold suite-level settings or information.
To address this, Robot Framework uses **initialization files**, which allow you to define suite-level settings for directories.

An **initialization file** is a file named `__init__.robot` placed inside a directory that acts as a suite.
This file can contain suite-level settings that apply to the directory suite.



## 4.3.1 Purpose of Initialization Files

Initialization files enable you to:
- Define `Suite Setup` and `Suite Teardown` keywords for the directory suite.
- Set the name of the suite with the `Name` setting if it should be different from the directory name.
- Specify suite-level settings such as `Documentation` and `Metadata`.
- Set default `Test Setup`, `Test Teardown`, `Test Tags`, and `Test Timeout` for all tests|tasks within the directory (these can be overridden/extended in lower-level suites or tests|tasks).



## 4.3.2 Suite Setup and Suite Teardown of Initialization Files

> [!IMPORTANT]
> LO-4.3.2 Understand the execution order of Suite Setup and Suite Teardown in Initialization Files and their sub-suites and tests|tasks (K2)

As previously explained, **Suite Setup** and **Suite Teardown** are used to prepare and clean up the environment before and after a suite's execution.
Initialization files provide a centralized place to define these setups and teardowns for all sub-suites and their tests|tasks within a directory structure.
Thus, it is possible to define one Suite Setup that is executed at the very start of the execution before any other Suite Setup, Test|Task Setup, and Test|Task is executed.
The Suite Teardown of an initialization file is executed after all sub-suites in the directory and their tests|tasks have been completed.



## 4.3.3 Allowed Sections in Initialization Files

> [!IMPORTANT]
> LO-4.3.3 Recall the allowed sections and their content in Initialization Files (K1)

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



## 4.3.4 Example of an Initialization File

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




