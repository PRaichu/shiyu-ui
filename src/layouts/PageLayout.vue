<template>
  <div class="shiyu-page-container">
    <div class="shiyu-page-container-blank" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'PageLayout'
}
</script>

<style lang="scss" scoped>
.shiyu-page-container{
  width: 100%;
  height: auto;
  padding: 0 10px 0 10px;
  .shiyu-page-container-blank{
    height: 100px;
  }
}
</style>
