//The Array.from() static method creates a new, shallow-copied Array instance
// from an array-like or iterable object.
const people = [
  { name: 'Rohit', age: 27 },
  { name: 'Aniket', age: 28 },
  { name: 'Mayur', age: 29 },
  { name: 'Vijay', age: 30 },
  { name: 'Girish', age: 33 },
];

const peopleNames = Array.from(people, ({ name }) => name);
console.log(peopleNames); //["Rohit", "Aniket", "Mayur", "Vijay", "Girish"]

console.log(Array.from('digiraj')); //["d", "i", "g", "i", "r", "a", "j"]
console.log(Array.from([1, 2, 3], (x) => x + 10)); //[11, 12, 13]

const setArray = new Set([11, 12, 12, 15, 16, 16]);
console.log(Array.from(setArray)); //[11, 12, 15, 16]

const map = new Map([
  [2, 4],
  [3, 9],
  [4, 16],
]);
console.log(Array.from(map));

const mappar = new Map([
  ['1', 'Rohit'],
  ['2', 'Vijay'],
  ['3', 'Girish'],
]);
console.log(Array.from(mappar.values())); //["Rohit", "Vijay", "Girish"]
console.log(Array.from(mappar.keys())); //["1", "2", "3"]
