import React, { useState } from 'react';
import { connect } from 'react-redux';

import SignUp from './SignUp';
import * as actions from '../../../redux/actions';

const SignUpScreen = ({ signUp, navigation }) => {
  const [username, _username] = useState('');
  const [displayName, _displayName] = useState('');
  const [password, _password] = useState('');
  const [confirm, _confirm] = useState('');

  const setUsername = (e) => _username(e);
  const setDisplayName = (e) => _displayName(e);
  const setPassword = (e) => _password(e);
  const setConfirm = (e) => _confirm(e);

  const register = () => signUp({ login: username, displayName, password });

  const onSignUp = () => {
    if (username.length > 0 && displayName.length > 0 && password.length > 0 && confirm.length > 0) {
      if (password !== confirm) {
        alert('Confirm password is incorrect!');
      } else {
        register()
      }
    } else {
      alert('Please, fill all fields!');
    }
  };

  const goBack = () => navigation.goBack();

  return (
    <SignUp
      username={username}
      displayName={displayName}
      password={password}
      confirm={confirm}

      setUsername={setUsername}
      setDisplayName={setDisplayName}
      setPassword={setPassword}
      setConfirm={setConfirm}

      goBack={goBack}
      onSignUp={onSignUp}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUp: (payload) => dispatch(actions.signUpAction(payload)),
});

export default connect(null, mapDispatchToProps)(SignUpScreen);
