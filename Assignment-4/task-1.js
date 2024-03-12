// Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")

const str = "Hello Yellow";
let arr_str = str.split("");
const newarr = [...new Set(arr_str)];
arr_str = newarr.join("");
console.log(arr_str);

