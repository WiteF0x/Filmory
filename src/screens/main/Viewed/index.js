import React from 'react';
import { connect } from 'react-redux';

import Viewed from './Viewed';
import Container from '../../../components/Container';

import * as actions from '../../../redux/actions';

const ViewedScreen = ({ navigation, user, deleteViewed }) => {

  return (
    <Container title='Viewed' navigation={navigation}>
      <Viewed
        user={user}
        deleteViewed={deleteViewed}
      />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  deleteViewed: (card) => dispatch(actions.deleteViewedAction(card)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewedScreen);
