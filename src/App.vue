<template>
  <div class="flex h-screen bg-white">
    <aside class="w-64 bg-white p-4 flex flex-col h-full text-center">
      <div class="text-2xl font-bold mb-6 logo h-56 place-content-center">
        <span>我的校宝</span>
      </div>

      <nav class="flex flex-col justify-evenly h-1/2 link">
        <router-link to="/" class="hover:text-gray-500">主页</router-link>
        <router-link to="/tasks" class="hover:text-gray-500">任务</router-link>
        <router-link to="/calendar" class="hover:text-gray-500">日程</router-link>
        <router-link to="/profile" class="hover:text-gray-500">我的</router-link>
      </nav>
    </aside>

    <main class="mt-6 mb-6 bg-gray-100 w-full rounded-3xl p-8 mr-6 overflow-y-auto">
        <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification';
import { getUserInfo, login } from './api/auth';
import { LoginData } from './api/schemas/auth';
import { useAuthStore } from './store/auth';
import { useInfoStore } from './store/userInfo';

const infoStore = useInfoStore();
const authStore = useAuthStore();
const toast = useToast();

const loginData: LoginData = {
    isWeekPassword: 1,
    languageType: 0,
    name: "",
    password: "",
    timestamp: 0,
};

function fetchUserInfoStore() {
  getUserInfo().then(res => {
    infoStore.setInfo(res);
  });
}

function checkLogin(){
  // 获取用户信息
  getUserInfo().then(res => {
    // 如果res没有data
    if (!res) {
      tryAutoLogin();
    }
    infoStore.setInfo(res);
  });
}

async function tryAutoLogin(){
  if(authStore.saveCredentials) {
    loginData.name = authStore.loginName;
    loginData.password = authStore.password;
    loginData.timestamp = authStore.timestamp;
    try {
      await login(loginData);
      fetchUserInfoStore();
      authStore.loggedIn = true;
      toast.success(`欢迎回来，${infoStore.name}！自动登录成功！`, { timeout: 2000 });
    } catch (error) {
      toast.warning('自动登录失败，可能是由于密码修改或网络原因，请重新登录。');
      authStore.saveCredentials = false;
      authStore.loginName = "";
      authStore.password = "";
      authStore.timestamp = 0;
    }
  }
}

checkLogin();


</script>

<style scoped>
.logo {
  font-family: 'AlibabaMamaShuHeiTi', sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
}
.link {
  font-family: 'AlibabaPuHuiTi', sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
}
</style>
