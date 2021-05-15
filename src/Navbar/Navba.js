import React, { useState } from "react";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { Input, Switch } from "antd";
import { Navbar, Nav, Form, NavDropdown } from "react-bootstrap";
import logo from "../images/icon.png";
import classes from "./Navbar.module.css";
import Subnav from "./subnav";

import PopupExample from "../Alerts/model";
import ModalPage from "./subnav";

const Navba = (props) => {
  const [col, setcol] = useState("black");
  //false
  let inputStyle = {
    color: "white",
  };
  //true
  let inputStyle2 = {
    color: "black",
  };
  function onChange(checked) {
    if (checked) {
      props.ColorChanger();
      setcol(inputStyle2.color);
      console.log(col);
    } else {
      props.ColorChanger();
      setcol(inputStyle.color);
      console.log(col);
    }
  }
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="black"
      variant="dark"
      style={{ padding: " .5rem 0rem" }}
    >
      <Navbar.Brand
        style={{ color: `${col}`, marginLeft: "50px" }}
        className={classes.icon}
        href="/"
      >
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        CoinStats
      </Navbar.Brand>

      <Switch
        style={{ marginLeft: "180px" }}
        defaultChecked
        onChange={onChange}
      />

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav style={{ color: `${col}` }} ><Link to="/portfoliotracker">
            portfolio Tracker</Link>
          </Nav>
          <Nav.Link style={{ color: `${col}` }} href="/">
            Live Pricing
          </Nav.Link>
          <Nav.Link style={{ color: `${col}` }} href="/pricing">
            Pricing
          </Nav.Link>
          <Nav.Link style={{ color: `${col}` }} href="/alert">
            Alerts
          </Nav.Link>
          {/* <div className="d">
  <button className="d-btn">More</button>
  <div className="d-content">
    <div className="row">
      <div className="column">
        <h3>HTML and CSS</h3>
        <a href>Learn HTML</a>
        <a href>Learn CSS</a>
        <a href>Bootstrap 4</a>
      </div>
      <div className="column">
        <h3>Server Side</h3>
        <a href>Learn PHP</a>
        <a href>Learn Python</a>
        <a href>Learn Node.js</a>
      </div>
      <div className="column">
        <h3>Frameworks</h3>
        <a href>VueJS</a>
        <a href>Laravel</a>
        <a href>CodeIgniter</a>
      </div>
    </div>
  </div>
</div> */}

          <NavDropdown
            style={{ color: "black" }}
            bg="black"
            title={
              <span style={{ color: `${col}` }}>
                <i class="fas fa-ellipsis-h"></i>
              </span>
            }
            id="collasible-nav-dropdown"
          >
            <ModalPage />
          </NavDropdown>
          <div
            style={{
              borderRight: "2px solid rgba(0, 0, 0, 0.15)",
              backgroundColor: `${col}`,
            }}
          ></div>
          <NavDropdown
            style={{ color: "black" }}
            bg="black"
            title={<span style={{ color: `${col}` }}>Currency</span>}
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={<span style={{ color: `${col}` }}>Language</span>}
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <Input
            placeholder="Search"
            style={{ borderRadius: "15px" }}
            suffix={<i class="far fa-search"></i>}
          />
        </Form>
        <Nav>
          <Link to="/login">
            <Nav.Link style={{ color: `${col}` }} href="/login">
              Login
            </Nav.Link>
          </Link>
          <Nav.Link
            className={`${classes.bta} btn`}
            style={{
              color: `${col}`,
              backgroundColor: "orange",
              padding: " 0.63158rem 1.57895rem",
              borderRadius: "25px"
            }}
            eventKey={2}
            href="/getstarted"
          >
            Get Started
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navba;
