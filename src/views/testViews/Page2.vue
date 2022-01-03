<template>
  <CardList title="Page2" :links="links" />
</template>

<script>
import CardList from '@/components/Cards/CardList'
export default {
  name: 'Page2',
  components: {
    CardList
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
      ]
    }
  }
}
</script>

<style scoped>

</style>
