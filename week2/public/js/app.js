/*******************************
 * Create Modules
 * Use Arrow Functions
 */


// (() => {

    const api = {
        solveUrl:(ID)=>{
          return `https://swapi.co/api/${ID}`
        }
    };

    const getData = {
        people:async()=>{
            let a = await getData.checkExisting('people');
            render.people(a)
        },

        starships:()=> {
            getData.checkExisting('starships')
        },

        checkExisting:async (string)=>{
            let data = window.localStorage.getItem(`swapi-${string}`);
            if (!data) {
                data = await getData.req(api.solveUrl(string));
                window.localStorage.setItem(`swapi-${string}`, JSON.stringify(data));
                console.log('new');
                return data;
            } else {
                console.log('existing');
                return JSON.parse(data);
            }
        },

        req: (url)=>{
        console.log(url);
        return new Promise(resolve =>{
            fetch(url)
                .then(res => res.json())
                .then(response => resolve(response))
        })
        }
    };

    const render = {
        people: data => {
            console.log(data);
        }
    };

    // console.log(getData)
    getData.people();


    // Data controller module
//     const dataCtrl = {
//
//         // DRY precaution
//         DOMStrings: {
//             wrapper: '.wrapper'
//         },
//
//
//         displayData :  function () {
//
//             // Check if data comes in
//             if (this.status < 400 && this.status >= 200) {
//
//                 // Select and hide: 'Loading...'
//                 const loading = document.getElementById('loader');
//                 loading.classList.add('d-none');
//
//                 // Parse the returned string to JSON
//                 const obj = JSON.parse(this.response);
//
//                 console.log(obj.results);
//
//                 // For each item in the array show the name
//                 obj.results.forEach( prop => {
//                     const elWrapper = document.querySelector(this.DOMStrings.wrapper);
//                     const elDiv = document.createElement("p");
//
//                     elDiv.textContent = prop.name;
//
//                     elWrapper.appendChild(elDiv);
//                 });
//
//                 routie();
//
//             }
//
//             // If data doesn't come in, show error
//             else {
//                 document.body.textContent = 'Error: Help me Obi-wan Kenobi, you\'re my only hope...';
//             }
//
//         }
//     };
//
//     const templating = {
//         peopleTemp: "<ul>{{#each dataCtrl.obj.results}}<li>{{name}}{{/each}}</ul>",
//     };
//
// // // Module to get the data
//     const getData = {
//
//         people: function () {
//             const reqURL = "https://swapi.co/api/people";
//             const request = new XMLHttpRequest();
//
//             request.addEventListener('load', dataCtrl.displayData);
//
//             request.open("GET", reqURL, true);
//             request.send();
//         },
//
//         species: function () {
//             const reqURL = "https://swapi.co/api/species";
//             const request = new XMLHttpRequest();
//
//             request.addEventListener('load', dataCtrl.displayData);
//
//             request.open("GET", reqURL, true);
//             request.send();
//         },
//
//         starships: function () {
//             const reqURL = "https://swapi.co/api/starships";
//             const request = new XMLHttpRequest();
//
//             request.addEventListener('load', dataCtrl.displayData);
//
//             request.open("GET", reqURL, true);
//             request.send();
//         },
//
//         planets: function () {
//             const reqURL = "https://swapi.co/api/planets";
//             const request = new XMLHttpRequest();
//
//             request.addEventListener('load', dataCtrl.displayData);
//
//             request.open("GET", reqURL, true);
//             request.send();
//         }
//
//     };
//
//     routie({
//         'people': function() {
//             getData.people();
//             let template = Handlebars.compile(templating.peopleTemp);
//
//             let data = template(obj.results);
//             document.querySelector('main').innerHTML += data;
//         },
//
//         'species': function() {
//             getData.species();
//         },
//
//         'starships': function() {
//             getData.starships();
//         },
//
//         'planets': function() {
//             getData.planets();
//         }
//
//     });


// })();


// Promise practice

// const getIDs = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve([765, 8098, 708, 344]);
//     }, 1500);
// });
//
// getIDs
//     .then(IDs => {
//     console.log(IDs);
//     })
//     .catch(error => {
//         console.log("error");
//     });


















