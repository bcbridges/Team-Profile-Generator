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
        fs.readFile("./dist/index.html", "utf8", function (err, data) {
          if (err) {
            console.error(err);
            return;
          }
          let cardsToAdd = "";
          employeeList.forEach((value) => {
            switch (value.role) {
              case "Manager":
                var icon = `<i class="bi bi-cup"></i>`;
                var roleUnique = "Office Number: ";
                var uniqueValue = value.officeNum;
                break;
              case "Engineer":
                var icon = `<i class="bi bi-eyeglasses"></i>`;
                var roleUnique = "GitHub: ";
                var uniqueValue = `<a target="_blank" href="https://github.com/${value.github}">${value.github}</a>`;
                break;
              case "Intern":
                var icon = `<i class="bi bi-book"></i>`;
                var roleUnique = "School: ";
                var uniqueValue = value.school;
                break;
            }
            let cardDivLayout = `<div class="card" style="width: 18rem;">
            <div class="card-body bg-primary">
            <h5 class="card-title text-light">${value.name}</h5>
            <h6 class="card-title text-light">${icon}&nbsp;${value.role}</h6>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${value.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${value.email}">${value.email}</a></li>
            <li class="list-group-item">${roleUnique}${uniqueValue}</li>
            </ul></div>`;
            cardsToAdd += cardDivLayout;
          });

          var result = data.replace(/\<\/div>/g, cardsToAdd + "</div>");

          fs.writeFile("./dist/index.html", result, "utf8", function (err) {
            if (err) return console.log(err);
          });
        });

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
