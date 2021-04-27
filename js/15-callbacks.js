// Pretend that this response is coming from the server
const students = [
  { name: 'Rohit', subject: 'JavaScript' },
  { name: 'Rohan', subject: 'Machine Learning' },
];

//function without a callback
// function enrollStudent(student) {
//   setTimeout(function () {
//     students.push(student);
//     console.log('Student has been enrolled');
//   }, 3000);
// }

//function that takes a callback of getStudents()
function enrollStudent(student, getStudents) {
  setTimeout(function () {
    students.push(student);
    console.log('Student has been enrolled');
    getStudents();
  }, 3000);
}

function getStudents() {
  setTimeout(function () {
    let str = '';
    students.forEach(function (student) {
      str += `<li> ${student.name}</li>`;
    });
    document.getElementById('students').innerHTML = str;
    console.log('Students have been fetched');
  }, 1000);
}

let newStudent = { name: 'Sunny', subject: 'Python' };
enrollStudent(newStudent, getStudents);
// enrollStudent(newStudent);
// getStudents();
