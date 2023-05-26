import { AxiosHeaders } from "axios";

export enum RequestMethod {
  GET,
  POST,
  PATCH,
  DELETE,
}

export interface IRequest {
  url: string;
  method: RequestMethod;
  body?: unknown;
  headers?: AxiosHeaders;
}
