const Shapes = require('./shapes.js')

class Circle extends Shapes {
    constructor(text, textColor, shapeColor) {
       super(text, textColor, shapeColor);
    }
   
    render() {

       `<svg version="1.1"
       width="300" height="200"
       xmlns="http://www.w3.org/2000/svg">
   
      <circle cx="150" cy="100" r="80"
      fill="${this.shapeColor}" />
   
      <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
   
     </svg>`
    };
}

module.exports = Circle;