// Write a program to perform functionality of a calculator (add,sub,multiply,divide)
let ch="";
let x=0, y=0, res=0;

ch =prompt("Enter your choice:");
x = prompt("Enter first number");
x= parseInt(x);
y = prompt("Enter second number");
y=parseInt(y);

switch (ch) {
  case "add":
  res = x + y;
  console.log("\nResult is :" + res)
  break

  case "sub":
  res = x - y
  console.log("\nResult is :" + res)
  break

  case "mul":
  res = x * y
  console.log("\nResult is :" + res)
  break

  case "div":
  res = x / y
  console.log("\nResult is :" + res)
  break

  default:
  console.log("Invalid Choice:" + ch)
}
