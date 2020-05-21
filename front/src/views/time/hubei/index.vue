<template>
  <div class="chart-container">
    <hubei-time-map height="100%" width="100%" />
  </div>
</template>

<script>
import HubeiTimeMap from '../components/HubeiTimeMap'

export default {
  name: 'Hubei',
  components: { HubeiTimeMap }
}
</script>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 50px);
}
</style>

