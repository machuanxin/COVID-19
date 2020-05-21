<template>
  <div class="container">
    <el-row>
      <el-col :span="17"><move-chart :style="{height:chartHeight}" /></el-col>
      <el-col :span="7"><move-table /></el-col>
    </el-row>
  </div>
</template>

<script>
import MoveTable from './components/MoveTable'
import MoveChart from './components/MoveChart'

export default {
  name: 'Move',
  components: { MoveChart, MoveTable },
  data() {
    return {
      chartHeight: ''
    }
  },
  created() {
    this.chartHeight = document.body.clientHeight - 50 + 'px'
  }
}
</script>

<style scoped>
.container{
  position: relative;
  width: 100%;
}
</style>

