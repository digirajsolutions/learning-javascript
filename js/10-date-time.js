let today = new Date();
// console.log(today);

//the date format is MM/DD/YYYY
let otherDate = new Date('08-05-2010 05:45:25');
otherDate = new Date('June 13 2011');
otherDate = new Date('June 13 2011');
otherDate = new Date('09/16/2015');

console.log(otherDate);

let a;
a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
// a = otherDate.getSeconds();
// a = otherDate.getHours();
a = otherDate.getTime();
a = otherDate.getMilliseconds();
a = otherDate.getMonth();
console.log(a);
otherDate.setDate(23);
otherDate.setMonth(0);
otherDate.setFullYear(1900);
otherDate.setMinutes(2);
otherDate.setHours(1);
otherDate.setSeconds(3);
console.log(otherDate);
