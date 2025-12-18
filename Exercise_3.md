# Exercise 3

## Objectives

* Apply routing and 

## Instructions

### Implement the Create Function for ExpenseListItem

1. Using `axios.post`, create a method that will post a new item to the backend.

- `url` is `http://localhost:3000/expense_items`
- For post, you would need to pass in the object to post as a second argument:

```js
axios.post(
    url,
    expenseItem
)
```

2. Upon successful creation, go to the Index page to see the newly loaded item.

### Implement the Edit Funciton for ExpenseListItem

1. Using `axios.put`, create a method that will update a new item to the backend.

- `url` is `http://localhost:3000/expense_items/id` where `id` is the `id` of the item you want to update
- Like post, you will have to pass the entire object as a second argument

```js
axios.put(
    url,
    expenseItem
)
```

2. Go to Show after a successful update.

**Hints**
- Use the same `FormContainer` for both new and edit where the `Route` configuration will have a diffent path
- The path for `edit` should have the `id` that you would want to edit
- `FormContainer` should be able to get the `id` and load the `expenseItem` if `id` exists.