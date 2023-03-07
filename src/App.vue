<template>
  <div id="app">
    <div class="main">
      <div class="sidebar">
        <router-link v-for="(item, i) in routes" :key="i" :to="item.path">{{item.name}}</router-link>
      </div>
      <div class="view" id="ex-r-area">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
  data () {
    return {
      routes: []
    }
  },
  created () {
    let routers: any = this.$router.options.routes
    this.routes = routers.map((el: routerType) => {
      return {
        path: el.path,
        name: el.text || el.name || el.path
      }
    })
  }
}
</script>

<style lang="scss">
@import './style/index.scss';
</style>
