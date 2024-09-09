# Chapter 1: Introduction to Robot Framework


## Purpose and Use-Cases

Robot Framework is a versatile, open-source automation framework that supports both test automation and robotic process automation (RPA). Initially designed for acceptance testing and other types of testing, it has since evolved to cover various automation tasks in both IT and business environments. Its keyword-driven approach allows users to create reusable components, making it accessible even to those with minimal programming skills. Robot Framework can be extended through a vast array of built-in and third-party libraries, allowing it to automate interactions with APIs, user interfaces, databases, and more.

### Test Automation

Robot Framework is widely used in various stages of test automation, focussing:

- **System testing**: Verifies the complete system’s behavior and capabilities, often including functional and non-functional aspects like usability. It may use simulations and is typically performed in a representative test environment.

- **System integration testing**: Focuses on testing the interaction between the system and external services, ensuring proper communication. This is done in a test environment similar to the real operational setup.

- **Acceptance testing**: Validates the system’s readiness for deployment, ensuring it meets business needs. Types include user, operational, and regulatory acceptance testing, often performed by end-users.

Additionally, it is often used for the **testing and verification of live systems in production** environments, ensuring that deployed systems behave as expected and highlighting any issues in real-time.


### Robotic Process Automation (RPA)

Robotic Process Automation (RPA) refers to the automation of repetitive, rule-based tasks using software bots that mimic human actions, such as interacting with user interfaces, APIs, and other system elements. Unlike traditional automation, RPA does not require changes to the underlying systems, making it a flexible solution for automating processes across various applications.

Robot Framework, with its keyword-driven approach and vast ecosystem of libraries, is widely adopted for RPA tasks due to its simplicity and scalability. It allows users to automate workflows using readable commands, while still enabling powerful customizations through Python.

Common use cases of RPA with Robot Framework include:

- **Data extraction and manipulation**: Automating data transfers and processing between systems.
- **Application interaction**: Automating tasks such as form submissions, clicks, and file operations across web or desktop applications.
- **Customer service automation**: Implementing bots to handle routine inquiries via chatbots or email processing.
- **Back-office automation**: Streamlining administrative tasks like invoice processing, report generation, and inventory management.

By leveraging Robot Framework for RPA, businesses can improve efficiency, reduce manual errors, and allow human workers to focus on more complex, strategic activities.





## Architecture of Robot Framework

Robot Framework is an open-source automation framework that allows you to build automation scripts for testing and RPA (Robotic Process Automation). It focuses on providing a keyword-driven or behavior-driven approach, making the automation easy to understand and maintain. However, it is not a full-stack solution that encompasses all layers of automation. Instead, it provides a flexible platform where different tools, libraries, and integrations handle specific tasks to implement a flexible automation solution.

### Robot Framework and the gTAA (Generic Test Automation Architecture)

The **Generic Test Automation Architecture (gTAA)** described in the ISTQB "Certified Tester Advanced Level Test Automation Engineering" offers a structured approach to test automation, dividing it into different layers for a clear separation of concerns:

- **Definition Layer**: This layer contains the "Test Data" (test cases, tasks, resource files which include user keywords and variables). In Robot Framework, the test data is written using the defined syntax and contains keyword calls and argument values that make the test case or task definitions structured in suites.
Also Editors that offer support for Robot Framework's syntax can be part of this layer.

- **Execution Layer**: In Robot Framework, the execution layer consists of the framework itself, including its core components and APIs. It parses, interprets and executes the test data syntax to build an execution model. The execution is responsible for processing this execution model to execute the library keywords with their argument values, logging results, and generating reports.

- **Adaptation Layer**: This layer provides the connection between Robot Framework and the system under test (SUT). In Robot Framework, this is where the keyword libraries, such as those for UI, API, or database interactions, are located. These libraries allow interaction with different technologies and interfaces, ensuring the automation is flexible and adaptable to various environments.

### What is Robot Framework & What It Is Not

Robot Framework itself focuses primarily on **test execution**. It includes:

- A parser to read test data.
- A result generation mechanism to provide logs and reports.
- A collection of generic standard libraries to process and handle data or interact with files and processes.
- Defined APIs for extensions and customizations.

However, Robot Framework **does not** include:

- Specific keyword libraries to control systems under test/RPA.
- UI or API automation libraries
- Code editors or IDEs.

Robot Framework defines the syntax for test data, but it is the role of external libraries and tools to extend its functionality for specific automation needs.

Additionally, Robot Framework supports integration with CI/CD pipelines, configuration management tools, and test management systems, making it versatile in various automation environments.

### Technology & Prerequisites

Robot Framework is built on **Python** but is adaptable to other languages and technologies through external libraries. To run Robot Framework, a **Python interpreter** is required on the machine executing the tests|tasks. Typically, Robot Framework and its libraries are installed via [PyPi.org](https://pypi.org/project/robotframework/), allowing for straightforward installation and setup.


## Basic Syntax & Structure

Robot Framework is a script-based interpreter for files that contain textual specifications. These files are typically organized into folders. The syntax of Robot Framework is designed to be simple and human-readable, allowing for quick learning and ease of use.

Key attributes of the syntax include:

- **Space-separated syntax**: Robot Framework uses two spaces as the primary separator (although one space is allowed as a character). This ensures clarity and readability of the tests.
- **Minimal use of special characters**: The focus is on reducing special characters, making the syntax intuitive and user-friendly.

### What are Tests/Tasks?

In Robot Framework, **Tests** or **Tasks** are executable entities that serve a specific purpose and are organized into suites. A **Test** is synonymous with a **Test Case**, while **Tasks** are used in RPA mode, where the automation is not focused on testing but on automating business processes.

Tests or Tasks have a body made up of **keyword calls**, which represent the actions or steps executed during the test or task. These keywords make the automation modular, reusable, and readable.

### Files & Folders

Robot Framework organizes tests and tasks into **Suites**, which can be represented as files or folders.

- Each folder, starting from the top-level folder (the one executed by Robot Framework), and any subfolder that contains a `*.robot` file, is considered a **Suite**.
- `*.robot` files are themselves test suites, and suites can contain other suites, forming a hierarchical **suite tree**.

This structure allows for logical grouping and organization of tests and tasks, which can scale as needed.

### What are Keywords?

Tests or Tasks are structured using **Keywords**, which represent specific actions or sequences of actions to be performed.

- **Keywords** in Robot Framework are similar to the concepts used in Behavior-Driven Development (BDD) or Keyword-Driven Testing.
- **Definition**: A keyword is one or more words used as a reference to a specific set of actions intended to be performed during the execution of one or more tests or tasks.

There are two types of keywords in Robot Framework:

1. **User Keywords**: Written in Robot Framework syntax, they are mainly used for structuring test cases. User keywords improve readability and maintainability and allow control over the flow of the tests.
2. **Library Keywords**: Typically written in Python or other technologies, these keywords interact with the system under test (SUT) or execute specific actions.

A **User Keyword** consists of a **name**, **optional arguments**, and a **body** of keyword calls that may invoke other user or library keywords.

### Resource Files & Libraries

While tests and tasks are organized into suites, **keywords** are organized into **Resource Files** and **Keyword Libraries**.

- **Resource Files**: Contain **User Keywords**, and are also used to organize the importing of libraries and defining variables.
- **Keyword Libraries**: Contain **Library Keywords** that perform the actual actions on the system under test, typically implemented in Python or other technologies.

Resource files and libraries allow the separation of concerns, making the automation more modular and reusable across multiple tests or tasks.

These concepts are fundamental to working with Robot Framework and contribute to its flexibility and scalability in both test automation and robotic process automation (RPA).


## Specification styles
<!-- Styles are appliable to all kinds of automation use.
Thise styles may be used for KDT or BDD but are not exclusive for either testing or those specific methods!
 -->
### Keyword-Driven Specification
<!-- maybe ISO? or do we want our own definition -->
### Behavior-Driven Specification
<!-- Embedded Arguments and Given/When/Then -->


## Organization and Licensing
### Open Source License
<!-- About Apache 2.0 and its main concept/advantages.
- Permissive License!
- No warrantee
- Keep Author and Changes visible -->
### About the Robot Framework Foundation
<!-- Take Definition and Purpose from the Articles of Association -->
### Robot Framework Webpages ???
<!-- Basic knowledge which pages are from robot framework like rf.org -->


