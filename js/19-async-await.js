console.log('This is async await tutorial');

async function learnAsyncCode() {
  console.log('Inside learnAsyncCode function');
  const response = await fetch('https://api.github.com/users');

  console.log('before response');
  const users = await response.json();

  console.log('users resolved');
  return users;

  // return "learnAsyncCode";
}

console.log('Before calling learnAsyncCode');
let a = learnAsyncCode();
console.log('After calling learnAsyncCode');

console.log(a);
a.then((data) => console.log(data));
console.log('Last line of this js file');
