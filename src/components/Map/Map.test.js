import React from "react";
import renderer from "react-test-renderer";
import Map from "./Map";

describe("Map", () => {
  it("renders", () => {
    const tree = renderer
      .create(
        <Map lat="50.5238" lng="10.0204" onClick={() => {}} waypoints={[]} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
