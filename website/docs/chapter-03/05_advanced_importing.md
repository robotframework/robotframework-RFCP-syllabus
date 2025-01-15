
# 3.5 Advanced Importing of Keywords and Naming Conflicts

> [!IMPORTANT]
> LO-3.5 Recall that naming conflicts can arise from the import of multiple resource files. (K1)

As stated before, it is possible to organize imports and available keywords in Robot Framework by using Resource Files.
By default, all keywords or variables created or imported in a resource file are available to those suites and files that are importing that higher-level resource file.

This can lead to complex import hierarchies or the importing of libraries multiple times, which should be avoided.

Due to this mechanism, the number of keywords available to a suite can be quite large, and naming conflicts, especially with keywords from third-party keyword libraries, can occur. These conflicts need to be resolved.


Some keyword libraries have the option to be configured to change their behavior, which may also change the available keywords they offer.



## 3.5.1 Importing Hierarchies

> [!IMPORTANT]
> LO-3.5.1 Understand how transitive imports of resource files and libraries work. (K2)

Let's assume the following libraries and resource files shall be used:
- **Library**    `A`
- **Library**    `B`
- **Library**    `Operating System`
- **Resource**    `tech_keywordsA.resource`
- **Resource**    `tech_keywordsB.resource`
- **Resource**    `variables.resource`
- **Resource**    `functional_keywords.resource`

The respective files could look like this:

**tech_keywordsA.resource:**
```robotframework
*** Settings ***
Library    A
Library    Operating System
```

**tech_keywordsB.resource:**
```robotframework
*** Settings ***
Library    B
Resource    variables.resource
```

**functional_keywords.resource:**
```robotframework
*** Settings ***
Resource    tech_keywordsA.resource
Resource    tech_keywordsB.resource
```

**suite.robot:**
```robotframework
*** Settings ***
Resource    functional_keywords.resource
```

In this case, the suite `suite.robot` has access to all keywords from all keyword libraries, as well as all variables and user keywords from all resource files.
With this transitive importing it is possible to organize user keywords and imports of libraries in a hierarchical way.

It shall be avoided to create circular imports, where `A.resource` imports `B.resource` and `B.resource` imports `A.resource`.

It should be avoided to import the same library in different places multiple times.
If the exact same library with the same configuration (see the next section) is imported again, it will be ignored because Robot Framework already has it in its catalog.
However, if the library is imported with different configurations, it may be imported multiple times, but depending on the library’s internal behavior, the new configuration may have no effect on the existing keywords, or other side effects may occur.


Therefore, the recommendation is to import libraries only in one resource file with one configuration and use that import file in all places where the library is needed to make its keywords available.



## 3.5.2 Library Configuration

> [!IMPORTANT]
> LO-3.5.2 Be able to configure a library import using arguments. (K3)

Some libraries offer or need additional configuration to change their behavior or make them work.
This is typically global behavior like internal timeouts, connection settings to systems, or plugins that should be used.

If this is possible, the library documentation will have an `Importing` section directly before the list of keywords.
It is strongly recommended to have all these possible arguments to the library itself defined with default values;
however, that is not always possible.

Library importing arguments are used in the same way as keyword calls with arguments.
If possible, it is recommended to set the arguments as named arguments to make usage more readable and future-proof.
These arguments follow the Library path or name, separated by multiple spaces.

Example with the [Telnet library](https://robotframework.org/robotframework/latest/libraries/Telnet.html#Importing):
```robotframework
*** Settings ***
Library    Telnet    newline=LF    encoding=ISO-8859-1   # set newline and encoding using named arguments
```

Another example that cannot be used without configuration is the Remote library.
Remote libraries are libraries that are connected remotely via a network connection.
So the actual library is running as a server, and the library `Remote`
is connecting as a client and connects the keywords of the server to Robot Framework.
Therefore, it needs the server's address and port to connect to.
Because there may be more than one Remote Library, we need to define the used library name as well.
```robotframework
*** Settings ***
Library    Remote    uri=http://127.0.0.1:8270       AS    EmbeddedAPI
Library    Remote    uri=http://remote.devices.local:8270       AS    DeviceAPI
```
In this example, two remote libraries are imported.
The upper-case `AS` statement is used to define the name of the library that shall be used in the suite.

They are now available as `EmbeddedAPI` and `DeviceAPI` in the suite.



## 3.5.3 Naming Conflicts

> [!IMPORTANT]
> LO-3.5.3 Explain how naming conflicts can happen and how to mitigate them. (K2)

Naming conflicts can occur when two or more keywords have the same name.
If a proper IDE is used, that can be detected, and users can be warned after they have created a duplicate user keyword name.

Project teams may not have this influence over imported third-party libraries that have the same keyword names.
Due to the fact that keywords from library and resource files are imported in the scope of the importing suite, it may be unavoidable to have naming conflicts.

One example of these kinds of conflicts is the two libraries
[`Telnet`](https://robotframework.org/robotframework/latest/libraries/Telnet.html)
and [`SSHLibrary`](https://marketsquare.github.io/SSHLibrary/SSHLibrary.html),
which at the current time both have multiple keywords with the same name.
This is because they both work with network connections and have similar functionality.
Keywords like `Open Connection`, `Login`, `Read`, `Close Connection`, and many more are common.

These conflicts cannot be resolved by Robot Framework if they are coming from the same kind of source, like two libraries.
The error message will be like this:
```plaintext
Multiple keywords with name 'Open Connection' found. Give the full name of the keyword you want to use:
    SSHLibrary.Open Connection
    Telnet.Open Connection
```

As proposed by Robot Framework, to resolve naming conflicts,
the easiest way to mitigate this is to use the full names of the keywords,
including the library name, when calling them.

Example:
```robotframework
*** Test Cases ***
Using Telnet and SSHLibrary
    Telnet.Open Connection
    Telnet.Login    ${username}    ${password}
    ${telnet_init} =    Telnet.Read Until Prompt
    Telnet.Close Connection

    SSHLibrary.Open Connection    ${host}    ${port}
    SSHLibrary.Login    ${username}    ${password}
    ${ssh_init} =    SSHLibrary.Read Until Prompt
    SSHLibrary.Close Connection
```

When using full names for libraries that were imported with the `AS` statement,
the name of the library is used as a prefix to the keyword name.
```robotframework
*** Test Cases ***
Using Remote Libraries
    EmbeddedAPI.Close Contact   15
    DeviceAPI.Verify Contact    15    1
```

