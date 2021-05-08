import React from 'react';
import { connect } from 'react-redux';

import Announcements from './Announcements';
import Container from '../../../components/Container';

import * as actions from '../../../redux/actions';

const AnnouncementsScreen = ({ navigation, user, deleteAnnounc, moveToViewed }) => {

  const add = () => navigation.navigate('AddAnnouncement');

  return (
    <Container title='Announcements' navigation={navigation} add={add}>
      <Announcements
        user={user}
        deleteAnnounc={deleteAnnounc}
        moveToViewed={moveToViewed}
      />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  deleteAnnounc: (_id) => dispatch(actions.deleteAnnouncementAction(_id)),
  moveToViewed: (film) => dispatch(actions.moveToViewedAction(film)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementsScreen);
