import { createReducer } from 'redux-act';
import * as actions from '../actions';

const initialState = {
  token: null,
};

const tokenReducer = createReducer({
  [actions.setTokenAction]: (state, token) => ({
    ...state,
    token,
  }),
  [actions.signOutAction]: () => ({
    ...initialState,
  }),
  [actions.clearTokenAction]: () => ({
    ...initialState,
  }),
}, initialState);

export default tokenReducer;
