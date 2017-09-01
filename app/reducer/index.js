import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import omdbReducer from './omdbReducer';
import navReducer from './navReducer';

module.exports = combineReducers({
	nav: navReducer,
	form: formReducer,
	omdb: omdbReducer
})