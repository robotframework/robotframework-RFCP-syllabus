# Robot Framework basics

## Table of contents
<!-- This table of contents is created with vscode 'Markdown All in One' plugin automatically. -->
- [Robot Framework basics](#robot-framework-basics)
  - [Table of contents](#table-of-contents)
  - [SUITE STRUCTURE](#suite-structure)
    - [Learning objectives](#learning-objectives)
    - [Suite files](#suite-files)
    - [Suite directories](#suite-directories)
    - [Initialization files](#initialization-files)
    - [Setup and teardown](#setup-and-teardown)
    - [Documentation](#documentation)

## SUITE STRUCTURE

Test cases are created in suite files, which can be organized into directories. These files and directories create a hierarchical test suite structure. Test suite directories can be initialized with initilization files. [[User Guide: Creating test suites][UG Creating test suites]]

Meta data is **Not** in the scope of this exam.

### Learning objectives

**TODO** Learning objectives are separately done.

### Suite files

Test cases are created using _Test Cases_ section in suite files. Such a file automatically creates a test suite from all the test cases it contains. [[User Guide: Suite files][UG Suite files]]

### Suite directories

Test case files can be organized into directories, and these directories create higher-level test suites. When a test directory is executed, the files and directories it contains are processed recursively. [[User Guide: Suite directories][UG Suite directories]]

### Initialization files

A test suite created from a directory can have similar settings as a suite created from a test case file. Suite initialization files cannot have test case section and not all settings are supported otherwise they have same structure as test case files. An initialization file name must always be of the format `__init__.ext`, where the extension must be one of the supported file formats (typically `__init__.robot`). [[User Guide: Suite initialization files][UG Suite initialization files]]

### Setup and teardown

Suites can have suite setup and teardown. They are defined in the `Settings` section.  

A `Suite Setup` is executed before running any of the suite's test cases or child test suites, and a `Suite Teardown` is executed after them.  

Suite setup is ideal for checking preconditions that must be met before running test cases. If a suite setup fails, all test cases in it and its child test suites are immediately assigned a fail status and they are not actually executed.  

A suite teardown is normally used for cleaning up test environment after test cases have been executed. All the keywords in suite teardown is executed even one of them fails. It is even executed if Suite Setup fails.  

If the suite teardown fails, all test cases in the suite are marked failed, regardless of their original execution status. [[User Guide: Suite setup and teardown][UG Suite setup and teardown]]

### Documentation

The documentation for a test suite is set using the `Documentation` setting in the Settings section. It can be used both in suite files and in suite initialization files. [[User Guide: Suite documentation][UG Suite documentation]] 

<!-- REFERENCES -->
[UG Creating test suites]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#creating-test-suites
[UG Suite files]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#suite-files
[UG Suite directories]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#suite-directories
[UG Suite initialization files]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#suite-initialization-files
[UG Suite setup and teardown]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#suite-setup-and-teardown
[UG Suite documentation]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#suite-documentation

