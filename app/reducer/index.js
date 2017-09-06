import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';

import omdbReducer from './omdbReducer';
import navReducer from './navReducer';
import movieReducer from './movieReducer';

module.exports = combineReducers({
	form,
	nav: navReducer,
	omdb: omdbReducer,
	movies: movieReducer
})