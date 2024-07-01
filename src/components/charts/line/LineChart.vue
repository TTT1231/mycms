<template>
    
    <div ref="echartDivRef" :style="{ width: '100%', height: '360px' }"></div>

</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from 'vue'
// 1.导如 echarts    
import * as echarts from 'echarts'
// 2.导入 echarts对应的类型    
import type { ECharts, EChartsOption } from 'echarts'
export default defineComponent({
  name: 'LineChart',
  setup() {
    // 3.定义变量，同时指定了变量的类型为：HTMLElement
    const echartDivRef = ref<HTMLElement>()

    // 4.组件加载完成
    onMounted(() => {
      // 5.初始化echart实例（用了as类型断言明确具体类型）
      const echartInstance:ECharts = echarts.init(echartDivRef.value as HTMLElement)
      // 6.echart 图表配置，通知指定类型为：EChartsOption
      const options: EChartsOption = {
        title: {
          text: "折线图",
        },
          tooltip: {
               // 触发类型，可选为 'item'、'axis'。
               //'item' 触发显示提示框,主要在散点图，饼图等无类目轴的图表使用
               //'axis' 坐标轴触发显示提示框,主要在柱状图、折线图等会使用类目轴的图表重使用
              // trigger: 'item',
        
          },
        legend: {
          data: ["销量","价格"],
        },
        xAxis: {
          type: 'category',
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {
              min: 0, // 设置 Y 轴的最小值  
              max: 80, // 设置 Y 轴的最大值（这里假设最大值为50，你可以根据需要调整）  
              interval: 10, // 设置 Y 轴的刻度间隔（这里假设为10，你可以根据需要调整）  
              // axisLabel: {//不想添加单位注释掉即可
              //     formatter: '{value} 单位' // 格式化 Y 轴的标签，例如添加单位  
              // }
          },
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
          {
              name:"价格",
              type:'line',
              data: [20, 30, 40, 50, 60, 70],
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