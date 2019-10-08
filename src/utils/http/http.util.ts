import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { IHttpRequest } from './http.interface';

const axiosInstance: AxiosInstance = axios.create({
    headers: {
      'Content-Type': 'application/json',
    }
  });

  axiosInstance.interceptors.response.use((response: AxiosResponse) => response, (error: AxiosError) => {
    console.log("error: ", error);
    // alert("error");
    return Promise.reject(error);
  });

export const ReactHttpRequest: IHttpRequest = {
    get: (url: string): Promise<any> => {
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