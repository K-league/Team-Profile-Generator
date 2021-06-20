const inquirer = require("inquirer")
const {addEngineer, addIntern, addManager} = require("./team_functions");
const path = require("path")
const fs = require("fs")

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html")
const render = require("./src/pagetemp.js");//render req page temp output to team.html


const buildProfile = (team) => {
    fs.writeFileSync(outputPath, render.generateHtml(team));
    console.log(`File written to ${outputPath}`);
    process.exit()
}

const buildTeam = (team) => {
    return inquirer
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
            console.log(answers.action);
            if (answers.action == 'Add engineer') {
                addEngineer(team, buildTeam);
            } else if (answers.action == 'Add intern') {
                addIntern(team, buildTeam);
            } else {
                buildProfile(team);
            }
        });
}

module.exports = {
    buildProfile,
    buildTeam
}

if (require.main === module) {
    addManager(buildTeam);
}
