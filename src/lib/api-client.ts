import Axios, { InternalAxiosRequestConfig } from "axios";

import { env } from "@/config/env";
import { paths } from "@/config/paths";

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = "application/json";
  }
  // TODO: 如果需要 cookie 
  // config.withCredentials = true;
  return config;
}

export const api = Axios.create({
  baseURL: env.API_URL,
  timeout: 1000 * 30,
});

api.interceptors.request.use(authRequestInterceptor);
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.error(message);
    // TODO: 提示
    // useNotifications.getState().addNotification({
    //   type: "error",
    //   title: "Error",
    //   message,
    // });
    // TODO: 服务器响应错误处理
    if (error.response?.status === 401) {
      const searchParams = new URLSearchParams();
      const redirectTo =
        searchParams.get("redirectTo") || window.location.pathname;
      window.location.href = paths.auth.login.getHref(redirectTo);
    }

    return Promise.reject(error);
  }
);
