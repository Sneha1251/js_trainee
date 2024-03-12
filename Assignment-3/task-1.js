// Write a program to perform functionality of a calculator (add,sub,multiply,divide)
let choice = "";
let firstNumber = 0,
  secondNumber = 0,
  result = 0;

choice = prompt("Enter your choice:");
firstNumber = prompt("Enter first number");
firstNumber = parseInt(firstNumber);
secondNumber = prompt("Enter second number");
secondNumber = parseInt(secondNumber);

switch (choice) {
  case "add":
    result = firstNumber + secondNumber;
    console.log("\nResult is :" + result);
    break;

  case "sub":
    result = firstNumber - secondNumber;
    console.log("\nResult is :" + result);
    break;

  case "mul":
    result = firstNumber * secondNumber;
    console.log("\nResult is :" + result);
    break;

  case "div":
    result = firstNumber / secondNumber;
    console.log("\nResult is :" + result);
    break;

  default:
    console.log("Invalid Choice:" + choice);
}


