<template>
    <div>
        <header class="flex justify-between items-center">
            <Search></Search>
            <Avatar></Avatar>
        </header>
        <div class="banner-bar mt-5">
            <HomeBanner></HomeBanner>
        </div>
        <!-- <h1>欢迎来到首页</h1>
        <p>{{ message }}</p>
        <button @click="changeMessage">点击改变消息</button> -->
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Search from '../components/Search.vue';
import Avatar from '../components/Avatar.vue';
import HomeBanner from '../components/HomeBanner.vue';

const message = ref('这是首页的消息');

function changeMessage() {
    message.value = '消息已改变';
}
</script>

<style scoped>

</style>