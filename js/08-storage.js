//adding a key value pair to local storage
// console.log('Hello');

localStorage.setItem('Name1', 'Rohit');
localStorage.setItem('Name2', 'Rohan');

//retrieving items from local storage
let names1 = localStorage.getItem('Name2');
console.log(names1);

//clears entire local storage
// localStorage.clear();

//setting and retrieving an array in local storage
let arrayOne = ['apple', 'banana', 'mango'];
//converts javascript object to string while sending to server or
// saving to local storage
localStorage.setItem('Fruits', JSON.stringify(arrayOne));
// console.log(arrayOne);

//converts and parses the retrieved string into javascript object
array1 = JSON.parse(localStorage.getItem('Fruits'));
// console.log(array1);
