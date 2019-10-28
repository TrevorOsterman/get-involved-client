import React from "react";
import "./EventDetails.css";
import ApiContext from "../Context";
import { Link, Route } from "react-router-dom";
import EditEvent from "../EditEvent/EditEvent";
import config from "../config.js";
import BackButton from "../BackButton/BackButton";

export default class EventDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  changeDateFormat(inputDate) {
    // expects Y-m-d
    var splitDate = inputDate.split("-");
    if (splitDate.count == 0) {
      return null;
    }

    var year = splitDate[0].substring(2, 4);
    var month = splitDate[1];
    var day = splitDate[2];

    return month + "\\" + day + "\\" + year;
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
    const eventPage = events.find(opp => opp.eventid == id) || {
      eventid: ""
    };
    return (
      <div className="event-details">
        <h2 className="event-title">{eventPage.title}</h2>
        <div className="event-description">
          <h3>Description:</h3>
          <p className="ev-desc">{eventPage.description}</p>
        </div>
        <ul className="details">
          <li>
            <b>Date:</b> {eventPage.event_date}
          </li>
          <li>
            <b>City:</b> {eventPage.city}
          </li>
          <li>
            <b>State:</b> {eventPage.state}
          </li>
          <li>
            <b>Organization:</b> {eventPage.organization}
          </li>
          <li>
            <b>Link(s):</b> {eventPage.link}
          </li>
        </ul>
        <div className="edit-delete">
          <Link to={`/edit/${id}`}>edit</Link>
          <Link onClick={e => this.handleDelete(e)} to="/events">
            delete
          </Link>
        </div>
        <BackButton />
      </div>
    );
  }
}
