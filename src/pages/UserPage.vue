<template>
<van-cell title="昵称"  is-link="/user/edit" :value="user.username" @click="toEdit('username','昵称',user.username)"></van-cell>
  <van-cell title="账号"  :value="user.userAccount"></van-cell>
  <van-cell title="头像"  is-link="/user/edit" >
<img style="height: 48px" :src="user.avatarUrl">
  </van-cell>
  <van-cell title="简介"  is-link="/user/edit" :value="user.profile" @click="toEdit('profile','简介',user.profile)"></van-cell>
  <van-cell title="性别"  is-link="/user/edit" :value="user.gender" @click="toEdit('gender','性别',user.gender)"></van-cell>
  <van-cell title="电话"  is-link="/user/edit" :value="user.phone" @click="toEdit('phone','电话',user.phone)"></van-cell>
  <van-cell title="邮箱" is-link="/user/edit"  :value="user.email" @click="toEdit('email','邮箱',user.email)"></van-cell>
  <van-cell title="注册时间"  :value="user.createTime"></van-cell>

</template>



<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../service/user";
import {CurrentUser} from "../model/user";

// const user={
//   id:2,
//   username:'小帅哥',
//   userAccount :20132121,
//   avatarUrl :'https://img.meituan.net/avatar/5b43cd6e79a6909eaa4a6f68ae009a9f107756.jpg',
//   profile:'做一个自由的人',
//   gender:'男',
//   phone: '1892615162',
//   email:'123@qq.com',
//   createTime:new Date(),
// }
const user = ref<CurrentUser>({})  ;

onMounted(async () => {
  user.value = await getCurrentUser();
})


const router=useRouter();

const  toEdit=(editKey:string,editName:string,currentValue:string)=>{
  router.push({
    path:'/user/edit',
    query:{
      editKey,
      editName,
      currentValue,
    },
  })
}
</script>

<style scoped>

</style>