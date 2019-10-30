import React from "react";
import ReactDOM from "react-dom";
import BackButton from "./BackButton";
import { MemoryRouter } from "react-router-dom";

describe("BackButton component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <BackButton />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
