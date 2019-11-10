import React from "react";
import ApiContext from "../Context";
import "./CreateEvent.css";
import config from "../config.js";
import ValidationError from "../ValidationError/ValidationError";

export default class CreateEvent extends React.Component {
  static contextType = ApiContext;

  constructor(props) {
    super(props);
    this.state = {
      eventId: "",
      title: "",
      description: "",
      date: "",
      city: "",
      state: "",
      org: "",
      link: ""
    };
  }

  updateTitle(value) {
    this.setState({ title: value });
  }

  updateDesc(value) {
    this.setState({ description: value });
  }

  updateDate(value) {
    this.setState({ date: value });
  }

  updateCity(value) {
    this.setState({ city: value });
  }

  updateState(value) {
    this.setState({ state: value });
  }

  updateOrg(value) {
    this.setState({ org: value });
  }

  updateLink(value) {
    this.setState({ link: value });
  }

  validateTitle() {
    if (this.state.title === "") {
      return "* required";
    }
  }

  validateDate() {
    if (this.state.date === "") {
      return "* required";
    }
  }

  validateCity() {
    if (this.state.city === "") {
      return "* required";
    }
  }

  validateState() {
    if (this.state.state === "") {
      return "* required";
    }
  }

  validateDesc() {
    if (this.state.description === "") {
      return "* required";
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const opp = {
      title: this.state.title,
      description: this.state.description,
      event_date: this.state.date,
      city: this.state.city,
      state: this.state.state,
      organization: this.state.org,
      link: this.state.link
    };
    const url = `${config.API_ENDPOINT}/api/events`;
    const options = {
      method: "POST",
      body: JSON.stringify(opp),
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then(opp => {
        this.context.addEvent(opp);
        this.props.history.push("/events");
      });
  }

  render() {
    return (
      <section>
        <h2 className="create-header">create an opportunity:</h2>
        <form className="event-form">
          <fieldset className="non-desc">
            <label>title: </label>
            <input
              type="text"
              value={this.state.title}
              onChange={e => this.updateTitle(e.target.value)}
            ></input>
            <ValidationError message={this.validateTitle()} />
            <label>date: </label>
            <input
              type="date"
              onChange={e => this.updateDate(e.target.value)}
            />
            <ValidationError message={this.validateDate()} />
            <label>city: </label>
            <input
              type="text"
              onChange={e => this.updateCity(e.target.value)}
            ></input>
            <ValidationError message={this.validateCity()} />
            <label>state: </label>
            <input
              maxLength="2"
              type="text"
              onChange={e => this.updateState(e.target.value)}
            ></input>
            <ValidationError message={this.validateState()} />
            <label>organization: </label>
            <input
              type="text"
              onChange={e => this.updateOrg(e.target.value)}
            ></input>
            <label>link: </label>
            <input
              type="text"
              onChange={e => this.updateLink(e.target.value)}
            ></input>
          </fieldset>
          <fieldset className="desc">
            <label>description: </label>
            <textarea
              rows="10"
              onChange={e => this.updateDesc(e.target.value)}
            ></textarea>
            <ValidationError message={this.validateDesc()} />
            <button
              className="create-submit"
              type="submit"
              onClick={e => this.handleSubmit(e)}
              disabled={
                this.validateTitle() ||
                this.validateDate() ||
                this.validateCity() ||
                this.validateState() ||
                this.validateDesc()
              }
            >
              submit
            </button>
          </fieldset>
        </form>
      </section>
    );
  }
}
