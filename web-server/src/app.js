const path = require('path');
const express = require('express');

// console.log(__dirname);
// console.log(path.join(__dirname, '../public'));

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');

//To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use(express.static(publicDirectoryPath));

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is raining'
    });
})

app.listen(3000, () => {
    console.log('Server is up on port 3000');
})