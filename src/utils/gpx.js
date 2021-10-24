export const createExport = (waypoints) => {
  const xmlDoc = document.implementation.createDocument(
    "http://www.topografix.com/GPX/1/1",
    "",
    null
  );
  const gpx = document.createElementNS(
    "http://www.topografix.com/GPX/1/1",
    "gpx"
  );
  waypoints.forEach((waypoint) => {
    const wpt = xmlDoc.createElement("wpt");
    wpt.setAttribute("lat", waypoint.lat);
    wpt.setAttribute("lon", waypoint.lng);
    gpx.appendChild(wpt);
  });
  xmlDoc.appendChild(gpx);
  const serializer = new XMLSerializer();
  const xmlString = `<?xml version="1.0" encoding="UTF-8" standalone="no" ?>${serializer.serializeToString(
    xmlDoc
  )}`;
  return `data:text/xml;charset=UTF-8, ${encodeURIComponent(xmlString)}`;
};
