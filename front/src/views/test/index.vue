<template>
  <div>
    <baidu-map class="map" ak="4IU3oIAMpZhfWZsMu7xzqBBAf6vMHcoa" :center="center" :zoom="zoom" @ready="handler" />
  </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
export default {
  name: 'Demo',
  components: {
    BaiduMap
  },
  data() {
    return {
      center: { lng: 114.305837, lat: 30.572601 },
      zoom: 11
    }
  },
  methods: {
    handler({ BMap, map }) {
    }
  }
}
</script>

<style scoped>
    .map {
        position:absolute;
        width: 100%;
        height: 100%;
    }
</style>

