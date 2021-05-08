//hoisting suggests that variable and function declarations are moved to top of your code.
//what happens is variable ad function are put into memory during the compile phase,
//but stay exactly wher they are typed.
//works only with declarations, not with initialization

myInfo('Rohit', 'Web Developer');

function myInfo(name, job) {
  console.log(`My name is ${name} and I work as a ${job}`);
}
