// let person = {
//   name: 'Rohit',
//   domain: 'Web development',
//   language: 'Javascript',
// };

/*
function Person(givenName) {
  this.name = givenName;
}

Person.prototype.getName = function () {
  return this.name;
};

Person.prototype.setName = function (newName) {
  this.name = newName;
};

let person1 = new Person('Rohan');
console.log(person1);
*/

/*
function Student() {
  this.name = 'Rohit';
  this.gender = 'Male';
}

Student.prototype.sayHi = function () {
  let hi = `Hiii ${this.name} !`;
  return hi;
};

let stud1 = new Student();
console.log(stud1);
console.log(stud1.sayHi());
*/

const proto = {
  slogan: function () {
    return `This company is the best`;
  },
  changeName: function (newName, newRole) {
    this.name = newName;
    this.role = newRole;
  },
};

// This creates rohit object inheriting from object proto
let rohit = Object.create(proto);
rohit.name = 'rohit';
rohit.role = 'Programmer';
console.log(rohit);

rohit.changeName('Raj', 'Marketer');
console.log(rohit);

// Executing Prototype inheritance
// Employee constructor
function Employee(name, salary, experience) {
  this.name = name;
  this.salary = salary;
  this.experience = experience;
}

// Slogan prototype
Employee.prototype.slogan = function () {
  return `This company is the best. Regards, ${this.name}`;
};

// Create an object from this constructor now
let rohitObj = new Employee('Rohit', 50000, 12);
console.log(rohitObj);
console.log(rohitObj.slogan());

// Programmer
function Programmer(name, salary, experience, language) {
  Employee.call(this, name, salary, experience);
  this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer('Rohan', 2, 0, 'Javascript');
console.log(rohan);
