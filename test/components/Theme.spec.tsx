import React from "react";
import renderer from "react-test-renderer";
import { Theme } from "../../src";

describe("Theme component", () => {
  it("should be correctly rendered", () => {
    const component = renderer.create(
      <Theme themeColor="sky" textColor="white">
        <div></div>
      </Theme>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
