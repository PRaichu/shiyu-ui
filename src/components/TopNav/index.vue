<template>
  <div class="shiyu-topNav">
    顶栏
  </div>
</template>

<script>
export default {
  name: 'TopNav'
}
</script>

<style lang="scss" scoped>
@import "/src/assets/css/theme/theme_handle";

.shiyu-topNav{
  z-index: 998;
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
  @include background_color("background_color_base1");
  border-radius: 20px;
  box-shadow: 0 0 15px themed("background_color_base1");
}
</style>
