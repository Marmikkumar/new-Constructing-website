import React from "react";
import "./styles.css";
import Home from "./home";
import Residencies from "./Residencies";
import Ourvalue from "./ourvalue";
import Contact from "./Contact";
import Footer from "./footer";

export default function App() {
  return (
    <div>
      <Home />
      <Residencies />
      <Ourvalue />
      <Contact />
      <Footer />
    </div>
  );
}
