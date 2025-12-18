# Exercise 2

## Objectives

* Apply third-party React Components in an Application
* Apply function calls to the backend

## Instructions

1. Create an `Index` component for Expense Items that fetches records from the backend and renders them.

2. In `ExpenseItemsService`, create a method called `deleteExpenseItem(id)` which deletes a record from the backend using `axios` and the `delete` http call. The `axios` call should look like the following:

```js
axios.delete(
    url
)
```

where `url` is a concatenated string of `API_BASE_URL` and the `id` you would pass to function which would result in (if `id = 'abc'`):

```
http://localhost:3000/expense_items/abc
```

3. In the `Index` component, have a delete button per item. Study the component for `Modal` in `react-bootstrap` (docs: [https://react-bootstrap.netlify.app/docs/components/modal/](https://react-bootstrap.netlify.app/docs/components/modal/))

4. Create a component called `ConfirmationModal` that wraps around `Modal` which will appear when the user clicks on delete. Once confirmed, it will then delete the record and refresh the list.

**Hints**:
1. Make use of states and propertiles to solve the problem
2. Make use of `useEffect`