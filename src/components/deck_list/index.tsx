import {connect} from 'react-redux';
import {createSelector} from 'reselect';

import {Card} from 'client/scryfall/types';

import {getAllCards} from 'selectors/cards';

import {Cards, Deck, StoreState} from 'types/store';

import DeckList from './deck_list';

interface ContainerProps {
    deck: Deck
}

function makeGetCardsForDeck() {
    return createSelector(
        getAllCards,
        (state: StoreState, deck: Deck) => deck,
        (allCards, deck) => {
            const cards = deck.cards.map(([id, count]): [Card, number] => {
                return [allCards[id], count];
            });

            return groupCardsByType(cards);
        }
    );
}

function groupCardsByType(cards: [Card, number][]): {[group: string]: [Card, number][]} {
    const groups: {[group: string]: [Card, number][]} = {};

    for (const cardWithCount of cards) {
        const [card] = cardWithCount;
        const group = getCardGroup(card);

        if (!groups[group]) {
            groups[group] = [];
        }

        groups[group].push(cardWithCount);
    }

    for (const group of Object.keys(groups)) {
        groups[group].sort(compareByName);
    }

    return groups;
}

function compareByName(a: [Card, number], b: [Card, number]): number {
    return a[0].name.localeCompare(b[0].name);
}

function getCardGroup(card: Card): string {
    if (card.type_line.indexOf('Creature') !== -1) {
        return 'Creature';
    } else if (card.type_line.indexOf('Enchantment') !== -1) {
        return 'Enchantment';
    } else if (card.type_line.indexOf('Artifact') !== -1) {
        return 'Artifact';
    } else if (card.type_line.indexOf('Instant') !== -1) {
        return 'Instant';
    } else if (card.type_line.indexOf('Sorcery') !== -1) {
        return 'Sorcery';
    } else if (card.type_line.indexOf('Land') !== -1) {
        return 'Land';
    } else if (card.type_line.indexOf('Planeswalker') !== -1) {
        return 'Planeswalker';
    } else {
        return 'Other';
    }
}

function makeMapStateToProps() {
    const getCardsForDeck = makeGetCardsForDeck();

    return (state: StoreState, ownProps: ContainerProps) => {
        const cards = getCardsForDeck(state, ownProps.deck);

        return {
            cards
        };
    };
}

export default connect(makeMapStateToProps)(DeckList);
