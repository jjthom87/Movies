import {
  AlertIOS
} from 'react-native';

import api from './../api/movie_api';

exports.omdbSearch = (input) => {
	return function(dispatch){
	    return api.getMovies(input).then((movie) => {
	      if(input === ""){
	      	dispatch(modalVisible())
	      } else {
	        if(movie.Error){
	          AlertIOS.alert('No movie with that name')
	        } else {
	          if(movie){
	           	dispatch({
	           		type: "OMDB_LOADING",
	           		omdbLoading: false,
	           		movie: movie
	           	});
	          } else {
	           	dispatch({
	    			type: "OMDB_LOADING",
	           		omdbLoading: true
	           	});
	          }
	        }
	      }
	    })
	}
}

const omdbInputText = (omdbSearchText) => {
	return {
		type: 'OMDB_INPUT',
		omdbSearchText
	}
}

const modalVisible = () => {
	return {
		type: 'MODAL_VISIBLE'
	}
}

exports.modalInvisible = {
	type: 'MODAL_INVISIBLE'
}
