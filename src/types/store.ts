import * as ReduxTypes from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import * as Types from 'client/scryfall/types';

import {Action} from 'types/actions';

export interface Cards {
    cards: {[id:string]:Types.Card},
    cardIdsByName: {[id:string]:string}
};

export interface StoreState {
    cards: Cards
};

export interface ReceivedCard {
    type: 'ReceivedCard',
    card: Types.Card
};

export type AsyncAction<R> = ThunkAction<R, StoreState, undefined, Action>;

export type Dispatch = ThunkDispatch<StoreState, undefined, Action>;

export type GetState = () => StoreState;
