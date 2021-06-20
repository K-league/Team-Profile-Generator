const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html")
const render = require("./src/pagetemp.js")//render req page temp output to team.html

let team = [];

const startNewProfile = () => {
    //I am prompted to enter the team manager’s name, employee ID, email address, and office number
    inquirer
        .prompt([{
            name: 'name',
            type: 'input',
            message: 'What is the team manager\'s name?',
        },
        {
            name: 'employee_id',
            type: 'input',
            message: 'What is the team manager\'s employee id?',
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the team manager\'s email?',
        },
        {
            name: 'office_number',
            type: 'input',
            message: 'What is the team manager\'s office number?',
        }])
        .then((answers) => {
            let manager = new Manager(answers.name, answers.employee_id, answers.email, answers.officeNumber);
            team.push(manager);
            buildTeam();
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                console.log(error)
                // Something else went wrong
            }
        });
}

const addEngineer = () => {
    //I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
    inquirer
        .prompt([{
            name: 'name',
            type: 'input',
            message: 'What is the Engineer\'s name?',
        },
        {
            name: 'employee_id',
            type: 'input',
            message: 'What is the Engineer\'s employee id?',
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the Engineer\'s email?',
        },
        {
            name: 'github',
            type: 'input',
            message: 'What is the Engineer\'s github?',
        }])
        .then((answers) => {
            let engineer = new Engineer(answers.name, answers.employee_id, answers.email, answers.github);
            team.push(engineer);
            buildTeam();
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                console.log(error)
                // Something else went wrong
            }
        });
}

const addIntern = () => {
    //I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
    inquirer
        .prompt([{
            name: 'name',
            type: 'input',
            message: 'What is the intern\'s name?',
        },
        {
            name: 'employee_id',
            type: 'input',
            message: 'What is the intern\'s employee id?',
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the intern\'s email?',
        },
        {
            name: 'school',
            type: 'input',
            message: 'What is the intern\'s school?',
        }])
        .then((answers) => {
            let intern = new Intern(answers.name, answers.employee_id, answers.email, answers.school);
            team.push(intern);
            buildTeam();
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                console.log(error)
                // Something else went wrong
            }
        });
}

const buildProfile = () => {
    team.forEach((employee) => {
        console.log(employee.render());
    })
    process.exit()
}

const buildTeam = () => {
    inquirer
        .prompt({
            name: 'action',
            type: 'rawlist',
            message: 'Which team member to add?',
            choices: [
                'Add engineer',
                'Add intern',
                'I\'m finished!'
            ],
        })
        .then((answers) => {
            if (answers.action == 'Add engineer') {
                addEngineer();
            } else if (answers.action == 'Add intern') {
                addIntern();
            } else {
                buildProfile(team);
            }
        });
}

startNewProfile();