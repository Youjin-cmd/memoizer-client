/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

type Method = "GET" | "POST" | "PUT" | "DELETE";

function fetchData(method: Method, url: string, data?: any) {
  const response = axios({
    method,
    url,
    data,
    baseURL,
    withCredentials: true,
  });

  return response;
}

export default fetchData;
