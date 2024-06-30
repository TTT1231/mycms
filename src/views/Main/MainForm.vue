<template>
    <div class="main">
        <el-container class="main-content">
            <el-aside width="200px">左边菜单</el-aside>
            <el-container class="page">
                <el-header>头部</el-header>
                <el-main>主页</el-main>
            </el-container>
        </el-container>
    </div>
    </template>
    <script>
    export default{}
    </script>
    <style scoped>
    .main{
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
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
    </style>