'use server';

import {
  locationProfessionalSchema,
  personalInfoSchema,
} from '@/schemas/professionalSchema';

import { cookies } from 'next/headers';
import { professionalService } from '@/services/professional-service';

const { updateProfileProfessional } = professionalService;
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

  const locationsData = {
    locations: [],
  };
  console.log(data);
  return;
  // Object.keys(data).forEach((key) => {
  //   const match = key.match(/^locations\.(\d+)\.(\w+)$/);
  //   if (match) {
  //     const index = parseInt(match[1], 10);
  //     const field = match[2];

  //     if (!locationsData.locations[index]) {
  //       locationsData.locations[index] = {};
  //     }

  //     locationsData.locations[index][field] = data[key];
  //   }
  // });

  const validatedFields = locationProfessionalSchema.safeParse(locationsData);

  if (!validatedFields.success) {
    const errorDetails = validatedFields.error.errors.map((err) => ({
      field: err.path.join('.'),
      message: err.message,
    }));
    return { error: errorDetails };
  }

  try {
    const response = await updateProfileProfessional(
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

// export async function segurityProfessionalAction(
//   prevState: any,
//   formData: FormData
// ) {
//   const data = Object.fromEntries(formData.entries());
//   const segurityData = {
//     currentPassword: data.currentPassword,
//     newPassword: data.newPassword,
//     confirmPassword: data.confirmPassword,
//   };

//   const validatedFields = seguritySchema.safeParse(segurityData);

//   if (!validatedFields.success) {
//     const errorDetails = validatedFields.error.errors.map((err) => ({
//       field: err.path[0],
//       message: err.message,
//     }));
//     return { error: errorDetails };
//   }
//   const { confirmPassword, ...newPassword } = validatedFields.data;
//   try {
//     return {
//       success: true,
//     };
//   } catch (error) {
//     if (error instanceof Error) {
//       return { error: error.message };
//     }
//     return { error: 'An unexpected error occurred' };
//   }
// }
