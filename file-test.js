const fs = require("fs");

console.log('Leyendo README sincronamente')
const readmeData = fs.readFileSync('./README.md');
console.log('README leido sincronamente');
console.log(readmeData);

console.log('---------------------------');

console.log('Leyendo README asincronamente');
const readmeDataAsync = fs.readFile(
    './README.md',
    (err, data) => {
        if(err) throw err;

        console.log('Leido FINAL');
    }
 )

 console.log('README.me leido asincronamente');
































































