<template>
  <div class="shiyu-container">
    <Sidebar />
    <div class="shiyu-content">
      <TopNav :title="user.username" :links="user.links" />
      <PageLayout />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import PageLayout from '@/layouts/PageLayout'
import TopNav from '@/components/TopNav'
import { mapGetters } from 'vuex'

export default {
  name: 'Layout',
  components: {
    TopNav,
    PageLayout,
    Sidebar
  },
  data() {
    return {
      user: {
        username: '',
        links: [
          {
            title: '我的信息',
            link: '/hello',
            iconClass: 'bi bi-person-square'
          },
          {
            title: '我的视频',
            link: '/',
            iconClass: 'bi bi-cast'
          },
          {
            title: '设置',
            link: '/',
            iconClass: 'bi bi-gear'
          }
        ]
      }

    }
  },
  computed: {
    ...mapGetters({
      theme: 'Setting/theme'
    })
  },
  watch: {
    theme() {
      this.setTheme()
    }
  },
  mounted() {
    this.setTheme()
  },
  methods: {
    setTheme() {
      window.document.documentElement.setAttribute('shiyu-theme', this.theme)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/css/theme/theme_handle";

.shiyu-container{
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  @include background_color("background_color_base2");
}
.shiyu-content{
  width: 100%;
  height: auto;
  padding: 20px 30px 20px 30px;
  overflow-y: auto;
}
</style>
