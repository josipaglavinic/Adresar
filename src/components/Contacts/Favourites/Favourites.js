import React from "react";
import { ContactContext } from "../../../context/ContactContext";
import { useContext } from "react";
import Contact from "../Contact";

const Favourites = ({ contact }) => {
  const { contacts } = useContext(ContactContext);
  const favContacts = contacts.map((contact) =>
    contact.clicked ? (
      <div key={contact.id}>{contact.firstName + " " + contact.lastName}</div>
    ) : null
  );
  return <div>{favContacts}</div>;
};

export default Favourites;
