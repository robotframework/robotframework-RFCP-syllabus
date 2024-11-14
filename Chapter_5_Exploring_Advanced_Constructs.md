# Chapter 5: Exploring Advanced Constructs

This chapter introduces more advanced constructs of Robot Framework.
These topics are often not necessary for simple automation cases, but they can be very useful in more complex cases.
Even though that it is NOT expected that Robot Framework Certified Professionals will be able to use them, it is important to be aware of the possibilities and understand the basic concepts.


## Advanced Variables

Variables in Robot Framework and Programming languages in general can be more complex and store multiple different types of data.


### Variable Scope
- VAR
- Set XXX Variable (Discouraged)

- **Test|Task Scope**: Variables with test|task scope are available throughout the execution of a specific test|task. They can be created within the test|task by, for example, `VAR` statement inside the test|task body with a special `scope=` setting or called library keyword. They are accessible in all called keywords during the execution of this particular test|task.

- **Global Scope**: Variables with global scope are available throughout the entire test execution, across all suites, inside all tests|tasks and keywords. These variables can be set by command-line arguments or `VAR` statement with a special `scope=` setting and should be used cautiously to avoid conflicts and ensure test|task independence.



### List-Like



### Dict-Like



### Built-In Variables



### Naming Conventions




## Control Structures



### IF Statements



### FOR Loops



### WHILE Loops



### TRY / EXCEPT
