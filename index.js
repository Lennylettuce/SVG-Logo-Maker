// packages
const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./Develop/Lib/prompt.js');
const fileName = "./Examples/logo.svg";
const shapeBuild = require('./Develop/Lib/shapebuild.js');


function logoMaker(response) {
    const logo = shapeBuild(response);
    fs.writeFile(fileName, logo, ()=> console.log('Generated logo.svg!'));
}


function init() {
    inquirer 
    .prompt(questions)
    .then((response) => {
         logoMaker(response);
        })
    .catch(err => {
            console.log(err)
        });
}


init();



