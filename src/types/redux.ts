import {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {Action} from 'types/actions';
import {StoreState} from 'types/store';

export type AsyncAction<R> = ThunkAction<R, StoreState, undefined, Action>;

export type Dispatch = ThunkDispatch<StoreState, undefined, Action>;

export type GetState = () => StoreState;
