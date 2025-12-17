# Setup

## Creating a New NodeJS Project

Run this inside the project directory

```bash
npm init
```

## Install Dependencies

Dependencies are libraries coming from [https://www.npmjs.com/](https://www.npmjs.com/)

```bash
npm install [dependency]
```

This will add the dependency in your `package.json` file.

## Make the Project a JS Module

Include a section in your `package.json` file:

```js
"type": "module"
```

## Create a Build Script (`build.js`) to compile your project

Copy over `build.js` from [https://github.com/ralampay/admin-panel-web](https://github.com/ralampay/admin-panel-web) and modify the contents for your project.

## Run the Development Server

```bash
node build.js --watch --dev
```

# Basic Concepts

## Function Declaration and Invocation

```js
// Declaring a function with a name
const sayHello = (message) => {
    console.log(message);
}

sayHello("Hello world!");

// Calling an anonymous function (no name)
(() => {
    alert("Inside the function!");
})();
```

## React Components

Basic Template:

```js
import React from "react";

export default ComponentName = () => {
    return (
        <div>
            Content
        </div>
    )
}
```

## Copying Objects

```js
item = {
    content: "foo"
}

// copy the object
let newItem = {...item};

// copy the object and update an attribute:

let newItem = {...item, content: "bar"}
```