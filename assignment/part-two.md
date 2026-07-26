# Part 2 - Implementation + Verification Loop

## Goal

Use an AI agent to change the app, then use your verification agent from Part 1 to check whether the change is correct.

The question is:

> Can we create a useful loop where one agent implements and another agent verifies?

Try to keep the roles separate:

- **Implementation agent:** makes the change
- **Verification agent:** checks the result against the specification

An implementation agent can be a prompt, script, or coding assistant that edits the app for one small feature at a time.

---

## Part A - Manual improvement loop

1. Pick one small feature.
2. Let an implementation agent make the change.
3. Run the verification agent.
4. Read the findings and improve the app or the prompt yourself.
5. Run verification again.

## Part B - Agent-proposed improvements

1. Pick one small feature.
2. Let the verification agent report where it failed.
3. Ask the agent to propose the next improvement to your agent.
4. Apply the improvement.
5. Verify again and see if the failure moves or disappears.

## Bonus session

Add non-functional improvement dimensions to the loop:

- Did you use too many AI tokens?
- Was the initial brief good enough?
- Was the goal clear enough to start with?
- Did the agent stay focused on the right feature?

Use those notes to improve the next loop.


## Feature specs

- [Promo Code Helper Text](features/promo-code-helper-text.md)
- [Quantity Stepper](features/quantity-stepper.md)
- [Status Badge](features/status-badge.md)
- [New Design](features/design-from-screenshot.md)
