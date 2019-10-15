import React from "react";
import "./EventDetails.css";
import ApiContext from "../Context";
import { Link, Route } from "react-router-dom";
import EditEvent from "../EditEvent/EditEvent";

export default class EventDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = ApiContext;
  render() {
    const { events = [] } = this.context;
    const eventId = this.props.match.params.eventId;
    const eventPage = events.find(opp => opp.eventId === eventId) || {
      eventId: ""
    };
    return (
      <div className="event-details">
        <h2 className="event-title">{eventPage.title}</h2>
        <div className="event-description">
          <h3>Description:</h3>
          <p>{eventPage.description}</p>
        </div>
        <ul className="details">
          <li>Date: {eventPage.date}</li>
          <li>City: {eventPage.city}</li>
          <li>State: {eventPage.state}</li>
          <li>Organization: {eventPage.org}</li>
          <li>Link(s): {eventPage.link}</li>
        </ul>

        <Link to={`/edit/${eventId}`}>edit</Link>
        <Link to="/">delete</Link>
      </div>
    );
  }
}
