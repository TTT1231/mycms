<template>
    <div class="user-info">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar
            size="small"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          ></el-avatar>
          <span class="username">{{ name }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item><el-button @click="checkoutLogin">退出登录</el-button></el-dropdown-item>
            <el-dropdown-item divided><el-button>用户信息</el-button></el-dropdown-item>
            <el-dropdown-item><el-button>系统管理</el-button></el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import router from '@/router';
  const store = useStore();
  const name = ref('')
  const checkoutLogin=()=>{
    router.push({name:'login'})
  }
//   console.log(store.state.LoginService.userInfo.data[0].username)
  name.value=store.state.LoginService.userInfo?.data[0]?.username
  </script>
  
  <style scoped>
  .el-dropdown-link {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .username {
    margin-left: 8px;
  }
  </style>
  