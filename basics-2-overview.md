# Robot Framework basics

## Table of contents
<!-- This table of contents is created with vscode 'Markdown All in One' plugin automatically. -->
- [Robot Framework basics](#robot-framework-basics)
  - [Table of contents](#table-of-contents)
  - [OVERVIEW AND GUIDELINES](#overview-and-guidelines)
    - [Learning objectives](#learning-objectives)
    - [Where can be used](#where-can-be-used)
      - [Domains](#domains)
      - [Testing levels](#testing-levels)
      - [Behavior Driven Development](#behavior-driven-development)
      - [Robotic Process Automation](#robotic-process-automation)
    - [Architecture](#architecture)
      - [Framework](#framework)
      - [Libraries](#libraries)
    - [Coding style](#coding-style)
      - [Creating maintainable tests](#creating-maintainable-tests)
      - [Dependencies between tests (to be avoided)](#dependencies-between-tests-to-be-avoided)
      - [Avoid sleep (use polling)](#avoid-sleep-use-polling)

## OVERVIEW AND GUIDELINES

Robot Framework is a generic, application and technology independent framework for _Acceptance Testing_, _Acceptance Test Driven Development_ (ATDD), _Behavior Driven Development_ (BDD) and _Robotic Process Automation_ (RPA). 
[[User Guide: Introduction][UG Introduction]]

Continuous Integration (CI), installation and editors are **Not** in the scope of this exam.

### Learning objectives

**TODO** Learning objectives are separately done.

### Where can be used

#### Domains

Robot Framework can be integrated with virtually any tool and with it can test many different domains.
The Robot Framework open source community has implemented several generic libraries, such as `SeleniumLibrary` and `SwingLibrary`, which are not packaged with the core framework.
[[User Guide: External libraries][UG External libraries]] <!-- Fix me after merge  -->

Examples of test domains:

- _Web Testing_
  
  Robot Framework is widely used for testing web applications. The primary library for web testing is the `SeleniumLibrary` and `Browser` library.

- _API testing_

  Robot Framework supports API testing using the `RequestsLibrary`.

- _Mobile testing_

  For mobile app testing, Robot Framework can utilize the `AppiumLibrary`.

- _Desktop Application Testing_

  `SwingLibrary` can be used for testing Java Desktop applications.
  
#### Testing levels

Robot Framework is typically used in different levels of _Acceptance Testing_ as it is brings _Abstraction layer_ to test data and complexity can be hidden to lower keyword implementation.
It can be used also for _System Testing_ and _Regression Testing_. For _Unit Testing_ and _Integration Testing_, there are more suitable unit test frameworks (using typically the implementation's language). 

#### Behavior Driven Development

_Behavior Driven Development_ (BDD)  is a software development methodology that encourages collaboration between technical and non-technical team members to define, understand, and deliver features in a way that focuses on behavior and outcomes.
[[User Guide: BDD style][UG BDD style]]  <!-- Fix me after merge! -->

#### Robotic Process Automation

_Robotic Process Automation_ (RPA) is a technology that uses software robots (or "bots") to automate repetitive and rule-based tasks in business processes.
[[User Guide: Robotic process automation][UG Creating tasks]]

### Architecture

Robot Framework is a generic, application and technology independent framework which has highly modular architecture.
[[User Guide: High level architecture][UG High level architecture]]

It consist of following layers:

```
Test Data
--- Test data syntax ---
Robot Framework
--- Test library API ---
Test Libraries
Test Tools
--- Application interfaces ---
System Under Test
```

#### Framework

When Robot Framework is started, it processes the data, executes test cases and generates logs and reports. It includes related tools and standard libraries.
[[User Guide: High level architecture][UG High level architecture]]

#### Libraries

Test libraries contain lowest-level keywords, often called library keywords, which actually interact with the system under test.
[[User Guide: Using test libraries][UG Using test libraries]]  <!-- Fix me after merge -->

### Coding style

Write code that is easy to read and understand.
Follow a consistent style throughout your test suite.
Test case and keyword names should be descriptive and it is acceptable to have quite long names.[[Robot Framework Style Guide]]

#### Creating maintainable tests

Maintaining Robot Framework code involves creating test data that is easy to understand, modify and extend.
Organize your project into a clear directory structure, separating resources, test suites, and other assets.
Providing clear documentation for custom keywords helps to keep them maintainable.
Reusable keywords helps maintaining common actions or functionalities. 
<!-- FIXME: needs proper reference -->

#### Dependencies between tests (to be avoided)

Dependencies between tests arise when the outcome of one test affects the execution or success of another.
Managing dependencies between tests is crucial for ensuring that your test suite runs smoothly and produces reliable results.
In Robot Framework, you can handle test dependencies by carefully designing your test suite and utilizing setup/teardown.
<!-- FIXME: needs proper reference -->

#### Avoid sleep (use polling)

Sleeping is a very fragile way to synchronize tests. Instead, consider using more robust synchronization methods to ensure the stability and efficiency of your test suite.
[[How to write good test cases]]

<!-- REFERENCES -->
[UG Introduction]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#introduction
[UG High level architecture]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#high-level-architecture
[UG Installation instructions]:https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#installation-instructions
[UG Creating tasks]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#creating-tasks
[Robot Framework Style Guide]: https://docs.robotframework.org/docs/style_guide/guide
[How to write good test cases]: https://github.com/robotframework/HowToWriteGoodTestCases/blob/master/HowToWriteGoodTestCases.rst
