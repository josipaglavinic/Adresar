import React, { createContext, useState } from "react";
import uuid from "uuid";

export const ContactContext = createContext();

const ContactContextProvider = (props) => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      firstName: "Josipa",
      lastName: "Glavinic",
      phoneNumber: "0914006501",
    },
    {
      id: 2,
      firstName: "Josipa",
      lastName: "Glavinic",
      phoneNumber: "0914006501",
    },
    {
      id: 3,
      firstName: "Josipa",
      lastName: "Glavinic",
      phoneNumber: "0914006501",
    },
  ]);

  const [editUser, setEditUser] = useState(null);

  const addContact = (firstName, lastName, birthDate, phoneNumber) => {
    setContacts([
      ...contacts,
      {
        id: uuid(),
        firstName,
        lastName,
        birthDate,
        phoneNumber,
      },
    ]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const findItem = (id) => {
    const item = contacts.find((contact) => contact.id === id);
    setEditUser(item);
  };

  const editContact = (id, firstName, lastName, birthDate, phoneNumber) => {
    const newContact = contacts.map((contact) =>
      contact.id === id
        ? { firstName, lastName, phoneNumber, birthDate, id }
        : contact
    );
    setContacts(newContact);
    setEditUser(null);
  };

  const addFav = (id) => {
    const favourites = contacts.map((contact) =>
      contact.id === id
        ? {
            id: contact.id,
            firstName: contact.firstName,
            lastName: contact.lastName,
            birthDate: contact.birthDate,
            phoneNumber: contact.phoneNumber,
          }
        : contact
    );
    setContacts(favourites);
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        addContact,
        deleteContact,
        findItem,
        editContact,
        editUser,
        addFav,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactContextProvider;
