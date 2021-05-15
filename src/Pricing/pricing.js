import React, { useState } from "react";
import classes from "./pricing.module.css";






// Pricing tab of nav bar 

const Pricing = (props) => {
  const [col] = useState("var(--eColor)");
  const [val,setval] =useState(false);
  const [price1,setprice1]=useState("4.99");
  const [price2,setprice2]=useState("19.99");
  //false
  // let inputStyle = {
  //   color: 'white'
  // }
  // //true
  // let inputStyle2 ={
  //   color:'black'
  // }
 const check=(e)=>{
  const checked = e.target.checked;
  setval(checked);
  if(checked){
    setprice1("3.49");
    setprice2("13.99");
  }
  else{
    setprice1("4.99");
    setprice2("19.99");
  }
 }
  return (
    <div>
      <main className="container">
        <div className="pricing-header  px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className={`display-4 text-${col} ${classes.title} `}>Pricing</h1>
        </div>
        <div className={classes.di}>
          <div className="row">
            <div className="col-4">
            <label className={classes.lable1} >Monthly</label>
            </div>
            <div className="col-4">
          <input
            type="checkbox"
            className={`${classes.checkbox}`}
            id="input-switch"
            onChange={check}
          />
          <label className={classes.switch} for="input-switch">
            <span className={classes.circle} />
          </label>
          </div>
          <div className="col-4">
          <label  className={classes.lable1} >Annualy</label>
          </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center ">
          <div className="col">
            <div
              className={`${classes.card} card text-${col}  mb-4 shadow-sm`}
              style={{ backgroundColor: props.thema==="light"? "rgba(28,27,27,0.07)":"#2c2b2b" }}
            >
              <div>
                <h4 className={classes.title}>PRO</h4>
              </div>
              <div className="card-body ">
                <h1 className={`card-title pricing-card-title ${classes.price}`}>
                  ${price1} <br />
                  <small className={classes.pro}>
                    {val ? "PAID ANNUALY":"PAID MONTHLY"}
                  </small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    <i className={`${classes.fas} fas fa-check`}> </i>{" "}
                    10Exchange Collection
                  </li>
                  <li>
                    <i className={`${classes.fas} fas fa-check`}> </i> 10 Wallet
                    Connections
                  </li>
                  <li>
                    <i className={`${classes.fas} fas fa-check`}> </i> Up to
                    1,000 transactions
                  </li>
                  <li>
                    <i className={`${classes.fas} fas fa-check`}> </i> Coin
                    Insights
                  </li>
                  <li>
                    <i className={`${classes.fas} fas fa-check`}> </i> Unlimited
                    access to CoinStats on iOS,Android and many other platforms
                  </li>
                </ul>
                <h1 className={classes.forgot}>PROMO CODE</h1>
                <button type="button" className={classes.bta}>
                  {" "}
                  START FREE TRIAL
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className={`${classes.card} card text-${col}  mb-4 shadow-sm`}
              style={{ backgroundColor: props.thema==="light"? "rgba(28,27,27,0.07)":"#2c2b2b" }}
            >
              <div>
                <h4 className={classes.title}>PREMIUM</h4>
              </div>
              <div className="card-body">
                <h1 className={`card-title pricing-card-title ${classes.price}`}>
                  ${price2}
                  <br />{" "}
                  <small className={classes.pro}>
                  {val ? "PAID ANNUALY":"PAID MONTHLY"}
                  </small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    <i className={`${classes.fas} fas fa-check`}> </i> Unlimited
                    Exchange Collection
                  </li>
                  <li>
                    <i className={`${classes.fas} fas fa-check`}> </i> Unlimited
                    Wallet Connections
                  </li>
                  <li>
                    <i className={`${classes.fas} fas fa-check`}> </i> Up to
                    100,000 transactions
                  </li>
                  <li>
                    <i className={`${classes.fas} fas fa-check`}> </i> Personal
                    account manager
                  </li>
                  <li>
                    <i className={`${classes.fas} fas fa-check`}> </i> Unlimited
                    access to CoinStats on iOS,Android and many other platforms
                  </li>
                </ul>
                <h1 className={classes.forgot}>PROMO CODE</h1>
                <button type="button" className={classes.bta}>
                  START FREE TRIA
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className={`${classes.card} card text-${col}  mb-4 shadow-sm`}
              style={{ backgroundColor: props.thema==="light"? "rgba(28,27,27,0.07)":"#2c2b2b" }}
            >
              <div>
                <h4 className={classes.title}>COMMUNITY</h4>
              </div>
              <div className="card-body">
                {/* <h1 className="card-title pricing-card-title">$29 <br/>
          <br/></h1> */}
                <i
                  class="fas fa-users"
                  style={{
                    textAlign: "center",
                    width: "100%",
                    fontSize: "70px",
                  }}
                ></i>
                <br />
                <br />
                <ul className="list-unstyled mt-3 mb-4">
                  <li style={{ textAlign: "center" }}>
                    Are You A Trading community <br />
                    over 10 members
                  </li>
                  <li style={{ textAlign: "center" }}>
                    We have
                    <br />
                    Special Package For You
                  </li>

                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </ul>

                <button type="button" className={classes.bta}>
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
