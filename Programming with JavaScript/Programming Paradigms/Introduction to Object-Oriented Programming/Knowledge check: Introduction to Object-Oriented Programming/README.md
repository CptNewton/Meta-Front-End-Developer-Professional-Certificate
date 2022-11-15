### 1. What will print out when the following code runs?

```
class Cake {
    constructor(lyr) {
        this.layers = lyr + 1;
    }
}

var result = new Cake(1);
console.log(result.layers);
```

- [ ] 1
- [x] 2 <br>
      That's correct! The Cake object stores its layers property as the value of the constructor parameter lyr plus one. Therefore, the value of the layers property is 2.
- [ ] 3
- [ ] 4

### 2. When a class extends another class, this is called \_\_\_.

- [x] Inheritance <br>
      That's correct! A class inherits from another class using the extends keyword. This is called Inheritance.
- [ ] Extension

### 3. What will print out when the following code runs?

```
class Animal {
    constructor(lg) {
        this.legs = lg;
    }
}

class Dog extends Animal {
    constructor() {
        super(4);
    }
}

var result = new Dog();
console.log(result.legs);
```

- [ ] 0
- [ ] undefined
- [ ] null
- [x] 4 <br>
      That's correct! The Dog constructor passes the value of 4 to the super constructor of Animal. Therefore, the value of the legs property is 4 .

### 4. What will print out when the following code runs?

```
class Animal {
}

class Cat extends Animal {
    constructor() {
        super();
        this.noise = "meow";
    }
}

var result = new Animal();
console.log(result.noise);
```

- [x] undefined <br>
      That's correct! The noise property does not exist within the scope of the Animal class. Therefore, undefined will print.
- [ ] null
- [ ] ""
- [ ] meow

### 5. What will print out when the following code runs?

```
class Person {
    sayHello() {
        console.log("Hello");
    }
}

class Friend extends Person {
    sayHello() {
        console.log("Hey");
    }
}

var result = new Friend();
result.sayHello();
```

- [ ] Hello
- [x] Hey <br>
      That's correct! The Friend class overrides the sayHello method. Therefore, Hey is printed out instead of Hello when sayHello is called.
