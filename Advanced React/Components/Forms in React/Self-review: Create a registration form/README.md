### 1. When setting a new value for the password state, that is represented by an object with two properties, `value` and `isTouched`, what’s the correct call to the `setPassword` state setter inside the `onChange` event handler? Select all that apply.

- [x] `setPassword({ ...password, value: e.target.value });`. <br>
      That’s correct, `isTouched` is preserved, since it’s been merged at the beginning in the state setter, before setting the new value.
- [ ] `setPassword({ isTouched: false, value: e.target.value });`.
- [ ] `setPassword({ value: e.target.value });`.

### 2. What’s the correct event prop you should use to determine when an input has been interacted with at least once? Select all that apply.

- [ ] `onFocus`.
- [x] `onBlur`. <br>
      That’s correct, `onBlur` fires when the user leaves the focus from a particular input and it’s the best place to set the interaction state to true and provide actionable feedback in the UI if needed.
- [ ] `onChange`.

### 3. How do you prevent the default behavior of the `form` HTML tag in React when a submission event occurs?

- [ ] By returning `false` from the `onSubmit` function prop that the `form` tag provides.
- [ ] By calling `preventDefault` on the event object inside any `onChange` handler from an `input` tag.
- [x] By calling `preventDefault` on the event object inside the `onSubmit` function prop `from` the form tag. <br>
      That’s correct, that’s the proper way to prevent the default behavior and the right place to perform the call.
