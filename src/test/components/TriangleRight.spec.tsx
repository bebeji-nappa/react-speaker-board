import React from "react";
import * as renderer from "react-test-renderer";
import { TriangleRight } from "../../src";

describe("TriangleRight component", () => {
  it("should be correctly rendered", () => {
    const component = renderer.create(<TriangleRight size="80" height="40" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
