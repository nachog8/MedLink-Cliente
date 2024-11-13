'use server';

import {
  allergieSchema,
  editProfileSchema,
  familyInheritanceSchema,
  noPathologicalSchema,
  pathologicalSchema,
  securitySchema,
  vaccinationSchema,
} from '@/schemas/schemas-profile';

export async function edithProfilePatientAction(
  prevState: any,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());

  const editProfileData = {
    firstName: data.firstName,
    lastName: data.lastName,
    birthDate: new Date(data.birthDate),
    genre: data.genre,
    aboutMe: data.aboutMe,
    phone: data.phone,
    email: data.email,
    location: data.location,
    avatar: data.avatar,
    height: data.height,
    weight: data.weight,
    bloodType: data.bloodType,
    bloodPressure: data.bloodPressure,
    isDonor: data.isDonor === "true",
    hasAllergies: data.hasAllergies === "true",
    hasChronicDiseases: data.hasChronicDiseases === "true",
    hasHealthyLifestyle: data.hasHealthyLifestyle === "true"
  };

  const validatedFields = editProfileSchema.safeParse(editProfileData);

  if (!validatedFields.success) {
    const errorDetails = validatedFields.error.errors.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));

    return { error: errorDetails };
  }

    const formattedData = {
    ...validatedFields.data,
    birthDate: validatedFields.data.birthDate
      ? validatedFields.data.birthDate.toISOString().split("T")[0]
      : undefined,
  };

console.log(formattedData);
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
  console.log('aqui muestro data ni bien entra', data);
  const allergieData = {
    foodAllergy: data.foodAllergy,
    foodAllergyDetails: data.foodAllergyDetails,
    insectAllergy: data.insectAllergy,
    insectAllergyDetails: data.insectAllergyDetails,
    medicineAllergy: data.mediceAllergy,
    medicineAllergyDetails: data.medicineAllergyDetails,
    otherAllergies: data.otherAllergies,
    otherAllergiesDetails: data.otherAllergiesDetails,
  };

  const validatedFields = allergieSchema.safeParse(allergieData);

  if (!validatedFields.success) {
    const errorDetails = validatedFields.error.errors.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));

    return { error: errorDetails };
  }
  console.log('datos enviados', validatedFields.data);
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

export async function pathologicalPatientAction(
  prevState: any,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());

  const pathologicalData = {
    hospitalization: data.hospitalization,
    hospitalizationDetails: data.hospitalizationDetails,
    diabetes: data.diabetes,
    diabetesDetails: data.diabetesDetails,
    thyroidDiseases: data.thyroidDiseases,
    thyroidDiseasesDetails: data.thyroidDiseasesDetails,
    hypertension: data.hypertension,
    hypertensionDetails: data.hypertensionDetails,
    heartDiseases: data.heartDiseases,
    heartDiseasesDetails: data.heartDiseasesDetails,
    trauma: data.trauma,
    traumaDetails: data.traumaDetails,
    cancer: data.cancer,
    cancerDetails: data.cancerDetails,
    tuberculosis: data.tuberculosis,
    tuberculosisDetails: data.tuberculosisDetails,
    transfusions: data.transfusions,
    transfusionsDetails: data.transfusions,
    respiratoryDiseases: data.respiratoryDiseases,
    respiratoryDiseasesDetails: data.respiratoryDiseasesDetails,
    gastrointestinalDiseases: data.gastrointestinalDiseases,
    gastrointestinalDiseasesDetails: data.gastrointestinalDiseasesDetails,
    sexuallyTransmittedDiseases: data.sexuallyTransmittedDiseases,
    sexuallyTransmittedDiseasesDetails: data.sexuallyTransmittedDiseasesDetails,
    chronicKidneyDisease: data.chronicKidneyDisease,
    chronicKidneyDiseaseDetails: data.chronicKidneyDiseaseDetails,
    other: data.other,
    otherDetails: data.otherDetails,
  };

  const validatedFields = pathologicalSchema.safeParse(pathologicalData);

  if (!validatedFields.success) {
    const errorDetails = validatedFields.error.errors.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));

    return { error: errorDetails };
  }

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

export async function noPathologicalPatientAction(
  prevState: any,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());

  const noPathologicalData = {
    physicalActivity: data.physicalActivity,
    physicalActivityDetails: data.physicalActivityDetails,
    smoking: data.smoking,
    smokingDetails: data.smokingDetails,
    alcoholism: data.alcoholism,
    alcoholismDetails: data.alcoholismDetails,
    otherSubstances: data.otherSubstances,
    otherSubstancesDetails: data.otherSubstancesDetails,
    recentVaccination: data.recentVaccination,
    recentVaccinationDetails: data.recentVaccinationDetails,
    other: data.other,
    otherDetails: data.otherDetails,
  };

  const validatedFields = noPathologicalSchema.safeParse(noPathologicalData);

  if (!validatedFields.success) {
    const errorDetails = validatedFields.error.errors.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));

    return { error: errorDetails };
  }

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

export async function familyInheritancePatientAction(
  prevState: any,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());

  const familyInheritanceData = {
    diabetes: data.diabetes,
    diabetesDetails: data.diabetesDetails,
    heartDiseases: data.heartDiseases,
    heartDiseasesDetails: data.heartDiseasesDetails,
    hypertension: data.hypertension,
    hypertensionDetails: data.hypertensionDetails,
    thyroidDiseases: data.thyroidDiseases,
    thyroidDiseasesDetails: data.thyroidDiseasesDetails,
    chronicKidneyDisease: data.chronicKidneyDisease,
    chronicKidneyDiseaseDetails: data.chronicKidneyDiseaseDetails,
    other: data.other,
    otherDetails: data.otherDetails,
  };

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

export async function vaccinationPatientAction(
  prevState: any,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());

  const vaccinationData = {
    atBirth: {
      bcg: data.bcg,
      hepatitisB1: data.hepatitisB1,
    },
    twoMonths: {
      pentavalent1: data.pentavalent1,
      hepatitisB2: data.hepatitisB2,
      rotavirus1: data.rotavirus1,
      pneumococcal1: data.pneumococcal1,
    },
    fourMonths: {
      pentavalent2: data.pentavalent2,
      rotavirus2: data.rotavirus2,
      pneumococcal2: data.pneumococcal2,
    },
    sixMonths: {
      pentavalent3: data.pentavalent3,
      hepatitisB3: data.hepatitisB3,
      rotavirus3: data.rotavirus3,
      influenza1: data.influenza1,
    },
    sevenMonths: {
      influenza2: data.influenza2,
    },
    twelveMonths: {
      srp1: data.srp1,
      pneumococcal3: data.pneumococcal3,
    },
    eighteenMonths: {
      pentavalent4: data.pentavalent4,
    },
    twoYears: {
      influenzaAnnual1: data.influenzaAnnual1,
    },
    threeYears: {
      influenzaAnnual2: data.influenzaAnnual2,
    },
    fourYears: {
      dpt: data.dpt,
      influenzaAnnual3: data.influenzaAnnual3,
    },
    fiveYears: {
      influenzaAnnual4: data.influenzaAnnual4,
      vopOpv: data.vopOpv,
    },
    elevenYears: {
      vph: data.vph,
    },
    otherVaccines: data.otherVaccines,
  };

  const validatedFields = vaccinationSchema.safeParse(vaccinationData);

  if (!validatedFields.success) {
    const errorDetails = validatedFields.error.errors.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));

    return { error: errorDetails };
  }

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
