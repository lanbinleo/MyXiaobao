<template>
    <!-- <div class="w-2/5 h-auto bg-white flex direction-col items-center justify-center rounded-lg relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8">
    <div class="title text-3xl font-bold">登录</div>
</div> -->

    <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 relative top-1/2 left-1/2 transform -translate-x-2/3 -translate-y-2/3">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                登录 My Xiaobao
            </h1>
            <form class="space-y-4 md:space-y-6" action="#" method="post" @submit="handleFormSubmit">
                <div>
                    <label for="username"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">校宝用户名</label>
                    <input type="text" name="username" id="username"
                        v-model="username"
                        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your Username" required>
                </div>
                <div>
                    <label for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">校宝密码</label>
                    <input type="password" name="password" id="password" 
                        v-model="password"
                        placeholder="••••••••••"
                        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required>
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox"
                                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-gray-600 dark:ring-offset-gray-800"
                                v-model="saveCredential" @click="console.log(saveCredential)">
                        </div>
                        <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">保持登录</label>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input id="read" aria-describedby="read" type="checkbox"
                                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-gray-600 dark:ring-offset-gray-800"
                                checked required>
                        </div>
                        <div class="ml-3 text-sm">
                            <label for="read" class="text-gray-500 dark:text-gray-300">我已阅读<a
                                    href="#">《隐私条款》</a></label>
                        </div>
                    </div>
                    <a href="#" class="text-sm font-medium text-gray-600 hover:underline dark:text-gray-500">忘记密码?</a>
                </div>
                <button type="submit"
                    class="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 duration-200">登录</button>
            </form>

        </div>

    </div>

</template>

<script setup lang="ts">
// import { ref } from 'vue';
import { ref } from 'vue';
import { login } from '../api/auth'; // 引入封装的 login 函数
import { CredentialData, LoginData } from '../api/schemas/auth';
import { useAuthStore } from '../store/auth';
import md5 from 'md5';
import { useToast } from 'vue-toastification';
import { useInfoStore } from '../store/userInfo';
import { getUserInfo } from '../api/auth';
import { useRouter } from 'vue-router';

const router = useRouter();

const authStore = useAuthStore();
const toast = useToast();
const infoStore = useInfoStore();

// 创建 ref 来存储输入的用户名和密码
const loginData: LoginData = {
    isWeekPassword: 1,
    languageType: 0,
    name: "",
    password: "",
    timestamp: 0,
};

// 创建两个ref来绑定表单数据
const username = ref('');
const password = ref('');
const saveCredential = ref(true);

function getHashedPassword(password: string, timestamp: number): string {
  const hash = md5(password).toUpperCase();
  const combined = hash + timestamp.toString();
  const combinedHash = md5(combined).toUpperCase();
  return combinedHash;
}

function timeGreeting() {
  const currentHour = new Date().getHours();
  if (currentHour < 12) {
    return '上午好';
  } else if (currentHour < 18) {
    return '下午好';
  } else {
    return '晚上好';
  }
}

// 监听登录按钮的点击事件
const handleLogin = async () => {
    try {
        // 获取当前时间戳
        const timestamp = Math.floor(Date.now() / 1000);
        
        // 设置 loginData 的值
        loginData.name = username.value;
        loginData.password = getHashedPassword(password.value, timestamp); // 注意：实际生产环境中不要直接存储密码
        loginData.timestamp = timestamp;

        // 调用封装的 login 函数并传入登录数据
        const response = await login(loginData);
        console.log(response);
        if (response) {
            console.log('Login successful:', response);

            // 从 Cookie 中提取 SessionId
            console.log('Cookies:', document.cookie);
            interface CookieMap {
                [key: string]: string;
            }
            const cookies: CookieMap = document.cookie.split('; ').reduce<CookieMap>((acc, currentCookie) => {
                const [name, value] = currentCookie.split('=');
                acc[name] = value;
                return acc;
            }, {});

            // 假设你的 SessionId 存储在名为 "SessionId" 的 Cookie 中
            const sessionId = cookies['SessionId'];

            // 保存 SessionId 到 Store 并保存登录凭证
            if (sessionId) {
                await getUserInfo().then(res => {
                    infoStore.setInfo(res);
                });
                // alert('Login successful!');
                toast.success('登录成功！'+timeGreeting()+"，"+infoStore.name+"！");
                

                // 保存 SessionId
                authStore.setSessionId(sessionId);
                authStore.loggedIn = true;

                // 创建 CredentialData 对象
                const credentials: CredentialData = {
                    loginName: username.value,
                    password: getHashedPassword(password.value, timestamp),
                    timestamp: timestamp,
                };

                // 判断用户是否选择了“保持登录”
                if (saveCredential.value) {
                    authStore.saveCredential(credentials); // 保存登录凭证
                } else {
                    authStore.clearCredential();
                    setTimeout(() => {
                        toast.info("您没有选择保持登录状态，我们将不会保存您的登录凭证在本地，这可能会导致输入密码次数增加。我们建议您允许浏览器加密保存您的账户密码，以在会话过期后仍然可以快速登录我的校宝。")
                    }, 1000);
                }

                router.push('/');

            } else {
                alert('Failed to retrieve sessionId.');
            }
        } else {
            toast.error('登录失败！请检查用户名密码是否正确');
        }

    } catch (error) {
        toast.error('登录失败！请检查用户名密码是否正确');
        // 清空输入框
        username.value = '';
        password.value = '';
        console.error('Login failed:', error);
        // 可以在此处处理错误，比如显示错误提示
    }
};

// 处理表单提交，禁用默认行为并调用 handleLogin
const handleFormSubmit = (event: Event) => {
    event.preventDefault(); // 阻止表单的默认提交行为
    handleLogin();
};

</script>
<style scoped>
.title {
    font-family: "AlibabaPuHuiTi", sans-serif;
}
</style>