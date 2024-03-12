//Write a program to reverse a string ("Hello John" => "olleH nhoJ")

let originalStr = "Hello John";
let dupStr = "";
let string = "";

originalStr = originalStr + " ";
for (let i = 0; i < originalStr.length; i++) {
  string = string + originalStr[i];
  if (originalStr[i] === " ") {
    dupStr = dupStr + string.split("").reverse().join("");
    string = "";
    dupStr = dupStr + " ";
  }
}
console.log(dupStr);
