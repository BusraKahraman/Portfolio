## Functional Requirements (FR)

### FR-1: Feature Initialization & Configuration
* **FR-1.1:** The user shall be able to enable or disable the Auto-Savings feature via a simple toggle switch in the mobile app.
* **FR-1.2:** The user shall select a Round-Up Rule:
  * Round to nearest 10 TRY (Default)
  * Round to nearest 50 TRY
  * Multiplier Rule (2x, 3x spare change)
* **FR-1.3 (Optional Goal):** The user may assign the round-up destination to an explicit "Goal Account" (e.g., "Japan Trip") with a target balance and deadline, or default to a generic "Emergency Reserve".
* **FR-1.4:** If a Goal Account is configured, the system shall send a push notification when 50%, 80%, and 100% of the target balance is reached.

### FR-2: Transaction Processing & Execution
* **FR-2.1:** Upon authorization of any eligible POS or online debit card transaction, the core system shall calculate the differential balance (`Ceiling_Amount - Actual_Amount`).
* **FR-2.2:** The calculated spare change shall be executed as an automated internal transfer from the Primary Checking Account to the designated Savings Account.
* **FR-2.3:** Micro-transfers shall be batched or executed instantly based on settlement configuration without delaying the merchant transaction.

### FR-3: Exception & Edge Case Handling (Insufficient Funds)
* **FR-3.1 (Non-Blocking Purchase):** The primary debit transaction shall ALWAYS succeed if the checking account balance covers the purchase price, regardless of spare change availability.
* **FR-3.2 (Insufficient Spare Change Balance):** If `Available_Balance < Purchase_Price + Round_Up_Difference`:
  * The primary purchase executes normally.
  * The round-up transfer is skipped for that transaction.
  * An optional notification is queued: *"Your purchase went through, but we couldn't save 7.50 TRY due to low balance."*
