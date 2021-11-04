import React, { useState, useEffect, useLayoutEffect } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import Rolex from "./practice/Rolex";
import Timex from "./practice/Timex";
import Timer from "./practice/Timer";
import { MapStyled } from "./components/Map.styled";
import "./App.css";

export default function App() {
  const [marker, setMarker] = useState("");
  const [lng, setLng] = useState(37.610641);
  const [lat, setLat] = useState(55.761994);

  mapboxgl.accessToken =
    "pk.eyJ1Ijoia2FzYXRrYSIsImEiOiJja3ZodHN0dDYwaXM2MnBxeGJ0a29jZnI4In0.JEe6w7022adSSQOODk5c0g";

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [37.610641, 55.761994],
      zoom: 10,
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([37.610641, 55.761994])
      .addTo(map);

    setMarker(marker);
  }, []);

  const stores = {
    km20: [37.610641, 55.761994],
    belief: [37.601152, 55.733396],
    brandshop: [37.616812, 55.767839],
  };

  function handleMarkerChange(e) {
    marker.setLngLat(stores[e.target.value]);
  }

  return (
    <>
      <div className="map-overlay">
        <h3>Выберите магазин: </h3>
        <select onChange={handleMarkerChange}>
          <option value="km20">KM20</option>
          <option value="belief">BELIEF</option>
          <option value="brandshop">BRANDSHOP</option>
        </select>
      </div>
      <div id="map"></div>
    </>
  );
}
