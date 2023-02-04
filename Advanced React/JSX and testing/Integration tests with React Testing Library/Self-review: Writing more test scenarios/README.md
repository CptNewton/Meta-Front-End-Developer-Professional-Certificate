### 1. What’s the correct call to fire an `onChange` event on an input with `react-testing-library`’s `fireEvent` API?

- [ ] `fireEvent.onChange(input, { target: { value: 'myValue' } });`.
- [x] `fireEvent.change(input, { target: { value: 'myValue' } });`.
- [ ] `fireEvent.change(input, { value: 'myValue' });`.

### 2. How would you fire a click event on a submit button with react-testing-library `fireEvent` API?

- [ ] `fireEvent.onClick(button, { target: { value: 'submit' } });`.
- [x] `fireEvent.click(button);`.
- [ ] `fireEvent.onClick(button);`.

### 3. When locating an element by using one of the screen querying methods from react-testing-library, such as `screen.getByRole` or `screen.getByLabelText`, what would be the return value of the call if the element is not found?

- [ ] An error will be thrown.
- [ ] `undefined`.
- [x] `null`.
