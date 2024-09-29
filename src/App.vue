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

    <main class="mt-6 mb-6 bg-gray-100 w-full rounded-3xl p-6">
        <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
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
