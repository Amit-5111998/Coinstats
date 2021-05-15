import { Col, Row, Switch } from "antd";
//import Search from "antd/lib/input/Search";
import React from "react";
import { Container } from "react-bootstrap";
import PopupExample from "./model";
import classes from "./Alert.module.css";
import { Link } from "react-router-dom";

function Alert() {

 
  return (
      <div>
          <h1 style={{textAlign:"center",fontSize:"1.26316rem",fontWeight:"300",fontStretch:"normal",fontStyle:"normal",letterSpacing :"normal",marginTop:"50px",color:"var(--eColor)"}}>ALERTS</h1>
    <div style={{marginTop:"70px"}}>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-12 col-md-5" style={{width:"600px"}}>
          
            <div className={classes.medi}>
              <div>
                <h1 style={{fontSize:"1.26316rem",fontWeight:"300",fontStretch:"normal",fontStyle:"normal",letterSpacing :"normal",color:"var(--eColor)",textAlign:"left"}}>Auto</h1>
              </div>
              <div className={classes.lining}>
                <hr />
              </div>
              <div className={classes.txt}>SIGNIFICANT CHANGE</div>
              <div className={classes.lining}>
                <hr />
              </div>
              <div className={classes.lining}>
              <div className="media">
                  <div className="media-body">
                    <h1 className={classes.nrl}>
                      Price Notification
                    </h1>
                  </div>
                  <Switch></Switch>
                </div>
              </div>
              <div className={classes.lining}>
                <button style={{border:"1px solid #e7e7e7"}} className={`${classes.btn}`}>LOW</button>
                <button style={{border:"1px solid #e7e7e7"}} className={classes.btn}>MEDIUM</button>
                <button style={{border:"1px solid #e7e7e7"}} className={classes.btn}>HIGH</button>
              </div>
              <div style={{marginTop:"20px"}} className={classes.lining}>
                <p>
                  Adjustr a sensitivity and receive the optimal amount of
                  significant change notification
                </p>
              </div>
              <div className={classes.lining}>MARKET UPDATES</div>
              <hr className={classes.lining} />
              
              <div className={classes.lining}>
              <div className="media">
                  <div className="media-body">
                    <h1 className={classes.nrl}>
                      Breaking News Notifications
                    </h1>
                  </div>
                  <Switch></Switch>
                </div>
              </div>
              <br/>
              <div className={classes.lining}>
              <div className="media">
                  <div className="media-body">
                    <h1 className={classes.nrl}>
                      New pair Notifications<sup style={{backgroundColor:"#e47306",color:"white",borderRadius:"25px"}}>PRO</sup>
                    </h1>
                  </div>
                  <Switch></Switch>
                </div>
              </div>
              <br/>
              <div className={classes.lining}>
              <div className="media">
                  <div className="media-body">
                    <h1 className={classes.nrl}>
                      Pump Notifications<sup style={{backgroundColor:"#e47306",color:"white",borderRadius:"25px"}}>PRO</sup>
                    </h1>
                  </div>
                  <Switch></Switch>
                </div>
              </div>
              <br/>
              <div className={classes.lining}>
              <div className="media">
                  <div className="media-body">
                    <h1 className={classes.nrl}>
                      Team Update Notifications
                    </h1>
                  </div>
                  <Switch></Switch>
                </div>
              </div>
              <br/>
              <div className={classes.lining}>PORTFOLIO</div>
              <hr className={classes.lining} />
              <div className={classes.lining}>
                <div className="media">
                  <div className="media-body">
                    <h1 className={classes.nrl}>
                      Portfolio Value Notifications
                    </h1>
                  </div>
                  <Switch></Switch>
                </div>
              </div>
              <input placeholder="5:30 PM" style={{borderRadius:"9px",width:"400px",height:"30px"}}className={classes.lining}/>
              <p style={{marginTop:"12px"}}><strong style={{color:"orange"}}>Learn more</strong> Learn more about the automatic alerts</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-7">
            <div>
              <h1 style={{fontSize:"1.26316rem",fontWeight:"300",fontStretch:"normal",fontStyle:"normal",letterSpacing :"normal",color:"var(--eColor)",textAlign:"left"}}>Custom</h1>
              <hr style={{width:"100%"}}/>
            </div>
            <div>
             {/* <PopupExample/> */}
            <Link to="/login"> <button style={{marginTop: "20px",color:"orange",border:"1px solid grey",width:"190px"}} className={classes.btn}>Price Limit</button></Link>
            </div>
            <div>
            <Link to="/login">  <button style={{marginTop: "20px",color:"orange",border:"1px solid grey",width:"190px"}} className={classes.btn}>Market cap</button> </Link>
              {/* <i class="far fa-sigma">Price</i> */}
            </div>
            <div>
            <Link to="/login"> <button style={{marginTop: "20px",color:"orange",border:"1px solid grey",width:"190px"}} className={classes.btn}> VOLUME</button> </Link>
            </div>
          </div>
        </div>
        </div>
    </div>
    </div>
  );
}

export default Alert;
