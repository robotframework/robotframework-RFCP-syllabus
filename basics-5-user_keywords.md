# Robot Framework basics

## Table of contents
<!-- This table of contents is created with vscode 'Markdown All in One' plugin automatically. -->
- [Robot Framework basics](#robot-framework-basics)
  - [Table of contents](#table-of-contents)
  - [USER KEYWORDS](#user-keywords)
    - [Learning objectives](#learning-objectives)
    - [Basic structure](#basic-structure)
    - [Arguments](#arguments)
      - [Normal arguments](#normal-arguments)
      - [Arguments with default values](#arguments-with-default-values)
      - [Embedded arguments](#embedded-arguments)
  - [Documentation](#documentation)
  - [RETURN](#return)

## USER KEYWORDS

_User keywords_ are created to combine existing keywords and they are defined in `Keywords` section.

Tags and timeout are **Not** in the scope of this exam.

### Learning objectives

**TODO** Learning objectives are separately done.

### Basic structure

User keyword syntax is identical to the test case syntax. 
They can be created in suite files, resource files, and suite initialization files. 
Keywords in resources files are available for files using them. 
[[User Guide: User keyword syntax][UG User keyword syntax]]

### Arguments

User keywords can take some arguments. Arguments are normally specified with the `[Arguments]` setting, and argument names use the same syntax as variables, for example ${arg}. 
[[User Guide: User keyword arguments][UG User keyword arguments]]

Varargs and kwargs are **Not** in the scope of this exam.

#### Normal arguments

_Positional arguments_ are the simplest way to specify arguments. 
The keyword must be used with as many arguments as there are argument names in its signature. 
Argument names should be as descriptive as possible.

#### Arguments with default values

User keywords support arguments with _default values_. 
Default values are added to arguments with the (`=`) sign. 
There can be many arguments with default values, but they all must be given after positional arguments. 
[[User Guide: Default values with user keywords][UG Default values with user keywords]]

#### Embedded arguments

_Embedded arguments_ are part of keyword names. 
It can make the data easier to read and understand for people without any Robot framework experience. 
[[User Guide: Embedding arguments into keyword name][UG Embedding arguments into keyword name]]

## Documentation

User keywords can have a documentation that is set with the `[Documentation]` setting. 
It supports same formatting, splitting to multiple lines, and other features as test case documentation. 
<!-- FIXME: add link to test case documentation after sections are combined -->

## RETURN

User keyword can return one or more values after it has been executed. 
It can be done by using the native `RETURN` statement. 
Returned values can be assigned to variable in test cases and in the other user keywords. 
[[User Guide: User keyword return values][UG User keyword return values]]

<!-- REFERENCES -->
[UG User keyword syntax]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#basic-syntax-2  
[UG Embedding arguments into keyword name]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#embedding-arguments-into-keyword-name
[UG User keyword return values]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#user-keyword-return-values
[UG User keyword arguments]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#user-keyword-arguments
[UG Default values with user keywords]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#default-values-with-user-keywords