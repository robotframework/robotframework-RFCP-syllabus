# Robot Framework basics

## Table of contents
<!-- This table of contents is created with vscode 'Markdown All in One' plugin automatically. -->
- [Robot Framework basics](#robot-framework-basics)
  - [Table of contents](#table-of-contents)
  - [CONTROL STRUCTURES](#control-structures)
    - [Learning objectives](#learning-objectives)
    - [IF](#if)
      - [Evaluating condition](#evaluating-condition)
      - [ELSE](#else)
      - [ELSE IF](#else-if)
      - [Inline IF](#inline-if)
    - [FOR](#for)
    - [Other control structures](#other-control-structures)
      - [TRY](#try)
      - [WHILE](#while)
      - [BREAK and CONTINUE](#break-and-continue)

## CONTROL STRUCTURES

Control structures are familiar from most programming languages and they allow conditional execution, repeatedly executing a block of keywords and fine-grained error handling.
[[User Guide: Control structures][UG Control structures]]

### Learning objectives

**TODO** Learning objectives are separately done.

### IF

With the `IF` statement it is possible to execute keywords conditionally.
There needs to be condition that is evaluated.
`IF` statemend ends with `END`.
[[User Guide: IF/ELSE syntax][UG IF/ELSE syntax]]

#### Evaluating condition
  
Conditions are evaluated using Python's eval function so that normal Python constructs like `'${x}' == 'expected', ${x} > 0 and '${x}'.upper() not in ('FAIL', 'BAD')` can be used and all builtin functions like `len()` and `int()` are available.
[[User Guide: Evaluating expressions][UG Evaluating expressions]]
  
#### ELSE
  
`ELSE` branch is executed if the `IF` condition is not true.
[[User Guide: ELSE branches][UG ELSE branches]]

#### ELSE IF
  
`ELSE IF` branch is executed if the initial condition is not true. 
There can be multiple `ELSE IF` branches and they are gone through in the order they are specified.
An optional `ELSE` branch can follow `ELSE IF` branches and it is executed if all conditions are false.
[[User Guide: ELSE/IF branches][UG ELSE/IF branches]]

#### Inline IF
  
An alternative is using _inline_ `IF` syntax where the statement to execute follows the `IF` marker and condition directly and no `END` marker is needed.
This can be used if there is a need to execute only single statement.
The `ELSE` and `ELSE IF` statements are also supported.
[[User Guide: Inline if][UG Inline if]]
 
### FOR

Test libraries can have any kind of _loop constructs_, and most of the time loops should be implemented by using them.
`FOR` loops can be used with both test cases and user keywords.
[User Guide: FOR loops][UG FOR loops]

### Other control structures

#### TRY

`TRY`/`EXCEPT` syntax is inspired also from Python.
This approach is for handling failures during execution.
There can be multiple `EXCEPT` branches.
In that case they are matched one by one and the first matching branch is executed. 
[[User Guide: Try/Except][UG Try/Except]]

#### WHILE

`WHILE` loops combine features of `FOR` loops and `IF`/`ELSE` structures.
They specify a condition and repeat the loop body as long as the condition remains true.
`WHILE` loops can be nested and also combined with other control structures.
[[User Guide: While loops][UG While loops]]

#### BREAK and CONTINUE

Both `FOR` and `WHILE` loop execution can be controlled with `BREAK` and `CONTINUE` statements. The former exits the whole loop prematurely and the latter stops executing the current loop iteration and continues to the next one.
Both are typically used conditionally with `IF`/`ELSE` or `TRY`/`EXCEPT` structures.
[[User Guide: Loop control BREAK/CONTINUE][UG Loop control BREAK/CONTINUE]]

<!-- REFERENCES -->
[UG Control structures]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#control-structures
[UG IF/ELSE syntax]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#if-else-syntax
[UG ELSE branches]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#else-branches
[UG ELSE/IF branches]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#else-if-branches
[UG FOR loops]:https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#for-loops
[UG While loops]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#while-loops
[UG Try/Except]:https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#try-except-syntax
[UG Loop control BREAK/CONTINUE]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#loop-control-using-break-and-continue
[UG Inline if]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#inline-if-1
[UG Evaluating expressions]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#evaluating-expressions
