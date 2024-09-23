
<template>
  <van-nav-bar title="标题"
               left-text="返回"
               right-text="按钮"
               left-arrow
               @click-left="onClickLeft"
               @click-right="onClickRight">
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>

  <div id="content">
    <template v-if="active==='index'">
     <Index/>

    </template>
    <template v-if="active==='team'">
   <Team/>
    </template>
  </div>

  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o"name="index" >首页</van-tabbar-item>
    <van-tabbar-item icon="search" name="team">队伍</van-tabbar-item>
    <van-tabbar-item icon="friends-o" name="user">个人</van-tabbar-item>
  </van-tabbar>



</template>

<script >
import {showToast, Toast} from "vant";
import {ref} from "vue";
import Index from "../pages/Index.vue";
import Team from "../pages/Team.vue";


export default {
  components: {Index,Team},
  setup() {
    const onClickLeft = () => showToast('返回');
    const onClickRight = () => showToast('搜索');
    const active = ref("index");
    const onChange = (index) => showToast(`现在是 ${index}页面`);
    return {
      onClickLeft,
      onClickRight,
      active,
      onChange

    };
  },

}


</script>


<style scoped>

</style>