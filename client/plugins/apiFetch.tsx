
import { apiUrl } from '@/api.const'

interface ApiFetchParams {
    method?: string,
    path?: string, 
    body?: any, 
    token?: string
}

export const apiFetch = async (params: ApiFetchParams) => {
    let options = { method: params.method, headers: new Headers(), body: params.body, token: params.token, path: params.path};
    const { token, body, path, headers } = options
    if (token) {
      headers.append('Authorization', `Bearer ${token}`);
    }
    // if (body) {
    //   if (body instanceof FormData) {
    //     options.body = body;
    //   } else {
    //     headers.append('Content-Type', 'application/json');
    //     options.body = JSON.stringify(body);
    //   }
    // }
   return await fetch(`${apiUrl}${path}`, options);
}