import React from "react";
import mob1 from  "./images/mobup.png";
import mob2 from "./images/mobdown.png";


const Banner = () => {
  return (
    <div>
      <section className="jsx-4266659403 banner-body">
        <div className="jsx-4266659403 banner-section ">
          <div className="jsx-4266659403 mobile-phone-image-container">
            <div className="lazyload-placeholder" />
          </div>
          <div className="jsx-4266659403 banner-texts-and-images-wrapper">
            <div className="jsx-4266659403 banner-texts">
              <span className="jsx-4266659403 big-text">
                Check your accounts, get portfolio analytics and much more.
              </span>
              <span className="jsx-4266659403 small-text">
                Expand opportunities with CoinStats.
              </span>
            </div>
            <div className="jsx-4266659403 banner-images-section">
              <img
                src={mob1}
                alt="Crypto portfolio tracker Mobile"
                className="jsx-4266659403 image-left"
              />
              <img
                src={mob2}
                alt="Crypto portfolio tracker Mobile"
                className="jsx-4266659403 image-right"
              />
            </div>
            <div className="jsx-4266659403 banner-button">
              <button className="jsx-4266659403 standart-button landing-button primary">
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
                      <clipPath id="__lottie_element_184">
                        <rect width={50} height={50} x={0} y={0} />
                      </clipPath>
                    </defs>
                    <g clipPath="url(#__lottie_element_184)">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
