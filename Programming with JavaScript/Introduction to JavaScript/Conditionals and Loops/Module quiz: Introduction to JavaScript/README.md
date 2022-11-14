#### 1. You can run JavaScript in a web browser's devtools console.

- [x] True <br>
      That's correct! The devtools console is useful for running JavaScript code.
- [ ] False

#### 2. Which of the following are valid comments in JavaScript? Select all that apply.

- [ ] `\ Comment 1`
- [x] `// Comment 2` <br>
      That's correct! // is used for inline comments.
- [ ] `## Comment 3`
- [x] `/* Comment 4 */` <br>
      That's correct! They define the beginning and end of multi-line comments.

#### 3. Which of the following are valid data types in JavaScript? Select all that apply.

- [x] string <br>
      That's correct! The string data type represents a sequence of characters in JavaScript.
- [x] numbers <br>
      That's correct! Numbers represent both integer and decimal point numeric values.
- [x] booleans <br>
      That's correct! The boolean data type has one of two values; true or false.
- [x] null <br>
      That's correct! The null data type represents the absense of a value.

#### 4. Which of the following is the logical AND operator in JavaScript?

- [ ] `&`
- [x] `&&` <br>
      That's correct! && is the logical AND operator used for condition checks.
- [ ] `||`
- [ ] `|\`

#### 5. Which of the following is the assignment operator in JavaScript?

- [x] `=` <br>
      That's correct! The = symbol is used to assign to variables in JavaScript.
- [ ] `==`
- [ ] `===`

#### 6. How many times will the following code print the word 'Hello'?

```
for(var i = 0; i <= 5; i++) {
    console.log("Hello");
  }
```

- [ ] 4
- [ ] 5
- [x] 6 <br>
      That's correct! 'i' starts with the value '0'. The condition checks if 'i' is less than or equal to '5'. Each loop increments 'i' by '1'. This means that the loop will run 6 times.

#### 7. What will print out when the following code runs?

```
var i = 3;
  var j = 5;

  if(i == 3 && j < 5) {
    console.log("Hello");
  } else {
    console.log("Goodbye");
  }
```

- [ ] Hello
- [x] Goodbye <br>
      That's correct! The condition checks if 'i' is equal to '3' AND if 'j' is less than '5'. Since the result of this condition is false, the code inside the else statement will run.

#### 8. What will print out when the following code runs?

```
var i = 7;
  var j = 2;

  if(i < 7 || j < 5) {
    console.log("Hello");
  } else {
    console.log("Goodbye");
  }
```

- [x] Hello <br>
      That's correct! The condition checks if 'i' is less than '7' OR if 'j' is less than '5'. Since the result of this condition is true, the code inside the if statement will run.
- [ ] Goodbye

#### 9. T​he result of `!false` is:

- [x] true <br>
      C​orrect! When you add the NOT operator before a boolean value, the returned value is the opposite of the boolean value. Thus, !false is evaluated to true, and !true is evaluated to false.
- [ ] undefined

#### 10. What does the operator symbol `||` represent in JavaScript?

- [ ] The logical AND operator
- [x] The logical OR operator <br>
      That's correct. In JavaScript, the || is the logical OR operator.
- [ ] The logical NOT operator
