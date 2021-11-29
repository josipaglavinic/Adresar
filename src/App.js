import "./app.css";
import React from "react";
import ContactsList from "./components/Contacts/ContactsList";
import ContactContextProvider from "./context/ContactContext";
import Header from "./components/Header/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Favourites from "./components/Contacts/Favourites/Favourites";
import EditContact from "./components/Contacts/EditContact";
import AddContactForm from "./components/Contacts/AddContactForm";

function App() {
  return (
    <div className="App">
      <ContactContextProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<ContactsList />} />
          <Route path="/contacts/add" element={<AddContactForm />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/contacts/add" element={<EditContact />} />
        </Routes>
      </ContactContextProvider>
    </div>
  );
}

export default App;
