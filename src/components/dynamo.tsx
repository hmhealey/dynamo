import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import DeckView from 'pages/deck_view';

import configureStore from 'store';

type Props = {
}

type State = {
}

export default class Dynamo extends React.PureComponent<Props, State> {
    store = configureStore();

    render() {
        return (
            <Provider store={this.store}>
                <BrowserRouter>
                    <Route path='/' component={DeckView} />
                </BrowserRouter>
            </Provider>
        );
    }
}
