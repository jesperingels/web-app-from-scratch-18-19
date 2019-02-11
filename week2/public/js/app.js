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
/*
const getData = (function () {

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
*/

/******
 * Create Modules
 * Use Arrow Functions
 */

// Data controller module
const dataController = ( () => {

    // DRY precaution
    const DOMStrings = {
        wrapper: '.wrapper',
    };

    return {

        displayData :  function () {

            // Check if data comes in
            if (this.status < 400 && this.status >= 200) {

                // Select and hide: 'Loading...'
                const loading = document.getElementById('loader');
                loading.classList.add('d-none');

                const object = JSON.parse(this.response);

                console.log(object.results);

                object.results.forEach( prop => {
                    const elWrapper = document.querySelector(DOMStrings.wrapper);
                    const elDiv = document.createElement("p");

                    elDiv.textContent = prop.name;

                    elWrapper.appendChild(elDiv);
                });

            }
            // If data doesn't come in, show error
            else {
                document.body.textContent = 'Error: Help me Obi-wan Kenobi, you\'re my only hope...';
            }

        }
    }
})();

// // Module to get the data
const getData = (dataCtrl => {

    function people() {
        const reqURL = "https://swapi.co/api/people";
        const request = new XMLHttpRequest();

        request.addEventListener('load', dataController.displayData);

        request.open("GET", reqURL, true);
        request.send();
    }

    function species() {
        const reqURL = "https://swapi.co/api/species";
        const request = new XMLHttpRequest();

        request.addEventListener('load', dataController.displayData);

        request.open("GET", reqURL, true);
        request.send();
    }

    function starships() {
        const reqURL = "https://swapi.co/api/starships";
        const request = new XMLHttpRequest();

        request.addEventListener('load', dataController.displayData);

        request.open("GET", reqURL, true);
        request.send();
    }

    function planets() {
        const reqURL = "https://swapi.co/api/planets";
        const request = new XMLHttpRequest();

        request.addEventListener('load', dataController.displayData);

        request.open("GET", reqURL, true);
        request.send();
    }

    routie({
        'people': function() {
            people();
        },

        'species': function() {
            species();
        },

        'starships': function() {
            starships();
        },

        'planets': function() {
            planets();
        }

    });

    routie();

})(dataController);








