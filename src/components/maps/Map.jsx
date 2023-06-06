import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../maps/maps.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-icon.png";
import { useEffect, useState } from "react";
import getCoordinates from "./geocodingUtils";
let iconUbication = new L.icon({
  iconUrl: icon,
  iconShadow: iconShadow,
  iconSize: [20, 30],
  shadowAnchor: [22, 94],
  popupAnchor: [-3, -33],
});
const Map = ({ direccion }) => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getCoordinates(
      direccion,
      (lat, lon) => {
        setLatitude(lat);
        setLongitude(lon);
        setError("");
      },
      (errorMessage) => {
        setError(errorMessage);
      }
    );
  }, [direccion]);

  return (
    <div>
      Map
      {/* <MapContainer className="mapa" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}> */}
      <MapContainer
        className="mapa"
        // center={[4.62814433909062, -74.06591620264918]}
        // center={[4.4849339, -74.0981671]}
        center={[latitude, longitude]}
        zoom={14}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={[51.505, -0.09]} icon={iconUbication}> */}
        <Marker
          position={[latitude, longitude]}
          icon={iconUbication}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <div>
        <p>Latitud: {latitude}</p>
        <p>Longitud: {longitude}</p>
      </div>
    </div>
  );
};

export default Map;
