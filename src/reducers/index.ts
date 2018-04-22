import {combineReducers} from 'redux';

import entities from './entities';

import {StoreState} from 'types/store';

export default combineReducers<StoreState>({
    entities
});
