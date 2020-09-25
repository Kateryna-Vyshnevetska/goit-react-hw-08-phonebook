import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ContactItem from "./contactItem/ContactItem";
import "./ContactList.css";

const ContactList = ({ filteredItems, getIdForDelete }) => {
  const delItem = (id) => {
    getIdForDelete(id);
  };

  return (
    <>
      {filteredItems.length === 0 ? (
        <p>You don't have any contacts</p>
      ) : (
        <TransitionGroup component="ul" className="ContactList">
          {filteredItems.map(({ name, number, id }) => (
            <CSSTransition key={id} timeout={250} classNames="ContactItem">
              <ContactItem
                id={id}
                name={name}
                number={number}
                delItem={delItem}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
    </>
  );
};
export default ContactList;
