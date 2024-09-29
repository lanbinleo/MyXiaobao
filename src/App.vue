<template>
  <div class="flex h-screen bg-white">
    <!-- Sidebar -->
    <aside class="w-64 bg-white p-4 flex flex-col">
      <!-- Logo / Title -->
      <div class="text-2xl font-bold mb-6">
        我的校宝
      </div>
      <!-- Navigation Links -->
      <nav class="flex flex-col space-y-4">
        <router-link to="/" class="hover:text-blue-500">主页</router-link>
        <router-link to="/tasks" class="hover:text-blue-500">任务</router-link>
        <router-link to="/calendar" class="hover:text-blue-500">日程</router-link>
        <router-link to="/profile" class="hover:text-blue-500">我的</router-link>
      </nav>
    </aside>

    <!-- Main Content Area -->
    <main class="m-6 bg-gray-100 w-full rounded-lg p-6">
        <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
// No additional logic needed for the layout
</script>

<style scoped>
/* You can add any additional scoped styles here if necessary */
</style>
