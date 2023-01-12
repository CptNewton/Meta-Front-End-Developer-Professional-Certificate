### 1. Imagine you have to log into the console a state variable, whenever the variable gets updated. What's the best place to perform such operation in a React component?

- [ ] Before the return statement of the component.
- [x] The `useEffect` hook.

### 2. The `useEffect` hook accepts...

- [x] A callback function and an array.
- [ ] A callback function and an object.
- [ ] Two callback functions.

### 3. What is a pure React component?

- [x] A component that doesn't have any side effects.
- [ ] A component that has at least one side effect.

### 4. What is the name of the second argument of the `useEffect()` call?

- [x] The dependency array.
- [ ] The callback function.
- [ ] The destructured object.
- [ ] The dependencies object.

### 5. This code is incomplete:

```
React.useEffect(()=> {
 console.log('The value of the toggle variable is',toggle)
}, [])
```

### You need to update the dependecies array so that the `useEffect` hook is invoked whenever the toggle variable updates.

- [x] The dependencies array should receive the toggle variable as its single member.
- [ ] The dependencies array should be removed.
- [ ] The dependencies array should be updated to: `[{toggle}]`.
- [ ] The dependencies array should be replaced with: `{toggle}`.
