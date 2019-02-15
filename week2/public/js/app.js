/******
 * Create Modules
 * Use Arrow Functions
 */

// Data controller module
const dataCtrl = {

    // DRY precaution
    DOMStrings: {
        wrapper: '.wrapper'
    },


    displayData :  function () {

        // Check if data comes in
        if (this.status < 400 && this.status >= 200) {

            // Select and hide: 'Loading...'
            const loading = document.getElementById('loader');
            loading.classList.add('d-none');

            // Parse the returned string to JSON
            const object = JSON.parse(this.response);

            console.log(object.results);

            // For each item in the array show the name
            object.results.forEach( prop => {
                const elWrapper = document.querySelector(dataCtrl.DOMStrings.wrapper);
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
};

// const templating = ( (data) => {
//
//     let peopleTemp = " <ul>{{#each data.object.results}}</ul> "
//     console.log(data.objec)
//
// })(dataController);

// // Module to get the data
const getData = {

    people: function () {
        const reqURL = "https://swapi.co/api/people";
        const request = new XMLHttpRequest();

        request.addEventListener('load', dataCtrl.displayData);

        request.open("GET", reqURL, true);
        request.send();
    },

    species: function () {
        const reqURL = "https://swapi.co/api/species";
        const request = new XMLHttpRequest();

        request.addEventListener('load', dataCtrl.displayData);

        request.open("GET", reqURL, true);
        request.send();
    },

    starships: function () {
        const reqURL = "https://swapi.co/api/starships";
        const request = new XMLHttpRequest();

        request.addEventListener('load', dataCtrl.displayData);

        request.open("GET", reqURL, true);
        request.send();
    },

    planets: function () {
        const reqURL = "https://swapi.co/api/planets";
        const request = new XMLHttpRequest();

        request.addEventListener('load', dataCtrl.displayData);

        request.open("GET", reqURL, true);
        request.send();
    }

};

routie({
    'people': function() {
        getData.people();
    },

    'species': function() {
        getData.species();
    },

    'starships': function() {
        getData.starships();
    },

    'planets': function() {
        getData.planets();
    }

});

routie();







