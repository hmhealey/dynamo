import React from 'react';

import * as Types from 'client/scryfall/types';

export interface Props {
    card?: Types.Card,
    cardId: string
}

export default class CardLink extends React.PureComponent<Props> {
    render() {
        if (!this.props.card) {
            return `[Card ${this.props.cardId} not found]`;
        }

        return (
            <a
                href={this.props.card.scryfall_uri}
                target='_blank'
            >
                {this.props.card.name}
            </a>
        );
    }
}
