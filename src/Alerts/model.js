import React from "react";
import Popup from "reactjs-popup";
import classes from "./Alert.module.css";
//import cls from "./model.module.css";

const PopupExample = () => (
  <Popup
    trigger={
      <button
        style={{ marginTop: "20px",color:"orange",border:"1px solid grey",width:"190px"}}
        className={classes.btn}
        onClick={<PopupExample />}
      >
        PRICE LIMIT
      </button>
    }
    modal
    nested
  >
    {(close) => (
    
      
          <div className="jsx-4109874676 modal-content">
            <div className="jsx-4109874676 changing-content-wrapper">
              <div className="jsx-4109874676 changing-content showing">
                <div className="alerts-modal-container">
                  <div className="input-section">
                    <span className="secondary-label ">COIN</span>
                    <div className="search-wrapper ">
                      <div className="jsx-931209423 search-dropdown-container ">
                        <div className="jsx-931209423 search-dropdown-placeholder">
                          <div className="jsx-931209423 search-dropdown-enable-placeholder" />
                          <div className="jsx-931209423 input-container ">
                            <img
                              src="https://static.coinstats.app/coins/Bitcoin6l39t.png"
                              alt="search icon"
                              className="jsx-931209423 selected-icon"
                            />
                            <input
                              placeholder="Search"
                              disabled
                              className="jsx-931209423"
                              defaultValue="Bitcoin (BTC)"
                            />
                          </div>
                          <span className="jsx-931209423 icon-clear" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="input-section">
                    <span className="secondary-label ">EXCHANGE • PAIR</span>
                    <div className="search-wrapper">
                      <div className="jsx-931209423 search-dropdown-container ">
                        <div className="jsx-931209423 search-dropdown-placeholder">
                          <div className="jsx-931209423 search-dropdown-enable-placeholder" />
                          <div className="jsx-931209423 input-container ">
                            <input
                              placeholder="Please select exchange-pair"
                              disabled
                              className="jsx-931209423"
                              defaultValue="Average By Volume • BTC - AMD"
                            />
                          </div>
                          <span className="jsx-931209423 icon-search" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row-section">
                    <div className="col-section">
                      <span className="secondary-label ">CONDITION</span>
                      <div className="dropdown-section">
                        <div className="jsx-2262109736 dropdown  ">
                          <div className="jsx-2262109736 dropdown-placeholder">
                            <span className="table-row">More than</span>
                            <span className="jsx-2262109736 icon-dropdown_arrow close" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-section">
                      <span className="secondary-label ">ALERT FREQUENCY</span>
                      <div className="dropdown-section">
                        <div className="jsx-2262109736 dropdown  ">
                          <div className="jsx-2262109736 dropdown-placeholder">
                            <span className="table-row">1 Time</span>
                            <span className="jsx-2262109736 icon-dropdown_arrow close" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row-section">
                    <div className="col-section">
                      <span className="secondary-label ">PRICE</span>
                      <div className="jsx-1485860805 text-box-wrapper ">
                        <input
                          type="number"
                          placeholder
                          name
                          className="jsx-1485860805 text-box"
                          defaultValue="29593452.46"
                        />
                        <div className="jsx-1485860805 with-component">
                          <div className="input-right-sign">AMD</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row-section">
                    <div className="col-section">
                      <div className="notes-section">
                        <span className="secondary-label ">NOTES</span>
                        <div className="jsx-1485860805 text-box-wrapper ">
                          <input
                            type="text"
                            placeholder="Type Something..."
                            name
                            className="jsx-1485860805 text-box"
                            defaultValue
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="buttons-container">
                    <button
                      type="button"
                      id
                      className="jsx-1426819953 standart-button  secondary"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      id
                      className="jsx-1426819953 standart-button  primary"
                    >
                      SAVE
                    </button>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div className="jsx-4109874676 bottom-section" />
          </div>
        
        
      
    )}
  </Popup>
);

export default PopupExample;
