import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";

const EditContact = ({ contacts, updateContact }) => {
  const { id } = useParams();
  const history = useHistory();
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    setFirstName(currentContact.firstName);
    setLastName(currentContact.lastName);
    setEmailAddress(currentContact.emailAddress);
    setTelephoneNumber(currentContact.telephoneNumber);
    setPagerNumber(currentContact.pagerNumber);
    setBirthDate(currentContact.birthDate)
    setPhoneNumber(currentContact.phoneNumber);
  }, [currentContact]);

  const [birthDate, setBirthDate] = useState(new Date());
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [pagerNumber, setPagerNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkContactEmailExists = contacts.filter((contact) =>
      contact.emailAddress === emailAddress && contact.id !== currentContact.id
        ? contact
        : null
    );
    const checkContactPhoneExists = contacts.filter((contact) =>
      contact.phoneNumber === phoneNumber && contact.id !== currentContact.id
        ? contact
        : null
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
      id: currentContact.id,
      firstName,
      lastName,
      birthDate,
      phoneNumber,
      telephoneNumber,
      emailAddress,
      pagerNumber
    };

    updateContact(data);
    toast.success("Contact updated successfully!!");
    history.push("/contacts");
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => history.push("/contacts")}
        >
          Go back
        </button>
        <div className="col-md-6 mx-auto shadow p-5">
          {currentContact ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  value={firstName}
                  placeholder={"First name"}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={lastName}
                  placeholder={"Last name"}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={birthDate}
                  type="date"
                  placeholder={"Last name"}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={emailAddress}
                  placeholder={"Email"}
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={phoneNumber}
                  placeholder={"Phone"}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={telephoneNumber}
                  placeholder={"Telephone"}
                  onChange={(e) => setTelephoneNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={pagerNumber}
                  placeholder={"Pager"}
                  onChange={(e) => setPagerNumber(e.target.value)}
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Update Contact
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => history.push("/contacts")}
                >
                  cancel
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No Contact Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  updateContact: (data) => {
    dispatch({ type: "UPDATE_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
