import React from "react";
import "./header.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Header = ({onToggleMobileSidebar}) => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="" />
        <img className="logo-name" src="/logo-name.svg" alt=""/>
        </div>
          <FontAwesomeIcon className="toggle-icon" onClick={onToggleMobileSidebar} icon={faBars} />
      </header>
      <div className="fixed-header-space"></div>
    </>
  );
};

export default Header;