<template>
  <div ref="shiyu-topNav-container" class="shiyu-topNav-container">
    <div class="shiyu-topNav">
      <div class="shiyu-topNav-search">
        <input type="text">
        <i class="bi bi-search" />
      </div>
      <div class="shiyu-topNav-right">
        <i v-shiyu-waves class="shiyu-topNav-theme bi bi-lightbulb" @click="changeTheme" />
        <div ref="shiyu-topNav-user" v-shiyu-waves class="shiyu-topNav-user" @click="cardUserOpen">
          <img :src="require('@/assets/logo.png')" alt="avatar">
          <div>
            <span class="shiyu-topNav-user-username">用户名</span>
            <span class="shiyu-topNav-user-mark">标识</span>
          </div>
        </div>
      </div>
    </div>
    <CardUser v-show="cardUserIsShow" ref="shiyu-topNav-cardUser" class="shiyu-topNav-cardUser" :title="title" :links="links" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CardUser from '@/components/Cards/CardUser'
export default {
  name: 'TopNav',
  components: { CardUser },
  props: {
    title: { type: String, default: '' },
    links: { type: Array, default: () => { return [] } }
  },
  data() {
    return {
      cardUserIsShow: false
    }
  },
  computed: {
    ...mapGetters({
      theme: 'Setting/theme',
      sidebarIsOpen: 'Setting/sidebarIsOpen'
    })
  },
  watch: {
    sidebarIsOpen(newValue) {
      // 260和75是侧边栏宽度，68为边框额外宽度
      const overWidth = newValue ? 260 + 68 : 75 + 68
      this.$refs['shiyu-topNav-container'].style.width = `calc(100% - ${overWidth}px)`
    }
  },
  mounted() {
    this.resetLocation()
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
    },
    resetLocation() {
      const userBox = this.$refs['shiyu-topNav-user'].getBoundingClientRect()
      this.$refs['shiyu-topNav-cardUser'].$el.style.right = document.body.offsetWidth - userBox.right - 38 + 'px'
      this.$refs['shiyu-topNav-cardUser'].$el.style.top = 10 + userBox.height + 'px'
    },
    cardUserOpen() {
      this.cardUserIsShow = true
      this.bindClick(this.$refs['shiyu-topNav-user'], this.$refs['shiyu-topNav-cardUser'].$el)
    },
    bindClick(btnEl, el) {
      const documentHandler = (e) => {
        if (el.contains(e.target) || btnEl.contains(e.target)) {
          return false
        }
        if (this.cardUserIsShow) {
          this.cardUserIsShow = false
          // 解除事件监听
          document.removeEventListener('click', el.__vueClickOutside__)
          delete el.__vueClickOutside__
        }
      }
      // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
      if (!el.__vueClickOutside__) {
        el.__vueClickOutside__ = documentHandler
        document.addEventListener('click', documentHandler)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/css/theme/theme_handle";

.shiyu-topNav-container{
  position: fixed;
  width: calc(100% - 328px);
  left: auto;
  right: 38px;
  transition: all 0.5s ease;
}
.shiyu-topNav{
  z-index: 998;
  width: calc(100% - 20px);
  height: 80px;
  margin-bottom: 20px;
  padding: 0 0 0 20px;
  overflow: hidden;
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
    height: 100%;
    overflow: hidden;
    .shiyu-topNav-theme{
      @include font_color("font_color_base4");
      font-weight: bold;
      font-size: 24px;
      cursor: pointer;
      height: 100%;
      line-height: 80px;
      text-align: center;
      padding: 0 5px 0 5px;
    }
    .shiyu-topNav-user{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 20px 0 0;
      height: 100%;
      -moz-user-select:none;/*火狐*/
      -webkit-user-select:none;/*webkit浏览器*/
      -ms-user-select:none;/*IE10*/
      user-select:none;
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
    .shiyu-topNav-user:hover{
      cursor: pointer;
    }
  }
}
.shiyu-topNav-cardUser{
  position: absolute;
  animation: cardUserOpen 0.3s ease;
  transform-origin: 100% 0;
}
@keyframes cardUserOpen {
  0% {
    opacity: 0.3;
    transform: scale(0.7, 0.7);
  }
  80% {
    opacity: 0.8;
    transform: scale(1.05, 1.05);
  }
  95% {
    opacity: 0.9;
    transform: scale(1.025, 1.025);
  }
  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
}
</style>
