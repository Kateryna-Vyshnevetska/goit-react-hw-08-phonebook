import {
  UPLOAD_USER_PROFILE,
  ADD_NEW_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  ERROR_MESSAGE,
  LOAD_ALL_CONTACTS,
  SIGH_OUT_USER_PROFILE,
} from "./types";

export const uploadUserProfileAction = ({ email, uid }) => ({
  type: UPLOAD_USER_PROFILE,
  payload: { email, uid },
});

export const signOutAction = (value) => ({
  type: SIGH_OUT_USER_PROFILE,
  payload: value,
});

export const newContactAction = (contact) => ({
  type: ADD_NEW_CONTACT,
  payload: contact,
});

export const loadAllCurrentContactsAction = (contacts) => ({
  type: LOAD_ALL_CONTACTS,
  payload: contacts,
});

export const deleteContactAction = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const filterContactsAction = (value) => ({
  type: FILTER_CONTACTS,
  payload: value,
});

export const errorAction = (value) => ({
  type: ERROR_MESSAGE,
  payload: value,
});
