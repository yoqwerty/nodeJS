const fs = require('fs');

// const book = {
//     title: 'qwerty',
//     author: 'ME'
// }

// const bookString = JSON.stringify(book); //json to json string
// console.log(bookString);

// const parsedData = JSON.parse(bookString); //json string to json obj
// console.log(parsedData.title);

//fs.writeFileSync('1-json.json', bookString);

const dataBuffer = fs.readFileSync('1-json.json');

const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

console.log(data.title);