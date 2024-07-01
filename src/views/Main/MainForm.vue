<template>
    <div class="main">
        <el-container class="main-content">
            <el-aside :width="width">
                <nav-menu :collapse="collapse"></nav-menu>
       

            </el-aside>
            <el-container class="page">
                <el-header>
                    <img :src="imgsrc" @click="changedCollaps"> 
                    <div class="userInfo-right">  
                         <user-info></user-info>
                    </div>

                 
                </el-header>
                <el-main>主页</el-main>
            </el-container>
        </el-container>
    </div>
    </template>
    <script setup lang="ts">
    import { ref } from 'vue';
    import zhankai from '@/assets/zhankai.png'
    import zhedie from '@/assets/zhedie.png'
    import NavMenu from '@/components/nav-menu'
    import UserInfo from '@/components/user-info'
    const collapse=ref(false);
    const imgsrc=ref('')
    imgsrc.value=zhankai
    const width=ref('300px')
    const changedCollaps:()=>void=()=>{
        width.value==='70px'?width.value='300px':width.value='70px'
        collapse.value===true?collapse.value=false:collapse.value=true
        imgsrc.value===zhankai?imgsrc.value=zhedie:imgsrc.value=zhankai
       
    }
    </script>
    <style scoped>
    .main{
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        scrollbar-width: none;
    }
    .main-content,
    .page{
        height: 100%;
    }
    .page-content{
        height: calc(100%-48px);
    }
    .el-header,
    .el-footer{
        display: flex;
        color: #333;
        text-align: center;
        align-items: center;
    }
    .el-header{
        height: 48px;
    }
    .el-aside{
        overflow-x: hidden;
        overflow-y: auto;
        line-height: 200px;
        text-align: left;
        cursor: pointer;
        background-color: #001529;
        transition: width 0.3s linear;
    
    }
    &::-webkit-scrollbar{
        display: none; /*隐藏侧边栏布局*/
    }
    .el-main{
        color: #333;
        text-align: center;
        background-color: #f0f2f5;
    }
    .userInfo-right{
       margin-left: 90%;
    }
    </style>