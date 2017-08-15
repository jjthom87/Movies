var axios = require('axios');

const MOVIE_URL = 'http://www.omdbapi.com/'
const API_KEY = '40e9cece';

//http://www.omdbapi.com/?apikey=40e9cece&t=

const getMovie = (id) => `${MOVIE_URL}` + id + `?api_key=${API_KEY}&language=en-US`;
module.exports = {
	getMovies: function(movie){
		const encodedMovie = encodeURIComponent(movie);
		const URL = `${MOVIE_URL}?apikey=${API_KEY}&t=${encodedMovie}`;
		return axios.get(URL).then(function(res){
			if(res.data){
				throw new Error(res.data.message);
			} else {
				console.log(res)
				return res.data;
			}
		}, function (res) {
			throw new Error(res.data.message);
		});
	}
}