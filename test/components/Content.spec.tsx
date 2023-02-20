import * as React from "react";
import * as renderer from "react-test-renderer";
import { Content } from "../../src";

describe("Content component", () => {
  it("should be correctly rendered", () => {
    const component = renderer.create(
      <Content>
        <div></div>
      </Content>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
