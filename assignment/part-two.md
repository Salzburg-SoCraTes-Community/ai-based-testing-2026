# Part 2 - Regression Loop

## Goal

Extend the verification idea into a small regression workflow.

The agent should help answer:

> What changed, what broke, and what should be tested next?

Assume:

- the app will keep changing
- some defects will be subtle
- the output should be useful for a future run

## Automation angle

Think about a loop like:

```text
Change detected
→ Agent reviews relevant spec
→ Agent checks app behavior
→ Agent writes summary or test ideas
→ Team fixes or accepts the change
```

## Choose one or more path(s)

### Option A - Change-aware prompt

Create a prompt that focuses only on the affected feature.

Explore:

- How does the agent narrow scope?
- Does it ignore unrelated behavior?
- Can it produce a short report?

### Option B - Test selection agent

Use AI to pick the most useful tests to rerun.

Explore:

- Which tests should always run?
- Which tests are feature-specific?
- Can the agent explain why a test matters?

### Option C - Report generator

Use AI to summarize mismatches and likely regressions.

Explore:

- Can the output be read quickly?
- Does it include enough detail to reproduce a failure?
- Can it suggest the next test to add?
