import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContactContext } from "../../context/ContactContext";

const Contact = ({ contact }) => {
  const { deleteContact, findItem, addFav } = useContext(ContactContext);
  const [clicked, setClicked] = useState(false);

  return (
    <li className="list-item">
      <div>{contact.firstName + " " + contact.lastName}</div>
      <div>
        <button className="button" onClick={() => deleteContact(contact.id)}>
          Delete
        </button>
        <Link to="/contacts/add">
          <button onClick={() => findItem(contact.id)} className="button">
            Edit
          </button>
        </Link>
        <button onClick={() => addFav(contact.id)} className="button">
          Favourite
        </button>
      </div>
    </li>
  );
};

export default Contact;
