import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav role="navigation">
      <div className="left-nav">
        <Link to="/events" className="nav-link">
          home
        </Link>
        <Link to="/create" className="nav-link">
          create
        </Link>
        <Link to="/about" className="nav-link">
          about
        </Link>
      </div>
      <div className="right-nav">
        <Link to="/signup" className="nav-link">
          register
        </Link>
      </div>
    </nav>
  );
}
