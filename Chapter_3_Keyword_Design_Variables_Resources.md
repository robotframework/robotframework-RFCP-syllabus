# Chapter 3: Keyword Design, Variables and Resource Files


## Variables
### Variable Sytax (scalar & escaping)
### Assigning Variables (by return) & usage
### \*\*\* Variables \*\*\* Section
### Variable Scope Basics (Suite vs Local)

## Keyword Definition & Arguments
### \*\*\* Keywords \*\*\* Section
### Names
### Documentation
### Keyword Arguments
- Mandatory
- Optional with Defaults
- Embedded Arguments
### RETURN statement

## Resource Files
### File Type & Structure
- Resource (not parsed)
- Sections
### Designing reusable Keyword
### Best practices ???
- avoid circular imports

## Documentation
### Basic Syntax
### Keyword / Test|Task / Suite / Resource|Library
### LibDoc



<!-- ################## DRAFT ############################## -->
## Chapter 3: Keyword Design, Variables, and Resource Files

This chapter introduces the essential components of Robot Framework: **Keywords**, **Variables**, and **Resource Files**. These building blocks allow users to create reusable, structured, and maintainable automation scripts. Understanding these concepts is critical for developing efficient automation in both testing and RPA contexts.

### Variables

#### Variable Syntax (Scalar & Escaping)
Variables in Robot Framework are used to store values that can be referenced and reused throughout your test cases, tasks, and keywords. They help manage dynamic data, reducing hardcoding and making your automation flexible.

- **Scalar Variables**: Store single values and are represented by the syntax `${variable}`. For example: `${USERNAME}` might store a username like "admin."
- **Escaping**: Special characters, such as `${}`, can be escaped with a backslash `\` when they need to be included as text rather than evaluated as a variable.

#### Assigning Variables (by Return) & Usage
Variables can be assigned by capturing the return values of keywords. This makes the tests more dynamic by allowing you to store keyword results for further use in the test execution.
For example:
```robotframework
${RESULT} =  Run Keyword  Calculate Sum  ${NUM1}  ${NUM2}
```

#### `*** Variables ***` Section
Variables can be defined in the `*** Variables ***` section, which allows you to predefine variables to be reused across the suite. This section is often used to define constants or configurable data.

#### Variable Scope Basics (Suite vs Local)
Variables in Robot Framework have either **local** or **suite-wide scope**:
- **Local Variables**: Defined within a test case or keyword and only available within that context.
- **Suite Variables**: Declared in the `*** Variables ***` section or through resource files and are accessible across the entire test suite.

### Keyword Definition & Arguments

#### `*** Keywords ***` Section
The `*** Keywords ***` section allows you to define reusable **User Keywords**, which are made from other keywords. These are only available locally within the same suite but help improve the modularity and readability of tests.

#### Names
Keyword names should be descriptive, concise, and follow clear naming conventions. This improves test clarity and maintainability.

#### Documentation
Each keyword should have clear documentation explaining its purpose, expected arguments, and behavior. Good documentation is crucial for users and future maintainers.

#### Keyword Arguments
- **Mandatory Arguments**: These must be provided when the keyword is called.
- **Optional Arguments**: These include default values and can be omitted if unnecessary.
- **Embedded Arguments**: Keywords can also embed arguments directly in their names, especially in behavior-driven specifications.

#### RETURN Statement
The `RETURN` statement in Robot Framework is used to return values from a keyword to be used in further test steps or stored in variables. This allows test execution to pass data between different steps and keywords.

### Resource Files

#### File Type & Structure
**Resource files** allow you to centralize keywords, variables, and settings across multiple suites. These files have the extension `.resource` and are commonly used to define reusable components.

- **Resource Files**: Include sections like `*** Keywords ***`, `*** Variables ***`, and `*** Settings ***`, similar to suite files but are not parsed for tests or tasks.

#### Designing Reusable Keywords
When designing reusable keywords in resource files, ensure they are generic and parameterized to fit multiple contexts. This promotes reuse and reduces redundancy in automation.

#### Best Practices
Avoid circular imports when organizing resource files and libraries. Ensure resource files are modular, focusing on specific domains or functionalities to make them easier to maintain.

### Documentation

Robot Framework provides tools to generate keyword documentation using the `libdoc` tool. This automatically generates structured documentation for libraries and resource files, making it easier to reference keyword functionality during development.
