let request = new XMLHttpRequest();
let requestURL = "https://api.chucknorris.io/jokes/random";

request.onreadystatechange = function() {
    let object = JSON.parse(request.response);
    if (this.readyState === 4 && this.status === 200) {
        displayData();
    }

    function displayData() {
        document.querySelector('.joke p').innerHTML = object.value;
    }

};

request.open("GET", requestURL, true);
request.send();







