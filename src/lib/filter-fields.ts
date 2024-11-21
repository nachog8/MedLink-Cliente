export function filterFields(obj: any): any {
  const result: any = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      // Verifica que value sea un objeto antes de intentar obtener sus claves
      if (value && typeof value === 'object') {
        const nested = filterFields(value);

        // Asegúrate de que el objeto no esté vacío antes de agregarlo al resultado
        if (Object.keys(nested).length > 0) {
          result[key] = nested;
        }
      } else if (value !== undefined && value !== '' && value !== null) {
        // Si no es undefined, null o cadena vacía, lo agregamos al resultado
        result[key] = value === 'on' ? true : value; // Si el valor es 'on', lo convertimos a true
      }
    }
  }

  return result;
}
