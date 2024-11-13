export function translateGender(gender: string) {
  switch (gender.toUpperCase()) {
    case 'MALE':
      return 'Masculino';
    case 'FEMALE':
      return 'Femenino';
    case 'OTHER':
      return 'Otro';
    default:
      return undefined;
  }
}
