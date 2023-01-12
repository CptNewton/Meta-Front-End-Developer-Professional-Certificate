### 1. Is this a valid `useState` hook invocation and destructuring?

`const [car, setCar] = useState({ color: 'blue', mileage: 0})`

- [x] Yes.
- [ ] No.
- [ ] It would be valid, if it was spread over multiple lines.

### 2. You can clone a JS object using the `.` operator (the dot operator).

- [ ] True.
- [x] False.

### 3. Consider the following code:

`const [person, setPerson] = useState({ name: 'John', age: 21})`

### Imagine you're using a `setPerson()` state-updating function to update the value of the state variable named person. You only want to update the value of age, from 21 to 22. Choose the correct code snippet to do that.

- [x] `setPerson(prev => ({ ...prev, age: 22 }));`.
- [ ] `setPerson(() => ({ age: 22 }));`.
- [ ] `setPerson(person.age = 22);`.
