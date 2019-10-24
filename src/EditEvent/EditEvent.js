import React from "react";
import ApiContext from "../Context";
import config from "../config";

export default class EditEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      event_date: "",
      city: "",
      state: "",
      description: "",
      organization: "",
      link: ""
    };
  }

  componentDidMount() {
    const url = `${config.API_ENDPOINT}/api/events/${this.props.match.params.eventId}`;
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(ev => {
        this.setState(ev);
      });
  }

  updateTitle(value) {
    this.setState({ title: value });
  }

  updateDesc(value) {
    this.setState({ description: value });
  }

  updateDate(value) {
    this.setState({ event_date: value });
  }

  updateCity(value) {
    this.setState({ city: value });
  }

  updateState(value) {
    this.setState({ state: value });
  }

  updateOrg(value) {
    this.setState({ organization: value });
  }

  updateLink(value) {
    this.setState({ link: value });
  }

  handleEdit(e) {
    e.preventDefault();
    const update = this.state;
    const url = `${config.API_ENDPOINT}/api/events/${this.props.match.params.eventId}`;
    const options = {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          res.json();
        }
      })
      .then(res => {
        this.context.editEvent(update);
        this.props.history.push("/events");
      });
  }

  static contextType = ApiContext;
  render() {
    return (
      <section>
        <h2 className="create-header">edit opportunity:</h2>
        <form className="event-form">
          <fieldset className="non-desc">
            <label>title: </label>
            <input
              type="text"
              onChange={e => this.updateTitle(e.target.value)}
              value={this.state.title}
            ></input>

            <label>date: </label>
            <input
              type="date"
              value={this.state.date}
              onChange={e => this.updateDate(e.target.value)}
            />
            <label>city: </label>
            <input
              type="text"
              value={this.state.city}
              onChange={e => this.updateCity(e.target.value)}
            ></input>
            <label>state: </label>
            <input
              type="text"
              value={this.state.state}
              onChange={e => this.updateState(e.target.value)}
            ></input>
            <label>organization: </label>
            <input
              type="text"
              value={this.state.org}
              onChange={e => this.updateOrg(e.target.value)}
            ></input>
            <label>link: </label>
            <input
              type="text"
              value={this.state.link}
              onChange={e => this.updateLink(e.target.value)}
            ></input>
          </fieldset>
          <fieldset className="desc">
            <label>description: </label>
            <textarea
              rows="10"
              value={this.state.description}
              onChange={e => this.updateDesc(e.target.value)}
            ></textarea>
            <button
              className="create-submit"
              type="submit"
              onClick={e => this.handleEdit(e)}
            >
              submit
            </button>
          </fieldset>
        </form>
      </section>
    );
  }
}

EditEvent.defaultProps = {
  eventDetails: {}
};
