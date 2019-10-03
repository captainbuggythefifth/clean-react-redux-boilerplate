import axios, { AxiosInstance } from 'axios';
import { IHttpRequest } from './http.interface';


const axiosInstance: AxiosInstance = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const ReactHttpRequest: IHttpRequest = {
    get: (url: string): Promise<any> => {
      const config = {
      };
      return axiosInstance.get(url, config);
    },
    post: (url: string, body: object): Promise<any> => {
      const config = {
      };
      return axiosInstance.post(url, body, config);
    },
    delete: (url: string): Promise<any> => {
      const config = {
      };
      return axiosInstance.delete(url, config);
    },
    put: (url: string, body: object): Promise<any> => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      return axiosInstance.put(url, body, config);
    },
    patch: (url: string, body: object): Promise<any> => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      return axiosInstance.patch(url, body, config);
    },
  };
  
  export default ReactHttpRequest;