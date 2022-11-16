### 1. What is unit testing?

- [x] Unit testing revolves around the idea of having separate, small pieces of code that are easy to test. <br>
      That's correct! Unit testing is focused on testing small, specific "units" of code.
- [ ] Unit testing tries to imitate how a user might interact with your app.
- [ ] Unit testing is testing how parts of your system interact with other parts of our system.

### 2. When the following test executes, what will the test result be?

```
function subtract(a, b) {
    return a - b;
}

expect(subtract(10, 4)).toBe(6);
```

- [x] Success <br>
      That's correct! The function will return 6 and the expectation will succeed.
- [ ] Fail

### 3. What is End-to-end testing (e2e)?

- [ ] End-to-end testing revolves around the idea of having separate, small pieces of code that are easy to test.
- [x] End-to-end testing tries to imitate how a user might interact with your application. <br>
      That's correct! End-to-end testing mimics how users will interact with your application.
- [ ] End-to-end testing is testing how parts of your system interact with other parts of our system.

### 4. What is Code Coverage?

- [ ] A measure of what percentage of your code has failing tests
- [x] A measure of what percentage of your code is covered by tests. <br>
      That's correct! Code coverage shows what percentage of your code is covered by tests and where more testing may be required.

### 5. Node.js can be used to build web application backends.

- [x] True <br>
      That's correct! Node.js is a popular JavaScript runtime for building backends.
- [ ] False

### 6. When the following test executes, what will the test result be?

```
function multiply(a, b) {
    return a;
}

expect(multiply(2, 2)).toBe(4);
```

- [ ] Success
- [x] Fail <br>
      That's correct! The function will fail because it has a bug which returns only the a variable. Therefore, 2 is returned from the function which does not match the expectation.

### 7. Which command is used to install a Node package?

- [ ] package
- [ ] pkg
- [ ] node
- [x] npm <br>
      That's correct! The Node Package Manager (npm) is used to install packages.

### 8. Which file lists all your application's required node packages?

- [ ] node.json
- [ ] npm.json
- [x] package.json <br>
      That's correct! package.json will store all the dependencies required for application.
- [ ] pkg.json

### 9. A person on your team wants to help with testing. However, they are not a developer and cannot write code. What type of testing is most suited for them?

- [ ] Unit testing
- [ ] Integration testing
- [x] End-to-end testing <br>
      That's correct! End-to-end tests can be performed in a web browser without writing code. This is because the tests mimic how a user will interact with the application.

### 10. What is the recommended way to separate the code that you are testing from its related dependencies?

- [x] Mocking <br>
      That's correct! Mocking allows developers to simulate the behaviour of dependent code during tests.
- [ ] module.exports
- [ ] End-to-end testing
