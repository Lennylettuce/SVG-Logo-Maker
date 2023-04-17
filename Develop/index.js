// packages
const fs = require('fs');
const inquirer = require('inquirer');
const colorString = require('color-string');
const shapes = require('./Lib/shapes.js');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter no more than three letters for your logo.',
        validate: theInput => {
            if(/^[a-zA-Z0-9]+$/.test(theInput) && theInput.length <= 3 && theInput.length >= 1){
                //valid chars, test and length between 1 and 3
                return true;
            } else {
                return 'Only three characters allowed per logo.';
            }
        }
    },
    {
        type: 'input',
        name: 'color',
        message: 'Please enter a text color for your logo.',
        validate: theInput => {
            if (/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(theInput)) {
                return true;
              } else if (/^[a-zA-Z]+$/.test(theInput)) {
                const colorObj = colorString.get(theInput);
                if (colorObj !== null) {
                    return true;
                }
              } else {
                return 'Please enter a valid color name OR hex code.';
              }
        },
        filter: theInput => {
            return theInput.toLowerCase();
        }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape',
        choices: ['circle', 'triangle', 'square'],
        default: ['circle'],
        validate: theInput => {
            if (theInput){
                return true;
            } else {
                return 'Please choose a shape for your logo.';
            }
        }
    },
    {
        type: 'input',
        name: 'color',
        message: 'Please enter shape color for your logo.',
        validate: theInput => {
            if (/^[a-zA-Z]+$/.test(theInput) || /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(theInput)) {
                const colorObj = colorString.get(theInput);
                if (colorObj !== null) {
                    return true;
                } else {
                    return 'Please enter a valid color name OR hex-code.';
                }
              }
        },
        filter: theInput => {
            return theInput.toLowerCase();
        }
    }
]

//write to svg file
const writeFile = data => {
    fs.writeFile('logo.svg', data, err => {
        if(err) {
            console.log(err);
        } else {
            console.log('Generated logo.svg');
        }
    })
};

//init function
function init(){
    inquirer.prompt(questions)
    .then (answers => writeFile(renderSvg(answers)));
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

