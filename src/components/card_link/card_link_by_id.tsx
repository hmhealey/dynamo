import {connect} from 'react-redux';

import {StoreState} from 'types/store';

import CardLink from './card_link';

interface ContainerProps {
    cardId: string
}

function mapStateToProps(state: StoreState, ownProps: ContainerProps) {
    return {
        card: state.cards.cards[ownProps.cardId],
        identifier: ownProps.cardId
    };
}

export default connect(mapStateToProps, null)(CardLink);
