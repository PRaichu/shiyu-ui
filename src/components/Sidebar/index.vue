<template>
  <div class="shiyu-sidebar">
    <div class="shiyu-sidebar-top">
      <router-link to="/" class="shiyu-sidebar-top-logo">
        <img :src="logo" class="img-fluid" alt="logo">
        <span>时雨</span>
      </router-link>
      <div class="shiyu-sidebar-fixed" @click="sidebarOpen">
        <i :class="isOpen ? 'bi bi-circle' : 'bi bi-circle-fill'"/>
      </div>
    </div>
    <div class="shiyu-sidebar-scrollbar">
      <MenuItem :menu-item="menuItem"/>
    </div>
  </div>
</template>

<script>
import MenuItem from "@/components/Sidebar/components/MenuItem";
export default {
  name: 'Sidebar',
  props: {
    homeURL: { type: Object, default: () => ({ name: 'dashboard.home-1' }) },
    logo: { type: String, default: require('@/assets/logo.png') },
    horizontal: { type: Boolean, default: false },
    items: { type: Array },
    sidebarGroupTitle: { type: Boolean, default: true }
  },
  components: {
    MenuItem
  },
  mounted () {
  },
  methods: {
    sidebarOpen() {
      this.isOpen = !this.isOpen
    }
  },
  data () {
    return {
      // todo 边栏置顶问题 store
      isOpen: this.$store.state.sidebar.isOpen,
      menuItem: [
        {
          title: '个人中心',
          iconClass: 'el-icon-s-shop',
          link: '',
          isParent: true,
          children: [
            {
              title: '信息',
              iconClass: 'el-icon-s-shop',
              link: '/hello',
              isParent: false,
            },
            {
              title: '设置',
              iconClass: 'el-icon-s-shop',
              link: '/',
              isParent: false,
            }
          ]
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.shiyu-sidebar{
  z-index: 999;
  float: left;
  width: 260px;
  height: 100%;
  border: none;
  background-color: #ffffff;
  box-shadow: 1px 0 10px darkgrey;
  overflow: hidden;
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
        font-size: 24px;
      }
    }
    .shiyu-sidebar-fixed{
      width: 24px;
      height: 24px;
      border-radius: 100px;
      background-color: #92debf;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      i{
        font-size: 12px;
        font-weight: bolder;
      }
    }
    .shiyu-sidebar-fixed:hover{
      cursor: pointer;
      background-color: #92debf;
      color: #ffffff;
    }
  }
  .shiyu-sidebar-scrollbar{
    height: calc(100% - 100px);
    overflow: hidden;
  }
}
</style>
