### 1. In React, you need to import a component multiple times – as many times as you plan to render it from its parent’s return statement.

- [ ] True
- [x] False <br>
      Correct. You should import the component only once, and then you’re allowed to render it as many times as needed.

### 2. You can render more than one child component from the parent component.

- [x] True <br>
      Yes. You can render as many of the same component, or as many different components as you like, from the parent component.
- [ ] False

### 3. W​hat is wrong with this code?

```
function App() {
    return (
        <BlogCard />
        <BlogCard />
        <BlogCard />
    )
}
```

- [ ] T​here is no props object passed to the App component.
- [x] T​here is no root element. <br>
      ​Correct. You must wrap all the returned BlogCard compoents in a wrapping element, such as a `div`.
- [ ] T​here is no JSX attribute used when rendering the BlogCard components.
