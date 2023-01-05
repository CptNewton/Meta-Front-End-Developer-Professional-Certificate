### 1. When lifting state up, you need to move the `useState` from a child component to a parent component.

- [x] True.
- [ ] False

### 2. If the state variable holds an array or a string value, once you pass that state via props from a parent to a child, you can then read the length property from the received prop in the child component.

- [x] True.
- [ ] False

### 3. What's wrong with this code?

```
import React from "react";
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";

function App() {
  const [fruits] = useState([
      {fruitName: 'apple', id: 1},
      {fruitName: 'apple', id: 2},
      {fruitName: 'plum', id: 3},
  ]);

  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>
  );
}

export default App;
```

- [x] The `useState` call should be `React.useState`.
- [ ] If you don't add the `setFruits` state-updating function when descructuring values from `useState`, the app won't compile.
- [ ] There's nothing wrong with the provided code.
