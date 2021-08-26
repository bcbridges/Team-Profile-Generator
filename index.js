const inquirer = require("inquirer");
const fs = require("fs");
const parse = require("node-html-parser").parse;
// const root = parse("./dist/index.html");
// const teamDiv = root.querySelector("div");
// console.log(teamDiv);
// const Employee = require("./lib/employee"); -- parent class
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
var employeeList = [];

let index = fs.readFile("./lib/indexTemplate.html", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  fs.writeFile("./dist/index.html", data, "utf8", () => {
    if (err) {
      console.error(err);
      return;
    }
  });
});

let questions = () => {
  inquirer
    .prompt({
      type: "rawlist",
      message: "Would you like to a new member to your team?",
      name: "emplType",
      choices: ["Manager", "Engineer", "Intern", "I'm Done"],
    })
    .then((response) => {
      if (response.emplType == "I'm Done") {
        //Add if index.html doesnt exist clause unless there's already data there.
        console.log(
          "You're all set! You can find your html file here - ./dist/index.html"
        );
      } else {
        switch (response.emplType) {
          case "Manager":
            inquirer
              .prompt([
                {
                  type: "input",
                  message: "What is the Manager's name?",
                  name: "name",
                },
                {
                  type: "input",
                  message: "What is the Manager's ID number?",
                  name: "id",
                },
                {
                  type: "input",
                  message: "What is the Manager's email?",
                  name: "email",
                },
                {
                  type: "input",
                  message: "What is the Manager's office number?",
                  name: "officeNum",
                },
              ])
              .then((response) => {
                const managerData = new Manager(
                  response.name,
                  response.id,
                  response.email,
                  response.officeNum
                );
                employeeList.push(managerData);
                console.log(employeeList);
                console.log(`${response.name} has been added to your team!\n`);
                questions();
              });
            break;
          case "Engineer":
            inquirer
              .prompt([
                {
                  type: "input",
                  message: "What is the Engineer's name?",
                  name: "name",
                },
                {
                  type: "input",
                  message: "What is the Engineer's ID number?",
                  name: "id",
                },
                {
                  type: "input",
                  message: "What is the Engineer's email?",
                  name: "email",
                },
                {
                  type: "input",
                  message: "What is the Engineer's GitHub username?",
                  name: "github",
                },
              ])
              .then((response) => {
                const engineerData = new Engineer(
                  response.name,
                  response.id,
                  response.email,
                  response.github
                );
                employeeList.push(engineerData);
                console.log(employeeList);
                console.log(`${response.name} has been added to your team!\n`);
                questions();
              });
            break;
          case "Intern":
            inquirer
              .prompt([
                {
                  type: "input",
                  message: "What is the Intern's name?",
                  name: "name",
                },
                {
                  type: "input",
                  message: "What is the Intern's ID number?",
                  name: "id",
                },
                {
                  type: "input",
                  message: "What is the Intern's email?",
                  name: "email",
                },
                {
                  type: "input",
                  message: "What school is the intern from?",
                  name: "school",
                },
              ])
              .then((response) => {
                const internData = new Intern(
                  response.name,
                  response.id,
                  response.email,
                  response.school
                );
                employeeList.push(internData);
                console.log(employeeList);
                console.log(`${response.name} has been added to your team!\n`);
                questions();
              });
            break;
          default:
            console.log("This is the default - an error has occured");
        }
      }
    });
};

questions();
//function to ask all typical questions
const employeeQuestions = () => {
  return;
};

//function to create html element

function writeElement() {}
