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
import { useStore } from 'vuex'
import { ref } from 'vue';
import router from '@/router';
import loading from '@/service/EloadingService';
const account = ref('');
const pw = ref('');
const store = useStore();
const openFullScreen2 = async () => {
  const datacode = await store.dispatch('LoginService/accountLoginAction', `/user/select/${account.value}/${pw.value}`)
  loading.startLoading(document.body, "登陆中请稍后......", 1000)
  //Module.dispatch
  setTimeout(() => {
    if (datacode === 1) {
      router.push('/main')
    } else alert("登录失败")

  }, 1300)
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