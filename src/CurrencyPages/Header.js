import React from "react";
import classes from "./Header.module.css";
import bitcoin from "../images/Bitcoin.png";
import graph from "./graph.svg"
import News from "./News";

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <div className="row mt-5">
            <img className={classes.img} src={bitcoin} alt="bitcoin" />
            Bitcoin(BTC) #1
          </div>
          <div className="row">$54,655.51</div>
        </div>
        <div className="col-sm-12 col-md-8">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="row mt-5">MARKET CAP</div>
              <div className="row">$1.0T</div>
              <div className="row mt-5">VOLUME 24H</div>
              <div className="row">$62.9B</div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="row mt-5">AVAILABLE SUPPLY</div>
              <div className="row">18,62,050</div>
              <div className="row mt-5">TOTAL SPPLY</div>
              <div className="row">21,000,000</div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="row mt-5">
                <i class="fa fa-globe"> Web Site</i>
              </div>
              <div className="row mt-2">
                <i class="fab fa-twitter"> Twitter</i>
              </div>
              <div className="row mt-2">
                <i class="fab fa-reddit"> Reddit</i>
              </div>
              <div className="row mt-2">
                <i class="fab fa-telegram-plane"> Telegram</i>
              </div>
            </div>
            <div className={`col-sm-6 col-lg-3`}>
              <div className={`row mt-5 ${classes.text}`}>
                <i class="fab fa-bitcoin">Bitcointalk</i>
              </div>
              <div className={`row mt-2 ${classes.text}`}>
                <i class="far fa-compass"> Explore 1</i>{" "}
              </div>
              <div className={`row mt-2 ${classes.text}`}>
                <i class="far fa-compass"> Explore 2</i>{" "}
              </div>
              <div className={`row mt-2 ${classes.text}`}>
                <i class="far fa-compass"> Explore 3</i>{" "}
              </div>
              <div className={`row mt-2 ${classes.text}`}>
                <i class="far fa-compass"> Explore 4</i>
              </div>
              <div className={`row mt-2 ${classes.text}`}>
                <i class="far fa-compass"> Explore 5</i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{textAlign:"left"}}>
      <img src={graph} alt="graph"/>
     
      </div>
      <News/>
    </div>
  );
};

export default Header;
