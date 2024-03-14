// var person = {
//  name: "John Doe", age: 30, getDetails: function() {
// console.log(this.name + " is " + this.age + " years old"); } };
// var getPersonDetails = person.getDetails;
// getPersonDetails();

// -------------ERROR-------------
// Use const instead of var for person
// For calling object value we have to write person.name or person.age instead of this.name or this.age

const person = {
  name: "John Doe",
  age: 30,
  getDetails: function () {
    console.log(person.name + " is " + person.age + " years old");
  },
};
const getPersonDetails = person.getDetails;
getPersonDetails();
