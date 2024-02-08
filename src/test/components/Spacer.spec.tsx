import React from "react";
import * as renderer from "react-test-renderer";
import { Spacer } from "../../src";

describe("Spacer component", () => {
  it("should be correctly rendered", () => {
    const component = renderer.create(<Spacer />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
