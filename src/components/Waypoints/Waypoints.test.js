import React from "react";
import renderer from "react-test-renderer";
import Waypoints from "./Waypoints";

describe("Waypoints", () => {
  it("renders", () => {
    const tree = renderer
      .create(<Waypoints list={[]} onRemove={() => {}} onDrop={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
