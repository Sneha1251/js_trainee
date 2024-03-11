// Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")

const string1 = "abcabcdabbcc";

let result = {};

for (let i = 0; i < string1.length; i++) {
  let ch = string1[i];
  if (!result[ch]) {
    result[ch] = 1;
  } else {
    result[ch] += 1;
  }
}

console.log("The occurence of each letter in given string is:", result);

