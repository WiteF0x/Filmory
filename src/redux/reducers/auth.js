import { createReducer } from 'redux-act';
import * as actions from '../actions';

const initialState = {
  user: null,
};

const authReducer = createReducer({
  [actions.setUserAction]: (state, user) => ({
    ...state,
    user,
  }),
  [actions.setNewAnnouncementsAction]: (state, announcement) => ({
    user: {
      ...state.user,
      announcements: [...state.user.announcements, announcement],
    }
  }),
  [actions.setDeleteAnnouncement]: (state, _id) => ({
    user: {
      ...state.user,
      announcements: state.user.announcements.filter(_ => _._id !== _id),
    },
  }),

  [actions.setViewedAction]: (state, film) => ({
    user: {
      ...state.user,
      viewed: [...state.user.viewed, film],
    },
  }),
  [actions.setDeleteViewedAction]: (state, _id) => ({
    user: {
      ...state.user,
      viewed: state.user.viewed.filter(_ => _._id !== _id),
    },
  }),

  [actions.setFavouritesAction]: (state, film) => ({
    user: {
      ...state.user,
      favourites: [...state.user.favourites, film],
    },
  }),
  [actions.setDeleteFavouritesAction]: (state, _id) => ({
    user: {
      ...state.user,
      favourites: state.user.favourites.filter(_ => _._id !== _id),
    },
  }),

  [actions.signOutAction]: () => ({
    ...initialState,
  }),
}, initialState);

export default authReducer;
