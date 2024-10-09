import axios, { AxiosResponse } from "axios";
import { useAuthStore } from "../store/auth";
import { data } from "autoprefixer";

const instance = axios.create({
    baseURL: "https://localhost:3000/api/",
    timeout: 5000,
    withCredentials: true
});

export interface XBResponse {
    data?: any;
    msgCN: string | null,
    msgEN: string | null,
    state: number,
    msg: string | null
}

// instance.interceptors.request.use(
//     (config) => {
//         // const authStore = useAuthStore();

//         // 如果 sessionId 存在，将其添加到请求头的 Cookie 中
//         // if (authStore.sessionId) {
//             // config.headers['Cookie'] = `SessionId=${authStore.sessionId}`;
//         // }

//         return config;
//     },
//     (error) => {
//         // 对请求错误做些什么
//         return Promise.reject(error);
//     }
// );

// 添加响应拦截器，捕获 Set-My-Cookie 并手动设置 Cookie
instance.interceptors.response.use(
    (response) => {
        const passCode = [999901];
        if (response.data["state"] != 0 && !passCode.includes(response.data["state"])) {
            return Promise.reject(response.data["msg"]);
        }
        return response.data["data"];
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;
