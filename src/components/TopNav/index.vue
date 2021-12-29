<template>
  <div class="shiyu-topNav">
    <div class="shiyu-topNav-search">
      <input type="text">
      <i class="bi bi-search" />
    </div>
    <div class="shiyu-topNav-right">
      <i class="shiyu-topNav-theme bi bi-lightbulb" @click="changeTheme" />
      <div class="shiyu-topNav-user">
        <img :src="require('@/assets/logo.png')" alt="avatar">
        <div>
          <span class="shiyu-topNav-user-username">用户名</span>
          <span class="shiyu-topNav-user-mark">标识</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'TopNav',
  computed: {
    ...mapGetters({
      theme: 'Setting/theme'
    })
  },
  methods: {
    ...mapActions({
      setTheme: 'Setting/setTheme'
    }),
    changeTheme() {
      if (this.theme === 'light') {
        this.setTheme('dark')
      } else {
        this.setTheme('light')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/css/theme/theme_handle";

.shiyu-topNav{
  z-index: 998;
  width: calc(100% - 40px);
  height: 60px;
  margin-bottom: 20px;
  padding: 10px 20px;
  @include background_color("background_color_base1");
  border-radius: 20px;
  @include theme_builder {
    box-shadow: 0 0 15px theme-get("shadow_color");
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  .shiyu-topNav-search{
    padding: 2px 10px 2px 10px;
    border-radius: 10px;
    height: 30px;
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    @include background_color("background_color_base2");
    input{
      background-color: transparent;
      border: none;
      outline: none;
      font-size: 16px;
      @include font_color("font_color_base1");
      flex: 1 auto;
    }
    i{
      @include font_color("font_color_base4")
    }
  }
  .shiyu-topNav-right{
    display: flex;
    justify-content: center;
    align-items: center;
    .shiyu-topNav-theme{
      @include font_color("font_color_base4");
      font-weight: bold;
      font-size: 24px;
      cursor: pointer;
    }
    .shiyu-topNav-user{
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 10px 0 10px;
      img{
        height: 50px;
        margin: 0 10px 0 10px;
      }
      div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .shiyu-topNav-user-username{
          @include font_color("font_color_base1");
          font-size: 16px;
        }
        .shiyu-topNav-user-mark{
          @include font_color("font_color_base1");
          font-size: 14px;
        }
      }
    }
  }
}
</style>
