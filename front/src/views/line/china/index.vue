<template>
  <div>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
        <keep-alive>
          <china-case v-if="activeName==item.key" :type="item.key" />
        </keep-alive>
      </el-tab-pane>
      <tip />
    </el-tabs>
  </div>
</template>

<script>
import ChinaCase from '../components/ChinaCase'
import Tip from '../components/Tip'

export default {
  name: 'China',
  components: { ChinaCase, Tip },
  data() {
    return {
      activeName: '1',
      tabMapOptions: [
        { label: '确诊病例', key: '1' },
        { label: '重症病例', key: '2' },
        { label: '死亡病例', key: '3' },
        { label: '治愈病例', key: '4' },
        { label: '疑似病例', key: '5' },
        { label: '治愈率/死亡率', key: '6' }
      ],
      createdTimes: 0
    }
  },
  watch: {
    activeName(val) {
      this.$router.push(`${this.$route.path}?tab=${val}`)
    }
  },
  created() {
    // init the default selected tab
    const tab = this.$route.query.tab
    if (tab) {
      this.activeName = tab
    }
  }
}
</script>

