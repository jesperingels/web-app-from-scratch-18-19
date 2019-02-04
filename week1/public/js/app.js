let request = new XMLHttpRequest();
// let requestURL = "https://api.chucknorris.io/jokes/random";

let requestURL = "https://swapi.co/api/people";

// Laad een API in met veel data, Maak hier een overzicht van waarin je kunt doorklikken.

request.onreadystatechange = function() {
    let object = JSON.parse(request.response);
    if (this.readyState === 4 && this.status === 200) {
        displayData();

        console.log(request.response);
    }

    function displayData() {
        document.querySelector('.joke p').innerHTML = object.count;
    }

};

request.open("GET", requestURL, true);
request.send();







