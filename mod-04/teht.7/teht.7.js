'use strict';

const SCHOOL_LAT = 60.2248;
const SCHOOL_LON = 24.7586;

const map = L.map("map").setView([SCHOOL_LAT, SCHOOL_LON], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

let routingControl = null;

async function getCoordinates(address) {
  const url =
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.length === 0) {
    alert("Address not found!");
    return null;
  }

  return {
    lat: parseFloat(data[0].lat),
    lon: parseFloat(data[0].lon)
  };
}

async function getRoute(lat, lon) {

  const url =
    `https://router.project-osrm.org/route/v1/driving/${lon},${lat};${SCHOOL_LON},${SCHOOL_LAT}?overview=full&geometries=geojson`;

  const res = await fetch(url);
  const data = await res.json();

  if (!data.routes || data.routes.length === 0) {
    alert("No route found!");
    return null;
  }

  return data.routes[0];
}

document.getElementById("routeForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const address = document.getElementById("address").value;
  const coords = await getCoordinates(address);
  if (!coords) return;

  const route = await getRoute(coords.lat, coords.lon);
  if (!route) return;

  if (routingControl) map.removeControl(routingControl);

  routingControl = L.Routing.control({
    waypoints: [
      L.latLng(coords.lat, coords.lon),
      L.latLng(SCHOOL_LAT, SCHOOL_LON)
    ],
    lineOptions: { styles: [{ color: "blue", weight: 5 }] },
    routeWhileDragging: false,
    createMarker: () => null
  }).addTo(map);

  const distanceKm = route.distance / 1000;
  const durationMin = Math.round(route.duration / 60);

  document.getElementById("times").textContent =
    `Distance: ${distanceKm.toFixed(1)} km | Duration: ${durationMin} min`;

  map.fitBounds([
    [coords.lat, coords.lon],
    [SCHOOL_LAT, SCHOOL_LON]
  ]);
});
