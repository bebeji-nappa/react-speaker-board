import React from "react";
import renderer from "react-test-renderer";
import { Square } from "../../src";

describe("Square component", () => {
  it("should be correctly rendered", () => {
    const component = renderer.create(
      <Square>
        <div></div>
      </Square>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
