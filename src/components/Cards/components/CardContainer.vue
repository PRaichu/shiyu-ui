<template>
  <div class="shiyu-cardList">
    <div class="shiyu-cardList-title-box">
      <span class="shiyu-cardList-title">{{ title }}</span>
    </div>
    <div class="shiyu-cardList-list-box">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardContainer',
  props: {
    title: { type: String, default: '' }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/css/theme/theme_handle";

.shiyu-cardList{
  border-radius: 10px;
  overflow: hidden;
  width: auto;
  display: table;
  min-width: 150px;
  @include theme_builder {
    box-shadow: 2px 2px 15px theme-get("shadow_color");
  }
  .shiyu-cardList-title-box{
    padding: 10px;
    @include background_color("background_color_block1");
    span{
      @include font_color("font_color_base3");
    }
  }
  .shiyu-cardList-list-box{
    @include background_color("background_color_base1");
  }
}
</style>
