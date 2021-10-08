const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=724c79c249e697493184954c6e474fff&query=37.7749,%20-122.4194&units=f';

request({ url, json: true }, (error, response) => {
    const data = response.body.current;
    console.log(`${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out. There is ${data.precip} % chance of rain`);
});

//Geocoding
const geocodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3NhbmRodTEiLCJhIjoiY2t1aHk4amYyMDMxbDJubzh5NmM4MjViaiJ9.wsec1QbUY3_b_B1iSo9UqQ&limit=1';

request({ url: geocodingUrl, json: true }, (error, response) => {
    const data = response.body;
    console.log(` coordinates are ${data.features[0].center}`);
});