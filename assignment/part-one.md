# Part 1 - Agentic Testing

## Goal

Create a small verification agent for an existing web app.

The agent should help answer:

> Does the app behave according to the specification?

The goal is not to build the perfect test suite, but to explore how AI can help verify behavior, find edge cases, and report possible bugs.

Assume:

- the implementation may contain bugs
- the [specification](../specs/) is the source of truth

### Start here - Prompt-based verification agent

Start by creating a prompt that makes your AI assistant act as a verifier.

Use the specification as the main input. The specifications for different features may be in different formats, so the agent should be ready to read whatever it finds there. Ask the agent to:

- read the spec carefully
- identify the rules that matter most
- list the key behaviors that should be checked
- suggest edge cases and failure modes
- call out anything unclear, inconsistent, or underspecified
- report possible bugs in plain language

Keep it simple at first. A good first version can be a short prompt that tells the model:

1. What app or feature it should verify.
2. Where to find the specification, for example in `specs/`.
3. What kind of output you want back.

For example, the prompt can ask the agent to:

- read the specification
- extract the most important rules
- turn those rules into concrete checks
- point out edge cases and questionable behavior
- summarize the result in a short verification report

The first version does not need to be fancy. The main goal is to get a verifier that can reason from the spec and give you something you can actually use.

When the prompt works well, turn it into something reusable if your IDE or agent setup supports that, such as a skill, custom instruction, or saved prompt.

## Choose one or more paths

Once you have built the prompt-based verification agent, choose one or more of these paths:

### Option A - Unit-test-generating agent

Use AI to generate unit or integration tests from the specification.

Explore:

- Which rules can be tested close to the business logic?
- Can AI find useful boundary cases?
- Do the generated tests catch real bugs?
- Does the AI test the spec, or just mirror the implementation?

### Option B - UI-test-generating agent

Use AI to generate UI tests from the user's perspective.

If you use Playwright, consider visual regression checks for the key screen states.

Explore:

- Which user flows matter most?
- Can AI verify visible results or compare it with the design specifications?

### Option C - Property-based or snapshot testing

Use AI to explore property-based tests or snapshot tests for the feature.

Explore:

- Which properties should always hold?
- Which outputs are stable enough for snapshots?
- Can the agent explain what changed when a snapshot fails?

### Option D - Browser-driven verification agent

Let the agent explore the app through a browser.

Explore:

- Can the agent choose useful scenarios?
- Can it interact with the UI?
- Can it compare actual behavior with the spec?
- Can it produce reproduction steps or regression tests?
