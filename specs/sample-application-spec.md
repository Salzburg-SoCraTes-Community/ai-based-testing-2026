# Sample Application Draft: Promo Code Helper Text

Status: draft

## Goal
Add a tiny helper text feature to the promo code field in the ticket app.

## Core UI
- Promo code input
- Small helper text under the field
- One-line validation message

## Intended behavior
- The helper text should appear when the promo code field is empty or focused.
- It should hint that codes are case insensitive, though the rule may not be spelled out everywhere.
- Invalid codes should show a short message.
- The exact copy can be slightly inconsistent across screens.

## Notes for later refinement
- Exact helper copy is not final.
- No need to define the full promo-code catalog yet.
- The field may or may not auto-trim spaces.
