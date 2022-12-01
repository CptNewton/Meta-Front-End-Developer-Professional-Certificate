### 1. What data type is the variable item ?

```
var item = [];
```

- [ ] Boolean.
- [ ] Function.
- [x] Array. <br>
      That's correct! `[]` is the array literal.

### 2. What is the value of result for the following code?

```
var result = "Hello".indexOf('l');
```

- [ ] 1.
- [x] 2. <br>
     That's correct! Indices start at 0. Therefore the first index of `l` is 2.
- [ ] 3.
- [ ] 4.

### 3. What is the length of the clothes array after this code runs?

```
var clothes = [];
clothes.push('gray t-shirt');
clothes.push('green scarf');
clothes.pop();
clothes.push('slippers');
clothes.pop();
clothes.push('boots');
clothes.push('old jeans');
```

- [ ] 1.
- [ ] 2.
- [x] 3. <br>
     That's correct! 5 items are added (`push`) to the array and 2 items are removed (`pop`). The result is 3 items in the array.
- [ ] 4.

### 4. What value is printed out by the following code?

```
var food = [];
food.push('Chocolate');
food.push('Ice cream');
food.push('Donut');

console.log(food[1])
```

- [ ] Chocolate.
- [x] Ice cream. <br>
      That's correct! Array indices start at 0, so the value at index 1 is Ice cream.
- [ ] Donut.

### 5. How many properties does the dog object have after the following code is run?

```
var dog = {
    color: "brown",
    height: 30,
    length: 60
};

dog["type"] = "corgi";
```

- [ ] 1.
- [ ] 2.
- [ ] 3.
- [x] 4. <br>
     That's correct! Additional properties can be assigned after an object is created. In this code, the object is created with three properties (`color`, `height`, `length`) and then a fourth property is assigned.

### 6. In the following function, the variables a and b are known as \_\_\_.

```
function add(a, b) {
    return a + b;
}
```

- [x] Parameters. <br>
      That's correct! Parameters are the inputs to a function.
- [ ] Return Values.

### 7. Which of the following are functions of the `Math` object?

- [x] `random()`. <br>
      That's correct! `Math.random()` returns a random value between 0.0 and 1.0.
- [x] `round()`. <br>
      That's correct! `Math.round()` rounds a decimal value up to the closest integer.
- [x] `sqrt()`. <br>
      That's correct! `Math.sqrt()` returns the mathematical square root of a number.
