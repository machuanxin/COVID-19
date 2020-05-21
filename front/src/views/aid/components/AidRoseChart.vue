<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from '@/utils/echarts'
import resize from '@/utils/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))
      this.chart.setOption(
        {
          title: {
            text: '各地援助湖北医疗队员人数',
            subtext: '附：军队援助武汉4000人',
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{b} : {c}' + '人' + ' ({d}%)'
          },
          legend: {
            left: 'center',
            top: 'bottom',
            data: [
              '江苏',
              '广东',
              '辽宁',
              '浙江',
              '山东',
              '重庆',
              '上海',
              '黑龙江',
              '山西',
              '湖南',
              '四川',
              '贵州',
              '福建',
              '安徽',
              '天津',
              '河南',
              '北京',
              '江西',
              '吉林',
              '云南',
              '河北',
              '广西',
              '陕西',
              '海南',
              '内蒙古',
              '宁夏',
              '甘肃',
              '新疆',
              '青海',
              '西藏'
            ]
          },
          toolbox: {
            show: true,
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              magicType: {
                show: true,
                type: ['pie', 'funnel']
              },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
          series: [
            {
              name: '',
              type: 'pie',
              radius: [2, 200],
              center: ['50%', '50%'],
              roseType: 'radius',
              label: {
                show: true,
                formatter: function(params) {
                  return params.data.name + params.data.value + '人'
                }
              },
              emphasis: {
                label: {
                  show: true
                }
              },
              data: [
                { value: 2757, name: '江苏' },
                { value: 2452, name: '广东' },
                { value: 2045, name: '辽宁' },
                { value: 1985, name: '浙江' },
                { value: 1782, name: '山东' },
                { value: 1614, name: '重庆' },
                { value: 1608, name: '上海' },
                { value: 1534, name: '黑龙江' },
                { value: 1509, name: '山西' },
                { value: 1458, name: '湖南' },
                { value: 1458, name: '四川' },
                { value: 1401, name: '贵州' },
                { value: 1366, name: '福建' },
                { value: 1324, name: '安徽' },
                { value: 1289, name: '天津' },
                { value: 1262, name: '河南' },
                { value: 1215, name: '北京' },
                { value: 1201, name: '江西' },
                { value: 1179, name: '吉林' },
                { value: 1132, name: '云南' },
                { value: 1090, name: '河北' },
                { value: 961, name: '广西' },
                { value: 919, name: '陕西' },
                { value: 843, name: '海南' },
                { value: 798, name: '内蒙古' },
                { value: 787, name: '宁夏' },
                { value: 776, name: '甘肃' },
                { value: 494, name: '新疆' },
                { value: 239, name: '青海' },
                { value: 3, name: '西藏' }
              ]
            }
          ]
        }
      )
    }
  }
}
</script>
