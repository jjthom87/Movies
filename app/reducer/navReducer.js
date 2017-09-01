import {AppNavigator} from '../navigation';
import { NavigationActions } from 'react-navigation';

const initialState = AppNavigator.router.getStateForAction(NavigationActions.init())

const NavReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case 'goToOmdb':
            newState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({ routeName: 'OmdbItem' }), state);
            break;
        case 'goToOmdbTop':
            newState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({ routeName: 'OmdbTop' }), state);
            break;
        case 'goToMovieTop':
            newState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({ routeName: 'MovieTop' }), state);
            break;
        default:
            newState = AppNavigator.router.getStateForAction(action, state);
            break;
    }
    return newState || state;
};

export default NavReducer;