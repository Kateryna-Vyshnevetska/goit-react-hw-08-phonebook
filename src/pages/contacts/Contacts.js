import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import ContactList from "../../components/contactList/ContactList";
import {
  StateAllContacts,
  StateFilter,
  getFilteredContacts,
} from "../../redux/selectors";
import {
  filterContactsAction,
  loadAllCurrentContactsAction,
} from "../../redux/actions";
import Filter from "../../components/filter/Filter";
import { fs } from "../../firebase/config";
import ContactsAppBar from "../../ui/ContactsAppBar";
import ContactForm from "../../components/contactForm/ContactForm";

export const Contacts = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const getContactsFromFirebase = async (id) => {
    await fs.collection(`${id}`).onSnapshot((doc) => {
      const data = doc.docs.map((elem) => ({
        ...elem.data(),
        id: elem.id,
      }));
      dispatch(loadAllCurrentContactsAction(data));
    });
  };

  useEffect(() => {
    getContactsFromFirebase(state.profile.uid);
  }, []);

  const getNamesByFilter = (value) => dispatch(filterContactsAction(value));

  return (
    <>
      <ContactsAppBar email={state.profile.email} />

      <div className="section">
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="title-anim"
          unmountOnExit
        >
          <h1 className="title">Phonebook</h1>
        </CSSTransition>
        <ContactForm />
        <h2 className="title">Contacts</h2>
        {StateAllContacts(state).length >= 2 && (
          <Filter
            getNamesByFilter={({ target: { value } }) =>
              getNamesByFilter(value)
            }
          />
        )}

        <ContactList
          filteredItems={
            StateFilter(state) && StateAllContacts(state).length >= 2
              ? getFilteredContacts(state)
              : StateAllContacts(state)
          }
        />
      </div>
    </>
  );
};
