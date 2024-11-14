export interface Register {
  email: string;
  password: string;
}

export interface RegisterProfessional extends Register {
  specialty: string;
  registrationNumber: string;
}
