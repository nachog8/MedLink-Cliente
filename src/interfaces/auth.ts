export interface Register {
  email: string;
  password: string;
}

export interface RegisterProfessional extends Register {
  specialty: string;
  registrationNumber: string;
}
export enum BloodPressureTrend {
  NORMAL = 'NORMAL',
  RISING = 'RISING',
  FALLING = 'FALLING',
}
export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}
export interface ClinicalData {
  height: number;
  weight: number;
  bloodType: string;
  bloodPressureTrend: BloodPressureTrend;
  isDonor: boolean;
  hasAllergies: boolean;
  hasChronicDiseases: boolean;
  hasHealthyLifestyle: boolean;
}
export interface UserPatient {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: Gender;
  aboutMe: string;
  email: string;
  avatar: string;
  phone: string;
  location: string;
  clinicalData: ClinicalData;
}
