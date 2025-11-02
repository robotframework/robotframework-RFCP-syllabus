---
shuffleQuestions: false
shuffleAnswers: false
---

### In the given scenario which of the test cases logs only a single entry

The following variables are given.

__Read__ the keyword explaination carefully to understand the given scenario!

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

Here's a sentence with a footnote.



#### Log Many

**Arguments**

`* messages`

**Documentation**

Logs the given messages as separate entries using the INFO level.

Supports also logging list and dictionary variable items individually.

```robot
*** Variables ***
@{user_names}    Alice    Bob    Charlie
&{name_id_pairs}    Alice=001    Bob=002    Charlie=003
```

> LO-5.1.4.2 Recall that `@{list}` unpacks the values of a list variable when accessed

- [ ] ```robot
  *** Test Cases ***
  Test A
    Log Many    Alice    Bob    Charlie
  ```
  > 'Logs three entries: "Alice", "Bob", and "Charlie".'
- [x] ```robot
  *** Test Cases ***
  Test B
    Log Many    ${user_names}
  ```
    > This logs the string representation of the list.
    >
    > It logs: `['Alice', 'Bob', 'Charlie']`
- [ ] ```robot
  *** Test Cases ***
  Test C
    Log Many    @{user_names}
  ```
    > Logs three entries: `Alice`, `Bob`, and `Charlie`.
- [ ] ```robot
  *** Test Cases ***
  Test D
    Log Many    @{name_id_pairs}
  ```
    > Logs three entries: `Alice`, `Bob`, and `Charlie`
    > this is a rare use case but if dictionaries are unpacked as list, it is a list of its keys.



### Question Title

This is the **actual** Stem of the question

> `Hint`? Yes, This is the *hint*.
>
> 1. A list entry
> 2. another one
>
> ```robot
> *** Settings ***
> Resource    imports.resource
> Suite Setup    Start Database
> Suite Teardown    Stop Database
> ```

1. [ ] Answer without rational
1. [ ] WRONG Option
  > This is the **wrong** rational

1. [x] CORRECT Option
  > This is the **Correct** rational
  > This is the second line
  >
  > and the third



### Put the [days](https://en.wikipedia.org/wiki/Day) in order!

Quizdown also renders formulas:


> Monday is the *first* day of the week.

1. Monday
2. Tuesday
3. Wednesday
4. Friday
5. Saturday


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



- [x] ```robot
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

- [ ] ```robot
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