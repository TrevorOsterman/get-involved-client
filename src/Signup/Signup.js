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
            available to register with just yet. if you'd like, however, to
            leave your name and email address with us, we'd be happy to reach
            out as soon as the platform is fully functional!{" "}
          </p>
          <BackButton />
        </section>
        <form id="signup">
          <h2>sign up</h2>
          <label>first name:</label>
          <input type="text"></input>
          <label>last name:</label>
          <input type="text"></input>
          <label>email:</label>
          <input type="email"></input>
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
