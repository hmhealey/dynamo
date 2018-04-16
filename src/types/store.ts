import * as Types from 'client/scryfall/types';

export interface Cards {
    cards: {[id:string]:Types.Card},
    cardIdsByName: {[id:string]:string}
};

export interface Entities {
    cards: Cards
};

export interface StoreState {
    entities: Entities
};
