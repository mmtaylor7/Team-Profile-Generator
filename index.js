const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Handlebars = require('handlebars');

const questions = [   
    {
        type: 'input',
        message: 'What is team manager\'\s name?',
        name: 'name',
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
        name: 'officeNumber',
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
            name: 'name',
          },
          {
            type: 'input',
            message: 'What is the engineer\'\s id?',
            name: 'id',
          },
          {
            type: 'input',
            message: 'What is the engineer\'\s email?',
            name: 'email',
          },
          {
            type: 'input',
            message: 'What is the engineer\'\s GitHub username?',
            name: 'gitHub',
          },
    ]

    const intern = [
        {
            type: 'input',
            message: 'What is the intern\'\s name?',
            name: 'name',
          },
          {
            type: 'input',
            message: 'What is the intern\'\s id?',
            name: 'id',
          },
          {
            type: 'input',
            message: 'What is the intern\'\s email?',
            name: 'email',
          },
          {
            type: 'input',
            message: 'What is the intern\'\s school name?',
            name: 'school',
          },
    ]

    const allUsers = [
      
    ]
    

    function init() {
        console.log(questions)
    
        inquirer.prompt(questions).then(({name,id,email,officeNumber}) => {
            const manager = new Manager(name, id, email, officeNumber);
            allUsers.push(manager);
            
            
            menu();
            //create manager object from class
            //push the manager object to an array
        })
    }

    function menu() {
        inquirer.prompt(options).then((selections) => {
            console.table(selections);
        if (selections.options == 'Add engineer') {
            inquirer.prompt(engineer).then(({name, id, email, gitHub}) => {
              const engineer = new Engineer(name, id, email, gitHub);
              allUsers.push(engineer);
            menu()  
            });
            
        } else if(selections.options == 'Add intern'){
            inquirer.prompt(intern).then(({name, id, email, school}) => {
              const intern = new Intern (name, id, email, school);
              allUsers.push(intern)
              menu()
            });
            
        }else {
            console.log(allUsers)
              fs.promises.readFile('./src/manager.handlebars').then((file) => {
                var template = Handlebars.compile(file.toString());

                console.log(template({ name: allUsers[0].name, id: allUsers[0].id, email: allUsers[0].email, officeNumber: allUsers[0].officeNumber }));
              })

            
        }
        })
    }
    function buildTeam(){
        //fs.writeFile
        // for each employee needs to be a place in html for each one? 
    }
    // Function call to initialize app
    init();