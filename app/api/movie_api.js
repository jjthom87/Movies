var axios = require('axios');
var apikey = '275d5dfdea53a2d3e3869f48d154e9ac';
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=' + apikey + '&units=imperial';
const MOVIE_URL = 'http://www.omdbapi.com/'
const API_KEY = '40e9cece';

const getMovie = (id) => `${MOVIE_URL}` + id + `?api_key=${API_KEY}&language=en-US`;
module.exports = {
	getMovies: function(movie){
		var encodedlocation = encodeURIComponent(movie);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedlocation}`;
		const encodedMovie = encodeURIComponent(movie);
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