<template>
  <div class="hello">
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    <CardList title="哈哈哈" :links="links" />
    <CardUser title="黑白的黒" :links="links2" />
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
    <div>dddddddd</div>
  </div>
</template>

<script>
import CardList from '@/components/Cards/CardList'
import CardUser from '@/components/Cards/CardUser'
export default {
  name: 'HelloWorld',
  components: { CardUser, CardList },
  props: {
  },
  data() {
    return {
      links: [
        {
          title: '信息',
          link: '/hello'
        },
        {
          title: '设置',
          link: '/'
        }
      ],
      links2: [
        {
          title: '我的信息',
          link: '/hello',
          iconClass: 'bi bi-person-square'
        },
        {
          title: '我的视频',
          link: '/',
          iconClass: 'bi bi-cast'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
