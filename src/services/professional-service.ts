import { UserDoctor } from '@/interfaces/auth';
import api from '@/config/axios';
import axios from 'axios';

export const professionalService = {
  async getPatient(patientId: string, token: string) {
    try {
      const response = await api.get(`/patient/${patientId}`, {
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

  async updateProfileProfessional(data: any, token: string) {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      const value = data[key];
      if (value instanceof File || typeof value !== 'object') {
        formData.append(key, value);
      } else if (typeof value === 'object') {
        formData.append(key, JSON.stringify(value));
      }
    });

    try {
      const response = await api.put(`/doctor`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
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
  async sendEmailPatientProfessional(data: any, token: string) {
    try {
      const response = await api.post(`/doctor/request-access`, data, {
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
};
