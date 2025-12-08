import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Hero from "./Components/HeroSection/Hero";
import Circle from "./Components/Circle/Circle";
import Box from "./Circle-IMG-Box/box";
import Footer from "./Footer/Footer";
import Card from "./Cards/Card";
import Slider from "./Slider/Slider";

import About from "./Pages/About/About";
import Report from "./Pages/Report/Report"
import Contact from "./Pages/Contact/Contact"
import Magzin from "./Pages/Magzin/Magzin"
import Evant from "./Pages/Evants/Evant"
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Slider />
              <Circle />
              <Box />
              <Card />
              <Footer />
            </>
          }
        />

        {/* ABOUT PAGE */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/event" element={<Evant/>} />
        <Route path="/Magzin" element={<Magzin/>} />
        <Route path="/report" element={<Report/>} />

      </Routes>
    </Router>
  );
}

export default App;
