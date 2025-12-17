# Exercise 1

## Objectives

* Apply fundamental concepts for ReactJS in implementing a feature for the system
* Use state, properties and components to build functionality

## Instructions

1. Create a component in `Form.js` that has inputs for the following:

- `content` (string): Use `input` tag
- `amount` (number): Use `input` tag with `type=number`
- `category` (string): Use `select` tag with categories: `Food`, `Transportation`, `Others`

2. From `App.js`, have a state variable (with setter) called `expenseItem` with default value `EXPENSE_ITEM` with the following attributes:

```js
EXPENSE_ITEM = {
    content: "",
    amount: 0,
    category: ""
}
```

This should be imported from `models.js`

3. From `App.js`, pass the state and setter to `Form` component so the state can be updated from within `Form`.

4. Create another component called `Preview` and have `App` pass the state `expenseItem` into preview.

5. Show both components (`Form` and `Preview`) within `App`.

**Expected Behavior:** When user changes something in the form, it should automatically render in `Preview`.