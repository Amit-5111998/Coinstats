import React from 'react'
import classes from "./mainsec.module.css";
const Header = () => {
    return (
      
      <div className="d-flex justify-content-center">
        <div className={`${classes.center} ${classes.disp}`}>
        <h1 className={classes.tx}>Crypto Tracker</h1>
        <hr className={classes.new1} />
        <ul className=" d-flex flex-column flex-sm-row">
          <li>
            <div style={{color:"var(--eColor)"}} className="big-stats-content">
              <div  className={classes.headingtext}>
                <a style={{color:"var(--eColor)"}} href="Fake_page">Market Cap</a>
              </div>
              <div className="big-stats-value">
                <a href="Fake_page"> ֏961,989,621,327,131.20</a>{" "}<span style={{color:"green",marginLeft:"5px"}} >4.06%</span>
               
              </div>
            </div>{" "}
          </li>
          <li >
            <div className="big-stats-content" style={{marginLeft:"40px"}}>
              <div className={classes.headingtext}>
                <a  href="/en/market-cap-charts/">Volume 24h</a>
              </div>
              <div className="big-stats-value">
                <a href="/en/market-cap-charts/"> ֏101,414,524,874,796.31 </a><span style={{color:"green",marginLeft:"5px"}}>  10.16%</span>
                <div className="big-stats-percent-block"> 
                  <a
                    className="percent-wrapper text-up"
                    href="/en/market-cap-charts/"
                  >
                    <span className="icon-priceUp" />
                    
                  </a>
                </div>
              </div>
            </div>{" "}
          </li>
          <li>
            <div className="big-stats-content" style={{marginLeft:"40px"}}>
              <div className={classes.headingtext}>
                <a href="/en/market-cap-charts/">BTC Dominance</a>
              </div>
              <div className="big-stats-value">
                <a href="/en/market-cap-charts/"> 59.68%</a><span style={{color:"green",marginLeft:"5px"}}>0.35%</span>
                <div className="big-stats-percent-block">
                  <a
                    className="percent-wrapper text-up"
                    href="/en/market-cap-charts/"
                  >
                    <span className="icon-priceUp" />
                   
                  </a>
                </div>
              </div>
            </div>{" "}
          </li>
        </ul>

        <hr className={classes.new1} />
      </div>
      </div>
      
    )
}

export default Header
