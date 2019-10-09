import React from "react";
import Signup from "../Signup/Signup";
import { Link } from "react-router-dom";
import "./Lander.css";

export default class Lander extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Lander">
        <p>
          <b>getInvolved</b> is an organization platform for volunteer
          opportunities in your community. Our aim is to take the trouble out of
          trying to find <i>how</i> you can make a difference, and rather{" "}
          <i>where</i> you can take action immediately.
        </p>

        <p>
          explore, post, search, organize, and share volunteer opportunities all
          from one central location with <b>getInvolved</b>
        </p>
        <Link to="/events" className="enter-button">
          enter
        </Link>

        <Signup />
      </div>
    );
  }
}
