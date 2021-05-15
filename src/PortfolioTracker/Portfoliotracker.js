import React from "react";
import macbook from "../images/macbook.png";
import watch from "../images/applewatch.png";
import laptop from "../images/laptop.png";
import phone from "../images/iphone.png";
import classes from "./Portfoliotracker.module.css";
import person from "../images/person.png";
import Question from "../question";
import Slider from "../Sliderpages/Slider";
import Info from "../Sliderpages/Info";
import PlatformStats from "./PlatformStats";
import Testi from "./Testi";
import Banner from "./Banner";
import Roll from 'react-reveal/Roll';
const Portfoliotracker = () => {
  return (
    <div style={{textAlign:"left"}}>
    <div className="row">
      <div className=" col-sm-12 col-lg-5">
        <Roll left>
        <div className="jsx-3511343848  description-section">
          <h1 className="jsx-3511343848" style={{fontSize:"2.0rem"}}>
            <span
              className="main-price "
              title="Manage and track your crypto."
              style={{ color: "white" }}
            >
              Manage and track your crypto.
            </span>{" "}
            <br className="jsx-3511343848" />
            <span
              className="main-price "
              title="Safely and simply."
              style={{ color: "white" }}
            >
              Safely and simply.
            </span>{" "}
            <br className="jsx-3511343848" />
            <span
              className="main-price "
              title="All in one place."
              style={{ color: "white" }}
            >
              All in one place.
            </span>{" "}
            <br className="jsx-3511343848" />
          </h1>
          <p className="description " style={{fontSize:".94737rem",color:"rgba(255,255,255,0.35)"}}>
            Setup your account in less than 5 minutes and manage your crypto
            assets securely
          </p>
          <button
            className="jsx-3511343848 standart-button landing-button get-started-btn primary"
            style={{ backgroundColor: "orange" }}
          >
            GET STARTED{" "}
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
              >
                <defs>
                  <clipPath id="__lottie_element_2">
                    <rect width={50} height={50} x={0} y={0} />
                  </clipPath>
                </defs>
                <g clipPath="url(#__lottie_element_2)">
                  <g
                    transform="matrix(1,0,0,1,24,8.000999450683594)"
                    opacity={1}
                    style={{ display: "block" }}
                  >
                    <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity={0}
                        stroke="rgb(0,0,0)"
                        strokeOpacity={1}
                        strokeWidth={2}
                        d=" M1,1 C1,1 1,32.44499969482422 1,32.44499969482422"
                      />
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,8.812000274658203,25.054000854492188)"
                    opacity={1}
                    style={{ display: "block" }}
                  >
                    <g
                      opacity={1}
                      transform="matrix(1,0,0,1,15.890000343322754,10.444999694824219)"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity={0}
                        stroke="rgb(0,0,0)"
                        strokeOpacity={1}
                        strokeWidth={2}
                        d=" M10.890999794006348,-5.445000171661377 C10.890999794006348,-5.445000171661377 0.2809999883174896,5.443999767303467 0.2809999883174896,5.443999767303467 C0.2809999883174896,5.443999767303467 -10.890999794006348,-5.445000171661377 -10.890999794006348,-5.445000171661377"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </button>
        </div>
        </Roll>
      </div>
      <div className=" col-sm-12 col-lg-7 mt-3">
        <Roll right>
        <div className={classes.imagesection}>
          <img className={classes.mac} src={macbook} alt="name" />
          <img className={classes.iphone} src={phone} alt="phone" />
          <img className={classes.watch} src={watch} alt="watch" />
          <div className="twitter-post-card scale-animate twitter-pos">
            <img className="portfolio-person" src={person} alt="person" />
            <div className="twitter-post-texts width-animation opacity-animate">
              <span className="twitter-username" style={{ color: "orange" }}>
                Kevin Rose
              </span>
              <span className="twitter-post-text" style={{ color: "white" }}>
                My favorite is{" "}
                <span className="highlighted">@coinstatsapp</span>, monitors
                wallet addresses, pump alerts, etc.
              </span>
            </div>
            <div className="twitter-icon-section scale-animate">
              <img
                className="twitter-icon"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIxOCI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTcuMTkgMTcuNDVjNy42MTMgMCAxMS43NzUtNi40NjUgMTEuNzc1LTEyLjA2OCAwLS4xODUgMC0uMzctLjAwOC0uNTQ1YTguNjAyIDguNjAyIDAgMDAyLjA2OC0yLjIgOC4yMzEgOC4yMzEgMCAwMS0yLjM3Ny42NyA0LjIzIDQuMjMgMCAwMDEuODItMi4zNSA4LjI1NSA4LjI1NSAwIDAxLTIuNjI3IDEuMDNBNC4wNzEgNC4wNzEgMCAwMDE0LjgyLjY1Yy0yLjI4MyAwLTQuMTM3IDEuOS00LjEzNyA0LjI0IDAgLjMzNC4wMzUuNjYuMTEyLjk2Ny0zLjQ0Mi0uMTc2LTYuNDg4LTEuODY1LTguNTMxLTQuNDMzYTQuMzM4IDQuMzM4IDAgMDAtLjU1OCAyLjEyOWMwIDEuNDY5LjczIDIuNzcgMS44NDUgMy41MjdhMy45ODUgMy45ODUgMCAwMS0xLjg3LS41Mjh2LjA1M2MwIDIuMDU4IDEuNDI0IDMuNzY0IDMuMzIgNC4xNi0uMzQzLjA5Ny0uNzEyLjE1LTEuMDkuMTUtLjI2NSAwLS41MjMtLjAyNy0uNzgtLjA4LjUyMyAxLjY5IDIuMDUgMi45MTIgMy44NjIgMi45NDdhOC4xOSA4LjE5IDAgMDEtNi4xMjggMS43NTFBMTEuMzMxIDExLjMzMSAwIDAwNy4xOSAxNy40NSIvPjwvc3ZnPg=="
                alt="Twitter"
              />
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
                >
                  <defs>
                    <clipPath id="__lottie_element_10">
                      <rect width={50} height={50} x={0} y={0} />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#__lottie_element_10)">
                    <g
                      transform="matrix(1,0,0,1,24,8.000999450683594)"
                      opacity={1}
                      style={{ display: "block" }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fillOpacity={0}
                          stroke="rgb(255,255,255)"
                          strokeOpacity={1}
                          strokeWidth={2}
                          d=" M1,1.011160135269165 C1,1.011160135269165 1,31.553895950317383 1,31.553895950317383"
                        />
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,8.812000274658203,25.054000854492188)"
                      opacity={1}
                      style={{ display: "block" }}
                    >
                      <g
                        opacity={1}
                        transform="matrix(1,0,0,1,15.890000343322754,10.444999694824219)"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fillOpacity={0}
                          stroke="rgb(255,255,255)"
                          strokeOpacity={1}
                          strokeWidth={2}
                          d=" M9.735474586486816,-5.446010589599609 C9.735474586486816,-5.446010589599609 0.3430894613265991,5.296501636505127 0.3430894613265991,5.296501636505127 C0.3430894613265991,5.296501636505127 -9.232561111450195,-5.445026874542236 -9.232561111450195,-5.445026874542236"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        </Roll>

        {/* second image to be shown start */}
        <div className={classes.imagesection1}>
          <img className={classes.mac} src={laptop} alt="name" />
          
          <div className="twitter-post-card scale-animate twitter-pos">
            <img className="portfolio-person" src={person} alt="person" />
            <div className="twitter-post-texts width-animation opacity-animate">
              <span className="twitter-username" style={{ color: "orange" }}>
                Kevin Rose
              </span>
              <span className="twitter-post-text" style={{ color: "white" }}>
                My favorite is{" "}
                <span className="highlighted">@coinstatsapp</span>, monitors
                wallet addresses, pump alerts, etc.
              </span>
            </div>
            <div className="twitter-icon-section scale-animate">
              <img
                className="twitter-icon"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIxOCI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTcuMTkgMTcuNDVjNy42MTMgMCAxMS43NzUtNi40NjUgMTEuNzc1LTEyLjA2OCAwLS4xODUgMC0uMzctLjAwOC0uNTQ1YTguNjAyIDguNjAyIDAgMDAyLjA2OC0yLjIgOC4yMzEgOC4yMzEgMCAwMS0yLjM3Ny42NyA0LjIzIDQuMjMgMCAwMDEuODItMi4zNSA4LjI1NSA4LjI1NSAwIDAxLTIuNjI3IDEuMDNBNC4wNzEgNC4wNzEgMCAwMDE0LjgyLjY1Yy0yLjI4MyAwLTQuMTM3IDEuOS00LjEzNyA0LjI0IDAgLjMzNC4wMzUuNjYuMTEyLjk2Ny0zLjQ0Mi0uMTc2LTYuNDg4LTEuODY1LTguNTMxLTQuNDMzYTQuMzM4IDQuMzM4IDAgMDAtLjU1OCAyLjEyOWMwIDEuNDY5LjczIDIuNzcgMS44NDUgMy41MjdhMy45ODUgMy45ODUgMCAwMS0xLjg3LS41Mjh2LjA1M2MwIDIuMDU4IDEuNDI0IDMuNzY0IDMuMzIgNC4xNi0uMzQzLjA5Ny0uNzEyLjE1LTEuMDkuMTUtLjI2NSAwLS41MjMtLjAyNy0uNzgtLjA4LjUyMyAxLjY5IDIuMDUgMi45MTIgMy44NjIgMi45NDdhOC4xOSA4LjE5IDAgMDEtNi4xMjggMS43NTFBMTEuMzMxIDExLjMzMSAwIDAwNy4xOSAxNy40NSIvPjwvc3ZnPg=="
                alt="Twitter"
              />
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
                >
                  <defs>
                    <clipPath id="__lottie_element_10">
                      <rect width={50} height={50} x={0} y={0} />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#__lottie_element_10)">
                    <g
                      transform="matrix(1,0,0,1,24,8.000999450683594)"
                      opacity={1}
                      style={{ display: "block" }}
                    >
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fillOpacity={0}
                          stroke="rgb(255,255,255)"
                          strokeOpacity={1}
                          strokeWidth={2}
                          d=" M1,1.011160135269165 C1,1.011160135269165 1,31.553895950317383 1,31.553895950317383"
                        />
                      </g>
                    </g>
                    <g
                      transform="matrix(1,0,0,1,8.812000274658203,25.054000854492188)"
                      opacity={1}
                      style={{ display: "block" }}
                    >
                      <g
                        opacity={1}
                        transform="matrix(1,0,0,1,15.890000343322754,10.444999694824219)"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fillOpacity={0}
                          stroke="rgb(255,255,255)"
                          strokeOpacity={1}
                          strokeWidth={2}
                          d=" M9.735474586486816,-5.446010589599609 C9.735474586486816,-5.446010589599609 0.3430894613265991,5.296501636505127 0.3430894613265991,5.296501636505127 C0.3430894613265991,5.296501636505127 -9.232561111450195,-5.445026874542236 -9.232561111450195,-5.445026874542236"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* end */}
      </div>
    </div>
      <div className="jsx-3511343848 down-arrow-container stage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={46}
          height={18}
          viewBox="0 0 46 18"
          className="jsx-3511343848 box bounce-2"
        >
          <path
            fill="#FFF"
            fillOpacity=".8"
            fillRule="evenodd"
            d="M45.819.436c-.318-.463-.942-.574-1.395-.251L23 15.502 1.576.185C1.123-.138.498-.027.18.436c-.317.462-.207 1.1.246 1.425l20.868 14.918L23 18l1.706-1.22L45.572 1.86c.454-.325.564-.962.247-1.424"
            className="jsx-3511343848"
          />
        </svg>
      </div>
      <section className="connections-body">
        <span className="tab-label" style={{fontSize:"1.3rem"}}>
          CONNECT TO YOUR FAVORITE EXCHANGE OR A WALLET
        </span>
        <hr/>
        <div className="container">
        <div className="connections-container d-flex">
          <div className="divider" />
          <div className="connections-section d-flex">
            <div className="button-section">
              <img
                className="connections-image"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTAiIGhlaWdodD0iNjQiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3Qgd2lkdGg9IjE5MCIgaGVpZ2h0PSI2NCIgcng9IjMyIi8+PHBhdGggZmlsbD0iI0YzQkEyRiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNTEuNjYzIDMzLjkxM2wyLjcxNCAyLjcxLS4wMDEuMDAyTDQ3IDQ0bC03LjM3Ny03LjM3NyAyLjcxNi0yLjcwOEw0NyAzOC41NzVsNC42NjMtNC42NjJ6bTg1LjI2LTguMzE2Yy41OTMgMCAxLjEzNi4wNDkgMS42MjcuMTQ2LjQ5LjA5Ny45MzYuMjMgMS4zMzYuNHMuNzcuMzc1IDEuMTEuNjE4Yy4zMzguMjQyLjY1NC41MDkuOTQ1LjhsLTEuNzgyIDIuMDU0YTYuNzMzIDYuNzMzIDAgMDAtMS41MTgtMS4wNTRjLS41MTYtLjI1NS0xLjA5NC0uMzgyLTEuNzM3LS4zODJhMy41MjggMy41MjggMCAwMC0yLjY1NCAxLjE2NCAzLjk3OSAzLjk3OSAwIDAwLS43NjQgMS4yNjNjLS4xODEuNDgtLjI3Mi45OTEtLjI3MiAxLjUzNnYuMDM3YzAgLjU0NS4wOSAxLjA2LjI3MiAxLjU0NS4xODIuNDg1LjQzMy45MDkuNzU1IDEuMjczYTMuNDkzIDMuNDkzIDAgMDAyLjY2MyAxLjE4MWMuNzI4IDAgMS4zNDItLjEzMyAxLjg0Ni0uNGE3LjE1OCA3LjE1OCAwIDAwMS41LTEuMDlsMS43ODIgMS44YTkuMzE4IDkuMzE4IDAgMDEtMS4wMTkuOTQ1IDUuOTgzIDUuOTgzIDAgMDEtMi41MjcgMS4xNzMgOC4yNjkgOC4yNjkgMCAwMS0xLjY3Mi4xNTRjLS45MzQgMC0xLjgtLjE3LTIuNi0uNTA5YTYuMzg3IDYuMzg3IDAgMDEtMi4wNzMtMS4zOSA2LjMyOSA2LjMyOSAwIDAxLTEuMzY0LTIuMDgyIDYuNzExIDYuNzExIDAgMDEtLjQ5LTIuNTY0di0uMDM2YzAtLjkxLjE2My0xLjc2LjQ5LTIuNTU1YTYuNTY3IDYuNTY3IDAgMDExLjM2NC0yLjA5IDYuMzMxIDYuMzMxIDAgMDEyLjA5LTEuNDE5Yy44MTItLjM0NSAxLjcxLS41MTggMi42OTItLjUxOHptLTY3Ljc5Ni4yMThjMS40NjQgMCAyLjU3MS4zNzYgMy4zMjIgMS4xMjguNTguNTgxLjg3IDEuMzAzLjg3IDIuMTYzdi4wMzdjMCAuMzYzLS4wNDQuNjg0LS4xMzUuOTYzYTIuOTU1IDIuOTU1IDAgMDEtLjg4NSAxLjM0NWMtLjE5OS4xNy0uNDEzLjMxNi0uNjQxLjQzNy43MzUuMjc5IDEuMzE1LjY1NyAxLjczNyAxLjEzNi40MjIuNDguNjM0IDEuMTQzLjYzNCAxLjk5MXYuMDM2YzAgLjU4Mi0uMTEyIDEuMDkxLS4zMzYgMS41MjgtLjIyNC40MzYtLjU0NS44LS45NjIgMS4wOS0uNDE4LjI5Mi0uOTIuNTEtMS41MDcuNjU1YTguMTMzIDguMTMzIDAgMDEtMS45NS4yMThoLTYuMDQ1VjI1LjgxNWg1Ljg5OHptMTEuMjE1IDB2MTIuNzI3aC0yLjhWMjUuODE1aDIuOHptNi44MjIgMGw1Ljk2NCA3LjgzN3YtNy44MzdoMi43NjR2MTIuNzI3SDkzLjUxbC02LjE2NC04LjA5djguMDloLTIuNzYzVjI1LjgxNWgyLjU4MXptMTkuNzg2LS4wOWw1LjQ1NSAxMi44MTdoLTIuOTI3bC0xLjE2NC0yLjg1NGgtNS4zODJsLTEuMTYzIDIuODU0aC0yLjg1NWw1LjQ1NS0xMi44MTdoMi41ODF6bTExLjA2LjA5bDUuOTYzIDcuODM3di03LjgzN2gyLjc2NHYxMi43MjdoLTIuMzgybC02LjE2NC04LjA5djguMDloLTIuNzYzVjI1LjgxNWgyLjU4MnptMzYuODk5IDB2Mi40OTFoLTYuODE4djIuNTgyaDZ2Mi40OWgtNnYyLjY3NEgxNTV2Mi40OWgtOS42NzNWMjUuODE1aDkuNTgyem0tODUuNzE3IDcuNDczaC0zLjIzNnYyLjhoMy4zMjdjLjYxOCAwIDEuMTAzLS4xMTIgMS40NTUtLjMzNi4zNTEtLjIyNS41MjctLjU3My41MjctMS4wNDZ2LS4wMzZjMC0uNDI0LS4xNjQtLjc2LS40OTEtMS4wMS0uMzI3LS4yNDgtLjg1NS0uMzcyLTEuNTgyLS4zNzJ6TTQ3IDI5LjI0N2wyLjc1MiAyLjc1MmguMDAybC0uMDAyLjAwMkw0NyAzNC43NTMgNDQuMjQ3IDMybC4wMDQtLjAwNCAyLjc1LTIuNzV6bTkuMjg5LjA0Mkw1OSAzMmwtMi43MTIgMi43MTJMNTMuNTc2IDMybDIuNzEyLTIuNzEyem0tMTguNTc3LS4wMDFMNDAuNDI0IDMybC0yLjcxMiAyLjcxMkwzNSAzMmwyLjcxMi0yLjcxMnptNjcuOTExLS4ybC0xLjY5IDQuMTI3aDMuMzgxbC0xLjY5MS00LjEyN3ptLTM2LjkwNC0uODE4aC0yLjc2M3YyLjY5aDIuNTgyYy42MTggMCAxLjEwOS0uMTA1IDEuNDcyLS4zMTguMzY0LS4yMTIuNTQ2LS41NTQuNTQ2LTEuMDI3di0uMDM2YzAtLjQyNC0uMTU4LS43NDgtLjQ3My0uOTczLS4zMTUtLjIyNC0uNzctLjMzNi0xLjM2NC0uMzM2ek00NyAyMGw3LjM3NiA3LjM3NS0yLjcxMiAyLjcxMkw0NyAyNS40MjRsLTQuNjYgNC42NjEtMi43MTMtMi43MTJMNDcgMjB6Ii8+PC9nPjwvc3ZnPg=="
                alt="Sync Portfolio Binance"
              />
            </div>
            <div className="button-section">
              <img
                className="connections-image"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzMiIGhlaWdodD0iNjQiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3Qgd2lkdGg9IjE3MyIgaGVpZ2h0PSI2NCIgcng9IjMyIi8+PHBhdGggZmlsbD0iIzE2NTJGMCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNDMuMDE3IDM4LjFhNS44NCA1Ljg0IDAgMDAyLjI0OS0uNDM5YzAgLjAyNyAxLjQzMyAyLjMwMSAxLjQ1OSAyLjMxYTguMzI4IDguMzI4IDAgMDEtNC4xMjkgMS4wMjdjLTQuNDAzLjAxLTcuNTk2LTIuOTY4LTcuNTk2LTcuNyAwLTQuNzcgMy4zNDctNy43MjkgNy41OTYtNy43MjkgMS41MDIgMCAyLjY5NS4zMzQgMy44ODkuOTg0bC0xLjM3NCAyLjM3MWE1Ljg4OCA1Ljg4OCAwIDAwLTIuMjMxLS40MjJjLTIuNjAxIDAtNC42MTggMS42OTUtNC42MTggNC43OTUgMCAyLjkzMyAxLjk0OCA0LjgwMyA0Ljc1NSA0LjgwM3ptMTEuMDk4LTEyLjUzYzQuMzI2IDAgNy40NTkgMy4xMzQgNy40NTkgNy43MjcgMCA0LjU2Ni0zLjEzMyA3LjcwMS03LjQ2OCA3LjcwMS00LjI5MSAwLTcuNDI0LTMuMTM1LTcuNDI0LTcuNyAwLTQuNTk0IDMuMTMzLTcuNzI5IDcuNDMzLTcuNzI5em0wIDIuODI3Yy0yLjQxMiAwLTQuMTcxIDEuOTA2LTQuMTcxIDQuOSAwIDIuOTY4IDEuNzYgNC44NzQgNC4xNzEgNC44NzQgMi40NzIgMCA0LjIwNi0xLjkwNiA0LjIwNi00Ljg3NCAwLTIuOTk0LTEuNzM0LTQuOS00LjIwNi00Ljl6bTkuNTEgMTIuMjY4VjI1LjkwM2gzLjIyOHYxNC43NTNoLTMuMjI4di4wMDl6bS0uNDI5LTE5LjMwMmMuMDctMS4wOS45NTQtMS45MzcgMi4wMjItMS45MzcgMS4wNjcgMCAxLjk1Mi44NDcgMi4wMjEgMS45MzcgMCAxLjE0Ny0uODk2IDIuMDg0LTIuMDE3IDIuMTA4LTEuMTIxLS4wMjQtMi4wMTctLjk2LTIuMDE3LTIuMTA4aC0uMDA5em02LjQ3MiA1LjQ3MWExOC45OSAxOC45OSAwIDAxNi42MS0xLjI2NWMzLjY5IDAgNi4wMjUgMS40MzIgNi4wMjUgNS41OTR2OS41MDJoLTMuMTg1VjMxLjQ3YzAtMi4xMzQtMS4yOTYtMi44OTgtMy4wOS0yLjg5OC0xLjE0MSAwLTIuMjgzLjE1OC0zLjEzMy40M3YxMS42NTNoLTMuMjE4VjI2LjgzNGgtLjAwOXpNODUuMDA2IDE4aDMuMjI4djguMjk4Yy42ODctLjM2OCAyLjAxNy0uNzI5IDMuMjg3LS43MjkgNC4xNzIgMCA3LjI5NiAyLjcyMyA3LjI5NiA3LjQ2NSAwIDQuNzY4LTMuMDkgNy45NjQtOC40MjkgNy45NjQtMi4wODYgMC0zLjkxNC0uNDM5LTUuMzgyLS45NjZWMTh6bTMuMjI4IDE5Ljg2M2MuNjE4LjIwMiAxLjQzMy4zMDggMi4yNDkuMzA4IDIuOTYgMCA1LjA4MS0xLjY2OSA1LjA4MS01LjA2NyAwLTIuODcyLTEuOTkxLTQuNTY2LTQuNDI5LTQuNTY2LTEuMjcgMC0yLjI0OS4zMzMtMi45MDEuNzAydjguNjIzem0xOS45MTMtNy4wOTVjMC0xLjU5OC0xLjE4NC0yLjMzNi0yLjc4LTIuMzM2LTEuNjU3IDAtMi45NjIuNS00LjE2NCAxLjIwM3YtMi44NzFhOS40NTQgOS40NTQgMCAwMTQuNjg3LTEuMTk1YzMuMTU4IDAgNS40MDcgMS4zMzUgNS40MDcgNS4wMzJ2OS43NjVjLTEuMzczLjM2OS0zLjMyMi41OTctNC45NTIuNTk3LTMuNzQzIDAtNi40OC0xLjE1OS02LjQ4LTQuNDk2IDAtMy4wMDMgMi41MDYtNC40NyA2LjY3Ny00LjQ3aDEuNTk3di0xLjIyOWguMDA4em0wIDMuNDI1aC0xLjM3M2MtMi4yNDkgMC0zLjcxNy42NzYtMy43MTcgMi4xNzggMCAxLjUyNyAxLjM3NCAyLjEyNSAzLjMyMiAyLjEyNS40OSAwIDEuMTc2LS4wNjIgMS43Ni0uMTU4di00LjEzNmwuMDA4LS4wMXptNS40OTMgMi40NzZhNy40NyA3LjQ3IDAgMDA0LjQwNCAxLjY2OWMxLjQzMyAwIDIuMzc3LS41MDEgMi4zNzctMS42NjkgMC0xLjIwMy0uODUtMS42MzMtMi43MDMtMi4xMzQtMy4wMDUtLjcwMi00LjI2Ni0xLjkzMi00LjI2Ni00LjUwNSAwLTIuOTk0IDIuMjE0LTQuNDYgNS4xNS00LjQ2IDEuNjMgMCAyLjkyNy4zNiA0LjEzNyAxLjEzMnYzLjAzYTYuNTkgNi41OSAwIDAwLTQuMDQzLTEuNDkzYy0xLjM5OSAwLTIuMTQ2LjcwMy0yLjE0NiAxLjY2OCAwIC45NjYuNjEgMS40NTggMi4yNzUgMS45MzIgMy4yOTYuNzMgNC43MiAxLjk5NCA0LjcyIDQuNjU0IDAgMy4xMDktMi4zMDggNC41MDUtNS40MzMgNC41MDVhOC4zMjEgOC4zMjEgMCAwMS00LjQ2My0xLjE5NHYtMy4xMzVoLS4wMDh6bTE0LjMyNi0yLjYzNHYuMDYxYy4xOTggMi42MzUgMi40MDMgNC4wNzUgNC42NiA0LjA3NSAxLjk4NCAwIDMuNDE3LS40NzUgNC44NS0xLjQ0djIuODk3Yy0xLjMwNC45NC0zLjIyNyAxLjM3LTUuMDggMS4zNy00LjQ5OSAwLTcuNTU0LTIuOTMzLTcuNTU0LTcuNTk2IDAtNC42OTggMi45OTUtNy44MzMgNi45Ny03LjgzMyA0LjIwNSAwIDYuMTg4IDIuNzY3IDYuMTg4IDYuNzk3djEuNjY5aC0xMC4wNDMuMDF6bTcuMDA0LTIuMTM0Yy0uMDY5LTIuMy0xLjE3Ni0zLjU2NS0zLjI2Mi0zLjU2NS0xLjg1NCAwLTMuMjE4IDEuMzM0LTMuNjQ4IDMuNTY1aDYuOTF6Ii8+PC9nPjwvc3ZnPg=="
                alt="Sync Portfolio Coinbase"
              />
            </div>
            <div className="button-section">
              <img
                className="connections-image"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMTAiIGhlaWdodD0iNjQiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3Qgd2lkdGg9IjIxMCIgaGVpZ2h0PSI2NCIgcng9IjMyIi8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE0Ni44MDUgMjYuOTM5Yy4yNzQgMCAuNTQ3LjI0Ny41NDcuNDk1djEwLjgyM2MwIC4yODMtLjI3My40OTUtLjU0Ny40OTUtLjMxMyAwLS41NDgtLjIxMi0uNTQ4LS40OTV2LTIuMDUyYy0uODk5IDEuNjI3LTIuNTAyIDIuNzk1LTQuNTM2IDIuNzk1LTMuMjQ1IDAtNS4wNDQtMi41NDctNS4wNDQtNS4yMzV2LTYuMzMxYzAtLjI0OC4yMzQtLjQ5NS41NDctLjQ5NS4zMTMgMCAuNTQ3LjI0Ny41NDcuNDk1djYuMzMxYzAgMi4xMjIgMS4zMyA0LjI0NSAzLjk1IDQuMjQ1IDMuNjc2IDAgNC41MzYtMy4xMTMgNC41MzYtNi41NDR2LTQuMDMyYzAtLjI0OC4yMzUtLjQ5NS41NDgtLjQ5NXpNNDEuMjk2IDI2LjYyYzMuNjc2IDAgNi4zMzYgMi45NyA2LjMzNiA2LjE1NCAwIC4yODItLjI3NC40OTUtLjU4OC40OTVoLTEwLjkxYy4yNzQgMi40NCAyLjMwNyA0LjY2OCA1LjE2MiA0LjY2OCAxLjk1NiAwIDMuNDAyLS42NzEgNC40OTctMi4wODYuMTE4LS4xNDEuMjc0LS4yNDguNDctLjI0OC4zMTIgMCAuNTQ3LjIxMi41NDcuNDk2IDAgLjEwNi0uMDQuMTc2LS4wNzguMjQ3LTEuMDk1IDEuNzMzLTMuMjg1IDIuNTgyLTUuNDM2IDIuNTgyLTMuNjc2IDAtNi4yOTYtMi45Ny02LjI5Ni02LjE1NCAwLTMuMTg0IDIuNjItNi4xNTQgNi4yOTYtNi4xNTR6bTUwLjcyMSAwYzMuNjc2IDAgNi4zMzYgMi45NyA2LjMzNiA2LjE1NCAwIC4yODItLjI3NC40OTUtLjU4OC40OTVoLTEwLjkxYy4yNzQgMi40NCAyLjMwNyA0LjY2OCA1LjE2MiA0LjY2OCAxLjk1NiAwIDMuNDAyLS42NzEgNC40OTctMi4wODYuMTE4LS4xNDEuMjc0LS4yNDguNDctLjI0OC4zMTIgMCAuNTQ3LjIxMi41NDcuNDk2IDAgLjEwNi0uMDQuMTc2LS4wNzguMjQ3LTEuMDk1IDEuNzMzLTMuMjg1IDIuNTgyLTUuNDM2IDIuNTgyLTMuNjc2IDAtNi4yOTYtMi45Ny02LjI5Ni02LjE1NCAwLTMuMTg0IDIuNjItNi4xNTQgNi4yOTYtNi4xNTR6bTMxLjM2NCAwYzMuNjc1IDAgNi4zMzUgMi45NyA2LjMzNSA2LjE1NCAwIC4yODItLjI3NS40OTUtLjU4Ny40OTVoLTEwLjkxYy4yNzMgMi40NCAyLjMwNyA0LjY2OCA1LjE2MiA0LjY2OCAxLjk1NSAwIDMuNDAxLS42NzEgNC40OTYtMi4wODYuMTE4LS4xNDEuMjc0LS4yNDguNDctLjI0OC4zMTMgMCAuNTQ4LjIxMi41NDguNDk2IDAgLjEwNi0uMDQuMTc2LS4wNzkuMjQ3LTEuMDk1IDEuNzMzLTMuMjg1IDIuNTgyLTUuNDM1IDIuNTgyLTMuNjc2IDAtNi4yOTctMi45Ny02LjI5Ny02LjE1NCAwLTMuMTg0IDIuNjItNi4xNTQgNi4yOTctNi4xNTR6bS02NS45NzMtNC4wNjljLjMxMyAwIC41NDcuMjEzLjU0Ny40OTZ2My44MmgyLjkzM2MuMzEzIDAgLjU0OC4yNDcuNTQ4LjQ5NSAwIC4yODMtLjIzNS40OTUtLjU0OC40OTVoLTIuOTMzdjEwLjM5OWMwIC4yNDctLjIzNC40OTUtLjU0Ny40OTUtLjMxNCAwLS41NDgtLjI0OC0uNTQ4LS40OTVWMjcuODU4aC0yLjgxNmMtLjMxMiAwLS41NDYtLjIxMi0uNTQ2LS40OTUgMC0uMjQ4LjIzNC0uNDk1LjU0Ni0uNDk1aDIuODE2di0zLjgyYzAtLjI4My4yMzQtLjQ5Ni41NDgtLjQ5NnptMTEyLjU0NyA0LjEwM2MzLjIwNyAwIDUuMDQ1IDIuNTExIDUuMDQ1IDUuMnY2LjMzMWMwIC4yODQtLjI3NC40OTUtLjU0OC40OTUtLjMxMiAwLS41NDctLjIxMS0uNTQ3LS40OTV2LTYuMzMxYzAtMi4xMjItMS4zMy00LjIxLTMuOTUtNC4yMS0zLjI4NCAwLTQuNTM2IDMuMTg0LTQuNTM2IDUuNjZ2NC44ODFjMCAuMjg0LS4yNzMuNDk1LS41NDcuNDk1LS4zMTQgMC0uNTQ4LS4yMTEtLjU0OC0uNDk1di02LjMzMWMwLTIuMTIyLTEuMzMtNC4yMS0zLjk1LTQuMjEtMy4zMjQgMC00LjY5MiAyLjM3LTQuNTc1IDUuNTIgMCAuMDcuMDM5LjIxIDAgLjI0N3Y0Ljc3NGMwIC4yODQtLjIzNS40OTUtLjU0Ny40OTUtLjMxMyAwLS41NDgtLjIxMS0uNTQ4LS40OTVWMjcuMzYzYzAtLjI4Mi4yMzUtLjQ5NS41NDgtLjQ5NS4zMTIgMCAuNTQ3LjIxMy41NDcuNDk1djEuODAzYy45MzktMS41MiAyLjYyLTIuNTEgNC41NzUtMi41MSAyLjIzIDAgMy45NSAxLjI3MiA0LjY1NCAzLjE0OC45LTEuODM5IDIuNjYtMy4xNDkgNC45MjctMy4xNDl6TTY4LjU5MiAxN2MuMzEzIDAgLjU0Ny4yNDcuNTQ3LjQ5NXYxMS43MDhhNS4zNTEgNS4zNTEgMCAwMTQuNTc2LTIuNTQ3YzMuMjA3IDAgNS4wNDUgMi41NDcgNS4wNDUgNS4yMzV2Ni4yOTZjMCAuMjgyLS4yNzQuNDk0LS41NDguNDk0LS4zMTMgMC0uNTQ3LS4yMTItLjU0Ny0uNDk0VjMxLjg5YzAtMi4xMjMtMS4zMy00LjI0Ni0zLjk1LTQuMjQ2LTMuMzYzIDAtNC44MSAyLjY1NC00LjYxNSA1LjM3NyAwIC4wNzEuMDQuMzkuMDQuNDI1djQuNzRjMCAuMjgyLS4yMzUuNDk0LS41NDguNDk0LS4zMTMgMC0uNTQ4LS4yMTItLjU0OC0uNDk0VjE3LjQ5NWMwLS4yNDguMjM1LS40OTUuNTQ4LS40OTV6bTQyLjU4NyA5Ljg2OGMuMjc0IDAgLjU4Ni4xNzcuNTg2LjQ2IDAgLjMxOC0uMTk1LjQ5NS0uNTA4LjUzLTMuMjA3LjQyNS00LjY1MyAyLjc5NS00LjY1MyA1LjU1M3Y0Ljc0YzAgLjI4My0uMjM1LjQ5Ni0uNTQ4LjQ5Ni0uMzEzIDAtLjU0Ny0uMjEzLS41NDctLjQ5NVYyNy4zNjNjMC0uMjgzLjIzNC0uNDk1LjU0Ny0uNDk1LjMxMyAwIC41NDguMjEyLjU0OC40OTV2Mi4xOTNjLjg5OS0xLjM4IDIuNjk4LTIuNjg4IDQuNTc1LTIuNjg4em0tNjkuODgzLjc0M2MtMi44NTUgMC00Ljg4OCAyLjIyOC01LjE2MiA0LjY2OGgxMC4zMjRjLS4yMzUtMi40NC0yLjMwNy00LjY2OC01LjE2Mi00LjY2OHptNTAuNzIxIDBjLTIuODU1IDAtNC44ODggMi4yMjgtNS4xNjIgNC42NjhoMTAuMzI0Yy0uMjM1LTIuNDQtMi4zMDctNC42NjgtNS4xNjItNC42Njh6bTMxLjM2NCAwYy0yLjg1NSAwLTQuODg5IDIuMjI4LTUuMTYzIDQuNjY4aDEwLjMyNGMtLjIzNC0yLjQ0LTIuMzA3LTQuNjY4LTUuMTYxLTQuNjY4eiIvPjwvZz48L3N2Zz4="
                alt="Sync Portfolio Ethereum"
              />
            </div>
            <div className="button-section">
              <img
                className="connections-image"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjgiIGhlaWdodD0iNjQiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3Qgd2lkdGg9IjE2OCIgaGVpZ2h0PSI2NCIgcng9IjMyIi8+PHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTA2LjUwNiAyNi44ODRjMi42MTUgMCAzLjcgMS4yODIgNC4wNTQgMS44Nzd2LTEuNDYzaDEuODU1djEyLjExYzAgNC4xMDgtMy4xNTIgNS41OTItNi4wODEgNS41OTJhOS40MTQgOS40MTQgMCAwMS00LjExNS0xLjAxbC0uMTAyLS4wNS43LTEuNTM0LjA5LjA1YTcuNDIgNy40MiAwIDAwMy4zOTYuNzk4YzIuNzM3IDAgNC4yNzctMS4zODMgNC4yNzctMy44MDV2LTEuNzM2YTQuMjIgNC4yMiAwIDAxLTMuOTIyIDIuMDE5Yy0zLjM3NSAwLTUuNjY2LTIuNjE0LTUuNjY2LTYuNDcgMC0zLjg1NSAyLjE5LTYuMzc4IDUuNTE0LTYuMzc4ek00Ny41MDcgMzYuMzJ2NC43OTRoLTQuODE0VjM2LjMyaDQuODE0em0tNy42OTMgMHY0Ljc5NGgtMS41OUEzLjIxNiAzLjIxNiAwIDAxMzUgMzcuOTA1VjM2LjMyaDQuODE0em0xNS4zODYgMHYxLjUzNWEzLjIwMyAzLjIwMyAwIDAxLS45NCAyLjI3NSAzLjIyNyAzLjIyNyAwIDAxLTIuMjgzLjk0NGgtMS41OTFWMzYuMzJINTUuMnptMjYuNDIzLTkuMzg2YzMuMTczIDAgNS4yNSAyLjI3MSA1LjE2IDUuODM0di45ODloLTkuNTI4YTQuNjMzIDQuNjMzIDAgMDAxLjM0NSAzLjQxOCA0LjY3NyA0LjY3NyAwIDAwMy40MTkgMS4zNzYgNS41NTcgNS41NTcgMCAwMDMuNzMtMS40ODRsLjA5LS4wNS44NTIgMS4zODN2LjA1YTcuMjQ0IDcuMjQ0IDAgMDEtNC42ODMgMS43MjZoLS4yNDNjLTMuNDUtLjAyLTYuMjctMi43NDQtNi4zOTUtNi4xNzd2LS40NDRjMC0zLjkwNiAyLjU4NC02LjYyIDYuMjUzLTYuNjJ6bTM4LjI3MiAwYzMuMjIzIDAgNS4zMSAyLjI3MSA1LjMxIDUuNzMzdi45ODloLTkuNjA4YTQuNjQgNC42NCAwIDAwMS4zNTMgMy40MTggNC42ODEgNC42ODEgMCAwMDMuNDIxIDEuMzc2IDUuNTM4IDUuNTM4IDAgMDAzLjcyLTEuNDg0aC4xMDFsLjg2MiAxLjQ3NC0uMjQ4LjIwMmE3LjIzNCA3LjIzNCAwIDAxLTQuNDE1IDEuNTM0aC0uMjUzYy0zLjQ4OC4wMDEtNi4zNDctMi43NTYtNi40NTYtNi4yMjd2LS40NDRjMC0zLjg1NiAyLjUzNC02LjU3IDYuMjEzLTYuNTd6bS0yMC4yNS00LjY1MnYxNy40N0g5Ny44NnYtMS45MjhhNC42NDYgNC42NDYgMCAwMS00LjIyNiAyLjI4MWMtMy4zMjUgMC01LjU1NC0yLjcyNS01LjU1NC02LjYzIDAtMy45MDYgMi4zMy02LjU3IDUuNzA2LTYuNTdoLjIzM2E0LjQ5MSA0LjQ5MSAwIDAxMy44MjEgMi4xNjl2LTYuNzkyaDEuODA0em0tMzIuMTgxIDB2MTUuODc1aDguMDk4djEuNjc2SDY1LjU4VjIyLjI4MmgxLjg4NXptNjQuNzg2IDQuNzk0Yy4yNTMuMS40NDYuMS43LjFoLjA1djEuNzY3aC0uMTAxYy0uMi0uMDItLjQtLjAyLS41OTggMC0xLjU5MiAwLTIuOTMgMS4yMzEtMy41MjcgMy4xNTlhNy43ODIgNy43ODIgMCAwMC0uMzk2IDIuMzkydjUuMjg4aC0xLjg4NVYyNy4xNzdoMS44MzV2Mi44MTVhNC4yNTQgNC4yNTQgMCAwMTMuOTIyLTIuOTE2ek05NC4wMTkgMjguNjFjLTIuMjkgMC0zLjkyMyAxLjk2OC0zLjkyMyA0Ljg5NSAwIDIuOTI2IDEuNTQxIDQuOTQ1IDMuODcyIDQuOTQ1bC0uMDE2LS4wMDEuMTI1LS4wMDJjMS43OTEtLjA2NSAzLjY2LTEuMzI0IDMuNzU5LTQuNjZsLjAwNC0uMjgyYzAtMy4zNjEtMS45MjYtNC44OTUtMy44MjEtNC44OTV6bTEyLjU3OC4xYy0yLjM4MiAwLTMuNzcgMS43MzctMy43NyA0LjY1MyAwIDIuOTE3IDEuNjIxIDQuNzk0IDQuMDU0IDQuNzk0IDIuMzgyIDAgMy41ODgtMS42NzUgMy41ODgtNC43OTQgMC0zLjExOC0xLjI0Ny00LjY1Mi0zLjg3Mi00LjY1MnptLTY2Ljc4My0uMDV2NC43OTRIMzVWMjguNjZoNC44MTR6TTUxLjkyNiAyMWEzLjIyOCAzLjIyOCAwIDAxMi4yODYuOTM2Yy42MDcuNjAzLjk0NyAxLjQyLjk0NyAyLjI3M3Y5LjE5NUg0Mi42OTNWMjF6bTI5LjU5NiA3LjUwOWE0LjE3IDQuMTcgMCAwMC00LjE2NiAzLjY2M2g3LjY0MmMtLjE0Mi0yLjcxNC0xLjg4NS0zLjY2My0zLjQ3Ni0zLjY2M3ptMzguMzIyIDBhNC4xOCA0LjE4IDAgMDAtNC4xNzYgMy42NjNoNy42NDJjLS4xNDEtMi43MTQtMS44ODUtMy42NjMtMy40NjYtMy42NjN6TTM5LjgxNCAyMXY0Ljc5NEgzNXYtMS41ODVBMy4yMTYgMy4yMTYgMCAwMTM4LjIyMyAyMWgxLjU5MXoiLz48L2c+PC9zdmc+"
                alt="Sync Portfolio Ledger"
              />
            </div>
            <div className="button-section">
              <img
                className="connections-image"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDEiIGhlaWdodD0iNjQiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3Qgd2lkdGg9IjIwMSIgaGVpZ2h0PSI2NCIgcng9IjMyIi8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTUwLjY2IDMyLjA3Yy0uNjgtLjQ1LTEuNDMtLjc3LTIuMTQtMS4xNy0uNDYtLjI2LS45NS0uNDktMS4zNS0uODItLjY4LS41Ni0uNTQtMS42Ni4xNy0yLjE0IDEuMDItLjY4IDIuNzEtLjMgMi44OSAxLjA5IDAgLjAzLjAzLjA1LjA2LjA1aDEuNTRjLjA0IDAgLjA3LS4wMy4wNi0uMDctLjA4LS45Ni0uNDUtMS43Ni0xLjEzLTIuMjctLjY1LS40OS0xLjM5LS43NS0yLjE4LS43NS00LjA3IDAtNC40NCA0LjMxLTIuMjUgNS42Ny4yNS4xNiAyLjQgMS4yNCAzLjE2IDEuNzEuNzYuNDcgMSAxLjMzLjY3IDIuMDEtLjMuNjItMS4wOCAxLjA1LTEuODYgMS0uODUtLjA1LTEuNTEtLjUxLTEuNzQtMS4yMy0uMDQtLjEzLS4wNi0uMzgtLjA2LS40OSAwLS4wMy0uMDMtLjA2LS4wNi0uMDZoLTEuNjdjLS4wMyAwLS4wNi4wMy0uMDYuMDYgMCAxLjIxLjMgMS44OCAxLjEyIDIuNDkuNzcuNTggMS42MS44MiAyLjQ4LjgyIDIuMjggMCAzLjQ2LTEuMjkgMy43LTIuNjMuMjEtMS4zMS0uMTgtMi40OS0xLjM1LTMuMjd6bS03Mi41MS01Ljg2SDc2LjZjLS4wMyAwLS4wNS4wMi0uMDYuMDRsLTEuMzcgNC41MmMtLjAyLjA2LS4xLjA2LS4xMiAwbC0xLjM3LTQuNTJjLS4wMS0uMDMtLjAzLS4wNC0uMDYtLjA0aC0yLjU1Yy0uMDMgMC0uMDYuMDMtLjA2LjA2djExLjU0YzAgLjAzLjAzLjA2LjA2LjA2aDEuNjdjLjAzIDAgLjA2LS4wMy4wNi0uMDZ2LTguNzdjMC0uMDcuMS0uMDguMTItLjAybDEuMzggNC41NS4xLjMyYy4wMS4wMy4wMy4wNC4wNi4wNGgxLjI4Yy4wMyAwIC4wNS0uMDIuMDYtLjA0bC4xLS4zMiAxLjM4LTQuNTVjLjAyLS4wNy4xMi0uMDUuMTIuMDJ2OC43N2MwIC4wMy4wMy4wNi4wNi4wNmgxLjY3Yy4wMyAwIC4wNi0uMDMuMDYtLjA2VjI2LjI3YzAtLjAzLS4wMy0uMDYtLjA2LS4wNmgtLjk4em00Ni45NCAwYy0uMDMgMC0uMDUuMDItLjA2LjA0bC0xLjM3IDQuNTJjLS4wMi4wNi0uMS4wNi0uMTIgMGwtMS4zNy00LjUyYy0uMDEtLjAzLS4wMy0uMDQtLjA2LS4wNGgtMi41NGMtLjAzIDAtLjA2LjAzLS4wNi4wNnYxMS41NGMwIC4wMy4wMy4wNi4wNi4wNmgxLjY3Yy4wMyAwIC4wNi0uMDMuMDYtLjA2di04Ljc3YzAtLjA3LjEtLjA4LjEyLS4wMmwxLjM4IDQuNTUuMS4zMmMuMDEuMDMuMDMuMDQuMDYuMDRoMS4yOGMuMDMgMCAuMDUtLjAyLjA2LS4wNGwuMS0uMzIgMS4zOC00LjU1Yy4wMi0uMDcuMTItLjA1LjEyLjAydjguNzdjMCAuMDMuMDMuMDYuMDYuMDZoMS42N2MuMDMgMCAuMDYtLjAzLjA2LS4wNlYyNi4yN2MwLS4wMy0uMDMtLjA2LS4wNi0uMDZoLTIuNTR6bS0yMS41NCAwaC03Ljg5Yy0uMDMgMC0uMDYuMDMtLjA2LjA2djEuNDRjMCAuMDMuMDMuMDYuMDYuMDZoMy4wNXYxMC4wNGMwIC4wMy4wMy4wNi4wNi4wNmgxLjY3Yy4wMyAwIC4wNi0uMDMuMDYtLjA2VjI3Ljc3aDMuMDVjLjAzIDAgLjA2LS4wMy4wNi0uMDZ2LTEuNDRjMC0uMDMtLjAyLS4wNi0uMDYtLjA2em05Ljg1IDExLjY2aDEuNTJjLjA0IDAgLjA3LS4wNC4wNi0uMDhsLTMuMTQtMTEuNThjLS4wMS0uMDMtLjAzLS4wNC0uMDYtLjA0aC0yLjE4Yy0uMDMgMC0uMDUuMDItLjA2LjA0bC0zLjE0IDExLjU4Yy0uMDEuMDQuMDIuMDguMDYuMDhoMS41MmMuMDMgMCAuMDUtLjAyLjA2LS4wNGwuOTEtMy4zN2MuMDEtLjAzLjAzLS4wNC4wNi0uMDRoMy4zNmMuMDMgMCAuMDUuMDIuMDYuMDRsLjkxIDMuMzdjLjAxLjAyLjA0LjA0LjA2LjA0em0tMy45OS01LjFsMS4yMi00LjUxYy4wMi0uMDYuMS0uMDYuMTIgMGwxLjIyIDQuNTFjLjAxLjA0LS4wMi4wOC0uMDYuMDhoLTIuNDRjLS4wNCAwLS4wNy0uMDQtLjA2LS4wOHptMjkuOTEgNS4xaDEuNTJjLjA0IDAgLjA3LS4wNC4wNi0uMDhsLTMuMTQtMTEuNThjLS4wMS0uMDMtLjAzLS4wNC0uMDYtLjA0aC0yLjE4Yy0uMDMgMC0uMDUuMDItLjA2LjA0bC0zLjE0IDExLjU4Yy0uMDEuMDQuMDIuMDguMDYuMDhoMS41MmMuMDMgMCAuMDUtLjAyLjA2LS4wNGwuOTEtMy4zN2MuMDEtLjAzLjAzLS4wNC4wNi0uMDRoMy4zNmMuMDMgMCAuMDUuMDIuMDYuMDRsLjkxIDMuMzdjLjAxLjAyLjAzLjA0LjA2LjA0em0tMy45OS01LjFsMS4yMi00LjUxYy4wMi0uMDYuMS0uMDYuMTIgMGwxLjIyIDQuNTFjLjAxLjA0LS4wMi4wOC0uMDYuMDhoLTIuNDRjLS4wNCAwLS4wNy0uMDQtLjA2LS4wOHptLTQ5LjM2IDMuMzl2LTMuNThjMC0uMDMuMDMtLjA2LjA2LS4wNmg0LjQ1Yy4wMyAwIC4wNi0uMDMuMDYtLjA2di0xLjQ0YzAtLjAzLS4wMy0uMDYtLjA2LS4wNmgtNC40NWMtLjAzIDAtLjA2LS4wMy0uMDYtLjA2di0zLjA2YzAtLjAzLjAzLS4wNi4wNi0uMDZoNS4wNmMuMDMgMCAuMDYtLjAzLjA2LS4wNnYtMS40NGMwLS4wMy0uMDMtLjA2LS4wNi0uMDZoLTYuODVjLS4wMyAwLS4wNi4wMy0uMDYuMDZ2MTEuNTNjMCAuMDMuMDMuMDYuMDYuMDZoNy4wNmMuMDMgMCAuMDYtLjAzLjA2LS4wNnYtMS41MmMwLS4wMy0uMDMtLjA2LS4wNi0uMDZoLTUuMjhjLS4wMy0uMDEtLjA1LS4wMy0uMDUtLjA3em03OS45NSAxLjYxbC01Ljc4LTUuOTdhLjA2LjA2IDAgMDEwLS4wOGw1LjItNS40Yy4wNC0uMDQuMDEtLjEtLjA0LS4xaC0yLjEzYy0uMDIgMC0uMDMuMDEtLjA0LjAybC00LjQxIDQuNThjLS4wNC4wNC0uMS4wMS0uMS0uMDR2LTQuNWMwLS4wMy0uMDMtLjA2LS4wNi0uMDZoLTEuNjdjLS4wMyAwLS4wNi4wMy0uMDYuMDZ2MTEuNTRjMCAuMDMuMDMuMDYuMDYuMDZoMS42N2MuMDMgMCAuMDYtLjAzLjA2LS4wNnYtNS4wOGMwLS4wNS4wNy0uMDguMS0uMDRsNSA1LjE2Yy4wMS4wMS4wMy4wMi4wNC4wMmgyLjEzYy4wNC0uMDEuMDctLjA4LjAzLS4xMXoiIGZpbGw9IiNGRkYiLz48ZyBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iLjUiPjxwYXRoIGZpbGw9IiNFMTc3MjYiIHN0cm9rZT0iI0UxNzcyNiIgZD0iTTU5LjYgMjBsLTEwLjExIDcuNSAxLjg4LTQuNDJ6Ii8+PGcgZmlsbD0iI0UyNzYyNSIgc3Ryb2tlPSIjRTI3NjI1Ij48cGF0aCBkPSJNMzYuMjggMjBsMTAuMDIgNy41Ny0xLjc5LTQuNDl6bTE5LjY4IDE3LjM5bC0yLjY5IDQuMTIgNS43NiAxLjU5IDEuNjUtNS42MnptLTIwLjc1LjA5bDEuNjQgNS42MiA1Ljc1LTEuNTktMi42OC00LjEyeiIvPjxwYXRoIGQ9Ik00Mi4yOSAzMC40M2wtMS42IDIuNDIgNS43LjI2LS4xOS02LjE1em0xMS4zIDBsLTMuOTctMy41NC0uMTMgNi4yMiA1LjctLjI2ek00Mi42IDQxLjUxbDMuNDUtMS42Ny0yLjk3LTIuMzJ6bTcuMjMtMS42N2wzLjQ0IDEuNjctLjQ3LTMuOTl6Ii8+PC9nPjxwYXRoIGQ9Ik01My4yNyA0MS41MWwtMy40NC0xLjY3LjI4IDIuMjQtLjAzLjk1em0tMTAuNjcgMGwzLjIgMS41Mi0uMDItLjk1LjI3LTIuMjR6IiBmaWxsPSIjRDVCRkIyIiBzdHJva2U9IiNENUJGQjIiLz48cGF0aCBmaWxsPSIjMjMzNDQ3IiBzdHJva2U9IiMyMzM0NDciIGQ9Ik00NS44NiAzNi4wNEw0MyAzNS4ybDIuMDItLjkzem00LjE2IDBsLjg0LTEuNzcgMi4wMy45M3oiLz48cGF0aCBkPSJNNDIuNiA0MS41MWwuNS00LjEyLTMuMTguMDl6bTEwLjE4LTQuMTJsLjQ5IDQuMTIgMi42OS00LjAzem0yLjQxLTQuNTRsLTUuNy4yNi41MyAyLjkzLjg0LTEuNzcgMi4wMy45M3pNNDMgMzUuMmwyLjAyLS45My44NCAxLjc3LjUzLTIuOTMtNS43LS4yNnoiIGZpbGw9IiNDQzYyMjgiIHN0cm9rZT0iI0NDNjIyOCIvPjxwYXRoIGQ9Ik00MC42OSAzMi44NWwyLjM5IDQuNjdMNDMgMzUuMnptMTIuMiAyLjM1bC0uMDkgMi4zMiAyLjM5LTQuNjd6bS02LjUtMi4wOWwtLjUzIDIuOTMuNjcgMy40Ni4xNS00LjU2em0zLjEgMGwtLjI4IDEuODIuMTQgNC41Ny42Ny0zLjQ2eiIgZmlsbD0iI0UyNzUyNSIgc3Ryb2tlPSIjRTI3NTI1Ii8+PHBhdGggZmlsbD0iI0Y1ODQxRiIgc3Ryb2tlPSIjRjU4NDFGIiBkPSJNNTAuMDIgMzYuMDRsLS42NyAzLjQ2LjQ4LjM0IDIuOTctMi4zMi4wOS0yLjMyek00MyAzNS4ybC4wOCAyLjMyIDIuOTcgMi4zMi40OC0uMzQtLjY3LTMuNDZ6Ii8+PHBhdGggZmlsbD0iI0MwQUM5RCIgc3Ryb2tlPSIjQzBBQzlEIiBkPSJNNTAuMDggNDMuMDNsLjAzLS45NS0uMjYtLjIyaC0zLjgybC0uMjUuMjIuMDIuOTUtMy4yLTEuNTIgMS4xMi45Mkw0NS45OSA0NGgzLjg5bDIuMjgtMS41NyAxLjExLS45MnoiLz48cGF0aCBmaWxsPSIjMTYxNjE2IiBzdHJva2U9IiMxNjE2MTYiIGQ9Ik00OS44MyAzOS44NGwtLjQ4LS4zNGgtMi44MmwtLjQ4LjM0LS4yNyAyLjI0LjI1LS4yMmgzLjgybC4yNi4yMnoiLz48cGF0aCBkPSJNNjAuMDMgMjcuOTlsLjg1LTQuMTRMNTkuNiAyMGwtOS43NyA3LjI1IDMuNzYgMy4xOCA1LjMxIDEuNTUgMS4xNy0xLjM3LS41MS0uMzcuODEtLjc0LS42Mi0uNDguODEtLjYyek0zNSAyMy44NWwuODYgNC4xNC0uNTUuNDEuODIuNjItLjYyLjQ4LjgxLjc0LS41MS4zNyAxLjE3IDEuMzcgNS4zMS0xLjU1IDMuNzYtMy4xOEwzNi4yOCAyMHoiIGZpbGw9IiM3NjNFMUEiIHN0cm9rZT0iIzc2M0UxQSIvPjxwYXRoIGZpbGw9IiNGNTg0MUYiIHN0cm9rZT0iI0Y1ODQxRiIgZD0iTTU4LjkgMzEuOThsLTUuMzEtMS41NSAxLjYgMi40Mi0yLjM5IDQuNjcgMy4xNi0uMDRoNC43MnptLTE2LjYxLTEuNTVsLTUuMzEgMS41NS0xLjc3IDUuNWg0LjcxbDMuMTYuMDQtMi4zOS00LjY3em03LjIgMi42OGwuMzQtNS44NiAxLjU0LTQuMTdoLTYuODZsMS41NCA0LjE3LjM0IDUuODYuMTMgMS44NC4wMSA0LjU1aDIuODJsLjAxLTQuNTV6Ii8+PC9nPjwvZz48L2c+PC9zdmc+"
                alt="Sync Portfolio Metamask"
              />
            </div>
            <div className="button-section">
              
              <button
                className="standart-button landing-button bordered connection-button"
                type="button"
                style={{backgroundColor:"black",border:"1px solid white"}}
              >
                MORE{" "}
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
                  >
                    <defs>
                      <clipPath id="__lottie_element_26">
                        <rect width={50} height={50} x={0} y={0} />
                      </clipPath>
                    </defs>
                    <g clipPath="url(#__lottie_element_26)">
                      <g
                        transform="matrix(1,0,0,1,24,8.000999450683594)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fillOpacity={0}
                            stroke="rgb(255,255,255)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M1,1 C1,1 1,32.44499969482422 1,32.44499969482422"
                          />
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,8.812000274658203,25.054000854492188)"
                        opacity={1}
                        style={{ display: "block" }}
                      >
                        <g
                          opacity={1}
                          transform="matrix(1,0,0,1,15.890000343322754,10.444999694824219)"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fillOpacity={0}
                            stroke="rgb(255,255,255)"
                            strokeOpacity={1}
                            strokeWidth={2}
                            d=" M10.890999794006348,-5.445000171661377 C10.890999794006348,-5.445000171661377 0.2809999883174896,5.443999767303467 0.2809999883174896,5.443999767303467 C0.2809999883174896,5.443999767303467 -10.890999794006348,-5.445000171661377 -10.890999794006348,-5.445000171661377"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="divider" />
        </div>
        </div>
        <hr/>
      </section>
      <g opacity={1} transform="matrix(1,0,0,1,25,25)">
        <path
          strokeLinecap="round"
          strokeLinejoin="miter"
          fillOpacity={0}
          strokeMiterlimit={10}
          stroke="rgb(255,255,255)"
          strokeOpacity={1}
          strokeWidth={2}
          d=" M0,-22 C-12.149999618530273,-22 -22,-12.149999618530273 -22,0 C-22,12.149999618530273 -12.149999618530273,22 0,22 C12.149999618530273,22 22,12.149999618530273 22,0 C22,-12.149999618530273 12.149999618530273,-22 0,-22z"
        />
      </g>
      <Slider/>
      <Question/>
      <Info/>
      <PlatformStats/>
      <Testi/>
      <Banner/>
    </div>
  );
};

export default Portfoliotracker;
