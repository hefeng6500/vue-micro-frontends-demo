<template>
  <div id="app">
    <router-link to="/foo">foo</router-link><br />
    <router-link to="/bar">bar</router-link><br />
    <router-link to="/page-constructor/page-list">first page-list</router-link><br />
    <router-link to="/page-constructor/page-details">first page-details</router-link><br />

    <router-link to="/user-management/role">second role</router-link><br />
    <router-link to="/user-management/user">first user</router-link><br />


    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
