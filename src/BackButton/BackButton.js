import React from "react";
import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <Link className="go-back-link" to="/events">
      go back
    </Link>
  );
}
