<template>
  <van-nav-bar
      title="好厚米交友平台"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>

  <div id="content">
    <router-view />
  </div>

  <van-tabbar route @change="onChange">
    <van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item to="/team" icon="search" name="team">队伍</van-tabbar-item>
    <van-tabbar-item to="/user" icon="friends-o" name="user">个人</van-tabbar-item>
  </van-tabbar>

</template>

<script setup>
import {ref} from "vue";
import {showToast, Toast} from "vant";
import {useRouter} from  "vue-router"
import 'vant/es/toast/style';

const router=useRouter();
const onClickLeft = () =>
{
  router.back();
};
const onClickRight = () =>{
  router.push('/search')
};

const active = ref("index");
const onChange = (index) => showToast(` ${index}页`);

</script>

<style scoped>
#content{
  padding-bottom: 50px;
}

</style>


