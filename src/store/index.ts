import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from 'reducers';

import {Deck} from '../types/store';
import omnidoorThragfire from 'omnidoor_thragfire';

export default function configureStore() {
    const store = createStore(
        rootReducer,
        {
            ...omnidoorThragfire,
            decks: {
                omnidoor_thragfire: parseDeck(mainDeck, 'Omnidoor Thragfire')
            }
        },
        applyMiddleware(thunk)
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer)
        });
    }

    return store;
}

function parseDeck(deck: string, name: string): Deck {
    const cards = new Map<string, number>();

    for (const row of deck.split('\n')) {
        const match = /^\s*(\d+)\s+(.+?)\s*$/.exec(row);
        if (!match) {
            console.error('failed to parse row', row);
            continue;
        }

        cards.set(omnidoorThragfire.cards.cardIdsByName[match[2]], parseInt(match[1]));
    }

    return {
        name,
        cards: Array.from(cards)
    };
}

const mainDeck = `2 Glacial Fortress
3 Hallowed Fountain
4 Sunpetal Grove
4 Temple Garden
2 Overgrown Tomb
4 Hinterland Harbor
1 Steam Vents
1 Plains
1 Island
1 Forest
1 Alchemist's Refuge
1 Kessig Wolf Run
2 Fog
4 Farseek
3 Chromatic Lantern
4 Ranger's Path
4 Supreme Verdict
1 Door to Nothingness
2 Gilded Lotus
4 Increasing Ambition
1 Thragtusk
2 Terminus
2 Sphinx's Revelation
2 Temporal Mastery
1 Angel of Serenity
1 Nicol Bolas, Planeswalker
1 Griselbrand
1 Omniscience`;

const sideboard = `4 Centaur Healer
1 Thoughtflare
3 Thragtusk
1 Planar Cleansing
2 Terminus
1 Temporal Mastery
1 Worldfire
2 Sphinx's Revelation`;
