import React, { useState } from "react";
import { Link } from "react-router-dom";
import Defi from "./Defi";
import Exchnage from "./Exchnage";
import Favorites from "./Favorites";
import Heatmap from "./Heatmap";
import Tabledata from "./Tabledata";
import classes from "./shifting.module.css";
const Shifting = (props) => {
  const [val, setval] = useState("cryp");
  
  const renfun = (ab) => {
    setval(ab);

  };
  return (
    <div>
      <div
        className={`${classes.disp} container-fluid`}
        style={{ padding: "0 80px" }}
      >
        <div className="row">
          <div className={`col-2 ${val==="cryp" && classes.etx} `} onClick={() => renfun("cryp")}>
            CRYPTO
          </div>
          <div className={`col-2 ${val==="exch" && classes.etx} `} onClick={() => renfun("exch")}>
            Exchanges
          </div>
          <div className={`col-2 ${val==="fav" && classes.etx} `} onClick={() => renfun("fav")}>
            FAVORITES
          </div>
          <div className={`col-2 ${val==="defi" && classes.etx} `} onClick={() => renfun("defi")}>
            DEFI
          </div>
          <div className={`col-2 ${val==="heat" && classes.etx} `} onClick={() => renfun("heat")}>
            HEATMAP
          </div>
        </div>
      </div>
      <div className={`dropdown ${classes.dropdow}`}>
        <button
          
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{borderRadius:"14px",backgroundColor:"white" ,border:"1px solid rgba(28,27,27,0.15)",height:"2.10526rem",width:"100%"}}
        >
          Dropdown button
        </button>
        <div className="dropdown-menu active" aria-labelledby="dropdownMenuButton" style={{width:"100%"}}>
          <a className="dropdown-item"   onClick={() => renfun("cryp")}>
            crypto
          </a>
          <a className="dropdown-item"  onClick={() => renfun("exch")}>
            Exchange
          </a>
          <a className="dropdown-item"  onClick={() => renfun("fav")}>
            Favorite
          </a>
          <a className="dropdown-item"   onClick={() => renfun("defi")}>
            DEFI
          </a>
          <a className="dropdown-item"   onClick={() => renfun("heat")}>
            HEATMAP
          </a>
        </div>
      </div>

      <div>
        {val === "cryp" && <Tabledata />}
        {val === "exch" && <Exchnage />}
        {val === "fav" && <Favorites />}
        {val === "defi" && <Defi />}
        {val === "heat" && <Heatmap />}
        {/* {val === "cryp" && <tyytf></tyytf>} */}
      </div>
    </div>
  );
};

export default Shifting;
