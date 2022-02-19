const API_URL = 'https://staging.wynwood-house.com/api/';

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
}

export type ErrorHanlder = (error: string) => void;
export type FetchResponse = {
  status?: boolean;
  errors?: string[];
};

export async function myFetch<T extends FetchResponse>(
  endpoint: string,
  payload: string,
  resultHandler: (response: T) => void,
  errorHandler: ErrorHanlder,
  method = HttpMethod.POST,
  aditionalHeaders?: {[key: string]: string},
) {
  const url = API_URL + endpoint;
  const body = method !== HttpMethod.GET ? {body: payload} : {};
  const request = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      ...aditionalHeaders,
    },
    ...body,
  };

  return fetch(url, request)
    .then(response => {
      if (response.status >= 500) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .then((data: T) => {
      if (!data.status) {
        let errorMessage = 'Unexpected error has ocurred';
        errorMessage = data?.errors ? data.errors[0] : errorMessage;
        errorHandler(errorMessage);
        return;
      }
      resultHandler(data);
    })
    .catch((error: Error) => errorHandler(error.message));
}
