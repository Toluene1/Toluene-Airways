import reactLogo from "./assets/react.svg";
import React, { Component, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import DefaultLayout from "./Layout/Defaultlayout";
import "./App.css";

function App() {
  return (
    <main className="mt-5">
      <DefaultLayout>
        <h1 className="text-primary">Tolulope</h1>
      </DefaultLayout>
    </main>
  );
}

export default App;
