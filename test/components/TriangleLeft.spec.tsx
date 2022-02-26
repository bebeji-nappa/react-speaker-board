import React from "react";
import renderer from "react-test-renderer";
import { TriangleLeft } from "../../src";

describe("TriangleLeft component", () => {
  it("should be correctly rendered", () => {
    const component = renderer.create(
      <TriangleLeft size="80" height="40" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
