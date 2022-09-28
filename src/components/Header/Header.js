import React from "react";
import "./header.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="/logo.jpg" alt="" />
          <h4>Ninja-Life-Activity</h4>
        </div>
          <FontAwesomeIcon className="toggle-icon" icon={faBars} />
      </header>
      <div className="fixed-header-space"></div>
    </>
  );
};

export default Header;