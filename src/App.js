//Libraries
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./i18next";
//Styles
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
//React bootstrap components
//Components
import Banner from "./parts/Banner/Banner";
import NavBar from "./parts/NavBar/NavBar";
import Footer from "./parts/Footer/Footer";
//import Home from "./pages/Home/Home";
const Home = lazy(() => import("./pages/Home/Home"));
function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Banner />
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </Router>
      </Suspense>
    </>
  );
}

export default App;
