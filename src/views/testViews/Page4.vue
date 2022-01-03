<template>
  <CardList title="Page4" :links="links" />
</template>

<script>
import CardList from '@/components/Cards/CardList'
export default {
  name: 'Page4',
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
