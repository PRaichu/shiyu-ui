<template>
  <div class="shiyu-container">
    <Sidebar/>
    <div class="shiyu-content">
      <TopNav/>
      <PageLayout/>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import PageLayout from "@/layouts/PageLayout";
import TopNav from "@/components/TopNav";
export default {
  name: "Layout",
  components: {
    TopNav,
    PageLayout,
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
.shiyu-container{
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}
.shiyu-content{
  width: 100%;
  height: auto;
  padding: 20px 30px 20px 30px;
  overflow-y: scroll;
}
</style>
