const PlanTravel = () => {
  return (
    <section>
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
    </section>
  );
};

export default PlanTravel;
