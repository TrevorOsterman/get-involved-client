import React from "react";
import { Link } from "react-router-dom";
import ApiContext from "../Context";
import Event from "../Event/Event";

export default class EventList extends React.Component {
  static contextType = ApiContext;
  render() {
    const { events = [] } = this.context;
    const eventTable = events.map((ev, idx) => (
      <tr key={idx}>
        <Event
          id={idx}
          name={ev.title}
          date={ev.date}
          city={ev.city}
          state={ev.state}
          organization={ev.organization}
          link={ev.link}
        />
      </tr>
    ));
    console.log(events);
    return (
      <section>
        <h2>events</h2>
        <div id="search">
          <span className="searchlabel">search: </span>
          <input type="text" />
          <button>go</button>
        </div>
        <table className="EventList">
          <thead>
            <tr className="table-headers">
              <th id="test">title</th>
              <th>date</th>
              <th>city</th>
              <th>state</th>
              <th>organization</th>
              <th>link</th>
            </tr>
          </thead>
          <tbody>{eventTable}</tbody>
        </table>
        <Link to="/event/create">+ create new event</Link>
      </section>
    );
  }
}
