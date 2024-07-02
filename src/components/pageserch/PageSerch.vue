<template>
    <div class="serchtable">
        <el-row>
            <el-col :span="7">
                <div class="grid-content">
                    id: <el-input v-model="id" style="width: 70px" placeholder="请输入" clearable />
                </div>
            </el-col>
            <el-col :span="7">
                <div class="grid-content">
                    id: <el-input v-model="id" style="width: 70px" placeholder="请输入" clearable />
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content">
                    id: <el-input v-model="id" style="width: 70px" placeholder="请输入" clearable />
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="7">
                <div class="grid-content">
                    id: <el-input v-model="id" style="width: 70px" placeholder="请输入" clearable />
                </div>
            </el-col>
            <el-col :span="7">
                <div class="grid-content">
                    id: <el-input v-model="id" style="width: 70px" placeholder="请输入" clearable />
                </div>
            </el-col>
            <el-col :span="8" :offset="2">
                <div class="grid-content">
                    <div class="qwe1">创建时间</div>
                    <div class="qwe2"><data-picker></data-picker></div>
                </div>
            </el-col>



        </el-row>

        <el-row>
            <el-col :span="1" :offset="20">
                <div class="grid-content">
                    <el-button type="primary" @click="select">查询</el-button>
                </div>
            </el-col>
            <el-col :span="1" :offset="1">
                <div class="grid-content">
                    <el-button type="primary" @click="reset">重置</el-button>
                </div>
            </el-col>
        </el-row>

    </div>

</template>
<script lang="ts" setup>
import {  ref } from 'vue'
import DataPicker from '../datapicker'
import loading from '../../service/EloadingService'
// import { defineProps } from 'vue';

// const props=defineProps({
//     loadingtarget:HTMLElement
// });

const id = ref()
const select = () => {
    loading.startLoading(document.body, '正在查询中请稍后.......', 1000)

}
const reset = () => {
    loading.startLoading(document.body, '正在重置中....', 500)

}
</script>
<style scoped>
.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;

}

.qwe1 {
    margin-top: 5px;
}

.qwe1,
.qwe2 {
    float: left;
}
</style>