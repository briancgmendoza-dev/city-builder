import axios, { AxiosResponse, Method } from 'axios';

import { THttpMethod, TRequestOptions } from './type';
import { NEXT_PUBLIC_BASE_URL } from '../constant';

async function request<T extends THttpMethod>({
  method,
  url
}: TRequestOptions<T>): Promise<AxiosResponse> {
  if (!NEXT_PUBLIC_BASE_URL) {
    throw new Error("Base URL is not defined in the environment variables.");
  }

  const config = {
    method: method as Method,
    url: `${NEXT_PUBLIC_BASE_URL + url}`
  };

  return axios(config);
}

export default request;
