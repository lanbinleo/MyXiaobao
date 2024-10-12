<template>
    <div class="relative group">
        <!-- Avatar -->
        <div class="avatar w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl cursor-pointer">
            <!-- Placeholder for Avatar Text or Image -->
            {{ firstLetter }}
        </div>

        <!-- Dropdown Menu -->
        <div
            class="drp absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <ul class="py-2">
                <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">个人中心</a></li>
                <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">我的设置</a></li>
                <hr>
                <!-- <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">退出登录</a></li> -->
                <li><router-link to="/login" class="block px-4 py-2 hover:bg-gray-100">退出登录</router-link></li>
            </ul>
        </div>
    </div>

</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useInfoStore } from '../store/userInfo';

const infoStore = useInfoStore();

// 当监听到store中的数据变化时，重新计算firstLetter的值
infoStore.$subscribe(() => {
  firstLetter.value = setAvatarText();
});
function setAvatarText() {
  const name = infoStore.name;
  const firstLetter = name.charAt(0).toUpperCase();
  return firstLetter;
}

const firstLetter = ref('');
firstLetter.value = setAvatarText();

</script>
<style scoped>
  * {
    user-select: none;
    /* 不可选择 */
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    cursor: pointer;
  }
  .avatar {
    font-family: 'AlibabaPuHui', sans-serif;
    font-weight: 700;
    color: #C692CB;
  }
  .drp {
    font-family: 'AlibabaPuHui', sans-serif;
    font-weight: 400;
  }

</style>