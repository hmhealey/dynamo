import React from 'react';

import * as Types from 'client/scryfall/types';

import {State} from 'types/store';

interface Props {
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

interface PreConnectProps extends Props {
    cardName: string
};

function mapStateToProps(state: State, ownProps: {cardName: string}) {
    console.log(state);
    return {
        card: state.entities.cards.cards[state.entities.cards.cardIdsByName[ownProps.cardName]]
    };
}

export default connect(mapStateToProps)(CardImage);
