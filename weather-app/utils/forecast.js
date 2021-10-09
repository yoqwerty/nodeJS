// Its a NPM library to make HTTP/HTTPS requests, u can also go with 'node-fetch' library. simply window.fetch() is a client-side availble module provided by javascript

const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=724c79c249e697493184954c6e474fff&query=' + lat + ',' + long + '&units=m'; //units=f for Fahrenheit, m for celcius see documentation of API
    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service');
        } else if (body.error) {
            const error = JSON.stringify(body.error);
            callback(`Error: ${error}`);
        } else {
            const data = body.current;
            callback(undefined, `${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out. There is ${data.precip}% chance of rain`);
        }   
    });
}

module.exports = forecast;