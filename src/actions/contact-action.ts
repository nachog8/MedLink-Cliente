'use server';

import { AxiosError } from 'axios';
import { contactSchema } from '@/schemas';
import { contactService } from '@/services/contact-service';

const { contactMessage } = contactService;

export async function contactAction(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const contactData = {
    firstName: data.firstName,
    lastName: data.lastName,
    phone: data.phone,
    email: data.email,
    comment: data.comment,
    password: data.password,
  };

  const validatedFields = contactSchema.safeParse(contactData);

  if (!validatedFields.success) {
    const errorDetails = validatedFields.error.errors.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));
    return { error: errorDetails };
  }

  try {
    const resp = await contactMessage(validatedFields.data);

    return {
      success: resp.success,
    };
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError) {
      return { error: error.response?.data || error.message };
    } else if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: 'Ocurrió un error inesperado' };
  }
}
