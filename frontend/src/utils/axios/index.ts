import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { IRequest, RequestMethod } from "./dto";
import { VITE_BACKEND_URL } from "@src/environment";

axios.defaults.baseURL = VITE_BACKEND_URL;

export const HttpRequest = async (request: IRequest): Promise<unknown> => {
  try {
    const { url, method, body, headers } = request;
    const { GET, POST, PATCH, DELETE } = RequestMethod;
    const config: AxiosRequestConfig = { headers };

    const requestMethods = {
      [GET]: axios.get,
      [POST]: axios.post,
      [PATCH]: axios.patch,
      [DELETE]: axios.delete,
    };

    const requestMethod = requestMethods[method];
    if (!requestMethod)
      return { message: `Only Methods ${RequestMethod} are allowed` };

    const response: AxiosResponse = await requestMethod(url, body, config);
    return response.data.result;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) return error.response.data;
    return error;
  }
};
