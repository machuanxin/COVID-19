<template>
  <div :id="id" :class="className" />
</template>

<script>
import resize from '@/utils/resize'
import echarts from '@/utils/echarts'
import eventBus from '@/eventBus.js'

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
    }
  },
  data() {
    return {
      chart: null,
      list: [],
      citys: [],
      dateOptions: [
        {
          value: '1',
          label: '2020-01-01'
        },
        {
          value: '2',
          label: '2020-01-02'
        },
        {
          value: '3',
          label: '2020-01-03'
        },
        {
          value: '4',
          label: '2020-01-04'
        },
        {
          value: '5',
          label: '2020-01-05'
        },
        {
          value: '6',
          label: '2020-01-06'
        },
        {
          value: '7',
          label: '2020-01-07'
        },
        {
          value: '8',
          label: '2020-01-08'
        },
        {
          value: '9',
          label: '2020-01-09'
        },
        {
          value: '10',
          label: '2020-01-10'
        },
        {
          value: '11',
          label: '2020-01-11'
        },
        {
          value: '12',
          label: '2020-01-12'
        },
        {
          value: '13',
          label: '2020-01-13'
        },
        {
          value: '14',
          label: '2020-01-14'
        },
        {
          value: '15',
          label: '2020-01-15'
        },
        {
          value: '16',
          label: '2020-01-16'
        },
        {
          value: '17',
          label: '2020-01-17'
        },
        {
          value: '18',
          label: '2020-01-18'
        },
        {
          value: '19',
          label: '2020-01-19'
        },
        {
          value: '20',
          label: '2020-01-20'
        },
        {
          value: '21',
          label: '2020-01-21'
        },
        {
          value: '22',
          label: '2020-01-22'
        },
        {
          value: '23',
          label: '2020-01-23'
        }
      ],
      provinces: [
        {
          name: '湖北省',
          value: [114.305393, 30.593099],
          symbolSize: 8,
          itemStyle: { normal: { color: '#FF0000' }}
        },
        {
          name: '湖南省',
          value: [112.994913, 28.195675],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '北京市',
          value: [116.409363, 39.921107],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '重庆市',
          value: [106.546939, 29.586586],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '江西省',
          value: [115.86401, 28.675766],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '上海市',
          value: [121.475941, 31.22753],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '广东省',
          value: [113.311098, 23.120979],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '四川省',
          value: [104.101077, 30.660793],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '河南省',
          value: [113.700406, 34.752491],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '安徽省',
          value: [117.273685, 31.844248],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '陕西省',
          value: [108.961988, 34.322468],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '浙江省',
          value: [120.207461, 30.251585],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '江苏省',
          value: [118.834042, 32.064162],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '广西省',
          value: [108.384377, 22.813013],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '黑龙江省',
          value: [126.6175, 45.769003],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '吉林省',
          value: [125.349003, 43.863567],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '辽宁省',
          value: [123.442349, 41.715715],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '内蒙古自治区',
          value: [111.723892, 40.847549],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '新疆维吾尔族自治区',
          value: [87.591668, 43.834925],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '山西省',
          value: [112.56272, 37.863317],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '甘肃省',
          value: [103.869845, 36.064434],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '宁夏回族自治区',
          value: [106.258043, 38.498336],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '西藏自治区',
          value: [91.131315, 29.660993],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '天津市',
          value: [117.21499, 39.13455],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '山东省',
          value: [117.126399, 36.694993],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '云南省',
          value: [102.827945, 24.922454],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '贵州省',
          value: [106.690622, 26.612504],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '福建省',
          value: [119.329916, 26.073679],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '海南省',
          value: [110.337599, 20.0359],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '青海省',
          value: [101.787321, 36.641457],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        },
        {
          name: '河北省',
          value: [114.538776, 38.0374],
          symbolSize: 2,
          itemStyle: { normal: { color: '#F58158' }}
        }
      ],
      date: '1',
      moveOption: {
        backgroundColor: '#404a59',
        title: {
          text: '1月1日至1月23日武汉人口迁徙图',
          left: 240,
          top: 30,
          textStyle: {
            color: '#fff'
          }
        },
        geo: {
          map: 'china',
          left: '15%',
          roam: true,
          center: [114.305393, 35.593099],
          itemStyle: {
            normal: {
              areaColor: '#323c48',
              borderColor: '#404a59'
            },
            emphasis: {
              areaColor: '#2a333d'
            }
          },
          label: {
            emphasis: {
              show: true,
              textStyle: { color: '#fff' }
            }
          }
        },
        series: [
          {
            name: '地点',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            rippleEffect: {
              brushType: 'stroke'
            },
            label: {
              show: true,
              position: 'right',
              formatter: '{b}',
              color: '#fff'
            },
            symbolSize: 2,
            showEffectOn: 'render',
            data: []
          },
          {
            name: '线路',
            type: 'lines',
            coordinateSystem: 'geo',
            large: true,
            effect: {
              show: true,
              constantSpeed: 50,
              symbol: 'pin',
              symbolSize: 3,
              trailLength: 0
            },
            lineStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#58B3CC'
                    },
                    {
                      offset: 1,
                      color: '#F58158'
                    }
                  ],
                  false
                ),
                width: 3,
                opacity: 0.4,
                curveness: 0.1
              }
            },
            data: []
          }
        ]
      },
      moveLines: []
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
  created() {
    eventBus.$on('DataSet', (list) => {
      this.list = list
      var _this = this
      this.listLoading = false
      this.citys = [{
        name: '武汉市',
        value: [114.305393, 30.593099],
        symbolSize: 8,
        itemStyle: { normal: { color: '#FF0000' }}
      }]
      if (this.list.length > 31) {
        this.list.map(function(item, index) {
          _this.moveLines.push({
            fromName: '武汉市',
            toName: item.city,
            coords: [[114.305393, 30.593099], _this.getCityCoords(item.city)]
          })
          _this.citys.push({
            name: item.city,
            value: _this.getCityCoords(item.city),
            symbolSize: 2,
            itemStyle: { normal: { color: '#F58158' }}
          })
        })
        this.chart.setOption({
          geo: {
            center: [114.305393, 35.593099]
          },
          series: [
            {
              name: '地点',
              data: _this.citys
            },
            {
              name: '线路',
              data: _this.moveLines
            }
          ]
        })
      } else {
        this.list.map(function(item, index) {
          _this.moveLines.push({
            fromName: '武汉市',
            toName: item.province,
            coords: [
              [114.305393, 30.593099],
              _this.getProvinceCoords(item.province)
            ]
          })
        })
        this.chart.setOption({
          geo: {
            center: [114.305393, 35.593099]
          },
          series: [
            {
              name: '地点',
              data: _this.provinces
            },
            {
              name: '线路',
              data: _this.moveLines
            }
          ]
        })
      }
      _this.moveLines = []
    })
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))
      // this.chart.resize({ height: window.innerHeight })
      var obj = {}
      obj = this.dateOptions.find(item => {
        return item.value === this.date
      })
      this.date = obj.label
      this.chart.setOption(this.moveOption)
      var _this = this
      this.axios({
        method: 'GET',
        url:
          'http://47.97.211.164/covid19/frontend/listcitymove?mDate=2020-01-01'
      }).then(resp => {
        this.list = resp.data.list
        this.listLoading = false
        this.citys = [{
          name: '武汉市',
          value: [114.305393, 30.593099],
          symbolSize: 8,
          itemStyle: { normal: { color: '#FF0000' }}
        }]
        this.list.map(function(item, index) {
          _this.moveLines.push({
            fromName: '武汉市',
            toName: item.city,
            coords: [[114.305393, 30.593099], _this.getCityCoords(item.city)]
          })
          _this.citys.push({
            name: item.city,
            value: _this.getCityCoords(item.city),
            symbolSize: 2,
            itemStyle: { normal: { color: '#F58158' }}
          })
        })
        this.chart.setOption({
          series: [
            {
              name: '地点',
              data: _this.citys
            },
            {
              name: '线路',
              data: _this.moveLines
            }
          ]
        })
        _this.moveLines = []
      })
    },
    getCityCoords(cityName) {
      switch (cityName) {
        case '孝感市':
          return [113.93932, 30.986958]
        case '黄冈市':
          return [114.957252, 30.507163]
        case '鄂州市':
          return [114.845719, 30.348722]
        case '咸宁市':
          return [114.300923, 29.87061]
        case '荆州市':
          return [112.252993, 30.33037]
        case '黄石市':
          return [114.981138, 30.174241]
        case '襄阳市':
          return [112.133132, 32.045653]
        case '仙桃市':
          return [113.457657, 30.368493]
        case '随州市':
          return [113.40842, 31.70094]
        case '荆门市':
          return [112.224211, 31.051633]
        case '宜昌市':
          return [111.316698, 30.709369]
        case '十堰市':
          return [110.821776, 32.637495]
        case '天门市':
          return [113.172409, 30.647254]
        case '长沙市':
          return [112.994913, 28.195675]
        case '北京市':
          return [116.409363, 39.921107]
        case '恩施土家族自治州':
          return [109.494593, 30.295403]
        case '信阳市':
          return [114.110707, 32.148123]
        case '潜江市':
          return [112.900878, 30.408357]
        case '重庆市':
          return [106.546939, 29.586586]
        case '南阳市':
          return [112.550602, 33.004797]
        case '驻马店市':
          return [114.030767, 33.005732]
        case '岳阳市':
          return [113.144687, 29.376775]
        case '南昌市':
          return [115.86401, 28.675766]
        case '周口市':
          return [114.674735, 33.621729]
        case '九江市':
          return [116.006077, 29.680217]
        case '常德市':
          return [111.674404, 29.046339]
        case '安庆市':
          return [117.099253, 30.534938]
        case '深圳市':
          return [114.030057, 22.562341]
        case '上海市':
          return [121.475941, 31.22753]
        case '广州市':
          return [113.311098, 23.120979]
        case '成都市':
          return [104.101077, 30.660793]
        case '郑州市':
          return [113.700406, 34.752491]
        case '商丘市':
          return [115.679696, 34.412102]
        case '合肥市':
          return [117.273685, 31.844248]
        case '西安市':
          return [108.961988, 34.322468]
        case '杭州市':
          return [120.207461, 30.251585]
        case '阜阳市':
          return [115.859563, 32.900746]
        case '南京市':
          return [118.834042, 32.064162]
        case '天津市':
          return [117.21499, 39.13455]
        case '厦门市':
          return [118.141278, 24.50014]
        case '金华市':
          return [119.671263, 29.103325]
        case '六安市':
          return [116.524687, 31.753735]
        case '宁波市':
          return [121.609572, 29.873585]
        case '邵阳市':
          return [111.488805, 27.222658]
        case '益阳市':
          return [112.37589, 28.56225]
        case '哈尔滨市':
          return [126.538161, 45.809627]
        case '娄底市':
          return [112.008977, 27.723675]
        case '三亚市':
          return [109.513961, 18.277412]
        case '佛山市':
          return [113.145182, 23.025098]
        case '东莞市':
          return [113.790613, 23.032629]
        case '福州市':
          return [119.33624, 26.070564]
        case '海口市':
          return [110.341624, 20.033183]
        case '贵阳市':
          return [106.686023, 26.625423]
        case '昆明市':
          return [102.843467, 24.904627]
        case '苏州市':
          return [120.637255, 31.302578]
        case '青岛市':
          return [120.402681, 36.099761]
        case '无锡市':
          return [120.329505, 31.523438]
        case '石家庄市':
          return [114.547975, 38.064678]
        case '新乡市':
          return [113.929573, 35.31718]
        case '漯河市':
          return [114.036067, 33.590597]
        case '许昌市':
          return [113.847549, 34.029945]
        case '南宁市':
          return [108.393576, 22.815145]
        case '济南市':
          return [117.132148, 36.6899]
        case '株洲市':
          return [113.115753, 27.83459]
        case '开封市':
          return [114.314595, 34.793874]
        case '邯郸市':
          return [114.509985, 36.633116]
        case '赣州市':
          return [114.944532, 25.843501]
        case '上饶市':
          return [117.951188, 28.464691]
        case '宜春市':
          return [117.951188, 28.464691]
        case '太原市':
          return [112.569044, 37.855112]
        case '温州市':
          return [120.803065, 27.949021]
        case '泉州市':
          return [118.665771, 24.932913]
        case '衡阳市':
          return [112.591672, 26.911431]
        case '洛阳市':
          return [112.474947, 34.684127]
      }
    },
    getProvinceCoords(provinceName) {
      switch (provinceName) {
        case '黑龙江省':
          return [126.6175, 45.769003]
        case '吉林省':
          return [125.349003, 43.863567]
        case '辽宁省':
          return [123.442349, 41.715715]
        case '内蒙古自治区':
          return [111.723892, 40.847549]
        case '山西省':
          return [112.56272, 37.863317]
        case '陕西省':
          return [108.961988, 34.322468]
        case '山东省':
          return [117.126399, 36.694993]
        case '安徽省':
          return [117.273685, 31.844248]
        case '江苏省':
          return [118.834042, 32.064162]
        case '重庆市':
          return [106.546939, 29.586586]
        case '北京市':
          return [116.409363, 39.921107]
        case '江西省':
          return [115.86401, 28.675766]
        case '福建省':
          return [119.329916, 26.073679]
        case '上海市':
          return [121.475941, 31.22753]
        case '广东省':
          return [113.311098, 23.120979]
        case '广西壮族自治区':
          return [108.384377, 22.813013]
        case '新疆维吾尔族自治区':
          return [87.591668, 43.834925]
        case '海南省':
          return [110.337599, 20.0359]
        case '西藏自治区':
          return [91.131315, 29.660993]
        case '青海省':
          return [101.787321, 36.641457]
        case '宁夏回族自治区':
          return [106.258043, 38.498336]
        case '甘肃省':
          return [103.869845, 36.064434]
        case '河南省':
          return [113.700406, 34.752491]
        case '湖南省':
          return [112.994913, 28.195675]
        case '贵州省':
          return [106.690622, 26.612504]
        case '云南省':
          return [102.827945, 24.922454]
        case '湖北省':
          return [114.305393, 30.593099]
        case '浙江省':
          return [120.207461, 30.251585]
        case '四川省':
          return [104.101077, 30.660793]
        case '河北省':
          return [114.545675, 38.036035]
        case '天津市':
          return [117.21499, 39.13455]
      }
    }
  }
}
</script>

