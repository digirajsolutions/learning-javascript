let a = document;
a = document.body;
// a = document.forms[0];
// Array.from(a).forEach(function(element){
//     console.log(element);
// })
// a = document.links[0];
// use document.images and document.scripts and print the list of images and scripts on an html page
// console.log(a);

/*
element selectors:
1. Single element selector
2. Multi element selector

*/
/*
// 1. Single element selector
let element = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
element.innerText = 'Harry is a good boy';
element.innerHTML = '<b>Harry is a good boy</b>';
// console.log(element.innerText);

let doc1 = document.querySelector('#myfirst');
doc1 = document.querySelector('.child');
doc1 = document.querySelector('div');
doc1.style.color = 'green';
// console.log(doc1);

// 2. Multi element selector
let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
console.log(elems);

for (let index = 0; index < elems.length; index++) {
  const element = elems[index];
  console.log(element);
  element.style.color = 'blue';
}

//forEach loop does not apply on html tags. So we need to get it from Array.from()
// Array.from(elems).forEach(element => {
//     console.log(element);
//    element.style.color = 'blue';
// });
// console.log(elems[0].getElementsByClassName('child'))
*/

let con = document.querySelector('.no');
con = document.querySelector('.container');
let nodeName = con.childNodes[1].nodeName;
let nodeType = con.childNodes[1].nodeType;
// console.log(nodeName);
// console.log(nodeType);
// Node types
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType

// console.log(cont.childNodes);
// console.log(cont.children);

let container = document.querySelector('div.container');

// console.log(container.children[1]); //div with #myfirst
// console.log(container.children[1].children[0]); //ul with .this
// console.log(container.children[1].children[0].children); //list of li
// console.log(container.firstChild); //#text
// console.log(container.firstElementChild); //h1 with #heading

// console.log(container.lastChild);
// console.log(container.lastElementChild); //form tag
// console.log(container.children); //collection of all children
// console.log(container.childElementCount); // Count of child elements

// console.log(container.firstElementChild.parentNode); //div with .container
// console.log(container.firstElementChild.nextSibling); //#text
// console.log(container.firstElementChild.nextElementSibling); //div with #myfirst
// console.log(container.firstElementChild.nextElementSibling.nextElementSibling); // div with .child
