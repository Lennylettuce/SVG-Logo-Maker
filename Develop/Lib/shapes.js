const fs = require('fs');
   
   class Shapes {
     constructor(text, color, bkgndColor, border) {
       this.text = text;
       this.color = color;
       this.bkgndColor = bkgndColor;
       this.border = border;
     }
   }
   
   class Circle extends Shapes {
     constructor(text, color, bkgndColor, border) {
       super(text, color, bkgndColor, border);
     }
   
     renderSvg(path) {
       const circle = `<svg version="1.1"
       width="300" height="200"
       xmlns="http://www.w3.org/2000/svg">
   
      <circle cx="150" cy="100" r="80" ${this.border ? `stroke-width="3" stroke="${this.color}" ` : ''}
      fill="${this.bkgndColor}" />
   
      <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
   
    </svg>`;
   
       return new Promise((res, reject) => {
        fs.writeFile(path, circle, (err) => {
            if (err) {
                reject(err);
            } else {
                res();           
            }         
        });
    });
}
}

class Square extends Shapes{
    constructor(text, color, bkgndColor, border) {
        super(text, color, bkgndColor, border);
    }
    renderSvg(path) {
        const square = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
       <rect x="50" width="200" height="200" ${this.border ? `stroke-width="3" stroke="${this.color}" ` : ''}
       fill="${this.bkgndColor}" />
    
       <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
    
     </svg>`;
    
        return new Promise((res, reject) => {
         fs.writeFile(path, square, (err) => {
             if (err) {
                 reject(err);
             } else {
                 res();           
             }         
         });
     });
 }
}
class Triangle extends Shapes{
    constructor(text, color, bkgndColor, border) {
        super(text, color, bkgndColor, border);
    }
    renderSVG(path) {
        const triangle = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
       <path d="M 150 30 L 270 170 L 30 170 Z" ${this.border ? `stroke-width="3" stroke="${this.color}" ` : ''}
       fill="${this.bkgndColor}" />
    
       <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
    
     </svg>`;
    
        return new Promise((res, reject) => {
         fs.writeFile(path, triangle, (err) => {
             if (err) {
                 reject(err);
             } else {
                 res();           
             }         
         });
     });
 }
}

module.exports = { Shapes: Shapes, Circle, Square, Triangle };