# Team-Profile-Gen

## Description

This project was created to automatically create an index.html file that contains cards for each memeber of a team. When a user begins this application, they are prompted with a series of questions with regards to their teams' information, and once they are finished, the html file is populated with the information. This project was utilized to practice the object oriented programming (OOP). There is no deployed website for this project. Instead, the project utilizes the command line to run the application.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [Credits](#credits)

- [License](#license)

- [How To Contribute](#how-to-contribute)

- [Tests](#tests)

- [Questions](#questions)

## Installation

User's must clone this repository onto their local computer and install the node.js desktop application to execute this program's code. Onced cloned onto their computers, navigate to the repository within the terminal and enter 'npm i' to install all modules used within this program.

## Usage

Once the steps within the Installation section are complete, the user must navigate to the repository location within their terminal and enter 'node index.js'. This command will prompt the user to fill in basic questions that will populate the generated html file. After each team member's information is entered, the user will be promted to enter another employee. If the user selects that they are done entering employees, they will be given the filepath to the newly populated index.html file.

Please view this video tutorial regarding the program here: https://drive.google.com/drive/folders/1Hp1jPwQx6xDvQ11pv2Dv_zuOpKgl2gjf?usp=sharing

## Credits

There are no additional contributers to this repository.

## License

This project is licensed under the GNU General Public License v3.0.

## How to Contribute

Please contact me at the email provided in the Questions section if you wish to contribute to this repository.

## Tests

There were 4 constructor functions that were tested, and their test files can be located [here](./tests/). All tests passed, and the following functions were tested:

- [Employee.test.js](./tests/Employee.test.js) : getName(), getID(), getEmail(), getRole()
- [Engineer.test.js](./tests/Engineer.test.js) : getGithub(), getRole()
- [Intern.test.js](./tests/Intern.test.js) : getSchool(), getRole()
- [Manager.test.js](./tests/Manager.test.js) : getOfficeNumber(), getRole()

## Questions

Email all questions to the following: bbridgesdev@gmail.com

You can connect with me on [GitHub here](https://github.com/bcbridges)!
