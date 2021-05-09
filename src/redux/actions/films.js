import { createAction } from 'redux-act';

export const addAnnouncementsAction = createAction('ADD_ANNOUNCEMENTS_ACTION');
export const setNewAnnouncementsAction = createAction('SET_NEW_ANNOUNCEMENTS_ACTION');
export const deleteAnnouncementAction = createAction('DELETE_ANNOUNCEMENT_ACTION');
export const setDeleteAnnouncement = createAction('SET_DELETE_ANNOUNCEMENT_ACTION');

export const moveToViewedAction = createAction('MOVE_TO_VIEWED_ACTION');
export const setViewedAction = createAction('SET_VIEWED_ACTION');
export const deleteViewedAction = createAction('DELETE_VIEWED_ACTION');
export const setDeleteViewedAction = createAction('SET_DELETE_VIEWED_ACTION');

export const moveToFavouritesAction = createAction('MOVE_TO_FAVOURITES_ACTION');
export const setFavouritesAction = createAction('SET_FAVOURITES_ACTION');
export const deleteFavouritesAction = createAction('DELETE_FAVOURITES_ACTION');
export const setDeleteFavouritesAction = createAction('SET_DELETE_FAVOURITES_ACTION');
