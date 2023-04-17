const fs = require('fs');
   
   class Shapes {
     constructor(text, color, shapeColor) {
       this.text = text;
       this.color = color;
       this.shapeColor = shapeColor;
     }
   }
   
   class Circle extends Shapes {
     constructor(text, color, bkgndColor) {
       super(text, color, bkgndColor);
     }
   
     renderSvg(path) {
       const circle = `<svg version="1.1"
       width="300" height="200"
       xmlns="http://www.w3.org/2000/svg">
   
      <circle cx="150" cy="100" r="80"
      fill="${this.shapeColor}" />
   
      <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
   
    </svg>`;
   
       return new Promise((res, rej) => {
        fs.writeFile(path, circle, (err) => {
            if (err) {
                rej(err);
            } else {
                res();           
            }         
        });
    });
}
}

class Square extends Shapes{
    constructor(text, color, bkgndColor) {
        super(text, color, bkgndColor);
    }
    renderSvg(path) {
        const square = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
       <rect x="50" width="200" height="200" 
       fill="${this.shapeColor}" />
    
       <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
    
     </svg>`;
    
        return new Promise((res, rej) => {
         fs.writeFile(path, square, (err) => {
             if (err) {
                 rej(err);
             } else {
                 res();           
             }         
         });
     });
 }
}
class Triangle extends Shapes{
    constructor(text, color, bkgndColor) {
        super(text, color, bkgndColor);
    }
    renderSvg(path) {
        const triangle = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
       <path d="M 150 30 L 270 170 L 30 170 Z"
       fill="${this.shapeColor}" />
    
       <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
    
     </svg>`;
    
        return new Promise((res, rej) => {
         fs.writeFile(path, triangle, (err) => {
             if (err) {
                 rej(err);
             } else {
                 res();           
             }         
         });
     });
 }
}

module.exports = { Shapes: Shapes, Circle, Square, Triangle };