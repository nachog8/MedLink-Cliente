type TranslationMap = { [key: string]: string };

interface Data {
  [key: string]: boolean | string;
}

interface TranslatedData {
  [key: string]: boolean | string;
}

export function translateData(
  data: Data,
  translationMap: TranslationMap
): TranslatedData {
  const translatedData: TranslatedData = {};

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      if (typeof data[key] === 'boolean') {
        const translatedKey = translationMap[key] || key;
        translatedData[translatedKey] = data[key];
      }

      if (typeof data[key] === 'string') {
        const baseKey = key.replace('Details', '');
        const translatedKey = translationMap[baseKey]
          ? `${translationMap[baseKey]}Details`
          : key;
        translatedData[translatedKey] = data[key];
      }
    }
  }

  return translatedData;
}

export function translateVaccinationData(
  data: Record<string, any>,
  translationMap: TranslationMap
) {
  const translatedData: Record<string, any> = {};

  for (const period in data) {
    if (data.hasOwnProperty(period)) {
      const periodTranslation = translationMap[period] || period;

      // Aquí tratamos cada propiedad del periodo
      const periodData = data[period];
      const translatedPeriodData: Record<string, any> = {};

      for (const vaccine in periodData) {
        if (periodData.hasOwnProperty(vaccine)) {
          const translatedVaccine = translationMap[vaccine] || vaccine;
          translatedPeriodData[translatedVaccine] = periodData[vaccine];
        }
      }

      translatedData[periodTranslation] = translatedPeriodData;
    }
  }

  return translatedData;
}
