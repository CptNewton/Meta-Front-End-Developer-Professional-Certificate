### 1. What of the below scenarios are valid for choosing context instead of local state?

- [x] The visibility state of an alert that overlays into the whole application.
- [x] The locale or language that should be used in the application’s text.
- [ ] The current selection of a group of radio buttons.

### 2. What is the problem of props drilling?

- [ ] Components not knowing the local state of their parents.
- [x] Components having to pass down props all the way to the children that need to consume them.
- [x] Components receiving more props than they should.

### 3. When creating a new piece of application state, what is the bare minimum of React APIs you would need to define it?

- [x] Context and local state.
- [ ] Context and props.
- [ ] Context, props and local state.

### 4. What happens when the `value` prop of the Context Provider changes?

- [ ] The whole component tree under the Context Provider gets re-rendered.
- [x] All the consumer components re-render with the updated value.
- [ ] The Context Provider component gets recreated.

### 5. What happens when you wrap a component with the `React.memo` API, such as `React.memo`(Component).

- [x] Whether the component should re-render could be determined by some custom logic that uses the previous props and the current props.
- [ ] The component never gets updated no matter if there was a change in its local state or the props it receives.
- [x] React provides a performance optimization.
