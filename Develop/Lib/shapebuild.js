const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');


function shapeBuild(response) {

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

module.exports = shapeBuild;