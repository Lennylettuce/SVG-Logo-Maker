// packages
const fs = require('fs');
const inquirer = require('inquirer');
const shape = require('./Lib/shapes.js');
const prompts = require('./Lib/cli.js');
const logo = require('./Lib/svg.js');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter no more than three letters for your logo.',
        validate: theInput => {
            if(theInput == 'bsh'){
                //add code for the three chars exception(see if == works)
                return true;
            } else {
                console.log('No more than three characters allowed');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'color',
        message: 'Please enter a color for your logo.',
        validate: theInput => {
            if(theInput){
                //add code for color
                return true;
            } else {
                console.log('Please enter a color keyword OR hexadecimal number');
                return false;
            }
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
                console.log('Please choose a shape');
                return false;
            }
        }
    },
]

//write to svg file
const writeFile = data => {
    fs.writeFile('logo.svg', data, err => {
        if(err) {
            console.log(err);
        } else {
            console.log('Success!')
        }
    })
};




//init function
function init(){
    inquirer.prompt(questions)
    .then (answers => writeFile(shape(answers)));
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
//AND the output text "Generated logo.svg" is printed in the command line
//WHEN I open the `logo.svg` file in a browser
//THEN I am shown a 300x200 pixel image that matches the criteria I entered

/*let svg = ""
svg += '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n'
svg += '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n'
svg += '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">\n'

for (let x = 0; x < 12; x++) {
    svg += `\t<circle cx="${centerX+(x*((radius*2)+5))}" cy="${centerY}" r="${radius}" style="${style}"/>\n`
}


svg += '</svg>'

fs.writeFile('testSVG.svg', svg, (err) => {  
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('SVG written!');
});*/