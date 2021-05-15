import React, { useState } from "react";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { Input, Switch } from "antd";
import cls from "./nave.module.css";
import logo from "../images/icon.png";
import classes from "./Navbar.module.css";
import apple from "../images/applestorelogo.svg";
import google from "../images/googlestorelogo.svg";
// import Subnav from "./subnav";
// import Modal from 'react-modal';

// import PopupExample from "../Alerts/model";
// import ModalPage from "./subnav";

const Nave = (props) => {
    const [modalIsOpen,setModalIsOpen] = useState(false);
  const [col, setcol] = useState("black");
  const [curren,setcurren]=useState([
    {
      id:1,
      cur: "BTC",
      img:"https://static.coinstats.app/coins/Bitcoin6l39t.png",
      lan:"english"
    },
    { 
      id:2,
      cur: "ETH",
      img:"https://static.coinstats.app/coins/EthereumOCjgD.png",
      lan:"German"
    },
    {
      id:3,
      cur: "USD",
      img:"https://static.coinstats.app/flags/USD_r.png",
      lan:"korean"
    },
    {
      id:4,
      cur: "EUR",
      img:"https://static.coinstats.app/flags/EUR_r.png",
      lan:"japanese"
    },
    { 
      id:5,
      cur: "AUD",
      img:"https://static.coinstats.app/flags/AUD_r.png",
      lan:"chinese"
    }
  ])
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
    <div>
      <nav className="navbar navbar-expand-lg">
        <Link
          className="navbar-brand"
          style={{ color: `${col}`, marginLeft: "-5px" }}
          className={classes.icon} 
          to="/"
        >
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          CoinStats
        </Link>
        <label
         style={{marginBottom: "-0.4rem",
            marginLeft: "20px"
       }}
         className={` ${cls.fon}`}>Light</label>
        <Switch
        //  style={{ marginLeft: "10px" }}
         backgroundColor="oranger"
          defaultChecked
          onChange={onChange}
        />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
         <i class="fa fa-bars" style={{color:"orange"}}></i>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav  ">
            <li className="nav-item">
              <Link
                style={{ color: `${col}` }}
                className={`${cls.port} ${cls.fon} nav-link`}
                to="/portfoliotracker"
              >
                PortFolio Tracker <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link style={{ color: `${col}` }} className={` ${cls.fon} nav-link`} to="/">
                Live Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{ color: `${col}` }}
                className={` ${cls.fon} nav-link`}
                to="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{ color: `${col}` }}
                className={` ${cls.fon} nav-link`}
                to="/alert"
              >
                Alerts
              </Link>
            </li>
            <li className="nav-item dropdown1">
              <Link
              className={` ${cls.fon} nav-link dropdown-toggle`}
                
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: "black" }}
              >
               <span style={{ color: `${col}` }}>
                  <i class="fas fa-ellipsis-h"></i>
                </span>
                {/* <ModalPage /> */}
              </Link>
              <div className={`${cls.dropdownmenu1} dropdown-menu`} aria-labelledby="navbarDropdown" style={{backgroundColor: props.thema==="light"? "white":"black",border:"0"}} > 
 
                {/* <Modal
                  isOpen={modalIsOpen}
                  shouldCloseOnOverlayClick={false}
                  onRequestClose={()=>setModalIsOpen(false)}
                  style={
                      {
                          overlay:{
                              backgroundColor:'grey'
                          },
                          content:{
                              color:"orange"
                          }
                      }
                  }
                > <h1>Hello</h1></Modal> */}
   {/* <a className="dropdown-item" href="#"> 
    Action 01 
  </a> 
  <a className="dropdown-item" href="#"> 
    Action 02 
  </a> 
  <div className="dropdown-divider" /> 
  <a className="dropdown-item" href="#"> 
    More Content here  
  </a>   */}
  <div className={`row align-items-center ${cls.fon}`} style={{marginTop:"5px",transition:"5s",color: props.thema==="light"? "black":"white"}}>
    
    <div className="col" style={{marginRight:"10px"}}>
      24h Report
    </div>
    <div className="col">
      Press Kit
    </div>
    <div className="col">
      API Docs
    </div>
    <div className="col">
      Blog
    </div>
    <div className="col">
      Widgets
    </div>
    <div className="col">
      News
    </div>
    <div className="col" style={{marginRight:"50px"}}>
        <img src={apple} alt="apple"/>
        <img src={google} alt="google"/>

    </div>
  
  </div>
</div>

            </li>
            <div
            style={{
              borderRight: "2px solid rgba(0, 0, 0, 0.15)",
              backgroundColor: `${col}`,
            }}
          ></div>
            <li className={`${cls.drop} nav-item dropdown`}>
              <a
                className={` ${cls.fon} nav-link dropdown-toggle`}
                // className="nav-link dropdown-toggle"
                href="fake_id"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Currency
              </a>
              <div className={`${cls.boxstyle} dropdown-menu`} aria-labelledby="navbarDropdown">
               { curren.map(curr=>(
                 <a key={curr.id} className="dropdown-item" href="fake_id" style={{padding:"0"}}>
                <img className={cls.dr} src={curr.img} alt="fake"/> {curr.cur}
               </a>
               )) 
                }

              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className={` ${cls.fon} nav-link dropdown-toggle`}
                href="fake_id"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                language
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              { curren.map(curr=>(
                 <a key={curr.id} className={`dropdown-item`} href="fake_id">
                 {curr.lan}
               </a>
               )) 
                }
              </div>
            </li>
            </ul>

         
          <form className="form-inline my-2 my-lg-0">
          <Input
            placeholder="Search"
            style={{ borderRadius: "7px",opacity:"1px" }}
            suffix={<i class="far fa-search"></i>}
          />
          </form>
          <li className="nav-item">
              <Link
                style={{ color: `${col}` }}
                className={` ${cls.fon} nav-link`}
                to="/login"
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
              className={`${classes.bta}  ${cls.fon} btn nav-link`}
                style={{ color: `${col}`, backgroundColor: "#e47103",
                padding: " 0.63158rem 2.57895rem",
                borderRadius: "25px"}}
                to="/getstarted"
              >
               Get Started
              </Link>
            </li>
          
        </div>
      </nav>
    </div>
  );
};

export default Nave;
