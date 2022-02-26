import React from "react";
import renderer from "react-test-renderer";
import { TriangleDown } from "../../src";

describe("TriangleDown component", () => {
  it("should be correctly rendered", () => {
    const component = renderer.create(
      <TriangleDown size="80" height="40" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
