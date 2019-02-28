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
            render.item(a,'people')
        },

        planets:async ()=> {
            const a = await getData.checkExisting('planets');
            render.item(a,'planets')
        },

        species:async ()=> {
            const a = await getData.checkExisting('species');
            render.item(a,'species')
        },

        starships:async ()=> {
            const a = await getData.checkExisting('starships');
            render.item(a,'starships')
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
        item: (data, id) => {
            console.log(data);
            navigation.prev();

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

            // For each click on category element
            navi.forEach(navEl =>{
                navEl.addEventListener('click',() => {

                    document.querySelector('.wrapper').classList.add('d-none');
                    document.getElementById('content').classList.remove('d-none');
                    document.getElementById('back').style.display = 'block';
                })
            });

            const backButton = document.getElementById('back');
            const dataContent = document.getElementById('content');

            // Click on backbutton event
            backButton.addEventListener('click', () => {
                dataContent.classList.add('d-none');
                document.querySelector('.wrapper').classList.remove('d-none');
                backButton.style.display = 'none';
            })
        },

        prev: () => {
            const backButton = document.getElementById('back');
            backButton.style.display = 'block';
            const dataContent = document.getElementById('content');

            // Template engine part
            while (dataContent.firstChild) {
                dataContent.removeChild(dataContent.firstChild);
            }

        }
    };

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

})();














