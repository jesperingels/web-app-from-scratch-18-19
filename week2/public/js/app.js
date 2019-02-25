/*******************************
 * Create Modules
 * Use Arrow Functions
 */


(() => {

    const api = {
        // Set base URL for dynamic link
        solveUrl:(ID)=>{
          return `https://swapi.co/api/${ID}`
        }
    };

    const getData = {
        people:async ()=>{
            const a = await getData.checkExisting('people');
            render.people(a,'people')

        },

        planets:async ()=> {
            const a = await getData.checkExisting('planets');
            render.people(a,'planets')
        },

        species:async ()=> {
            const a = await getData.checkExisting('species');
            render.people(a,'species')
        },

        starships:async ()=> {
            const a = await getData.checkExisting('starships');
            render.people(a,'starships')
        },

        // Set function to be asynchronous
        checkExisting:async (string)=>{
            // Get item from local storage
            let data = window.localStorage.getItem(`swapi-${string}`);

            // check if the item exists
            if (!data) {
                // Set data with URL from api.solveUrl
                data = await getData.req(api.solveUrl(string));
                // Save in localStorage as string
                window.localStorage.setItem(`swapi-${string}`, JSON.stringify(data));
                console.log('new');
                return data;
            } else {
                console.log('existing');
                return JSON.parse(data);
            }
        },

        req: (url)=> {
            console.log(url);
            // Fetch and return data
            return new Promise((resolve, reject) => {
                fetch(url)
                    .then(res => res.json())
                    .then(res => resolve(res))
                    .catch(error => reject(error))
            })
        }
    };

    const render = {
        people: (data, id) => {
            console.log(data);

            document.querySelector('.wrapper').classList.add('d-none');
            data.results.forEach( prop => {
                const elWrapper = document.getElementById('content');
                const elPar = document.createElement("p");
                elPar.textContent = prop.name;
                elWrapper.appendChild(elPar);
            });
        }
    };


    const navigation = {
        init:()=>{
            let navi = document.querySelectorAll('.wrapper > *');

            navi.forEach(navEl =>{
                navEl.addEventListener('click',()=>{
                    document.getElementById('content').classList.remove('d-none');
                    navigation.prev();
                    switch(navEl.id){
                        case 'people':
                            getData.people();
                            break;
                        case 'starships':
                            getData.starships();
                            break;
                        case 'planets':
                            getData.planets();
                            break;
                        case 'species':
                            getData.species();
                            break;
                        default:
                            console.log('unknown');
                            break;

                    }
                })
            })
        },

        prev: () => {
            const backButton = document.getElementById('back');
            backButton.style.display = 'block';
            const dataContent = document.getElementById('content');
            while (dataContent.firstChild){
                dataContent.removeChild(dataContent.firstChild);
            }
            backButton.addEventListener('click', () => {
                dataContent.classList.add('d-none');
                document.querySelector('.wrapper').classList.remove('d-none');
            })
        }
    };
    // console.log(getData)
    navigation.init();

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


})();


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














