export interface Register {
  email: string;
  password: string;
}

export interface RegisterProfessional extends Register {
  specialty: string;
  registrationNumber: string;
}

export enum BloodTypes {
  A_POSITIVE = 'A+',
  A_NEGATIVE = 'A-',
  B_POSITIVE = 'B+',
  B_NEGATIVE = 'B-',
  AB_POSITIVE = 'AB+',
  AB_NEGATIVE = 'AB-',
  O_POSITIVE = 'O+',
  O_NEGATIVE = 'O-',
}

export enum Genders {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

export enum BloodPressureTrend {
  NORMAL = 'NORMAL',
  RISING = 'RISING',
  FALLING = 'FALLING',
}

export interface ClinicalData {
  height: number;
  weight: number;
  bloodType: BloodTypes;
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
  gender: Genders;
  aboutMe: string;
  email: string;
  avatar: string;
  phone: string;
  location: string;
  clinicalData: ClinicalData;
}
