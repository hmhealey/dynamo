// import * as ReduxTypes from '@src/redux';
import {Dispatch} from 'react-redux';

import {
    ScryfallClient,
    Response,
    Types
} from 'client/scryfall';

import * as CardSelectors from 'selectors/cards';

import {Action} from 'types/actions';
import {StoreState} from 'types/store';

export function getCardByName(name: string, fuzzy: boolean = false) {
    return (dispatch: Dispatch<Action>, getState: () => StoreState): Promise<Response<Types.Card>> => {
        const existingCard = CardSelectors.getCardByName(getState(), name);

        if (existingCard) {
            return Promise.resolve({data: existingCard});
        }

        return new Promise((resolve) => {
            ScryfallClient.getInstance().getCard(name, fuzzy).then(({data}) => {
                dispatch({
                    type: 'ReceivedCard',
                    card: data
                });

                resolve({data});
            });
        });
    };
}
