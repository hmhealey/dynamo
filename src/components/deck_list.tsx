import React from 'react';

import CardLink from 'components/card_link';

export interface Props {
    name: string,
    mainDeck: string,
    sideboard: string
}

export default class DeckList extends React.PureComponent<Props> {
    renderRow(row: string) {
        const match = /^(\d+)\s+(.+?)\s*$/.exec(row);

        const count = parseInt(match[1]);
        const cardName = match[2];

        return (
            <li key={cardName}>
                {count}
                {' '}
                <CardLink cardName={cardName}/>
            </li>
        );
    }

    render() {
        return (
            <React.Fragment>
                <h1>{'Omnidoor Thragfire'}</h1>
                <h2>{'Main Deck'}</h2>
                <ul>
                    {this.props.mainDeck.split('\n').map(this.renderRow)}
                </ul>
                <h2>{'Sideboard'}</h2>
                <ul>
                    {this.props.sideboard.split('\n').map(this.renderRow)}
                </ul>
            </React.Fragment>
        );
    }
}
