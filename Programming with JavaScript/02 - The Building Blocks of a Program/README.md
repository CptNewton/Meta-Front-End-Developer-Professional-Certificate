#### 1. What data type is the variable x?

```
  var x = {};
```

- [ ] Function
- [ ] Array
- [x] Object

#### 2. What will be the output of running the following code?

```
try {
console.log('hello)
} catch(e) {
console.log('caught')
}
```

- [x] Uncaught SyntaxError: Invalid or unexpected token.
- [ ] Caught

#### 3. What value is printed when the following code runs?

```
var burger = ["bun", "beef", "lettuce", "tomato sauce", "onion", "bun"];
  console.log(burger[2]);
```

- [ ] bun
- [ ] beef
- [x] lettuce
- [ ] tomato sauce
- [ ] onion

#### 4. In the following code, how many methods does the bicycle object have?

```
  var bicycle = {
      wheels: 2,
      start: function() {

      },
      stop: function() {

      }
  };
```

- [ ] 1
- [x] 2
- [ ] 3

#### 5. When the following code runs, what will print out?

```
try {​
    throw new Error();​
    console.log('Hello');
  } catch(err) {​
    console.log('Goodbye');
  }
```

- [ ] Hello
- [x] Goodbye

#### 6. If you mis-type some code in your JavaScript, what kind of error will that result in?

- [ ] RangeError
- [x] SyntaxErrror
- [ ] TypeError

#### 7. Will the following code execute without an error?

```
function add(a, b) {
    console.log(a + b)​
  }​

  add(3, "4");
```

- [x] Yes
- [ ] No

#### 8. What will be printed when the following code runs?

```
var result;
  console.log(result);
```

- [x] undefined
- [ ] null
- [ ] 0

#### 9. What will be the output of the following code?

```
var str = "Hello";
str.match("jello");
```

- [x] null
- [ ] undefined
- [ ] empty string

#### 10. What will be the output of the following code?

```
try {
Number(5).toPrecision(300)
} catch(e) {
console.log("There was an error")
}
```

- [ ] RangeError
- [ ] 5
- [ ] e
- [x] "There was an error"
