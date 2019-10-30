import React from "react";
import ReactDOM from "react-dom";
import ValidationError from "./ValidationError";
import { MemoryRouter } from "react-router-dom";

describe("ValidationError component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <ValidationError />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
