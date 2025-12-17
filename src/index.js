// Declaring a function with a name
const sayHello = (message) => {
    console.log(message);
}

sayHello("Hello world!");

// Calling an anonymous function (no name)
(() => {
    alert("Inside the function!");
})();