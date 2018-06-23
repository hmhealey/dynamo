import {combineReducers} from 'redux';

import cards from './cards';
import decks from './decks';

import {StoreState} from 'types/store';

export default combineReducers<StoreState>({
    cards,
    decks
});
