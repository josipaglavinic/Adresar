import React, { useState, useContext, useEffect } from "react";
import { ContactContext } from "../../context/ContactContext";

const AddContactForm = () => {
  const { addContact, editUser, editContact } = useContext(ContactContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editUser === null) {
      addContact(firstName, lastName, birthDate, phoneNumber);
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setBirthDate("");
    } else {
      editContact(editUser.id, firstName, lastName, phoneNumber, birthDate);
    }
  };

  useEffect(() => {
    if (editUser !== null) {
      setFirstName(editUser.firstName);
      setLastName(editUser.lastName);
      setPhoneNumber(editUser.phoneNumber);
      setBirthDate(editUser.birthDate);
      console.log(editUser);
    } else {
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setBirthDate("");
    }
  }, [editUser]);

  return (
    <div className="list-container">
      <div className="wrapper-newcontact">
        <h2 className="newcontact-header">Add new contact</h2>
        <form onSubmit={handleSubmit} className="form">
          <label className="lable"> Enter first name: </label>
          <input
            className="newcontact-input"
            type="text"
            placeholder="Add First Name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label className="lable"> Enter last name: </label>
          <input
            className="newcontact-input"
            type="text"
            placeholder="Add Last Name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label className="lable"> Enter birthdate: </label>
          <input
            className="newcontact-input"
            type="date"
            required
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <label className="lable"> Enter phone number: </label>
          <input
            className="newcontact-input"
            type="number"
            placeholder="Add Phone number"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button className="button">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddContactForm;
