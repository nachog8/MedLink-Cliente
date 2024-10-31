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
