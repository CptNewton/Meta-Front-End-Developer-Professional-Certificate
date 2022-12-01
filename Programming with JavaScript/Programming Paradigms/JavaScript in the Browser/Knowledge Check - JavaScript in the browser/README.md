### 1. In the following code, the type attribute can be omitted.

```
<script type="text/javascript">
    //Comment
</script>
```

- [x] True. <br>
      That's correct! `type="text/javascript"` is the implicit value of the script tag when it is omitted.
- [ ] False.

### 2. What does the document variable return in JavaScript?

```
console.log(document);
```

- [ ] The entire body tag of the webpage in the browser's memory, as a JavaScript object.
- [x] The entire webpage in the browser's memory, as a JavaScript object. <br>
      That's correct! The document object holds the entire structure of the active webpage in the browser's memory.
- [ ] The HTML code of the downloaded webpage, as a JavaScript string.

### 3. What does the following function return?

```
getElementById('main-heading');
```

- [ ] It doesn't return anything.
- [ ] All elements that have the class attribute with a value main-heading.
- [x] The first element that has the id attribute with a value main-heading. <br>
      That's correct! The first element with the attribute id="main-header" is returned.
- [ ] The last element that has the id attribute with a value main-heading.

### 4. After the following code is run, what will happen when the user clicks on a `p` element in the browser?

```
document.querySelector('h1').addEventListener('click',
    function() {
        console.log('clicked');
});
```

- [ ] 'clicked' is printed to the console log.
- [x] Nothing. <br>
      That's correct! The click event listener is registered on `h1` elements.

### 5. What will be printed when the following code runs?

```
var result = {
  value: 7
};

console.log(JSON.stringify(result));
```

- [ ] {}.
- [ ] {value: 7}.
- [x] {"value": 7}. <br>
      That's correct! `JSON.stringify` will turn the object into a string representation. The property name is wrapped in double quotes in the representation.
