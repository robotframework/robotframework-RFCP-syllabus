# Chapter 1: Introduction to Robot Framework

The upcoming chapters provide a concise overview of Robot Framework, including its core structure, use cases in test automation and RPA, and key specification styles like keyword-driven and behavior-driven testing. You'll learn about its architecture, syntax, and how test cases and tasks are organized. Additionally, the chapters explain the open-source licensing under Apache 2.0, the role of the Robot Framework Foundation in maintaining the ecosystem, and the foundational web resources available for further exploration and contributions.




## Purpose and Use-Cases

Robot Framework is a versatile, open-source automation framework that supports both test automation and robotic process automation (RPA).
Initially designed for acceptance testing and other types of testing, it has since evolved to cover various automation tasks in both IT and business environments.
Its keyword-driven approach allows users to create reusable components, making it accessible even to those with minimal programming skills.
Robot Framework can be extended through a vast array of built-in and third-party libraries, allowing it to automate interactions with APIs, user interfaces, databases, and more.


### Test Automation

Robot Framework is widely used in various stages of test automation, focussing:

- **System testing**: Verifies the complete system’s behavior and capabilities, often including functional and non-functional aspects like usability. It may use simulations and is typically performed in a representative test environment.

- **System integration testing**: Focuses on testing the interaction between the system and external services, ensuring proper communication. This is done in a test environment similar to the real operational setup.

- **Acceptance testing**: Validates the system’s readiness for deployment, ensuring it meets business needs. Types include user, operational, and regulatory acceptance testing, often performed by end-users.

Additionally, it is often used for the **testing and verification of live systems in production** environments, ensuring that deployed systems behave as expected and highlighting any issues in real-time.


### Robotic Process Automation (RPA)

Robotic Process Automation (RPA) refers to the automation of repetitive, rule-based tasks using software bots that mimic human actions, such as interacting with user interfaces, APIs, and other system elements.
Unlike traditional automation, RPA does not require changes to the underlying systems, making it a flexible solution for automating processes across various applications.

Robot Framework, with its keyword-driven approach and vast ecosystem of libraries, is widely adopted for RPA tasks due to its simplicity and scalability.
It allows users to automate workflows using readable commands, while still enabling powerful customizations through Python.

Common use cases of RPA with Robot Framework include:

- **Data extraction and manipulation**: Automating data transfers and processing between systems.
- **Application interaction**: Automating tasks such as form submissions, clicks, and file operations across web or desktop applications.
- **Customer service automation**: Implementing bots to handle routine inquiries via chatbots or email processing.
- **Back-office automation**: Streamlining administrative tasks like invoice processing, report generation, and inventory management.

By leveraging Robot Framework for RPA, businesses can improve efficiency, reduce manual errors, and allow human workers to focus on more complex, strategic activities.




## Architecture of Robot Framework

Robot Framework is an open-source automation framework that allows you to build automation scripts for testing and RPA (Robotic Process Automation).
It focuses on providing a keyword-driven or behavior-driven approach, making the automation easy to understand and maintain.
However, it is not a full-stack solution that encompasses all layers of automation.
Instead, it provides a flexible platform where different tools, libraries, and integrations handle specific tasks to implement a flexible automation solution.


### Robot Framework and the gTAA (Generic Test Automation Architecture)

The **Generic Test Automation Architecture (gTAA)** described in the ISTQB "Certified Tester Advanced Level Test Automation Engineering" offers a structured approach to test automation, dividing it into different layers for a clear separation of concerns:

- **Definition Layer**: This layer contains the "Test Data" (test cases, tasks, resource files which include user keywords and variables).
In Robot Framework, the test data is written using the defined syntax and contains keyword calls and argument values that make the test case or task definitions structured in suites.
Also Editors that offer support for Robot Framework's syntax can be part of this layer.

- **Execution Layer**: In Robot Framework, the execution layer consists of the framework itself, including its core components and APIs.
It parses, interprets and executes the test data syntax to build an execution model.
The execution is responsible for processing this execution model to execute the library keywords with their argument values, logging results, and generating reports.

- **Adaptation Layer**: This layer provides the connection between Robot Framework and the system under test (SUT).
In Robot Framework, this is where the keyword libraries, such as those for UI, API, or database interactions, are located.
These libraries allow interaction with different technologies and interfaces, ensuring the automation is flexible and adaptable to various environments.


### What is Robot Framework & What It Is Not

Robot Framework itself focuses primarily on **test execution**.
It includes:

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

Robot Framework is built on **Python** but is adaptable to other languages and technologies through external libraries.
To run Robot Framework, a **Python interpreter** is required on the machine executing the tests|tasks.
Typically, Robot Framework and its libraries are installed via [PyPi.org](https://pypi.org/project/robotframework/), allowing for straightforward installation and setup.




## Basic Syntax & Structure

Robot Framework is a script-based interpreter for files that contain textual specifications.
These files are typically organized into folders.
The syntax of Robot Framework is designed to be simple and human-readable, allowing for quick learning and ease of use.

Key attributes of the syntax include:

- **Space-separated syntax**: Robot Framework uses two spaces as the primary separator (although one space is allowed as a character).
A use of **FOUR (4)** spaces is recommended to ensures clarity and readability of the specification.
- **Minimal use of special characters**: The focus is on reducing special characters, making the syntax human-readable and user-friendly.
- **Mostly case-insensitive**: Most elemens like keyword or variable names are case insensitive.
However, some syntax, like library imports is case-sensitice.

> [!NOTE]
> This syllabus does NOT cover other formats like Pipe-Separated ( | ) Format or Restructured Text or JSON!

### What are Test Cases / Tasks?

In Robot Framework, **Test Cases** (**Tests**) or **Tasks** are executable entities that serve a specific purpose and are organized into suites.
A **Test** is synonymous with a **Test Case**, while **Tasks**, technically being the same, are used in RPA mode, where the automation is not focused on testing but on automating business processes.

Tests or Tasks have a body made up of **keyword calls** and Robot Framework statements like **IF** or **VAR**, which represent the actions or steps executed during the test or task execution.
These keywords make the automation modular, maintainable, reusable, and readable.


### Files & Directories

Robot Framework organizes tests|tasks into **Suites**, which are either files or directories.

- `*.robot` files that do contain test cases or tasks are suites.
- Each directory, starting from the top-level directory (the one executed by Robot Framework), and any sub-directories that contains a `*.robot` suite file, is considered a **Suite** as well.
Suites can contain other suites, forming a hierarchical tree, which is by default alphabetically ordered.

This structure allows for logical grouping and organization of tests and tasks, which can scale as needed.


### What are Keywords?

Tests or Tasks are structured using **Keywords**, which represent specific actions or sequences of actions to be performed.

- **Keywords** in Robot Framework are according to the concepts used in Behavior-Driven Development (BDD) or Keyword-Driven Testing.
- **Definition**: A keyword is one or more words used as a reference to a specific set of actions intended to be performed during the execution of one or more tests or tasks.

There are two types of keywords in Robot Framework:

1. **User Keywords**: Written in Robot Framework syntax, they are mainly used for structuring tests|tasks. User keywords improve readability, understandability, maintainability and structure.
2. **Library Keywords**: Typically written in Python, but may also be implemented in other technologies, these keywords typically interact with the system under test (SUT) or the system to be controlled by RPA or execute specific actions like calculations or conversions.

A **User Keyword** consists of a **name**, optional **arguments**, and a **body** of keyword calls that may invoke other user keywords or library keywords or other statements like variable definitions or flow control.

During execution, each keyword call is logged, providing fine-grained detail in the execution logs.
This includes all levels of keywords—from those called directly by a test or task to those nested within user keywords, all the way down to the execution of library keywords.
This granular logging and detailed execution documentation is one of the key advantages of Robot Framework compared to other automation tools.


### Resource Files & Libraries

While tests and tasks are organized into suites, **keywords** are organized into **Resource Files** and **Keyword Libraries**.

- **Resource Files**: Contain **User Keywords**, and are also used to organize the importing of libraries and defining variables.
- **Keyword Libraries**: Contain **Library Keywords** that perform the actual actions on the system under test, typically implemented in Python or other technologies.

Central resource files and libraries allow the separation of concerns, making the automation more modular and reusable across multiple suites, tests or tasks.

The concepts of organizing are fundamental to working with Robot Framework and contribute to its flexibility and scalability in both test automation and RPA.




## Specification Styles

Specification styles define how the automation process or test cases are structured, focusing on how actions and verifications are expressed.
These styles can be applied to all types of automation, including both testing and robotic process automation (RPA).
While **Keyword-Driven Testing (KDT)** and **Behavior-Driven Development (BDD)** are commonly associated with testing, the principles behind these styles are adaptable to other forms of automation.

Both styles can be mixed, even within the same test or task, but it is strongly recommended to have separate styles for separate purposes and not wildly mix them within the same body.
So it would be one practical solition to define acceptance test cases that cover users perspective in Behavior-Driven Style, while these Behavior-Style keywords are implemented by calling "normal" Keyword-Style keywords.
And other system level test cases, that are not covering acceptance criteria could be written Keyword-Driven.

### Keyword-Driven Specification

In **Keyword-Driven Specification**, automation steps are expressed through a sequence of mostly **imperative commands**.
Keywords define the specific actions that must be executed in a particular order, similar to procedural programming.
The emphasis is on the **actions performed by the automation/tester**.

For example, in Robot Framework, a keyword-driven test might include steps like:
- `Open Page   http://robotframework.org`
- `Click Button    FOUNDATION`
- `Verify Title    Foundation | Robot Framework`
- `Verify Url      https://robotframework.org/foundation`

Verifications or assertions can be imperative, though they are often phrased as assertions, such as `Title Should Be    Foundation | Robot Framework`, adding flexibility to how outcomes are checked.

The advantage of this style lies in its **clarity** and **structure**.
It provides a straightforward representation of the task flow, making it easy to understand what actions will be executed.

By separating the executed step/keyword and its arguments/data with spaces it improves the readability of tests or tasks.
Flow and data can be parsed separately by the consumer.

### Behavior-Driven Specification

**Behavior-Driven Specification** originates from **Behavior-Driven Development (BDD)** and its **Gherkin-Styke**, where steps are written to describe the system's behavior from the user's perspective.
This style often incorporates **embedded arguments** into the steps and uses natural language constructs like **Given, When, Then, And & But**.

In Robot Framework, behavior-driven tests may look like:
- `Given "robotframework.org" is open`
- `When the user clicks the "FOUNDATION" button`
- `Then the page title should be "Foundation | Robot Framework"`
- `And the url should be "https://robotframework.org/foundation"`

A key difference between Robot Framework's behavior-driven style and BDD frameworks like **Cucumber** or most others is the ability in Robot Framework to use **multiple keyword layers**.
In other BDD frameworks the code that implements a sentence like `Given "robotframework.org" is open.` is referred to as a step definition.
Step definitions are written in a programming language (typically Java, JavaScript, Ruby, or Python) and map natural language steps from a Gherkin feature file to code.
Therefore there are no multiple layers of keywords that can be logged into execution protocols.
Robot Framework allows you to create **user keywords** that can further call other user or library keywords, providing greater flexibility, modularity and much more detailed logging.


### Comparing Keyword and Behavior Styles

The core difference between **Keyword-Driven** and **Behavior-Driven** styles lies in their focus:

- **Keyword-Driven Style** emphasizes **what actions** need to be performed in a specific order, making it action-centric.
It is structured, clear, and optimized for scenarios where the steps are more technical or detailed and where the amount of keywords called within a test or tasks are more.
Also is this style better for complex tasks or complex data due to a clear separation between the keyword names and its argument values.

- **Behavior-Driven Style** emphasizes **how the system behaves** from the user's point of view, using more **natural language** and focusing on **expected outcomes**.
It is optimized for **business-oriented** descriptions of functionality and is often more suitable for communicating with non-technical stakeholders.

Both styles can be applied within Robot Framework, offering flexibility depending on the context of the automation task.
The choice between them often depends on whether you want to focus on **how** actions are executed (keyword-driven) or **why** actions are executed (behavior-driven) and its complexity.




## Organization and Licensing


### Open Source License

Robot Framework is licensed under the **Apache License 2.0**, a permissive open-source license.
The key characteristics of this license include:

- **Permissive**: The license allows users to freely use, modify, and distribute the software, including for commercial purposes, without significant restrictions.
- **No Warranty**: The software is provided "as-is," without any warranties or guarantees of performance.
- **Attribution**: Users must keep the original authorship and any changes made to the code visible, ensuring transparency regarding contributions and modifications.

This licensing structure encourages broad usage and contribution while maintaining a legal framework that protects both users and developers.


### About the Robot Framework Foundation

The **Robot Framework Foundation** (officially named **Robot Framework ry**) is a non-profit association based in Helsinki, Finland.
Its purpose is to promote the use of the open-source Robot Framework and ensure its continuous development and maintenance.
The key objectives of the foundation are:

- **Support the development of Robot Framework**: The foundation funds and enables the core development and maintenance of the tool, keeping it freely available for everyone.
- **Democratic governance**: The foundation is governed by a **Board of Directors**, elected annually by its members. Members are primarily companies that support the framework's development through membership fees.
- **Platform maintenance**: The foundation maintains essential infrastructure like the Robot Framework webpage, GitHub repositories, and community platforms, ensuring the ecosystem remains robust and accessible.

The listed foundation members and additional information may be accessed via **[robotframework.org/foundation](https://robotframework.org/foundation)**.


### Robot Framework Webpages

The official pages for Robot Framework and its related resources are maintained by the foundation.
These include:

- **[robotframework.org](https://robotframework.org/)**: The main page providing an overview, documentation, and access to resources.
- **[github.com/robotframework](https://github.com/robotframework)**: The official repository for the framework's source code and other components.

