import "animate.css";

const LetsGo = () => {
  return (
    <section>
      <div className="animate__animated animate__fadeIn">
        <div className=" travelHeader text-center">
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
                  Great fares and seamless <br /> connections with our partners.
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
                  Great fares and seamless <br /> connections with our partners.
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
                  Great fares and seamless <br /> connections with our partners.
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
    </section>
  );
};

export default LetsGo;
