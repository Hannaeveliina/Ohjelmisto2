'use strict'

const SCHOOL_LAT = 60.2248;
const SCHOOL_LON = 24.7586;

const map = L.map('map').setView([SCHOOL_LAT, SCHOOL_LON], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

let routingControl = null;

async function getCoordinates(address) {
  const url = `https://api.digitransit.fi/geocoding/v1/search?text=${address}`;
  const res = await fetch(url);
  const data = await res.json();

  if (data.features.length === 0) {
    alert("Address not found!");
    return null;
  }

  const coords = data.features[0].geometry.coordinates;
  return { lon: coords[0], lat: coords[1] };
}

async function getRoute(lat, lon) {
  const query = `
  {
    plan(
      from: {lat: ${lat}, lon: ${lon}}
      to: {lat: ${SCHOOL_LAT}, lon: ${SCHOOL_LON}}
    ) {
      itineraries {
        startTime
        endTime
      }
    }
  }`;

  const response = await fetch(
    "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql",
    {
      method: "POST",
      headers: { "Content-Type": "application/graphql" },
      body: query
    }
  );

  return await response.json();
}

document.getElementById("routeForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const address = document.getElementById("address").value;

  const coords = await getCoordinates(address);
  if (!coords) return;

  const routeData = await getRoute(coords.lat, coords.lon);

  const itinerary = routeData.data.plan.itineraries[0];

  const start = new Date(itinerary.startTime);
  const end = new Date(itinerary.endTime);

  document.getElementById("times").textContent =
    `Trip starts: ${start.toLocaleTimeString()} | Ends: ${end.toLocaleTimeString()}`;

  if (routingControl) {
    map.removeControl(routingControl);
  }

  routingControl = L.Routing.control({
    waypoints: [
      L.latLng(coords.lat, coords.lon),
      L.latLng(SCHOOL_LAT, SCHOOL_LON)
    ],
    routeWhileDragging: false
  }).addTo(map);

  map.setView([coords.lat, coords.lon], 12);
});
