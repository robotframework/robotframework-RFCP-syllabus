
# 1.4 Specification Styles

::::lo[Learning Objectives]

:::K1[LO-1.4]

Recall the three specification styles of Robot Framework

:::

::::

Specification styles define how tests or tasks are structured, focusing on how actions and verifications are described.
While **Keyword-Driven Testing (KDT)** and **Behavior-Driven Development (BDD)** are commonly associated with testing, the principles behind these styles are adaptable to other forms of automation, such as RPA.

Both styles can be mixed, even within the same test or task, but it is strongly recommended to have separate styles for separate purposes and not mix them within the same body.
One practical solution would be to define acceptance test cases that cover users' expectations in a declarative *Behavior-Driven Style*, while using keywords that are implemented in an imperative *Keyword-Driven style*.
Further system level :term[test cases](Test Case), that are not covering acceptance criteria could be written in a *Keyword-Driven style*.

The approach of both styles is different in that way,
that the *Behavior-Driven Style* is a **declarative** specification,
where the script describe/declare what the system should do or how it should behave,
while the *Keyword-Driven Style* is an **imperative** specification,
where the script specifies what the automation should do to control the system.


Beside these two different specification approaches how to write/formulate
your automation script and their step sequences,
there is also a third specification method, **Data-Driven Specification** that can be combined
with the other two styles, to define the data that is used in the automation.



## 1.4.1 Keyword-Driven Specification

::::lo[Learning Objectives]

:::K2[LO-1.4.1]

Understand the basic concepts of Keyword-Driven Specification

:::

::::

In **Keyword-Driven Specification**, automation steps are expressed through a sequence of mostly **imperative commands**.
Keywords define the specific actions that must be executed in a particular order, similar to procedural programming.
The emphasis is on the **actions performed by the automation/tester**.

For example, in Robot Framework, a Keyword-Driven test might look like:
```robotframework
*** Test Cases ***
Verify Foundation Link
    Open Page       http://robotframework.org
    Click Button    FOUNDATION
    Verify Title    Foundation | Robot Framework
    Verify Url      https://robotframework.org/foundation
```

Verifications or assertions can be imperative, though they are often phrased as assertions, such as `Title Should Be    Foundation | Robot Framework`, adding flexibility to how outcomes are checked.

The advantage of this style lies in its **clarity** and **structure**.
It provides a straightforward representation of the task flow, making it easy to understand what actions will be executed.

Separation of the executed step/keyword and its arguments/data with spaces improves the readability of tests or tasks.
Flow and data can be parsed separately by the consumer.


## 1.4.2 Behavior-Driven Specification

::::lo[Learning Objectives]

:::K2[LO-1.4.2]

Understand the basic concepts of Behavior-Driven Specification

:::

::::

**Behavior-Driven Specification** originates from **Behavior-Driven Development (BDD)** and its **Gherkin-Style**, where steps are written to describe the system's behavior from the user's perspective.
This style often incorporates **embedded arguments** into the steps and uses natural language constructs like **Given, When, Then, And & But**.

In Robot Framework, behavior-driven tests may look like:

```robotframework
*** Test Cases ***
Opening Foundation Page
    Given "robotframework.org" is open
    When the user clicks the "FOUNDATION" button
    Then the page title should be "Foundation | Robot Framework"
    And the url should be "https://robotframework.org/foundation"
```

The prefixes `Given`, `When`, `Then`, `And` and `But` are basically ignored by Robot Framework if a keyword is found matching the rest of the name.
A key difference between Robot Framework's behavior-driven style and BDD frameworks like **Cucumber** or most others is the ability in Robot Framework to use **multiple keyword layers**.
In other BDD frameworks the code that implements a sentence like `Given "robotframework.org" is open.` is referred to as a step definition.
Step definitions are written in a programming language (typically Java, JavaScript, Ruby, or Python) and map natural language steps from a Gherkin feature file to code.
Therefore there are no multiple layers of keywords that can be logged into execution protocols.
Robot Framework allows you to create **user keywords** that can further call other user or library keywords, providing greater flexibility, modularity and much more detailed logging.



## 1.4.3 Comparing Keyword-Driven and Behavior-Driven Specification

::::lo[Learning Objectives]

:::K1[LO-1.4.3]

Recall the differences between Keyword-Driven and Behavior-Driven Specification

:::

::::

The core difference between **Keyword-Driven** and **Behavior-Driven** styles lies in their focus:

- **Keyword-Driven Style** emphasizes **what actions** need to be performed in a specific order, making it action-centric.
It is an **imperative** style, comparable to procedural programming.
It is structured, clear, and well-suited for scenarios where the steps are more technical
or detailed and involve a larger number of keyword calls within a test or task.
Additionally, this style is better suited for complex tasks or handling complex data,
as it enables a clear separation between keyword names and their argument values.

- **Behavior-Driven Style** emphasizes **how the system behaves** from the user's point of view,
using more natural language and focusing on expected outcomes.
It is a **declarative** style that can be compared to writing user stories or acceptance criteria.
It is optimized for **business-oriented** descriptions of functionality
and is often more suitable for communicating with non-technical stakeholders.
This style can get less understandable when the amount of steps increases
or the amount of defined data in the steps increases.

Both styles can be applied within Robot Framework, offering flexibility depending on the context of the automation task.



## 1.4.4 Data-Driven Specification

::::lo[Learning Objectives]

:::K1[LO-1.4.4]

Recall the purpose of Data-Driven Specification

:::

::::

**Data-Driven Specification** originates from **Data-Driven Testing**
and is a method where the test data and expected results are
separated from the test script that controls the flow.

While in **Robotic Process Automation (RPA)**, the data
used in an automation workflow is typically acquired dynamically from an external source,
in testing, the data is specifically chosen to cover different scenarios or cases.
Therefore, this method of defining data combinations
statically in the suite files is normally not applicable to RPA.

The purpose of **Data-Driven Testing** is to automate the same sequence of actions
or scenario with different sets of input and/or expected output data.

In this style, a single user keyword, which contains the whole test logic or sequence of actions,
is executed with multiple data variations,
making it highly effective for repetitive tests,
where the logic stays the same but the data changes,
without duplicating the test logic for each case.

Robot Framework offers a convenient feature for this approach through **Test Templates**.

**Benefits of Data-Driven Specification**:
- **Efficiency**: Reduces the need to write redundant test cases by reusing the same workflow with different data inputs.
- **Clarity**: Keeps the test logic separate from the data, making it easier to manage large data sets.
- **Scalability**: Suitable for scenarios where the same functionality needs to be tested under various conditions, such as verifying form inputs or performing calculations with different values.

See [3.4 Using Data-Driven Specification](chapter-03/04_datadriven.md) for more details and examples on Data-Driven Specification.


