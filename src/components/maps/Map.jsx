import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../maps/maps.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-icon.png";
import { useEffect, useState } from "react";
import axios from "axios";
import getCoordinates from "./geocodingUtils";
let iconUbication = new L.icon({
  iconUrl: icon,
  iconShadow: iconShadow,
  iconSize: [20, 30],
  shadowAnchor: [22, 94],
  popupAnchor: [-3, -33],
});
const Map = ({ direccion }) => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [error, setError] = useState("");
  const [coordinatesLoaded, setCoordinatesLoaded] = useState(false);

  // useEffect(() => {
  //   getCoordinates(
  //     direccion,
  //     (lat, lon) => {
  //       setLatitude(parseFloat(lat));
  //       setLongitude(parseFloat(lon));
  //       setError("");
  //       setCoordinatesLoaded(true);
  //     },
  //     (errorMessage) => {
  //       setError(errorMessage);
  //       setCoordinatesLoaded(true);
  //     }
  //   );
  // }, [direccion]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "ad243e5fe08244809994acf7af2f793b"; // Reemplaza esto con tu clave de API de OpenCage Geocoder

        const encodedAddress = encodeURIComponent(direccion);
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodedAddress}&key=${apiKey}`;

        const response = await axios.get(url);

        if (response.data.results.length > 0) {
          console.log(response);
          const { lat, lng } = response.data.results[0].geometry;
          setLatitude(lat);
          setLongitude(lng);
          setError("");
          setCoordinatesLoaded(true);
        } else {
          setError("No se encontraron coordenadas para la dirección proporcionada.");
        }
      } catch (error) {
        // alert('jaja')
        setError("Se produjo un error al obtener las coordenadas.");
      }
    };

    fetchData();
  }, [direccion]);

  return (
    <div>
      {coordinatesLoaded ? (
      <MapContainer
        className="mapa"
        center={[latitude, longitude]}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[latitude, longitude]}
          icon={iconUbication}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      ):(
        <p>Cargando coordenadas...</p>
      )}
    
    </div>
  );
};

export default Map;
