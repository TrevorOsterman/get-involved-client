import React from "react";
import { Link } from "react-router-dom";
import ApiContext from "../Context";
import Event from "../Event/Event";
import "./EventList.css";

export default class EventList extends React.Component {
  static contextType = ApiContext;
  render() {
    const { events = [] } = this.context;
    const eventTable = events.map((ev, idx) => (
      <div className="table-row" key={idx}>
        <Event
          id={idx}
          name={ev.title}
          date={ev.date}
          city={ev.city}
          state={ev.state}
          organization={ev.organization}
          link={ev.link}
        />
      </div>
    ));
    console.log(events);
    return (
      <section className="events-table">
        <h2>events</h2>
        <div id="search">
          <span className="searchlabel">search: </span>
          <input type="text" />
          <button>go</button>
        </div>

        <div className="EventList">
          <div className="header-row">
            <div className="header">title</div>
            <div className="header">date</div>
            <div className="header">city</div>
            <div className="header">state</div>
            <div className="header">organization</div>
            <div className="header">link</div>
          </div>

          <div className="event-rows">{eventTable}</div>
        </div>

        <Link className="create-event-link" to="/events/create">
          + create new event
        </Link>
      </section>
    );
  }
}
