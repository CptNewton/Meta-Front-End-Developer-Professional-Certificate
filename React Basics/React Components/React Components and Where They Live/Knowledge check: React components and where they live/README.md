### 1. When adding a component name after the function keyword, it should be named using:

- [ ] kebab-cased
- [x] PascalCase (UpperCamelCase) <br>
      Correct! The first letter should be uppercased, with all the following words starting with an uppercased letter, without spaces.
- [ ] lowerCamelCase

### 2. There are two components at the root of the src folder: Example and App. To import the Example component into the App component, you should use the following syntax:

- [x] `import Example from “./Example”;` <br>
      That’s correct! The syntax has the following structure: `import ComponentName from “./ComponentName”;`.
- [ ] `import Example;`
- [ ] `import “Example”;`

### 3. You can omit the `./` from the `import` statement, when both the exported and the imported components are in the same folder.

- [ ] True
- [x] False <br>
      That’s correct! You cannot omit the `./`.

### 4. Pick the correct syntax needed to export a component so that it can be imported.

- [x] `export default Example;` <br>
      That’s right! The correct syntax includes the keywords `export`, followed by `default`, followed by the name of the component.
- [ ] `export example;`
- [ ] `export standard Example;`
- [ ] `export default;`

### 5. You've imported the Example component into the App component. What will the following syntax do: `return (<Example/>)`?

- [x] It will render the Example component on the screen. <br>
      That’s correct. This `return` statement will show the Example component on the screen.
- [ ] It will show a warning.
- [ ] It will throw an error.
- [ ] It will render the App component on the screen.
