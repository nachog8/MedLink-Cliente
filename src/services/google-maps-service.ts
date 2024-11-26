import axios from 'axios';

export const geocodeAddress = async (address: string) => {
  const apiKey = 'AIzaSyB6-RHobnGewae_E3Fqn1OB77yAXUM2sYE';
  // TODO: La API actualmente me esta devolviendo un error de APIKEY? No se porque ocurre esto
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);

    if (response.data.status === 'OK') {
      const { lat, lng } = response.data.results[0].geometry.location;
      return { lat, lng };
    } else {
      throw new Error(`Error de geocodificación: ${response.data.status}`);
    }
  } catch (error) {
    console.error('Error en la petición de geocodificación:', error);
    throw error;
  }
};
