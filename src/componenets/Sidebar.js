import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShareNodes,
  faEye,
  faArrowRight,faAnglesLeft
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="close-btn" onClick={toggleSidebar}>
      <FontAwesomeIcon icon={faAnglesLeft} />
      </button>
      <div className="content">
        <h3>
          MAITREYA BUDDHA
          <br /> IN GESTURE OF
          <br /> FEARLESSNESS
          <br /> (ABHAYA MUDRA)
        </h3>
        <div className="main-icons">
          <div className="icons">
            <FontAwesomeIcon icon={faHeart} className="sub-icons" />
            <p>0</p>
          </div>
          <div className="icons">
            <FontAwesomeIcon icon={faShareNodes} className="sub-icons" />
            <p>120</p>
          </div>
          <div className="icons">
            <FontAwesomeIcon icon={faEye} className="sub-icons" />
            <p>27</p>
          </div>
        </div>
        <p>
          Dynasty: Ahichchatra
          <br />
          Period: 200 CE
          <br />
          Material: Sandstone
          <br />
          Location: National Museum
        </p>
        <h5>Decription:</h5>
        <p>
          The Lorem Ipsum text used todaycan be tracked down to the printing
          press industry in the 16th century.An unknown printer used a
          scrambled version of Cicero's philosophical book "De Finibus Bonorum printer used a
          scrambled version of Cicero's philosophicalbook "De Finibus Bonorum
        </p>
        <FontAwesomeIcon icon={faArrowRight} className="read-icon"/>
        <a href="#">READ MORE</a>
        <div className="res-btn">
        <button className="action-btn">Add to Collection</button>
        <button className="action-btn">Souvenir</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
