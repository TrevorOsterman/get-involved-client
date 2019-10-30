import React from "react";
import ReactDOM from "react-dom";
import EditEvent from "./EditEvent";
import { MemoryRouter } from "react-router-dom";

describe("EditEvent component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <EditEvent />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
