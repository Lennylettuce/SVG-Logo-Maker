// packages
const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./Lib/shapes.js');
const questions = require('./Lib/prompt.js');
const fileName = "./examples/logo.svg";

function shapebuild(response) {

    if (response.shape === 'Circle') {
        let userInput = new Circle (response.shapeColor, response.text, response.textColor)
        return userInput.renderSvg()
    }

    if (response.shape === 'Square') {
        let userInput = new Square (response.shapeColor, response.text, response.textColor)
        return userInput.renderSvg()
    }

    if (response.shape === 'Triangle') {
        let userInput = new Triangle (response.shapeColor, response.text, response.textColor)
        return userInput.renderSvg()
    }
};

function logoBuild(response) {
    const svgBuild = shapeBuild(response);
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


//GIVEN a command-line application that accepts user input
//WHEN I am prompted for text
//THEN I can enter up to three characters(DONE)
//WHEN I am prompted for the text color
//THEN I can enter a color keyword (OR a hexadecimal number)(DONE)
//WHEN I am prompted for a shape
//THEN I am presented with a list of shapes to choose from: circle, triangle, and square(DONE)
//WHEN I am prompted for the shape's color
//THEN I can enter a color keyword (OR a hexadecimal number)(DONE)
//WHEN I have entered input for all the prompts
//THEN an SVG file is created named `logo.svg`
//AND the output text "Generated logo.svg" is printed in the command line(DONE)
//WHEN I open the `logo.svg` file in a browser
//THEN I am shown a 300x200 pixel image that matches the criteria I entered()

