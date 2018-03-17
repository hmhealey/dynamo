import {combineReducers} from 'redux';

import * as Actions from 'types/redux';

function cards(state: any = {}, action: Actions.Action): any {
    switch (action.type) {
    case 'ReceivedCard':
        return {
            ...state,
            [action.card.id]: action.card
        };

    default:
        return state;
    }
}

export default combineReducers({
    cards
});
