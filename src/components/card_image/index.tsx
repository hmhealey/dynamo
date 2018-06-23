import {connect} from 'react-redux';

import {StoreState} from 'types/store';

import CardImage from './card_image';

interface ContainerProps {
    cardName: string
};

function mapStateToProps(state: StoreState, ownProps: ContainerProps) {
    return {
        card: state.cards.cards[state.cards.cardIdsByName[ownProps.cardName]]
    };
}

export default connect(mapStateToProps, null)(CardImage);
