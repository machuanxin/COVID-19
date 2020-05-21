<template>
  <div>
    <baidu-map :style="{width:mapParams.width,height:mapParams.height}" ak="4IU3oIAMpZhfWZsMu7xzqBBAf6vMHcoa" :center="mapParams.center" :zoom="mapParams.zoom" @ready="handler">
      <!--缩放-->
      <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT" />
      <!--选项卡-->
      <bm-control anchor="BMAP_ANCHOR_TOP_RIGHT">
        <el-button @click="showTemporaryHospital">二神山及方舱医院</el-button>
        <el-button @click="showFeverClinic">发热门诊医疗机构</el-button>
        <el-button @click="showMedicalInstitution">定点救治医疗机构</el-button>
        <el-button @click="showDetectionInstitution">定点核酸检测医院</el-button>
      </bm-control>
    </baidu-map>
  </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmControl from 'vue-baidu-map/components/controls/Control'
import BmNavigation from 'vue-baidu-map/components/controls/Navigation'
import hospitalimgUrl from '@/assets/icon/hospital.png'
import huoshenshanUrl from '@/assets/icon/huoshenshan.png'
import leishenshanUrl from '@/assets/icon/leishenshan.png'
export default {
  name: 'Demo',
  components: {
    BaiduMap,
    BmControl,
    BmNavigation
  },
  data() {
    return {
      mapParams: {
        center: { lng: 114.305837, lat: 30.572601 },
        zoom: 11,
        width: '1070px',
        height: '608px'
      },
      list: [],
      BMap: '',
      map: '',
      feverClinicList: [],
      medicalInstitutionList: [],
      detectionInstitutionList: [],
      temporaryHospitalList: [],
      opts: {
        width: 0, // 信息窗口宽度
        height: 0, // 信息窗口高度
        enableMessage: true// 设置允许信息窗发送短息
      }
    }
  },
  created() {
    this.getHospitalList()
  },
  // mounted() {
  //   this.mapHeight = document.body.clientHeight - 50 + 'px'
  // },
  methods: {
    handler({ BMap, map }) {
      // 鼠标缩放
      map.enableScrollWheelZoom(true)
      this.mapParams.width = document.body.clientWidth - 210 + 'px'
      this.mapParams.height = document.body.clientHeight - 50 + 'px'
      // 赋值，方便调用，本节被用到
      this.BMap = BMap
      this.map = map
      this.$notify({
        title: '数据说明',
        message: '2020年1月20日，为进一步方便市民群众看病就医，武汉市卫生健康委在官网公布了' +
        '全市发热门诊医疗机构和定点救治医疗机构名单。全市发热门诊61家。其中，中心城区41家，新城区20家；市管医院16家。' +
        '全市定点医疗机构9家。其中，中心城区定点医疗机构为武汉市金银潭医院、武汉市肺科医院、武汉市汉口医院；远城区定点医疗机构为各区人民医院。' +
        '组建了25人的省市联合医疗救治专家组。其中，同济医院5人，协和医院5人，湖北省人民医院3人，中南医院4人，武汉市第一医院1人，武汉市中心医院1人，' +
        '武汉市第三医院1人，武汉市第四医院1人，武汉儿童医院2人，武汉市金银潭医院2人。',
        position: 'bottom-right',
        duration: '10000'
      })
    },
    getHospitalList() {
      var _this = this
      this.axios({
        method: 'GET',
        url:
          'http://47.97.211.164/covid19/frontend/listhospital'
      }).then(resp => {
        this.list = resp.data.list
        this.list.map(function(item, index) {
          if (item.feverClinic === 1) {
            _this.feverClinicList.push(item)
          }
          if (item.designatedMedicalInstitution === 1) {
            _this.medicalInstitutionList.push(item)
          }
          if (item.designatedDetectionInstitution === 1) {
            _this.detectionInstitutionList.push(item)
          }
          if (index > 62) {
            _this.temporaryHospitalList.push(item)
          }
        })
      }).catch(resp => {
        alert('获取数据失败！')
      })
    },
    showTemporaryHospital() {
      this.map.clearOverlays()
      var icon = new this.BMap.Icon(hospitalimgUrl, new this.BMap.Size(30, 38))
      var huoshenshan = new this.BMap.Icon(huoshenshanUrl, new this.BMap.Size(40, 40))
      var leishenshan = new this.BMap.Icon(leishenshanUrl, new this.BMap.Size(40, 45))
      for (var i = 0; i < this.temporaryHospitalList.length; i++) {
        var point = new this.BMap.Point(this.temporaryHospitalList[i].longitude, this.temporaryHospitalList[i].latitude)
        if (i === 0) {
          var marker = new this.BMap.Marker(point, { icon: huoshenshan }) // 创建标注
        } else if (i === 1) {
          marker = new this.BMap.Marker(point, { icon: leishenshan }) // 创建标注
        } else {
          marker = new this.BMap.Marker(point, { icon: icon }) // 创建标注
        }
        var content = this.temporaryHospitalList[i].hospitalName
        this.map.addOverlay(marker) // 将标注添加到地图中
        this.addClickHandler(content, marker)
      }
    },
    showFeverClinic() {
      this.map.clearOverlays()
      var icon = new this.BMap.Icon(hospitalimgUrl, new this.BMap.Size(30, 38))
      for (var i = 0; i < this.feverClinicList.length; i++) {
        var point = new this.BMap.Point(this.feverClinicList[i].longitude, this.feverClinicList[i].latitude)
        var marker = new this.BMap.Marker(point, { icon: icon }) // 创建标注
        var content = this.feverClinicList[i].hospitalName
        this.map.addOverlay(marker) // 将标注添加到地图中
        this.addClickHandler(content, marker)
      }
    },
    showMedicalInstitution() {
      this.map.clearOverlays()
      var icon = new this.BMap.Icon(hospitalimgUrl, new this.BMap.Size(30, 38))
      for (var i = 0; i < this.medicalInstitutionList.length; i++) {
        var point = new this.BMap.Point(this.medicalInstitutionList[i].longitude, this.medicalInstitutionList[i].latitude)
        var marker = new this.BMap.Marker(point, { icon: icon }) // 创建标注
        var content = this.medicalInstitutionList[i].hospitalName
        this.map.addOverlay(marker) // 将标注添加到地图中
        this.addClickHandler(content, marker)
      }
    },
    showDetectionInstitution() {
      this.map.clearOverlays()
      var icon = new this.BMap.Icon(hospitalimgUrl, new this.BMap.Size(30, 38))
      for (var i = 0; i < this.detectionInstitutionList.length; i++) {
        var point = new this.BMap.Point(this.detectionInstitutionList[i].longitude, this.detectionInstitutionList[i].latitude)
        var marker = new this.BMap.Marker(point, { icon: icon }) // 创建标注
        var content = this.detectionInstitutionList[i].hospitalName
        this.map.addOverlay(marker) // 将标注添加到地图中
        this.addClickHandler(content, marker)
      }
    },
    addClickHandler(content, marker) {
      var _this = this
      marker.addEventListener('click', function(e) {
        var point = new _this.BMap.Point(e.target.getPosition().lng, e.target.getPosition().lat)
        var infoWindow = new _this.BMap.InfoWindow(content, _this.opts) // 创建信息窗口对象
        this.map.openInfoWindow(infoWindow, point) // 开启信息窗口
      }
      )
    }
  }
}
</script>

<style scoped>
    /* .map {
        position:absolute;
        width: 100%;
        height: 100%;
    } */
</style>
