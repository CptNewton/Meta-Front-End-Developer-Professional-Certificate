### 1. In React, data flows in one way: from a parent component to a child component.

- [x] True.
- [ ] False.

### 2. Why is one-way data flow important in React?

- [x] It ensures that the data is flowing from top to bottom in the component hierarchy.
- [ ] It ensures that the data is flowing from bottom to top in the component hierarchy.

### 3. State data is the data inside a component that a component can mutate.

- [x] True.
- [ ] False.

### 4. What is prop drilling?

- [x] Prop drilling is a situation where you are passing data from a parent to a child component, then to a grandchild component, and so on, until it reaches a more distant component further down the component tree, where this data is required.
- [ ] Prop drilling is a situation where you are passing data from a child, to a parent component, then to a grandparent component, and so on, until it reaches a more distant component further up the component tree, where this data is required.

### 5. The distinction between stateful and stateless components is that the latter doesn't have its own state.

- [x] True.
- [ ] False.

### 6. Choose the correct statement.

- [ ] Remember that you should always change the values of props in children components; you should never work with them as they are. In other words, props are mutable.
- [x] Remember that you should never change the values of props in children components; you should only work with them as they are. In other words, props are immutable.

### 7. Is this code valid?

```
function App() {
   const handler = () => console.log('fourth example')
   return (
      <div>
        <button onClick = {handler} >
          Click Me!
        </button>
      </div>
   )
}
export default App
```

- [x] Yes.
- [ ] No.

### 8. Is this code valid?

```
<button onClick={ () => console.log('clicked') }>
  Click me
</button>
```

- [x] Yes.
- [ ] No.

### 9. The `useState` hook...

- [x] ...lets you hook into React state and lifecycle features from a component.
- [ ] ...is not part of React; you must import it from a third-party package.
- [ ] ...has a convention that if the state variable is named, for example, counter, the function to update this counter variable should be named counterFunction.
- [ ] ...should never be called at the top level of a React component.

### 10. The Context API allows you to:

- [x] Avoid having to pass state down through multiple levels of components.
- [ ] Avoid having to use the return statement in a child component.
- [ ] Avoid having to keep your components modular.
