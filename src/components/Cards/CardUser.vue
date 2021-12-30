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
        <div class="shiyu-cardList-list-item-content">
          <div class="shiyu-cardList-list-item-icon">
            <i :class="item.iconClass" />
          </div>
          <span>{{ item.title }}</span>
        </div>
      </router-link>
      <router-link to="#" class="shiyu-logout">
        <div class="shiyu-logout-content">
          <span>退出登录</span>
          <i class="bi bi-box-arrow-right" />
        </div>
      </router-link>
    </template>
  </CardContainer>
</template>

<script>
import CardContainer from '@/components/Cards/components/CardContainer'

export default {
  name: 'CardUser',
  components: { CardContainer },
  props: {
    title: { type: String, default: '' },
    /**
     * links格式：
     * [ { title: '', link: '' } ]
     */
    links: { type: Array, default: () => { return [] } }
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/css/theme/theme_handle";

.shiyu-cardList-list-item{
  display: block;
  padding: 10px 15px 10px 10px;
  @include font_color("font_color_base1");
  .shiyu-cardList-list-item-content{
    display: flex;
    align-items: center;
    padding-right: 30px;
    .shiyu-cardList-list-item-icon{
      @include background_color("background_color_base2");
      padding: 5px;
      width: 30px;
      height: 30px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      i{
        @include font_color("background_color_block1");
        font-size: 16px;
      }
    }
  }
}
.shiyu-cardList-list-item:hover{
  @include background_color("background_color_base2");
}
.shiyu-logout{
  padding: 12px 0 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .shiyu-logout-content{
    @include font_color("font_color_base4");
    @include background_color("background_color_base2");
    font-size: 14px;
    border-radius: 10px;
    padding: 8px 12px 8px 12px;
    i{
      margin: 0 0 0 5px;
    }
  }
  .shiyu-logout-content:hover{
    @include font_color("font_color_base3");
    @include background_color("background_color_block1");
  }
}
</style>
