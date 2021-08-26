// EXTEND FROM EMPLOYEE
// github - GitHub username
// getGithub()
// getRole() -- overridden to return 'Engineer'

const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = "Engineer";
  }
}

module.exports = Engineer;
