import {connect} from 'react-redux';

import {StoreState} from 'types/store';

import DeckView from './deck_view';

function mapStateToProps(state: StoreState) {
    return {
        deck: state.decks.omnidoor_thragfire
    };
}

export default connect(mapStateToProps, null)(DeckView);
