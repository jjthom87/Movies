const initialState = {
	movie: '',
	modalVisible: false,
	omdbLoading: false,
	omdbSearchText: ''
}

module.exports = (state = initialState, action) => {
	switch(action.type){
		case 'OMDB_INPUT':
			return { ...state, omdbSearchText: action.omdbSearchText } 
		case 'MODAL_VISIBLE':
			return { modalVisible: !state.modalVisible }
		case 'MODAL_INVISIBLE':
			return { modalVisible: !state.modalVisible }
		case 'OMDB_LOADING':
			return { ...state, omdbLoading: !state.omdbLoading, movie: action.movie }
		default:
			return state;
	}
}