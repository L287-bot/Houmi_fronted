<template>
  <!--  <van-list-->
  <!--      :loading="props.loading"-->
  <!--      @load=" $emit('loading-data', props.pageNum + 1)"-->
  <!--  >-->
  <template v-for="user in props.userList">
    <van-skeleton title avatar :row="3" :loading="props.loading">
      <van-card
          :desc="user.profile"
          :title="user.username"
          :thumb="user.avatarUrl"
      >

        <template #tags>
          <van-tag plain type="danger" v-for="tag in user.tags" style="margin-right: 8px;margin-top: 8px;">
            {{ tag }}
          </van-tag>
        </template>
        <template #footer>
          <van-button  size="small">申请好友</van-button>
          <van-button  size="small">举报</van-button>
        </template>
      </van-card>
    </van-skeleton>
  </template>
  <!--  </van-list>-->
  <van-empty v-if="props.userList.length < 1 " description="暂无数据" />
</template>

<script setup lang="ts">

import {CurrentUser} from "../model/user";
import {defineProps} from "@vue/runtime-core";
import {DefineComponent, withDefaults} from "vue";



interface UserCardListProps {
  pageNum: number,
  userList: CurrentUser[],
  loading: boolean
}
//@ts-ignore
const props = withDefaults(defineProps<UserCardListProps>(), {
  userList: [] as CurrentUser[],
})


</script>

<style scoped>

</style>
