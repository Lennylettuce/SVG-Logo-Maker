//write to svg file
const writeFile = data => {
    fs.writeFile('generated.svg', data, err => {
        if(err) {
            console.log(err);
        } else {
            console.log('Success!')
        }
    })
};