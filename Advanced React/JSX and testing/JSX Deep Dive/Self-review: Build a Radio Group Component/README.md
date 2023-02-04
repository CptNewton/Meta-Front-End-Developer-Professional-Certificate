### 1. In the `RadioGroup` component, when cloning each `child` element (`RadioOption`), what’s the condition that determines the value of the new `checked` prop that gets merged into the existing props of each `RadioOption` component? Recall that the `RadioGroup` component has three `props` - `onChange`, `selected` and `children` - and that each `RadioOption` component receives two `props` - `value` and `children`.

- [ ]

```
      React.cloneElement(child, {
        onChange,
        checked: child.props.selected,
      });
```

- [ ]

```
      React.cloneElement(child, {
        onChange,
        checked: child.checked === true,
      });
```

- [x]

```
      React.cloneElement(child, {
        onChange,
        checked: child.props.value === selected,
      });
```

### 2. Inside the `RadioOption` component, what should be the value of the `onChange` prop from the `radio` input element? Recall that the `RadioOption` component receives four `props` - `value`, `checked`, `onChange` and `children`.

- [x] `<input type="radio" onChange={e => onChange(e.target.value)} />`.
- [ ] `<input type="radio" onChange={() => onChange(props.value)} />`.
- [ ] `<input type="radio" onChange={props.onChange} /> `.

### 3. What are the arguments that the `React.Children.map` function receives?

- [x] The first argument is the `children` prop, and the second argument is a transformation function that returns a new React element.
- [ ] The first argument is the `children` prop, and the second argument is a predicate function that returns a boolean.
- [ ] The first argument is the `children` prop, and there is no second argument.
