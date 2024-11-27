'use server';

import {
  locationProfessionalSchema,
  personalInfoSchema,
  sendEmailPatientSchema,
} from '@/schemas/schemas-professional';

import { cookies } from 'next/headers';
import { professionalService } from '@/services/professional-service';

const {
  updateProfileProfessional,
  sendEmailPatientProfessional,
  addLocationProfessional,
} = professionalService;
//Funciones de las Cookies
export const getCookie = (name: string) => {
  const cookieStore = cookies();

  return cookieStore.get(name)?.value || '';
};
export async function personalInfoProfessionalAction(
  prevState: any,
  formData: FormData
) {
  const infoDoctorData = Object.fromEntries(formData.entries());
  const editDoctorData = Object.entries(infoDoctorData).reduce(
    (acc, [key, value]) => {
      if (value !== '' && value !== undefined) {
        if (key === 'avatar') {
          if (
            value instanceof File &&
            value.size > 0 &&
            value.type !== 'application/octet-stream' &&
            value.name !== 'undefined'
          ) {
            acc[key] = value;
          }
        } else {
          acc[key] = value;
        }
      }
      return acc;
    },
    {} as Record<string, any>
  );

  const validatedFields = personalInfoSchema.safeParse(editDoctorData);

  if (!validatedFields.success) {
    const errorDetails = validatedFields.error.errors.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));
    return { error: errorDetails };
  }

  const sanitizedData = Object.fromEntries(
    Object.entries(validatedFields.data).filter(
      ([, value]) => value !== '' && value !== undefined
    )
  );

  try {
    const response = await updateProfileProfessional(
      sanitizedData,
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

export async function locationsProfessionalAction(
  prevState: any,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());

  const validatedFields = locationProfessionalSchema.safeParse(data);

  if (!validatedFields.success) {
    const errorDetails = validatedFields.error.errors.map((err) => ({
      field: err.path.join('.'),
      message: err.message,
    }));
    return { error: errorDetails };
  }
  const openingHours = `${data.days} ${data.hours}`;
  const { days, hours, ...restData } = data;
  const updatedData = { ...restData, openingHours };

  try {
    const response = await addLocationProfessional(
      updatedData,
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

export async function sendEmailPatientProfessionalAction(
  prevState: any,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());
  const emailPatientData = {
    email: data.email,
  };

  const validatedFields = sendEmailPatientSchema.safeParse(emailPatientData);

  if (!validatedFields.success) {
    const errorDetails = validatedFields.error.errors.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));
    return { error: errorDetails };
  }

  try {
    const response = await sendEmailPatientProfessional(
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
