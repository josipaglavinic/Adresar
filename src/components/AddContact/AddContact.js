import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const AddContact = ({ contacts, addContact }) => {
  const [birthDate, setBirthDate] = useState(new Date());
  const [phoneNumber, setPhoneNumber] = useState();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [pagerNumber, setPagerNumber] = useState('')

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkContactEmailExists = contacts.filter((contact) =>
      contact.emailAddress === emailAddress ? contact : null
    );
    const checkContactPhoneExists = contacts.filter((contact) =>
      contact.phoneNumber === phoneNumber ? contact : null
    );

    if (!emailAddress || !firstName || !lastName || !phoneNumber) {
      return toast.warning("Please enter first name, last name, email address and telephone number.");
    }
    if (checkContactEmailExists.length > 0) {
      return toast.error("This email already exists.");
    }
    if (checkContactPhoneExists.length > 0) {
      return toast.error("This phone number already exists.");
    }

    const data = {
      id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
      emailAddress,
      firstName, lastName, phoneNumber, telephoneNumber, pagerNumber, birthDate
    };

    addContact(data);
    toast.success("Contact added successfully!!");
    history.push("/contacts");
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add Contact</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="First name"
                maxLength='20'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                maxLength='30'
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="date"
                maxDate={new Date()}
                placeholder="BirthDate"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </div>


            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="Phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="Telephone"
                value={telephoneNumber}
                onChange={(e) => setTelephoneNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="Pager"
                value={pagerNumber}
                onChange={(e) => setPagerNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Contact"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  addContact: (data) => {
    dispatch({ type: "ADD_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
