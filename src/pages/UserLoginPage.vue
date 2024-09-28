<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="userAccount"
          name="userAccount"
          label="账号"
          placeholder="请输入账号"
          :rules="[{ required: true, message: '用户名不能为空' }]"
      />
      <van-field
          v-model="userPassword"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '密码不能为空' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        登录
      </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">

import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plungin/myAxios";
import {showFailToast, showSuccessToast} from "vant";



const router = useRouter();
const route =  useRoute();
const userAccount = ref('');
const userPassword = ref('');

const onSubmit = async (values) => {
  const res = await  myAxios.post("/user/login", {
    userAccount: userAccount.value,
    userPassword: userPassword.value
  },) as  any;
  console.log(res.code)
  if (res.code === 200){
    const redirectUrl = route.query?.redirect as string ?? '/';
    window.location.href = redirectUrl;
  }else {
    showFailToast("登录失败");
  }
  userAccount.value = '';
  userPassword.value = '';
};

</script>

<style scoped>

</style>
