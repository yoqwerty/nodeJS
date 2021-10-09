//Exploring HTTP w/o using libraries

// fetch() API is used on client side javascript, but in nodeJs we have http or https modules

const http = require('http');
const url = `http://api.weatherstack.com/current?access_key=724c79c249e697493184954c6e474fff&query=37.7749,%20-122.4194`;

const request = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString();
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })
})

request.end();