# Robot Framework basics

## Table of contents
<!-- This table of contents is created with vscode 'Markdown All in One' plugin automatically. -->
- [Robot Framework basics](#robot-framework-basics)
  - [Table of contents](#table-of-contents)
  - [LIBRARIES](#libraries)
    - [Learning objectives](#learning-objectives)
    - [Importing](#importing)
      - [By name](#by-name)
      - [By path](#by-path)
    - [BuiltIn Libraries](#builtin-libraries)
    - [Standard libraries](#standard-libraries)
    - [External libraries](#external-libraries)
      - [How to find](#how-to-find)
      - [How to install](#how-to-install)
    - [Understanding Libdoc HTML outputs](#understanding-libdoc-html-outputs)

## LIBRARIES

Test libraries contain those lowest-level keywords, often called library keywords, which actually interact with the system under test.
[[User Guide: Using test libraries][UG Using test libraries]]

### Learning objectives

**TODO** Learning objectives are separately done.

### Importing

Test libraries are typically imported in the `Library` settings. There exists also `Import Library` keyword which can be also used.
Libraries can be imported also with specified arguments.
[[User Guide Importing libraries][UG Importing libraries]]

#### By name

Importing libraries using its name is the most common way. In this approach Robot Framework tries to find the class or module implementing the library from the Python module search path.
[[User Guide: Using library name][UG Using library name]]

#### By path

Using a path to the library is an another mechanism. This path is considered relative to the directory where current test data file is situated similarly as paths to resource and variable files. The main advance of the this approach us that there is no need to configure the module search path.
Path can be either relative or absolute.
[[User Guide: Using physical path to library][UG Using physical path to library]]

### BuiltIn Libraries

`Builtin` is Robot Framework's standard library that provides a collection of generic keywords. It is imported automatically and always available.
[[User Guide: Standard libraries][UG Standard libraries]]

### Standard libraries

Some test libraries are distributed with Robot Framework and these libraries are called as a _Standard libraries_. These libraries need to be imported in the same way as any other libraries.
[[User Guide: Standard libraries][UG Standard libraries]]

### External libraries

_External libraries_ are not packaged with the core network. The Robot Framework open source community has implemented several generic libraries, such as SeleniumLibrary and SwingLibrary.
Custom libraries can also be implemented by teams.
[[User Guide: External libraries][UG External libraries]]

#### How to find

A list of publicly available external libraries can be found from  [[Robot Framework Org's website: Resources][RF Org resources]].

#### How to install

All external libraries should have clear installation and usage documentation. They may also require some other depencies to be installed separately.
[[User Guide: External libraries][UG External libraries]]

### Understanding Libdoc HTML outputs

`Libdoc` is Robot Framework's built-in tool that can generate documentation for Robot Framework libraries and resource files in HTML (for humans) and XML or JSON (for tools) formats.
[[User Guide: Library documentation tool][UG Library documentation tool]]

<!-- REFERENCES -->
[UG Using test libraries]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#using-test-libraries
[UG Importing libraries]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#importing-libraries
[UG Using library name]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#using-library-name
[UG Using physical path to library]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#using-physical-path-to-library
[UG Standard libraries]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#standard-libraries
[UG External libraries]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#external-libraries
[RF Org resources]:https://robotframework.org/#resources
[UG Library documentation tool]: https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#library-documentation-tool-libdoc