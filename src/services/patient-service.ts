import api from '@/config/axios';
import axios from 'axios';

export const patientService = {
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
};
