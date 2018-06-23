import * as Types from 'client/scryfall/types';

export type Cards = {[id: string]: Types.Card};

export interface Deck {
    name: string,
    cards: [string, number][]
};

export type Decks = {[id: string]: Deck};

export interface StoreState {
    cards: {
        cards: {[id: string]: Types.Card},
        cardIdsByName: {[id: string]: string}
    },
    decks: Decks
};
