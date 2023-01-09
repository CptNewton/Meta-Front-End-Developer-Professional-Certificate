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

- [ ] 1.
- [x] 2.
- [ ] 3.
- [ ] 4.

### 2. When a class extends another class, this is called \_\_\_.

- [x] Inheritance.
- [ ] Extension.

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

- [ ] 0.
- [ ] Undefined.
- [ ] Null.
- [x] 4.

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

- [x] Undefined.
- [ ] Null.
- [ ] "".
- [ ] Meow.

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

- [ ] Hello.
- [x] Hey.
