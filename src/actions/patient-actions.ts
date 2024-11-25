'use server';

import {
  allergieSchema,
  editProfileSchema,
  familyInheritanceSchema,
  medicationSchema,
  noPathologicalSchema,
  pathologicalSchema,
  securitySchema,
} from '@/schemas/schemas-profile';

import { convertToBoolean } from '@/lib/convert-boolean';
import { cookies } from 'next/headers';
import { patientService } from '@/services/patient-service';

//Funciones de las Cookies
export const getCookie = (name: string) => {
  const cookieStore = cookies();

  return cookieStore.get(name)?.value || '';
};

//Funciones de Service
const {
  updateAllergies,
  updateFamilyInheritance,
  updatePathological,
  updateProfilePatient,
  updateNoPathological,
  addMedicationPatient,
} = patientService;

// Funcioens de actualizacion
export async function edithProfilePatientAction(
  prevState: any,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());

  const editProfileData = Object.entries(data).reduce(
    (acc, [key, value]) => {
      if (value !== '' && value !== undefined) {
        if (key === 'avatar' && value instanceof File) {
          acc[key] = value;
        } else if (key === 'height' || key === 'weight') {
          acc[key] = Number(value) || null;
        } else if (value === 'on') {
          acc[key] = true;
        } else {
          acc[key] = value;
        }
      }
      return acc;
    },
    {} as Record<string, any>
  );

  const validatedFields = editProfileSchema.safeParse(editProfileData);

  if (!validatedFields.success) {
    const errorDetails = validatedFields.error.errors.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));

    return { error: errorDetails };
  }
  try {
    const response = await updateProfilePatient(
      validatedFields.data,
      await getCookie('token')
    );
    return {
      success: response.success,
    };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: 'An unexpected error occurred' };
  }
}

export async function updatePasswordPatientAction(
  prevState: any,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());

  const updatePasswordData = {
    currentPassword: data.currentPassword,
    newPassword: data.password,
    confirmPassword: data.confirmPassword,
  };

  const validatedFields = securitySchema.safeParse(updatePasswordData);

  if (!validatedFields.success) {
    const errorDetails = validatedFields.error.errors.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));

    return { error: errorDetails };
  }
  //Mandar updatePassword
  const { confirmPassword, ...updatePassword } = validatedFields.data;
  try {
    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: 'An unexpected error occurred' };
  }
}

export async function allergiePatientAction(
  prevState: any,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());

  const allergieData = Object.keys(data).reduce(
    (acc, key) => {
      if (key.endsWith('Details')) {
        const mainField = key.replace('Details', '');
        acc[key] = data[mainField] === 'false' ? '' : data[key];
      } else {
        acc[key] = data[key];
      }
      return acc;
    },
    {} as Record<string, any>
  );

  const validatedFields = allergieSchema.safeParse(allergieData);

  if (!validatedFields.success) {
    const errorDetails = validatedFields.error.errors.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));
    return { error: errorDetails };
  }
  const finalData = {
    ...validatedFields.data,
    foodAllergy: convertToBoolean(validatedFields.data.foodAllergy),
    insectAllergy: convertToBoolean(validatedFields.data.insectAllergy),
    medicineAllergy: convertToBoolean(validatedFields.data.medicineAllergy),
    otherAllergies: convertToBoolean(validatedFields.data.otherAllergies),
  };

  try {
    const response = await updateAllergies(finalData, await getCookie('token'));
    return {
      success: response.success,
    };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: 'An unexpected error occurred' };
  }
}

export async function pathologicalPatientAction(
  prevState: any,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());

  const pathologicalData = Object.keys(data).reduce(
    (acc, key) => {
      if (key.endsWith('Details')) {
        const mainField = key.replace('Details', '');
        acc[key] = data[mainField] === 'false' ? '' : data[key];
      } else {
        acc[key] = data[key];
      }
      return acc;
    },
    {} as Record<string, any>
  );

  const validatedFields = pathologicalSchema.safeParse(pathologicalData);

  if (!validatedFields.success) {
    const errorDetails = validatedFields.error.errors.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));

    return { error: errorDetails };
  }
  const finalData = {
    ...validatedFields.data,
    hospitalization: convertToBoolean(validatedFields.data.hospitalization),
    diabetes: convertToBoolean(validatedFields.data.diabetes),
    thyroidDiseases: convertToBoolean(validatedFields.data.thyroidDiseases),
    hypertension: convertToBoolean(validatedFields.data.hypertension),
    heartDiseases: convertToBoolean(validatedFields.data.heartDiseases),
    trauma: convertToBoolean(validatedFields.data.trauma),
    cancer: convertToBoolean(validatedFields.data.cancer),
    tuberculosis: convertToBoolean(validatedFields.data.tuberculosis),
    transfusions: convertToBoolean(validatedFields.data.transfusions),
    respiratoryDiseases: convertToBoolean(
      validatedFields.data.respiratoryDiseases
    ),
    gastrointestinalDiseases: convertToBoolean(
      validatedFields.data.gastrointestinalDiseases
    ),
    sexuallyTransmittedDiseases: convertToBoolean(
      validatedFields.data.sexuallyTransmittedDiseases
    ),
    chronicKidneyDisease: convertToBoolean(
      validatedFields.data.chronicKidneyDisease
    ),
    other: convertToBoolean(validatedFields.data.other),
  };

  try {
    const response = await updatePathological(
      finalData,
      await getCookie('token')
    );
    return {
      success: response.success,
    };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: 'An unexpected error occurred' };
  }
}

export async function noPathologicalPatientAction(
  prevState: any,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());

  const noPathologicalData = Object.keys(data).reduce(
    (acc, key) => {
      if (key.endsWith('Details')) {
        const mainField = key.replace('Details', '');
        acc[key] = data[mainField] === 'false' ? '' : data[key];
      } else {
        acc[key] = data[key];
      }
      return acc;
    },
    {} as Record<string, any>
  );

  const validatedFields = noPathologicalSchema.safeParse(noPathologicalData);

  if (!validatedFields.success) {
    const errorDetails = validatedFields.error.errors.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));

    return { error: errorDetails };
  }
  const finalData = {
    ...validatedFields.data,
    physicalActivity: convertToBoolean(validatedFields.data.physicalActivity),
    smoking: convertToBoolean(validatedFields.data.smoking),
    alcoholism: convertToBoolean(validatedFields.data.alcoholism),
    otherSubstances: convertToBoolean(validatedFields.data.otherSubstances),
    recentVaccination: convertToBoolean(validatedFields.data.recentVaccination),
    other: convertToBoolean(validatedFields.data.other),
  };

  try {
    const response = await updateNoPathological(
      finalData,
      await getCookie('token')
    );
    return {
      success: response.success,
    };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: 'An unexpected error occurred' };
  }
}

export async function familyInheritancePatientAction(
  prevState: any,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());

  const familyInheritanceData = Object.keys(data).reduce(
    (acc, key) => {
      if (key.endsWith('Details')) {
        const mainField = key.replace('Details', '');
        acc[key] = data[mainField] === 'false' ? '' : data[key];
      } else {
        acc[key] = data[key];
      }
      return acc;
    },
    {} as Record<string, any>
  );

  const validatedFields = familyInheritanceSchema.safeParse(
    familyInheritanceData
  );

  if (!validatedFields.success) {
    const errorDetails = validatedFields.error.errors.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));

    return { error: errorDetails };
  }

  const finalData = {
    ...validatedFields.data,
    diabetes: convertToBoolean(validatedFields.data.diabetes),
    heartDiseases: convertToBoolean(validatedFields.data.heartDiseases),
    hypertension: convertToBoolean(validatedFields.data.hypertension),
    thyroidDiseases: convertToBoolean(validatedFields.data.thyroidDiseases),
    chronicKidneyDisease: convertToBoolean(
      validatedFields.data.chronicKidneyDisease
    ),
    other: convertToBoolean(validatedFields.data.other),
  };

  try {
    const response = await updateFamilyInheritance(
      finalData,
      await getCookie('token')
    );
    return {
      success: response.success,
    };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: 'An unexpected error occurred' };
  }
}

export async function addMedicationPatientAction(
  prevState: any,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());

  const medicationData = {
    medication: data.medication,
    dosage: data.dosage,
    frequency: data.frequency,
    startDate: data.startDate,
    endDate: data.endDate,
  };
  const validatedFields = medicationSchema.safeParse(medicationData);

  if (!validatedFields.success) {
    const errorDetails = validatedFields.error.errors.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));

    return { error: errorDetails };
  }

  try {
    const response = await addMedicationPatient(
      validatedFields.data,
      await getCookie('token')
    );
    return {
      success: response.success,
    };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: 'An unexpected error occurred' };
  }
}
