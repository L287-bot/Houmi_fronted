<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索标签"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>
  <van-divider content-position="left">已选标签</van-divider>
  <div v-if="activeIds.length === 0">请选择标签</div>
  <van-row gutter="16" style="padding: 0 16px">
    <van-col v-for="tag in activeIds">
      <van-tag  closeable size="small" type="primary" @close="doclose(tag)">
        {{ tag }}
      </van-tag>
    </van-col>
  </van-row>

  <van-divider content-position="left">已选标签</van-divider>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />
  <div style="padding: 16px">
    <van-button round block type="primary" @click="doSearchResult">
      搜索
    </van-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import {useRouter} from "vue-router";

const searchText = ref('');
const router=useRouter()
const originTagList = [{
  text: '性别',
  children: [
    { text: '男', id: '男' },
    { text: '女', id: '女' },

  ],
}, {
  text: '年级',
  children: [
    { text: '大一', id: '大一' },
    { text: '大二', id: '大二' },
    { text: '大三', id: '大三' },
    { text: '大四', id: '大四' },
    { text: '研一', id: '研一' },
    { text: '研二', id: '研二' },
  ],

},
  {
    text: '语言',
    children: [
      { text: 'C', id: 'C' },
      { text: 'C#', id: 'C#' },
      { text: 'C++', id: 'C++' },
      { text: 'Java', id: 'Java' },
      { text: 'Python', id: 'Python' },
      { text: 'Go', id: 'Go' },
    ]

  }
];
//标签列表
let tagList = ref(originTagList);
/**
 *  搜索过滤
 *  把所有子标题拿去跟搜索内容进行比较过滤
 *  tagList.value= return tempParentTag;
 * @param val
 */

const onSearch = (val) => {
  tagList.value = originTagList.map(parentTag =>{
    const tempChildren =  [...parentTag.children];
    const tempParentTag =  {...parentTag};
    tempParentTag.children = tempChildren.filter(item => item.text.includes(searchText.value))
    return tempParentTag;
  })
};

const doSearchResult=()=>
{
  router.push({
    path:'/user/list',
    query:{
      tags:activeIds.value
    }
  })


}


//取消  清空
const onCancel = () => {
  searchText.value = '';
  tagList.value = originTagList;
};


//已选中的标签
const activeIds = ref([]);
const activeIndex = ref(0);


//关闭标签
const  doclose = (tag) =>{
  activeIds.value = activeIds.value.filter(item =>{
    return item !== tag;
  })

}

</script>

<style scoped>

</style>