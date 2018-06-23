import React from 'react';

import {Card} from 'client/scryfall/types';

import CardLink from 'components/card_link/card_link';

import {Deck} from 'types/store';

export interface Props {
    deck: Deck,
    cards: {[group: string]: [Card, number][]}
}

export default class DeckList extends React.PureComponent<Props> {
    renderRow([card, count]: [Card, number]) {
        return (
            <li key={card.id}>
                {count}
                {' '}
                <CardLink card={card}/>
            </li>
        );
    }

    renderGroup(groupName: string, cards: [Card, number][]) {
        return (
            <React.Fragment key={groupName}>
                <h3>{groupName}</h3>
                <ul>
                    {cards.map(this.renderRow)}
                </ul>
            </React.Fragment>
        );
    }

    render() {
        const groupNames = [...Object.keys(this.props.cards)].sort();
        const groups = groupNames.map((groupName) => this.renderGroup(groupName, this.props.cards[groupName]));

        return (
            <React.Fragment>
                <h1>{this.props.deck.name}</h1>
                <h2>{'Main Deck'}</h2>
                {groups}
                {/*<h2>{'Sideboard'}</h2>
                <ul>
                    {this.props.deck.sideboard.map(this.renderRow)}
                </ul>*/}
            </React.Fragment>
        );
    }
}
