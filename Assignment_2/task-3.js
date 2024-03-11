// Write a function expression that takes in another function as an argument

function inner() {
  return "hello world!";
}

function outer(inner) {
  console.log(inner());
}

outer(inner);


