/**
 * Formatea una fecha en un formato legible.
 * @param {string | Date | undefined} date - La fecha a formatear (cadena, instancia de Date o undefined).
 * @param {string} locale - Idioma para formatear la fecha (por defecto: 'es-ES').
 * @param {Intl.DateTimeFormatOptions} options - Opciones para personalizar el formato de la fecha.
 * @returns {string} Fecha formateada como cadena o "-" si el valor es inválido.
 */
export const formatDate = (
  date: string | Date | undefined,
  locale: string = 'es-ES',
  options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' }
): string => {
  
  if (!date) {
    return '-';
  }

  const parsedDate = typeof date === 'string' ? new Date(date) : date;

  if (isNaN(parsedDate.getTime())) {
    return '-';
  }

  return new Intl.DateTimeFormat(locale, options).format(parsedDate);
};
