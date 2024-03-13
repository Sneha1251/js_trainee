// 3.1 Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.
// 3.2 Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information about what the student is studying.
// 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include information about what the teacher teaches

class Person {
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }
  greeting() {
    return `Hello ${this.name}! Hope this message finds you well. Welcome to Successive Digital`;
  }
  farewell() {
    return `Goodbye ${this.name}! Nice to meet you`;
  }
}

class Student extends Person {
  constructor(name, studies) {
    super(name);
    this.studies = studies;
  }
  greeting() {
    return `Hello ${this.name}! You are studying ${this.studies}`;
  }
}

class Teacher extends Person {
  constructor(name, subjectsTaught) {
    super(name);
    this.subjectsTaught = subjectsTaught;
  }
  farewell() {
    return `Goodbye ${this.name}! Teacher will teach you ${this.subjectsTaught}`;
  }
}

const person = new Person("Sneha", 23, "Female", "Painting");
console.log(person.greeting());
console.log(person.farewell());

const student = new Student("Sneha", "Coding");
console.log(student.greeting());

const teacher = new Teacher("Sneha", "Javascript");
console.log(teacher.farewell());
