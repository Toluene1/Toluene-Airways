import reactLogo from "./assets/react.svg";
import React, { Component, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import DefaultLayout from "./Layout/Defaultlayout";
import "./App.css";

function App() {
  return (
    <DefaultLayout>
      <main className="mt-5">
        {/* Top Page */}
        <div className="homepageTop">
          <div>
            <h2 className="textHome1">
              Travel to new destinations <br /> with us
            </h2>
            <button className="buttonhome1">Book Now</button>
          </div>
        </div>{" "}
        <br />
        <br />
        {/* Travel Places */}
        <div>
          <div className=" travelHeader">
            <h3>Let's go places together</h3>
            <p>
              Discover the latest offers and news and start planning your next
              trip with us.
            </p>
          </div>
          <div className="travelPlaces">
            <div className="travelDivs shadow">
              <img
                src="https://www.qatarairways.com/content/dam/images/renditions/horizontal-2/campaigns/nsw-europe/discover-qatar/48-hours-in-doha/h2-qatar-museum-043A9139-qnt.jpg"
                alt=""
                className="imgTravel1"
              />
              <div className="pWithin shadowDivs">
                <p className="fs-4">Experience an unforgettable day in Qatar</p>
                <p>
                  Plan your next holiday in Qatar and discover an authentic
                  Arabian treasure in the heart of the Gulf.
                </p>{" "}
                <a href="#">
                  {" "}
                  Book now <i className="bi bi-arrow-right-short iIcon"></i>
                </a>
              </div>
            </div>
            <div className="travelDivs d-none d-sm-block">
              <div className="d-flex mb-3 shadow boxRadius">
                <div>
                  <img
                    src="https://www.qatarairways.com/content/dam/images/renditions/horizontal-2/destinations/united-states/las-vegas/h2-usa-las-vegas-city.jpg"
                    alt=""
                    className="splitImg"
                  />
                </div>
                <div className="ps-3 w-100 shadowDivs">
                  <p className="pSplit">Fly to 230+ cities in the USA</p>
                  <p>
                    Great fares and seamless <br /> connections with our
                    partners.
                  </p>
                  <a href="#">
                    <span className="pSplitBook">
                      Book now <i className="bi bi-arrow-right-short iIcon"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="d-flex mb-3 shadow boxRadius">
                <div>
                  <img
                    src="https://www.qatarairways.com/content/dam/images/renditions/horizontal-3/brand/qdf/h3-qdf-hia-stall-chanel.jpg"
                    alt=""
                    className="splitImg"
                  />
                </div>
                <div className="ps-3  w-100 shadowDivs">
                  <p className="pSplit">Shop and dine before you fly</p>
                  <p>
                    Great fares and seamless <br /> connections with our
                    partners.
                  </p>
                  <a href="#">
                    <span className="pSplitBook">
                      Discover <i className="bi bi-arrow-right-short iIcon"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="d-flex shadow boxRadius">
                <div>
                  <img
                    src="https://www.qatarairways.com/content/dam/images/renditions/horizontal-2/miscellaneous/people/solo/h2-man-sitting-on-boat-pier.jpg"
                    alt=""
                    className="splitImg"
                  />
                </div>
                <div className="ps-3  w-100 shadowDivs">
                  <p className="pSplit">Explore the world with Cash</p>
                  <p>
                    Great fares and seamless <br /> connections with our
                    partners.
                  </p>
                  <a href="#">
                    <span className="pSplitBook">
                      Discover more
                      <i className="bi bi-arrow-right-short iIcon"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* NewsLetter */}
        <div className="newsLetter">
          <form className=" formNews">
            <p className="fw-bold">
              Never miss out on our daily news and Updates
            </p>
            <div class="mb-3">
              <label class="form-label">Email address</label>
              <input
                type="email"
                class="form-control w-75 inputStyle"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label">
                I would like to get updates from Toluene Airways
              </label>
            </div>
            <button type="submit" class="buttonhome1">
              Submit
            </button>
          </form>
        </div>{" "}
        <br />
        <br />
        {/* Footer */}
        <div className="aboutUs">
          <div className="planTop text-center textColor">
            <h4>Plan your travel with confidence</h4>
            <p>
              Find help with your bookings and travel plans, and see what to
              expect along your journey.
            </p>
          </div>
          <div className="planImages justify-content-lg-center">
            <div className="imagesPlan text-center px-4 py-2 shadow-lg">
              <img
                src="https://c.ekstatic.net/ecl/people/safety/crew-welcoming-customer-on-flight-wearing-mask-w300x300.jpg?h=cLSjTqI1Fa21WuMayw_PZA"
                alt=""
                className="imageWithin"
              />
              <a href="#">
                <p className=" mt-4 linkColor">Be safe during Covid-19</p>
              </a>
            </div>
            <div className="imagesPlan text-center px-4 py-2 shadow-lg">
              <img
                src="https://c.ekstatic.net/ecl/destinations/middle-east/united-arab-emirates/meydan-bridge-during-sunset-w300x300.jpg?h=4y32C0QeASPsegP-VOShhg"
                alt=""
                className="imageWithin"
              />
              <a href="#">
                <p className=" mt-4 linkColor">Travel safe to Dubai</p>
              </a>
            </div>
            <div className="imagesPlan text-center px-4 py-2 shadow-lg">
              <img
                src="https://c.ekstatic.net/ecl/destinations/europe/united-kingdom/london-bridge-at-night-w300x300.jpg?h=H8Q0P5JSM1c69xolcZ5CbA"
                alt=""
                className="imageWithin"
              />
              <a href="#">
                <p className=" mt-4 linkColor">Explore America</p>
              </a>
            </div>
            <div className="imagesPlan text-center px-4 py-2 shadow-lg">
              <img
                src="https://c.ekstatic.net/ecl/airport/airfield/dubai-airport-view-at-night-w300x300.jpg?h=Wg2fQCFtn9RC9_S6c-kLKg"
                alt=""
                className="imageWithin"
              />
              <a href="#">
                <p className=" mt-4 linkColor">Guide to Asia countries</p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
}

export default App;
