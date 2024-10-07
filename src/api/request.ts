import axios from "axios";
import { useAuthStore } from "../store/auth";

const instance = axios.create({
    baseURL: "https://localhost:3000/api/",
    timeout: 5000,
    withCredentials: true
});

instance.interceptors.request.use(
    (config) => {
        const authStore = useAuthStore();

        // 如果 sessionId 存在，将其添加到请求头的 Cookie 中
        if (authStore.sessionId) {
            config.headers['Cookie'] = `SessionId=${authStore.sessionId}`;
        }

        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器，捕获 Set-My-Cookie 并手动设置 Cookie
instance.interceptors.response.use(
    (response) => {
        // 检查响应头是否包含 Set-My-Cookie
        const setMyCookieHeader = response.headers['set-my-cookie'];
        console.log(setMyCookieHeader);
        if (setMyCookieHeader) {
            // 将 Set-My-Cookie 转换成键值对的格式
            const cookies = setMyCookieHeader.split(';')[0]; // 获取 Cookie 键值对部分（忽略其他属性）

            // 手动设置 Cookie（确保没有 HttpOnly，否则无法设置）
            document.cookie = cookies;

            // 这里可以解析出具体的 sessionId 并存储在 authStore 中
            const sessionId = cookies.split('=')[1];
            if (sessionId) {
                const authStore = useAuthStore();
                authStore.setSessionId(sessionId);
            }
        }

        return response;
    },
    (error) => {
        // 对响应错误做些什么
        return Promise.reject(error);
    }
);

export default instance;
