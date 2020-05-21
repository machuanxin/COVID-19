<template>
  <div class="chart-container">
    <resume-work-index height="100%" width="95%" />
  </div>
</template>

<script>
import ResumeWorkIndex from './components/ResumeWorkIndex'

export default {
  name: 'Work',
  components: { ResumeWorkIndex }
}
</script>

<style scoped>
.chart-container{
  position: absolute;
  width: 100%;
  /* height: calc(100vh - 60px); */
  height: 100%;
}
</style>
