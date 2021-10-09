//alternative to axios(preferable) or fetch (HTTP request clientt)
const request = require('request');

const geocode = (location, callback) => {
    const encodedLocation = encodeURIComponent(location);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedLocation}.json?access_token=pk.eyJ1Ijoic3NhbmRodTEiLCJhIjoiY2t1aHk4amYyMDMxbDJubzh5NmM4MjViaiJ9.wsec1QbUY3_b_B1iSo9UqQ&limit=1`;
    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to service');
        } else if (body.features.length == 0 ) {
            callback(`Error: try another search, unable to find location`);
        } else {
            const data = body.features[0];
            callback(undefined, {
                longitude: data.center[0],
                latitude: data.center[1],
                location: data.place_name
            });
        }
    });
}

module.exports = geocode;