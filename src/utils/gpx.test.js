import { generateXmlDoc } from "./gpx";

describe("GPX utils", () => {
  it("creates an xml document with waypoints", () => {
    const waypoints = [
      { lat: 10, lng: 10 },
      { lat: 20, lng: 20 },
    ];
    const xmlDoc = generateXmlDoc(waypoints);
    expect(xmlDoc.querySelectorAll("gpx").length).toEqual(1);
    expect(xmlDoc.querySelectorAll("wpt").length).toEqual(2);
  });
});
