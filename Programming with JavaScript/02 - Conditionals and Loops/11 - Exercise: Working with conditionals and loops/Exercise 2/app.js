// Use the completed code from the previous task, but convert the conditionals to a switch statement. When you code the solution, the output in the console should remain exactly the same as in the previous question.

for (var i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
      console.log("Gold medal");
      break;
    case 2:
      console.log("Silver medal");
      break;
    case 3:
      console.log("Bronze medal");
      break;
    default:
      console.log(i);
  }
}
