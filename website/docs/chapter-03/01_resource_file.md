
# 3.1 Resource File Structure

Resource Files in Robot Framework are used to store reusable keywords,
variables, and organize imports of other resource files and libraries.
See [2.4.2 Resource Files](../chapter-02/Chapter_2_Getting_Started.md#242-resource-files) for an introduction to Resource Files.

Resource Files are typically used in many suites to share common keywords and variables across different tests|tasks.
Therefore, they should be designed to be modular, reusable, and maintainable.
Keywords and variables defined in one resource file should therefore
be related to each other to store similar functionality or data.
This relation can be based on a common purpose, a common abstraction layer, or a common context.

For example all user keywords and variables that do control
or test a specific part or dialog of an application could be stored together in one resource file.

Resource files are imported using the `Resource` setting in the
`*** Settings ***` section so that the path to the resource file
is given as an argument to the setting.
The extension for resource files shall be `.resource`.

Unless the resource file is given as an absolute path,
it is first searched relatively to
the directory where the importing file is located.
If the file is not found there, it is then searched from the
directories in Python's module search path.
See [2.4.3 Import Paths](../chapter-02/Chapter_2_Getting_Started.md#243-import-paths) for more details.



## 3.1.1 Sections in Resource Files

See [2.1.2 Sections and Their Artifacts](../chapter-02/Chapter_2_Getting_Started.md#212-sections-and-their-artifacts) for an introduction to sections in suites.

Other than in suites, resource files do not allow the `*** Test Cases ***` or `*** Tasks ***` sections.

The allowed sections in recommended order are:
- `*** Settings ***` to import libraries and other resource files.

  This section has common but also different settings available than in suites.

  Common settings are:
  - `Library` to import libraries.
  - `Resource` to import other resource files.
  - `Variables` to import variable files. (Not part of this syllabus)
  - `Documentation` to provide documentation for the resource file.

  Additional settings are:
  - `Keyword Tags` to set tags for all keywords in the resource file.
    defining and using Keyword tags is not part of this syllabus.

  Other settings available in suites are not available in resource files.

- `*** Variables ***` to define variables.

  See [3.2.2 `*** Variables ***` Section](../chapter-03/Chapter_3_Keyword_Design_Variables_Resources.md#322--variables--section) for more details about defining variables in resource files.
  Other than in suites these variables can be used outside this resource file, if it is imported in another file.
- `*** Keywords ***` to define user keywords.

  See [3.3.1 `*** Keywords ***` Section](../chapter-03/Chapter_3_Keyword_Design_Variables_Resources.md#331--keywords--section) for more details about defining keywords in resource files.
  Other than in suites these keywords can be used outside this resource file, if it is imported in another file.

- `*** Comments ***` is used to store comments and is ignored and not parsed by Robot Framework. (same as in suites)




