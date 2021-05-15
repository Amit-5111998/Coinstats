import React from "react";
import Person from "./Svgfile/Person";
import classes from "./Platformstats.module.css";
import Coin from "./Svgfile/Coin";
import Connect from "./Svgfile/Connect";
import Transaction from "./Svgfile/Transaction";

const PlatformStats = () => {
  return (
    <div style={{marginTop:"10rem",height:"184px",marginLeft:"5px"}}>
      <div className="container mt-5" style={{textAlign:"center"}}>
        <div className="row align-items-center div5">
          <div className="col"><Person/> <div className={classes.uptext}>500,000</div><div>Users</div></div>
          <div className="col"><Coin/><div className={classes.uptext}>$5 Billion</div><div>Total Tracked</div></div>
          <div className="col"><Connect/><div className={classes.uptext}>100,000+</div><div>Exchange Account Connected</div></div>
          <div className="col"><Transaction/><div className={classes.uptext}>30 Million</div><div>Transaction and Trades</div></div>
        </div>
      </div>
    </div>
  );
};

export default PlatformStats;
