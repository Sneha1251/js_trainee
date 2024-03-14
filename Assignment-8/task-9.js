// function Person(name, age) { this.name = name; this.age = age; }
// var person = Person("John Doe", 30);
// console.log(person.name);

//----------ERROR------
// Use const instead for var for person

function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person = new Person("John Doe", 30);
console.log(person.name);
