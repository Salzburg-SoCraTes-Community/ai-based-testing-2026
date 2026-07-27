# Feature: Ticket Status Badge

Show a small badge next to the final price.

## States

- `early bird` shows the label `Early bird` and uses a green badge style.
- `standard` shows the label `Standard` and uses a neutral badge style.
- `sold out` shows the label `Sold out` and uses a red badge style.

## Behavior

- The badge starts in `standard`.
- Selecting a new state updates both the label and the style.
- The badge should stay visible even when the price is zero.
