import { Register, RegisterProfessional } from '@/interfaces/auth.js';

import api from '../config/axios.js';

export const authService = {
  async login(email: string, password: string) {
    try {
      const response = await api.post('/auth/login', { email, password });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
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

  async logout() {
    try {
      await api.post('/auth/logout');
      localStorage.removeItem('token');
    } catch (error) {
      throw (error as Error).message;
    }
  },

  //   async forgotPassword(email) {
  //     try {
  //       const response = await api.post('/auth/forgot-password', { email });
  //       return response.data;
  //     } catch (error) {
  //         throw (error as Error).message;
  //     }
  //   },

  //   async resetPassword(token, newPassword) {
  //     try {
  //       const response = await api.post('/auth/reset-password', {
  //         token,
  //         newPassword
  //       });
  //       return response.data;
  //     } catch (error) {
  //         throw (error as Error).message;
  //     }
  //   },

  //   async verifyEmail(token) {
  //     try {
  //       const response = await api.post('/auth/verify-email', { token });
  //       return response.data;
  //     } catch (error) {
  //         throw (error as Error).message;
  //     }
  //   },

  //   async refreshToken() {
  //     try {
  //       const response = await api.post('/auth/refresh-token');
  //       if (response.data.token) {
  //         localStorage.setItem('token', response.data.token);
  //       }
  //       return response.data;
  //     } catch (error) {
  //         throw (error as Error).message;
  //     }
  //   }
};
