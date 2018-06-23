import * as Actions from 'types/actions';
import {Deck, StoreState} from 'types/store';

export default function decks(state: {[id: string]: Deck} = {}, action: Actions.Action): any {
    switch (action.type) {

    default:
        return state;
    }
}
