<template>
  <div>
    <div ref="shiyu-sidebar" class="shiyu-sidebar" :class="{'shiyu-sidebar-hover': !sidebarIsOpen, 'shiyu-hide': !sidebarIsOpen}">
      <div class="shiyu-sidebar-top">
        <router-link to="/" class="shiyu-sidebar-top-logo">
          <img :src="logo" class="img-fluid" alt="logo">
          <span>时雨</span>
        </router-link>
        <div class="shiyu-sidebar-fixed" @click="sidebarChange(true)">
          <i :class="sidebarIsOpen ? 'bi bi-record2' : 'bi bi-record'" />
        </div>
      </div>
      <div class="shiyu-sidebar-scrollbar">
        <MenuItem :menu-item="sideBarMenu" />
      </div>
    </div>
    <div ref="shiyu-sidebar-mask" class="shiyu-sidebar-mask" />
  </div>
</template>

<script>
import MenuItem from '@/components/Sidebar/components/MenuItem'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  components: {
    MenuItem
  },
  props: {
    logo: { type: String, default: require('@/assets/logo.png') }
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      sideBarMenu: 'Config/sideBarMenu',
      sidebarIsOpen: 'Setting/sidebarIsOpen'
    })
  },
  watch: {
    pageRouter(newValue) {
    }
  },
  mounted() {
    this.sidebarChange()
  },
  methods: {
    ...mapActions({
      setSidebarIsOpen: 'Setting/setSidebarIsOpen'
    }),
    sidebarChange(changed = false) {
      if (changed) {
        this.setSidebarIsOpen(!this.sidebarIsOpen)
      }
      if (this.sidebarIsOpen) {
        this.$refs['shiyu-sidebar-mask'].style.width = '260px'
        this.$refs['shiyu-sidebar'].style.width = '260px'
      } else {
        this.$refs['shiyu-sidebar-mask'].style.width = '75px'
        this.$refs['shiyu-sidebar'].style.width = '75px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/css/theme/theme_handle";

.shiyu-sidebar-mask{
  height: 100%;
  width: 260px;
  background-color: transparent;
  transition: all 0.5s ease;
}
.shiyu-sidebar{
  position: absolute;
  z-index: 999;
  float: left;
  width: 260px;
  height: 100%;
  border: none;
  @include background_color("background_color_base1");
  @include theme_builder {
    box-shadow: 1px 0 15px theme-get("shadow_color");
  }
  overflow: hidden;
  transition: all 0.5s;
  flex-grow:0;
  flex-shrink:0;
  .shiyu-sidebar-top{
    height: 50px;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 20px 20px 0 0;
    .shiyu-sidebar-top-logo{
      height: 50px;
      display: flex;
      align-items: center;
      align-content: center;
      img{
        height: 45px;
        margin: 0 15px 0 15px;
      }
      span{
        @include font_color("font_color_base1");
        font-size: 24px;
      }
    }
    .shiyu-sidebar-fixed{
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      i{
        @include font_color("font_color_base4");
        font-size: 30px;
        font-weight: bolder;
      }
    }
    .shiyu-sidebar-fixed:hover{
      cursor: pointer;
    }
  }
  .shiyu-sidebar-scrollbar{
    height: calc(100% - 100px);
    overflow: hidden;
  }
}
span {
  white-space: nowrap;
  overflow: hidden;
}
.shiyu-sidebar-hover:hover{
  width: 260px !important;
}
.shiyu-hide{
  i, span{
    display: none !important;
  }
}
.shiyu-hide:hover {
  i, span{
    display: inline !important;
  }
}
</style>
