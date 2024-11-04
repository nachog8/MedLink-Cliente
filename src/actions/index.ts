'use server';

import { loginSchema, patientSchema, professionalSchema } from '@/schemas';

import { authService } from '@/services/auth-service';

const { register } = authService;

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
    const resp = await register(newPatient);
    return {
      data: resp,
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
    const resp = await register(newProfessional);
    return {
      data: resp,
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: 'An unexpected error occurred' };
  }
}
