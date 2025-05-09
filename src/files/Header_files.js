import React from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Header(props) {
  const location = useLocation();
  const isActive = (path) => (location.pathname === path ? "active-tab" : "");

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 py-3 shadow-sm fixed-top">
        <Link className="navbar-brand fw-bold" to="/">{props.header}</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/")}`} to="/">{props.Home}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="https://final-portfolio-lime.vercel.app/" target="_blank" rel="noopener noreferrer">{props.about}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Courses">{props.cour}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">{props.login}</Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#Skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Certification">Certification</a>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
