import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-scroll";

function Homenav() {
  const [key, setkey] = useState(false);

  function handleclick() {
    setkey(!key);
  }

  return (
    <div className={key ? "n1" : "navpage"}>
      <div onClick={handleclick} className="menu">
        <div className={key ? " menubar bar1" : "menubar "}></div>
        <div className={key ? "menubar bar2" : "menubar "}></div>
        <div className={key ? "menubar bar3" : "menubar "}></div>
      </div>

      <img src="https://real-estate-web.pages.dev/logo2.png" alt="" />
      <ul className="ref">
        <li>
          <Link
            className={key ? "L1 " : ""}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="home"
          >
            home
          </Link>
        </li>
        <li>
          <Link
            className={key ? "L1 " : ""}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="residencies"
          >
            Residencies
          </Link>
        </li>
        <li>
          <Link
            className={key ? "L1 " : ""}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="ourvalue"
          >
            Our Value
          </Link>
        </li>
        <li>
          <Link
            className={key ? "L1 " : ""}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="contact"
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            className={key ? "L1 " : ""}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="ftr"
          >
            Get Started
          </Link>
        </li>
        <li>
          <Link
            className={key ? "L1 " : ""}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="contact"
          >
            <button className={key ? "L1 " : ""} type="submit">
              Contact
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Homenav;
