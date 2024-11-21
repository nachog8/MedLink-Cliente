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
  async updateAllergies(data: any, token: string) {
    try {
      const response = await api.put(`/allergie`, data, {
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
  async updateFamilyInheritance(data: any, token: string) {
    try {
      const response = await api.put(`/family-inheritance`, data, {
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
  async updatePathological(data: any, token: string) {
    try {
      const response = await api.put(`/pathological-data`, data, {
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
  async updateNoPathological(data: any, token: string) {
    try {
      const response = await api.put(`/non-pathological-data`, data, {
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
  async updateProfilePatient(data: any, token: string) {
    try {
      const response = await api.put(`/patient`, data, {
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

  // async updateVaccinationSchedulePatient(data: any, token: string) {
  //   try {
  //     const response = await api.put(`/vaccination-shedule`, data, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     return response.data;
  //   } catch (error) {
  //     if (axios.isAxiosError(error)) {
  //       throw new Error(`Axios error: ${error.message}`);
  //     } else if (error instanceof Error) {
  //       throw new Error(`Error: ${error.message}`);
  //     } else {
  //       throw new Error('Unknown error occurred');
  //     }
  //   }
  // },
};
