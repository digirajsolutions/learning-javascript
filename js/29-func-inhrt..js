// Functional inheritance is the process of inheriting features by applying an augmenting function to an object instance.
//The function supplies a closure scope which you can use to keep some data private.
//The augmenting function uses dynamic object extension to extend the object instance with new properties and methods.

//base object constructor function
function Animal(data) {
  let obj = {}; //create empty object
  obj.name = data.name; //add it name property
  return obj;
}

//create a child object inheriting base Animal
function Dog(data) {
  let obj = Animal(data); //create animal object
  obj.sayHello = function () {
    return `Hello.. I m ${obj.name}`;
  };
  return obj;
}

let myDog = Dog({ name: 'Rocky' });
console.log(myDog.sayHello());
