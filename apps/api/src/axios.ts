import axios from "axios";
import { jsonToken } from "./consts";

axios.defaults.headers.common["Authorization"] = jsonToken;

export const addAccessToken = (): void => {
  //   axios.interceptors.request.use(
  //     (request) => {
  //       const authToken = "dazza";
  //       return {
  //         ...request,
  //         headers: {
  //           ...request.headers,
  //           ...{ Authorization: `Bearer ${authToken}` },
  //         },
  //       };
  //     },
  //     (error) => Promise.reject(error)
  //   );
};
