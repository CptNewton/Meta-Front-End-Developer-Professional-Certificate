### 1. Why is automated testing important?

- [x] It saves time to development teams.
- [x] It reduces human error.
- [x] It offers a faster feedback cycle, bringing faster validation and helping the development team to detect problems or bugs early.

### 2. What are some of the best practices when writing your automated tests?

- [x] They should be maintainable in the long run.
- [ ] Your tests need to be focused on the implementation details of your components.
- [x] They should resemble the way your software is used.

### 3. Imagine you have a component that renders both an `input` tag and a `label` tag with the exact text `Comments:`. Inside your test, you have the below piece of code:

`const element = screen.getByLabelText(/Comments:/);`

What would be the type of element returned by `getByLabelText`?

- [ ] The document object.
- [x] The `input` element.
- [ ] The `label` element.

### 4. In a particular test that’s been written for a form component, you encounter the below two lines of code. What kind of data would the `handleSubmit` variable represent?

```
const handleSubmit = jest.fn();
render(<FeedbackForm onSubmit={handleSubmit} />);
```

- [ ] A specific function jest provides to handle form submissions.
- [x] A mock function to track how is called by external code and thus explore the arguments passed in.
- [ ] A copy of the real function that’s used in the parent component that renders the `FeedbackForm`.

### 5. What are some of the benefits of Continuous Integration (CI)?

- [x] Find bugs earlier and fix them faster.
- [x] Improved developer productivity.
- [ ] Faster manual integrations.
- [x] Deliver working software more often.
