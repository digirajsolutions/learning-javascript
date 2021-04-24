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
