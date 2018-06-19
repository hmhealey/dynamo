import {combineReducers} from 'redux';

import * as Actions from 'types/actions';
import {Cards} from 'types/store';

function cards(state: Cards['cards'] = {}, action: Actions.Action): any {
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

function cardIdsByName(state: Cards['cardIdsByName'] = {}, action: Actions.Action): any {
    switch (action.type) {
    case 'ReceivedCard':
        return {
            ...state,
            [action.card.name]: action.card.id
        };

    default:
        return state;
    }
}

export default combineReducers({
    cards,
    cardIdsByName
});
