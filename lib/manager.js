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

  getOfficeNumber() {
    return this.officeNum;
  }
}

module.exports = Manager;
