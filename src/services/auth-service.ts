import { Register, RegisterProfessional } from '@/interfaces/auth';

import api from '@/config/axios';

export const authService = {
  async login(data: { email: string; password: string }) {
    try {
      const response = await api.post('/auth/login', data);

      return response.data;
    } catch (error) {
      throw (error as Error).message;
    }
  },

  async register(userData: RegisterProfessional | Register) {
    try {
      const response = await api.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      throw (error as Error).message;
    }
  },

  async forgotPassword(data: { email: string }) {
    try {
      const response = await api.post('/auth/forgot-password', data);
      return response.data;
    } catch (error) {
      throw (error as Error).message;
    }
  },

  async resetPassword(token: string, password: { password: string }) {
    try {
      const response = await api.post(
        `/auth/reset-password/${token}`,
        password
      );
      return response.data;
    } catch (error) {
      throw (error as Error).message;
    }
  },
};
