import * as React from "react";
import * as renderer from "react-test-renderer";
import { ReactSpeakerBoard } from "../../src";

describe("ReactSpeakerBoard component", () => {
  it("should be correctly rendered", () => {
    const slide = [() => <div></div>];
    const component = renderer.create(<ReactSpeakerBoard slide={slide} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
