import React from "react";
import ReactDOM from "react-dom";
import Event from "./Event";
import { MemoryRouter } from "react-router-dom";

describe("Event component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Event />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
