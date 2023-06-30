import axios, { AxiosError } from 'axios';
import { BASE_URL } from '@app/config/config';

const axiosInstance = axios.create({ baseURL: BASE_URL });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const err = error?.response?.data || {
      message: 'Something went wrong',
      statusCode: 500
    };
    Promise.reject(err);
  }
);

export default axiosInstance;
