//for loop
for (var i = 1; i <= 5; i++) {
  console.log(i);
}

// An object with some properties
var person = { name: 'Rohit', language: 'JavaScript', age: 27 };
// Loop through all the properties in the object
for (var i in person) {
  //   console.log(i + ' = ' + person[i]);
  console.log(`The ${i} is ${person[i]}`);
}
// i -> key, person[i] -> value

//forEach loop
let arr = [2, 5, 6, 4, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   console.log(element);
// }

arr.forEach(function (element, index) {
  console.log(element, index);
});
