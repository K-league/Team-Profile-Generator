const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")

const getQuestions = (role, extraQuestion) => {
    return [{
        name: 'name',
        type: 'input',
        message: `What is the ${role}'s name?`,
    },
    {
        name: 'employee_id',
        type: 'input',
        message: `What is the ${role}'s employee id?`,
    },
    {
        name: 'email',
        type: 'input',
        message: `What is the ${role}'s email?`,
    },
        extraQuestion
    ]
}


const addManager = (callback) => {
    //I am prompted to enter the team manager’s name, employee ID, email address, and office number
    return inquirer
        .prompt(getQuestions("Manager", {
            name: 'office_number',
            type: 'input',
            message: 'What is the Manager\'s Office number?',
        }))
        .then((answers) => {
            let manager = new Manager(answers.name, answers.employee_id, answers.email, answers.officeNumber);
            callback([manager]);
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

const addEngineer = (team, callback) => {
    //I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
    return inquirer
        .prompt(getQuestions("Engineer", {
            name: 'github',
            type: 'input',
            message: 'What is the Engineer\'s github?',
        }))
        .then((answers) => {
            let engineer = new Engineer(answers.name, answers.employee_id, answers.email, answers.github);
            team.push(engineer);
            callback(team);
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

const addIntern = (team, callback) => {
    //I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
    return inquirer
        .prompt(getQuestions("Intern", {
            name: 'school',
            type: 'input',
            message: 'What is the intern\'s school?',
        }))
        .then((answers) => {
            let intern = new Intern(answers.name, answers.employee_id, answers.email, answers.school);
            team.push(intern);
            callback(team);
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

module.exports = {
    addEngineer,
    addIntern,
    addManager
}
