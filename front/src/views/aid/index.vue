<template>
  <div class="chart-container">
    <aid-rose-chart height="100%" width="100%" />
  </div>
</template>

<script>
import AidRoseChart from './components/AidRoseChart'

export default {
  name: 'Aid',
  components: { AidRoseChart }
}
</script>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>

