import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = ({ contacts, deleteContact }) => {

  return (
    <div className="container">
      <div className="row d-flex flex-column">


        <Link to="/contacts/add" className="btn btn-outline-dark my-5 ml-auto ">
          Add Contact
        </Link>
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((contact, id) => (
                  <tr key={id}>
                    <td>{contact.firstName}</td>
                    <td>{contact.lastName}</td>
                    <td>{contact.emailAddress}</td>
                    <td>{contact.phoneNumber}</td>
                    <td>
                      <Link
                        to={`/contacts/${contact.id}`}
                        className="btn btn-sm btn-primary mr-1"
                      > 
                      Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => deleteContact(contact.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No contacts found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
