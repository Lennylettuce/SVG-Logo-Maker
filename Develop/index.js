// packages
const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./Lib/shapes.js');
const prompts = require('./Lib/cli.js');
const newFile = require('./Lib/svg.js');

//moved questions array to cli.js 

//cli used to store prompts, make sure to link all files so they can chat

// moved writefile to svg.js

function init(){
    inquirer.prompt(questions)
    .then (answers => writeFile(shapes.js(answers)))
}

init();

