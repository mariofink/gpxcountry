import React from "react";
import renderer from "react-test-renderer";
import DraggableListItem from "./DraggableListItem";

describe("DraggableListItem", () => {
  it("renders", () => {
    const tree = renderer
      .create(
        <ul>
          <DraggableListItem index="0" onDrop={() => {}}>
            My item
          </DraggableListItem>
        </ul>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
