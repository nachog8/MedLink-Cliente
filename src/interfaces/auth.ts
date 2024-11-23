export interface Register {
  email: string;
  password: string;
}

export interface RegisterProfessional extends Register {
  specialty: string;
  registrationNumber: string;
}

export enum Role {
  PATIENT = 'Patient',
  DOCTOR = 'Doctor',
}
export enum Specialties {
  CARDIOLOGY = 'Cardiology',
  PEDIATRICS = 'Pediatrics',
  DERMATOLOGY = 'Dermatology',
  GYNECOLOGY = 'Gynecology',
  NEUROLOGY = 'Neurology',
  ONCOLOGY = 'Oncology',
  TRAUMATOLOGY = 'Traumatology',
  OPHTHALMOLOGY = 'Ophthalmology',
  PSYCHIATRY = 'Psychiatry',
  ENDOCRINOLOGY = 'Endocrinology',
  INFECTIOLOGY = 'Infectiology',
  INTERNAL_MEDICINE = 'Internal Medicine',
  RHEUMATOLOGY = 'Rheumatology',
  UROLOGY = 'Urology',
  OTORHINOLARYNGOLOGY = 'Otorhinolaryngology',
  GASTROENTEROLOGY = 'Gastroenterology',
  GENERAL_SURGERY = 'General Surgery',
  PULMONOLOGY = 'Pulmonology',
  NUTRITION = 'Nutrition',
  FAMILY_MEDICINE = 'Family Medicine',
  OTHERS = 'Others',
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

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  gender: Genders;
  aboutMe: string;
  email: string;
  avatar: string;
  phone: string;
  location: string;
  role: Role;
}
export interface UserPatient extends User {
  dateOfBirth: string;
  clinicalData: ClinicalData;
}

export interface UserDoctor extends User {
  licenseNumber: number;
  specialization: Specialties;
  clinical: string[];
  patients: string[];
}
