import React from "react";
import * as renderer from "react-test-renderer";
import { TriangleUp } from "../../src";

describe("TriangleUp component", () => {
  it("should be correctly rendered", () => {
    const component = renderer.create(<TriangleUp size="80" height="40" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
