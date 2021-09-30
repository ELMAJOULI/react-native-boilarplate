import "react-native";
import React from "react";
import { App } from "../index";
import { render } from "react-native-testing-library";

it("renders correctly", () => {
  render(<App defaultProps={"empty"} defaultActions={jest.fn()} />);
});
