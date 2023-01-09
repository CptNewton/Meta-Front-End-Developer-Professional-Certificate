### 1. What will print out when the following code runs?

```
var globalVar = 77;

function scopeTest() {
    var localVar = 88;
}

console.log(localVar);
```

- [ ] 77.
- [ ] 88.
- [ ] Null.
- [x] Undefined.

### 2. Variables declared using const can be reassigned.

- [ ] True.
- [x] False.

### 3. When a function calls itself, this is known as \_\_\_.

- [x] Recursion.
- [ ] Looping.
- [ ] Higher-order Function.

### 4. What will print out when the following code runs?

```
function meal(animal) {
    animal.food = animal.food + 10;
}

var dog = {
    food: 10
};

meal(dog);
meal(dog);

console.log(dog.food);
```

- [ ] 10.
- [ ] 20.
- [x] 30.
- [ ] 40.

### 5. What value will print out when the following code runs?

```
function two() {
    return 2;
}

function one() {
    return 1;
}

function calculate(initialValue, incrementValue) {
    return initialValue() + incrementValue() + incrementValue();
}

console.log(calculate(two, one));
```

- [ ] 1.
- [ ] 2.
- [ ] 3.
- [x] 4.
