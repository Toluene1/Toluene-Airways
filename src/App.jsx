import reactLogo from "./assets/react.svg";
import React, { Component, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import DefaultLayout from "./Layout/Defaultlayout";
import "./App.css";

function App() {
  return (
    <DefaultLayout>
      <main className="mt-5">
        <div className="homepageTop">
          <div>
            <h2 className="textHome1">
              Travel to new destinations <br /> with us
            </h2>
            <button className="buttonhome1">Book Now</button>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
}

export default App;
