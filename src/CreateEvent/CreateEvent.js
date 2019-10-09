import React from "react";
import ApiContext from "../Context";
import "./CreateEvent.css";

export default class CreateEvent extends React.Component {
  static contextType = ApiContext;

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      date: "",
      city: "",
      state: "",
      organization: "",
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
    this.setState({ organization: value });
  }

  updateLink(value) {
    this.setState({ link: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const opp = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
      city: this.state.city,
      state: this.state.state,
      organization: this.state.organization,
      link: this.state.link
    };
    this.context.addEvent(opp);
    this.props.history.push("/events");
  }

  render() {
    return (
      <section>
        <h2 className="create-header">create an opportunity:</h2>
        <form className="event-form">
          <label>title: </label>
          <input
            type="text"
            value={this.state.title}
            onChange={e => this.updateTitle(e.target.value)}
          ></input>
          <label>description: </label>
          <textarea
            rows="10"
            onChange={e => this.updateDesc(e.target.value)}
          ></textarea>
          <label>date: </label>
          <input type="date" onChange={e => this.updateDate(e.target.value)} />
          <label>city: </label>
          <input
            type="text"
            onChange={e => this.updateCity(e.target.value)}
          ></input>
          <label>state: </label>
          <input
            type="text"
            onChange={e => this.updateState(e.target.value)}
          ></input>
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
          <button type="submit" onClick={e => this.handleSubmit(e)}>
            submit
          </button>
        </form>
      </section>
    );
  }
}
