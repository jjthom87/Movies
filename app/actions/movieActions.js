import {GET_MOVIES} from '../api';

exports.getMovies = function(dispatch){
	dispatch(moviesLoading(true))
	return fetch(GET_MOVIES, {
		headers: {
	        'content-type': 'application/json',
	        'accept': 'application/json'
	      }
    }).then((response) => response.json())
    .then((results) => {
	 	if(results){
            dispatch(moviesLoading(false))
            dispatch(showMovies(results))
		}
 	});
}

const moviesLoading = (loading) => {
	return {
  		type: 'MOVIES_LOADING',
  		loading
  	}
}

const showMovies = (movieList) => {
	return {
	  type: 'SHOW_MOVIES',
	  movieList
	}
}

exports.searchMovies = (searchInput) => {
	return {
		type: 'SEARCH_MOVIES',
		searchInput
	}
}