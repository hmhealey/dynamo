import {createStore} from 'redux';

import rootReducer from 'reducers';

import {StoreState} from 'types/store';

export default function configureStore() {
    const store = createStore<StoreState>(rootReducer);

    // if (module.hot) {
    //     // Enable Webpack hot module replacement for reducers
    //     module.hot.accept('../reducers', () => {
    //       store.replaceReducer(rootReducer)
    //     })
    // }

    return store;
}
