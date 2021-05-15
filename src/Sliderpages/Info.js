import React from "react";
import graph from "../svgfiles/graph.svg";
import disk from "../svgfiles/disk.svg";
import laptop from "../svgfiles/laptop.svg";
import classes from "./info.module.css";
import Fade from 'react-reveal/Fade';
// information div of portfolio tracking app

const Info = () => {
  return (
    <div className="container mt-5" style={{textAlign:"left"}}>
      {/* first svg */}
      {/* <div 
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
                
              </div> */}
              <Fade left>
      <div className="row">
        <div class="col col-lg-3">
          <div
            style={{
              width: "100%",
              height:"100%",
              overflow: "hidden",
              margin: "0 auto",
              outline: "none",
            }}
            title
            role="button"
            aria-label="animation"
            tabIndex={0}
          >
            <img className={classes.element} src={graph} alt="graph" />
          </div>
        </div>
        <div class="col">
          <div>
            {/* style={{color:"var(--eColor)"}} */}
            <h1 style={{ color: "orange", fontSize: "1.78947rem" }}>
              Get to Know What's Up with the Market
            </h1>
          </div>
          <div>
            <h2 style={{ color: "var(--eColor)", fontSize: ".94737rem" }}>
              Get to know what’s up with the market Be the first to know about
              the fluctuation in the most volatile market.
            </h2>
          </div>
          <div>
            <h2 style={{ color: "var(--eColor)", fontSize: ".94737rem" }}>
              We don’t have to tell you the obvious - faster acknowledgements
              lead to smarter results. CoinStats collects crypto news from over
              40 sources and brings personalised news in your feed.
            </h2>
          </div>
          <div>
            <h2 style={{ color: "var(--eColor)", fontSize: ".94737rem" }}>
              Our instant notifications will make you the first to know.
            </h2>
          </div>
          <div>
            <h2 style={{ color: "var(--eColor)", fontSize: ".94737rem" }}>
              Your crypto management armed with the latest crypto coverage.
            </h2>
          </div>
        </div>
      </div>
      </Fade>
      <Fade right>
      <div className="row" >
        <div class="col col-lg-3" >
          <div
            style={{
              width: "100%",
              height:"100%",
              overflow: "hidden",
              margin: "0 auto",
              outline: "none",
            }}
            title
            role="button"
            aria-label="animation"
            tabIndex={0}
          >
            <img className={classes.loading} src={disk} alt="graph" />
          </div>
        </div>
        <div class="col">
          <div>
            {/* style={{color:"var(--eColor)"}} */}
            <h1 style={{ color: "orange", fontSize: "1.78947rem" }}>
              Get to Know What's Up with the Market
            </h1>
          </div>
          <div>
            <h2 style={{ color: "var(--eColor)", fontSize: ".94737rem" }}>
              Get to know what’s up with the market Be the first to know about
              the fluctuation in the most volatile market.
            </h2>
          </div>
          <div>
            <h2 style={{ color: "var(--eColor)", fontSize: ".94737rem" }}>
              We don’t have to tell you the obvious - faster acknowledgements
              lead to smarter results. CoinStats collects crypto news from over
              40 sources and brings personalised news in your feed.
            </h2>
          </div>
          <div>
            <h2 style={{ color: "var(--eColor)", fontSize: ".94737rem" }}>
              Our instant notifications will make you the first to know.
            </h2>
          </div>
          <div>
            <h2 style={{ color: "var(--eColor)", fontSize: ".94737rem" }}>
              Your crypto management armed with the latest crypto coverage.
            </h2>
          </div>
        </div>
      </div>
      </Fade>
      <Fade left>
      <div className="row mt-5">
        <div class="col col-lg-3">
          <div
            style={{
              width: "100%",
              height:"100%",
              overflow: "hidden",
              margin: "0 auto",
              outline: "none",
            }}
            title
            role="button"
            aria-label="animation"
            tabIndex={0}
          >
            <img
              className={classes.loading }
              src={laptop}
              alt="graph"
            />
          </div>
        </div>
        <div class="col">
          <div>
            {/* style={{color:"var(--eColor)"}} */}
            <h1 style={{ color: "orange", fontSize: "1.78947rem" }}>
              Get to Know What's Up with the Market
            </h1>
          </div>
          <div>
            <h2 style={{ color: "var(--eColor)", fontSize: ".94737rem" }}>
              Get to know what’s up with the market Be the first to know about
              the fluctuation in the most volatile market.
            </h2>
          </div>
          <div>
            <h2 style={{ color: "var(--eColor)", fontSize: ".94737rem" }}>
              We don’t have to tell you the obvious - faster acknowledgements
              lead to smarter results. CoinStats collects crypto news from over
              40 sources and brings personalised news in your feed.
            </h2>
          </div>
          <div>
            <h2 style={{ color: "var(--eColor)", fontSize: ".94737rem" }}>
              Our instant notifications will make you the first to know.
            </h2>
          </div>
          <div>
            <h2 style={{ color: "var(--eColor)", fontSize: ".94737rem" }}>
              Your crypto management armed with the latest crypto coverage.
            </h2>
          </div>
        </div>
      </div>
      </Fade>
    </div>
  );
};

export default Info;
