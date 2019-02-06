const request = new XMLHttpRequest();
const requestURL = "https://swapi.co/api/people";

/* Laad een API in met veel data, Maak hier een overzicht van waarin je kunt doorklikken.
 * hiervoor is het concept routing nodig
 */

request.addEventListener('load', displayData);

function displayData() {

    if (this.status < 400 && this.status >= 200) {

        const objects = JSON.parse(this.response);

        // for (let i = 0; i < object.results.length; i++) {

        const SWName = objects.results.map(value => {

            const elWrapper = document.querySelector('.wrapper');
            const elDiv = document.createElement("div");

            elDiv.textContent = value.name;

            elWrapper.appendChild(elDiv);

        });
    }
}

request.open("GET", requestURL, true);
request.send();







