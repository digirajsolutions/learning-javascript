/*function learnPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = false;
      if (!error) {
        console.log('Function: Your promise has been completed.');
        resolve();
      } else {
        console.log('Function: Your promise has not been completed.');
        reject();
      }
    }, 3000);
  });
}

learnPromise()
  .then(function () {
    console.log('THEN: Function has been resolved');
  })
  .catch(function () {
    console.log('CATCH: Function has been rejected.');
  });
*/
const students = [
  { name: 'Rohit', subject: 'JavaScript' },
  { name: 'Rohan', subject: 'Machine Learning' },
];

function enrollStudent(student) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      students.push(student);
      console.log('Student has been enrolled');
      const error = true;

      if (!error) {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
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
enrollStudent(newStudent)
  .then(getStudents)
  .catch(function () {
    console.log('Error getting students');
  });
