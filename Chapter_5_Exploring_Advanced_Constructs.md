# Chapter 5: Exploring Advanced Constructs

This chapter introduces more advanced constructs of Robot Framework.
These topics are often not necessary for simple automation cases, but they can be very useful in more complex cases.
Even though that it is NOT expected that Robot Framework Certified Professionals will be able to use them, it is important to be aware of the possibilities and understand the basic concepts.




## Advanced Variables

Variables in Robot Framework and Programming languages in general can be more complex and store multiple different types of data.
Also Robot Framework has many possibilities to create any kind of values and types.
However the direct built-in language support is limited to the very basic [Primitive Data Types](Chapter_3_Keyword_Design_Variables_Resources.md#primitive-data-types) and [Lists](Chapter_3_Keyword_Design_Variables_Resources.md#list-variable-definition) and [Dictionaries](Chapter_3_Keyword_Design_Variables_Resources.md#dictionary-variable-definition).

This chapter will give a more advanced knowledge about the different variable scopes, lists and dictionaries and their syntax and some background about the most important Built-In Variables.

Understanding the **priority** and **scope** of variables in Robot Framework is crucial for effective test automation.
Variables can be defined in multiple places and ways, and their availability and precedence depend on where and how they are created.



### Variable Priorities

> [!IMPORTANT]
> LXX Understand the difference between statically defined and dynamically created variables in Robot Framework (K2)

Variables can originate from various sources, and when variables with the same name exist,
Robot Framework resolves them based on their priority.

There are multiple influence factors that determine the priority of variables in Robot Framework,
what kind of variable it is, the time of (re-)definition and the scope of the variable.

In general there are two kinds of variables regarding their way of creation:
- Statical defined or imported variables (e.g. in the `*** Variables ***` section, command-line options, imported resource files)
- Dynamically created variables during Robot Framework execution (e.g. using the `VAR` syntax, assignment of return values from keywords or keyword arguments)

BuiltIn variables can not generally be sorted into one of these categories, because some of them are predefined globally, while others are created during execution with a `SUITE` or `TEST` scope.


#### Statically Defined or Imported Variables

> [!IMPORTANT]
> LXX Recall the priority of statically defined or imported variables in Robot Framework (K1)

The rule of thumb here is: **"First come, (first) served!"**

The time of definition has the greatest impact on the priority of these variables.

In descending order, the priority is as follows:

1. **Global Command-Line Variables**: Variables defined via command-line options like `--variable` or `--variablefile` have the highest priority. See [Global Variables via Command Line](#global-variables-via-command-line) for more details.

2. **`*** Variables ***` Section**: Variables defined in the `*** Variables ***` section of a suite are set before any resource file from the `*** Settings ***` section is imported. See [`*** Variables ***` Section](Chapter_3_Keyword_Design_Variables_Resources.md#-variables--section) for more details.

3. **Resource Files**: Variables from resource files are imported in the order they are specified in the `*** Settings ***` section. See [Resource Files](Chapter_2_Getting_Started.md#resource-files) for more details.

   Within a resource file, the same order applies: Variables defined in the `*** Variables ***` section of a resource file have a higher priority than variables imported from other resource files.

However, variables defined during the execution of Robot Framework either overwrite or shadow these variables.


#### Dynamically Created Variables

> [!IMPORTANT]
> LXX Recall the priority of dynamically created variables in Robot Framework (K1)

Variables created or modified during execution do result in a higher priority than statically defined or imported variables.

The rule of thumb here is: **"Last one wins!"**

This is not entirely true, because the scope of a variable defines its lifetime and availability.
So as long as a variable is in scope, the last definition wins over the previous ones.

That means that i.e. a local variable that is defined as a [User Keyword Argument](Chapter_3_Keyword_Design_Variables_Resources.md#user-keyword-arguments) has a higher priority than a suite variable that has been defined in the `*** Variables ***` section of the suite file, but when the scope of the keyword body is left, the suite variable is again in scope and has the higher priority.


### Variable Scopes

> [!IMPORTANT]
> LXX Recall the different variable scopes in Robot Framework (K1)

Variables in Robot Framework have different scopes, which determine where they can be accessed and how long they are available.

#### 1. Global Scope

> [!IMPORTANT]
> LXX Recall how how to define global variables and where they can be accessed (K1)

- **Definition**: Variables accessible everywhere during the test execution.
- **Creation**:
  - Set from the command line using `--variable` or `--variablefile` options. (static)
  - Created during execution using the `VAR` syntax with the `scope=GLOBAL` argument at any point. (dynamic)
- **Usage**: Ideal for configuration parameters that need to be consistent across the entire test run.

Because global variables set via the command line have the highest priority, they can be used to override other variables defined in the suite or resource files.
The most common use case for global variables is to define environment-specific or execution configurations, such as URLs, credentials, browser types, API keys or similar data.

See [Global Variables via Command Line](#global-variables-via-command-line) for more details.


**Recommendation**:
Global variables should always be defined using uppercase letters, like `${GLOBAL_VARIABLE}`, to distinguish them from local variables.
For every global variable there should be a corresponding default value defined in either a `*** Variables ***` section or imported from variable files, so that Editors and IDEs can provide auto-completion and static code analysis.


#### 2. Suite Scope

> [!IMPORTANT]
> LXX Recall how how to define suite variables and where they can be accessed (K1)

- **Definition**: Variables accessible within the test suite where they are defined, including all its tests|tasks and keywords.
- **Creation**:
  - Defined in the `*** Variables ***` section of the suite file. (static)
  - Imported from resource or variable files. (static)
  - Set during execution of a suite using the `VAR` syntax with the `scope=SUITE` argument. (dynamic)
- **Usage**: Useful for sharing data among tests|tasks within the same suite or configuring suite-specific settings or setting default values for global variables.

Suite scope is not recursive; variables in a higher-level suite are not available in lower-level suites. Use resource files to share variables across suites.

Variables with a suite scope do mostly belong to the group of statically defined or imported variables, but they can also be created dynamically during the execution of a suite and in this latter case they have a higher priority than statically defined variables and can shadow or overwrite them.

If a variable is defined in the `*** Variables ***` section of a suite file and the same variable is defined dynamically using the `VAR` syntax on suite level, the variable value is overwritte with the new value.

If a variable is defined globally using the command line and a same named variable is dynamically defined on suite level, the suite variable is now shadowing the global variable and has a higher priority as long as this suite is in scope. As soon as the suite is finished or a sub-suite is executed, the global variable is again in scope and has the higher priority.


**Recommendation**:
Suite variables should be defined using uppercase letters, like `${SUITE_VARIABLE}`, to distinguish them from local variables.
These variables should, even if they are dynamically overwritten during the execution, be defined in the `*** Variables ***` section of the suite file, so that they are visible in the Editor and IDE and can be used for auto-completion and static code analysis.


#### 3. Test|Task Scope

> [!IMPORTANT]
> LXX Recall how how to define test|task variables and where they can be accessed (K1)

- **Definition**: Variables accessible within a single test|task and within all keywords it calls.
- **Creation**:
  - Created during test execution using the `VAR` syntax with the `scope=TEST` or `scope=TASK` argument. (dynamic)
- **Usage**: Appropriate for data that is specific to a single test|task.

Test|Task variables cannot be created in suite setup or teardown or be imported.
Test|Task scope variables are not available in other tests|tasks, even if they are in the same suite.
They can only be created dynamically, therefor they have a higher priority than suite or global variables as long as they are in scope.
Once a test|task is finished, the variables are no longer available and if it has shadowed a suite or global variable, that variable is again in scope.

**Recommendation**:
Test|Task variables should only be used if there is a clear need to share data across multiple keywords within a single test|task and if this is known by all team members. Otherwise it is better to use local variables. Editor and IDE support for these variables is limited, so they should be used with caution.


#### 4. Local Scope

> [!IMPORTANT]
> LXX Recall how how to define local variables and where they can be accessed (K1)

- **Definition**: Variables accessible only within the keyword or test|task where they are defined.
- **Creation**:
  - Variables assigned by keyword return values.
  - Variables defined using the `VAR` syntax (opt: with `scope=LOCAL`)  within a keyword or test|task.
  - Keyword arguments.
- **Usage**: Most common variables used to temporarily store data and distribute them to other keywords.

Local variable are the most commonly used variables in Robot Framework, that also have the least side effects.
Therefore they should be preferred over other variable scopes, if there is not an explicit need to share data over scope boundaries.

**Recommendation**:
Local variables should always be defined using lowercase letters, like `${local_variable}`, to distinguish them from other variables.

**Example of local variables**:

```robotframework
*** Test Cases ***
Test People In Room
    ${trainer_count}    Get Trainers In Room    # returns the integer 2
    ${trainee_count}    Get Trainees In Room    # returns the integer 12
    ${total_people}    Calculate Sum    ${trainer_count}    ${trainee_count}
    Should Be Equal As Numbers    ${total_people}    14

*** Keywords ***
Calculate Sum
    [Arguments]    ${num1}    ${num2}
    ${result}    Evaluate    ${num1} + ${num2}
    RETURN    ${result}
```

In this example the variables `${trainer_count}` is only available in the test case itself and not in the keyword `Calculate Sum`.
Therefore its value has to be passed as an argument to the keyword `Calculate Sum` which causes, that the value stored in `${trainer_count}` is assigned to the local variable `${num1}` within the keyword `Calculate Sum`.
Also the variable `${result}` is only available within the keyword `Calculate Sum` and only its value is returned to the test case where it is assigned to the variable `${total_people}`.



### Global Variables via Command Line


### List-Like



### Dict-Like



### Built-In Variables



## Control Structures



### IF Statements



### FOR Loops



### WHILE Loops



### TRY / EXCEPT
