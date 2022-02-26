import React from "react";
import renderer from "react-test-renderer";
import { Text } from "../../src";

describe("Text component", () => {
  it("should be correctly rendered", () => {
    const component = renderer.create(
      <Text>text</Text>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
