<template>
<!-- <div class="w-2/5 h-auto bg-white flex direction-col items-center justify-center rounded-lg relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8">
    <div class="title text-3xl font-bold">登录</div>
</div> -->

<div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 relative top-1/2 left-1/2 transform -translate-x-2/3 -translate-y-2/3">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  登录 My Xiaobao
              </h1>
              <form class="space-y-4 md:space-y-6" action="#" method="post">
                  <div>
                      <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">校宝用户名</label>
                      <input type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="zhangsan" required>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">校宝密码</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-gray-600 dark:ring-offset-gray-800" checked>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">保持登录</label>
                          </div>
                      </div>
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="read" aria-describedby="read" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-gray-600 dark:ring-offset-gray-800" checked required>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="read" class="text-gray-500 dark:text-gray-300">我已阅读<a href="#">《隐私条款》</a></label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-gray-600 hover:underline dark:text-gray-500">忘记密码?</a>
                  </div>
                  <button type="submit" class="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 duration-200">登录</button>
              </form>
          </div>
      </div>

</template>

<script setup lang="ts">

</script>
<style scoped>
.title {
    font-family: "AlibabaPuHuiTi", sans-serif;
}
</style>