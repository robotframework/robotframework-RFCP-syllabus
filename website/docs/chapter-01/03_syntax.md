
# 1.3 Basic Syntax & Structure

::::lo[Learning Objectives]

:::K1[LO-1.3]

Recall the key attributes of the syntax that makes Robot Framework simple and human-readable

:::

::::

Robot Framework is a script-based interpreter for files that contain textual specifications.
These files are typically organized into directories.
The syntax of Robot Framework is designed to be simple and human-readable, allowing for quick learning and ease of use.

Key attributes of the syntax that improves the before mentioned:

- **Space-separated syntax**: Robot Framework uses two or more spaces as the primary separator (although one space is allowed as a character).
  A use of **FOUR (4)** spaces is recommended to ensure clarity and readability of the specification.
- **Indentation based blocks**: Code blocks like test, task or keyword bodies are defined by indentation.
  This makes the structure clear and easy to follow.
- **Reduced use of special characters**: Compared to programming languages the focus is on reducing special characters, making the syntax human-readable and user-friendly.
- **String first**: Unquoted strings are considered as strings, while variables need special syntax.
- **Single spaces are valid**: Single spaces are valid as a character in most elements and values without quotation.
- **Mostly case-insensitive**: Most elements like keyword or variable names are case insensitive.
However, some syntax, like library imports is case-sensitive.

:::tip[Note]

This syllabus does NOT cover other formats like Pipe-Separated ( | ) Format or Restructured Text or JSON!

:::

Example of test cases with their keyword calls written in Robot Framework:

```robotframework
*** Settings ***
Documentation     A test suite for valid login.
...
...               Keywords are imported from the resource file
Resource          keywords.resource
Suite Setup       Connect to Server
Test Teardown     Logout User
Suite Teardown    Disconnect


*** Test Cases ***
Access All Users With Admin Rights
    [Documentation]    Tests if all users can be accessed with Admin User.
    Login Admin
    Check All Users

Create User With Admin Rights
    [Documentation]    Tests if a new users can be created with Admin User.
    Login Admin
    Create New User
    ...    name=Peter Parker
    ...    login=spider
    ...    password=123spiderman321
    ...    right=user
    Verify User Details    spider    Peter Parker
    Logout User
    Login User    spider    123spiderman321
```


## 1.3.1 What are Test Cases / Tasks?

In Robot Framework, **Test Cases** (**Tests**) or **Tasks** are executable entities that serve a specific purpose and are organized into suites.
A **Test** is synonymous with a **Test Case**, while **Task**, technically being the same, is used in RPA mode, where the automation is not focused on testing but on automating business processes.

Tests or Tasks have a body made up of **keyword calls** and Robot Framework statements like **IF** or **VAR**, which represent the actions or steps executed during the test or task execution.
These keywords make the automation modular, maintainable, reusable, and readable.



## 1.3.2 Files & Directories

Robot Framework organizes tests|tasks into **Suites**, which are either files or directories.

- `*.robot` files that do contain test cases or tasks are suites.
- Each directory, starting from the top-level directory (the one executed by Robot Framework), and any sub-directories that contains a `*.robot` suite file, is considered a **Suite** as well.
Suites can contain other suites, forming a hierarchical tree, which is by default alphabetically ordered.
See [2.1 Suite File & Tree Structure](chapter-02/01_suitefile.md) for more details.

This structure allows for logical grouping and organization of tests and tasks, which can scale as needed.



## 1.3.3 What are Keywords?

::::lo[Learning Objectives]

:::K2[LO-1.3.3]

Explain the difference between User Keywords and Library Keywords

:::

::::


Tests or Tasks are structured using **Keywords**, which represent specific actions or sequences of actions to be performed.

**Keywords** in Robot Framework are according to the concepts used in Behavior-Driven Development (BDD) and Keyword-Driven Testing.

**Definition**: one or more words used as a reference to a specific set of actions intended to be performed during the execution of one or more tests or tasks.

There are two types of keywords in Robot Framework:

1. **User Keywords**: Written in Robot Framework syntax, they are mainly used for structuring tests|tasks. User keywords improve readability, understandability, maintainability and structure. These keywords do always call other keywords or commands within their body. That's why they are also called **higher-level keywords**. In other literature these kind of keywords are also called **Business Keywords** or **Composite Keywords**.
2. **Library Keywords**: Typically written in Python, but may also be implemented in other technologies. These keywords typically interact with the system under test (SUT) or the system to be controlled by RPA or execute specific actions like calculations or conversions. From the viewpoint of Robot Framework these keywords are not composed of other keywords and do form the lowest level of keywords. Therefore they are also referred to as **low-level keywords**. In other literature these kind of keywords are also called **Technical Keywords** or **Atomic Keywords**.

A **User Keyword** consists of a **name**, optional **arguments**, and a **body** of keyword calls that may invoke other user keywords or library keywords or other statements like variable definitions or flow control.

During execution, each keyword call is logged, providing fine-grained detail in the execution logs.
This includes all levels of keywords—from those called directly by a test or task to those nested within user keywords, all the way down to the execution of library keywords.
This granular logging and detailed execution documentation is one of the key advantages of Robot Framework compared to other automation tools.



## 1.3.4 Resource Files & Libraries

::::lo[Learning Objectives]

:::K1[LO-1.3.4]

Recall the difference between Resource Files and Libraries and their artifacts

:::

::::

While tests and tasks are organized into suites, **keywords** are organized into **Resource Files** and **Keyword Libraries**.

- **Resource Files**: Contain **User Keywords**, and are also used to organize the importing of libraries and defining variables. These are considered to be part of the test|task data in the *Definition Layer*.
- **Keyword Libraries**: Contain **Library Keywords**, which are typically implemented in Python or other technologies and except of the standard libraries are not part of Robot Framework itself and can be either custom-made or third-party libraries implemented by the Robot Framework community. These are considered to be part of the *Adaptation Layer*.

Central resource files and libraries allow the separation of concerns, making the automation more modular and reusable across multiple suites, tests or tasks.

The concepts of organizing are fundamental to working with Robot Framework and contribute to its flexibility and scalability in both test automation and RPA.




