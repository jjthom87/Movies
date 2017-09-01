var axios = require('axios');
const MOVIE_URL = 'http://www.omdbapi.com/'
const API_KEY = '40e9cece';

module.exports = {
	getMovies: function(movie){
		var encodedlocation = encodeURIComponent(movie);
		var url = `${MOVIE_URL}?apikey=${API_KEY}&t=${encodedlocation}`;
		return fetch(url, {
			method: "get",
			headers: {
				'content-type': 'application/json'
			}
		}).then((response) => response.json())
		.then((results) => {
			return results
		}).catch(function(error){
     		return error
   		});
	}
}