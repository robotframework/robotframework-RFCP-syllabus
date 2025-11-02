
# 4.5 SKIP Test|Task Status

::::lo[Learning Objectives]

:::K1[LO-4.5-1]

Recall the use case and purpose of skipping tests|tasks in Robot Framework

:::

:::K1[LO-4.5-2]

Recall the different ways to skip tests|tasks in Robot Framework

:::

::::

In addition to `PASS` and `FAIL`, Robot Framework introduces a `SKIP` status to indicate that a test|task was explicitly skipped **during** execution. The `SKIP` status is useful when certain tests|tasks should not be executed, for example, due to unfulfilled preconditions, unfinished test logic, or unsupported environments. Skipped tests|tasks appear in logs and reports, clearly marked as skipped.

**Reasons to Use SKIP**

- **Temporal Exclusion of Tests|Tasks**: To prevent failing tests|tasks for known issues to run until the issue is resolved.
- **Conditional Execution**: Skip tests|tasks dynamically based on runtime conditions, e.g. if Suite Setup detected an issue.
- **Unsupported Scenarios**: Mark tests|tasks as skipped in environments where they cannot run, but shall be in logs.


## 4.5.1 Skipping By Tags Selection (CLI)

::::lo[Learning Objectives]

:::K1[LO-4.5.1]

Recall the differences between skip and exclude

:::

::::

Tests|tasks can be skipped with `--skip` by tags when executing Robot Framework, similar to `--exclude`.
The difference between `--skip` and `--exclude` is that `--skip` will mark the tests|tasks as skipped in the report and log, while `--exclude` will not execute them at all.
Therefore skip is better for documenting that a specific test|task was not executed for a specific reason.

**Example**: If there is a defect in the System under Test (SUT) and a test|task has been written to reproduce the defect and tests its resolution, but the defect is not yet resolved, the test|task can be tagged with the defect-number and skipped until the defect should be resolved.

**Example**: Assuming there are different test environments and some tests can only be executed on specific environments, the tests can be tagged with the environment name and skipped on all other environments.

- **Command Line Option**: Use the `--skip` option to skip tests|tasks based on tags or tag patterns:
  ```shell
  robot --skip BUG-42 --skip mobile path/to/tests
  ```

- **Reserved Tag `robot:skip`**: Add the `robot:skip` tag to tests|tasks to mark them as skipped:
  This ensures the test|task appears in reports as skipped but is not executed.

## 4.5.2 Skipping Dynamically During Execution

Tests|tasks can be skipped dynamically within their execution with the `Skip` keyword based on runtime conditions.

The `Skip` keyword does stop the execution of a test|task and mark it as skipped with a custom message.
If a Test|Task Teardown exists, it will be executed.


## 4.5.3 Automatically Skipping Failed Tests

Tests|tasks can be automatically marked as skipped if they fail:

- **Command Line Option**: Use `--skiponfailure` with tags or tag patterns:
  ```shell
  robot --skiponfailure flaky path/to/tests
  ```

- **Reserved Tag `robot:skip-on-failure`**: Tag tests|tasks to skip automatically on failure.

