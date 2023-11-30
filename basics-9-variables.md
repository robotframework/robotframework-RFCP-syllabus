# Robot Framework basics

## Table of contents
<!-- This table of contents is created with vscode 'Markdown All in One' plugin automatically. -->
- [Robot Framework basics](#robot-framework-basics)
  - [Table of contents](#table-of-contents)
  - [VARIABLES](#variables)
    - [Learning objectives](#learning-objectives)
    - [Variable scopes](#variable-scopes)
    - [Creating variables](#creating-variables)
      - [Variables section](#variables-section)
      - [Keyword return values](#keyword-return-values)
      - [VAR syntax](#var-syntax)
    - [Item access syntax](#item-access-syntax)
    - [Built-in variables](#built-in-variables)
      - [Numbers, Booleans, None](#numbers-booleans-none)
      - [Spaces and empty strings](#spaces-and-empty-strings)
      - [Current and execution directory](#current-and-execution-directory)
    - [List and dictionary variables](#list-and-dictionary-variables)

## VARIABLES

Variables are an integral feature of Robot Framework, and most commonly they are in arguments for keywords in Test case section and Keyword sections.
Robot frameworks has variables that can be used as _scalar_, _lists_ or _dictionary_.
[[User Guide: Variables][UG Variables]]

Variable files are **Not** in the scope of this exam.

### Learning objectives

**TODO** Learning objectives are separately done.

### Variable scopes

Depending on where and how they are created, variables can have a global, test suite, test case or local scope.
[[User Guide: Variable priorities and scope][UG Variable priorities and scope]]

### Creating variables

#### Variables section

_Variable sections_ in suite files and resource files are most common source for variables.
[[User Guide: Creating variables][UG Creating variables]] 

#### Keyword return values

_Return values_ from keywords can also be set into variables.
This allows communication between different keywords even in different test libraries.
Any value returned by a keyword can be assigned to a scalar variable.
[[User Guide: Return values from keywords][UG Return values from keywords]]

#### VAR syntax

It is possible to define variable directly in test case or keyword with `VAR` keyword by adding variable name after it and then value separated with spaces.
<!-- FIXME: add proper link to documentation -->

### Item access syntax

_Nested subscriptable variables_ can be accessed using this syntax, e.g. `${x}[0][key]`. This is especially useful with JSON data returned from the REST service. 

### Built-in variables

_Built-in_ have the highest priority of all variables.  These variables are available automatically.
[[User Guide: Built-in variables][UG: Built-in variables]] 

_Operating system_ variables: `${/}`, `${:}`, `${\n}`, Built-in `automatic variables` and `Inline evaluation` are **Not** in the scope of this exam.

#### Numbers, Booleans, None

When a keyword is expecting to get an actual number and not a string, the variable syntax `${10}` can be used.
[[User Guide: Number variables][UG Number variables]]

Boolean values `True`/`False` and Python `None` can be also created using variable syntax. These are not case-sensitive, so e.g. `${True}` and `${true}` are equivalent.
[[User Guide: Boolean and None/null variables][UG Boolean and None/null variables]]
  
#### Spaces and empty strings

It is possible to create spaces and empty strings using variables `${SPACE}` and `${EMPTY}`, respectively.
[[User Guide: Space and empty variables][UG Space and empty variables]]

#### Current and execution directory

`${CURDIR}` is an absolute path to directory where the test data is located.

`${EXECDIR}` is an absolute path to the directory where test execution was started from.
[[User Guide: Operating-system variables][UG Operating-system variables]]
 
### List and dictionary variables

_List variables_ are created similar as scalar variables using `@{list}`. Variable name is in the first column and values in the subsequent columns.
[[User Guide: List variable syntax][UG List variable syntax]]

_Dictionary variables_ are created with `&{dict}`.
_Dictionary items_ are created using `name=value` syntax or existing dictionary variables after variable name.
[[User Guide: Dictionary variable syntax][UG Dictionary variable syntax]]

<!-- REFERENCES -->
[UG Variables]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#variables
[UG: Built-in variables]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#automatic-variables
[UG List variable syntax]:https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#list-variable-syntax
[UG Dictionary variable syntax]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#dictionary-variable-syntax
[UG Using variables]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#using-variables-1
[UG Creating variables]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#creating-variables
[UG Return values from keywords]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#return-values-from-keywords
[UG Variable priorities and scope]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#variable-priorities-and-scopes
[UG Number variables]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#number-variables
[UG Boolean and None/null variables]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#boolean-and-none-null-variables
[UG Space and empty variables]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#space-and-empty-variables
[UG Operating-system variables]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#operating-system-variables
