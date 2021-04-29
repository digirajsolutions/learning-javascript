//The for..in loop is an iteration method for iterating over "enumerable" properties of an object.
const obj1 = {
  first: 134,
  second: 255,
  third: 367,
  fourth: 433,
};
for (const key in obj1) {
  console.log(obj1[key]);
} // Result: 134, 255, 367, 433

const str = 'Lets Code';
for (let index in str) {
  //   console.log(str[index]);
} //Result: L, e, t, s C, o, d, e

//To iterate over objects like arrays and strings, we can use the for...of statement.
let students = ['Mark', 'Harry', 'Joe'];
// Print out each type of shark
for (let std of students) {
  console.log(std);
} //Result: Mark, Harry, Joe

let people = ['Austin', 'Panther', 'Gladiator', 'Anna', 'Sniper'];

// **********For in loop*******

// Traditional for loop:
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);
// }

// 1. ITERATING AN OBJECT
let obj = {
  name: 'Rohit',
  language: 'JavaScript',
  hobbies: 'Android app development',
};
// console.log(obj);
// 1.1 Iterating an object using Traditional for loop:
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
// }

// 1.2 Iterating an object using for-in loop:
for (let key in obj) {
  console.log(obj[key]);
}

// 2. ITERATING A STRING
// We can use for in with strings to loop through all the characters
myString = 'This is my string';
for (let char in myString) {
  //   console.log(myString[char]);
  //Prints every character in the string
}

// **********For of loop***********
console.log('*****************For of loop starts here**************');

for (let name of people) {
  console.log(name);
}
