<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: #fff;
}
::-webkit-scrollbar-thumb {
    border-radius:5px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: rgba(0, 0, 0, .1)
}
</style>
