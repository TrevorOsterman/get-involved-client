import React from "react";
import "./Signup.css";

export default class Signup extends React.Component {
  render() {
    return (
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
    );
  }
}
