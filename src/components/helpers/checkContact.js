import { errorAction } from "../../redux/actions";

export const checkContact = (contact, contacts, dispatch) => {
  let flag = true;
  if (contact.name === undefined || contact.number === undefined) {
    dispatch(errorAction("not all fields are filled"));
    return false;
  } else {
    contacts.items.map((el) =>
      el.name === contact.name ? (flag = false) : ""
    );
    if (flag) {
      return true;
    } else {
      dispatch(errorAction("such contact already exists"));
      return false;
    }
  }
};
