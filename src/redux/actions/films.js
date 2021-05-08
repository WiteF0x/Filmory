import { createAction } from 'redux-act';

export const addAnnouncementsAction = createAction('ADD_ANNOUNCEMENTS_ACTION');
export const setNewAnnouncementsAction = createAction('SET_NEW_ANNOUNCEMENTS_ACTION');
export const deleteAnnouncementAction = createAction('DELETE_ANNOUNCEMENT_ACTION');
export const setDeleteAnnouncement = createAction('SET_DELETE_ANNOUNCEMENT_ACTION');

export const moveToViewedAction = createAction('MOVE_TO_VIEWED_ACTION');
export const setViewedAction = createAction('SET_VIEWED_ACTION');
