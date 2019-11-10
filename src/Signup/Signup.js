import React from "react";
import BackButton from "../BackButton/BackButton";

import "./Signup.css";

export default class Signup extends React.Component {
  render() {
    return (
      <div className="signup-div">
        <section className="register-p">
          <p>
            <b>getInvolved</b> is currently in testing, and as such, is not
            available to register with just yet. please continue to check back
            for the implementation of this functionality.
          </p>
          <BackButton />
        </section>{" "}
      </div>
    );
  }
}
