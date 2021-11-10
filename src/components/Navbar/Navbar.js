import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

const Navbar = () => {
  return (
    <div className="col-md-12 bg-dark py-2">
      <nav className="navbar bg-dark navbar-dark">
        <Link to={"/contacts"} className="navbar-brand ml-5">
          Contact Book
        </Link>
        <Link>
        Favourites contacts
        </Link>
        <Search />
        <Link to='/' ><button type="button" class="btn btn-light">Log out</button> </Link>

      </nav>
    </div>
  );
};

export default Navbar;
