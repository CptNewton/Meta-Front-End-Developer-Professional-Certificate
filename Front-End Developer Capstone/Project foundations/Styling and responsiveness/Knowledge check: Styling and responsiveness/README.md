### 1. What is the fr unit in CSS grid?

- [ ] A flexible length unit used only for the images in the grid.
- [x] A flexible length unit that grows or shrinks based on the available space in the grid. <br>
      That’s correct. The fr is a flexible length unit in CSS grid that grows or shrinks based on the available space in the grid. It is used to specify the size of grid tracks (rows or columns) in a grid layout. The fr unit is a proportional unit, meaning that it takes up a fraction of the available space based on the value assigned to it
- [ ] A length unit used only for the texts in the grid.
- [ ] A flexible color unit to be used in the grid.

### 2. Choose the correct explanation for how the CSS code below works.

```
@media (max-width: 700px) {
  .grid-adjustable-columns {
    display: grid;
    grid-auto-flow: row;
  }
}

@media (min-width: 701px) {
  .grid-adjustable-columns {
    width: min(1000px,75rem);
    margin: 0 auto;
    grid-auto-flow: column;
    gap: 1em;
  }
}
```

- [ ] On large resolutions it stacks the grid items in a column and on small resolutions it lines them up in a single row.
- [x] On small resolutions it stacks the grid items in a column and on large resolutions it lines them up in a single row. <br>
      That’s correct. This code will stack grid items in a column for small resolutions and in a single row for large resolutions
- [ ] This code doesn't work.

### 3. Which of the following statements about CSS Grid is true?

- [x] CSS Grid is a layout system that allows developers to create grid-based layouts using rows and columns. <br>
      That’s correct. CSS Grid is a layout system that allows developers to create grid-based layouts using rows and columns. It is a powerful tool for creating flexible and responsive layouts for webpages and applications.
- [ ] CSS Grid is a styling system that allows developers to apply styles to specific elements of a webpage.
- [ ] CSS Grid is a design tool used for creating graphics and visual elements for webpages.
- [ ] CSS Grid is a programming language used for creating dynamic and interactive web applications.

### 4. In CSS grid, horizontal tracks are also known as:

- [ ] Grid items.
- [x] Rows. <br>
      That’s correct. Horizontal tracks are referred to as rows.
- [ ] Columns.

### 5. SS Grid layout automatically adjusts the size of grid tracks.

- [ ] True.
- [x] False. <br>
      That’s correct. While CSS Grid can be a powerful tool for creating responsive layouts, it is not the only way to create responsive web designs. Responsive web design can also be achieved using other techniques such as media queries, flexible layout patterns, and responsive images.
