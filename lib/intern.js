// EXTEND FROM EMPLOYEE
// school
// getSchool()
// getRole() -- overridden to return 'Intern'

const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.role = "Intern";
  }
}

const brice = new Intern("Brice", 3, "bcb35b@gmail.com", "Missouri S&T");

const taylor = new Intern("Taylor", 8, "tsteffen@gmail.com", "Missouri S&T");
