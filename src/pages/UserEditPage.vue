<template>
<van-form @submit="onsubmit">
  <van-field
      v-model="editUser.currentValue"
      :name="editUser.editKey"
      :label="editUser.editName"
      :placeholder="`请输入${editUser.editName}`"
      border="{{ false }}"
      bind:change="onChange"
  />

  <div style="margin: 16px">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>


</template>

<script setup>
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";


const route=useRoute();
const editUser=ref(
    {
      editKey: route.query.editKey,
      editName:route.query.editName,
      currentValue:route.query.currentValue,
    }

)
const onsubmit=(values)=>{
  console.log('onSubmit='+values)
}

</script>

<style scoped>

</style>