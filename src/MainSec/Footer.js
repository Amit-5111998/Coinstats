import React from 'react'
import classes from "./mainsec.module.css";

import base from "../images/basere.svg";
import base1 from "../images/base.svg";
import dollar from "../images/dollar.svg";
import dimond1 from "../images/dimond1.svg";
import dimond2 from "../images/dimond2.svg";
import logo from "../images/icon.png";
const Footer = () => {
    return (
        <div className="container" style={{marginTop:"50px"}}>
        <div className="row">
          <div className="col-xs-12 col-sm-8">
            <ul className={classes.bigintro}>
              <li className={classes.top}>
                <h1>
                  <span
                    className={classes.mainprice}
                    title="Track Your Crypto Portfolio"
                  >
                    Track Your Crypto Portfolio
                  </span>{" "}
                  <br />
                </h1>
               
                  <li>
                    <div className="into-icon icon-portfolio" />
                    <span className="title" syle={{marginTop:"10px"}}>
                      <i className={`${classes.fab} fas fa-briefcase`}>
                        {" "}
                        Auto sync your exchanges and wallets
                      </i>
                    </span>
                  </li>
                  <li>
                    <div className="into-icon icon-news" />
                    <span className="title" >
                      <i className={`${classes.fab} far fa-id-card`} syle={{marginTop:"30px"}}>
                        {" "}
                        Personalized crypto news feed
                      </i>
                    </span>
                  </li>
                  <li style={{marginTop:"30px"}}>
                    <div className="into-icon icon-main" />
                    <i className={`${classes.fab} title`} syle={{marginTop:"30px"}}>
                      <img src={logo} alt="logo" />
                      More than 8000 cryptocurrencies and 300 exchanges
                      available
                    </i>
                  </li>
               
                <div className="btn-section">
                  <a
                    style={{ textAlign: "center" }}
                    className="button-with-link"
                    href="/en/login/"
                  >
                    <button
                      type="button"
                      id
                      className={classes.gestartedbtn}
                      
                    >
                      Get Started
                    </button>
                  </a>
                  <p className="table-column-title" style={{textAlign:"center"}}>
                    NO CREDIT CARD NEEDED
                  </p>
                </div>
              </li>
              <li></li>
            </ul>
          </div>
          <div className=" col-xs-12 col-sm-4">
            <ul className={classes.hh}>
              <li>
                <img className={classes.fish} src={dollar} alt="banner" />
                <img className={classes.fishes} src={base} alt="banner" />
                <img className={classes.fish} src={dimond1} alt="banner" />
                <img className={classes.fish} src={dimond2} alt="banner" />
                <img className={classes.fish} src={base1} alt="banner" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Footer
