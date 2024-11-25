import { Register, RegisterProfessional } from '@/interfaces/auth';

import api from '@/config/axios';
import axios from 'axios';

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

  async getUserData(userRole: string, userId: string, token?: string) {
    try {
      const response = await api.get(`/${userRole}/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Axios error: ${error.message}`);
      } else if (error instanceof Error) {
        throw new Error(`Error: ${error.message}`);
      } else {
        throw new Error('Unknown error occurred');
      }
    }
  },

  async changeUserPassword(token: string, password: { password: string }) {
    try {
      const response = await api.post(`/auth/update-password`, password, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw (error as Error).message;
    }
  },
};
