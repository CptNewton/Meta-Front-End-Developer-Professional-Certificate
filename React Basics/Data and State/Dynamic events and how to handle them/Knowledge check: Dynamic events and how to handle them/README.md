### 1. What code should be added to the element button to make this code snippet valid?

```
function App() {

  function handleClick() {
    console.log("clicked")
  }

  return (
    <div className="App">
      <button >Click me</button>
    </div>
  );
}
```

- [ ] `onClick={handleClick()}`.
- [ ] `click=handleClick`.
- [x] `onClick={handleClick}`.

### 2. Imagine that you have a variable named `userLoggedIn` and it’s set to the boolean of `true`. How would you complete the below `clickHandler` function declaration to toggle the value of the `userLoggedIn` boolean?

```
function clickHandler() {
}
```

- [ ] `userLoggedIn = true`.
- [ ] `userLoggedIn = false`.
- [x] `userLoggedIn = !userLoggedIn`.

### 3. Is a click handler on its own enough to change the values of variables in your React apps?

- [ ] Yes.
- [x] No.

### 4. What are the ways to write an event-handling function in React.

- [x] Using a separate function expression.
- [x] With an inline anonymous ES5 function.
- [x] Using a separate function declaration.
- [x] With an inline, anonymous ES6 function (an arrow function).

### 5. Choose the appropriate code on line 3 of the following component – to handle a click event.

```
function App() {

  function () {
    console.log("clicked")
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```

- [ ] `function HandleClick()`.
- [ ] `function handleClick`.
- [x] `function handleClick()`.
