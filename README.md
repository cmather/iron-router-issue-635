## Reproduction

1. Clone repository
2. Start meteor application
3. Open javascript console
4. Observe "not ready" message printed twice and "ready" message once.

Expected:
The "not ready" message should only be printed once.

Actual:
The "not ready" message is printed twice because we have two subscription
handles.

## Proposal
Only change this.ready() when the overall state has changed.
