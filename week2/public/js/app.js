/*****************************
 * Learnt about Array.map();
 * Corrected let and const
 * Put code inside IIFE
 */


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


