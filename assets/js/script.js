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

const options2 = {
    method: 'GET',
    headers: {
        'API-Key': '1',
        'API-Host': 'http://api.marketstack.com/v1/'
    }
    };
    
fetch('www.thecocktaildb.com/api/json/v1/1/random.php', options2)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));