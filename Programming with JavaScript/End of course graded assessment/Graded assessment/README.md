### 1. What will be the output of the following JavaScript?

```
const a = 10;
const b = 5;
if(a == 7 || b == 5) {
    console.log("Green");
} else {
    console.log("Blue");
}
```

- [x] Green <br>
      That's correct. The logical OR operator results in the condition being true. Therefore, the code inside the if statement will execute and Green will be output.
- [ ] Blue

### 2. What will be the output of the following JavaScript?

```
var message = "Hello";
message += " World!";
message = "Goodbye!";
console.log(message);
```

- [ ] Hello
- [ ] World!
- [ ] Hello World!
- [x] Goodbye! <br>
      That's correct! The message variable is re-assigned as `Goodbye`! and output in the console.

### 3. What is the data type of the x variable in the following code?

```
var x = 0 != 1;
```

- [ ] Number
- [ ] Number
- [ ] String
- [x] Boolean <br>
      That's correct! 0 != 1 will result in a true value which is a boolean.

### 4. What will the following JavaScript code output?

```
var x = 20;

if(x >= 10) {
    console.log("Apple");
} else if(x <= 5) {
    console.log("Pear");
} else {
    console.log("Orange");
}
```

- [x] Apple <br>
      That's correct! The x variable has the value of 20, therefore the first condition succeeds. The code inside the if statement will run and output Apple.
- [ ] Pear
- [ ] Orange

### 5. What will the following JavaScript code output?

```
var result = 0;

for(var i = 0; i < 5; i++) {
    result += 2;
}

console.log(result);
```

- [ ] 0
- [ ] 2
- [ ] 5
- [x] 10 <br>
      That's correct! The loop will run 5 times and each time add 2 to the result variable. Therefore, 10 will be output.

### 6. When the following code runs, what will print out?

```
try {
    throw new Error();
    console.log('Square');
} catch(err) {
    console.log('Circle');
}
```

- [ ] Square
- [x] Circle <br>
      That's correct! When the error is thrown, the catch block will execute and output Circle.

### 7. What's missing from this JavaScript function declaration?

```
function(a,b) {
    return a + b
}
```

- [x] The function name. <br>
      Well done. When coding function declarations, you need to give them a name.
- [ ] The assignment operator.
- [ ] The dot notation.

### 8. What is the output of the code below?

```
var car = { mileage: 200 }
var carMileage = 100
console.log(car.mileage)
```

- [ ] 200 <br>
      Well done. You can access the mileage property on the car object using the dot notation.
- [ ] 100
- [ ] 300

### 9. What is the output of the code below?

```
var veggies = []
veggies.push('parsley')
veggies.push('carrot')
console.log(veggies[2])
```

- [x] undefined <br>
      Well done. Trying to output the third item in the veggies array, using the syntax `veggies[2]` will console log undefined because the veggies array has only 2 items, "parsley" and "carrot".
- [ ] 2
- [ ] 1
- [ ] 3

### 10. Which of the following HTML attributes is used to handle a click event?

- [x] onclick <br>
      Well done. The onlick HTML attribute is used to handle click events.
- [ ] addEventListener('click')
- [ ] 'click'

### 11. How do you create a new h2 element using JavaScript?

- [x] With document.createElement('h2') <br>
      Well done. You create new elements on the document object using the createElement function.
- [ ] With document.buildElement('h2')
- [ ] With document.addElement('h2')

### 12. Is the code below missing a `.js` after the `./addFive`?

```
const addFive = require('./addFive')
```

- [ ] True
- [x] False <br>
      Well done. There's no need to add .js when importing files using the require syntax.
