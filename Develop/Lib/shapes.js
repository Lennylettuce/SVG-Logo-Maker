//make const for shapes, parent-then class for each shape after to differentiate code for each shape
    //put all similar code in parent class so the rest can inherit and you dont have to rewrite code

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderColor(color) {
    let badge = '';
    if (color != 'None'){
      badge = '![License Badge](https://shields.io/badge/license-' + color + '-blue)';
    }
    return badge;
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(shapes) {
    let link;
    
    switch(shapes) {
      case 'MIT':
        link = 'https://mit-license.org/';
        break;
      case 'Apache':
        link = 'https://apache.org/licenses/LICENSE-2.0.html';
        break;
      case 'BSD':
        link = 'http://opensource.org/licenses/BSD-3-Clause';
        break;
      case 'GPL':
        link = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
        break;
      default:
        link = '';
        break;
    }
    return link;
  }
  
  // TODO: Create a function that returns the text
  // If there is no text, return an empty string

  function renderTextSection(text) {
    let section = '';
  
    if(text != 'None'){
      section += text;
    }
    return section;
  }
  
  // TODO: Create a function to generate SVG file (no append write new file every time, check week 11 day 2 work)
    // this function will work with the code for shape/color/text to make the logos from user input
  
  function generateSvg(data) {
    //edit this function to generate the logo, use shapes code, color code, etc.. change sections too
    const svgLogo = ['Description', 'Installation', 'Usage', 'Contributing', 'Tests', 'LIcense', 'Questions'];
  
    let svgCode = '#' + data.title + '\n';
  
    svgCode += renderLicenseBadge(data.license) + '\n';
  
    svgCode += '## Table of Contents\n';
    for (let i=0; i<svgLogo.length; i++) {
      if(! (svgLogo[i] === 'License' && data.license === 'None')){
        svgCode += i+1 + '. [' + svgLogo[i] + '](#' + svgLogo[i][0].toLowerCase() + svgLogo[i].substring(1) + ')\n';
      }
    }
    svgCode += '\n';
  
    //description 
    svgCode += '##' + svgLogo[0] + '\n';
    svgCode += data.description + '\n';
  
    //installation
    svgCode += '##' + svgLogo[1] + '\n';
    svgCode += data.install + '\n';
  
    //usage
    svgCode += '##' + svgLogo[2] + '\n';
    svgCode += data.usage + '\n';
  
    //contribution
    svgCode += '##' + svgLogo[3] + '\n';
    svgCode += data.contributors + '\n';
  
    //testing
    svgCode += '##' + svgLogo[4] + '\n';
    svgCode += data.test + '\n';
  
    //license
    svgCode += renderTextSection(data.license) + '\n';
  
    //questions
    svgCode += '##' + svgLogo[6] + '\n';
    svgCode += 'Checkout other projects [HERE](https://github.com/' + data.username + ') on Github \n';
    svgCode += 'Direct any questions to ' + data.email + '. \n';
  
    return svgCode;
  
  }
  
  module.exports = generateSvg;