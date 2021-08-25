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

const brice = new Engineer("Brice", 3, "bcb35b@gmail.com", "bcbridges14");

console.log(brice);
