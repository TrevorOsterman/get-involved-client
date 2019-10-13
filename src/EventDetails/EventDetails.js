import React from "react";
import "./EventDetails.css";
import ApiContext from "../Context";

export default class EventDetails extends React.Component {
  static contextType = ApiContext;

  constructor(props) {
    super(props);
  }

  render() {
    const { events = [] } = this.context;
    const eventId = this.props.match.params;
    console.log(events);
    console.log(eventId);
    return <div className="event-details">I'm the event details page.</div>;
  }
}
