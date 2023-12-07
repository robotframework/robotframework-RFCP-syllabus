# Robot Framework basics

## Table of contents
<!-- This table of contents is created with vscode 'Markdown All in One' plugin automatically. -->
- [Robot Framework basics](#robot-framework-basics)
  - [Table of contents](#table-of-contents)
  - [TEST EXECUTION](#test-execution)
    - [Learning objectives](#learning-objectives)
    - [Executing a single file](#executing-a-single-file)
    - [Executing a directory](#executing-a-directory)
    - [Test statuses](#test-statuses)
      - [PASS and FAIL](#pass-and-fail)
      - [SKIP](#skip)
    - [Using command line options](#using-command-line-options)
      - [Controlling output files](#controlling-output-files)
      - [Selecting tests](#selecting-tests)
      - [Setting variables](#setting-variables)
    - [Viewing report and log](#viewing-report-and-log)
    - [Log levels](#log-levels)

## TEST EXECUTION

Test cases are always executed within a test suite.
Test execution is started with `robot` command.
Test data to be executed is given as an argument after the command.
The path can be absolute or relative where test are executed from.
[[User guide: Executing test case][UG Executing test case]]

_Continuable failures_ and _fatal errors_ are **Not** in the scope of this exam.

### Learning objectives

**TODO** Learning objectives are separately done.

### Executing a single file

A test file is always test suite that consist of one or more test cases.
A single test file is executed by giving the direct path to test file after `robot` command.
[[User Guide: Executing individual files][UG Executing individual files]]

### Executing a directory

Test directories can be executed by giving path to directory.
Only files with the `.robot` extension are executed.
All files and directories starting with a dot (`.`) or an underscore (`_`) are ignored.
[[User Guide: Specifying test data to be executed][UG Specifying test data to be executed]]  

### Test statuses

Test can get `PASS`, `FAIL` and `SKIP` statuses.
Suite status is determined based on test statuses.
[[User guide: Test and suite statuses][UG Test and suite statuses]]

#### PASS and FAIL

A test gets the `PASS` status if it is executed and none of the keywords it contains fails.

If any test case has failed, test and suite status is `FAIL`.
The most common reason for a test to get the `FAIL` status is that one of the keywords it contains fails.

#### SKIP

The command line option `--skip` can be used to skip specified tests without running them at all. It works based on suite or test case tags.
Test can be also skipped by tagging the test with reserved tag `robot:skip`.
Tests which are skipped are included in the test suite but not executed and they are shown in logs and reports.
[[User Guide: Skip][UG Execution flow]]

### Using command line options

Robot Framework provides a number of command line options that can be used to control how test cases are executed and what outputs are generated.
Basic option documentation can be got in command line with `--help` option.
[[User Guide: Using command line options][UG Command line options]]

_Boolean expressions_ `AND`/`OR` are **Not** in the scope of this exam.

`robot` command options `--log`, `--report` and `--output` are **Not** in the scope of this exam.

#### Controlling output files

Several output files are created when tests are executed, and all of them are somehow related to test results.
[[User Guide: Output files][UG: Output files]]

- `--outputdir`
  
  The default output directory is the directory where the execution is started from, but it can be altered with this option. 

- `--xunit`
  
  _XUnit result files_ contain the test execution summary in xUnit compatible XML format.
  [User Guide: Xunit compatible result file][UG Unix compatible result file]

#### Selecting tests  

There are several command line options for selecting test cases to execute.
[[User Guide: Selecting test cases][UG Selecting test cases]]

  - `--test`
  
    This option is the easiest way to run only some tests.
    The option can used multiple time to match multiple tests.
    It is possible to prefix the test name with a suite name.
   
  - `--suite`

    Tests can be selected also by suite names with this option that selects all tests in matching suites.
    It is possible to prefix the name with the parent suite name
  
  - `--include` and `--exclude`
  
    Tests can be run also with tags. With `--include` option is executed only tests which has matching tag.

    Test can be excluded from suite with `--exclude` option.
    Excluded tests are not executed and they are not shown in the logs and reports.

  - Using `*` and `?` wildcards

    Command line options can be used also with `*` and `?` wild cards.

#### Setting variables

Variables can be set from the command line either individually using the `--variable` option

### Viewing report and log

When both log and report files are generated, the report file has link to log file for easy navigation to more detailed information.

_Log files_ contain details about the executed test cases in HTML format.
They have a hierarchical structure showing test suite, test case and keyword details.
[[User Guide: Log file][UG Log file]]

_Report files_ contain an overview of the test execution results in HTML format.
They have statistics based on tags and executed test suites, as well as a list of all executed test cases.
[[User Guide: Report file][UG Report file]]

### Log levels

Messages in log files can have different log levels.
Some of the messages are written by Robot Framework itself, but also executed keywords can log information using different levels.
[[User Guide: Log levels][UG Log levels]]

<!-- REFERENCES -->
[UG Executing test case]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#executing-test-cases1
[UG Test and suite statuses]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#test-and-suite-statuses
[UG Execution flow]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#execution-flow
[UG Command line options]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#using-command-line-options
[UG: Output files]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#output-files
[UG Unix compatible result file]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#xunit-compatible-result-file
[UG Selecting test cases]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#selecting-test-cases
[UG Log levels]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#log-levels
[UG Log file]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#log-file
[UG Report file]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#report-file
[UG Executing individual files]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#executing-individual-files
[UG Selecting files by name or path]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#selecting-files-by-name-or-path
[UG Specifying test data to be executed]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#specifying-test-data-to-be-executed
