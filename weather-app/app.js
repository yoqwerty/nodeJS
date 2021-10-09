const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=724c79c249e697493184954c6e474fff&query=37.7749,%20-122.4194&units=f';

request({ url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service');
    } else if (response.body.error) {
        console.log(`Error: ${response.body.error}`);
    } else {
        const data = response.body.current;
        console.log(`${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out. There is ${data.precip}% chance of rain`);
    }
});

//Geocoding
const geocodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3NhbmRodTEiLCJhIjoiY2t1aHk4amYyMDMxbDJubzh5NmM4MjViaiJ9.wsec1QbUY3_b_B1iSo9UqQ&limit=1';

request({ url: geocodingUrl, json: true }, (error, response) => {
    if (error) {
        console.log(`Error: ${error}`);
    } else if (response.body.features.length == 0 ) {
        console.log(`Error: try another search, unable to find location`);
    } else {
        const data = response.body;
        console.log(`Coordinates are ${data.features[0].center}`);
    }
});

 