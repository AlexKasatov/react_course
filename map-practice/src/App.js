import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

export default function App() {
  const [random, setRandom] = useState(Math.random());

  mapboxgl.accessToken =
    "pk.eyJ1Ijoia2FzYXRrYSIsImEiOiJja3Y3NHhiaHcwYjhoMnJxdWV4eWY2bHN2In0.wrdFb8gfLmUcwUdaMXA3pA";

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [37.61192, 55.76199],
      zoom: 10,
    });
    return () => {
      //уборка
    };
  }, []);

  return (
    <>
      <button id="rerender" onClick={() => setRandom(Math.random())}>
        Ререндер!
      </button>
      <div id="map"></div>
    </>
  );
}
