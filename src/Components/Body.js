import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import logo from "../assets/logo1.png";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

//variable storing toggle icon
const on = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="currentColor"
    class="bi bi-toggle2-on"
    viewBox="0 0 16 16"
  >
    <path d="M7 5H3a3 3 0 0 0 0 6h4a4.995 4.995 0 0 1-.584-1H3a2 2 0 1 1 0-4h3.416c.156-.357.352-.692.584-1z" />
    <path d="M16 8A5 5 0 1 1 6 8a5 5 0 0 1 10 0z" />
  </svg>
);
// variable storing off toggle
const off = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="currentColor"
    class="bi bi-toggle2-off"
    viewBox="0 0 16 16"
  >
    <path d="M9 11c.628-.836 1-1.874 1-3a4.978 4.978 0 0 0-1-3h4a3 3 0 1 1 0 6H9z" />
    <path d="M5 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 5 3a5 5 0 0 0 0 10z" />
  </svg>
);

export default function Body() {
  // state to determine on and off{color modes} mode of the website
  const [dark, setDark] = useState(false);

  // determining read result and hide for ABOUT route
  const [show, setShow] = useState(false);
  // function to determine setShow for readmore in about page
  function toggle() {
    setShow((prev) => !prev);
  }

  return (
    <div
      className="container-fluid"
      style={{ letterSpacing: "-0.05em", margin: 0, padding: 0 }}
    >
      <nav
        className=" navbar navbar-expand-lg  sticky-top  "
        style={
          dark
            ? {
                background: "rgb(7, 5, 5)",
                color: "rgb(60, 64, 68)",
              }
            : { background: "rgb(16, 49, 99)", color: "white" }
        }
      >
        <div className="container-fluid ">
          <Link to="/">
            <img src={logo} width={70} className="mx-3" alt="logo" />
          </Link>
          <h1
            className="navbar-brand"
            style={dark ? { color: "rgb(60, 64, 68)" } : { color: "white" }}
          >
            BUY WITH CHRIS
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  className="nav-link "
                  aria-current="page"
                  to="/"
                  style={
                    dark ? { color: "rgb(60, 64, 68)" } : { color: "white" }
                  }
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  style={
                    dark ? { color: "rgb(60, 64, 68)" } : { color: "white" }
                  }
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact"
                  style={
                    dark ? { color: "rgb(60, 64, 68)" } : { color: "white" }
                  }
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="mx-3" onClick={() => setDark((prev) => !prev)}>
              {dark ? on : off}
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home colorMode={dark} />} />
        <Route
          path="/about"
          element={<About toggle={toggle} show={show} colorMode={dark} />}
        />
        <Route path="/contact" element={<Contact colorMode={dark} />} />
      </Routes>
    </div>
  );
}
