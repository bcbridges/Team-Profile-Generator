const inquirer = require("inquirer");

inquirer
  .prompt({
    type: "rawlist",
    message: "Would you like to add somone to your team?",
    name: "emplType",
    choices: ["Manager", "Engineer", "Intern", "I'm Done"],
  })
  .then((response) => {
    switch (response.emplType) {
      case "Manager":
        console.log("Manager Test");
        break;
      case "Engineer":
        console.log("Engineer Test");
        break;
      case "Intern":
        console.log("Intern Test");
        break;
      default:
        console.log("This is the default");
    }
  });
