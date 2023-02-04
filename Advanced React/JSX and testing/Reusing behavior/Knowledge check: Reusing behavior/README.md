### 1. When dealing with cross-cutting data in your React applications, what are some of the problems of using a custom hook to encapsulate that logic?

- [x] That it turns a stateless component into a stateful one.
- [x] The fact that you would have to alter the implementation of each component that needs that specific data.
- [ ] There are no problems at all with hooks, being the best suited tool for the job.

### 2. Here, you can find the APIs of some higher-order components that have been already implemented. Amongst all the options, which ones present an invalid signature that doesn’t follow the convention?

- [x] `withSubscription(() => getData(), Component)`.
- [ ] `withSubscription(() => getData())(Component) `.
- [ ] `withSubscription(Component, options)`.

### 3. What are some of the best practices to follow when implementing the higher-order component pattern?

- [ ] Always use HOCs and create your enhanced components inside other components.
- [ ] Mutate the original component.
- [x] Maximize composability.
- [x] Passed unrelated props through to the Wrapped Component.

### 4. What are some of the differences between higher-order components and `render` props?

- [x] Render props provide the new data as a function parameter, whereas components wrapped with an HOC get the new data as a new prop.
- [x] They inject the new props in the component to be enhanced in a different way.
- [ ] Higher-order components modify the original implementation of the component, whereas the Render Props pattern doesn’t.

### 5. A component with a `render` prop as renderer can do anything a higher-order component can do.

- [x] True.
- [ ] False.
