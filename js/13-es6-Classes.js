class Employee {
  constructor(name, department, experience) {
    this.name = name;
    this.department = department;
    this.experience = experience;

    Employee.basicSalary();
  }

  statement() {
    return `I am ${this.name} working in ${this.department} department.`;
  }

  joiningYear() {
    return 2020 - this.experience;
  }

  //static methods can be directly executed by class without creating objects
  static basicSalary(name) {
    return `The basic salary of ${name} is 10000.`;
  }
}

let rohit = new Employee('Rohit', 'Development', 7);
// console.log(typeof rohit);
console.log(rohit.joiningYear());

console.log(Employee.basicSalary('Rohit'));

//performing inheritance

class Programmer extends Employee {
  constructor(name, department, experience, salary, language) {
    super(name, department, experience);

    this.salary = salary;
    this.language = language;
  }
}

let rohan = new Programmer('Rohan', 'Deployment', 5, 25000, 'Javascript');
console.log(rohan);
// console.log(typeof rohan);
console.log(rohan.joiningYear());
console.log(Programmer.basicSalary('Rohan'));
