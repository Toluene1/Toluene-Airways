import { useState } from "react";
import BookFlight from "./BookFlight";
// import { FaPlane } from "react-icons/fa";
import Agent from "./Agent";
import Checkin from "./Checkin";
import ManageBooking from "./ManageBooking";
import "animate.css";

const TabsTop = () => {
  const [toggle, settoggle] = useState(0);

  const handleTab = (id) => {
    settoggle(id);
  };

  return (
    <main className="TabsTop shadow animate__animated animate__fadeIn ">
      <div className="d-flex flex-wrap justify-content-between tab-container tabWithin ">
        <button
          className={` ${toggle == 0 ? "activeTab" : "tabBtn"}`}
          onClick={() => handleTab(0)}
        >
          {/* <span className="mx-2">
            <FaPlane />
          </span> */}
          Book a flight
        </button>
        <button
          className={` ${toggle == 1 ? "activeTab" : "tabBtn"} firstTabRadius`}
          onClick={() => handleTab(1)}
        >
          Manage my booking
        </button>
        <button
          className={` ${toggle == 2 ? "activeTab" : "tabBtn"}`}
          onClick={() => handleTab(2)}
        >
          Check in Online
        </button>
        <button
          className={` ${toggle == 3 ? "activeTab" : "tabBtn"}`}
          onClick={() => handleTab(3)}
        >
          Agent/Login
        </button>
      </div>
      <BookFlight toggle={toggle} />
      <Checkin toggle={toggle} />
      <Agent toggle={toggle} />
      <ManageBooking toggle={toggle} />
    </main>
  );
};
export default TabsTop;
