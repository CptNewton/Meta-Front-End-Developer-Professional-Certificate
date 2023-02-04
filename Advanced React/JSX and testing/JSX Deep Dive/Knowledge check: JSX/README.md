### 1. Let’s suppose you have the below JSX that gets returned from a component, what would be the equivalent object representation (Element) that React will create internally?

```
<button className='button-primary'>
    <div>
        Submit
    </div>
</button>
```

- [x]

```
{
    type: "button",
    props: {
        className: "button-primary",
        children: {
            type: "div",
            props: {
                children: "Submit",
            }
        },
    },
}
```

- [ ]

```
{
    type: Button,
    props: {
        className: "button-primary",
        children: "div",
    },
}
```

- [ ]

```
{
    type: "button",
    props: {
        className: "button-primary",
        children: {
            type: "div",
            children: "Submit"
        },
    },
}
```

### 2. What is the concept of component specialization?

- [ ] A component that doesn’t know its children ahead of time and acts as a generic box.
- [ ] A component that is designed to fulfill one specific purpose and nothing else.
- [x] A component defined as a special case of another more generic component.

### 3. You would like to clone a React element by using the `React.cloneElement` API, where the particular element has the below structure:

```
const buttonElement = {
  type: SubmitButton,
  props: {
    color: "green",
    children: "Submit!",
  },
};
```

What would be the value of the variable output when using the API with the following parameters?
`const output = React.cloneElement(buttonElement, {disabled: true, color: “blue” });`

- [x]

```
{
  type: SubmitButton,
  props: {
    color: "blue",
    children: "Submit!",
    disabled: true,
  },
};
```

- [ ]

```
{
  type: SubmitButton,
  props: {
    color: "blue",
    children: "Submit!",
  },
};
```

- [ ]

```
{
  type: SubmitButton,
  props: {
    color: "green",
    children: "Submit!",
    disabled: true,
  },
};
```

### 4. Imagine you are using the spread operator in the below component as follows:

```
const props = { title: "tiramisu", cal: 400 };
const element = <Component title="cake" {...props} cal={500} />;
```

What would be the value of `element.props`?

- [x] `{ title: "tiramisu", cal: 500 }`.
- [ ] `{ title: "cake", cal: 500 }`.
- [ ] `{ title: "cake", cal: 400 }`.
- [ ] `{ title: "tiramisu", cal: 400 }`.

### 5. Amongst the below expressions, select all that will not render anything on the screen when being used in JSX.

- [x] `<div>{null}</div>`.
- [x] `<div>{false}</div> `.
- [x] `<div>{(() => true)()}</div>`.
- [x] `<div>{undefined}</div> `.
