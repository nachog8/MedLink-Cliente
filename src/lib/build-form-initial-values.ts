export const buildFormInitialValues = <T>(
  config: { name: keyof T; label?: string }[],
  initialValues?: Partial<T>
): Partial<T> => {
  const defaultValues: Partial<T> = {};

  config.forEach(({ name }) => {
    defaultValues[name] = initialValues?.[name] || (undefined as T[keyof T]);
    defaultValues[`${String(name)}Details` as keyof T] = (initialValues?.[
      `${String(name)}Details` as keyof T
    ] || '') as T[keyof T];
  });

  return defaultValues;
};
