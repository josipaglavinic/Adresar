import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddContact from "./components/AddContact/AddContact";
import EditContact from "./components/EditContact/EditContact";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Route exact path="/" component={() => <Login />} />
      <Route exact path="/contacts" component={() => <Home />} />
      <Route exact path="/contacts/add" component={() => <AddContact />} />
      <Route exact path="/contacts/:id" component={() => <EditContact />} />
    </div>
  );
};
export default App;
