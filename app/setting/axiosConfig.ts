// import axios, { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

// const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
//     const token = sessionStorage.getItem('token');
//     config.headers.Authorization =
//         'Bearer ' +
//         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyOTk0N2M2LTU1MmQtNGQ4NC1iMmM4LWVhZWUzOTFjMGYwYyIsImlhdCI6MTY5OTc5ODgzMiwiZXhwIjoxNjk5ODg1MjMyfQ.R5BzHWPpy913wfQvKpHSlqrFmEJF8N7RWMIm7oJaZpw';
//     return config;
// };
// const onRequestError = (err: AxiosError): Promise<AxiosError> => {
//     return Promise.reject(err);
// };
// axios.interceptors.request.use(onRequest, onRequestError);

// const onResponse = (response: AxiosResponse): AxiosResponse => {
//     return response;
// };
// const onResponseError = (err: AxiosError): Promise<AxiosError> => {
//     return Promise.reject(err);
// };
// axios.interceptors.response.use(onResponse, onResponseError);
