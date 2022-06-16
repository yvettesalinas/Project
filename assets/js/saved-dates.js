function loadPostDates() {
    console.log(localStorage.listdata);
    const saveDateData = localStorage.getItem("listdata").split(',');
    console.log(saveDateData);

    const savedMovieId = saveDateData[0];
    const savedCocktailId = saveDateData[1];
    console.log(savedMovieId);

    function savedMovieApi() {
    
        const options1 = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'fe7bdd69f0msh9594c83e6b599c0p1521a2jsn075065d4fdd0',
                'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
            }
        };
        
        
        let savedMovieUrl = `https://streaming-availability.p.rapidapi.com/get/basic?country=us&imdb_id=${savedMovieId}&output_language=en`;
        
        fetch(savedMovieUrl, options1)
            .then(function (response) {
                return response.json();
            })
            
            .then(function (data) {
                console.log(data);
                function showSavedMovie(data) {
                    // creating elements for cocktail card
                    let savedMovieNameEl = document.createElement('h3');
                    let savedMovieImgEl = document.createElement('img');
                    let savedMovieDescContainer = document.createElement('div');
                    let savedMovieDescTitle = document.createElement('h3');
                    let savedMovieDescEl = document.createElement('p');
                    let savedMovieCastContainer = document.createElement('div');
                    let savedMovieCastTitle = document.createElement('h3');
                    let savedMovieCastMemebers = document.createElement('ul');
                    const savedMovieCard = $('#saved-movie-container');
    
                    
                
                    // // setting text for cocktail elements
                    savedMovieNameEl.textContent = data.title;
                    savedMovieImgEl.src = data.posterURLs['original'];
                    savedMovieDescEl.textContent = data.overview;
                    savedMovieDescTitle.textContent = 'Description:'
                    savedMovieCastTitle.textContent = 'Cast Members:'
                    

                    // setting class for movie elements
                    // savedMovieNameEl.classList.add('');
                    // savedMovieImgEl.classList.add('');
                    // savedMovieDescContainer.classList.add('');
                    // savedMovieDescTitle.classList.add('');
                    // savedMovieDescEl.classList.add('');
                    // savedMovieCastContainer.classList.add('');
                    // savedMovieCastTitle.classList.add('');
                    // savedMovieCastMemebers.classList.add('');
                    

                    // appending elements to html container
                    // savedMovieCard.innerHTML("");
                    savedMovieCard.append(savedMovieNameEl);
                    savedMovieCard.append(savedMovieImgEl);
                    savedMovieCard.append(savedMovieDescContainer);
                    savedMovieCard.append(savedMovieCastContainer);
                    savedMovieDescContainer.append(savedMovieDescTitle);
                    savedMovieCastContainer.append(savedMovieCastTitle);
                    savedMovieDescContainer.append(savedMovieDescEl);
                    savedMovieCastContainer.append(savedMovieCastMemebers);
                    console.log(savedMovieCard);
                    for (let i = 0; i < data.cast.length; i++) {
                        let savedMovieCast = document.createElement('li');
                        savedMovieCast.textContent = data.cast[i];
                        savedMovieCastMemebers.append(savedMovieCast);
                    }
                    
                };
                showSavedMovie(data);
            });       
    
    };
    savedMovieApi();
    
    // const savedDatesContainer = $('#savedDatesContainer');
    // const savedDateCard = document.createElement('div');
    // savedDateCard.innerHTML = localStorage.getItem("listdata");
    // savedDatesContainer.append(savedDateCard);
    
    
};

loadPostDates();