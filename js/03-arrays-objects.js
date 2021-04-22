//arrays
let arr = ['first element', 'second element', 'last element'];
console.log(arr[0]); // output ' first element'
console.log(arr[1]); //  output ' second element'
console.log(arr[arr.length - 1]); //  output ' last element'

let age = [33, 55, 67, 18];
console.log(age.length);

let std = ['Mark', 'John', 'Jonas', 'Jack'];
let a = std.indexOf('John'); //1

let age = [33, 55, 67, 18];
let s_age = age.sort(age);
//18,33,55,67
let r_age = age.reverse(age);
//18,67,55,33

let alpha = ['a', 'b', 'c'];
let numeric = [1, 2, 3];
var alphaNumeric = alpha.concat(numeric); // a,b,c,1,2,3

let fruits = ['Banana', 'Orange', 'Apple'];
let len = fruits.push('Mango');
// ["Apple", "Banana", "Orange", "Mango"]
let last = fruits.pop(); // remove Mango (from the end)
// ["Apple", "Banana", "Orange"]
let first = fruits.shift(); // remove Apple from the front
// ["Banana", "Orange"]
let newLength = fruits.unshift('Strawberry'); // add to the front
// ["Strawberry", "Banana", "Orange"]
let removedItem = fruits.splice(pos, 1); // this is how to remove an item
// ["Strawberry", "Orange"]

//Objects
let user = {
  name: 'Rohit', // by key "name" store value "Harry"
  age: 25, // by key "age" store value 25
  language: 'javascript', // by key "language" store value “ JavaScript”
};
console.log(user.name);
console.log(user['age']);
