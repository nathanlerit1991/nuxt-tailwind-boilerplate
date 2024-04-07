import axios from 'axios';
const API_PREFIX = "/api/restaurants?populate=deep";
const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});


export default {
  /**
   * @returns {Promise<Promise<http.AxiosResponse<any>>|null>}
  */
  async getData() {
    const url = `${API_PREFIX}`;

    const response = await http.get(url);
    return response ?? null;
  }
};
