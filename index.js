const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const questions = [   
    {
        type: 'input',
        message: 'What is team manager\'\s name?',
        name: 'manager',
      },
      {
        type: 'input',
        message: 'What is the employee\'\s ID?',
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is the employee\'\s email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is the employee\'\s office number?',
        name: 'office',
      },
    ];

    const options = [
        {
            type: 'list',
            message: 'What would you like to do next?',
            name: 'options',
            choices: ['Add engineer', 'Add intern', 'Finish Building']
          },
    ]

    function init() {
        console.log(questions)
    
        inquirer.prompt(questions).then((answers) => {
            console.table(answers)
        })
    }

    function menu() {
        inquirer.prompt(options).then((selections)) => {
            console.table(selections)
        }
    }
    
    // Function call to initialize app
    init();