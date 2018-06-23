import React from 'react';

import * as Types from 'client/scryfall/types';

export interface Props {
    cardName: string,
    card?: Types.Card,
    face?: number,
    type: Types.ImageType
};

export default class CardImage extends React.PureComponent<Props> {
    static defaultProps = {
        face: 0
    }

    getImageUri = () => {
        if (!this.props.card) {
            return '';
        }

        let imageUris = this.props.card.image_uris;
        if (this.props.card.card_faces && this.props.card.card_faces[this.props.face]) {
            imageUris = this.props.card.card_faces[this.props.face].image_uris;
        }

        return imageUris[this.props.type];
    }

    render() {
        return (
            <img src={this.getImageUri()}>{this.props.cardName}</img>
        );
    }
}
