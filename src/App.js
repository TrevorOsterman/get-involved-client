import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Lander from "./Lander/Lander";
import EventList from "./EventList/EventList";
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
      loaded: false,
      error: null
    };
  }

  setEvents = events => {
    this.setState({ events });
  };

  addEvent = event => {
    this.rerender();
  };

  editEvent = update => {
    this.rerender();
  };

  deleteEvent = id => {
    this.rerender();
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

  rerender = () => {
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
        this.setState({ loaded: true });
        return res.json();
      })
      .then(this.setEvents)
      .catch(error => this.setState({ error }));
  };

  componentDidMount() {
    this.rerender();
  }

  render() {
    const value = {
      events: this.state.events,
      addEvent: this.addEvent,
      editEvent: this.editEvent,
      deleteEvent: this.deleteEvent,
      handleSearch: this.handleSearch,
      rerender: this.rerender,
      didLoad: this.state.loaded
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
