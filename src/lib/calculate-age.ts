/**
 * Calcula la edad basada en la fecha de nacimiento proporcionada.
 * @param {string | undefined} birthDate - La fecha de nacimiento en formato válido.
 * @returns {string | number} La edad calculada o "-" si la fecha no es válida.
 */
export function calculateAge(birthDate: string | undefined): string | number {
  if (!birthDate) {
    return '-';
  }

  const birth = new Date(birthDate);

  if (isNaN(birth.getTime())) {
    return '-';
  }

  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDifference = today.getMonth() - birth.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birth.getDate())
  ) {
    age--;
  }

  return age;
}
