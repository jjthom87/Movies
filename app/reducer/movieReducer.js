const initialState = {
	movieList: '',
	loading: ''
}

module.exports = (state = initialState, action) => {
	switch(action.type){
		case 'SHOW_MOVIES':
            return { ...state, movieList: action.movieList }
        case 'MOVIES_LOADING':
        	return { ...state, loading: action.loading }
		default:
			return state;
	}
}