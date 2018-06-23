import {connect} from 'react-redux';

import {StoreState} from 'types/store';

import CardLink from './card_link';

interface ContainerProps {
    cardName: string
}

function mapStateToProps(state: StoreState, ownProps: ContainerProps) {
    return {
        card: state.cards.cards[ownProps.cardName],
        identifier: ownProps.cardName
    };
}

export default connect(mapStateToProps, null)(CardLink);
