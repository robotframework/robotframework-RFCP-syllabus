# Robot Framework basics

## Table of contents
<!-- This table of contents is created with vscode 'Markdown All in One' plugin automatically. -->
- [Robot Framework basics](#robot-framework-basics)
  - [Table of contents](#table-of-contents)
  - [OTHER TOOLS](#other-tools)
    - [Learning objectives](#learning-objectives)
    - [Rebot](#rebot)
      - [Generating log and report based on output.xml](#generating-log-and-report-based-on-outputxml)
      - [Combining results](#combining-results)
      - [Merging results](#merging-results)
    - [Libdoc](#libdoc)

## OTHER TOOLS

Test framework has tools that can be used for post processing test case reports and documentation creation.
[[User Guide: Supporting tools][UG Supporting tools]]

### Learning objectives

**TODO** Learning objectives are separately done.

### Rebot

_XML output files_ that are generated during the test execution can be post-processed afterwards by the `Rebot` tool, which is an integral part of Robot Framework.
[[User Guide: Using Rebot][UG Using rebot]]

#### Generating log and report based on output.xml

`Rebot` can be used for creating the same reports and logs that are created automatically during the test execution.

#### Combining results

Rebot has ability to combine outputs from different test execution rounds.
This capability allows creating an overall report from all outputs of several execution runs for example in different test environments.
[[User Guide: Combining results][UG Combining results]]

#### Merging results

Results of re-executed test case for example after bug fixing can be combined with `--merge` option.
Latter test case runs replace test in the original report.
[[User Guide: Merging outputs][UG Merging outputs]]

### Libdoc

Libdoc is Robot Framework's built-in tool that can generate documentation for Robot Framework libraries, resource and suite files.
[[User Guide: Libdoc][UG Libdoc]]

<!-- REFERENCES -->
[UG Supporting tools]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#post-processing-outputs
[UG Libdoc]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#library-documentation-tool-libdoc
[UG Using rebot]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#using-rebot
[UG Combining results]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#combining-outputs
[UG Merging outputs]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#merging-outputs
