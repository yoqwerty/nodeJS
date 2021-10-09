const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const locationFromArgs = process.argv[2];

if (!locationFromArgs){
    console.log("Please provide address");
} else {
    geocode(locationFromArgs, (error, {latitude, longitude, location} = {} ) => {
        if(error) {
            return console.log(error);
    } else {
            forecast(latitude,longitude, (error, forecastData) => {
                if (error) {
                    return console.log(error);
                } else {
                    console.log(forecastData);
                    console.log(location);
                }
            })
        }
    })
}


 