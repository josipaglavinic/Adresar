import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h2>Contacts Book</h2>
      <div className="navlinks">
        <Link to="/">
          <button className="navlink">Contacts</button>
        </Link>
        <Link to="/favourites">
          <button className="navlink">Favourites</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Header;
