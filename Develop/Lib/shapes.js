class Shapes {
    constructor(text, textColor, shapeColor) {
       this.text = text;
       this.textColor = textColor;
       this.shapeColor = shapeColor;
    }
}
   
class Circle extends Shapes {
    constructor(text, textColor, shapeColor) {
       super(text, textColor, shapeColor);
    }
   
    renderSvg() {

       `<svg version="1.1"
       width="300" height="200"
       xmlns="http://www.w3.org/2000/svg">
   
      <circle cx="150" cy="100" r="80"
      fill="${this.shapeColor}" />
   
      <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
   
     </svg>`
    };
}

class Square extends Shapes{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    renderSvg() {
     `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
       <rect x="50" width="200" height="200" 
       fill="${this.shapeColor}" />
    
       <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
     </svg>`
    };
}

class Triangle extends Shapes{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    renderSvg() {
         `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
       <path d="M 150 30 L 270 170 L 30 170 Z"
       fill="${this.shapeColor}" />
    
       <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
     </svg>`
    
    };
}


module.exports = { Shapes: Shapes, Circle, Square, Triangle };