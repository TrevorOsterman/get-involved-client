import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router-dom";

describe("Nav component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
