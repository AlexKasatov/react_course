import mapboxgl from "mapbox-gl";
import { useLayoutEffect } from "react";

export default function useMapBox(
  mapContainer = "map",
  admin,
  mapCenter = [37.61192, 55.76199],
  mapZoom = 10
) {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoia2FzYXRrYSIsImEiOiJja3dsN3hobnkxam9yMndtZHN1eHFiZWdvIn0.BFJsFfAB0fZRbjVnqcvySA";

  useLayoutEffect(() => {
    if (!admin) {
      let map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/dark-v10",
        center: mapCenter,
        zoom: mapZoom,
      });
    }
  }, [admin]);
}
