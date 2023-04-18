const Shapes = require('./shapes.js')

class Triangle extends Shapes{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    };
    render() {
        return`<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
        <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
    
       <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
     </svg>`
    
    };
};

module.exports = Triangle;