import React from "react";
import ReactDOM from "react-dom";
import EventDetails from "./EventDetails";
import { MemoryRouter } from "react-router-dom";

describe("EventDetails component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <EventDetails />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
