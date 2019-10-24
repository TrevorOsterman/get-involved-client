import React from "react";
import "./EventDetails.css";
import ApiContext from "../Context";
import { Link, Route } from "react-router-dom";
import EditEvent from "../EditEvent/EditEvent";
import config from "../config.js";

export default class EventDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete() {
    const id = this.props.match.params.eventId;
    const url = `${config.API_ENDPOINT}/api/events/${this.props.match.params.eventId}`;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(res => {
        if (!res.ok) return res.json();
      })
      .then(ev => {
        this.context.deleteEvent(id);
      });
  }

  static contextType = ApiContext;
  render() {
    const { events = [] } = this.context;
    const id = this.props.match.params.eventId;
    /* why doesn't this work with strict equivalency? */
    const eventPage = events.find(opp => opp.eventid == id) || {
      eventid: ""
    };
    return (
      <div className="event-details">
        <h2 className="event-title">{eventPage.title}</h2>
        <div className="event-description">
          <h3>Description:</h3>
          <p>{eventPage.description}</p>
        </div>
        <ul className="details">
          <li>Date: {eventPage.event_date}</li>
          <li>City: {eventPage.city}</li>
          <li>State: {eventPage.state}</li>
          <li>Organization: {eventPage.organization}</li>
          <li>Link(s): {eventPage.link}</li>
        </ul>

        <Link to={`/edit/${id}`}>edit</Link>
        <Link onClick={e => this.handleDelete(e)} to="/events">
          delete
        </Link>
      </div>
    );
  }
}
