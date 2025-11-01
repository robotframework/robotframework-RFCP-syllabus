---
shuffleQuestions: false
shuffleAnswers: false
---

# LO-1.1 Recall the two main Use-Cases of Robot Framework

Which of the following TWO answers are the main use cases of Robot Framework?

- [ ] Acceptance Testing
- [x] Robotic Process Automation
- [ ] Keyword-Driven Testing
- [x] Test Automation
- [ ] Behavior-Driven Testing

# LO-1.1.1 recall the test levels Robot Framework is mostly used for

Which TWO of the following best describe the purpose of Synthetic Monitoring in the context of the Robot Framework?

- [ ] Ensures the complete system's behavior is verified, including functional
  and non-functional aspects, often using simulations.
- [ ] Focuses on testing the interaction between the system and external services,
  ensuring proper communication.
- [ ] Simulates user interactions with live systems at regular intervals to detect
  performance issues early.
- [ ] Monitors system behavior proactively to identify potential issues before
  they affect actual users.
- [ ] Validates that the system meets business needs, often performed by end-users.


# LO-2.1.2 Recall the available sections in a suite file and their purpose. (K1)


Which of the following file contents of a file named `Suite.robot` is recognized as a Robot Framework Suite File?


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
- [ ] ```robot
  *** Settings ***
  Resource    imports.resource

  *** Tasks ***
  Start Database
      Start Database Server
      Connect To Database    localhost    user    password
      Check Connection
  ```
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
- [ ] ```robot
  *** Settings ***
  Resource    imports.resource
  Suite Setup    Start Database
  Suite Teardown    Stop Database
  ```
