import React from "react";
import { useSelector } from "react-redux";
import { deleteContactFromCloudFirebase } from "../../../requests/requests";

const ContactItem = ({ name, number, id }) => {
  const { profile } = useSelector((state) => state);
  const deleteItem = () => {
    deleteContactFromCloudFirebase(profile.uid, id);
  };

  return (
    <li className="list__item">
      <p className="text">
        {name}: {number}
      </p>
      <button className="btn" onClick={deleteItem}>
        delete
      </button>
    </li>
  );
};

export default ContactItem;
