<template>
    <template v-for="user in userList ">
      <van-card
          :desc="user.profile"
          :title="user.username"
          :thumb="user.avatarUrl"
      >
        <template #tags>
          <van-tag plain type="danger" v-for="tag in user.tags" style="margin-right: 8px;margin-top: 8px;">
            {{tag}}
          </van-tag>
        </template>
        <template #footer >
          <van-button  size="small">申请好友</van-button>
          <van-button  size="small">举报</van-button>
        </template>
      </van-card>
    </template>
  <van-empty v-if="userList.length < 1 " description="暂无数据" />
</template>

<script setup>


import {useRoute} from "vue-router";
import qs from 'qs';
import myAxios from "../plungin/myAxios";
import {onMounted, ref} from "vue";
import {showFailToast, showSuccessToast, Toast} from "vant";
const route = useRoute();
console.log(route)
const {tags} = route.query;

// const mockUser = {
//   id: '1234',
//   username: 'daoyMI',
//   profile: '喜欢唱跳，rap,打篮球',
//   userAccount: 'count123',
//   avatarUrl: 'https://img.meituan.net/avatar/5b43cd6e79a6909eaa4a6f68ae009a9f107756.jpg',
//   gender: '男',
//   phone: '41234568556564',
//   email: '45265456@163.com',
//   createTime: new Date(),
//   tags: ['唱','跳','rap','篮球']
// }
const userList = ref([]);
onMounted(async () =>{
  const userListData = await myAxios.get("/user/search/tags", {
    params: {
      tagNameList: tags
    },
    paramsSerializer: params => {
      return qs.stringify(params, {indices: false})
    }
  }).then((res) => {
    console.log(res);
    showSuccessToast("请求成功");
    return res?.data;
  }).catch((err) => {
    console.log(err)
    showFailToast("请求失败");
  })
  console.log(userListData)
  if (userListData){
    userListData.forEach(item =>{
      if (item.tags){
        item.tags = JSON.parse(item.tags);
      }
    })
    userList.value = userListData;
  }
})




</script>

<style scoped>

</style>
