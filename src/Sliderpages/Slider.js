import React from "react";
import chart from "./images/chart.png";
import wallet from "./images/wallet.png";
import exchange from "./images/exchange.png";
import classes from "./Slider.module.css";
import Rol from "../svgfiles/rol.svg";
import payment from "./images/payment.png";
import Fade from 'react-reveal/Fade';



//animation div of portfolio tracking tab 

const Slider = () => {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row mt-5">
        <div className=" col-sm-12 col-lg-5">
          <Fade left>
          <div
            className={`w3-container w3-center`}
            style={{ animationDelay: "50s" }}
          >
            <div className="jsx-3028322757 icon-container small-lottie-icon">
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  margin: "0 auto",
                  outline: "none",
                }}
                title
                role="button"
                aria-label="animation"
                tabIndex={0}
              >
                <img className={classes.rotate} src={Rol} alt="rol" />
              </div>
            </div>
            <div className="jsx-3028322757 info-texts-section">
              <span
                style={{ color: "#fca758" }}
                className="jsx-3028322757 info-texts-header"
              >
                Access all your crypto from one screen
              </span>
              <div className="jsx-3028322757 info-texts-description">
                You have entered the crypto market.
                <span className="jsx-3028322757 highlighted">
                  {" "}
                  And it approves of no hiatus.
                </span>
              </div>
              <div className="jsx-3028322757 info-texts-description">
                Managing your portfolio, your Etherum and Metamask wallets,
                trading on diverse exchange accounts while tracking market
                fluctuations from one platform gives an apparent power of
                broader awareness.
                <span className="jsx-3028322757 highlighted">
                  {" "}
                  Use the force.
                </span>
              </div>
              <div className="jsx-3028322757 info-texts-description">
                <span className="jsx-3028322757 highlighted">
                  Track, analyse and get market insights for Bitcoin, Ripple and
                  over 7000 other coins.
                </span>{" "}
                Use a cryptotracker that ensures instant visibility and the
                comfort of a smart interface. Manage your whole crypto
                portfolio.{" "}
                <span className="jsx-3028322757 highlighted">
                  All in one place.
                </span>
              </div>
            </div>
          </div>
          </Fade>
        </div>
       
        <div className=" col-sm-12 col-lg-7 mt-3">
          <Fade right>
          <div
            className="w3-container w3-center w3-animate-right"
            style={{ animationDelay: "5s" }}
          >
            <img className={classes.chart} src={chart} alt="chart" />
            <img className={classes.wallet} src={wallet} alt="chart" />
          </div>
          </Fade>
        
        </div>
      </div>
      {/* second page */}
      <div className="row mt-5">
      <div className=" col-sm-12 col-lg-7 mt-3">
        <Fade left>
          <div className="jsx-3028322757 info-images-container " style={{ animationDelay: "5s" }}>
            <div className="jsx-3028322757 info-images-section">
              <img
                src={exchange}
                alt="Crypto Portfolio Exchange"
                className="jsx-3028322757 portfolio-exchange-image"
              />
            </div>
          </div>
          </Fade>
        </div>
        <div className=" col-sm-12 col-lg-5">
          <Fade right>
          <div
            className={`w3-container w3-center`}
            style={{ animationDelay: "4s" }}
          >
            <div className="jsx-3028322757 icon-container small-lottie-icon">
              <div
              className={classes.stage}
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  margin: "0 auto",
                  outline: "none",
                }}
                title
                role="button"
                aria-label="animation"
                tabIndex={0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${classes.box} ${classes.bounce}`}
                  viewBox="0 0 50 50"
                  width={50}
                  height={50}
                  preserveAspectRatio="xMidYMid meet"
                  style={{
                    width: "100%",
                    height: "100%",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  <defs>
                    <clipPath id="__lottie_element_49">
                      <rect width={50} height={50} x={0} y={0} />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#__lottie_element_49)">
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: "block" }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,25,34.5)">
                        <path
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          fillOpacity={0}
                          strokeMiterlimit={10}
                          stroke="rgb(255,255,255)"
                          strokeOpacity={1}
                          strokeWidth={2}
                          d=" M22,-8.5 C22,-8.5 22,4.5 22,4.5 C22,6.705999851226807 20.20599937438965,8.5 18,8.5 C18,8.5 -18,8.5 -18,8.5 C-20.20599937438965,8.5 -22,6.705999851226807 -22,4.5 C-22,4.5 -22,-8.5 -22,-8.5 C-22,-8.5 -10.614999771118164,-8.5 -10.614999771118164,-8.5 C-8.812999725341797,-8.5 -7.192999839782715,-7.499000072479248 -6.388000011444092,-5.888999938964844 C-6.388000011444092,-5.888999938964844 -6.014999866485596,-5.140999794006348 -6.014999866485596,-5.140999794006348 C-4.892000198364258,-2.8959999084472656 -2.5869998931884766,-1.5 0,-1.5 C2.5869998931884766,-1.5 4.892000198364258,-2.8949999809265137 6.015999794006348,-5.140999794006348 C6.015999794006348,-5.140999794006348 6.389999866485596,-5.888999938964844 6.389999866485596,-5.888999938964844 C7.195000171661377,-7.499000072479248 8.814000129699707,-8.5 10.614999771118164,-8.5 C10.614999771118164,-8.5 22,-8.5 22,-8.5z"
                        />
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: "block" }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,25,28.5)">
                        <path
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          fillOpacity={0}
                          strokeMiterlimit={10}
                          stroke="rgb(255,255,255)"
                          strokeOpacity={1}
                          strokeWidth={2}
                          d=" M-22,9.5 C-22,9.5 -22,-5.5 -22,-5.5 C-22,-7.709000110626221 -20.208999633789062,-9.5 -18,-9.5 C-18,-9.5 18,-9.5 18,-9.5 C20.208999633789062,-9.5 22,-7.709000110626221 22,-5.5 C22,-5.5 22,9.5 22,9.5"
                        />
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: "block" }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,25,25)">
                        <path
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          fillOpacity={0}
                          strokeMiterlimit={10}
                          stroke="rgb(255,255,255)"
                          strokeOpacity={1}
                          strokeWidth={2}
                          d=" M22,12 C22,12 22,-8 22,-8 C22,-10.208999633789062 20.208999633789062,-12 18,-12 C18,-12 -18,-12 -18,-12 C-20.208999633789062,-12 -22,-10.208999633789062 -22,-8 C-22,-8 -22,12 -22,12"
                        />
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,0,0)"
                      opacity={1}
                      style={{ display: "block" }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,25,22)">
                        <path
                          strokeLinecap="butt"
                          strokeLinejoin="miter"
                          fillOpacity={0}
                          strokeMiterlimit={10}
                          stroke="rgb(255,255,255)"
                          strokeOpacity={1}
                          strokeWidth={2}
                          d=" M-22,15 C-22,15 -22,-11 -22,-11 C-22,-13.208999633789062 -20.208999633789062,-15 -18,-15 C-18,-15 18,-15 18,-15 C20.208999633789062,-15 22,-13.208999633789062 22,-11 C22,-11 22,15 22,15"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className="jsx-3028322757 info-texts-section">
              <span style={{color:"#fca758"}} className="jsx-3028322757 info-texts-header">
                Trade on all of your exchange accounts from one platform
              </span>
              <div className="jsx-3028322757 info-texts-description">
                Having multiple exchange accounts is a crypto normality.{" "}
                <span className="jsx-3028322757 highlighted">
                  Trading on all of them
                </span>{" "}
                from one place is a{" "}
                <span className="jsx-3028322757 highlighted">privilege.</span>
              </div>
              <div className="jsx-3028322757 info-texts-description">
                Attach your Binance, Coinbase and other accounts to CoinStats
                and operate your funds from a single crypto platform. We give
                you this privilege{" "}
                <span className="jsx-3028322757 highlighted">
                  without giving withdrawal access
                </span>{" "}
                to your funds.
              </div>
              <div className="jsx-3028322757 info-texts-description">
                Gain time and focus on the entire crypto portfolio. Opt in for
                comfort with no withdrawal risk.
              </div>
            </div>
          </div>
          </Fade>
        </div>
      </div>
      {/* third section */}
      <div className="row">
      <div className=" col-sm-12 col-lg-5">
        <Fade left>
          <div
            className={`w3-container w3-center`}
            style={{ animationDelay: "4s" }}
          >
            <div className="jsx-3028322757 icon-container small-lottie-icon">
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  margin: "0 auto",
                  outline: "none",
                }}
                title
                role="button"
                aria-label="animation"
                tabIndex={0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width={50}
                  height={50}
                  preserveAspectRatio="xMidYMid meet"
                  style={{
                    width: "100%",
                    height: "100%",
                    transform: "translate3d(0px, 0px, 0px)",
                    
                  }}
                  className={`${classes.box} ${classes.bounce}`}
                >
                  <defs>
                    <clipPath id="__lottie_element_63">
                      <rect width={50} height={50} x={0} y={0} />
                    </clipPath>
                    <filter
                      id="__lottie_element_69"
                      filterUnits="objectBoundingBox"
                      x="0%"
                      y="0%"
                      width="100%"
                      height="100%"
                    >
                      <feComponentTransfer in="SourceGraphic">
                        <feFuncA type="table" tableValues="1.0 0.0" />
                      </feComponentTransfer>
                    </filter>
                    <mask id="__lottie_element_68" mask-type="alpha">
                      <g filter="url(#__lottie_element_69)">
                        <rect
                          width={50}
                          height={50}
                          x={0}
                          y={0}
                          fill="#ffffff"
                          opacity={0}
                        />
                        <g
                          transform="matrix(0.8831999897956848,0,0,0.8831999897956848,5.182999610900879,12.310399055480957)"
                          opacity={1}
                          style={{ display: "block" }}
                        >
                          <g
                            opacity={1}
                            transform="matrix(1,0,0,1,22.25,15.25)"
                          >
                            <path
                              fill="rgb(0,0,0)"
                              fillOpacity={1}
                              d=" M18,-15 C18,-15 -18,-15 -18,-15 C-20.208999633789062,-15 -22,-13.208999633789062 -22,-11 C-22,-11 -22,11 -22,11 C-22,13.208999633789062 -20.208999633789062,15 -18,15 C-18,15 18,15 18,15 C20.208999633789062,15 22,13.208999633789062 22,11 C22,11 22,-11 22,-11 C22,-13.208999633789062 20.208999633789062,-15 18,-15z"
                            />
                          </g>
                        </g>
                      </g>
                    </mask>
                  </defs>
                  <g clipPath="url(#__lottie_element_63)">
                    <g
                      mask="url(#__lottie_element_68)"
                      style={{ display: "block" }}
                    >
                      <g
                        transform="matrix(0.8831999897956848,0,0,0.8831999897956848,1.208600401878357,8.33599853515625)"
                        opacity={1}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,27,13.5)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M-22,-2.5 C-22,-2.5 22,-2.5 22,-2.5 C22,-2.5 22,2.5 22,2.5 C22,2.5 -22,2.5 -22,2.5 C-22,2.5 -22,-2.5 -22,-2.5z"
                          />
                        </g>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(255,255,255)"
                            fillOpacity={1}
                            d=" M11,20 C11,20 27,20 27,20 C27,20 11,20 11,20z"
                          />
                        </g>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fillOpacity={0}
                            stroke="rgb(255,255,255)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M11,20 C11,20 27,20 27,20"
                          />
                        </g>
                        <g opacity={1} transform="matrix(1,0,0,1,27,20)">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="miter"
                            fillOpacity={0}
                            strokeMiterlimit={10}
                            stroke="rgb(255,255,255)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M18,15 C18,15 -18,15 -18,15 C-20.208999633789062,15 -22,13.208999633789062 -22,11 C-22,11 -22,-11 -22,-11 C-22,-13.208999633789062 -20.208999633789062,-15 -18,-15 C-18,-15 18,-15 18,-15 C20.208999633789062,-15 22,-13.208999633789062 22,-11 C22,-11 22,11 22,11 C22,13.208999633789062 20.208999633789062,15 18,15z"
                          />
                        </g>
                      </g>
                    </g>
                    <g
                      transform="matrix(0.8831999897956848,0,0,0.8831999897956848,1.208600401878357,8.33599853515625)"
                      opacity={1}
                      style={{ display: "block" }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,27,20)">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="miter"
                          fillOpacity={0}
                          strokeMiterlimit={10}
                          stroke="rgb(255,255,255)"
                          strokeOpacity={1}
                          strokeWidth={2}
                          d=" M18,15 C18,15 -18,15 -18,15 C-20.208999633789062,15 -22,13.208999633789062 -22,11 C-22,11 -22,-11 -22,-11 C-22,-13.208999633789062 -20.208999633789062,-15 -18,-15 C-18,-15 18,-15 18,-15 C20.208999633789062,-15 22,-13.208999633789062 22,-11 C22,-11 22,11 22,11 C22,13.208999633789062 20.208999633789062,15 18,15z M-16,4 C-16,4 -11,4 -11,4 M-16,9 C-16,9 -3,9 -3,9 M3,-6 C3,-6 16,-6 16,-6 M-7,4 C-7,4 -2,4 -2,4 M2,4 C2,4 7,4 7,4 M11,4 C11,4 16,4 16,4"
                        />
                      </g>
                      <g opacity={1} transform="matrix(1,0,0,1,14,14.5)">
                        <path
                          fill="rgb(255,255,255)"
                          fillOpacity={1}
                          d=" M2,2.5 C2,2.5 -2,2.5 -2,2.5 C-2.552000045776367,2.5 -3,2.052000045776367 -3,1.5 C-3,1.5 -3,-1.5 -3,-1.5 C-3,-2.052000045776367 -2.552000045776367,-2.5 -2,-2.5 C-2,-2.5 2,-2.5 2,-2.5 C2.552000045776367,-2.5 3,-2.052000045776367 3,-1.5 C3,-1.5 3,1.5 3,1.5 C3,2.052000045776367 2.552000045776367,2.5 2,2.5z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="miter"
                          fillOpacity={0}
                          strokeMiterlimit={10}
                          stroke="rgb(255,255,255)"
                          strokeOpacity={1}
                          strokeWidth={2}
                          d=" M2,2.5 C2,2.5 -2,2.5 -2,2.5 C-2.552000045776367,2.5 -3,2.052000045776367 -3,1.5 C-3,1.5 -3,-1.5 -3,-1.5 C-3,-2.052000045776367 -2.552000045776367,-2.5 -2,-2.5 C-2,-2.5 2,-2.5 2,-2.5 C2.552000045776367,-2.5 3,-2.052000045776367 3,-1.5 C3,-1.5 3,1.5 3,1.5 C3,2.052000045776367 2.552000045776367,2.5 2,2.5z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            
            <div className="jsx-3028322757 info-texts-section">
              <span style={{color:"#fca758"}} className="jsx-3028322757 info-texts-header">
                Buy with fiat
              </span>
              <div className="jsx-3028322757 info-texts-description">
                Buy crypto with your credit card and swoosh it to your connected
                exchange account or wallet instantly.
              </div>
              <div className="jsx-3028322757 info-texts-description">
                <span className="jsx-3028322757 highlighted">
                  No copy pasting
                </span>{" "}
                deposit address and{" "}
                <span className="jsx-3028322757 highlighted">
                  no fuss of multiple log-ins.
                </span>{" "}
                Easily top up your crypto funds and get straight to trading
                cryptocurrency on your CoinStats connected exchange accounts
                swiftly.{" "}
                <span className="jsx-3028322757 highlighted">
                  And yes, with no risk of withdrawal.
                </span>
              </div>
            </div>
           
          </div>
          </Fade>
        </div>
        <div className=" col-sm-12 col-lg-7 mt-3">
          <Fade right>
          <div className="jsx-3028322757 info-images-container" style={{ animationDelay: "5s" }}>
            <div className="jsx-3028322757 info-images-section">
              <img
                src={payment}
                alt="Crypto Portfolio Trading"
                className="jsx-3028322757 portfolio-trade-image"
              />
            </div>
          </div>
          </Fade>
        </div>
      </div>
      <div className="row">
        <div className=" col-sm-12 col-lg-5"></div>
        <div className=" col-sm-12 col-lg-7 mt-3"></div>
      </div>
    </div>
  );
};

export default Slider;






// const Slider = () => {
//   return (
//     <div style={{ marginTop: "100px" }}>
//       <div className="row mt-5">
//         <div className=" col-sm-12 col-lg-5">
//           <div
//             className={`w3-container w3-center w3-animate-left`}
//             style={{ animationDelay: "4s" }}
//           >
//             <div className="jsx-3028322757 icon-container small-lottie-icon">
//               <div
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   overflow: "hidden",
//                   margin: "0 auto",
//                   outline: "none",
//                 }}
//                 title
//                 role="button"
//                 aria-label="animation"
//                 tabIndex={0}
//               >
//                 <img className={classes.rotate} src={Rol} alt="rol" />
//               </div>
//             </div>
//             <div className="jsx-3028322757 info-texts-section">
//               <span
//                 style={{ color: "#fca758" }}
//                 className="jsx-3028322757 info-texts-header"
//               >
//                 Access all your crypto from one screen
//               </span>
//               <div className="jsx-3028322757 info-texts-description">
//                 You have entered the crypto market.
//                 <span className="jsx-3028322757 highlighted">
//                   {" "}
//                   And it approves of no hiatus.
//                 </span>
//               </div>
//               <div className="jsx-3028322757 info-texts-description">
//                 Managing your portfolio, your Etherum and Metamask wallets,
//                 trading on diverse exchange accounts while tracking market
//                 fluctuations from one platform gives an apparent power of
//                 broader awareness.
//                 <span className="jsx-3028322757 highlighted">
//                   {" "}
//                   Use the force.
//                 </span>
//               </div>
//               <div className="jsx-3028322757 info-texts-description">
//                 <span className="jsx-3028322757 highlighted">
//                   Track, analyse and get market insights for Bitcoin, Ripple and
//                   over 7000 other coins.
//                 </span>{" "}
//                 Use a cryptotracker that ensures instant visibility and the
//                 comfort of a smart interface. Manage your whole crypto
//                 portfolio.{" "}
//                 <span className="jsx-3028322757 highlighted">
//                   All in one place.
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className=" col-sm-12 col-lg-7 mt-3">
//           <div
//             className="w3-container w3-center w3-animate-right"
//             style={{ animationDelay: "4s" }}
//           >
//             <img className={classes.chart} src={chart} alt="chart" />
//             <img className={classes.wallet} src={wallet} alt="chart" />
//           </div>
//         </div>
//       </div>
//       {/* second page */}
//       <div className="row" style={{ marginTop: "95px" }}>
//         <div className=" col-sm-12 col-lg-5">
//           <div className="jsx-3028322757 info-images-container animated-container only-web ">
//             <div className="jsx-3028322757 info-images-section">
//               <img
//                 src={exchange}
//                 alt="Crypto Portfolio Exchange"
//                 className="jsx-3028322757 portfolio-exchange-image"
//               />
//             </div>
//           </div>
//         </div>
//         <div className=" col-sm-12 col-lg-7 mt-3">
//           <div className="jsx-3028322757 info-section animated-container ">
//             <div className="jsx-3028322757 icon-container small-lottie-icon">
//               <div
//               className={classes.stage}
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   overflow: "hidden",
//                   margin: "0 auto",
//                   outline: "none",
//                 }}
//                 title
//                 role="button"
//                 aria-label="animation"
//                 tabIndex={0}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className={`${classes.box} ${classes.bounce}`}
//                   viewBox="0 0 50 50"
//                   width={50}
//                   height={50}
//                   preserveAspectRatio="xMidYMid meet"
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     transform: "translate3d(0px, 0px, 0px)",
//                   }}
//                 >
//                   <defs>
//                     <clipPath id="__lottie_element_49">
//                       <rect width={50} height={50} x={0} y={0} />
//                     </clipPath>
//                   </defs>
//                   <g clipPath="url(#__lottie_element_49)">
//                     <g
//                       transform="matrix(1,0,0,1,0,0)"
//                       opacity={1}
//                       style={{ display: "block" }}
//                     >
//                       <g opacity={1} transform="matrix(1,0,0,1,25,34.5)">
//                         <path
//                           strokeLinecap="butt"
//                           strokeLinejoin="miter"
//                           fillOpacity={0}
//                           strokeMiterlimit={10}
//                           stroke="rgb(255,255,255)"
//                           strokeOpacity={1}
//                           strokeWidth={2}
//                           d=" M22,-8.5 C22,-8.5 22,4.5 22,4.5 C22,6.705999851226807 20.20599937438965,8.5 18,8.5 C18,8.5 -18,8.5 -18,8.5 C-20.20599937438965,8.5 -22,6.705999851226807 -22,4.5 C-22,4.5 -22,-8.5 -22,-8.5 C-22,-8.5 -10.614999771118164,-8.5 -10.614999771118164,-8.5 C-8.812999725341797,-8.5 -7.192999839782715,-7.499000072479248 -6.388000011444092,-5.888999938964844 C-6.388000011444092,-5.888999938964844 -6.014999866485596,-5.140999794006348 -6.014999866485596,-5.140999794006348 C-4.892000198364258,-2.8959999084472656 -2.5869998931884766,-1.5 0,-1.5 C2.5869998931884766,-1.5 4.892000198364258,-2.8949999809265137 6.015999794006348,-5.140999794006348 C6.015999794006348,-5.140999794006348 6.389999866485596,-5.888999938964844 6.389999866485596,-5.888999938964844 C7.195000171661377,-7.499000072479248 8.814000129699707,-8.5 10.614999771118164,-8.5 C10.614999771118164,-8.5 22,-8.5 22,-8.5z"
//                         />
//                       </g>
//                     </g>
//                     <g
//                       transform="matrix(1,0,0,1,0,0)"
//                       opacity={1}
//                       style={{ display: "block" }}
//                     >
//                       <g opacity={1} transform="matrix(1,0,0,1,25,28.5)">
//                         <path
//                           strokeLinecap="butt"
//                           strokeLinejoin="miter"
//                           fillOpacity={0}
//                           strokeMiterlimit={10}
//                           stroke="rgb(255,255,255)"
//                           strokeOpacity={1}
//                           strokeWidth={2}
//                           d=" M-22,9.5 C-22,9.5 -22,-5.5 -22,-5.5 C-22,-7.709000110626221 -20.208999633789062,-9.5 -18,-9.5 C-18,-9.5 18,-9.5 18,-9.5 C20.208999633789062,-9.5 22,-7.709000110626221 22,-5.5 C22,-5.5 22,9.5 22,9.5"
//                         />
//                       </g>
//                     </g>
//                     <g
//                       transform="matrix(1,0,0,1,0,0)"
//                       opacity={1}
//                       style={{ display: "block" }}
//                     >
//                       <g opacity={1} transform="matrix(1,0,0,1,25,25)">
//                         <path
//                           strokeLinecap="butt"
//                           strokeLinejoin="miter"
//                           fillOpacity={0}
//                           strokeMiterlimit={10}
//                           stroke="rgb(255,255,255)"
//                           strokeOpacity={1}
//                           strokeWidth={2}
//                           d=" M22,12 C22,12 22,-8 22,-8 C22,-10.208999633789062 20.208999633789062,-12 18,-12 C18,-12 -18,-12 -18,-12 C-20.208999633789062,-12 -22,-10.208999633789062 -22,-8 C-22,-8 -22,12 -22,12"
//                         />
//                       </g>
//                     </g>
//                     <g
//                       transform="matrix(1,0,0,1,0,0)"
//                       opacity={1}
//                       style={{ display: "block" }}
//                     >
//                       <g opacity={1} transform="matrix(1,0,0,1,25,22)">
//                         <path
//                           strokeLinecap="butt"
//                           strokeLinejoin="miter"
//                           fillOpacity={0}
//                           strokeMiterlimit={10}
//                           stroke="rgb(255,255,255)"
//                           strokeOpacity={1}
//                           strokeWidth={2}
//                           d=" M-22,15 C-22,15 -22,-11 -22,-11 C-22,-13.208999633789062 -20.208999633789062,-15 -18,-15 C-18,-15 18,-15 18,-15 C20.208999633789062,-15 22,-13.208999633789062 22,-11 C22,-11 22,15 22,15"
//                         />
//                       </g>
//                     </g>
//                   </g>
//                 </svg>
//               </div>
//             </div>
//             <div className="jsx-3028322757 info-texts-section">
//               <span style={{color:"#fca758"}} className="jsx-3028322757 info-texts-header">
//                 Trade on all of your exchange accounts from one platform
//               </span>
//               <div className="jsx-3028322757 info-texts-description">
//                 Having multiple exchange accounts is a crypto normality.{" "}
//                 <span className="jsx-3028322757 highlighted">
//                   Trading on all of them
//                 </span>{" "}
//                 from one place is a{" "}
//                 <span className="jsx-3028322757 highlighted">privilege.</span>
//               </div>
//               <div className="jsx-3028322757 info-texts-description">
//                 Attach your Binance, Coinbase and other accounts to CoinStats
//                 and operate your funds from a single crypto platform. We give
//                 you this privilege{" "}
//                 <span className="jsx-3028322757 highlighted">
//                   without giving withdrawal access
//                 </span>{" "}
//                 to your funds.
//               </div>
//               <div className="jsx-3028322757 info-texts-description">
//                 Gain time and focus on the entire crypto portfolio. Opt in for
//                 comfort with no withdrawal risk.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* third section */}
//       <div className="row" style={{marginTop:"100px",marginLeft:"100px"}}>
//         <div className=" col-sm-12 col-lg-5">
//           <div className="jsx-3028322757 info-section animated-container ">
//             <div className="jsx-3028322757 icon-container">
//               <div
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   overflow: "hidden",
//                   margin: "0 auto",
//                   outline: "none",
//                 }}
//                 title
//                 role="button"
//                 aria-label="animation"
//                 tabIndex={0}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 50 50"
//                   width={50}
//                   height={50}
//                   preserveAspectRatio="xMidYMid meet"
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     transform: "translate3d(0px, 0px, 0px)",
                    
//                   }}
//                   className={`${classes.box} ${classes.bounce}`}
//                 >
//                   <defs>
//                     <clipPath id="__lottie_element_63">
//                       <rect width={50} height={50} x={0} y={0} />
//                     </clipPath>
//                     <filter
//                       id="__lottie_element_69"
//                       filterUnits="objectBoundingBox"
//                       x="0%"
//                       y="0%"
//                       width="100%"
//                       height="100%"
//                     >
//                       <feComponentTransfer in="SourceGraphic">
//                         <feFuncA type="table" tableValues="1.0 0.0" />
//                       </feComponentTransfer>
//                     </filter>
//                     <mask id="__lottie_element_68" mask-type="alpha">
//                       <g filter="url(#__lottie_element_69)">
//                         <rect
//                           width={50}
//                           height={50}
//                           x={0}
//                           y={0}
//                           fill="#ffffff"
//                           opacity={0}
//                         />
//                         <g
//                           transform="matrix(0.8831999897956848,0,0,0.8831999897956848,5.182999610900879,12.310399055480957)"
//                           opacity={1}
//                           style={{ display: "block" }}
//                         >
//                           <g
//                             opacity={1}
//                             transform="matrix(1,0,0,1,22.25,15.25)"
//                           >
//                             <path
//                               fill="rgb(0,0,0)"
//                               fillOpacity={1}
//                               d=" M18,-15 C18,-15 -18,-15 -18,-15 C-20.208999633789062,-15 -22,-13.208999633789062 -22,-11 C-22,-11 -22,11 -22,11 C-22,13.208999633789062 -20.208999633789062,15 -18,15 C-18,15 18,15 18,15 C20.208999633789062,15 22,13.208999633789062 22,11 C22,11 22,-11 22,-11 C22,-13.208999633789062 20.208999633789062,-15 18,-15z"
//                             />
//                           </g>
//                         </g>
//                       </g>
//                     </mask>
//                   </defs>
//                   <g clipPath="url(#__lottie_element_63)">
//                     <g
//                       mask="url(#__lottie_element_68)"
//                       style={{ display: "block" }}
//                     >
//                       <g
//                         transform="matrix(0.8831999897956848,0,0,0.8831999897956848,1.208600401878357,8.33599853515625)"
//                         opacity={1}
//                       >
//                         <g opacity={1} transform="matrix(1,0,0,1,27,13.5)">
//                           <path
//                             fill="rgb(255,255,255)"
//                             fillOpacity={1}
//                             d=" M-22,-2.5 C-22,-2.5 22,-2.5 22,-2.5 C22,-2.5 22,2.5 22,2.5 C22,2.5 -22,2.5 -22,2.5 C-22,2.5 -22,-2.5 -22,-2.5z"
//                           />
//                         </g>
//                         <g opacity={1} transform="matrix(1,0,0,1,0,0)">
//                           <path
//                             fill="rgb(255,255,255)"
//                             fillOpacity={1}
//                             d=" M11,20 C11,20 27,20 27,20 C27,20 11,20 11,20z"
//                           />
//                         </g>
//                         <g opacity={1} transform="matrix(1,0,0,1,0,0)">
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             fillOpacity={0}
//                             stroke="rgb(255,255,255)"
//                             strokeOpacity={1}
//                             strokeWidth={2}
//                             d=" M11,20 C11,20 27,20 27,20"
//                           />
//                         </g>
//                         <g opacity={1} transform="matrix(1,0,0,1,27,20)">
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="miter"
//                             fillOpacity={0}
//                             strokeMiterlimit={10}
//                             stroke="rgb(255,255,255)"
//                             strokeOpacity={1}
//                             strokeWidth={2}
//                             d=" M18,15 C18,15 -18,15 -18,15 C-20.208999633789062,15 -22,13.208999633789062 -22,11 C-22,11 -22,-11 -22,-11 C-22,-13.208999633789062 -20.208999633789062,-15 -18,-15 C-18,-15 18,-15 18,-15 C20.208999633789062,-15 22,-13.208999633789062 22,-11 C22,-11 22,11 22,11 C22,13.208999633789062 20.208999633789062,15 18,15z"
//                           />
//                         </g>
//                       </g>
//                     </g>
//                     <g
//                       transform="matrix(0.8831999897956848,0,0,0.8831999897956848,1.208600401878357,8.33599853515625)"
//                       opacity={1}
//                       style={{ display: "block" }}
//                     >
//                       <g opacity={1} transform="matrix(1,0,0,1,27,20)">
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="miter"
//                           fillOpacity={0}
//                           strokeMiterlimit={10}
//                           stroke="rgb(255,255,255)"
//                           strokeOpacity={1}
//                           strokeWidth={2}
//                           d=" M18,15 C18,15 -18,15 -18,15 C-20.208999633789062,15 -22,13.208999633789062 -22,11 C-22,11 -22,-11 -22,-11 C-22,-13.208999633789062 -20.208999633789062,-15 -18,-15 C-18,-15 18,-15 18,-15 C20.208999633789062,-15 22,-13.208999633789062 22,-11 C22,-11 22,11 22,11 C22,13.208999633789062 20.208999633789062,15 18,15z M-16,4 C-16,4 -11,4 -11,4 M-16,9 C-16,9 -3,9 -3,9 M3,-6 C3,-6 16,-6 16,-6 M-7,4 C-7,4 -2,4 -2,4 M2,4 C2,4 7,4 7,4 M11,4 C11,4 16,4 16,4"
//                         />
//                       </g>
//                       <g opacity={1} transform="matrix(1,0,0,1,14,14.5)">
//                         <path
//                           fill="rgb(255,255,255)"
//                           fillOpacity={1}
//                           d=" M2,2.5 C2,2.5 -2,2.5 -2,2.5 C-2.552000045776367,2.5 -3,2.052000045776367 -3,1.5 C-3,1.5 -3,-1.5 -3,-1.5 C-3,-2.052000045776367 -2.552000045776367,-2.5 -2,-2.5 C-2,-2.5 2,-2.5 2,-2.5 C2.552000045776367,-2.5 3,-2.052000045776367 3,-1.5 C3,-1.5 3,1.5 3,1.5 C3,2.052000045776367 2.552000045776367,2.5 2,2.5z"
//                         />
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="miter"
//                           fillOpacity={0}
//                           strokeMiterlimit={10}
//                           stroke="rgb(255,255,255)"
//                           strokeOpacity={1}
//                           strokeWidth={2}
//                           d=" M2,2.5 C2,2.5 -2,2.5 -2,2.5 C-2.552000045776367,2.5 -3,2.052000045776367 -3,1.5 C-3,1.5 -3,-1.5 -3,-1.5 C-3,-2.052000045776367 -2.552000045776367,-2.5 -2,-2.5 C-2,-2.5 2,-2.5 2,-2.5 C2.552000045776367,-2.5 3,-2.052000045776367 3,-1.5 C3,-1.5 3,1.5 3,1.5 C3,2.052000045776367 2.552000045776367,2.5 2,2.5z"
//                         />
//                       </g>
//                     </g>
//                   </g>
//                 </svg>
//               </div>
//             </div>
//             <div className="jsx-3028322757 info-texts-section">
//               <span style={{color:"#fca758"}} className="jsx-3028322757 info-texts-header">
//                 Buy with fiat
//               </span>
//               <div className="jsx-3028322757 info-texts-description">
//                 Buy crypto with your credit card and swoosh it to your connected
//                 exchange account or wallet instantly.
//               </div>
//               <div className="jsx-3028322757 info-texts-description">
//                 <span className="jsx-3028322757 highlighted">
//                   No copy pasting
//                 </span>{" "}
//                 deposit address and{" "}
//                 <span className="jsx-3028322757 highlighted">
//                   no fuss of multiple log-ins.
//                 </span>{" "}
//                 Easily top up your crypto funds and get straight to trading
//                 cryptocurrency on your CoinStats connected exchange accounts
//                 swiftly.{" "}
//                 <span className="jsx-3028322757 highlighted">
//                   And yes, with no risk of withdrawal.
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className=" col-sm-12 col-lg-7 mt-3">
//           <div className="jsx-3028322757 info-images-container animated-container ">
//             <div className="jsx-3028322757 info-images-section">
//               <img
//                 src={payment}
//                 alt="Crypto Portfolio Trading"
//                 className="jsx-3028322757 portfolio-trade-image"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className=" col-sm-12 col-lg-5"></div>
//         <div className=" col-sm-12 col-lg-7 mt-3"></div>
//       </div>
//     </div>
//   );
// };

// export default Slider;
