/*
console.log('Hello world');
const person = {
  name: 'Rohit',
  age: 28,
  company: 'Digiraj Solutions',
};
console.table(person);
*/

//variables
/* let city = 'Kolhapur';
{
  let city = 'Pune';
  city = 'Mumbai';
  console.log(city);
}
console.log(city);
//this will give output Kolhapur defined above.
//if commented kop, will give undefined since let has a block level scope
//while if var is used, it will give kolhapur in 2nd console 
*/

/*
const array = [11, 12, 13, 14];
array.push(15);
console.log(array); //output -> [11, 12, 13, 14, 15]
//while using const, we can update the variable but cannot create it again
*/

/*
// Primitive data types

// String
let myName = 'Rohit';
console.log('My name is ' + myName);
console.log('Data type is ' + typeof myName);

// Numbers
let marks = 75.5;
console.log('Data type is ' + typeof marks);

// Boolean
let isDriver = true;
console.log('Data type is ' + typeof isDriver);

// Null
let nullVar = null;
console.log('Data type is ' + typeof nullVar);

// Undefined
let undef = undefined;
console.log('Data type is ' + typeof undef);

// Reference Data Types

// Arrays
let myarr = [1, 2, 3, 4, false, 'string'];
console.log('Data type is ' + typeof myarr);

// Object Literals
let stMarks = {
  Rohit: 89,
  Aniket: 75,
  Rohan: 34,
};
console.log(typeof stMarks);

function findName() {}
console.log(typeof findName);

let date = new Date();
console.log(typeof date);
*/

/*
//Type Conversion
let res;
// string to number
res = Number('100');
console.log(res); // 100
// boolean to number
res = Number(false);
console.log(res); // 0
res = Number('hello');
console.log(res); // NaN

let num;
let a = 90;
num = String(a); // returns a string from a number variable a
String(379); // returns a string from a number literal 379
a.toString();
(378009).toString();

let myVar;
myVar = String(34);
// console.log(myVar, (typeof myVar));
let booleanVar = String(true);
// console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
// console.log(date, (typeof date));

let arr =  String([1,2,3,4,5]);
// console.log(arr.length, (typeof arr));

let i = 75;
// console.log(i.toString())

let stri = Number("3434");
stri = Number("343d4");
stri = Number(false);
stri = Number([1,2,3,4,5,6,7,8,9]);
// console.log(stri, (typeof stri));

let number = parseFloat('34.098');
console.log(number.toFixed(2), (typeof number));

// Type coercion
let mystr = Number("698");
let mynum = 34;

console.log(mystr + mynum);
*/
