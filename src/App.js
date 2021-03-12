//Libraries
import React, { Suspense, lazy } from "react";
import { HashRouter as Router } from "react-router-dom";
import "./i18next";
//Styles
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./routes/AppRoutes";
//Components

const Banner = lazy(() => import("./parts/Banner/Banner"));
const NavBar = lazy(() => import("./parts/NavBar/NavBar"));
const Footer = lazy(() => import("./parts/Footer/Footer"));
function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Banner />
          <NavBar />
          <AppRoutes />
          <Footer />
        </Router>
      </Suspense>
    </>
  );
}

export default App;
