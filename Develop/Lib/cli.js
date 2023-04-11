//user prompts in this file
const questions = [
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
    {
        type: 'input',
        name: 'text',
        message: 'What text do you want in your image?',
        validate: theInput => {
            if(theInput){
                return true;
            } else {
                console.log('Please add text to your image');
                return false;
            }
        }
    }
]
