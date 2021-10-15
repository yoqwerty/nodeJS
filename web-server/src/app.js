const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

//Defining customised path for public static folder for Express config
const publicDirectoryPath = path.join(__dirname, '../public');


//Setting up static directory to serve
//To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use(express.static(publicDirectoryPath));

const partialsPath = path.join(__dirname, '../templates/partials');
hbs.registerPartials(partialsPath);

//Defining a customised path for views. In case u don't add a customised path, express by default will for 'views' directory for hbs files
const viewsPath = path.join(__dirname, '../templates/views');
app.set('views', viewsPath);


//View engines are useful for rendering web pages. There are many view engines available in the market like Mustache, Handlebars
// The view engine is responsible for creating HTML from your views. Views are usually some kind of mixup of HTML and a programming language
app.set('view engine', 'hbs');


//using hbs files to render dynamic content. Express will look inside 'views' directory for 'index' hbs file
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Supreet'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Supreet'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Supreet'
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Supreet',
        errorMessage: 'Help article not found'
    })
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is raining'
    });
})

// * -> wildcard (i.e. everything is a match)
//if none of the above routes match, it will land up here
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Supreet',
        errorMessage: 'Page not found'
    })

})
app.listen(3000, () => {
    console.log('Server is up on port 3000');
})