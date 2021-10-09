const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

forecast(53.5461, -113.49, (error, data) => {
    console.log(error);
    console.log(data);
})

geocode('Philadelphia', (error, data) => {
    console.log(error);
    console.log(data);
})

 