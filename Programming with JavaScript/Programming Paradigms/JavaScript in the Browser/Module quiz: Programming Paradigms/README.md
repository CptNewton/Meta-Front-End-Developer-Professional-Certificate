### 1. Variables declared using `let` can be reassigned.

- [x] True.
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

- [ ] Null.
- [ ] Undefined.
- [x] 33.
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
- [x] 10.

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

- [ ] Bark.
- [x] Growl.
- [ ] Undefined.

### 5. Consider this code snippet: `const [a, b] = [1,2,3,4]`. What is the value of `b`?

- [ ] Undefined.
- [ ] 1.
- [x] 2.
- [ ] `[1,2,3,4]`.

### 6. What value will be printed out when the following code runs?

```
function count(...food) {
    console.log(food.length)
}

count("Burgers", "Fries", null);
```

- [ ] 2.
- [x] 3.
- [ ] "Burgers", "Fries", null.
- [ ] "Burgers", "Fries", undefined.

### 7. Which of the following are JavaScript methods for querying the Document Object Model?

- [x] `getElementsByClassName`.
- [ ] `getElementsById`.
- [x] `getElementById`.
- [ ] `getElementByClassName`.
- [ ] `queryAllSelectors`.
- [x] `querySelector`.

### 8. Which of the following methods convert a JavaScript object to and from a JSON string?

- [x] `JSON.parse`.
- [x] `JSON.stringify`.
- [ ] `JSON.fromString`.
- [ ] `JSON.toString`.

### 9. What will be the result of running this code?

```
const letter = "a"
letter = "b"
```

- [x] Uncaught TypeError: Assignment to constant variable.
- [ ] B.
- [ ] A.
- [ ] Uncaught SyntaxError: Invalid or unexpected token.

### 10. What is a constructor?

- [x] A function that is called to create an instance of an object.
- [ ] An instance of a class.
- [ ] A specific object that has been created using the class name.
- [ ] An object literal.
