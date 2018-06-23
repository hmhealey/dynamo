import React from 'react';

import DeckList from 'components/deck_list';
import PageLayout from 'components/page_layout';

import {Deck} from 'types/store';

export interface Props {
    deck: Deck
};

export default class DeckView extends React.PureComponent<Props> {
    render() {
        return (
            <PageLayout>
                <DeckList deck={this.props.deck} />
            </PageLayout>
        );
    }
}
