// for (var i = 0; i < 10; i++) {
// setTimeout(function() { console.log(i); }, 1000); }

// -----------ERROR----------
// Use let instead of var because var is global scope and let is block scope
//By the time the callback functions inside setTimeout execute, the loop has already finished, and the value of i has become 10

for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
