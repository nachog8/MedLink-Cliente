
import axios from "axios";

export const contactService = {
  async contactMessage(data: { firstName: string, lastName:string, email: string; comment: string, phone: string}) {
    try {
      const response = await axios.post('http://localhost:3000/api/send-email', data);
      return response.data;
    } catch (error) {
      throw (error as Error).message;
    }
  },
}