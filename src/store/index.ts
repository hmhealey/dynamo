import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from 'reducers';

import omnidoorThragfire from '../omnidoor_thragfire';

export default function configureStore() {
    const store = createStore(
        rootReducer,
        omnidoorThragfire,
        applyMiddleware(thunk)
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer)
        });
    }

    return store;
}
