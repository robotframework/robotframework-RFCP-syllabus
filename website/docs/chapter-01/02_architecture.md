
# 1.2 Architecture of Robot Framework

Robot Framework is an open-source automation framework that allows you to build automation scripts for testing and RPA (Robotic Process Automation).
It focuses on providing a keyword-driven or behavior-driven approach, making the automation easy to understand and maintain.
However, it is not a full-stack solution that encompasses all layers of automation.
Instead, it provides a flexible platform where different tools, libraries, and integrations handle specific tasks to implement a flexible automation solution.



## 1.2.1 Robot Framework and the gTAA (Generic Test Automation Architecture)

:::tip Learning Objective

LO-1.2.1 Recall the layers of the Generic Test Automation Architecture (gTAA) and their corresponding components in Robot Framework (K1)

:::

The **Generic Test Automation Architecture (gTAA)** described in the ISTQB "Certified Tester Advanced Level Test Automation Engineering" offers a structured approach to test automation, dividing it into different layers for a clear separation of concerns:

- **Definition Layer**: This layer contains the "Test Data" (test cases, tasks, resource files which include user keywords and variables).
In Robot Framework, the test data is written using the defined syntax and contains keyword calls and argument values that make the test case or task definitions structured in suites.

- **Execution Layer**: In Robot Framework, the execution layer consists of the framework itself, including its core components and APIs.
It parses and interprets the test data syntax to build an execution model.
The execution is responsible for processing this execution model to execute the library keywords with their argument values, logging results, and generating reports.

- **Adaptation Layer**: This layer provides the connection between Robot Framework and the system under test (SUT).
In Robot Framework, this is where the keyword libraries, which contain code responsible for interacting with different technologies and interfaces,
such as those for UI, API, database interactions, or others, are located.
These keyword libraries enable interaction with different technologies and interfaces, ensuring the automation is flexible and adaptable to various environments.

Editors/IDEs that offer support for Robot Framework's syntax are tools that support or integrate in these layers.
When writing tests|tasks or keywords, the editor supports the definition layer.
When executing or debugging tests|tasks, the editor supports the execution layer.
When writing keywords in i.e. Python for keyword libraries, the editor supports the adaptation layer.
Therefore also other additional extensions of Robot Framework can be categorized into these layers.

<!-- TODO: add a graphic here -->

## 1.2.2 What is Robot Framework & What It Is Not

:::tip Learning Objective

LO-1.2.2 Recall what is part of Robot Framework and what is not (K1)

:::


Robot Framework itself focuses primarily on **test|task execution**.
It includes:

- A parser to read test|task data and build an execution model.
- An execution engine to process model and execute the keywords.
- A result generation mechanism to provide logs and reports.
- A collection of generic standard libraries to process and handle data or interact with files and processes.
- Defined APIs for extensions and customizations.

However, Robot Framework **does not** include:

- Keyword libraries to control systems under test/RPA.

  Such as:
  - Web front-end automation libraries.
  - API interaction libraries.
  - Mobile automation libraries.
  - Database interaction libraries.
  - RPA libraries.
  - etc.

- Code editors or IDEs.
- CI/CD Integration.

Robot Framework defines the syntax for test|task data, but it is the role of external libraries and tools to extend its functionality for specific automation needs.



## 1.2.3 Technology & Prerequisites

:::tip Learning Objective

LO-1.2.3 Recall the technology Robot Framework is built on and the prerequisites for running it (K1)

:::


Robot Framework is built on **Python** but is adaptable to other languages and technologies through external libraries.
To run Robot Framework, an [officially supported version](https://devguide.python.org/versions/) of the **Python interpreter** is required on the machine executing the tests|tasks.
Typically, Robot Framework and its libraries are installed via the "package installer for Python" (`pip`) from [PyPi.org](https://pypi.org/project/robotframework/), allowing for straightforward installation and setup.
Robot Framework itself does not have any external dependencies, but additional third party tools or keyword libraries may require additional installations.



