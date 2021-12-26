<template>
  <div class="shiyu-menuitem-box">
    <div class="shiyu-menuitem-box-scroll">
      <div v-for="(menu, index) in menuItem" :key="index">
        <router-link class="shiyu-menuitem"
                     :class="{'shiyu-menuitem-activated': activated[index],
                 'shiyu-menuitem-radius': menu.isParent}"
                     :to="menu.link"
                     @click.native="activeMenu(index)">
          <div class="shiyu-menuitem-logo">
            <i :class="menu.iconClass"/>
            <span>{{ menu.title }}</span>
          </div>
          <i class="el-icon-arrow-right" :class="{'el-icon-arrow-right-activated': activated[index]}" v-if="menu.isParent"/>
        </router-link>
        <div ref="shiyu-menuitem-items" class="shiyu-menuitem-items" v-if="menu.isParent">
          <router-link class="shiyu-menuitem" v-for="(item, index) in menu.children" :key="index" :to="item.link">
            <div class="shiyu-menuitem-logo">
              <i :class="item.iconClass"/>
              <span>{{ item.title }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  components: {
  },
  props: {
    menuItem: {type: Array}
  },
  data() {
    return {
      activated: [],
    }
  },
  mounted() {
    this.menuItem.forEach(() => { this.activated.push(false) })
  },
  watch: {
    activated: {
      handler(value) {
        let refIndex = 0
        value.forEach((item, index) => {
          if (this.menuItem[index].isParent) {
            this.$refs["shiyu-menuitem-items"][refIndex].style.height = '0px'
            if (item) {
              // 此处根据菜单高度调整 52=height+margin
              this.$refs["shiyu-menuitem-items"][refIndex].style.height = 52 * this.menuItem[index].children.length + 'px'
            }
            refIndex++
          }
        })
      },
      immediate: true
    }
  },
  methods: {
    activeMenu(index) {
      let oldIndex
      for (let i = 0; i < this.activated.length; i++) {
        if (this.activated[i]) {
          oldIndex = i
          break
        }
      }
      if (oldIndex === index) {
        this.activated.splice(index, 1, false)
      } else {
        this.activated.forEach((item, index) => {
          if (item) {
            this.activated.splice(index, 1, false)
          }
        })
        this.activated.splice(index, 1, true)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.shiyu-menuitem-box{
  height: 100%;
  overflow: hidden;
}
.shiyu-menuitem-box-scroll{
  height: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
.shiyu-menuitem-box-scroll::-webkit-scrollbar {
  border-radius: 10px;
  width: 6px;
}
.shiyu-menuitem-box-scroll::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 2px;
}
.shiyu-menuitem-box-scroll::-webkit-scrollbar-thumb {
  background: rgba(110, 196, 200, 0.5);
  border-radius: 10px;
}
.shiyu-menuitem-box-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(110, 196, 200, 1);
}
.shiyu-menuitem{
  width: 100%;
  height: 50px;
  border-radius: 0 20px 20px 0;
  margin: 2px 0 0 0;
  color: #5e5e5e;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  .shiyu-menuitem-logo{
    display: flex;
    align-items: center;
    align-content: center;
    i{
      font-size: 24px;
      margin: 0 12px 0 12px;
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
  background-color: #a9cb6a;
}
.shiyu-menuitem-radius{
  border-radius: 0 20px 0 0;
}
.el-icon-arrow-right{
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
  background-color: #a1ef75;
  overflow: hidden;
  border-radius: 0 0 20px 0;
  transition: all 0.5s ease;
  -moz-transition: all 0.5s ease; /* Firefox 4 */
  -webkit-transition: all 0.5s ease; /* Safari and Chrome */
  -o-transition: all 0.5s ease; /* Opera */
}
</style>
