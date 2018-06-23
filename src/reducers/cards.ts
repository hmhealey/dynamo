import {combineReducers} from 'redux';

import {Card} from 'client/scryfall/types';

import * as Actions from 'types/actions';
import {StoreState} from 'types/store';

function cards(state: {[id: string]: Card} = {}, action: Actions.Action): any {
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

function cardIdsByName(state: {[name: string]: string} = {}, action: Actions.Action): any {
    switch (action.type) {
    case 'ReceivedCard': {
        const nextState = {
            ...state,
            [action.card.name]: action.card.id
        };

        if (action.name && action.name !== action.card.name) {
            nextState[action.name] = action.card.id;
        }

        return {
            ...state,
            [action.card.name]: action.card.id
        };
    }

    default:
        return state;
    }
}

export default combineReducers({
    cards,
    cardIdsByName
});
