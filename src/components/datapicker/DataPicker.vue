<template>
    <div class="demo-date-picker">
        <div class="block">
            <el-date-picker v-model="value1" type="date" placeholder="请选择日期" size="default" />
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
    name:'DataPicker',
    setup() {
        const value1 = ref('')
        return{value1}
    }
}


</script>

<style scoped>
.demo-date-picker {
    display: flex;
    width: 100%;
    height: 50px;
    padding: 0;
    flex-wrap: wrap;
}

.demo-date-picker .block {
    padding: 0px 0 0 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    flex: 1;
}

.demo-date-picker .block:last-child {
    border-right: none;
}

.demo-date-picker .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
}
</style>