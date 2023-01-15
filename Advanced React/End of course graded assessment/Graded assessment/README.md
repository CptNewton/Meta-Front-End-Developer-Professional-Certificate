### 1. You are building a form using both Formik and Yup libraries, where one of the inputs is an email. Before the form gets submitted to the server, you would like to set up some client validation with Yup to make sure the field has an email that is valid, otherwise a message “Invalid email address” would be shown on the screen. The submit button will be disabled if no email is provided at all. If the email field is empty, the message “Required” will be shown on the screen. Given those requirements, how would you write the validation rule using the Yup library?

- [ ] `Yup.email("Invalid email address").required("Required")`.
- [ ] `Yup.email().string("Invalid email address").required("Required")`.
- [x] `Yup.string().email("Invalid email address").required("Required")`.

### 2. You have the following React application where you have a `ToDo` component that has two text labels and an uncontrolled text input and the entry point App component that renders a list of two `ToDo`s and a button to reverse the order of the `ToDo`s. To avoid a React keys warning, a key is provided to each `ToDo` component, with the index as its value. Suppose that the next sequence of events happen in the application:

1. You write “Wash the car” in the first `ToDo` input.
2. You write “Buy bumper stickers” in the second `ToDo` input.
3. You click the button to reverse the order.

### What would happen on the screen after that?

```
const ToDo = props => (
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input />
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>
);


function App() {
  const [todos, setTodos] = useState([
    {
      id: 'todo1',
      createdAt: '18:00',
    },
    {
      id: 'todo2',
      createdAt: '20:30',
    }
  ]);

  const reverseOrder = () => {
    // Reverse is a mutative operation, so we need to create a new array first.
    setTodos([...todos].reverse());
  };

  return (
    <div>
      <button onClick={reverseOrder}>Reverse</button>
      {todos.map((todo, index) => (
        <ToDo key={index} id={todo.id} createdAt={todo.createdAt} />
      ))}
    </div>
  );
}
```

- [ ] `todo2 Buy bumper stickers 20:30`, `todo1 Wash the car 18:00`.
- [x] `todo2 Wash the car 20:30`, `todo1 Buy bumper stickers 18:00`.
- [ ] `todo1 Buy bumper stickers 18:00`, `todo2 Wash the car 20:30`.

### 3. There are at least two errors in the code below.

```
import{ createContext, useContext, useState} from"react";

const ThemeContext = createContext(undefined);

export const ThemeProvider= () => {
  const[theme, setTheme] = useState("light");

  return(
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme(!theme),
      }}
    >
    </ThemeContext.Provider>
  );
};
```

- [x] True.
- [ ] False.

### 4. A tree of elements cannot mix and match both components and DOM elements as the `type` property.

- [ ] True.
- [x] False.

### 5. When the user clicks the Submit button, the “WithClick” string will never be output to the console.

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

  return(props) => {
    return<Component {...props} onClick={handleClick} />;
  };
};

const MyButton = withClick(Button);

export default function App() {
  return <MyButton onClick={() => console.log("AppClick")}>Submit</MyButton>;
}
```

- [ ] True.
- [x] False.

### 6. Using jest and react-testing-library, to assert that a function has been called with some specific arguments, you would need to use the `toHaveBeenCalledWith` matcher.

- [x] True.
- [ ] False.

### 7. Among the following code examples, what are valid implementations of the render props pattern?

- [x]

```
<MealProvider render={data => (
  <p>Ingredients: {data.ingredients}</p>
)} />
```

- [x] `<Row renderIcon={() => <Icon name=”add” />} />`.
- [ ] `<LoginUser renderUser={<p>Mark</p>} />`.

### 8. What do you need to add to this code to make the `useEffect` run only once?

```
React.useEffect(()=> {
 console.log('The value of the person variable is', person)
})
```

- [ ] Move the `console.log` outside of the `useEffect` function.
- [x] Add an empty dependency array.
- [ ] Move the `console.log` outside of the arrow function.

### 9. In the following component, the `setRestaurantName` variable’s value will not be reset between re-renders of the App component.

```
import {useState} from "react";

export default function App() {
  const [restaurantName, setRestaurantName] = useState("Lemon");

  function updateRestaurantName() {
    setRestaurantName("Little Lemon");
  };

  return (
    <div>
      <h1>{restaurantName}</h1>
      <button onClick={updateRestaurantName}>
        Update restaurant name
      </button>
    </div>
  );
};
```

- [x] True.
- [ ] False.

### 10. Is this valid code?

```
if (data !== '') {
  useEffect(() => {
    setData('test data');
  });
}
```

- [ ] Yes.
- [x] No.
