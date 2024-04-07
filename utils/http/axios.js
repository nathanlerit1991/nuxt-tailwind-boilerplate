// import axios from 'axios';
// import { getCookie } from '@/helpers/getCookie';

// const http = axios.create({
//     baseURL: import.meta.env.VITE_API_BASE_URL,
// });

// Add a request interceptor
// http.interceptors.request.use(
//   config => {
//     const authToken = getCookie('authToken'); //Change the value whatever the token you have
//     if (authToken) {
//       config.headers.Authorization = `Bearer ${authToken}`;
//     }
//     return config;
//   },
//   error => {
//     // Handle request errors
//     return Promise.reject(error);
//   }
// );


// http.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//       /* eslint-disable */
//       switch (error.response.status) {
//           case 400:
//               console.error("400 - Bad Request", error.response);
//               break;
//           case 401:
//               console.error("401 - Request", error.response);
//               await logout();
//               break;
//           case 403:
//               console.error("403 - Forbidden", error.response);
//               break;
//           case 404:
//               console.error("404 - Not Found", error.response);
//               break;
//           default:
//               console.error("Error", error.response);
//       }
//       /* eslint-enable */

//       return Promise.reject(error);
//   }
// );

export default http;
