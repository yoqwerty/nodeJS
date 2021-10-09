//alternative to axios(preferable) or fetch (HTTP request clientt)
const request = require('request');

const geocode = (location, callback) => {
    const encodedLocation = encodeURIComponent(location);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedLocation}.json?access_token=pk.eyJ1Ijoic3NhbmRodTEiLCJhIjoiY2t1aHk4amYyMDMxbDJubzh5NmM4MjViaiJ9.wsec1QbUY3_b_B1iSo9UqQ&limit=1`;
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to service');
        } else if (response.body.features.length == 0 ) {
            callback(`Error: try another search, unable to find location`);
        } else {
            const data = response.body;
            console.log(`Coordinates are ${data.features[0].center}`);
            callback(undefined, {
                latitude: data.features[0].center[0],
                longitude: data.features[0].center[1]
            });
        }
    });
}

module.exports = geocode;