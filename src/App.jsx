import { useState } from "react";
import InfoContextProvider from "./components/infoContext/InfoContextProvider";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./components/jsx-pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

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
