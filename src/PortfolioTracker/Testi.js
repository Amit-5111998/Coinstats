import React from "react";
import person1 from "./images/person1.png";
import person2 from "./images/person2.jpg";
import person3 from "./images/person3.jpg";
const Testi = () => {
  return (
    <div className="container">
      <section className="jsx-2502190305 testimonial-body">
        <div className="jsx-2502190305 testimonial-container">
          <div className="card jsx-2502190305 testimonial-section" style={{backgroundColor:"black", border:"0.8px solid grey"}}>
            <div className="jsx-2502190305 image-and-name">
              <div className="jsx-2502190305 person-section">
                <div className="jsx-2502190305 person-section-image">
                  <img
                    src={person1}
                    alt="Sebastian Gronewold"
                    className="jsx-2502190305 person-image"
                  />
                  <div className="jsx-2502190305 social-icon-container twitter-icon-container">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIxOCI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTcuMTkgMTcuNDVjNy42MTMgMCAxMS43NzUtNi40NjUgMTEuNzc1LTEyLjA2OCAwLS4xODUgMC0uMzctLjAwOC0uNTQ1YTguNjAyIDguNjAyIDAgMDAyLjA2OC0yLjIgOC4yMzEgOC4yMzEgMCAwMS0yLjM3Ny42NyA0LjIzIDQuMjMgMCAwMDEuODItMi4zNSA4LjI1NSA4LjI1NSAwIDAxLTIuNjI3IDEuMDNBNC4wNzEgNC4wNzEgMCAwMDE0LjgyLjY1Yy0yLjI4MyAwLTQuMTM3IDEuOS00LjEzNyA0LjI0IDAgLjMzNC4wMzUuNjYuMTEyLjk2Ny0zLjQ0Mi0uMTc2LTYuNDg4LTEuODY1LTguNTMxLTQuNDMzYTQuMzM4IDQuMzM4IDAgMDAtLjU1OCAyLjEyOWMwIDEuNDY5LjczIDIuNzcgMS44NDUgMy41MjdhMy45ODUgMy45ODUgMCAwMS0xLjg3LS41Mjh2LjA1M2MwIDIuMDU4IDEuNDI0IDMuNzY0IDMuMzIgNC4xNi0uMzQzLjA5Ny0uNzEyLjE1LTEuMDkuMTUtLjI2NSAwLS41MjMtLjAyNy0uNzgtLjA4LjUyMyAxLjY5IDIuMDUgMi45MTIgMy44NjIgMi45NDdhOC4xOSA4LjE5IDAgMDEtNi4xMjggMS43NTFBMTEuMzMxIDExLjMzMSAwIDAwNy4xOSAxNy40NSIvPjwvc3ZnPg=="
                      alt="Twitter"
                      className="jsx-2502190305 testimonial-icon"
                    />
                  </div>
                </div>
              </div>
              <span className="jsx-2502190305 person-name">
                Sebastian Gronewold
              </span>
            </div>
            <div className="jsx-2502190305 info-texts-section">
              <div className="jsx-2502190305 info-texts-description">
                I use CoinStats for quite a while and it’s already hard to
                imagine what I would do to manage all my exchanges and wallets
                hustle without it.
                <span className="jsx-2502190305 highlighted">
                  {" "}
                  Excellent platform, regular updates, and new features, super
                  friendly and community-driven team.
                </span>
              </div>
            </div>
          </div>
          <div className="card jsx-2502190305 testimonial-section" style={{backgroundColor:"black", border:"0.8px solid grey"}}>
            <div className="jsx-2502190305 image-and-name">
              <div className="jsx-2502190305 person-section">
                <div className="jsx-2502190305 person-section-image">
                  <img
                    src={person2}
                    alt="Ty Daniel Smith"
                    className="jsx-2502190305 person-image"
                  />
                  <div className="jsx-2502190305 social-icon-container twitter-icon-container">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIxOCI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTcuMTkgMTcuNDVjNy42MTMgMCAxMS43NzUtNi40NjUgMTEuNzc1LTEyLjA2OCAwLS4xODUgMC0uMzctLjAwOC0uNTQ1YTguNjAyIDguNjAyIDAgMDAyLjA2OC0yLjIgOC4yMzEgOC4yMzEgMCAwMS0yLjM3Ny42NyA0LjIzIDQuMjMgMCAwMDEuODItMi4zNSA4LjI1NSA4LjI1NSAwIDAxLTIuNjI3IDEuMDNBNC4wNzEgNC4wNzEgMCAwMDE0LjgyLjY1Yy0yLjI4MyAwLTQuMTM3IDEuOS00LjEzNyA0LjI0IDAgLjMzNC4wMzUuNjYuMTEyLjk2Ny0zLjQ0Mi0uMTc2LTYuNDg4LTEuODY1LTguNTMxLTQuNDMzYTQuMzM4IDQuMzM4IDAgMDAtLjU1OCAyLjEyOWMwIDEuNDY5LjczIDIuNzcgMS44NDUgMy41MjdhMy45ODUgMy45ODUgMCAwMS0xLjg3LS41Mjh2LjA1M2MwIDIuMDU4IDEuNDI0IDMuNzY0IDMuMzIgNC4xNi0uMzQzLjA5Ny0uNzEyLjE1LTEuMDkuMTUtLjI2NSAwLS41MjMtLjAyNy0uNzgtLjA4LjUyMyAxLjY5IDIuMDUgMi45MTIgMy44NjIgMi45NDdhOC4xOSA4LjE5IDAgMDEtNi4xMjggMS43NTFBMTEuMzMxIDExLjMzMSAwIDAwNy4xOSAxNy40NSIvPjwvc3ZnPg=="
                      alt="Twitter"
                      className="jsx-2502190305 testimonial-icon"
                    />
                  </div>
                </div>
              </div>
              <span className="jsx-2502190305 person-name">
                Ty Daniel Smith
              </span>
            </div>
            <div className="jsx-2502190305 info-texts-section">
              <div className="jsx-2502190305 info-texts-description">
                From all of the crypto portfolio tracking apps, CoinStats is
                hands down the leader.
                <span className="jsx-2502190305 highlighted">
                  {" "}
                  As someone with a lot of crypto wallets, the ability to
                  connect them all and see my holdings in one place is extremely
                  helpful.{" "}
                </span>
                This is a must-download app for anyone who uses crypto.
              </div>
            </div>
          </div>
          <div className="card jsx-2502190305 testimonial-section" style={{backgroundColor:"black", border:"0.8px solid grey"}}>
            <div className="jsx-2502190305 image-and-name">
              <div className="jsx-2502190305 person-section">
                <div className="jsx-2502190305 person-section-image">
                  <img
                    src={person3}
                    alt="Adel De Meyer"
                    className="jsx-2502190305 person-image"
                  />
                  <div className="jsx-2502190305 social-icon-container twitter-icon-container">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIxOCI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTcuMTkgMTcuNDVjNy42MTMgMCAxMS43NzUtNi40NjUgMTEuNzc1LTEyLjA2OCAwLS4xODUgMC0uMzctLjAwOC0uNTQ1YTguNjAyIDguNjAyIDAgMDAyLjA2OC0yLjIgOC4yMzEgOC4yMzEgMCAwMS0yLjM3Ny42NyA0LjIzIDQuMjMgMCAwMDEuODItMi4zNSA4LjI1NSA4LjI1NSAwIDAxLTIuNjI3IDEuMDNBNC4wNzEgNC4wNzEgMCAwMDE0LjgyLjY1Yy0yLjI4MyAwLTQuMTM3IDEuOS00LjEzNyA0LjI0IDAgLjMzNC4wMzUuNjYuMTEyLjk2Ny0zLjQ0Mi0uMTc2LTYuNDg4LTEuODY1LTguNTMxLTQuNDMzYTQuMzM4IDQuMzM4IDAgMDAtLjU1OCAyLjEyOWMwIDEuNDY5LjczIDIuNzcgMS44NDUgMy41MjdhMy45ODUgMy45ODUgMCAwMS0xLjg3LS41Mjh2LjA1M2MwIDIuMDU4IDEuNDI0IDMuNzY0IDMuMzIgNC4xNi0uMzQzLjA5Ny0uNzEyLjE1LTEuMDkuMTUtLjI2NSAwLS41MjMtLjAyNy0uNzgtLjA4LjUyMyAxLjY5IDIuMDUgMi45MTIgMy44NjIgMi45NDdhOC4xOSA4LjE5IDAgMDEtNi4xMjggMS43NTFBMTEuMzMxIDExLjMzMSAwIDAwNy4xOSAxNy40NSIvPjwvc3ZnPg=="
                      alt="Twitter"
                      className="jsx-2502190305 testimonial-icon"
                    />
                  </div>
                </div>
              </div>
              <span className="jsx-2502190305 person-name">Adel De Meyer</span>
            </div>
            <div className="jsx-2502190305 info-texts-section">
              <div className="jsx-2502190305 info-texts-description">
                The majority of DAPS community members uses the CoinStats app
                for the past two years, and the feedback is impressive.
                <span className="jsx-2502190305 highlighted">
                  {" "}
                  Their alerts and data are always top-notch, and I love the UI
                  UX design.{" "}
                </span>
                Keep up the great work!
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    
  );
};

export default Testi;
