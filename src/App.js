import React from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Lander from "./Lander/Lander";
import EventList from "./EventList/EventList";
import Event from "./Event/Event";
import Signup from "./Signup/Signup";
import CreateEvent from "./CreateEvent/CreateEvent";
import EditEvent from "./EditEvent/EditEvent";
import EventDetails from "./EventDetails/EventDetails";
import About from "./About/About";
import ApiContext from "/Users/TrevorOsterman/Projects/get-involved/src/Context.js";
import config from "./config.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      error: null
    };
  }

  setEvents = events => {
    this.setState({ events });
  };

  addEvent = event => {
    this.setState({ events: [...this.state.events, event] });
  };

  editEvent = update => {
    this.setState({
      events: [
        ...this.state.events.filter(
          oldEvent => oldEvent.eventId !== update.eventId
        ),
        update
      ]
    });
  };

  deleteEvent = id => {
    this.setState({
      events: [...this.state.events.filter(ev => ev.eventId !== ev.id)]
    });
  };

  handleSearch = value => {
    function filterItems(arr, query) {
      return arr.filter(
        ev =>
          ev.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
          ev.city.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
          ev.state.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
          ev.organization.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }
    this.setState({
      events: filterItems([...this.state.events], value)
    });
  };

  handleClear = () => {
    fetch(`${config.API_ENDPOINT}/api/events`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(this.setEvents)
      .catch(error => this.setState({ error }));
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/api/events`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(this.setEvents)
      .catch(error => this.setState({ error }));
  }

  render() {
    const value = {
      events: this.state.events,
      addEvent: this.addEvent,
      editEvent: this.editEvent,
      deleteEvent: this.deleteEvent,
      handleSearch: this.handleSearch,
      handleClear: this.handleClear
    };
    return (
      <ApiContext.Provider value={value}>
        <div className="App">
          <Route path="/" component={Navbar} />
          <Route path="/" component={Header} />
          <div className="main-routes">
            <Route exact path="/" component={Lander} />
            <Route exact path="/events" component={EventList} />
            <Route exact path="/events/:eventId" component={EventDetails} />
            <Route exact path="/create" component={CreateEvent} />
            <Route path="/edit/:eventId" component={EditEvent} />
            <Route path="/signup" component={Signup} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </ApiContext.Provider>
    );
  }
}

export default App;
