import React from 'react';

import * as Types from 'client/scryfall/types';

export interface Props {
    cardName: string,
    card?: Types.Card,
    face?: number,
    type: Types.ImageType
};

export class CardImage extends React.PureComponent<Props> {
    static defaultProps: Partial<Props> = {
        face: 0
    }

    getImageUri = () => {
        if (!this.props.card) {
            return null;
        }

        let imageUris = this.props.card.image_uris;
        if (this.props.card.card_faces && this.props.card.card_faces[this.props.face]) {
            imageUris = this.props.card.card_faces[this.props.face].image_uris;
        }

        return imageUris[this.props.type];
    }

    render() {
        if (!this.props.card) {
            return <span>{'No image found'}</span>;
        }

        return (
            <img src={this.getImageUri()} />
        );
    }
}

import {connect} from 'react-redux';

import {StoreState} from 'types/store';

interface ContainerProps {
    cardName: string
};

function mapStateToProps(state: StoreState, ownProps: ContainerProps) {
    return {
        card: state.cards.cards[state.cards.cardIdsByName[ownProps.cardName]]
    };
}

export default connect(mapStateToProps, null)(CardImage);
