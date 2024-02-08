import React from "react";
import * as renderer from "react-test-renderer";
import { Circle } from "../../src";

describe("Circle component", () => {
  it("should be correctly rendered", () => {
    const component = renderer.create(
      <Circle>
        <div></div>
      </Circle>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
