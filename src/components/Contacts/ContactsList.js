import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContactContext } from "../../context/ContactContext";
import AddContactForm from "./AddContactForm";
import Contact from "./Contact";

const ContactsList = () => {
  const { contacts } = useContext(ContactContext);
  return (
    <div className="list-container">
      <div className="wrapper">
        <Link to="/contacts/add">
          <div className="new-contact-button">
            <button className="add-button"> Add new contact </button>
          </div>
        </Link>
        {/* <AddContactForm /> */}
        <div className="main">
          <span className="contacts-list"> Contacts list </span>
          {contacts.length ? (
            <ul className="list">
              {contacts.map((contact) => {
                return <Contact contact={contact} key={contact.id} />;
              })}
            </ul>
          ) : (
            <div className="no-contacts"> No contacts </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactsList;
