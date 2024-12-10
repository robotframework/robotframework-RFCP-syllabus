# 1 Introduction to Robot Framework

The upcoming chapters provide a concise overview of Robot Framework, including its core structure, use cases in test automation and RPA, and key specification styles like keyword-driven and behavior-driven testing. You'll learn about its architecture, syntax, and how test cases and tasks are organized. Additionally, the chapters explain the open-source licensing under Apache 2.0, the role of the Robot Framework Foundation in maintaining the ecosystem, and the foundational web resources available for further exploration and contributions.




## 1.1 Purpose / Use-Cases

> [!IMPORTANT]
> LXX Recall the two main Use-Cases of Robot Framework (K1)

Robot Framework is a versatile, open-source automation framework that supports both **test automation** and **robotic process automation (RPA)**.
Initially designed for acceptance testing and other types of testing, it has since evolved to cover various automation tasks in both IT and business environments.
Its keyword-driven approach allows users to create reusable components, making it accessible even to those with minimal programming skills.
Robot Framework can be extended through a vast array of third-party or custom made keyword libraries, allowing it to automate interactions with APIs, user interfaces, databases, and many more technologies.



### 1.1.1 Test Automation

> [!IMPORTANT]
> LXX recall the test levels Robot Framework is mostly used for (K1)

Robot Framework is widely used at various levels of testing, primarily focusing on:

- **System Testing**: Involves verifying the complete, integrated system’s behavior and capabilities. It often includes both functional and non-functional aspects (e.g., performance, usability) and may use simulated components.

- **System Integration Testing**: Concentrates on the interaction between the system under test and external services, ensuring that all integrated parts communicate and function together as expected.

- **Acceptance Testing**: Aims to validate that the system meets business requirements and is ready for deployment or release. This often includes different forms of acceptance testing (e.g., user acceptance, operational acceptance, regulatory acceptance) and is frequently written or conducted by end-users or stakeholders to confirm the system’s readiness for use. Acceptance tests, often defined by business stakeholders in approaches like Acceptance Test-Driven Development (ATDD), can be automated and executed earlier in the development process. This ensures that the solution aligns with business requirements from the start and provides immediate feedback, reducing costly changes later.

- **End-to-End Testing**: Verifies that a complete workflow or process within the system operates as intended, covering all interconnected subsystems, interfaces, and external components. End-to-end tests ensure the correct functioning of the application in real-world scenarios by simulating user interactions from start to finish.

Robot Framework's flexibility and support for external libraries make it an excellent tool for automating these comprehensive test cases, ensuring seamless interaction between components and validating the system's behavior also in production or production-like conditions.

Robot Framework is typically not used for **component testing** and **integration testing** because its primary strength lies in higher-level testing, such as system, acceptance, and end-to-end testing, where behavior-driven and keyword-based approaches excel. Component testing requires low-level, granular tests focusing on individual units of code, often necessitating direct interaction with the codebase, mocking, or stubbing, which are better handled by unit testing frameworks like JUnit, pytest, or NUnit. Similarly, integration testing at a low level often requires precise control over service interactions, such as API stubs or protocol-level testing, which may not align with Robot Framework's abstraction-oriented design. While Robot Framework can technically handle these cases through custom libraries, its overhead and design philosophy make it less efficient compared to tools specifically tailored for low-level and tightly scoped testing tasks.

#### 1.1.1.1 Synthetic Monitoring

Beyond traditional test levels, **Synthetic Monitoring**, also referred to as **Active Monitoring** or **Proactive Monitoring**, is a proactive approach that simulates user interactions with live systems at regular intervals. It detects performance issues or downtime early and often before they affect actual users by continuously monitoring system behavior under simulated conditions.



### 1.1.2 Robotic Process Automation (RPA)

Robotic Process Automation (RPA) uses software bots to perform tasks and interactions normally done by humans, without requiring changes to the underlying applications.

Robot Framework, with its keyword-driven approach, vast ecosystem of libraries, simplicity, and scalability, is widely adopted for RPA tasks.
Robot Framework allows users to automate most workflows using ready-made keyword libraries that provide a wide range of functionalities. These libraries can be combined and reused in user-defined keywords, making automation simple and efficient. For custom functionalities or more complex tasks, Robot Framework also offers the flexibility to create custom keyword libraries using Python, enabling advanced use cases and seamless integration with unique systems.

Common use cases of RPA with Robot Framework include:

- **Data extraction and manipulation**: Automating data transfers and processing between systems.
- **Application interaction**: Automating tasks such as form submissions, clicks, and file operations across web or desktop applications.



## 1.2 Architecture of Robot Framework

Robot Framework is an open-source automation framework that allows you to build automation scripts for testing and RPA (Robotic Process Automation).
It focuses on providing a keyword-driven or behavior-driven approach, making the automation easy to understand and maintain.
However, it is not a full-stack solution that encompasses all layers of automation.
Instead, it provides a flexible platform where different tools, libraries, and integrations handle specific tasks to implement a flexible automation solution.



### 1.2.1 Robot Framework and the gTAA (Generic Test Automation Architecture)

> [!IMPORTANT]
> LXX Recall the layers of the Generic Test Automation Architecture (gTAA) and their corresponding components in Robot Framework (K1)

The **Generic Test Automation Architecture (gTAA)** described in the ISTQB "Certified Tester Advanced Level Test Automation Engineering" offers a structured approach to test automation, dividing it into different layers for a clear separation of concerns:

- **Definition Layer**: This layer contains the "Test Data" (test cases, tasks, resource files which include user keywords and variables).
In Robot Framework, the test data is written using the defined syntax and contains keyword calls and argument values that make the test case or task definitions structured in suites.
Also Editors that offer support for Robot Framework's syntax can be part of this layer.

- **Execution Layer**: In Robot Framework, the execution layer consists of the framework itself, including its core components and APIs.
It parses and interprets the test data syntax to build an execution model.
The execution is responsible for processing this execution model to execute the library keywords with their argument values, logging results, and generating reports.

- **Adaptation Layer**: This layer provides the connection between Robot Framework and the system under test (SUT).
In Robot Framework, this is where the keyword libraries, such as those for UI, API, database interactions, or others, are located.
These libraries allow interaction with different technologies and interfaces, ensuring the automation is flexible and adaptable to various environments.

<!-- TODO: add a graphic here -->

### 1.2.2 What is Robot Framework & What It Is Not

> [!IMPORTANT]
> LXX Recall what is part of Robot Framework and what is not (K1)

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



### 1.2.3 Technology & Prerequisites

> [!IMPORTANT]
> LXX Recall the technology Robot Framework is built on and the prerequisites for running it (K1)

Robot Framework is built on **Python** but is adaptable to other languages and technologies through external libraries.
To run Robot Framework, an [officially supported version](https://devguide.python.org/versions/) of the **Python interpreter** is required on the machine executing the tests|tasks.
Typically, Robot Framework and its libraries are installed via the "package installer for Python" (`pip`) from [PyPi.org](https://pypi.org/project/robotframework/), allowing for straightforward installation and setup.
Robot Framework itself does not have any external dependencies, but additional third party tools or keyword libraries may require additional installations.




## 1.3 Basic Syntax & Structure

> [!IMPORTANT]
> LXX Recall the key attributes of the syntax that makes Robot Framework simple and human-readable (K1)


Robot Framework is a script-based interpreter for files that contain textual specifications.
These files are typically organized into folders.
The syntax of Robot Framework is designed to be simple and human-readable, allowing for quick learning and ease of use.

Key attributes of the syntax that improves the before mentioned:

- **Space-separated syntax**: Robot Framework uses two or more spaces as the primary separator (although one space is allowed as a character).
  A use of **FOUR (4)** spaces is recommended to ensures clarity and readability of the specification.
- **Indentation based blocks**: Code blocks like test, task or keyword bodies are defined by indentation.
  This makes the structure clear and easy to follow.
- **Reduced use of special characters**: Compared to programming languages the focus is on reducing special characters, making the syntax human-readable and user-friendly.
- **String first**: Unquoted strings are considered as strings, while variables need special syntax.
- **Single spaces are valid**: Single spaces are valid as a character in most elements and values without quotation.
- **Mostly case-insensitive**: Most elements like keyword or variable names are case insensitive.
However, some syntax, like library imports is case-sensitive.

> [!NOTE]
> This syllabus does NOT cover other formats like Pipe-Separated ( | ) Format or Restructured Text or JSON!



### 1.3.1 What are Test Cases / Tasks?

In Robot Framework, **Test Cases** (**Tests**) or **Tasks** are executable entities that serve a specific purpose and are organized into suites.
A **Test** is synonymous with a **Test Case**, while **Tasks**, technically being the same, are used in RPA mode, where the automation is not focused on testing but on automating business processes.

Tests or Tasks have a body made up of **keyword calls** and Robot Framework statements like **IF** or **VAR**, which represent the actions or steps executed during the test or task execution.
These keywords make the automation modular, maintainable, reusable, and readable.



### 1.3.2 Files & Directories

Robot Framework organizes tests|tasks into **Suites**, which are either files or directories.

- `*.robot` files that do contain test cases or tasks are suites.
- Each directory, starting from the top-level directory (the one executed by Robot Framework), and any sub-directories that contains a `*.robot` suite file, is considered a **Suite** as well.
Suites can contain other suites, forming a hierarchical tree, which is by default alphabetically ordered.
See [2.1 Suite File & Tree Structure](Chapter_2_Getting_Started.md#21-suite-file--tree-structure) for more details.

This structure allows for logical grouping and organization of tests and tasks, which can scale as needed.



### 1.3.3 What are Keywords?

> [!IMPORTANT]
> LXX Explain the difference between User Keywords and Library Keywords (K2)

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



### 1.3.4 Resource Files & Libraries

> [!IMPORTANT]
> LXX Recall the difference between Resource Files and Libraries and their artefacts (K1)

While tests and tasks are organized into suites, **keywords** are organized into **Resource Files** and **Keyword Libraries**.

- **Resource Files**: Contain **User Keywords**, and are also used to organize the importing of libraries and defining variables. These are considered to be part of the test|task data in the *Definition Layer*.
- **Keyword Libraries**: Contain **Library Keywords**, which are typically implemented in Python or other technologies and except of the standard libraries are not part of Robot Framework itself and can be either custom-made or third-party libraries implemented by the Robot Framework community. These are considered to be part of the *Adaptation Layer*.

Central resource files and libraries allow the separation of concerns, making the automation more modular and reusable across multiple suites, tests or tasks.

The concepts of organizing are fundamental to working with Robot Framework and contribute to its flexibility and scalability in both test automation and RPA.




## 1.4 Specification Styles

> [!IMPORTANT]
> LXX Recall the three specification styles of Robot Framework (K1)

Specification styles define how the automation process or test cases are structured, focusing on how actions and verifications are expressed.
These styles can be applied to all types of automation, including both testing and robotic process automation (RPA).
While **Keyword-Driven Testing (KDT)** and **Behavior-Driven Development (BDD)** are commonly associated with testing, the principles behind these styles are adaptable to other forms of automation.

Both styles can be mixed, even within the same test or task, but it is strongly recommended to have separate styles for separate purposes and not wildly mix them within the same body.
So it would be one practical solution to define acceptance test cases that cover users expectations in *Behavior-Driven Style*, while these declarative Behavior-Driven keywords are implemented by calling imperative Keyword-Driven keywords.
And other system level test cases, that are not covering acceptance criteria could be written as Keyword-Driven Testing.

The approach of both styles is different in that way,
that the *Behavior-Driven Style* is a **declarative** specification,
where the script describe/declare what the system should do or how it should behave,
while the *Keyword-Driven Style* is an **imperative** specification,
where the script specifies what the automation should do to control the system.


Beside these two different specification approaches how to write/formulate
your automation script and their step sequences,
there is also a third specification method, **Data-Driven Specification** that can be combined
with the other two styles, to define the data that is used in the automation.



### 1.4.1 Keyword-Driven Specification

> [!IMPORTANT]
> LXX Understand the basic concepts of Keyword-Driven Specification (K2)

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



### 1.4.2 Behavior-Driven Specification

> [!IMPORTANT]
> LXX Understand the basic concepts of Behavior-Driven Specification (K2)

**Behavior-Driven Specification** originates from **Behavior-Driven Development (BDD)** and its **Gherkin-Style**, where steps are written to describe the system's behavior from the user's perspective.
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



### 1.4.3 Comparing Keyword-Driven and Behavior-Driven Specification

> [!IMPORTANT]
> LXX Recall the differences between Keyword-Driven and Behavior-Driven Specification (K1)

The core difference between **Keyword-Driven** and **Behavior-Driven** styles lies in their focus:

- **Keyword-Driven Style** emphasizes **what actions** need to be performed in a specific order, making it action-centric.
It is an **imperative** style that can be compared to procedural programming.
It is structured, clear, and optimized for scenarios where the steps are more technical
or detailed and where the amount of keywords called within a test or tasks are more.
Also is this style better for complex tasks or complex data
due to a clear separation between the keyword names and its argument values.

- **Behavior-Driven Style** emphasizes **how the system behaves** from the user's point of view,
using more natural language and focusing on expected outcomes.
It is a **declarative** style that can be compared to writing user stories or acceptance criteria.
It is optimized for **business-oriented** descriptions of functionality
and is often more suitable for communicating with non-technical stakeholders.
This style can get less understandable when the amount of steps increases
or the amount of defined data in the steps increases.

Both styles can be applied within Robot Framework, offering flexibility depending on the context of the automation task.



### 1.4.4 Data-Driven Specification

> [!IMPORTANT]
> LXX Understand the basic concept of Data-Driven Specification (K2)

**Data-Driven Specification** originates from **Data-Driven Testing**
and is a method where the test data and expected results are
separated from the test script that controls the flow.
This approach allows for the reuse of the same test script
with different data sets, making it easier to maintain and scale tests.

While in **Robotic Process Automation (RPA)** the data that are
used in an automation workflow are typically dynamically acquired from an external source,
in testing the data are specifically chosen to cover different scenarios or cases.
Therefore this method to define data combinations
statically in the suite files is normally not applicable in RPA.

**Data-Driven Testing** focuses on testing the same workflow
or scenario with different sets of input and/or output data.
In this style, a single user keyword, which contains the whole test logic,
is executed with multiple data variations,
making it highly effective for repetitive tests,
where the logic stays the same but the data changes,
without duplicating the test logic for each case.

Robot Framework offers a convenient feature for this approach through **Test Templates**.
A Test Template allows specifying the keyword only once and then applying it to multiple test data sets.

For example:
```robotframework
*** Settings ***
Test Template    Login with invalid credentials should fail

*** Test Cases ***                USERNAME         PASSWORD
Invalid User Name                 invalid          ${VALID PASSWORD}
Invalid Password                  ${VALID USER}    invalid
Invalid User Name and Password    invalid          invalid
Empty User Name                   ${EMPTY}         ${VALID PASSWORD}
Empty Password                    ${VALID USER}    ${EMPTY}
Empty User Name and Password      ${EMPTY}         ${EMPTY}
```

The above example shows six test cases that all use the same
keyword `Login with invalid credentials should fail` but with different data for username and password.


#### 1.4.4.1 Benefits of Data-Driven Specification:
- **Efficiency**: Reduces the need to write redundant test cases by reusing the same workflow with different data inputs.
- **Clarity**: Keeps the test logic separate from the data, making it easier to manage large data sets.
- **Scalability**: Suitable for scenarios where the same functionality needs to be tested under various conditions, such as verifying form inputs or performing calculations with different values.




## 1.5 Organization and Licensing



### 1.5.1 Open Source License

> [!IMPORTANT]
> LXX Recall the type of open-source license under which Robot Framework is distributed (K1)

Robot Framework is licensed under the **Apache License 2.0**, a permissive open-source license.
The key characteristics of this license include:

- **Permissive**: The license allows users to freely use, modify, and distribute the software, including for commercial purposes, without significant restrictions.
- **No Warranty**: The software is provided "as-is," without any warranties or guarantees of performance.
- **Attribution**: Users must keep the original authorship and any changes made to the code visible, ensuring transparency regarding contributions and modifications.

This licensing structure encourages broad usage and contribution while maintaining a legal framework that protects both users and developers.



### 1.5.2 About the Robot Framework Foundation

> [!IMPORTANT]
> LXX List and recall the key objectives and organizational form of the Robot Framework Foundation (K1)

The **Robot Framework Foundation** (officially known as **Robot Framework ry**) is a non-profit association based in Helsinki, Finland, dedicated to promoting the use, development, and maintenance of the open-source Robot Framework. The foundation ensures that Robot Framework remains freely available and viable for both test automation and robotic process automation (RPA) in the future.

Key objectives of the foundation include:

- **Support for Core Development**: The foundation funds and enables the core development, maintenance, and evolution of the Robot Framework, ensuring it is freely available to everyone. It also supports ecosystem and user-contributed projects that further enhance the framework's capabilities.

- **Democratic Governance**: The foundation operates under democratic principles, with a **Board of Directors** elected annually by its members. The board oversees the foundation's operations, and membership primarily consists of companies that contribute financially to support the framework’s ongoing development through membership fees.

- **Platform Maintenance**: The foundation is responsible for maintaining key infrastructure, such as the official website, GitHub repositories, and community platforms. These resources are crucial to sustaining a healthy ecosystem and fostering collaboration among users and contributors.

- **Community Support and Events**: The foundation plays a central role in organizing **RoboCon**, the annual Robot Framework User Conference, which brings together users, developers, and contributors to share knowledge and insights. Additionally, it helps to disseminate knowledge about test automation and RPA through community events and documentation efforts.

- **Funding of Ecosystem Projects**: Whenever possible, the foundation finances open-source projects that are proposed by community members, aiming to support broader ecosystem development and innovation.

As a non-profit, all funds are directed towards the development and promotion of the Robot Framework, ensuring that it remains accessible to all users without commercial restrictions.

More information, including a list of foundation members, is available at **[robotframework.org/foundation](https://robotframework.org/foundation)**.

This structure and mission ensure that Robot Framework continues to grow and serve the needs of its community while maintaining an open and democratic approach to its development and governance.



### 1.5.3 Robot Framework Webpages

> [!IMPORTANT]
> LXX Recall the official webpages for Robot Framework and its resources (K1)

The official pages for Robot Framework and its related resources are maintained by the foundation.
These include:

- **[robotframework.org](https://robotframework.org/)**: The main page providing an overview, documentation, and access to resources.
- **[github.com/robotframework](https://github.com/robotframework)**: The official repository for the framework's source code and other components.
