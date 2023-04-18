// packages
const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./Develop/Lib/prompt.js');
const fileName = "./Examples/logo.svg";
const shapebuild = require('./Develop/Lib/shapebuild.js');


function logoBuild(data) {
    const svg = shapebuild(data);
    fs.writeFile(fileName, svg, ()=> console.log('Generated logo.svg'));
}


function init() {
    inquirer 
    .prompt(questions)
    .then((data) => {
        logoBuild(data);
        })
    .catch(err => {
            console.log(err)
        });
}


init();



