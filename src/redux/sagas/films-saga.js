import {
  all,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { StackActions } from 'react-navigation';

import * as actions from '../actions';
import * as userController from '../../utils/userController';

function* addAnnouncements({ payload }) {
  try {
    const { announcement } = payload;

    yield all([
      userController.addAnnouncements(announcement),
      put(actions.setNewAnnouncementsAction(announcement)),
      put(StackActions.pop()),
    ]);
  } catch (e) {
    console.log(e);
  }
};

function* deleteAnnouncement({ payload }) {
  try {
    const { card: { _id } } = payload;

    yield all([
      userController.deleteAnnouncements(_id),
      put(actions.setDeleteAnnouncement(_id)),
    ]);
  } catch (e) {
    console.log(e);
  }
};

function* moveToViewd({ payload }) {
  try {
    const { film } = payload;

    yield all([
      put(actions.setViewedAction(film)),
      put(actions.setDeleteAnnouncement(film._id)),
      userController.moveToViewed(film),
    ]);

  } catch (e) {
    console.log(e);
  }
}


export default function* filmsSagas() {
  yield all([
    takeLatest(actions.addAnnouncementsAction, addAnnouncements),
    takeLatest(actions.deleteAnnouncementAction, deleteAnnouncement),
    takeLatest(actions.moveToViewedAction, moveToViewd),
  ]);
};
