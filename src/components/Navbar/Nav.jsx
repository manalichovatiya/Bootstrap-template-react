import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ data }) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          {data?.map((val, ind) => {
            return (
              <li class="nav-item active">
                <Link to={`${val.path}`} class="nav-link">{val.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;