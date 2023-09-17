# Topics

List of topics covered by exams.

## Overview

- Where can be used
- Architecture
- Tests vs. tasks
- Installation (?)
- Editors (?)

## Test case syntax

- Test case structure
  - Keyword driven style
  - Date-driven style
  - BDD style

- Imports
  - Libraries
  - Resources
  - Not variables

- Using arguments
  - Positional arguments
  - Name arguments
  - Embedded arguments
  - Not varargs or kwargs

- Setup and teardown
- Documentation
- Tags
- Timeouts (?)
- Comments

## Suite structure

- Suite files
- Suite directories
- Initialization files
- Setup and teardown
- Documentation
- Metadata (?)

## User keywords

- Basic structure
- Arguments
  - "Normal" arguments
  - Arguments with default values (?)
  - Embedded arguments
  - Not varargs or kwargs
- Documentation
- Tags (?)
- Timeouts (?)
- RETURN

## Resource files

- Importing
- Structure
- Imports in resource seen in suite file

## Libraries

- Importing
  - By name
  - By path
  - Using arguments
- BuiltIn (always available)
- Standard libraries (automatically installed)
- External libraries (need to be installed)
- Most important available libraries (?)
- Understanding Libdoc HTML outputs

## Control structures

- IF
  - Evaluating expressions
  - ELSE
  - ELSE IF
  - Inline IF
- FOR (?)
- Not TRY, WHILE, CONTINUE, BREAK

## Variables

- Creating variables in the Variables section
- Creating variables from keyword return values
- `VAR` syntax (new feature in RF 7)
- Item access syntax `${x}[0][key]`
- Built-in variables
  - Numbers, Booleans, None
  - `${SPACE}`, `${EMPTY}`
  - `${CURDIR}`, `${EXECDIR}`
  - `${/}`, `${:}`, `${\n}` (?)
  - Not automatic variables
- Extended variable syntax (?)
- Not `@{list}` and `&{dict}` variables
- Not inline Python evaluation

## Test execution

- Executing a single file
- Executing a directory
- Test statuses
  - PASS and FAIL
  - SKIP
- Using command line options
- Controlling output files
  - `--outputdir`
  - `--log`, `--report`, `--output`
  - `--xunit` (?)
- Selecting tests
  - `--test`
  - `--suite`
  - `--include` and `--exclude`
  - Using `*` and `?` wildcards
  - Not Boolean expressions like `tag1ANDtag2`
- Viewing report and log
- Log levels
- Not continuable failures
- Not fatal errors

## Rebot

- Generating log and report based on `output.xml`
- Combining results
- Merging results

## Guidelines

- Creating maintainable tests
- Dependencies between tests (to be avoided)
- Coding style
- Avoid sleep (use polling)
