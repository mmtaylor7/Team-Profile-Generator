const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager');
//don't forget to require intern and engineer files

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

    const engineer = [
        {
            type: 'input',
            message: 'What is the engineer\'\s name?',
            name: 'engineerName',
          },
          {
            type: 'input',
            message: 'What is the engineer\'\s id?',
            name: 'engineerId',
          },
          {
            type: 'input',
            message: 'What is the engineer\'\s email?',
            name: 'engineerEmail',
          },
          {
            type: 'input',
            message: 'What is the engineer\'\s GitHub username?',
            name: 'engineerGithub',
          },
    ]

    const intern = [
        {
            type: 'input',
            message: 'What is the intern\'\s name?',
            name: 'internName',
          },
          {
            type: 'input',
            message: 'What is the intern\'\s id?',
            name: 'internId',
          },
          {
            type: 'input',
            message: 'What is the intern\'\s email?',
            name: 'internEmail',
          },
          {
            type: 'input',
            message: 'What is the intern\'\s school name?',
            name: 'internSchool',
          },
    ]

    

    function init() {
        console.log(questions)
    
        inquirer.prompt(questions).then((answers) => {
            console.table(answers);
            menu();
            //create manager object from class
            //push the manager object to an array
        })
    }

    function menu() {
        inquirer.prompt(options).then((selections) => {
            console.table(selections);
        if (selections.options == 'Add engineer') {
            inquirer.prompt(engineer).then((data) => {
              //after engineer questions
            menu()  
            });
            
            //need to figure out how to re-call the options varaible to ask "add engineer, add intern or finish here"

        } else if(selections.options == 'Add intern'){
            inquirer.prompt(intern).then((data) => {
              menu()
            });
            //need to figure out how to re-call the options varaible to ask "add engineer, add intern or finish here"
        }else {
            
        }
        })
    }
    function buildTeam(){
        //fs.writeFile
        // for each employee needs to be a place in html for each one? 
    }
    // Function call to initialize app
    init();