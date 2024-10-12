<template>
    <div class="banner flex w-2/5 rounded-xl bg-cover overflow-hidden relative">
        <div class="left flex w-3/5 pl-8 pt-8 pb-8 flex-col justify-start space-y-1">
            <h1 class="title text-4xl text-white leading-snug">下午好，霍梓烨！<br>周末愉快~</h1>
            <p class="sub-title text-lg text-white">BC / EL / CSA / Physics 1</p><br>
            <button class="text-black bg-white rounded-sm text-md  p-2 w-32">前往日程表</button>
        </div>
        <div class="right w-2/5 z-10 flex-none">
            <!-- <div class="relative inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-10 w-full h-full"></div> -->
            <img src="https://bing.img.run/rand.php" alt="" class="object-cover h-full w-full">
        </div>
    </div>
</template>
<script lang="ts">
export default {
  name: 'Search',
}
</script>
<style scoped>
.banner {
    background-color: #3B3B3B;
}
h1 {
    font-family: "AlibabaMamaShuHeiTi", sans-serif;
    font-weight: 700;
}

button {
    font-family: "AlibabaPuHuiTi", sans-serif;
    font-weight: 500;
    letter-spacing: 1px;
}
</style>