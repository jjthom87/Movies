import {
  AlertIOS
} from 'react-native';
import { NavigationActions } from 'react-navigation'

import api from './../api/movie_api';
import OmdbItem from './../components/OmdbItem';

exports.omdbSearch = (input) => {
	return function(dispatch){
	    return api.getMovies(input).then((movie) => {
	      if(input === ""){
	        dispatch({
	        	type: "MODAL_VISIBLE",
	        	modalVisible: true
	        })
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
	            //this.state.omdb.push(movie)
	            this.props.navigation.dispatch({ type: 'goToOmdb' });
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
