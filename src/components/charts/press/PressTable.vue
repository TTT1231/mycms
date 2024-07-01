<template>

    <div ref="echartDivRef" :style="{ width: '400px', height: '360px' }"></div>

</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from 'vue'
// 1.导如 echarts    
import * as echarts from 'echarts'
// 2.导入 echarts对应的类型    
import type { ECharts, EChartsOption } from 'echarts'
export default defineComponent({
    name: 'EchartZheXian',
    setup() {
        // 3.定义变量，同时指定了变量的类型为：HTMLElement
        const echartDivRef = ref<HTMLElement>()
        console.log(echartDivRef)
        // 4.组件加载完成
        onMounted(() => {
            // 5.初始化echart实例（用了as类型断言明确具体类型）
            const echartInstance: ECharts = echarts.init(echartDivRef.value as HTMLElement)
            // 6.echart 图表配置，通知指定类型为：EChartsOption
            const options: EChartsOption = {
                title: {
                    text: "压力表",
                },
                tooltip: {
                    // 触发类型，可选为 'item'、'axis'。'item' 触发只在某个图形上有效（散点图，柱状图）。'axis' 则在类目数据上有效（柱状图，折线图，饼图）。  
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c}%'
                },
               series: [
                    {
                        name: 'Pressure',
                        type: 'gauge',
                        progress: {
                            show: true
                        },
                        detail: {
                            valueAnimation: true,
                            formatter: '{value}'
                        },
                        data: [
                            {
                                value: 50,
                                name: 'SCORE'
                            }
                        ]
                    }
                ]
            }
            // 7.给echart 实例添加图表配置
            echartInstance.setOption(options)
        })
        return { echartDivRef }
    }
})

</script>