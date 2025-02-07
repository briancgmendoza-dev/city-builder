import axios, { AxiosResponse, Method } from 'axios';

import { THttpMethod, TRequestOptions } from './type';

async function request<T extends THttpMethod>({
  method,
  url
}: TRequestOptions<T>): Promise<AxiosResponse> {

  const config = {
    method: method as Method,
    url
  };

  return axios(config);
}

export default request;
