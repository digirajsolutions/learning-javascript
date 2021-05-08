//to add a new item to a local data store
//display all stored items plus new addition

let numbers = [1, 2, 3];
// let newNumbers = [4, 5];
let newNumber = 45;
// numbers = [...numbers, ...newNumbers];
numbers = [...numbers, newNumber];
console.log(numbers);

function sum(x, y, z) {
  return x + y + z;
}

//used when all elements from obj or array need to be included in alist of some kind
const numbers2 = [11, 22, 33];
console.log(sum(...numbers2));

//the rest parameter lets you bundle elements back into an array
const person = [
  'Rohit',
  28,
  'Web Development',
  'Digital Marketing',
  'Software Development',
];
const [fullName, age, ...roles] = person;
console.log(person);
console.log(fullName);

//called for function defined below
console.log(totalSum(2, 3, 4));

function totalSum(...nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}
