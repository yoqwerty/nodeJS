console.log("Client side Javascript is loaded!")

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    //prevent browser from reloading and erase our input in form
    e.preventDefault();

    const location = search.value;
    messageOne.textContent = 'Loading...';
    
    // to clear the previously set values
    messageTwo.textContent = '';

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if(data.error){
                messageOne.textContent = data.error;
                return;
            }
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecastData;
        })
    });
});