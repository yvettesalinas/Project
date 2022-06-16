var containersavedDatesEl = document.getElementById("saved-dates-container")
var ViewsavedDatesEl = document.getElementById("view-saved-dates")
var listsavedDatesEl = document.getElementById("saved-dates-list")
var savedDatesE1 = document.querySelector("#savedDates");

var yourDates = [];

let movieId = document.createElement('p');
// Fetches movie API, dont have as many daily fetches for this one so we won't call it until we need to
function movieApi() {
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fe7bdd69f0msh9594c83e6b599c0p1521a2jsn075065d4fdd0',
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
    };
    
    // adds preferred streaming service to 
    let service = $('#service-select').val();
    let genre = $('#genre-select').val();
    let movieUrl = `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=${service}&type=movie&genre=${genre}&page=1&output_language=en&language=en`;
    
    fetch(movieUrl, options)
        .then(function (response) {
            return response.json();
        })
        
        .then(function (data) {
            console.log(data);
            function showMovie(data) {
                // creating elements for cocktail card
                let movieNameEl = document.createElement('h3');
                let movieImgEl = document.createElement('img');
                let movieDescContainer = document.createElement('div');
                let movieDescTitle = document.createElement('h3');
                let movieDescEl = document.createElement('p');
                let movieCastContainer = document.createElement('div');
                let movieCastTitle = document.createElement('h3');
                let movieCastMembers = document.createElement('ul');
                const movieCard = $('#movie-container');

                for (let i = 0; i < 1; i++) {
                    const arrayMovie = Math.floor(Math.random() * data.results.length);
                    
                    console.log(arrayMovie);
                
            
                    // // setting text for cocktail elements
                    movieId = data.results[arrayMovie].imdbID;
                    movieNameEl.textContent = data.results[arrayMovie].title;
                    movieImgEl.src = data.results[arrayMovie].posterURLs['original'];
                    movieDescEl.textContent = data.results[arrayMovie].overview;
                    movieDescTitle.textContent = 'Description:'
                    movieCastTitle.textContent = 'Cast Members:'
                    

                    // setting class for movie elements
                    movieNameEl.className = 'card-header-title is-centered'
                    movieImgEl.className = 'card-image';
                    movieDescContainer.className = 'card-content';
                    movieDescTitle.className = 'card-header';
                    movieDescEl.className = 'card-content';
                    movieCastContainer.className = 'card-footer';
                    movieCastTitle.className = 'card-content';
                    movieCastMembers.className = 'content';
                    

                    // appending elements to html container
                    // movieCard.innerHTML("");
                    movieCard.append(movieNameEl);
                    movieCard.append(movieImgEl);
                    movieCard.append(movieDescContainer);
                    movieCard.append(movieCastContainer);
                    movieDescContainer.append(movieDescTitle);
                    movieCastContainer.append(movieCastTitle);
                    movieDescContainer.append(movieDescEl);
                    movieCastContainer.append(movieCastMembers);

                    for (let i = 0; i < data.results[arrayMovie].cast.length; i++) {
                        let movieCast = document.createElement('li');
                        movieCast.textContent = data.results[arrayMovie].cast[i];
                        movieCastMembers.append(movieCast);
                    }
                }
            };
            showMovie(data);
        });       

};

// Fetches cocktail api
let drinkId = document.createElement('p');
function cocktailApi() {
    
    const optionsB = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a8e483976dmshec4d2742c1d95c9p1e2f36jsn301a53d09a19',
            'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
        }
    };
    
    fetch('https://the-cocktail-db.p.rapidapi.com/random.php', optionsB)
        .then(function (response) {
            return response.json();
        })
        
        .then(function (data) {
            console.log(data);
            function showDrink(data) {
                // creating elements for cocktail card
                let drinkNameEl = document.createElement('h3');
                let drinkImgEl = document.createElement('img')
                let drinkIngredientsEl = document.createElement('ul');
                let drinkInstructionEl = document.createElement('p');
                let drinkIngredientsTitle = document.createElement('h3')
                let drinkInstructionsTitle = document.createElement('h3');
                let drinkCard = $('#cocktail-container');
                
            
                // // setting text for cocktail elements
                drinkNameEl.textContent = data.drinks[0].strDrink;
                drinkImgEl.src = data.drinks[0].strDrinkThumb;
                drinkInstructionEl.textContent = data.drinks[0].strInstructions;
                drinkId = data.drinks[0].idDrink;
                drinkIngredientsTitle = 'Ingredients:'
                drinkInstructionsTitle = 'Instructions:'

                // setting class for cocktail elements
                drinkNameEl.className = 'card-header-title is-centered';
                drinkImgEl.className = 'card-image';
                drinkInstructionEl.className = 'card-content';
                drinkIngredientsEl.className = 'card-footer';
                drinkInstructionsTitle.className = 'card-header';
                drinkIngredientsTitle.className = 'card-header';
                
                

                // appending elements to html container
                drinkCard.append(drinkNameEl);
                drinkCard.append(drinkImgEl);
                drinkCard.append(drinkIngredientsTitle);
                drinkCard.append(drinkIngredientsEl);
                drinkCard.append(drinkInstructionsTitle);
                drinkCard.append(drinkInstructionEl);

                // for loop to list out ingredients and measurements
                for(let i = 1; i < 16; i++) {
                    
                    if(data.drinks[0][`strIngredient${i}`]) {
                        let ingredientEl = document.createElement('li');
                            
                        ingredientEl.innerHTML = data.drinks[0][`strIngredient${i}`] + ' : ' + data.drinks[0][`strMeasure${i}`];
                        ingredientEl.className = 'card-footer-item';

                        
                        drinkIngredientsEl.append(ingredientEl)
                    };
                    
                };
            };
            showDrink(data);
        })
    
         
};



//mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#navbarExampleTransparentExample');

burgerIcon.addEventListener('click',() => {
    navbarMenu.classList.toggle('is-active');
});

$('#getDate').click(function() {
    movieApi();
    cocktailApi();
});


$('#savedDate').click(function() {
    localStorage.removeItem("listdata")

    let list = [];
    console.log(drinkId);
    list.push(movieId, drinkId);
    localStorage.setItem("listdata", list);
    console.log(list);
    const saveDateData = localStorage.getItem("listdata");
    console.log(saveDateData);

  });