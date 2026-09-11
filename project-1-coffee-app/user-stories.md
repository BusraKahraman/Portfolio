## 📝 User Stories & Acceptance Criteria

### Story 1: Favorite Drink Creation
**Priority:** Medium | **Jira Issue Type:** Story

**User Story:**
> **As a** registered customer,  
> **I want to** save my customized drink recipes to my profile,  
> **So that** I can reorder my exact drink in a single tap without re-selecting options.

#### Acceptance Criteria (Gherkin Syntax)

```gherkin
Scenario 1: Saving a Customized Drink (Happy Path)
  Given the user has selected their customization options on the Product Detail screen
  When they tap the "Save to Favorites" button and input a drink name
  Then the app saves the exact configuration to the user's profile
  And displays a success toast message: "Saved to Favorites."

Scenario 2: Out-of-Stock Ingredient (Edge Case)
  Given a saved favorite drink contains an item that is currently marked out-of-stock
  When the user views the "My Favorites" list
  Then the "Quick Order" button for that drink is disabled
  And a warning label displays: "[Ingredient Name] Unavailable."
