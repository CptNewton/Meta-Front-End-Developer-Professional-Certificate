### 1. When using the filter operator from arrays in JavaScript, what type should you return from the predicate function to determine if the element should be filtered out or not?

- [ ] You should return null if the element should be filtered out and any other value to keep the element.
- [x] You should return true to keep the element and false to filter out the element.
- [ ] You should return undefined to filter out the element and `true` to keep it in the list.

### 2. When chaining the three array operators required to complete the exercise, map, filter and `sort`; in which order should they be applied to `props.data`? Remember that `props.data` contains an array of dessert objects.

- [ ] `Sort`, `filter`, `map`.
- [ ] `Map`, `filter`, `sort`.
- [x] `Filter`, `sort`, `map`.

### 3. When using the map function to transform an array item into a `<li>` element, what of the following code snippets should be inside the `<li>` tag to render the list item correctly in the following format: `Ice Cream - 200 cal`.

- [ ] `<li>${dessert.name} - ${dessert.calories} cal</li>`.
- [ ] `<li>dessert.name - dessert.calories + “cal”</li>`.
- [x] `<li>{dessert.name} - {dessert.calories} cal</li>`.
