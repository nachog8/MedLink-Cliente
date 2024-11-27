'use server';

import {
  forgotPasswordSchema,
  loginSchema,
  patientSchema,
  professionalSchema,
  resetPasswordSchema,
} from '@/schemas/schemas-auth';

import { AxiosError } from 'axios';
import { authService } from '@/services/auth-service';
import { cookies } from 'next/headers';

const { register, login, forgotPassword, resetPassword, changeUserPassword } =
  authService;
export const getCookie = (name: string) => {
  const cookieStore = cookies();

  return cookieStore.get(name)?.value || '';
};
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
    const resp = await login(validatedFields.data);
    return {
      ...resp,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return { error: error.response?.data || error.message };
    } else if (error instanceof Error) {
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
    if (error instanceof AxiosError) {
      return { error: error.response?.data || error.message };
    } else if (error instanceof Error) {
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
    specialization: data.specialization,
    email: data.email,
    password: data.password,
    confirmPassword: data.confirmPassword,
    licenseNumber: data.licenseNumber,
  };

  const validatedFields = professionalSchema.safeParse(professionalData);

  if (!validatedFields.success) {
    const errorDetails = validatedFields.error.errors.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));

    return { error: errorDetails };
  }

  const { confirmPassword, ...newProfessional } = {
    ...validatedFields.data,
    licenseNumber: Number(validatedFields.data.licenseNumber),
  };

  try {
    const resp = await register(newProfessional);
    return {
      data: resp,
      success: true,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return { error: error.response?.data || error.message };
    } else if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: 'An unexpected error occurred' };
  }
}

export async function forgotPasswordAction(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const forgotPasswordData = {
    email: data.email,
  };

  const validatedFields = forgotPasswordSchema.safeParse(forgotPasswordData);

  if (!validatedFields.success) {
    const errorDetails = validatedFields.error.errors.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));
    return { error: errorDetails };
  }

  try {
    const resp = await forgotPassword(validatedFields.data);
    return {
      success: resp.success,
      payload: {
        message: resp.payload.message,
      },
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return { error: error.response?.data || error.message };
    } else if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: 'An unexpected error occurred' };
  }
}

export async function resetPasswordAction(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  const token = data.token as string;

  const resetPasswordData = {
    password: data.password,
    confirmPassword: data.confirmPassword,
  };

  const validatedFields = resetPasswordSchema.safeParse(resetPasswordData);

  if (!validatedFields.success) {
    const errorDetails = validatedFields.error.errors.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));
    return { error: errorDetails };
  }
  const { confirmPassword, ...password } = validatedFields.data;

  try {
    const response = await resetPassword(token, password);
    return {
      success: response.success,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return { error: error.response?.data || error.message };
    } else if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: 'An unexpected error occurred' };
  }
}

export async function changePasswordUserAction(
  prevState: any,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());

  const resetPasswordData = {
    password: data.newPassword,
    confirmPassword: data.confirmPassword,
  };

  const validatedFields = resetPasswordSchema.safeParse(resetPasswordData);

  if (!validatedFields.success) {
    const errorDetails = validatedFields.error.errors.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));
    return { error: errorDetails };
  }
  const { confirmPassword, ...password } = validatedFields.data;

  try {
    const response = await changeUserPassword(
      await getCookie('token'),
      password
    );
    return {
      success: response.success,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return { error: error.response?.data || error.message };
    } else if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: 'An unexpected error occurred' };
  }
}
