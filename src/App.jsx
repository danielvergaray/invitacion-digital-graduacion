import { useState } from "react";
import InfoContextProvider from "./components/infoContext/InfoContextProvider";
import { Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/jsx-pages/Home";

function App() {
  return (
    <>
      <HashRouter>
        <InfoContextProvider>
          <Home />
        </InfoContextProvider>
      </HashRouter>
    </>
  );
}

export default App;
