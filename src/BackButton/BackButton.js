import React from "react";
import { Link } from "react-router-dom";
import "./BackButton.css";

export default function BackButton() {
  return (
    <Link className="go-back-link" to="/events">
      <span className="back-arrow">←</span>
    </Link>
  );
}
