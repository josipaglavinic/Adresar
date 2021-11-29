// import React, { useState, useContext } from "react";
// import { ContactContext } from "../../context/ContactContext";

// const EditContact = (contact) => {
//   const { editUser, setEditUser } = useContext(ContactContext);

//   // const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   // const [phoneNumber, setPhoneNumber] = useState("");
//   // const [birthDate, setBirthDate] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     //   //   addContact(firstName, lastName, birthDate, phoneNumber);
//     //   setFirstName("");
//     //   setLastName("");
//     //   setPhoneNumber("");
//     //   setBirthDate("");
//     setEditUser(value);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="form">
//       <input
//         className="newcontact-input"
//         type="text"
//         placeholder="Add First Name"
//         required
//         value={contact.firstName}
//         onChange={(e) => setFirstName(e.target.value)}
//       />
//       <input
//         className="newcontact-input"
//         type="text"
//         placeholder="Add Last Name"
//         required
//         value={contact.lastName}
//         onChange={(e) => setLastName(e.target.value)}
//       />
//       <input
//         className="newcontact-input"
//         type="date"
//         required
//         value={contact.birthDate}
//         onChange={(e) => setBirthDate(e.target.value)}
//       />
//       <input
//         className="newcontact-input"
//         type="number"
//         placeholder="Add Phone number"
//         required
//         value={contact.phoneNumber}
//         onChange={(e) => setPhoneNumber(e.target.value)}
//       />
//       <button className="button">Edit</button>
//     </form>
//   );
// };

// export default EditContact;
