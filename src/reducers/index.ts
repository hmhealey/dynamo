import {combineReducers} from 'redux';

import cards from './cards';

import {StoreState} from 'types/store';

export default combineReducers<StoreState>({
    cards
});
