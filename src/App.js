import React from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Lander from "./Lander/Lander";
import EventList from "./EventList/EventList";
import Event from "./Event/Event";
import CreateEvent from "./CreateEvent/CreateEvent";
import ApiContext from "/Users/TrevorOsterman/Projects/get-involved/src/Context.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  addEvent = event => {
    this.setState({ events: [...this.state.events, event] });
  };

  render() {
    const value = {
      events: this.state.events,
      addEvent: this.addEvent
    };
    return (
      <ApiContext.Provider value={value}>
        <div className="App">
          <Route path="/" component={Navbar} />
          <Route path="/" component={Header} />
          <div className="main-routes">
            <Route exact path="/" component={Lander} />
            <Route exact path="/events" component={EventList} />
            <Route path="/events/:eventId" component={Event} />
            <Route path="/events/create" component={CreateEvent} />
          </div>
        </div>
      </ApiContext.Provider>
    );
  }
}

export default App;
