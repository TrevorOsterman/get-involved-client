import React from "react";
import ReactDOM from "react-dom";
import EventList from "./EventList";
import { MemoryRouter } from "react-router-dom";

describe("EventList component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <EventList />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
