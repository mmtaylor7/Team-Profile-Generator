const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Handlebars = require("./dist/index.html");

const questions = [
  {
    type: "input",
    message: "What is team manager's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the employee's ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the employee's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the employee's office number?",
    name: "officeNumber",
  },
];

const options = [
  {
    type: "list",
    message: "What would you like to do next?",
    name: "options",
    choices: ["Add engineer", "Add intern", "Finish Building"],
  },
];

const engineer = [
  {
    type: "input",
    message: "What is the engineer's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the engineer's id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the engineer's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the engineer's GitHub username?",
    name: "gitHub",
  },
];

const intern = [
  {
    type: "input",
    message: "What is the intern's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the intern's id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the intern's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the intern's school name?",
    name: "school",
  },
];

const allUsers = [];

function init() {
  inquirer.prompt(questions).then(({ name, id, email, officeNumber }) => {
    const manager = new Manager(name, id, email, officeNumber);
    allUsers.push({ ...manager, type: "manager" });

    menu();
    //create manager object from class
    //push the manager object to an array
  });
}

function menu() {
  inquirer.prompt(options).then((selections) => {
    console.table(selections);
    if (selections.options == "Add engineer") {
      inquirer.prompt(engineer).then(({ name, id, email, gitHub }) => {
        const engineer = new Engineer(name, id, email, gitHub);
        allUsers.push({ ...engineer, type: "engineer" });
        menu();
      });
    } else if (selections.options == "Add intern") {
      inquirer.prompt(intern).then(({ name, id, email, school }) => {
        const intern = new Intern(name, id, email, school);
        allUsers.push({ ...intern, type: "intern" });
        menu();
      });
    } else {
      buildTeam();
    }
  });
}
function buildTeam() {
  var startHtml = `<html><head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
    integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
    crossorigin="anonymous"
  />
  <link rel="stylesheet" href="./style.css" />
  <title>Document</title>
</head>`;
  var middleHtml = "";
  var endHtml = "</html>";

  allUsers.map((user) => {
    console.log("user", user);
    middleHtml += `<div class="manager-card col-4">
    <div>Name: ${user.name}</div>
    <div>Email: ${user.email}</div>
    <div>ID: ${user.id}</div>
    <div>Role: ${user.type}</div>`;
    if (user.type == "manager") {
      middleHtml += `<div>Office Number: ${user.officeNumber}</div></div>`;
    } else if (user.type == "engineer") {
      middleHtml += `<div>Github: ${user.gitHub}</div></div>`;
    } else {
      middleHtml += `<div>School: ${user.school}</div></div>`;
    }
  });

  fs.writeFile(
    "./dist/index.html",
    startHtml + middleHtml + endHtml,
    (error) => {
      console.log(error);
    }
  );
}
// Function call to initialize app
init();
