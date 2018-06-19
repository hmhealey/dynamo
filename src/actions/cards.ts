import {
    ScryfallClient,
    Response,
    Types
} from 'client/scryfall';

import * as CardSelectors from 'selectors/cards';

import {
    AsyncAction,
    Dispatch,
    GetState
} from 'types/redux';

export function getCardByName(name: string, fuzzy: boolean = false): AsyncAction<Promise<Types.Card>> {
    return (dispatch: Dispatch, getState: GetState): Promise<Types.Card> => {
        const existingCard = CardSelectors.getCardByName(getState(), name);

        if (existingCard) {
            return Promise.resolve(existingCard);
        }

        return new Promise((resolve) => {
            ScryfallClient.getInstance().getCardByName(name, {fuzzy}).then(({data}) => {
                dispatch({
                    type: 'ReceivedCard',
                    card: data
                });

                resolve(data);
            });
        });
    };
}

export function getCardsIfNecessary(names: string[]): AsyncAction<Promise<void>> {
    return (dispatch: Dispatch, getState: GetState) => {
        return new Promise((resolve) => {
            let index = 0;

            const getNextCard = function() {
                if (index >= names.length) {
                    return;
                }

                const name = names[index].trim();
                index += 1;

                if (name) {
                    dispatch(getCardByName(name)).then(() => {
                        setTimeout(getNextCard, 200);
                    });
                } else {
                    getNextCard();
                }
            };

            getNextCard();
        });
    };
}
