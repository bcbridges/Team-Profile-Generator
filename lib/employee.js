// PARENT CLASS WITH FOLLOWING PROPERTIES AND METHODS
// name
// id
// email
// getName()
// getID()
// getEmail()
// getRole() -- returns 'Employee'

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }

  getName() {
    console.log(this.name);
  }
  getID() {
    console.log(this.id);
  }
  getEmail() {
    console.log(this.email);
  }
  getRole() {
    console.log(this.role);
  }
}

module.exports = Employee;
