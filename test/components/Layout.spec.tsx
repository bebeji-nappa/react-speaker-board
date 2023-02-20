import * as React from "react";
import * as renderer from "react-test-renderer";
import { Layout } from "../../src";

describe("Layout component", () => {
  it("should be correctly rendered", () => {
    const component = renderer.create(
      <Layout layout="subject">
        <div></div>
      </Layout>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
