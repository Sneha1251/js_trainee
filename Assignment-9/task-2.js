// Install the lodash package using npm install lodash. and use any of its function

// Load the full build.
const _ = require("lodash");

// fill function
// syntax : _.fill(array, value, [start=0], [end=array.length])
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
_.fill(arr, "*", 3, 6);

console.log(arr);

// flatten function
// syntax : _.flattenDeep(array)
const array = [1, 2, [3, 4, [5, 6, [7, 8]]]];
const newArr = _.flattenDeep(array);
console.log(newArr);
