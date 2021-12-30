<template>
  <CardContainer :title="title">
    <template>
      <router-link
        v-for="(item, index) in links"
        :key="index"
        v-shiyu-waves
        :to="item.link"
        class="shiyu-cardList-list-item"
      >
        <span>{{ item.title }}</span>
      </router-link>
    </template>
  </CardContainer>
</template>

<script>
import CardContainer from '@/components/Cards/components/CardContainer'

export default {
  name: 'CardList',
  components: { CardContainer },
  props: {
    title: { type: String, default: '' },
    /**
     * links格式：
     * [ { title: '', link: '' } ]
     */
    links: { type: Array, default: () => { return [] } }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/css/theme/theme_handle";

.shiyu-cardList-list-item{
  display: block;
  padding: 10px 30px 10px 15px;
  @include font_color("font_color_base1");
}
.shiyu-cardList-list-item:hover{
  @include background_color("background_color_base2");
}
</style>
