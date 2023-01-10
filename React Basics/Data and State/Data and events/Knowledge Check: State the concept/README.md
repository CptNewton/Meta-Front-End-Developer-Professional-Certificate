### 1. In React, can state be considered data?

- [x] Yes.
- [ ] No.

### 2. In React, can `props` be considered data?

- [x] Yes.
- [ ] No.

### 3. Choose the correct statement.

- [x] The `props` object represents data that is external to a component, and state represents data that is internal to a component.
- [ ] The `props` object represents data that is internal to a component, and state represents data that is external to a component.

### 4. What does the `useState` hook do?

- [x] It allows a component to have its own state.
- [ ] It allows a component to receive state from its parent.

### 5. Based on the code below, is the `userName` variable external or internal data of the `DisplayUser` component?

```
function DisplayUser(props) {
  return (
    <h1>{props.userName}</h1>
  );
}
```

- [x] The `userName` value is data that is external to the `DisplayUser` component.
- [ ] The `userName` value is data that is internal to the `DisplayUser` component.
