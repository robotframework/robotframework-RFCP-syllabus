# 1.1 Purpose / Use Cases

::::lo[Learning Objectives]

:::K1[LO-1.1]

Recall the two main use cases of Robot Framework

:::

::::

Robot Framework is a versatile, open-source automation framework that supports both **test automation** and **robotic process automation (RPA)**.
Initially designed for acceptance testing, it has since evolved to cover other types of testing and various automation tasks in both IT and business environments.
Its keyword-driven approach allows users to create reusable components, making it accessible even to those with minimal programming skills.
Robot Framework can be extended through a vast array of third-party or custom made keyword libraries, allowing it to automate interactions with APIs, user interfaces, databases, and many more technologies.



## 1.1.1 Test Automation

::::lo[Learning Objectives]

:::K1[LO-1.1.1]

Recall the test levels Robot Framework is mostly used for

:::

::::

Robot Framework is widely used at various levels of testing, primarily focusing on:

- **System Testing**: Involves verifying the complete system’s behavior and capabilities. It often includes both functional and non-functional aspects (e.g., accessibility, security) and may use simulated components.

- **System Integration Testing**: Focuses on the interaction between the system under test and external services, as well as on the integration of multiple systems into a larger system, ensuring that all integrated components communicate and function together as expected.

- **Acceptance Testing**: Aims to validate that the system meets business requirements and is ready for deployment or release. This often includes different forms of acceptance testing (e.g., user acceptance, operational acceptance, regulatory acceptance) and is frequently written or conducted by end-users or stakeholders to confirm the system’s readiness for use. Acceptance tests, often defined by business stakeholders in approaches like Acceptance Test-Driven Development (ATDD), can be automated and executed earlier in the development process. This ensures that the solution aligns with business requirements from the start and provides immediate feedback, reducing costly changes later.

- **End-to-End Testing**: Verifies that a complete workflow or process within the system operates as intended, covering all interconnected subsystems, interfaces, and external components. End-to-end tests ensure the correct functioning of the application in real-world scenarios by simulating user interactions from start to finish.

Robot Framework's flexibility and support for external libraries make it an excellent tool for automating these comprehensive test cases, ensuring seamless interaction between components and validating the system's behavior also in production or production-like conditions.

Robot Framework is typically not used for **component testing** nor **integration testing** because its primary strength lies in higher-level testing, such as system, acceptance, and end-to-end testing, where behavior-driven and keyword-based approaches excel. Component testing requires low-level, granular tests focusing on individual units of code, often necessitating direct interaction with the codebase, mocking, or stubbing, which are better handled by unit testing frameworks like JUnit, pytest, or NUnit. Similarly, integration testing at a low level often requires precise control over service interactions, such as API stubs or protocol-level testing, which may not align with Robot Framework's abstraction-oriented design. While Robot Framework can technically handle these cases through custom libraries, its overhead and design philosophy make it less efficient compared to tools specifically tailored for low-level and tightly scoped testing tasks.


### 1.1.1.1 Synthetic Monitoring

Beyond traditional test levels, **Synthetic Monitoring**, also referred to as **Active Monitoring** or **Proactive Monitoring**, is a proactive approach that simulates user interactions with live systems at regular intervals. It detects performance issues or downtime early with the goal of detecting such failure before they affect actual users.



## 1.1.2 Robotic Process Automation (RPA)

[Robotic Process Automation](../glossary#robotic-process-automation) (RPA) uses software bots to perform tasks and interactions normally performed by humans, without requiring changes to the underlying applications.

Robot Framework, with its keyword-driven approach, vast ecosystem of libraries, simplicity, and scalability, is widely adopted for [RPA](../glossary#robotic-process-automation) tasks.
Robot Framework allows users to automate most workflows using ready-made keyword libraries that provide a wide range of functionalities. These libraries can be combined and reused in user-defined keywords, making automation simple and efficient. For custom functionalities or more complex tasks, Robot Framework also offers the flexibility to create custom keyword libraries using Python, enabling advanced use cases and seamless integration with unique systems.

Common use cases of RPA with Robot Framework include:

- **Data extraction and manipulation**: Automating data transfers and processing between systems.
- **Task / Process automation**: Automating tasks such as form submissions, clicks, and file operations across web or desktop applications.



