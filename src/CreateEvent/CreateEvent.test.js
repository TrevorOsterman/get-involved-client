import React from "react";
import ReactDOM from "react-dom";
import CreateEvent from "./CreateEvent";
import { MemoryRouter } from "react-router-dom";

describe("CreateEvent component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <CreateEvent />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
