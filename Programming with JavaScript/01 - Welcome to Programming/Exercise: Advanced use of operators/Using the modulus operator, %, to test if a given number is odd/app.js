// You need to code a small program that takes a number and determines if it's an even number (like 2, 4, 6, 8, 10). To achieve this task, you need to declare six variables, as follows: The first variable, named num1, should be assigned a number value of 2. The second variable, named num2, should be assigned a number value of 5. The third variable, named test1, should be assigned the calculation of num1 % 2. The fourth variable, named test2, should be assigned the calculation of num2 % 2. The fifth variable, named result1, should be assigned the result of comparing if the number stored in the test1 variable is not equal to 0, in other words, this: test1 == 0.The sixth variable, named result2, should be assigned the result of comparing if the number stored in the test2 variable is not equal to 0, in other words, test2 == 0. Run console log two times after you've set the variables: The first console log should have the following code between parentheses: "Is", num1, "an even number?", result1. The second console log should have the following code between parentheses: "Is", num2, "an even number?", result2.

var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);
