import { createApiUrl } from "./plugins/createApiUrl";


export const apiProtocol = 'http';
export const apiDomain = 'localhost';
export const apiPort = 5000;
export const apiName = 'api';

export const apiUrl = createApiUrl(
    apiProtocol,
    apiDomain,
    apiPort,
    apiName,
  );