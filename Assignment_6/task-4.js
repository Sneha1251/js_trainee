// Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` that returns the person's full name.
// Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.

class Person{
    constructor(firstName,lastname,age){
        this.firstName=firstName;
        this.lastname=lastname;
        this.age=age;
    }
    fullName(){
        return `${this.firstName} ${this.lastname}`;
    }
    static averageAge(...objects){
        let sum;
       for(let i=0;i<objects.length;i++){
        sum+=objects.age;
       }
       return sum/objects.length;
    }
}

const person1=new Person("Sneha","Gupta",22);
console.log("Full name is ",person1.fullName);

const person2=new Person("Parth","Gupta",21);
const person3=new Person("Pritam","Prakash",22);
const person4=new Person("Raksha","Awasthi",23);
const person5=new Person("Anushka","Gupta",22);

console.log(averageAge(person1,person2,person3,person4,person5));
