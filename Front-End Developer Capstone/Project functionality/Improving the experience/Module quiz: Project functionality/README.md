### 1. What is the purpose of `useState` in the following code?

```
import { useState, useEffect } from "react";
function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      {" "}
      <p>You clicked {count} times</p>{" "}
      <button onClick={() => setCount(count + 1)}>Click me</button>{" "}
    </div>
  );
```

- [ ] `useState` is used to add state and side effects to a functional component.
- [ ] `useState` is used to define the component's render method.
- [x] `useState` is used to set the initial state of the component.
- [x] `useState` is used to add state to a functional component.

### 2. What is the benefit of `useState` over `useReducer`?

- [x] `useState` is more performant.
- [ ] `useReducer` is more performant.

### 3. Why do you use the `useEffect` hook in a React project?

- [x] To trigger an effect when the component mounts or updates.
- [x] To clean up effects before the component unmounts or re-renders.
- [x] To perform side effects after a component renders.
- [x] To trigger an effect when a prop changes.
- [ ] To update the component's state.

### 4. Uncontrolled components are components that do not maintain their own state.

- [ ] True.
- [x] False.

### 5. Which of the following are common uses of JSON in a React project?

- [x] To declare dependencies in 'package.json'.
- [x] To send data to a REST API.
- [x] To receive data from a REST API.

### 6. What will be output if the following HTTP request fails?

```
 fetch('https://example.com/api/data')
 .then(response => console.log("Success"))
```

- [ ] Success.
- [ ] Fail.
- [x] Nothing will be output.

### 7. What is the benefit of unit testing in React?

- [x] It helps catch regressions early in the development process.
- [x] It helps ensure that individual components work as expected.
- [x] It allows for easier debugging and maintenance.
- [ ] It speeds up the development process.
- [ ] It guarantees that the application will have no bugs.

### 8. What is this code in JavaScript:

`/Make Your Reservation/`

- [ ] An array literal.
- [x] RegExp object literal.
- [ ] A string literal.

### 9. “Operable” is one of four core principles of accessibility upon which WCAG (Web Content Accessibility Guidelines) has been built.

- [x] True.
- [ ] False.

### 10. Can you use arrow functions to update the state of a component?

- [ ] Only in certain type of state.
- [x] Yes.
- [ ] No.
- [ ] Only in some cases.
