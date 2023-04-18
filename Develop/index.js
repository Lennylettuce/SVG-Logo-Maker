// packages
const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./Lib/prompt.js');
const fileName = "./examples/logo.svg";
const shapesFunc = require('./Lib/shapebuild.js');


function logoBuild(response) {
    const svgBuild = shapesFunc(response);
    fs.writeFile(fileName, svgBuild, ()=> console.log('Generated logo.svg'));
}

// initialize, ask questions then createLogo using responses, catch any errors
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



