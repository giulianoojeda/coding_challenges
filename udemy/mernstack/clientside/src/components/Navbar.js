import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../App";

// @function Navbar
// @desc renders the navbar
// @returns {JSX}
const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const renderList = () => {
    if (state) {
      return [
        <li id="nav-item" key="profile">
          <Link to="/profile">Profile</Link>
        </li>,
        <li id="nav-item" key="create-post">
          <Link to="/create">Create Post</Link>
        </li>,
        <li id="nav-item" key="logout">
          <button
            className="btn #c62828 red darken-3"
            onClick={() => {
              localStorage.clear();
              dispatch({ type: "LOGOUT" });
              history.push("/signin");
            }}
          >
            Logout
          </button>
        </li>,
      ];
    } else {
      return [
        <li id="nav-item" key="signin">
          <Link to="/signin">Login</Link>
        </li>,
        <li id="nav-item" key="signup">
          <Link to="/signup">Signup</Link>
        </li>,
      ];
    }
  };
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to={state ? "/" : "/signin"} className="brand-logo left">
          Instagram
        </Link>
        <ul id="nav-mobile" className="right">
          {renderList()}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
