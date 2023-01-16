### 1. What is the purpose of the `useState` hook in React?

- [ ] To bind a value to the props of a component.
- [ ] To manage the component's context.
- [x] To manage the component's state.
- [ ] To bind an event handler to an element.

### 2. What is missing from the code below?

```
import { useState } from "react";

export default function App() {
  const [restaurantName, setRestaurantName] = useState();
  return <h1>{restaurantName}</h1>;
}
```

- [ ] The `setRestaurantName` function.
- [ ] The `useState` hook import statement.
- [x] An initial value for the state variable `restaurantName`.
- [ ] `useReducer` hook was not used.

### 3. Controlled components are more flexible than uncontrolled components.

- [ ] True.
- [x] False.

### 4. What is unit testing in React?

- [ ] A type of testing that involves manually testing a component's UI.
- [ ] A type of testing that ensures that a component's props and state are correctly being passed down to its children.
- [ ] A type of testing that ensures that a complete application is working as intended.
- [x] A type of testing that ensures that individual units of code are working as intended.

### 5. What is the main difference between the `useState` and `useReducer` hooks in React?

- [ ] `useState` is used for managing component state, while `useReducer` is used for managing the component lifecycle.
- [ ] `useState` is used for managing component state, while `useReducer` is used for managing the component's UI.
- [ ] `useState` is used for managing component state, while `useReducer` is used for managing global state.
- [x] `useState` is used for simple state updates, while `useReducer` is used for complex state updates.
