import reactLogo from "./assets/react.svg";
import React, { Component, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import DefaultLayout from "./Layout/Defaultlayout";
import "./App.css";
import LetsGo from "./components/LetsGo";
import NewsLetter from "./components/NewsLetter";
import PlanTravel from "./components/PlanTravel";
import TabsTop from "./components/TabsTop";

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
        <TabsTop />
        <br />
        <br />
        {/* Travel Places */}
        <LetsGo />
        {/* NewsLetter */}
        <NewsLetter />
        <br />
        <br />
        {/* Plan Your Travel */}
        <PlanTravel />
        {/* Footer */}
      </main>
    </DefaultLayout>
  );
}

export default App;
