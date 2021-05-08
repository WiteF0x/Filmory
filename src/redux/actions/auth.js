import { createAction } from 'redux-act';

export const testAuthAction = createAction('TEST_AUTH');

export const setTokenAction = createAction('SET_TOKEN');
export const clearTokenAction = createAction('CLEAR_TOKEN');

export const signInAction = createAction('SIGN_IN');
export const signUpAction = createAction('SIGN_UP');

export const setUserAction = createAction('SET_USER');

export const logoutAction = createAction('LOGOUT_ACTION');
export const signOutAction = createAction('SIGN_OUT_ACTION');
