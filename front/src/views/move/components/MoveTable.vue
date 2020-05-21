<template>
  <div :style="{height:rightHeight}">
    <div style="height:100px;padding:20px 0px;text-align:center">
      <div>
        <el-select v-model="date" size="mini" style="width:115px;" @change="changeDate">
          <el-option
            v-for="item in dateOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-radio v-model="level" label="1" @change="changeLevel">城市</el-radio>
        <el-radio v-model="level" label="2" @change="changeLevel">省份</el-radio>
      </div>
      <h4>离汉热门迁入地</h4>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      :style="{height:tableHeight,overflow:overflow}"
    >
      <el-table-column align="center" label="序号">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.$index+1 }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column v-if="flag" align="center" label="城市">
        <template slot-scope="scope">{{ scope.row.city }}</template>
      </el-table-column>
      <el-table-column v-if="!flag" align="center" label="省份">
        <template slot-scope="scope">{{ scope.row.province }}</template>
      </el-table-column>
      <el-table-column align="center" label="比例">
        <template slot-scope="scope">{{ scope.row.rate }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import eventBus from '@/eventBus.js'
export default {
  data() {
    return {
      list: [],
      listLoading: true,
      flag: true,
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
      date: '1',
      level: '1',
      isCityOrProvince: 'city',
      tableHeight: '558px',
      rightHeight: '608px',
      overflow: 'auto'
    }
  },
  mounted() {
    this.getDataList()
    this.rightHeight = document.body.clientHeight - 50 + 'px'
    this.tableHeight = document.body.clientHeight - 150 + 'px'
  },
  methods: {
    getDataList() {
      var obj = {}
      obj = this.dateOptions.find(item => {
        return item.value === this.date
      })
      this.date = obj.label
      this.axios({
        method: 'GET',
        url:
          'http://47.97.211.164/covid19/frontend/listcitymove?mDate=2020-01-01'
      }).then(resp => {
        this.list = resp.data.list
        this.listLoading = false
      })
    },
    changeList() {
      var _this = this
      this.axios({
        method: 'GET',
        url:
           'http://47.97.211.164/covid19/frontend/list' +
          _this.isCityOrProvince +
          'move' +
          '?mDate=' +
          _this.date
      }).then(resp => {
        this.list = resp.data.list
        this.listLoading = false
        eventBus.$emit('DataSet', this.list)
      })
    },
    changeLevel() {
      this.flag = !this.flag
      if (this.isCityOrProvince === 'city') {
        this.isCityOrProvince = 'province'
      } else {
        this.isCityOrProvince = 'city'
      }
      this.changeList()
    },
    changeDate() {
      var obj = {}
      obj = this.dateOptions.find(item => {
        return item.value === this.date
      })
      this.date = obj.label
      this.changeList()
    }
  }
}
</script>

