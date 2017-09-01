import {AppNavigator} from '../navigation';
import { NavigationActions } from 'react-navigation';

const NavReducer = (state, action) => {
    let newState;
    switch (action.type) {
        case 'goToOmdb':
            newState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({ routeName: 'OMDB Movie' }), state);
            break;
        default:
            newState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    return newState || state;
};

export default NavReducer;