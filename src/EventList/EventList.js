import React from "react";
import { Link } from "react-router-dom";
import ApiContext from "../Context";
import Event from "../Event/Event";
import "./EventList.css";
import LoadingPage from '../LoadingPage/LoadingPage'

export default class EventList extends React.Component {
  static contextType = ApiContext;
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }

  searchClear() {
    this.setState({ search: "" });
    this.context.rerender();
  }

  changeDateFormat(inputDate) {
    // expects Y-m-d
    var splitDate = inputDate.split("-");
    if (splitDate.count === 0) {
      return null;
    }

    var year = splitDate[0].substring(2, 4);
    var month = splitDate[1];
    var day = splitDate[2];

    return month + "\\" + day + "\\" + year;
  }

  render() {
    const { events = [] } = this.context;
    const eventTable = events.map((ev, idx) => (
      <div className="table-row" key={idx}>
        <Link className="table-row-link" to={`/events/${ev.eventid}`}>
          <Event
            id={idx}
            name={ev.title}
            date={this.changeDateFormat(ev.event_date.substring(0, 10))}
            city={ev.city}
            state={ev.state.toUpperCase()}
            org={ev.organization}
            link={ev.link}
          />
        </Link>
      </div>
    ));
    if (this.context.didLoad === false) {
      return <LoadingPage />;
    }

    if (this.context.didLoad === true) {
      return (
        <section className="events-table">
          <div id="search">
            <h2 className="events-title">events</h2>
            <span className="searchlabel">search: </span>
            <input
              type="text"
              value={this.state.search}
              onChange={e => this.setState({ search: e.target.value })}
            />
            <button
              onClick={() => this.context.handleSearch(this.state.search)}
            >
              go
            </button>
            <button onClick={() => this.searchClear()}>clear</button>
          </div>

          <div className="EventList">
            <div className="header-row">
              {[`title`, `date`, `city`, `state`].map((key, id) => {
                return (
                  <div key={id} className="header" style={{ order: id }}>
                    {key}
                  </div>
                );
              })}
            </div>

            <div className="event-rows">{eventTable}</div>
          </div>

          <Link className="create-event-link" to="/create">
            <b>+ create new event</b>
          </Link>
        </section>
      );
    }
  }
}
