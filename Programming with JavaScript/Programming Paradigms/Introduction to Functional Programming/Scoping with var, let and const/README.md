### You are performing an update to some code and you need to create a variable named quantity, which calculates the total number of items. You need this variable to be accessible only inside a for loop. You declare the variable using the let keyword and it is within a for loop that performs the calculation of the total number of items. Does this variable declaration address your needs?

- [x] Yes <br>
      Correct. When you use let and const to declare a variable, it is scoped to the block - even within if statements and loops, like the for or while loops. Therefore, the quantity variable you create will only exist within the for loop.
- [ ] No
