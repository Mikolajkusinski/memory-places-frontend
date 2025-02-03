import React, { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import styles from "./Map.module.scss";
import { MAPS_API_KEY } from "../../../config";
import { createRoot } from "react-dom/client";
import MarkerPopup from "./MarkerPopup";
import { GeocodingControl } from "@maptiler/geocoding-control/react";
import { createMapLibreGlMapController } from "@maptiler/geocoding-control/maplibregl-controller";
import "@maptiler/geocoding-control/style.css";

const MapComponent = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [mapController, setMapController] = useState();
  const center = { lng: 19.70638, lat: 52.54682 };
  const zoom = 6;
  maptilersdk.config.apiKey = MAPS_API_KEY;

  useEffect(() => {
    if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.BASIC.LIGHT,
      center: [center.lng, center.lat],
      zoom: zoom,
      navigationControl: false,
      geolocateControl: false,
    });

    const popupContainer = document.createElement("div");
    const root = createRoot(popupContainer);
    root.render(
      <MarkerPopup
        imageUrl={"https://via.placeholder.com/300x200"}
        name={"Test"}
        description={"Test description"}
      />
    );

    new maptilersdk.Marker({ color: "#FF0000" })
      .setLngLat([center.lng, center.lat])
      .setPopup(
        new maptilersdk.Popup({
          offset: 25,
          anchor: "bottom",
          focusAfterOpen: false,
        })
          .setDOMContent(popupContainer)
          .setMaxWidth("300px")
      )
      .addTo(map.current);

    setMapController(createMapLibreGlMapController(map.current, maptilersdk));
  }, [center.lng, center.lat, zoom]);

  return (
    <div className={styles.mapWrap}>
      <div className={styles.geocoding}>
        {mapController && (
          <GeocodingControl
            apiKey={maptilersdk.config.apiKey}
            mapController={mapController}
          />
        )}
      </div>
      <div ref={mapContainer} className={styles.map} />
    </div>
  );
};

export default MapComponent;
