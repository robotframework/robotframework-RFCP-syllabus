# Robot Framework basics

List of topics covered by Robot Framework foundation/basic level exams.

Topics starting with `Not` are not to be covered by these exams, but are
instead in the scope of the advanced exams. Topics with `(?)` after them
may be better moved to the advanced exam scope as well. ~Strikethrough~ Are agreed
to be moved to Advanced level.

## Overview / Guidelines

- Where can be used
  - Domains
  - Testing levels
  - BDD
  - RPA
- Architecture
  - Framework
  - Libraries
  - As part of CI (?)
- Installation (?)
- Editors (?)
- Coding style
- Creating maintainable tests
- Dependencies between tests (to be avoided)
- Avoid sleep (use polling)

## Test case syntax

- Test case structure
  - Keyword driven style
  - Date-driven style
  - BDD style

- Imports
  - Libraries
  - Resources
  - Not variable files

- Using arguments
  - Positional arguments
  - Name arguments
  - Embedded arguments
  - Not varargs or kwargs

- Setup and teardown
- Documentation
- Tags
- ~Timeouts (?)~
- Comments
- Escaping

## Suite structure

- Suite files
- Suite directories
- Initialization files
- Setup and teardown
- Documentation
- ~Metadata (?)~

## User keywords

- Basic structure
- Arguments
  - "Normal" arguments
  - Arguments with default values
  - Embedded arguments
  - Not varargs or kwargs
- Documentation
- ~Tags~
- ~Timeouts~
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
- External libraries
    - How to find
    - How to install
- Understanding Libdoc HTML outputs

## Control structures

- IF
  - Evaluating expressions --> variable syntax should be explained 
  - ELSE
  - ELSE IF
  - Inline IF
- Recognise the following:
  - FOR
  - TRY, WHILE, CONTINUE, BREAK

## Variables

- Creating variables in the Variables section
- Creating variables from keyword return values
- `VAR` syntax (new feature in RF 7)
- Item access syntax `${x}[0][key]`
- Built-in variables
  - Numbers, Booleans, None
  - `${SPACE}`, `${EMPTY}`
  - `${CURDIR}`, `${EXECDIR}`
  - ~`${/}`, `${:}`, `${\n}`~
  - Not automatic variables
- ~Extended variable syntax~
- Recognise `@{list}` and `&{dict}` variables
- Not inline Python evaluation

## Test execution

- Executing a single file
- Executing a directory
- Test statuses
  - PASS and FAIL
  - recognise SKIP
- Using command line options
- Controlling output files
  - `--outputdir`
  - `--variable`
  - ~`--log`, `--report`, `--output`~
  - recognise `--xunit`
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

## Other tools
recognise the following:
- Rebot
  - Generating log and report based on `output.xml`
  - Combining results
  - Merging results
- Libdoc
