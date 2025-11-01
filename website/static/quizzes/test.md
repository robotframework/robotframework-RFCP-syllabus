---
shuffleQuestions: false
shuffleAnswers: false
---

### Question Title

This is the **actual** Stem of the question

> 1. scheiße
> 2. auch
>
> `Hint`: This is the *hint*

1. [ ] Answer without rational
1. [ ] WRONG Option
  > This is the **wrong** rational

1. [x] CORRECT Option
  > This is the **Correct** rational
  > This is the second line
  >
  > and the third



### LO-2.1.2 Recall the available sections in a suite file and their purpose. (K1)


Which of the following file contents of a file named `Suite.robot` is recognized as a Robot Framework Suite File?


> 1. **Correct** because `*** Tests ***` is the new stuff.<br/>
> 2. wrong because thats not correct.<br/>
> 3. wrong becuase that is also wrong.<br/>
>
> ```robot
> *** Settings ***
> Resource    imports.resource
>
> *** Variables ***
> ${DEFAULT_DB}    localhost
>
> *** Keywords ***
> Connect To Database
>     [Arguments]    ${db_name}    ${db_user}    ${db_password}
>     Set Credentials    ${db_user}    ${db_password}
>     Set DB Name    ${db_name}
>     Connect
>
> *** Tests ***
> Test DataBase Connection
>     Connect To Database    ${DEFAULT_DB}    user    password
>     Check Connection
> ```



- [ ] ```robot
  *** Settings ***
  Resource    imports.resource

  *** Variables ***
  ${DEFAULT_DB}    localhost

  *** Keywords ***
  Connect To Database
      [Arguments]    ${db_name}    ${db_user}    ${db_password}
      Set Credentials    ${db_user}    ${db_password}
      Set DB Name    ${db_name}
      Connect

  *** Tests ***
  Test DataBase Connection
      Connect To Database    ${DEFAULT_DB}    user    password
      Check Connection
  ```
    > `*** Tests ***` is not the correct section header. `*** Test Cases ***` would be valid.

- [X] ```robot
  *** Settings ***
  Resource    imports.resource

  *** Tasks ***
  Start Database
      Start Database Server
      Connect To Database    localhost    user    password
      Check Connection
  ```
    > This suite has one valid task!

- [ ] ```robot
  *** Settings ***
  Resource    imports.resource

  *** Keywords ***
  Connect To Database
      [Arguments]    ${db_name}    ${db_user}    ${db_password}
      Set Credentials    ${db_user}    ${db_password}
      Set DB Name    ${db_name}
      Connect

  *** Variables ***
  ${DEFAULT_DB}    localhost
  ```
    > No excutable task or test case found. That is a resource file.

- [ ] ```robot
  *** Settings ***
  Resource    imports.resource
  Suite Setup    Start Database
  Suite Teardown    Stop Database
  ```
    > ```robot
    > *** Settings ***
    > Alone is not valid
    > ```
    >
    > Nope!

### What's the capital of Germany?

> It's the _largest_ city in Germany...

- [x] Berlin
  > This is the *correct* answer.
- [ ] Frankfurt
  > **False** : That is the banking capital
- [ ] Paris
  > Paris is the capital of France.
- [ ] Cologne
  > Wanted to be that but Bonn became the capital

### Select your superpower!

There exist many superpowers in the world but one of them is better than everything else. Do you find it?

1. [ ] Enhanced Strength
1. [ ] Levitation
1. [x] Shapeshifting
    > Correct. This the best superpower!