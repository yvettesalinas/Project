const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fe7bdd69f0msh9594c83e6b599c0p1521a2jsn075065d4fdd0',
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	}
};

fetch('https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&output_language=en&language=en', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    const optionsB = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a8e483976dmshec4d2742c1d95c9p1e2f36jsn301a53d09a19',
            'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
        }
    };
    
    fetch('https://the-cocktail-db.p.rapidapi.com/random.php', optionsB)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));