<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="300px">
        <AsideMenu/>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AsideMenu from './components/AsideMenu.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    AsideMenu
  }
}
</script>

<style>
html, body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
