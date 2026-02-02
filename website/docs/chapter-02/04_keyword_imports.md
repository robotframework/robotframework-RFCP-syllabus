
# 2.4 Keyword Imports

<!-- To use Keywords that are not part of BuiltIn, which is always imported invisibly, you must import keywords into the current scope. Basically Two different sources of keywords.
- Libraries, which contains low-level keywords actually implementing functionality, typically in Python.
- Resource Files, which either again import libraries or other Resource Files or they specify User Keywords.  -->
Robot Framework has a modular design that allows users to import keywords from external sources.
Without importing external keywords into a suite, only the keywords from Robot Framework's BuiltIn library are available for use, due to them being imported automatically.
Also the Robot Framework language statements themselves are available for use without importing them.

External keywords can be imported from either libraries or resource files.
Both types of sources are using different syntax to import their keywords.



## 2.4.1 Libraries

::::lo[Learning Objectives]

:::K1[LO-2.4.1-1]

Recall the purpose of keyword libraries and how to import them.

:::

:::K1[LO-2.4.1-2]

Recall the three types of libraries in Robot Framework.

:::

::::

From a user perspective there are three different kinds of libraries:
- **Robot Framework Standard Libraries**: These are libraries that are shipped with Robot Framework and are available without any additional installation. See documentation of [ext: Robot Framework Standard Libraries](https://robotframework.org/robotframework/#standard-libraries) for more information.
- **3rd Party Libraries** / **External Libraries**: These are libraries have been developed and maintained by community members and have to be installed/downloaded separately.
- **Custom Libraries**: These libraries are developed by the users themselves to solve specific problems or to encapsulate more complex functionality.

Further more detailed information about the different types of libraries and are described in later chapters.
<!-- TODO: Do we fulfill this promise? -->

To import a library into a suite or resource file the `Library` setting is used in the `*** Settings ***` section followed by the name of the library as long as they are located in the Python module search path, which automatically happens if they are installed via `pip`.
The name of the library is case-sensitive and should be taken from the library's keyword documentation.
By default, libraries in Robot Framework are implemented in Python and the name of the library is the name of the Python module that contains the library implementation.

Alternatively, if a library is not in Python module search path, a library can be imported using the path to the Python module. See [2.4.3 Import Paths](chapter-02/04_keyword_imports.md#243-import-paths).

Be aware that the library [`BuiltIn`](https://robotframework.org/robotframework/latest/libraries/BuiltIn.html) is always imported invisibly and does not need to be imported explicitly.

Example:
```robotframework
*** Settings ***
Library    OperatingSystem
Library    Browser
Library    DatabaseLibrary
```

Once a library is imported, all keywords from that library are available for use in that suite or resource file.
Which keywords are available can be seen in the keyword documentation of the library or may be visible in the IDE by code completion, depending on the IDE extension being used.



## 2.4.2 Resource Files

::::lo[Learning Objectives]

:::K1[LO-2.4.2-1]

Recall the purpose of resource files.

:::

:::K3[LO-2.4.2-2]

Use resource files to import new keywords.

:::

::::

As mentioned before resource files are used to organize and store keywords and variables that are used in multiple suites.

They share a similar structure and the same syntax as suite files, but they do not contain test cases or tasks.
See [2.2 Basic Suite File Syntax](chapter-02/02_suitefile_syntax.md) for more information about the structure of suite files and [3.1 Resource File Structure](chapter-03/01_resource_file.md) for more details of their structure.

They can contain other keyword imports, which cause the keywords from the imported libraries or resource files to be available in the suites where the resource file is imported. The same applies for variables that are defined and imported from other resource files.
Therefore keywords from a library that have been imported in a resource file are also available in the suite that imports that resource file.

To import a resource file into a suite or resource file the `Resource` setting is used in the `*** Settings ***` section followed by the path to the resource file.
See [2.4.3 Import Paths](chapter-02/04_keyword_imports.md#243-import-paths) for more information about the path to the resource file.

Resource files shall have the extension `.resource` to make it clear what they are.
`.resource` and `.robot` extensions are also recognized by IDE extensions, supporting Robot Framework.

Example:
```robotframework
*** Settings ***
Resource    local_keywords.resource
Resource    D:/keywords/central_keywords.resource
```

See more about the structure of resource files in
[3.1 Resource File Structure](chapter-03/01_resource_file.md)
and how keywords and variables are created in the sections following that.



## 2.4.3 Import Paths

::::lo[Learning Objectives]

:::K2[LO-2.4.3]

Understand the different types of paths that can be used to import libraries and resource files.

:::

::::

When importing libraries or resource files via a path, the path can be either an absolute path or a relative path.
If a relative path is given, the path is resolved relative to the data file that is importing the library or resource file.

If an **absolute path** is given, the resource file or library is searched for at the given path.

If a **relative path** is given, the resource file or library is searched for relative to the data file that is importing it and then relative to the Python *module search path*.
This *module search path* is defined by the Python interpreter that executes Robot Framework and can be influenced by the environment variable `PYTHONPATH` or by using the [CLI](../glossary#command-line-interface)-[Argument](../glossary#argument) `--pythonpath` when executing `robot`.

For **path separators**, it is strongly recommended to always use forward slashes (`/`), and even on Windows, not to use backslashes (`\`).
This is because backslashes are used as escape characters in Robot Framework, which can cause issues when used in paths. Forward slashes are supported on all operating systems when used in Robot Framework.

When choosing the location of resource files or libraries, it should be taken into that consideration that absolute paths are typically not portable and therefore should be avoided.
Relative paths are portable as long as they are related to the data file that is importing using them, as long as that relative path is part of the project structure.

However the most stable and recommended way is to use the **Python Path/module search path** to import them.
That path needs to be defined when executing Robot Framework but can lead to more uniform and stable imports, because each suite or resource file can use the same path to import the same resource file or library, independent of the location of the importing suite or resource file.





