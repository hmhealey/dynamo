import * as Types from 'client/scryfall/types';

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
