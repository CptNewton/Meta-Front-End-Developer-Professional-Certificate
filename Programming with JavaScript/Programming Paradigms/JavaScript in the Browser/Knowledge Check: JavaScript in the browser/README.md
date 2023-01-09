### 1. In the following code, the type attribute can be omitted.

```
<script type="text/javascript">
    //Comment
</script>
```

- [x] True.
- [ ] False.

### 2. What does the document variable return in JavaScript?

```
console.log(document);
```

- [ ] The entire body tag of the webpage in the browser's memory, as a JavaScript object.
- [x] The entire webpage in the browser's memory, as a JavaScript object.
- [ ] The HTML code of the downloaded webpage, as a JavaScript string.

### 3. What does the following function return?

```
getElementById('main-heading');
```

- [ ] It doesn't return anything.
- [ ] All elements that have the class attribute with a value `main-heading`.
- [x] The first element that has the id attribute with a value `main-heading`.
- [ ] The last element that has the id attribute with a value `main-heading`.

### 4. After the following code is run, what will happen when the user clicks on a `p` element in the browser?

```
document.querySelector('h1').addEventListener('click',
    function() {
        console.log('clicked');
});
```

- [ ] 'clicked' is printed to the console log.
- [x] Nothing.

### 5. What will be printed when the following code runs?

```
var result = {
  value: 7
};

console.log(JSON.stringify(result));
```

- [ ] `{}`.
- [ ] `{value: 7}`.
- [x] `{"value": 7}`.
