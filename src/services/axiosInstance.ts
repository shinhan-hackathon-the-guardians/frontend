import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  retry?: boolean;
}

const baseURL = "https://guardian.givendragon.site/api";
// const baseURL = "http://localhost:8080";

const axiosInstance = axios.create({
  baseURL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // 세션 쿠키를 포함하여 요청
});

// 요청 인터셉터 설정 (요청을 보낼 때의 처리)
const onRequest = (
  config: CustomAxiosRequestConfig
): CustomAxiosRequestConfig => {
  // 요청을 보내기 전에 수행할 작업이 있으면 여기에 추가
  return config;
};

axiosInstance.interceptors.request.use(onRequest);

// 응답 오류 처리
const onResponseError = (error: AxiosError | Error) => {
  // 응답 오류를 콘솔에 기록합니다.
  console.error(`🚨 [API] | Error ${error.message}`);
  return Promise.reject(error);
};

// 응답 인터셉터 설정 (응답을 받을 때의 처리)
axiosInstance.interceptors.response.use(
  (response) => response,
  onResponseError
);

export default axiosInstance;
