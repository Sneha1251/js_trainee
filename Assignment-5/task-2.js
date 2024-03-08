// Write a program to sort an array of object on the basis of age ({name:"John", age:26})

const studentObj = [
  { name: "Sneha", age: 22 },
  { name: "Parth", age: 20 },
  { name: "Pritam", age: 23 },
  { name: "Raksha", age: 21 },
];

for (let keys in studentObj) {
  let value = studentObj[keys];
  sortedData = studentObj.sort(function (a, b) {
    return a.age - b.age;
  });
}

console.log(sortedData);


