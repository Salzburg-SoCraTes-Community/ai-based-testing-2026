# Part 1 - Agentic Testing

## Goal

Create a small verification agent for an existing web app.

The agent should help answer:

> Does the app behave according to the specification?

The goal is not to build the perfect test suite, but to explore how AI can help verify behavior, find edge cases, and report possible bugs.

Assume:

- the implementation may contain bugs
- the specification is the source of truth

## Automation angle

Also think about how your verification result could be used in an automated workflow.

For example:

- run generated tests in CI
- run UI tests after a pull request
- let an agent create a verification report for a changed feature
- use the scenarios as input for an implementation review
- fail a workflow if critical behavior no longer matches the specification
- let the agent propose new regression tests when it finds a mismatch

You do not need to fully automate this today. But try to create something that could become part of a loop like:

```text
Specification
→ Implementation change
→ Verification agent
→ Tests / report / bug findings
→ Fix or accept change
```

## Choose one or more paths

### Option A - Prompt-based verification agent

Create a reusable prompt that makes your AI assistant act as a verifier.

The agent could:
- read the specification
- identify important rules
- create verification scenarios
- find edge cases
- report unclear behavior or possible bugs

### Option B - Unit-test-generating agent

Use AI to generate unit or integration tests from the specification.

Explore:

- Which rules can be tested close to the business logic?
- Can AI find useful boundary cases?
- Do the generated tests catch real bugs?
- Does the AI test the spec, or just mirror the implementation?

### Option C - UI-test-generating agent

Use AI to generate UI tests from the user's perspective.

If you use Playwright, consider visual regression checks for the key screen states.

Explore:

- Which user flows matter most?
- Can AI verify visible results or compare it with the design specifications?

### Option D - Property-based or snapshot testing

Use AI to explore property-based tests or snapshot tests for the feature.

Explore:

- Which properties should always hold?
- Which outputs are stable enough for snapshots?
- Can the agent explain what changed when a snapshot fails?

### Option E - Browser-driven verification agent

Let the agent explore the app through a browser.

Explore:

- Can the agent choose useful scenarios?
- Can it interact with the UI?
- Can it compare actual behavior with the spec?
- Can it produce reproduction steps or regression tests?

