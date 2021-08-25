// EXTEND FROM EMPLOYEE
// officeNumber
// getRole() -- overridden to return 'Manager'

const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
    this.role = "Manager";
  }
}

const brice = new Manager("Brice", 3, "bcb35b@gmail.com", 15);

console.log(brice);
