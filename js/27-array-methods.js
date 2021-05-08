//map() -> creates a new array with the results of calling
//a provided function on every element in this array.
const array = [1, 2, 3, 4, 5];
const mappedArray = array.map((element) => element + 10);
console.log(mappedArray); //[11, 12, 13, 14, 15]

//filter() => creates a new array with only elements that passes
//the condition inside the provided function
const filterArray = array.filter((element) => element == 2 || element == 6);
console.log(filterArray); //[2]

//sort() => used to arrange or sort arrays elements
let ascArray = array.sort((a, b) => a - b);
console.log(ascArray); //[1, 2, 3, 4, 5]
let dscArray = array.sort((a, b) => b - a);
console.log(dscArray); //[5, 4, 3, 2, 1]

//every() => checks every element in the array that passes condition
//returning true or false
const checkArray = array.every((num) => num < 6);
console.log(checkArray); //true

//some() => checks if atleast one element passes the condition
//in the array and returns true or false
const someNum = array.some((num) => num > 6);
// const someNum = array.some((num) => num < 2);
console.log(someNum); //false

//find() => returns the value of first element in array that passes
//the test in a testing function
let array2 = [11, 12, 13, 14, 15];
const found = array2.find((element) => element > 13);
console.log(found); //14

//concat() => used to merge two or more arrays and returns a new array
//without changing existing array
const arr1 = ['r', 'o', 'h', 'i', 't'];
const arr2 = ['c', 'h', 'a', 'v', 'a', 'n'];
console.log(arr1.concat(arr2));
//["r", "o", "h", "i", "t", "c", "h", "a", "v", "a", "n"]

//includes() => checks if an array includes the element that passes
//the condition returning true or false
console.log(arr1.includes('r')); //true
console.log(arr1.includes('c')); //false
const joining = arr1.join(''); //rohit
console.log(typeof joining); //string
console.log(`My name is ${arr1.join('')} ${arr2.join('')}`);
//My name is rohit chavan

//slice() => returns a new array with specified start and end elements
console.log(arr2.slice(2, 5)); //["a", "v", "a"]

//reverses an array in place
console.log(array2.reverse()); //[15, 14, 13, 12, 11]

//push() => adds one or more elements to end of array
//and returns length of array
console.log(array2.push(16)); //6
console.log(array2); //[15, 14, 13, 12, 11, 16] -> since array2 is reversed above

//pop() => removes one or more elements to end of array and returns element
const removing = array2.pop();
console.log(removing); //16
console.log(array2); //[15, 14, 13, 12, 11]

//shift() => removes the first element from array and returns element
console.log(array2.shift()); //15

//unshift() => adds one or more element to beginning from array
//and returns new length of array
console.log(array2.unshift(16)); //5
console.log(array2); //[16, 14, 13, 12, 11]

//reduce() => applies a function against an accumlator
//and each element in array to reduce it to single value
const reduced = array.reduce((total, curr) => total + curr);
console.log(reduced); //15
const reduced2 = arr2.reduce((total, curr) => total + curr);
console.log(reduced2); //chavan

//findIndex() => returns index of the first element in array that
//passes the test in a testing function
const indexFinder = arr2.findIndex((element) => element === 'a');
console.log(indexFinder); //2

//indexOf() => returns the index of first occurence of specified element in array
console.log(arr2.indexOf('a')); //2

//fill() => fills the element in an array with static value
//and returns the modified array
const fillArray = new Array(5);
console.log(fillArray); //[empty]
console.log(fillArray.fill(10)); //[10, 10, 10, 10, 10]

//splice() => The splice() method adds/removes items to/from an array,
//and returns the removed item(s).
//At position 2, add the new items, and remove 1 item
let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
let spliced = fruits.splice(2, 1, 'Lemon', 'Kiwi');
console.log(spliced); //["Apple"]
console.log(fruits); //["Banana", "Orange", "Lemon", "Kiwi", "Mango"]
