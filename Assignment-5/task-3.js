// Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

const studentObj = [
  { name: "Sneha", age: 22, id: "1234" },
  { name: "Parth", age: 20, id: "1235" },
  { name: "Pritam", age: 23, id: "1236" },
  { name: "Raksha", age: 21, id: "1237" },
];
console.log(studentObj);

const removedIdObject = studentObj.filter((obj) => delete obj.id);

console.log(removedIdObject);
