//Write a program to print fibonaaci series
let i = 0;
console.log(i);
let j = 1;
console.log(j);
let k;
for (let num = 1; num < 5; num++) {
  k = i + j;
  console.log(k);
  i = j;
  j = k;
}
