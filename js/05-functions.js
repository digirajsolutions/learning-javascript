function print(message) {
  console.log(message);
}
print('Hello World');
//Output: Hello World

//anonymous function
let add = function (a, b) {
  return a + b;
};
console.log(add(4, 3));
//Output: 7

//returning the data from the function
function get_Distance(speed, time) {
  let dist = speed * time;
  return dist;
}
let myDist = get_Distance(11, 12);
console.log(myDist);

//function in an object
const myObject = {
  name: 'Rohit',
  game: function () {
    return 'Counter Strike';
  },
};
console.log(myObject.game());

//function in a loop
array1 = ['apple', 'mango', 'grapes', 'banana'];
array1.forEach((element, index) => {
  console.log(`The element ${element} is at number ${index}`);
});
