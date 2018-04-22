import * as Types from 'client/scryfall/types';
import {StoreState} from 'types/store';

export function getCardByName(state: StoreState, name: string): (Types.Card | null) {
    return state.entities.cards.cards[state.entities.cards.cardIdsByName[name]] || null;
}
