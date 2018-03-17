import React from 'react';

import * as Types from 'client/scryfall/types';

type Props = {
    card: Types.Card,
    type: string
};

export default class CardImage extends React.PureComponent<Props> {
    render() {
        return (
            <img src={this.props.card.image_uris[this.props.type]} />
        );
    }
}
