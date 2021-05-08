import { Alert } from 'react-native';
import {
  all,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { StackActions } from 'react-navigation';

import * as actions from '../actions';
import * as userController from '../../utils/userController';

function* testAuth({ payload }) {
  try {
    const token = yield userController.getToken();
    if (token) {
      const result = yield userController.getUserById(token);
      console.log('result', result);
      if (result.status === 200) {
        console.log('result', result);
        yield put(actions.setUserAction(result.user));
        yield put(StackActions.replace({ routeName: 'Home' }));
      } else {
        yield userController.clearToken();
      };
    } else {
      yield put(StackActions.replace({ routeName: 'Login' }));
    };
  } catch (error) {
    console.log(error);
  }
};

function* signIn({ payload }) {
  try {
    const { login, password } = payload;

    const result = yield userController.loginController(login, password);
    result.status === 200
      ? yield all([
        put(actions.setUserAction(result.user)),
        userController.setToken(result.user._id),
        put(StackActions.replace({ routeName: 'Home' })),
      ])
      : Alert.alert('Error', result.message);
    
  } catch (error) {

  }
};

function* signUp({ payload }) {
  try {
    const { login, password, displayName } = payload;

    const result = yield userController.registerController(login, password, displayName);
    if (result.status === 200) {
      console.log('result', result);
      yield all([
        put(actions.setUserAction(result.user)),
        userController.setToken(result.user._id),
      ]);
      yield put(StackActions.replace({ routeName: 'Home' }));
    } else {
      Alert.alert('Error', result.message);
    }

  } catch (error) {
    console.log(error);
  }
};

function* logout({ payload }) {
  try {
    yield all([
      userController.clearToken(),
      put(actions.signOutAction()),
      put(StackActions.replace({ routeName: 'Root' }))
    ])
  } catch (e) {
    console.log(e);
  }
}

export default function* authSagas() {
  yield all([
    takeLatest(actions.signInAction, signIn),
    takeLatest(actions.signUpAction, signUp),
    takeLatest(actions.testAuthAction, testAuth),
    takeLatest(actions.logoutAction, logout),
  ]);
};
