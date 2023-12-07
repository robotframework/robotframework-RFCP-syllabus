# Robot Framework basics

## Table of contents
<!-- This table of contents is created with vscode 'Markdown All in One' plugin automatically. -->
- [Robot Framework basics](#robot-framework-basics)
  - [Table of contents](#table-of-contents)
  - [RESOURCE FILES](#resource-files)
  - [Learning objectives](#learning-objectives)
    - [Importing](#importing)
    - [Structure](#structure)
    - [Imports in resource seen in suite file](#imports-in-resource-seen-in-suite-file)

## RESOURCE FILES

Resource files are typically created using the plain text format, but also reStructuredText format and JSON format are supported. 
[[User Guide: Resource files][UG Resource files]]  

## Learning objectives

**TODO** Learning objectives are separately done.

### Importing

Resource files are imported using the `Resource` setting in the `Settings` section so that the path to the resource file is given as an argument to the setting. 
The user keywords and variables defined in a resource file are available in the file that takes that resource file into use. 
[[User Guide: Taking resource files into use][UG Taking resource files into use]]

### Structure

Structure of resource file is the same as in suite files. 
Resource file cannot contain tests. `Settings` section can contain only imports, documentation and keyword tags. 
There can also be `Variables` section with variables. 
[[User Guide: Resource file structure][UG Resource file structure]]

### Imports in resource seen in suite file

All imported keywords and variables in the resource file can be used in the suite file.

<!-- REFERENCES -->
[UG Resource files]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#resource-files
[UG Taking resource files into use]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#taking-resource-files-into-use
[UG Resource file structure]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#resource-file-structure
