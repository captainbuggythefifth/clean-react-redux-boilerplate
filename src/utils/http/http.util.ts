import axios, { AxiosInstance } from 'axios';
import { IHttpRequest } from './http.interface';


const axiosInstance: AxiosInstance = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const ReactHttpRequest: IHttpRequest = {
    get: (url: string): Promise<any> => {
      /* try {
        return axiosInstance.get(url)
      } catch (e) {
        return Promise.reject(e)
      } */
      return axiosInstance.get(url)
    },
    post: (url: string, body: object): Promise<any> => {
      return axiosInstance.post(url, body);
    },
    delete: (url: string): Promise<any> => {
      return axiosInstance.delete(url);
    },
    put: (url: string, body: object): Promise<any> => {
      return axiosInstance.put(url, body);
    },
    patch: (url: string, body: object): Promise<any> => {
      return axiosInstance.patch(url, body);
    },
  };
  
  export default ReactHttpRequest;