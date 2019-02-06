/***********************************
 * First attempt
 */

/*
const request = new XMLHttpRequest();
// let requestURL = "https://api.chucknorris.io/jokes/random";

const requestURL = "https://swapi.co/api/people";

request.addEventListener('load', displayData);

function displayData() {

    if (this.status < 400 && this.status >= 200) {
         console.log(this);

        const object = JSON.parse(this.response);

        for (let i = 0; i < object.results.length; i++) {

            let elWrapper, elDiv;

            elWrapper = document.querySelector('.wrapper');
            elDiv = document.createElement("div");

            elDiv.textContent += object.results[i].name;

            elWrapper.appendChild(elDiv);

        }
    }
}


request.open("GET", requestURL, true);
request.send();
 */



/*****************************
 * Learnt about Array.map();
 * Corrected let and const
 * Put code inside IIFE
 */

(function () {

    const request = new XMLHttpRequest();
    const requestURL = "https://swapi.co/api/people";

    request.addEventListener('load', displayData);

    function displayData() {

        if (this.status < 400 && this.status >= 200) {



            const objects = JSON.parse(this.response);

            console.log(objects.results);

            // for (let i = 0; i < object.results.length; i++) {

            objects.results.map(value => {

                const elWrapper = document.querySelector('.wrapper');
                const elDiv = document.createElement("div");

                elDiv.textContent = value.name;

                elWrapper.appendChild(elDiv);

            });
        }
    }

    request.open("GET", requestURL, true);
    request.send();

})();









