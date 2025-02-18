import Axios, { InternalAxiosRequestConfig } from "axios";

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = "application/json";
  }
  //   config.withCredentials = true; // 是否携带cookie
  return config;
}

export const apiClient = Axios.create({
  baseURL: "http://localhost:3000", // 从环境变量中获取
});

apiClient.interceptors.request.use(authRequestInterceptor);
apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // TODO: 处理错误，以及变量是否需要提取   
    // const message = error.response?.data?.message || error.message;

    if (error.response?.status === 401) {
      const searchParams = new URLSearchParams();
      const redirectTo =
        searchParams.get("redirectTo") || window.location.pathname;
      // 没有登录，跳转到登录页
      window.location.href = `/login?redirectTo=${redirectTo}`;
    }

    return Promise.reject(error);
  }
);
