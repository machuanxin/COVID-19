<template>
  <div :id="id" class="chart" :style="{height:chartHeight}" />
</template>
<script>
import echarts from '@/utils/echarts'
import resize from '@/utils/resize'

export default {
  mixins: [resize],
  props: {
    id: {
      type: String,
      default: 'chart'
    },
    type: {
      type: String,
      default: '1'
    }
  },
  data() {
    return {
      list: [],
      date: [],
      newCase: [],
      totalCase: [],
      newDeath: [],
      totalDeath: [],
      newCure: [],
      totalCure: [],
      cureRate: [],
      deathRate: [],
      option1: {
        title: {
          text: '湖北确诊病例图',
          fontSize: 5
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['新增确诊', '累计确诊']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          data: []
        },
        yAxis: {},
        series: [
          {
            name: '新增确诊',
            type: 'line',
            symbolSize: 1,
            data: []
          },
          {
            name: '累计确诊',
            type: 'line',
            symbolSize: 1,
            data: []
          }
        ]
      },
      option2: {
        title: {
          text: '死亡病例'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['新增死亡', '累计死亡']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          data: []
        },
        yAxis: {},
        series: [
          {
            name: '新增死亡',
            type: 'line',
            symbolSize: 2,
            data: []
          },
          {
            name: '累计死亡',
            type: 'line',
            symbolSize: 2,
            data: []
          }
        ]
      },
      option3: {
        title: {
          text: '治愈病例'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['新增治愈', '累计治愈']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          data: []
        },
        yAxis: {},
        series: [
          {
            name: '新增治愈',
            type: 'line',
            symbolSize: 2,
            data: []
          },
          {
            name: '累计治愈',
            type: 'line',
            symbolSize: 2,
            data: []
          }
        ]
      },
      option4: {
        title: {
          text: '治愈率/死亡率'
        },
        tooltip: {
          trigger: 'axis',
          formatter: '{a}: {c}%<br/>{a1}: {c1}%',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['治愈率', '死亡率']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          data: []
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value} %'
          },
          show: true
        },
        series: [
          {
            name: '治愈率',
            type: 'line',
            symbolSize: 1,
            data: []
          },
          {
            name: '死亡率',
            type: 'line',
            symbolSize: 1,
            data: []
          }
        ]
      },
      chartHeight: '500px'
    }
  },
  created() {
    this.chartHeight = document.body.clientHeight - 160 + 'px'
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))
      this.chart.showLoading()
      switch (this.type) {
        case '1':
          this.chart.setOption(this.option1)
          break
        case '2':
          this.chart.setOption(this.option2)
          break
        case '3':
          this.chart.setOption(this.option3)
          break
        case '4':
          this.chart.setOption(this.option4)
          break
      }
      var _this = this
      this.axios({
        method: 'GET',
        // url: 'http://localhost:8080/covid19/frontend/listhubei'
        url: 'http://47.97.211.164/covid19/frontend/listhubei'
      }).then(resp => {
        this.list = resp.data.list
        this.chart.hideLoading() // 隐藏 loading 效果
        this.list.map(function(item, index) {
          var processDate = item.date.slice(5)
          _this.date.push(processDate)
          _this.newCase.push(item.newCase)
          _this.totalCase.push(item.totalCase)
          _this.newDeath.push(item.newDeath)
          _this.totalDeath.push(item.totalDeath)
          _this.newCure.push(item.newCure)
          _this.totalCure.push(item.totalCure)
          _this.cureRate.push(item.cureRate)
          _this.deathRate.push(item.deathRate)
        })
        switch (this.type) {
          case '1':
            this.chart.setOption({
              xAxis: {
                data: _this.date
              },
              series: [
                {
                  name: '新增确诊',
                  data: _this.newCase
                },
                {
                  name: '累计确诊',
                  data: _this.totalCase
                }
              ]
            })
            break
          case '2':
            this.chart.setOption({
              xAxis: {
                data: _this.date
              },
              series: [
                {
                  name: '新增死亡',
                  data: _this.newDeath
                },
                {
                  name: '累计死亡',
                  data: _this.totalDeath
                }
              ]
            })
            break
          case '3':
            this.chart.setOption({
              xAxis: {
                data: _this.date
              },
              series: [
                {
                  name: '新增治愈',
                  data: _this.newCure
                },
                {
                  name: '累计治愈',
                  data: _this.totalCure
                }
              ]
            })
            break
          case '4':
            this.chart.setOption({
              xAxis: {
                data: _this.date
              },
              series: [
                {
                  name: '治愈率',
                  data: _this.cureRate
                },
                {
                  name: '死亡率',
                  data: _this.deathRate
                }
              ]
            })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.chart{
  width: 80%;
  height: 500px;
  padding: 50px;
  margin: auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
