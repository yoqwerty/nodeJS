const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=724c79c249e697493184954c6e474fff&query=' + lat + ',' + long + '&units=f';
    console.log(url);
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service');
        } else if (response.body.error) {
            const error = JSON.stringify(response.body.error);
            callback(`Error: ${error}`);
        } else {
            const data = response.body.current;
            callback(undefined, `${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out. There is ${data.precip}% chance of rain`);
        }   
    });
}

module.exports = forecast;