import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faComment,
  faGift,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import profilePic from "../../Images/profile-picture.png";
import "./Navigation.css";

const Navigation = () => {
  const element1 = <FontAwesomeIcon icon={faBell} />;
  const element2 = <FontAwesomeIcon icon={faComment} />;
  const element3 = <FontAwesomeIcon icon={faGift} />;
  const element4 = <FontAwesomeIcon icon={faCog} />;

  return (
    <div className="nav">
      <div>
        <h1>Dashboard</h1>
        <h6 style={{ color: "rgb(51, 51, 51)" }}>Welcome to Davur Admin</h6>
      </div>
      <form className="form">
        <input type="text" placeholder="Search"></input>
      </form>
      <Dropdown>
        <Dropdown.Toggle variant="Light" id="dropdown-basic">
          {element1}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Notification 1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Notification 2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Notification 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="Light" id="dropdown-basic">
          {element2}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Comments 1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Comments 2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Comments 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="Light" id="dropdown-basic">
          {element3}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Points 1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Points 2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Points 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="Light" id="dropdown-basic">
          {element4}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Privacy</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Contacts</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Policy</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img style={{ width: 40, marginRight: 10 }} src={profilePic} alt="" />
        <div>
          <h4>Biden</h4>
          <h6 style={{ color: "rgb(130, 133, 135)" }}>Admin</h6>
        </div>
        <Dropdown>
          <Dropdown.Toggle
            variant="Light"
            id="dropdown-basic"
          ></Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">My Archived Jobs</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Support and FAQ</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navigation;
