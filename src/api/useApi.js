import { useAuth } from "../globalState/Auth";

import axios from "axios";
export const mainUrl = "https://api.jokolodang.com/api/v1";



const getHeader = (loggedIn, authToken) => ({
  headers: {
    ...(loggedIn
      ? { Authorization: `Bearer ${authToken}`, Accept: "application/json" }
      : {}),
  },
});

const errorFunction =
  (loggedIn, logout) =>
  (error) => {
    return Promise.reject({ axiosError: error, loggedIn, logout });
  };

export const getAxiosInstance = (
  isLoggedIn,
  onLogout,
  authToken
) => {
  const authHeader = getHeader(isLoggedIn, authToken);

  const instance = axios.create({
    ...authHeader,
  });

  instance.interceptors.response.use(function (response) {
    return response;
  }, errorFunction(isLoggedIn, onLogout));

  return instance;
};

export const useAxios = () => {
  const { onLogout, loggedIn, data } = useAuth();

  return getAxiosInstance(loggedIn, onLogout, data.jwt ?? "");
};

