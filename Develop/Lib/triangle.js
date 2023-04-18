const Shapes = require('./shapes.js')

class Triangle extends Shapes{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
         `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
       <path d="M 150 30 L 270 170 L 30 170 Z"
       fill="${this.shapeColor}" />
    
       <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
     </svg>`
    
    };
}

module.exports = Triangle;