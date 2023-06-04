import axios from 'axios';

const getCoordinates = (address, onSuccess, onError) => {
  axios
    .get('https://nominatim.openstreetmap.org/search', {
      params: {
        q: address,
        format: 'json',
        addressdetails: 1,  // Solicitar detalles adicionales de la dirección
        namedetails: 1,    // Solicitar detalles adicionales del nombre
        extratags: 1,      // Solicitar etiquetas adicionales
        limit: 1,          // Limitar a 1 resultado
      },
    })
    .then((response) => {
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        onSuccess(lat, lon);
      } else {
        onError('No se encontraron resultados');
      }
    })
    .catch((error) => {
      onError('Error al obtener los datos de geocodificación: ' + error);
    });
};

export default getCoordinates;
