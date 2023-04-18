// packages
const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./Lib/prompt.js');
const fileName = "./Examples/logo.svg";
const shapes = require('./Lib/shapebuild.js');


function logoBuild(response) {
    const svgBuild = shapes(response);
    fs.writeFile(fileName, svgBuild, ()=> console.log('Generated logo.svg'));
}


function init() {
    inquirer 
    .prompt(questions)
    .then((response) => {
        logoBuild(response);
        })
    .catch(err => {
            console.log(err)
        });
}

init();



