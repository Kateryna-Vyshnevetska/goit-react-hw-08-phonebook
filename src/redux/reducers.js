import {
  UPLOAD_USER_PROFILE,
  ADD_NEW_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  ERROR_MESSAGE,
  LOAD_ALL_CONTACTS,
  SIGH_OUT_USER_PROFILE,
} from "../redux/types";

const initialStateContacts = {
  contacts: {
    items: [],
    filter: "",
  },
};

export const phoneBookReducer = (
  state = { ...initialStateContacts },
  { type, payload }
) => {
  switch (type) {
    case SIGH_OUT_USER_PROFILE:
      return { ...initialStateContacts };

    case LOAD_ALL_CONTACTS:
      return {
        contacts: {
          ...state.contacts,
          items: [...payload],
        },
      };
    case ADD_NEW_CONTACT:
      return {
        contacts: {
          filter: "",
          items: [...state.contacts.items, payload],
        },
      };
    case DELETE_CONTACT:
      return {
        contacts: {
          filter: "",
          items: [
            ...state.contacts.items.filter((elem) => {
              return elem.id !== payload;
            }),
          ],
        },
      };
    case FILTER_CONTACTS:
      return {
        contacts: {
          items: [...state.contacts.items],
          filter: payload,
        },
      };
    default:
      return state;
  }
};

export const errors = (state = "", { type, payload }) => {
  switch (type) {
    case UPLOAD_USER_PROFILE:
      return "";
    case ERROR_MESSAGE:
      return payload;
    case ADD_NEW_CONTACT:
      return "";
    case DELETE_CONTACT:
      return "";
    case FILTER_CONTACTS:
      return "";
    default:
      return state;
  }
};

const initialStateProfile = {
  email: "",
  uid: "",
};

export const profileReducer = (
  state = initialStateProfile,
  { type, payload }
) => {
  switch (type) {
    case UPLOAD_USER_PROFILE:
      return { ...state, ...payload };
    case SIGH_OUT_USER_PROFILE:
      return initialStateProfile;
    default:
      return state;
  }
};
