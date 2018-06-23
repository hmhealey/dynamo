import React from 'react';

import {Card} from 'client/scryfall/types';

import CardLink from 'components/card_link';

import {Deck} from 'types/store';

export interface Props {
    deck: Deck
}

export default class DeckList extends React.PureComponent<Props> {
    renderRow([cardId, count]: [string, number]) {
        return (
            <li key={cardId}>
                {count}
                {' '}
                <CardLink cardId={cardId}/>
            </li>
        );
    }

    render() {
        return (
            <React.Fragment>
                <h1>{this.props.deck.name}</h1>
                <h2>{'Main Deck'}</h2>
                <ul>
                    {this.props.deck.cards.map(this.renderRow)}
                </ul>
                {/*<h2>{'Sideboard'}</h2>
                <ul>
                    {this.props.deck.sideboard.map(this.renderRow)}
                </ul>*/}
            </React.Fragment>
        );
    }
}
