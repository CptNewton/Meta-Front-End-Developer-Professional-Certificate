### 1. When using the `filter` operator from arrays in JavaScript, what type should you return from the predicate function to determine if the element should be filtered out or not?

- [ ] You should return `null` if the element should be filtered out and any other value to keep the element.
- [x] You should return `true` to keep the element and `false` to filter out the element. <br>
      That's correct, the predicate function should always return a boolean, being `true` to keep the item or `false` to remove it.
- [ ] You should return `undefined` to filter out the element and `true` to keep it in the list.

### 2. When chaining the three array operators required to complete the exercise, `map`, `filter` and `sort`; in which order should they be applied to `props.data`? Remember that `props.data` contains an array of dessert objects.

- [ ] `sort`, `filter`, `map`.
- [ ] `map`, `filter`, `sort`.
- [x] `filter`, `sort`, `map`. <br>
      That's correct, `filter` should go before `sort` since it returns a new array, making sure a copy of `props.data` is created before doing the sorting, which is a mutative operation. `map` should be always the last, to transform the item into the final React Element that should be rendered.

### 3. When using the `map` function to transform an array item into a `<li>` element, what of the following code snippets should be inside the `<li>` tag to render the list item correctly in the following format: Ice Cream - 200 cal.

- [ ] `<li>${dessert.name} - ${dessert.calories} cal</li>`.
- [ ] `<li>dessert.name - dessert.calories + “cal”</li>`.
- [x] `<li>{dessert.name} - {dessert.calories} cal</li>`. <br>
      That's correct, you should always use curly braces `{}` to access dynamic data in JSX, without any extra dollar symbol `$`.
