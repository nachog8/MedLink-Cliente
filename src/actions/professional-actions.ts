"use server"

import { locationProfessionalSchema, personalInfoSchema, seguritySchema } from "@/schemas/professionalSchema";

export async function personalInfoProfessionalAction(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const personalInfoData = {
    first_name: data.first_name,
  last_name: data.last_name,
  avatar: data.avatar,
  about_me: data.about_me,
  genre: data.genre,
  location: data.location,
  phone: data.phone,
  email: data.email,
  skills: data.skills,
  };

  const validatedFields = personalInfoSchema.safeParse(personalInfoData);

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

export async function locationsProfessionalAction(prevState: any, formData: FormData) {
 
  const data = Object.fromEntries(formData.entries());


  const locationsData = {
    locations: []
  };

  
  Object.keys(data).forEach((key) => {
    const match = key.match(/^locations\.(\d+)\.(\w+)$/);
    if (match) {
      const index = parseInt(match[1], 10); 
      const field = match[2]; 

    
      if (!locationsData.locations[index]) {
        locationsData.locations[index] = {};
      }

     
      locationsData.locations[index][field] = data[key];
    }
  });

 
  

  const validatedFields = locationProfessionalSchema.safeParse(locationsData);

  
  if (!validatedFields.success) {
    const errorDetails = validatedFields.error.errors.map((err) => ({
      field: err.path.join('.'),  
      message: err.message,
    }));
    return { error: errorDetails };
  }
  

  try {

    return {
      data: validatedFields.data,
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: 'An unexpected error occurred' };
  }
}

export async function segurityProfessionalAction(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const segurityData = {
     currentPassword: data.currentPassword,
    newPassword: data.newPassword,
    confirmPassword: data.confirmPassword,
  };

  const validatedFields = seguritySchema.safeParse(segurityData);

  if (!validatedFields.success) {
    const errorDetails = validatedFields.error.errors.map((err) => ({
      field: err.path[0],
      message: err.message,
    }));
    return { error: errorDetails };
  }
 const { confirmPassword, ...newPassword } = validatedFields.data;
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