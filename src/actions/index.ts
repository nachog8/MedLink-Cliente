'use server';

import { loginSchema, patientSchema, professionalSchema } from '@/schemas';

export async function loginAction(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const loginData = {
    email: data.email,
    password: data.password,
  };

  const validatedFields = loginSchema.safeParse(loginData);

  if (!validatedFields.success) {
    const errorDetails = validatedFields.error.errors.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));
    return { error: errorDetails };
  }

  try {
    // Aca se ejecuta la funcion de services del llamado api
    // const user = await loginFromApi(validateFields)
    return {
      success: true,
      // user
    };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: 'An unexpected error occurred' };
  }
}
export async function registerPatientAction(
  prevState: any,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());

  const patientData = {
    email: data.email,
    password: data.password,
    confirmPassword: data.confirmPassword,
  };

  const validatedFields = patientSchema.safeParse(patientData);

  if (!validatedFields.success) {
    const errorDetails = validatedFields.error.errors.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));
    return { error: errorDetails };
  }

  const { confirmPassword, ...newPatient } = validatedFields.data;

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
export async function registerProfessionalAction(
  prevState: any,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());

  const professionalData = {
    specialty: data.specialty,
    email: data.email,
    password: data.password,
    confirmPassword: data.confirmPassword,
    registrationNumber: data.registrationNumber,
  };

  const validatedFields = professionalSchema.safeParse(professionalData);

  if (!validatedFields.success) {
    const errorDetails = validatedFields.error.errors.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));

    return { error: errorDetails };
  }

  const { confirmPassword, ...newProfessional } = validatedFields.data;

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

export async function edithProfilePatientAction(
  prevState: any,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());

  const editProfileData = {
    name: data.name,
    last_name: data.last_name,
    birth_date: data.birth_date,
    genre: data.genre,
    about_me: data.about_me,
    phone: data.phone,
    email: data.email,
    province: data.province,
    city: data.city,
    avatar_image: data.avatar_image,
    banner_image: data.banner_image,
    height: data.height,
    weight: data.weight,
    bloodType: data.bloodType,
    bloodPressure: data.bloodPressure,
    isDonor: data.isDonor,
    hasAllergies: data.hasAllergies,
    hasChronicDiseases: data.hasChronicDiseases,
    hasHealthyLifestyle: data.hasHealthyLifestyle,
  };

  const validatedFields = professionalSchema.safeParse(editProfileData);

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
