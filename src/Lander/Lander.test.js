import React from "react";
import ReactDOM from "react-dom";
import Lander from "./Lander";
import { MemoryRouter } from "react-router-dom";

describe("Lander component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Lander />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
