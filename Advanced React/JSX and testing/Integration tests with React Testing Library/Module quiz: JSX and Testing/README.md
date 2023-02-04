### 1. What are some of the features of component containment?

- [x] The fact that some components don’t know their `children` ahead of time.
- [x] A component that uses the `children` prop to pass `children` elements directly as their content.
- [ ] A special case of other components.
- [x] A component that acts as a generic box.

### 2. What are the props that all components have by default?

- [ ] `render`.
- [x] `children`.
- [ ] `type`.

### 3. What is a React Element?

- [ ] A React Component that represents a simple DOM node, like a button.
- [x] An intermediary representation that describes a component instance.
- [x] A JavaScript object that represents the final HTML output.

### 4. Assuming you have the below component, what are all the features implemented from component composition with children?

```
function ConfirmationDialog() {
  return (
    <Dialog color="blue">
      <h1 className="Dialog-title">
        Thanks!
      </h1>
      <p className="Dialog-message">
        We’ll process your order in less than 24 hours.
      </p>
    </Dialog>
  );
}
```

- [x] Component specialization and component containment.
- [ ] Component containment.
- [ ] Component specialization.

### 5. What are some of the use cases that the `React.cloneElement` API allows you to achieve?

- [x] Modify children's properties.
- [x] Add to children properties.
- [x] Extend the functionality of children components.

### 6. Assuming you have the following `Row` component that uses `React.Children.map` to perform some dynamic transformation in each `child` element, in order to add some custom styles, what’s wrong about its implementation?

```
const Row = ({ children, spacing }) => {
  const childStyle = {
    marginLeft: `${spacing}px`,
  };

  return(
    <div className="Row">
      {React.Children.map(children, (child, index) => {
        child.props.style = {
          ...child.props.style,
          ...(index > 0 ? childStyle : {}),
        };

        return child;
      })}
    </div>
  );
};
```

- [ ] You can’t use the spread operator in the style prop.
- [ ] Each child is missing a key, causing potential problems if the list order changes.
- [x] Each child is being mutated.

### 7. Assuming you have the following set of components, what would be logged into the console when clicking the Submit button that gets rendered on the screen?

```
const Button = ({ children, ...rest }) => (
  <button onClick={() => console.log("ButtonClick")} {...rest}>
    {children}
  </button>
);

const withClick = (Component) => {
  const handleClick = () => {
    console.log("WithClick");
  };

  return (props) => {
    return <Component onClick={handleClick} {...props} />;
  };
};

const MyButton = withClick(Button);

export default function App() {
  return <MyButton onClick={() => console.log("AppClick")}>Submit</MyButton>;
}
```

- [ ] `WithClick`.
- [x] `AppClick`.
- [ ] `ButtonClick`.

### 8. Among the below options, what are valid solutions to encapsulate cross-cutting concerns?

- [x] Custom hooks.
- [x] Higher order components.
- [x] Render props pattern.
- [ ] Components that consume context.

### 9. What does the screen utility object from react-testing-library represent when performing queries against it?

- [x] The whole page or root document.
- [ ] The whole virtual DOM.
- [ ] Your laptop screen.

### 10. When writing tests with Jest and react-testing-library, what matcher would you have to use to assert that a button is disabled?

- [x] `toHaveAttribute`.
- [ ] `toBeInTheDocument`.
- [ ] `toHaveBeenCalled `.
