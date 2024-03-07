// Write a program to remove dupliacte elements from an array
const arr = [1,2,3,1,2,5,6,4,3,7,8,6,8,4,3,4,9];
let new_arr = [...new Set(arr)];

console.log(new_arr);


