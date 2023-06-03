import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = ({ address }) => {
  const defaultPosition = [0, 0]; // Posición predeterminada para el mapa

  const handleGeocodeResult = (results) => {
    if (results && results.length > 0) {
      const location = results[0].latlon;
      mapRef.current.setView(location, 8); // Establece la vista del mapa a la ubicación encontrada
    }
  };

  const handleGeocodeError = (error) => {
    console.error('Error al geocodificar la dirección:', error);
  };

  const geocodeAddress = () => {
    // Realiza aquí la llamada a la API de geocodificación para obtener las coordenadas de la dirección
    // Puedes utilizar una biblioteca como Nominatim.js para realizar la geocodificación
    // Aquí, por simplicidad, simplemente estableceremos la posición predeterminada
    handleGeocodeResult([{ latlon: defaultPosition }]);
  };

  return (
    <MapContainer center={defaultPosition} zoom={8} style={{ width: '100%', height: '400px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={defaultPosition}>
        <Popup>{address}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
