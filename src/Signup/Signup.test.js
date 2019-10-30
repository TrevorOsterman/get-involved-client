import React from "react";
import ReactDOM from "react-dom";
import Signup from "./Signup";
import { MemoryRouter } from "react-router-dom";

describe("Signup component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
