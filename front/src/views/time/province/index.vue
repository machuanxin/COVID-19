<template>
  <div class="chart-container">
    <province-time-map height="100%" width="100%" />
  </div>
</template>

<script>
import ProvinceTimeMap from '../components/ProvinceTimeMap'

export default {
  name: 'Province',
  components: { ProvinceTimeMap }
}
</script>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 50px);
}
</style>

