(() => {
  // src/index.js
  var sayHello = (message) => {
    console.log(message);
  };
  sayHello("Hello world!");
  (() => {
    alert("Inside the function!");
  })();
})();
//# sourceMappingURL=index.js.map
