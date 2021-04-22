/*
//string methods
var myString = 'JavaScript!!!';
console.log(myString.charAt(7));
//output: i

var str1 = 'JavaScript ';
var str2 = str1.concat('is', 'awesome');
console.log(str2);
//Output: JavaScript is awesome

//indexOf(char/substring)
var string1 = 'Hi, my name is Sam!';
// var string2 = string1.indexOf('locate');
//Output: -1
var string2 = string1.indexOf('name');
var string2 = string1.lastIndexOf('a');
console.log(string2);

var text = 'programming';
var mystr = text.slice(0, 4);
console.log(mystr);
//Output:- "prog"

var txt = 'a,b,c,d,e'; // String
var txt1 = txt.split(','); // Split on commas
console.log(txt1);
var txt2 = 'This is a split function';
console.log(txt2.split(' '));
// output -> ["This", "is", "a", "split", "function"]

//substring(from, [to])
var myString = 'JAVASCRIPT Programming';
myString1 = myString.substring(0, 10);
console.log(myString1); //output: javascript
console.log(myString.toLowerCase());
console.log(myString.toUpperCase());
console.log(myString.replace('JAVASCRIPT', 'JAVA'));

var pos = myString.search('Programming');
console.log(pos); //output -> 11

var sub1 = 'Apple, Banana, Kiwi';
console.log(sub1.substr(7, 6));
// Output: Banana

//template literals
let firstName = 'Rohit',
  lastName = 'Chavan';
let greeting = `Welcome ${firstName} ${lastName}`;
console.log(greeting);
*/
