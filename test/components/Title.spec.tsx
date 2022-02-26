import React from "react";
import renderer from "react-test-renderer";
import { Title } from "../../src";

describe("Title component", () => {
  it("should be correctly rendered", () => {
    const component = renderer.create(
      <Title>title</Title>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
