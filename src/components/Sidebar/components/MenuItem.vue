<template>
  <div class="shiyu-menuitem-box" :class="{'shiyu-hide': !sidebarIsOpen}">
    <div class="shiyu-menuitem-box-scroll">
      <div v-for="(menu, index) in menuItem" :key="index">
        <router-link
          v-shiyu-waves
          class="shiyu-menuitem"
          :class="{'shiyu-menuitem-activated': activatedFlag(index) || opened[index],
                   'shiyu-menuitem-radius': menu.isParent && (activatedFlag(index) || opened[index])}"
          :to="menu.link"
          @click.native="openMenu(index)"
        >
          <div class="shiyu-menuitem-logo">
            <i :class="menu.iconClass" />
            <span>{{ menu.title }}</span>
          </div>
          <i v-if="menu.isParent" class="el-icon-arrow-right" :class="{'el-icon-arrow-right-activated': activatedFlag(index) || opened[index]}" />
        </router-link>
        <div
          v-if="menu.isParent"
          ref="shiyu-menuitem-items"
          class="shiyu-menuitem-items"
        >
          <router-link
            v-for="(item, menuIndex) in menu.children"
            :key="menuIndex"
            v-shiyu-waves
            class="shiyu-menuitem shiyu-no-radius"
            :class="{'shiyu-menuitem-items-activated': childActivatedFlag(index, menuIndex)}"
            :to="item.link"
          >
            <div class="shiyu-menuitem-logo">
              <i :class="item.iconClass" />
              <span>{{ item.title }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MenuItem',
  components: {
  },
  props: {
    menuItem: { type: Array, default: () => { return [] } }
  },
  data() {
    return {
      activated: [],
      opened: [],
      menuOpen: false
    }
  },
  computed: {
    ...mapGetters({
      sidebarIsOpen: 'Setting/sidebarIsOpen'
    })
  },
  watch: {
    $route: {
      handler() {
        this.buildMenu(true)
      },
      deep: true
    },
    activated: {
      handler(value) {
        let refIndex = 0
        value.forEach((item, index) => {
          if (this.menuItem[index].isParent && !this.opened[index]) {
            this.$refs['shiyu-menuitem-items'][refIndex].style.height = '0px'
            for (const childIndex in this.activated[index]) {
              if (this.activated[index][childIndex]) {
                // 此处根据菜单高度调整 52=height+margin
                this.$refs['shiyu-menuitem-items'][refIndex].style.height = 52 * this.menuItem[index].children.length + 'px'
              }
            }
            refIndex++
          }
        })
      },
      immediate: true,
      deep: true
    }
  },
  mounted() {
    this.initMenuData()
    this.buildMenu()
  },
  methods: {
    buildMenu(isRoute = false) {
      const routePath = this.$route.path
      let menuPosition = [-1, -1]
      for (let i = 0; i < this.menuItem.length; i++) {
        if (this.menuItem[i].link === routePath) {
          menuPosition[0] = i
          break
        } else if (this.menuItem[i].isParent) {
          for (let j = 0; j < this.menuItem[i].children.length; j++) {
            if (this.menuItem[i].children[j].link === routePath) {
              menuPosition = [i, j]
              break
            }
          }
        }
      }
      this.activeMenu(menuPosition, isRoute)
    },
    initMenuData() {
      this.initActivatedData()
      this.menuItem.forEach(() => { this.opened.push(false) })
    },
    initActivatedData() {
      // TODO 2处splice范围待验证
      this.activated.splice(0, this.activated.length)
      for (const menuIndex in this.menuItem) {
        if (this.menuItem[menuIndex].isParent) {
          const child = []
          this.menuItem[menuIndex].children.forEach(() => { child.push(false) })
          this.activated.push(child)
        } else {
          this.activated.push(false)
        }
      }
    },
    activatedFlag(index) {
      if (this.menuItem[index].isParent) {
        for (const childIndex in this.activated[index]) {
          if (this.activated[index][childIndex]) {
            return true
          }
        }
      } else {
        return this.activated[index]
      }
      return false
    },
    childActivatedFlag(index, menuIndex) {
      if (typeof this.activated[index] === 'undefined') {
        return false
      } else if (typeof this.activated[index] === 'object') {
        return this.activated[index][menuIndex]
      }
    },
    activeMenu(menuPosition, isRoute = false) {
      this.initActivatedData()
      if (menuPosition[0] > -1 && menuPosition[1] === -1) {
        this.activated.splice(menuPosition[0], 1, true)
      } else if (menuPosition[0] > -1 && menuPosition[1] > -1) {
        const childActivated = []
        this.activated[menuPosition[0]].forEach(() => { childActivated.push(false) })
        childActivated.splice(menuPosition[1], 1, true)
        this.activated.splice(menuPosition[0], 1, childActivated)
      }
      if (!isRoute && menuPosition[1] === -1) {
        this.openMenu(menuPosition[0])
      } else if (isRoute && menuPosition[1] > -1) {
        this.openMenu(menuPosition[0])
      }
    },
    openMenu(index) {
      if (!this.menuItem[index].isParent) {
        return
      }
      this.opened.splice(index, 1, !this.opened[index])
      for (let i = 0; i < this.opened.length; i++) {
        if (i === index) {
          continue
        }
        this.opened.splice(i, 1, false)
      }
      let refIndex = 0
      for (let i = 0; i < this.menuItem.length; i++) {
        if (i === index) {
          break
        }
        if (this.menuItem[i].isParent) {
          refIndex++
        }
      }
      for (let i = 0; i < this.$refs['shiyu-menuitem-items'].length; i++) {
        if (i !== refIndex && this.$refs['shiyu-menuitem-items'][i].style.height !== '0px') {
          this.$refs['shiyu-menuitem-items'][i].style.height = '0px'
        }
      }
      if (this.$refs['shiyu-menuitem-items'][refIndex].style.height !== '0px') {
        this.$refs['shiyu-menuitem-items'][refIndex].style.height = '0px'
        this.menuOpen = false
      } else {
        // 此处根据菜单高度调整 52=height+margin
        this.$refs['shiyu-menuitem-items'][refIndex].style.height = 52 * this.menuItem[index].children.length + 'px'
        this.menuOpen = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/css/theme/theme_handle";

.shiyu-menuitem-box{
  height: 100%;
  overflow: hidden;
}
.shiyu-menuitem-box-scroll{
  height: 100%;
  padding: 0 10px 0 0;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.shiyu-menuitem{
  width: 100%;
  height: 50px;
  border-radius: 0 20px 20px 0;
  @include font_color("font_color_base1");
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  transition: all 0.5s ease;
  .shiyu-menuitem-logo{
    display: flex;
    align-items: center;
    align-content: center;
    i{
      font-size: 20px;
      margin: 0 12px 0 15px;
    }
    span{
      font-size: 16px;
    }
  }
  i{
    font-size: 14px;
    margin: 0 12px 0 12px;
  }
}
.shiyu-menuitem-activated{
  @include background_color("background_color_block1");
  i, span{
    @include font_color("font_color_base3")
  }
}
.shiyu-menuitem-radius{
  border-radius: 0 20px 0 0;
}
.el-icon-arrow-right{
  font-weight: bold;
  transition: all 0.5s ease;
  -moz-transition: all 0.5s ease; /* Firefox 4 */
  -webkit-transition: all 0.5s ease; /* Safari and Chrome */
  -o-transition: all 0.5s ease; /* Opera */
}
.el-icon-arrow-right-activated{
  transform: rotate(90deg);
}
.shiyu-menuitem-items{
  height: 0;
  @include background_color("background_color_base2");
  overflow: hidden;
  border-radius: 0 0 20px 0;
  transition: all 0.5s ease;
  -moz-transition: all 0.5s ease; /* Firefox 4 */
  -webkit-transition: all 0.5s ease; /* Safari and Chrome */
  -o-transition: all 0.5s ease; /* Opera */
}
.shiyu-menuitem-items-activated{
  @include background_color("background_color_elment");
  @include font_color("font_color_base3");
}
.shiyu-no-radius{
  border-radius: 0;
}
span {
  white-space: nowrap;
  overflow: hidden;
}
.shiyu-hide{
  .el-icon-arrow-right, span{
    display: none !important;
  }
}
.shiyu-hide:hover {
  .el-icon-arrow-right, span{
    display: inline !important;
  }
}
</style>
