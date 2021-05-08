import React, { useState } from 'react';
import { connect } from 'react-redux';

import Login from './Login';
import * as actions from '../../../redux/actions';

const LoginScreen = ({ navigation, signIn }) => {
  const [login, _login] = useState('');
  const [password, _password] = useState('');

  const setLogin = (e) => _login(e);
  const setPassword = (e) => _password(e);

  const signInApp = () => {
    if (enabled) {
      signIn({ login, password });
    } else {
      alert('Please, fill both fields!');
    }
  };

  const signUp = () => navigation.navigate('SignUp');

  const enabled = login && login.length > 0 && password && password.length > 0;

  return (
    <Login
      login={login}
      setLogin={setLogin}

      password={password}
      setPassword={setPassword}

      signInApp={signInApp}
      signUp={signUp}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  signIn: (payload) => dispatch(actions.signInAction(payload)),
});

export default connect(null, mapDispatchToProps)(LoginScreen);
