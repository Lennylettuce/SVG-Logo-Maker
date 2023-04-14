//user prompts in this file
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter no more than three letters for your logo.',
        validate: theInput => {
            if(theInput){
                //add code for the three chars exception
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
