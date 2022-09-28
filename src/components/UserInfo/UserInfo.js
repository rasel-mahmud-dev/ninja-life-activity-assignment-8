import React from "react";
import "./style.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons'
const UserInfo = (props) => {
  return (
    <div>
      <div className="user-data">
        <div className="user-photo">
          <img  src="https://res.cloudinary.com/dbuvg9h1e/image/upload/v1660078654/netflix/images/1660078488473.jpg" alt="" />
        </div>
        <div className="">
          <h2 className="user-name">Rasel Mahmud</h2>
          <p className="user-address">
       
            <FontAwesomeIcon icon={faLocationDot} />
            Bogra Bangladesh</p>
     
        </div>
      </div>

      <div className="user-slats">
        <span className="slats-item">
          <div>
            <span className="slats-number">61</span>
            <span className="text-small small-slats-unit">kg</span>
          </div>
          <span className="slats-unit">Weight</span>
        </span>
        <span className="slats-item">
          <div>
            <span className="slats-number">5.6</span>
          </div>
          <span className="slats-unit">Height</span>
        </span>

        <span className="slats-item">
          <div>
            <span className="slats-number">24</span>
            <span className="text-small small-slats-unit">yrs</span>
          </div>
          <span className="slats-unit">Age</span>
        </span>
      </div>
    </div>
  );
};

export default UserInfo;
