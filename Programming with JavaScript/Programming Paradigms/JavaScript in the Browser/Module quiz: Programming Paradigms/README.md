### 1. Variables declared using let can be reassigned.

- [x] True. <br>
      That's correct! Variables declared using let cannot be redeclared but can be reassigned.
- [ ] False.

### 2. What will print out when the following code runs?

```
function scopeTest() {
    var y = 44;

    console.log(x);
}

var x = 33;
scopeTest();
```

- [ ] null.
- [ ] undefined.
- [x] 33. <br>
      That's correct! `x` is defined in the global scope before the `console.log` is called.
- [ ] 44.

### 3. What will print out when the following code runs?

```
class Cake {
    constructor(lyr) {
        this.layers = lyr;
    }

    getLayers() {
        return this.layers;
    }
}

class WeddingCake extends Cake {
    constructor() {
        super(2);
    }

    getLayers() {
        return super.getLayers() * 5;
    }
}

var result = new WeddingCake();
console.log(result.getLayers());
```

- [ ] 0.
- [ ] 2.
- [ ] 5.
- [x] 10. <br>
      That's correct! The `WeddingCake` constructor stores the amount of layers as 2. However, `WeddingCake` overrides the `getLayers()` function to multiple the result by 5. Therefore, 10 is outcome.

### 4. What will print out when the following code runs?

```
class Animal {
}

class Dog extends Animal {
    constructor() {
        this.noise = "bark";
    }

    makeNoise() {
      return this.noise;
    }
}

class Wolf extends Dog {
    constructor() {
        super();
        this.noise = "growl";
    }
}

var result = new Wolf();
console.log(result.makeNoise());
```

- [ ] bark.
- [x] growl. <br>
      That's correct! The noise property is overridden when the `Wolf` constructor is called.
- [ ] undefined.

### 5. Consider this code snippet: `const [a, b] = [1,2,3,4]`. What is the value of `b`?

- [ ] undefined.
- [ ] 1.
- [x] 2. <br>
     That's correct! The value `b` is assigned the second item value of the array through de-structuring.
- [ ] [1,2,3,4].

### 6. What value will be printed out when the following code runs?

```
function count(...food) {
    console.log(food.length)
}

count("Burgers", "Fries", null);
```

- [ ] 2.
- [x] 3. <br>
     That's correct! The rest operator `...` allows a function to accept an indefinite amount of parameters. The length property of the food variable will return 3 because there were 3 parameters passed to the method call. The value null counts as a parameter. Therefore, 3 will be printed out.
- [ ] "Burgers", "Fries", null.
- [ ] "Burgers", "Fries", undefined.

### 7. Which of the following are JavaScript methods for querying the Document Object Model?

- [x] `getElementsByClassName`. <br>
      That's correct! `getElementsByClassName` will return all elements with the specified class.
- [ ] `getElementsById`.
- [x] `getElementById`. <br>
      That's correct! `getElementById` will return the first matching element with the specified ID.
- [ ] `getElementByClassName`.
- [ ] `queryAllSelectors`.
- [x] `querySelector`. <br>
      That's correct! `querySelector` will return all elements matching the specified CSS selector.

### 8. Which of the following methods convert a JavaScript object to and from a JSON string?

- [x] `JSON.parse`. <br>
      That's correct! `JSON.parse` will convert a JSON string to a JavaScript object.
- [x] `JSON.stringify`. <br>
      That's correct! `JSON.stringify` will convert a JavaScript object to a JSON string.
- [ ] `JSON.fromString`.
- [ ] `JSON.toString`.

### 9. What will be the result of running this code?

```
const letter = "a"
letter = "b"
```

- [x] Uncaught TypeError: Assignment to constant variable. <br>
      That's correct. You cannot reassign a variable assigned using the const keyword.
- [ ] b.
- [ ] a.
- [ ] Uncaught SyntaxError: Invalid or unexpected token.

### 10. What is a constructor?

- [x] A function that is called to create an instance of an object. <br>
      Correct. A constructor function details how an object will be built using the keyword new.
- [ ] An instance of a class.
- [ ] A specific object that has been created using the class name.
- [ ] An object literal.
