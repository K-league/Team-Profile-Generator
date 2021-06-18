const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")

const OUTPUT_DIR = path.resolve(__dirname, "output")//
const outputPath = path.join(OUTPUT_DIR, "team.html")
const render = require("./src/pagetemp.js")//render req page temp output to team.html

//creat fuction
//create team
//manager