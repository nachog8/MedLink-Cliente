import {
  AllergieFormType,
  FamilyInheritanceFormType,
  NoPathologicalFormType,
  PathologicalFormType,
} from '@/schemas/schemas-patient';

export interface Register {
  email: string;
  password: string;
}
export type Document = {
  url: string;
  name: string;
  type: 'pdf' | 'image' | 'other';
  date: string;
};
interface Medication {
  medication: string;
  dosage: string;
  frequency: string;
  startDate: Date;
  endDate: Date;
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
export interface Location {
  _id: string;
  name: string;
  address: string;
  openingHours: string;
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
  avatar: File;
  phone: string;
  location: string;
  role: Role;
}
export interface UserPatient extends User {
  dateOfBirth: string;
  clinicalData: ClinicalData;
  documents: Document[];
  medications: Medication[];
  allergiesData: AllergieFormType;
  pathologicalData: PathologicalFormType;
  familyInheritance: FamilyInheritanceFormType;
  nonPathologicalData: NoPathologicalFormType;
}

export interface UserDoctor extends User {
  licenseNumber: number;
  specialization: Specialties;
  clinic: Location[];
  patients: UserPatient[];
}
