import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Aim from "./components/Aim";
import Gallery from "./components/Gallery";
import Vehicle from "./components/Vehicle";
import Getlogo from "./components/Getlogo";
import Clothing from "./components/Clothing";
import Electronic from "./components/Electronic";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
      <Route path='/aim'>
        <Aim />
      </Route>
      <Route path='/gallery'>
        <Gallery />
      </Route>
      <Route path='/vehicle'>
        <Vehicle />
      </Route>
      <Route path='/getlogo'>
        <Getlogo />
      </Route>
      <Route path='/clothing'>
        <Clothing />
      </Route>
      <Route path='/electronic'>
        <Electronic />
      </Route>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
