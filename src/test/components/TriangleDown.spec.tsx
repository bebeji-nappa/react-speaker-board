import React from "react";
import * as renderer from "react-test-renderer";
import { TriangleDown } from "..";

describe("TriangleDown component", () => {
  it("should be correctly rendered", () => {
    const component = renderer.create(<TriangleDown size="80" height="40" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
