<template>
  <div class="nav-menu">
    <div class="logo" @click="mainpush">
      <img src="~@/assets/mylocal.png" alt="logo">
      <span v-if="!collapse" class="title">我的管理系统主页</span>
    </div>
    <el-menu background-color="#0c2135" class="el-menu-vertical-vertical" default-active="1" text-color="white"
      active-text-color="'#0a60bd'" :collapse="collapse" font-size="20px">
      <el-sub-menu index="1">
        <template #title>
          <img src="~@/assets/chart.png">
          <span>图表</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="10"><span @click="linepush" class="pointer" :style="{width}">线图</span></el-menu-item>
          <el-menu-item index="11"><span @click="piepush" class="pointer" :style="{width}">饼图</span></el-menu-item>
          <el-menu-item index="12"><span @click="funnelpush" class="pointer" :style="{width}">漏斗图</span></el-menu-item>
          <el-menu-item index="13"><span @click="presspush" class="pointer" :style="{width}">压力图</span></el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <img src="../../assets/setting .png">
          <span>系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="20"><span @click="pageserchpush" class="pointer" :style="{width}">用户设置</span></el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { defineProps,withDefaults } from 'vue';
import { useRouter } from 'vue-router';
interface PropsType{
  collapse:boolean,
  width:string
}
const router = useRouter()
withDefaults(defineProps<PropsType>(),{
  collapse:false,
  width:'300px'
})
const linepush=()=>{
   router.push('/main/line')
}
const piepush=()=>{
   router.push('/main/pie')
}
const funnelpush=()=>{
   router.push('/main/funnel')
}
const presspush=()=>{
   router.push('/main/press')
}
const pageserchpush=()=>{
  router.push('/main/serch')
}
const mainpush=()=>{
  router.push('/main')
}
</script>
<style scoped>
.nav-menu {
    height: 100%;
    background-color: #001529;
}
.nav-menu .logo{
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
}
.nav-menu .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
}
.el-menu{
  border-right: none;
}
.el-submenu {
    background-color: #168af6;
}

.el-submenu .el-menu-item {
    padding-left: 50px;
    background-color: #e6ebef00;
}

.el-menu-item.is-active {
    color: #fff;
    background-color: #0a60bd;
}
.pointer:hover{
  cursor: pointer;

}
.el-menu-vertical:not(.el-menu--collapse) {
    width: 100%;
    height: calc(100%-48px);
}
.el-menu--collapse {  
  width: 50px; /* 自定义折叠状态下的宽度 */  
}
</style>