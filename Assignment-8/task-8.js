// function Person(name, age) { this.name = name; this.age = age; }
// Person.prototype.getDetails = function() {
//   console.log(this.name + " is " + this.age + " years old");
// };
// let person = new Person("John Doe", 30);
// delete person.name;
// person.getDetails();

//--------ERROR-----
//use const instead of let for person
// first call get details then delete it

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.getDetails = function () {
  console.log(this.name + " is " + this.age + " years old");
};
const person = new Person("John Doe", 30);

person.getDetails();
delete person.name;
console.log(person);
