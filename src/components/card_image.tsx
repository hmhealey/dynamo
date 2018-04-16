import React from 'react';

import * as Types from 'client/scryfall/types';

import {StoreState} from 'types/store';

export interface Props {
    cardName: string,
    card: Types.Card,
    type: string
};

export class CardImage extends React.PureComponent<Props> {
    render() {
        if (!this.props.card) {
            return <span>{'No image found'}</span>;
        }

        return (
            <img src={this.props.card.image_uris[this.props.type]} />
        );
    }
}

import {connect} from 'react-redux';

interface ContainerProps {
    cardName: string
};

interface ConnectedProps {
    card: Types.Card
};

function mapStateToProps(state: StoreState, ownProps: ContainerProps) : ConnectedProps {
    return {
        card: state.entities.cards.cards[state.entities.cards.cardIdsByName[ownProps.cardName]]
    };
}

export default connect(mapStateToProps)(CardImage);
