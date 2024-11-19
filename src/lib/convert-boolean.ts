export const convertToBoolean = (value: string | undefined) => {
  if (!value) return;
  if (value === 'true') return true;
  if (value === 'false') return false;
  return value;
};
