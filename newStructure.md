<!-- ######################################################## -->
# Chapter 0: Course Overview

## About Syllabus
<!-- Purpose of that document, how it is structured, what is binding (LO) and what are recommendations (Order) -->
## About "Robot Framework Certified Professional®"
<!-- What level is this and what is the difference to RFCE -->
## Business Outcomes
<!--  -->
## About Learning Objectives and Knowledge Levels
<!-- What is it and how to apply K-Levels -->
## Learning Objectives
<!-- We may list them here all -->
## About the Training Providers
<!-- About the (quality) requirements to become a training provider. -->
## About the Exam
<!-- Amount of questions, forms of exam, pass rate, MCQ, etc. -->



<!-- ######################################################## -->
# Chapter 1: Introduction to Robot Framework


## Purpose and Use-Cases

> [!NOTE]
> (K1) recall the purpose and use-cases of Robot Framework.

<!-- What is Robot Framework used for? Where it is coming from. -->
### Test Automation
<!-- Test Automation does include all levels, but the main use is:
- System Testing
- System Integration Testing
- Acceptance Testing

See Test Levels of CTFL

Also:
- testing and verification of live systems in production -->
### Robotic Process Automation (RPA)
<!-- Find some sorce what RPA is ;) -->

## Architecture of Robot Framework
<!-- Its a framework that enables you to build an automation. It is NOT a full stack automation tool, that covers all layers of automation solutions! -->
### gTAA
<!-- use the wording from the iSTQB TAE "Definition layer", "Execution layer", "Adaptation layer" -->
### What is Robot Framework & what not?
<!-- Execution is RF, Parser, results. No Libraries, except Standard. No Editors. Definition of Formats and APIs for them. -->
### Technology & Prerequisites
<!-- pure Python based, but adaptable to other languages and technologies.
Needs Python Interpreter on the Machine to run the code.
Is typically installed from PyPi.org -->


## Basic Syntax & Structure
<!-- Script based interpreter of mainly text files -->
### What are Tests/Tasks
<!-- Executable items that surve a purpose organized in Suites
Test = Synnonym to Test Case therefore the syllbus uses "Test(s)" and "Test Case(s)" -->
### Files & Folders
<!-- Organization of Tests|Tasks in Suites that may be Files or folders. -->
### What are Keywords?
<!-- Test|Tasks are structured in Keywords.
Explain what a keyword in general is in the context of RF, because it is common to BD and KD style -->
### Resource-Files, Libraries
<!-- While Test|Tasks are organized in Suites, Keywords are organized in Resource-Files and Keyword-Libraries. -->


## Specification styles
<!-- Styles are appliable to all kinds of automation use.
Thise styles may be used for KDT or BDD but are not exclusive for either testing or those specific methods!
 -->
### Keyword-Driven Specification
<!-- maybe ISO? or do we want our own definition -->
### Behavior-Driven Specification
<!-- Embedded Arguments and Given/When/Then -->


## Organization and Licensing
### Open Source License
<!-- About Apache 2.0 and its main concept/advantages.
- Permissive License!
- No warrantee
- Keep Author and Changes visible -->
### About the Robot Framework Foundation
<!-- Take Definition and Purpose from the Articles of Association -->
### Robot Framework Webpages ???
<!-- Basic knowledge which pages are from robot framework like rf.org -->



<!-- ######################################################## -->
# Chapter 2: Getting Started with Robot Framework


## Suite File Structure (Sections)
<!-- Suite Files do contain mainly Tests|Tasks and import or define all their dependencies. -->
### Sections and Their Artifacts
<!--
Brief description what each section is good for with linkage to the Chapters that explain the topics in detail.
-->

## Basic Test/Task Syntax
<!-- *** Test Cases|Tasks *** Section
 - Test Case Names unindented
 - Keyword Calls (KW-Name & pos Args) with their parsing order,
    - Advanced syntax is explained at other point (Assignment, embedded and named args)
 - \[Documentation] (Basics and Line Breaks/continuation)
-->

## Executing Robot
<!-- What execution means, like parsing the files and building the model then executing the model while writing the output. -->
### `robot` command & help
<!-- How to execute robot and check its version.
Learn about the minimal call command `robot <path to suite>.
Learn about the possinility to use --help to learn about more commands.
Further importent commands are in Chapters : --exclude --include -->
### Execution Artifacts
<!--
- log.html
- report.html
- output.xml
 -->
### Status
<!-- Learn about "PASS" and "FAIL" and that ther is also "NOT RUN" and "SKIP" -->
### Logging possibilities (Log vs Console)
<!-- Keywords and Robot Framework can basically log either to the output.xml and theirfor to the log.html in multiple levels or to the console.

?? --loglevel? Will theis be part?-->

## Keyword Imports
<!-- To use Keywords that are not part of BuiltIn, which is always imported invisibyl, you must import keywords into the current scope. Basically Two different sources of keywords.
- Libraries, which containt low-level keywords actually implementing functionality, typically in Python.
- Resource Files, which einther again import libraries or other Resource Files or they specify User Keywords.  -->
### User Keywords vs Library Keywords
### Libraries
<!-- BuildIn vs Standard vs 3rd Party vs Custom made.
They do bring Library Keywords, but may also serve other topics that are out of scope of syllabus.-->
### Resource Files
<!-- Short explaination what the may bring, (Variables, User Keywords or Library Keywords) -->
### Import Paths (\ vs / vs rel vs abs vs -P)
<!-- Use Import Paths ALWAYS with forward /
Recommendation to use Python Path for central elements
Use relative path to folder local stuff. ${CURDIR}?
Avoid abolute Paths
!!!!!!! Would like to discuss that with some people !!!!! "Style Guide?"-->

## Keyword Interface and Documantation
<!-- Keywords from Libraries and Resources can be called and can be documented either as HTML or in IDEs with Robot Support. -->
### Understanding Keyword Docs
<!-- Open Keywords Docs that are fully typed and lets have a look to some basic things.

I think it is imported to point out the type of arguments in comparison the type of setting an argumetn. See next-->
### Mandatory Args
<!-- They must be filled! -->
### Optional Args
<!-- They may be filled otherwise they use their default -->
### Embedded Args
<!-- Are mandatory arguments as part of the keyword names and must be filled. Used for Behavior-Driven Specification -->
### Return Values
<!-- Keywords may gather information and return these to the caller of that keyword. A Documented Return Value may be present but often it is just written in the docs, due to new feture -->
### Keyword Types
<!-- Just to understand that they are there and that they may document how values are handled or which are allowed. -->
### Keyword Documentation & Examples
<!-- How to read Keyword Docs and What they shall state -->


## Using imported Keywords
<!-- How to call them, Spaces and Arguments.
-->
### Positional Args
<!-- Typical way to call them. All must be set in specific oreder. -->
### Named Args
<!-- Possibility for better read-/understandability.
Mixing oder, should be avoided.
Skippig of optional args -->
### Using Behaviour-Driven Specification
<!--
- What is BDD
- Using Embedded (mixed) Arguments
- Given/When/Then/And/But
 -->




<!-- ######################################################## -->
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




<!-- ######################################################## -->
# Chapter 4: Advanced Structuring and Execution


## Teardowns (Suite, Test|Task, Keyword)

## Setups (Suite, Test|Task)

## Suite Initialization Files

## Tagging of Test|Tasks
- Test Tags and --include/exclude




<!-- ######################################################## -->
# Chapter 5: Exploring Advanced Constructs


## Advanced Variable
### Creation & Scopes
- VAR
- Set XXX Variable (Discouraged)
### List-Like
### Dict-Like
### Built-In Variables
### Naming Conventions


## Control Structures
### IF Statements
### FOR Loops
### WHILE Loops
### TRY / EXCEPT
