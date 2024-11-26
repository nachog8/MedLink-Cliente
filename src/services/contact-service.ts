import api from '@/config/axios';
import axios from 'axios';

export const contactService = {
  async contactMessage(data: {
    firstName: string;
    lastName: string;
    email: string;
    comment: string;
    phone: string;
  }) {
    try {
      const response = await api.post('/contact', data);
      return response.data;
    } catch (error) {
      throw (error as Error).message;
    }
  },
};
