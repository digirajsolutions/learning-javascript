//used to copy the values of all enumerable own properties
//from one or more source objects to a target object and returns target object

const obj1 = {
  a: 11,
  b: 22,
  c: 33,
};

const obj2 = Object.assign({ c: 44, d: 55 }, obj1);
console.log(obj2);
console.log(obj1);

const target = { a: 1, b: 2 };
const source = { b: 3, d: 4 };

const newTarget = Object.assign(target, source);
console.log(target); //{a: 1, b: 3, d: 4}
console.log(source); //{b: 3, d: 4}

//assign() => used to create a new object
//with specified prototype object and properties
const person = {
  isHuman: false,
  firstName: 'Ankiet',
  printIntro: function () {
    console.log(`My name is ${this.firstName}. Am I human ? ${this.isHuman}`);
  },
};
// console.log(person);
person.printIntro();
//My name is Ankiet. Am I human ? false

const me = Object.create(person);
me.firstName = 'Rohit';
me.isHuman = true;

me.printIntro();
//My name is Rohit. Am I human ? true

//freeze() => freezes an object that prevents new properties from being added to it
//prevents modification of existing properties, attr n values
const obj = {
  prop: 42,
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// expected output: 42

//entries() => used to return an array of given objects own property in key value pair
const entry = { 1: 'Rohit', 2: 'Aniket', 3: 'Mayur' };
console.log(Object.entries(entry)[2]); //["3", "Mayur"]

//values => returns an array which contains given objects own enumerable property values
const givenVal = {
  a: 'abc',
  b: 23,
  c: true,
};
console.log(Object.values(givenVal)); //["abc", 23, true]
