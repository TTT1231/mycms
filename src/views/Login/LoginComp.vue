<template>
  <div class="loginPanel">
    <h1 class="title">我的后台管理系统</h1>
    <div class="acountlogin">
      <div class="account">账号: <el-input v-model="account" style="width: 240px" placeholder="请输入账号" clearable />
      </div>
      <div class="password">密码: <el-input v-model="pw" style="width: 240px" type="password" placeholder="请输入密码"
          show-password /></div>
    </div>
    <el-button type="primary" @click="openFullScreen2" class="loginbtn" v-loading.fullscreen
      :plain="true">登录</el-button>

  </div>

</template>
<script setup lang="ts">

import { ElLoading, ElMessage, ElNotification, } from 'element-plus'
import { useStore } from 'vuex'
import { ref } from 'vue';
import router from '@/router';
const account = ref('');
const pw = ref('');
const store = useStore();
const open2 = () => {
  alert("nihao")
}
const openFullScreen2 = () => {
  const loading = ElLoading.service({
    lock: true,
    text: "登录中请稍后.........",
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => {
    //Module.dispatch
    store.dispatch('LoginService/accountLoginAction', `/user/select/${account.value}/${pw.value}`)
    loading.close();
    setTimeout(() => {
      if (store.state.LoginService.userInfo?.code === 1) {
        router.push('/main')
      } else alert("登录失败")

    }, 500)

  }, 1000)

}
</script>
<style scoped>
.loginPanel {
  width: 400px;
  height: 300px;
  margin: 200px 0px 0px 500px;
  border-width: 1px;
  border-style: solid;
  /* 边框样式：实线 */
}

.loginPanel .title {
  text-align: center;
}

.accountlogin {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.login-btn {
  width: 100%;
  margin-top: 10px;
}

.account {
  margin-left: 60px;
}

.password {
  margin-top: 20px;
  margin-left: 60px;

}

.loginbtn {
  width: 250px;
  height: 50px;
  margin-top: 20px;
  margin-left: 60px;
}
</style>