//Write a program to display Diamond Pattern
//         *
//       *  *
//     *  *  *
//   *  *  *  *
// *  *  *  *  *
//   *  *  *  *
//     *  *  *
//      *  *
//        *
let size = 5;
let pattern = "";
for (let i = 1; i <= size; i++) {
  for (let k = size - 1; k >= i; k--) {
    pattern += " ";
  }
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  pattern += "\n";
}

for (let i = 1; i <= size - 1; i++) {
  for (let k = 1; k <= i; k++) {
    pattern += " ";
  }
  for (j = i; j <= size - 1; j++) {
    pattern += "* ";
  }
  pattern += "\n";
}

console.log(pattern);
